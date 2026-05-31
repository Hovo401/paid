import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST', 'primess@diotek.xyz'),
      port: this.configService.get<number>('SMTP_PORT', 587),
      secure: false,
      auth: {
        user: this.configService.get<string>('SMTP_USER', 'primess@diotek.xyz'),
        pass: this.configService.get<string>('SMTP_PASS', 'pass'),
      },
    });
  }

  async sendMail(
    to: string,
    subject: string,
    text: string,
    template?: string,
    context?: any,
  ) {
    try {
      let html: string | undefined;
      if (template) {
        const templatePath = join(
          __dirname,
          '../../../',
          'templates',
          `${template}.hbs`,
        );
        const source = fs.readFileSync(templatePath, 'utf-8');
        const compiledTemplate = handlebars.compile(source);
        html = compiledTemplate(context);
      }

      await this.transporter.sendMail({
        from: this.configService.get<string>(
          'SMTP_FROM',
          '"Diotek" <primess@diotek.xyz>',
        ),
        to,
        subject,
        text,
        html,
      });
      console.log(`Email sent to ${to}`);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error(
        `Failed to send email: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}

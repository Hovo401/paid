import { Controller, Get, Query } from '@nestjs/common';
import * as nodemailer from 'nodemailer';


export class Email{
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'localhost', 
      port: 25, 
      secure: false, 
   
    });
  }

 
  async sendTestMail(to?:string, subject?:string, text?:string) {
    try {
      await this.transporter.sendMail({
        from: '"diotek" <hovo@yourdomain.com>',
        to: "hovo.55.k.yan@gmail.com", 
        subject: 'Test Subject',
        text: 'This is a test email sent from Nest.js via Postfix!',
      });
      return { message: 'Email sent successfully!' };
    } catch (error) {
      console.error('Error sending email:', error);
      return { message: 'Failed to send email', error: error.message };
    }
  }
}
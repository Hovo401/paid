"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatter = void 0;
exports.dateForm = dateForm;
const formatter = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Yerevan',
    hour12: false,
});
exports.formatter = formatter;
function dateForm(date) {
    const parts = formatter.formatToParts(date);
    const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
    const dateString = `${map.year}/${map.month}/${map.day} ${map.hour}:${map.minute}  UTC+4`;
    return dateString;
}
//# sourceMappingURL=Date.js.map
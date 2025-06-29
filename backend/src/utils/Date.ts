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

function dateForm(date: Date | number) {
  const parts = formatter.formatToParts(date);
  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  const dateString = `${map.year}/${map.month}/${map.day} ${map.hour}:${map.minute}  UTC+4`;
  return dateString;
}

export { formatter, dateForm };

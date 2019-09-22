const MONTHS = [
  `JANUARY`,
  `FEBRUARY`,
  `MARCH`,
  `APRIL`,
  `MAY`,
  `JUNE`,
  `JULY`,
  `AUGUST`,
  `SEPTEMBER`,
  `OCTOBER`,
  `NOVEMBER`,
  `DECEMBER`
];

export const getCardDate = (value) => {
  let date = new Date(value);
  return date.getDate() + ` ` + MONTHS[date.getMonth()];
};

export const getCardTime = (value) => {
  let time = new Date(value)
    .toTimeString()
    .split(` `)[0]
    .split(`:`);
  return time[0] < 13 ? time[0] + `:` + time[1] + ` AM` : (time[0] % 12) + `:` + time[1] + ` PM`;
};

// EOF

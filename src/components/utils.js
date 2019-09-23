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

export const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

export const getCardDate = (timestamp) => {
  let date = new Date(timestamp);
  return date.getDate() + ` ` + MONTHS[date.getMonth()];
};

export const getCardTime = (timestamp) => {
  const time = new Date(timestamp);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return hours < 13 ? hours + `:` + minutes + ` AM` : (hours % 12) + `:` + minutes + ` PM`;
};

// EOF

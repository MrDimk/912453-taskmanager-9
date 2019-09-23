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

export const getCardDate = (value) => {
  let date = new Date(value);
  return date.getDate() + ` ` + MONTHS[date.getMonth()];
};

export const getCardTime = (value) => {
  const time = new Date(value);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return hours < 13 ? hours + `:` + minutes + ` AM` : (hours % 12) + `:` + minutes + ` PM`;
};

// EOF

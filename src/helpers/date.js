export const getDate = (dateString) => {
  const date = new Date(dateString);

  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day < 10) day = `0${day}`;
  if (month < 10) month = `0${month}`;

  return `${day}/${month}/${year}`;
};

export const getDay = (dateString) => {
  const date = new Date(dateString);

  return date.getDate();
};

export const getMonthYear = (date) => {
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Set',
    'Oct',
    'Nov',
    'Dec',
  ];

  return `${month[date.getMonth()]} ${date.getDate()}`;
};

export const getWeekday = (dateString) => {
  const date = new Date(dateString);

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return weekday[date.getDay()];
};

export const getWeekdayShort = (dateString) => {
  const date = new Date(dateString);

  const weekday = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];

  return weekday[date.getDay()];
};

export default {
  getDate,
  getDay,
  getMonthYear,
};

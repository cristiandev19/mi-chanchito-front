const addLeadingZeros = (n) => ((n <= 9) ? `0${n}` : n);

exports.formatInputDate = (date) => {
  const currentDatetime = new Date(date);
  const year = currentDatetime.getFullYear();
  const month = addLeadingZeros(currentDatetime.getMonth() + 1);
  const day = addLeadingZeros(currentDatetime.getDate());
  return `${year}-${month}-${day}`;
};

exports.formatDate = (date, sign = '-') => {
  const currentDatetime = new Date(date);
  const year = currentDatetime.getFullYear();
  const month = addLeadingZeros(currentDatetime.getMonth() + 1);
  const day = addLeadingZeros(currentDatetime.getDate());
  return `${day}${sign}${month}${sign}${year}`;
};

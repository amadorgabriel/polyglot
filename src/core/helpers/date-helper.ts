import dayjs from 'dayjs';

export const getFormattedDateTime = (
  value = 0,
  unit = 'days',
  format = 'MMM DD,YYYY'
) => {
  if (value === 0) {
    return dayjs().format(format);
  } else {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return dayjs().add(value, unit).format(format);
  }
};

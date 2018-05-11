export default function ordinalDateHelper(number) {
  const parsedNumber = Number(number);
  if (Number.isNaN(number) || (Math.round(parsedNumber) !== parsedNumber)) {
    return number;
  }

  const signal = (parsedNumber < 20) ? parsedNumber : Number((`${parsedNumber}`).slice(-1));

  switch (signal) {
    case 1:
      return `${parsedNumber}st`;
    case 2:
      return `${parsedNumber}nd`;
    case 3:
      return `${parsedNumber}rd`;
    default:
      return `${parsedNumber}th`;
  }
}

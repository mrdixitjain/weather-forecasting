import fromUnixTime from 'date-fns/fromUnixTime';
function formatTime(unix, offset, timeFormat = 'full') {
  console.log(unix, offset);
  const date = fromUnixTime(unix + offset).toUTCString();
  let hour = date.slice(17, 19);
  const minute = date.slice(20, 22);
  let amOrPm;

  if (hour > 11) {
    amOrPm = 'pm';
  } else {
    amOrPm = 'am';
  }

  // change 24hr to 12hr time
  if (hour > 12) {
    hour -= 12;
  }

  // change am times to 12hr time
  if (hour < 10 && amOrPm === 'am') {
    hour = hour.slice(1, 2);
  }

  // midnight formating
  if (hour === '0') {
    hour = 12;
  }

  // return just the hour
  if (timeFormat === 'hour') {
    return `${hour} ${amOrPm}`;
  }
  return `${hour}:${minute} ${amOrPm}`;
}

export {formatTime};
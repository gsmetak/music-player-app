const secondsToMinutesAndSeconds = (time: number) => {
  if (time === 0) {
    return '0:00';
  }

  const minutes = Math.floor(time / 60);
  const seconds = Math.round(time - minutes * 60);

  if (seconds < 10) {
    return `${minutes}:0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

export default secondsToMinutesAndSeconds;

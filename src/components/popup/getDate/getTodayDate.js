export function getTodayDate() {
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth =
    todayDate.getMonth() + 1 < 10
      ? "0" + (todayDate.getMonth() + 1)
      : todayDate.getMonth();
  const todayDay =
    todayDate.getUTCDate() < 10
      ? "0" + todayDate.getUTCDate()
      : todayDate.getUTCDate();

  return `${todayYear}-${todayMonth}-${todayDay}`;
}


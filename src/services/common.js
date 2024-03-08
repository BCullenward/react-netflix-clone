export function truncate(str, length) {
  if (!str) return "";

  return str.length > length ? str.slice(0, length) + "..." : str;
}

export function getYear(date) {
  // date in YYYY-MM-DD format
  if (!date) return "";

  return date.slice(0, 4);
}

export function getPage(value) {
  value = Number(value);
  if (!value || value < 1) {
    value = 1;
  }
  return value;
}

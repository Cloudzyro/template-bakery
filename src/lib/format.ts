import { hours } from "../data/site";

// 4.5 becomes "$4.50", 9 becomes "$9"
export const money = (n: number) => (Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`);

// "6:00" in the morning becomes "6 am", "3:00" in the afternoon becomes "3 pm"
function clock(t: string, suffix: string) {
  const [h, m] = t.split(":");
  return `${Number(h)}${m === "00" ? "" : `:${m}`} ${suffix}`;
}
export const am = (t: string) => clock(t, "am");
export const pm = (t: string) => clock(t, "pm");
export const hoursText = (h: (typeof hours)[number]) => (h.open ? `${am(h.open)} to ${pm(h.close)}` : "Closed");

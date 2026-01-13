/** Convertit un numéro en format wa.me */
export function toWaNumber(input: string): string {
  const digits = (input || "").replace(/[^\d]/g, "");
  if (digits.startsWith("00")) return digits.slice(2);
  if (digits.startsWith("0")) return "33" + digits.slice(1);
  return digits;
}

export function toTelHref(input: string): string {
  return (input || "").replace(/\s+/g, "");
}

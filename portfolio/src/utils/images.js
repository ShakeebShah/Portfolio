export function resolveImageSrc(src) {
  if (!src) return "";
  if (/^(https?:|data:|blob:)/.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`;
}

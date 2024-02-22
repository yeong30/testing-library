export function kebabcaseToTitlecase(text) {
  const textWithSpaces = text.replaceAll("-", " ");
  const textWithCaps = textWithSpaces.replace(/\b([a-z])/g, (match) => match.toUpperCase());
  return textWithCaps;
}

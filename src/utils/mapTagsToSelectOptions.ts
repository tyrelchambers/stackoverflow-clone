export const mapTagsToSelectOptions = (tags) => {
  return tags.map((t) => ({ label: t, value: t }));
};

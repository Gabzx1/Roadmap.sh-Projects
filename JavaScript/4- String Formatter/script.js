const clearText = (text) => text.trim();
const capitalize = (text) => {
  let cleaned = clearText(text);

  if (cleaned === '') {
    return '';
  }

  return cleaned[0].toUpperCase() + cleaned.slice(1).toLowerCase();
};

const formatDisplayName = (firstName, lastName) => `${capitalize(firstName)} ${capitalize(lastName)}`;

console.log(formatDisplayName('GABRIEL', 'REYES'));

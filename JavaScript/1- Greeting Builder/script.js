const formatName = (firstName, lastName) => `${firstName}, ${lastName}`;
const getGreeting = (timeOfDay) => timeOfDay;
const createGreeting = (firstName, lastName, timeOfDay) => {
  formatName(firstName, lastName);
  getGreeting(timeOfDay);

  return `Good ${timeOfDay}, ${firstName} ${lastName}`;
};

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));
console.log(createGreeting('Gabriel', 'Reyes', 'night'));

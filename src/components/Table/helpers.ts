import { faker } from '@faker-js/faker';

export const generateRows = (numRows: number) => {
  const rows: [number?, ...string[]][] = [];
  for (let i = 0; i < numRows; i++) {
    rows.push([
      i,
      faker.person.fullName(),
      faker.internet.email(),
      faker.commerce.department(),
      faker.person.jobTitle(),
      faker.helpers.arrayElement(['Verified', 'Unverified']),
      faker.helpers.arrayElement(['Active', 'Inactive']),
    ]);
    }
  return rows;
};


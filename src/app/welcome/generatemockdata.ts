// utils/generateMockData.ts
import {faker} from '@faker-js/faker'

interface Alias {
  firstname: string;
  lastname: string;
}

interface Person {
  firstname: string;
  lastname: string;
  dateofbirth: string;
  alias: Alias[];
}

const generateMockData = (numRecords: number): Person[] => {
  const data: Person[] = [];

  for (let i = 0; i < numRecords; i++) {
    const numAliases = faker.number.bigInt({ min: 0, max: 5 }) 
    const aliases: Alias[] = [];

    for (let j = 0; j < numAliases; j++) {
      aliases.push({
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
      });
    }

    data.push({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      dateofbirth: faker.date.birthdate().toISOString(),
      alias: aliases,
    });
  }

  return data;
};

export default generateMockData;
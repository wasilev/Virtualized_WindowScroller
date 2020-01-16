import faker from "faker";

const fakerData = (count = 1000) => {
  let data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      name: faker.name.findName(),
      email: faker.lorem.paragraph()
    });
  }
  console.log(data);
  return data;
};

export default fakerData;

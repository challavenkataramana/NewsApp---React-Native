import { faker } from "@faker-js/faker";

const GenerateFakeNews = (limit) => {
  const newsList = [];
  for (let i = 0; i < limit; i++) {
    const title = faker.lorem.sentence({ min: 3, max: 5 });
    const content = faker.lorem.paragraph();
    const date = faker.date.past().toLocaleDateString();
    const id = faker.string.uuid();
    const image = faker.image.urlPicsumPhotos({ width: 200, height: 100 });
    const author = faker.person.fullName();

    newsList.push({
      id,
      title,
      content,
      date,
      image,
      author,
    });
  }
  return newsList;
};

export default GenerateFakeNews;

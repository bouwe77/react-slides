import uuidv4 from "uuid/v4";

export default () => {
  const randomNr = Math.floor(Math.random() * 100);
  var url = `https://picsum.photos/100/?image=${randomNr}`;
  return { id: uuidv4(), url };
};

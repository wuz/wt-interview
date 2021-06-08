export const ROOMS_URL = `https://wetransfer.github.io/rooms.json`;
export const BOOK_URL = `https://wetransfer.github.io/bookRoom.json`;

export const get = async (url) => {
  try {
    return await fetch(url).then((res) => res.json());
  } catch (err) {
    console.error(err);
  }
};

export const post = async (url, data) => {
  try {
    return await fetch(url, data).then((res) => res.json());
  } catch (err) {
    console.error(err);
  }
};

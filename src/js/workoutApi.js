import { env } from "/env";

const idUrl = "https://exercisedb.p.rapidapi.com/exercises/exercise/";
const nameUrl = "https://exercisedb.p.rapidapi.com/exercises/name/";
const allUrl = "https://exercisedb.p.rapidapi.com/exercises?limit=1323";

const searchApi = async (type, param, workoutDay) => {
  let url;
  if (type === "id") {
    url = `${idUrl}${encodeURI(param)}`;
  } else if (type === "name") {
    url = `${nameUrl}${encodeURI(param)}`;
  } else if (type === "all") {
    url = `${allUrl}`;
  }

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": env.WORKOUT_API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.text();
  if (JSON.parse(result).hasOwnProperty("message")) {
    throw Error("Monthly Quota exceeded!");
  }
  if (workoutDay != null) {
    workoutDay.push(JSON.parse(result));
  }
  return JSON.parse(result);
};

export { searchApi };

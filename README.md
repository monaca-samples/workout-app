# Workout App

App that let's you monitor your weight, create a workout routine, search for exercises and add your routine to your calendar.

## Technologies used
- [Monaca](https://ja.monaca.io/)
- [Capacitor](https://capacitorjs.com/)
- [React](https://react.dev/)
- [Material UI for React](https://mui.com/material-ui/getting-started/)
- [Capacitor Calendar Plugin](https://github.com/sharryland-org/capacitor-calendar-plugin)
- [Firebase](https://firebase.google.com/)
- [RapidAPI ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)


## Setup
You have to setup environment variables for the project to work. Create an `env.js` file inside the `/src` folder with the following content.
``` javascript
const env = {
  "WORKOUT_API_KEY": "...",
  "FIREBASE_API_KEY": "...",
  "FIREBASE_AUTH_DOMAIN": "...",
  "FIREBASE_PROJECT_ID": "...",
  "FIREBASE_STORAGE_BUCKET": "...",
  "FIREBASE_MESSAGING_SENDER_ID": "...",
  "FIREBASE_APP_ID": "...",
}

export { env }
```
For the `WORKOUT_API_KEY` go to [RapidAPI ExerciseDB page](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/pricing) and subscribe for the Basic Plan (it is free) to acquire the API key.

For firebase related variables, when creating and configurig a project you will get the corresponing firebaseConfig with all information. 

## Demo

https://github.com/juan-serrano-soria/workout-app/assets/54719300/45ca68a6-185b-4b3f-a915-a622975524cb


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
You have to setup environment variables for the project to work. Edit [`env.js`](https://github.com/juan-serrano-soria/workout-app/blob/main/src/env.js) with the following content.
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
For the `WORKOUT_API_KEY` , [create a RapidAPI account](https://rapidapi.com/auth/sign-up), log in and go to [RapidAPI ExerciseDB page](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/pricing). Subscribe for the Basic Plan (it is free) to acquire the API key.

For firebase related variables, when creating and configuring a project you will get the corresponing firebaseConfig with all information.

## How to run
To run the application in web mode, use `monaca preview`. You can check how to install Monaca cli [here](https://en.docs.monaca.io/tutorials/monaca_cli).

Alternatively, you can run `yarn dev`

To run on mobile phone you can use Monaca Cloud to build the app.

Alternatively, to do it locally, you need to install Android Studio and/or Xcode, and then run the following commands:

`yarn cap add ios` or `yarn cap add android`

`yarn cap sync`

And finally you can open the project and run normally in your device / simulator with:

`yarn cap open ios` or `yarn cap open android`

## Blog Post
You can read more about this project and how it was developed [here](https://medium.com/p/9b59e694bc6b).


## Demo

https://github.com/juan-serrano-soria/workout-app/assets/54719300/45ca68a6-185b-4b3f-a915-a622975524cb


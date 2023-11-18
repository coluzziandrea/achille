# Achille

Flutter App For Fitness.


## Tech Stack
Following packages were used to build this project: 

- [Expo](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Firebase](https://firebase.google.com/)


## Build 

- yarn


## Firebase config
You have to register a project to firebase and then update the file 
> src/config/firebase.tsx 

accordingly.
If you own the rights to this repository, just execute 

> echo $FIREBASE_API_KEY

> echo $FIREBASE_PROJECT_ID

and update the file with these values.

## Run (Metro)
- npm install -g expo-cli (if you don't have expo installed)
- npx expo login
- Input your username & password
- npx expo start --tunnel

## Run (Local)
To run locally you'll need to setup either Android Studio or xCode.

### Android Studio 

Follow this [guide](https://docs.expo.dev/workflow/android-studio-emulator/) to setup Android Studio.
After this, you can run 

> npx expo start

And when the QR code will show, you can press 'a' to start the android emulator


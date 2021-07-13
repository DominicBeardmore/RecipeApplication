# Cook Up!
Cook Up! is an application for discovering and creating recipes. Once a user has begun cooking, Cook Up!'s auto play feature lets the user follow along to a recipe without having to touch their device.

## Running the Code

Cook Up! has been written in React Native using the Expo library. To run the code, from the root directory run the command
- npm install

This will install all the required dependencies including the Expo and required React Native libraries.

To have Cook Up! run on your phone you will need to install the Expo app from your app store. You may need to install the Expo CLI onto your machine and create an account. Log into the account on both your machine and phone.

To run the code:
- expo run

From the Expo app on your phone, Cook Up! will appear. Go ahead and download it onto your phone.

## Reading the code

All code for the app is inside the src folder. The MainApp.js file is the project's entry point. The src folder contains, four directories:
- components
  - All the presentational logic for displaying data to the user
- styles
  - Some of the styling that is frequently re-used throughout the app
- actions
  - All the events that update the app's state
- reducers
  - Contains the logic that updates the state. The reducers spot the actions being called and updates the section of state that the reducer is responsible for maintaining.
- listOfRecipes.json
  - This file contains all the recipes of the application. This acts as a mock database and a place for the app to call the recipes from.

## Demo Video: https://photos.app.goo.gl/emFvoVZmVqBMTQuo9
## Swagger Doc (incomplete): https://app.swaggerhub.com/apis/DominicBeardmore/RecipeApplication/
## Adobe XD artboards: https://drive.google.com/drive/folders/1LVncTh20aWnyF1NZAqGh54IQHctJBLvq?usp=sharing
- Screen desgins. App was fully designed before implementation

## Links
Expo CLI: https://docs.expo.io/get-started/installation/

// entry point of the application. All navigation between screens is managed here

import React, { Component } from 'react';
import { initStore } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { Recipe, AllRecipes, SocialMedia, Preview, FavouriteRecipes, YourRecipes, CreateRecipe } from './components/pages';
import { PreviewHeaderMol } from './components/HeaderBars/';
import CameraPage from "./components/pages/CameraPage";
import { ImageCarouselMol } from "./components/molecules/ImageCarouselMol";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colours } from './styles';
//https://icons.expo.fyi/ -- Icon reference

class Application extends Component {
  render() {
    const store = initStore();
    const Draw = createDrawerNavigator(); // highest level navigator

    const FollowTabs = createBottomTabNavigator(); // follow recipe mode tabs
    const RecipeStack = createStackNavigator();
    const FavouriteStack = createStackNavigator();

    const CreateStack = createStackNavigator(); // create recipe mode tabs

    function recipeStack({ navigation, route }) {
      if (route.state && route.state.index > 0) {
        navigation.setOptions({ tabBarVisible: false });
      } else {
        navigation.setOptions({ tabBarVisible: true });
      }

      return (
        <RecipeStack.Navigator
          initialRouteName="Recipes"
          screenOptions={ {
            headerStyle: {
              backgroundColor: Colours.ColourPalette.VibrantBlue,
            },
            headerTintColor: 'white',
          } }
        >
          <RecipeStack.Screen name="Recipes" component={ AllRecipes } />
          <RecipeStack.Screen
            name="Preview"
            component={ Preview }
            options={ ({ route }) => ({
              headerStyle: { height: 80, backgroundColor: Colours.ColourPalette.VibrantBlue },
              headerTitle: (props) => (
                <PreviewHeaderMol { ...props } title={ route.params.name } />
              ),
            }) }
          />
          <RecipeStack.Screen
            name="RecipeScreen"
            component={ Recipe }
            options={ ({ route }) => ({
              headerStyle: { height: 80, backgroundColor: Colours.ColourPalette.VibrantBlue },
              headerTitle: (props) => (
                <PreviewHeaderMol { ...props } title={ route.params.name } />

              ),
            }) }
          />
          <RecipeStack.Screen
            name="SocialMedia"
            component={ SocialMedia }
            options={ () => ({
              headerTitle: (props) => (
                <PreviewHeaderMol { ...props } title={ 'Bon Appetit' } />
              ),
            }) }
          />
        </RecipeStack.Navigator>
      );
    }

    function favouriteStack() {
      return (
        <FavouriteStack.Navigator
          screenOptions={ {
            headerStyle: {
              backgroundColor: Colours.ColourPalette.VibrantBlue,
            },
            headerTintColor: 'white',
          } }
        >
          <FavouriteStack.Screen
            name="Favourites"
            component={ FavouriteRecipes }
          />
        </FavouriteStack.Navigator>
      );
    }


    function createStack() {
      return (
        <CreateStack.Navigator
          screenOptions={ {
            headerStyle: {
              backgroundColor: Colours.ColourPalette.SmartBlue
            },
            headerTintColor: 'white',
          } }
        >
          <CreateStack.Screen name="YourRecipes" component={ YourRecipes } />
          <CreateStack.Screen options={ { title: "Create Recipe" } } name="Create" component={ CreateRecipe } />
          <CreateStack.Screen name="Camera" component={ CameraPage } />
          <CreateStack.Screen name="Carousel" component={ ImageCarouselMol } />
        </CreateStack.Navigator>
      );
    }

    function followStack() {
      return (
        <FollowTabs.Navigator
          screenOptions={ ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Recipes') {
                iconName = focused ? 'ios-list' : 'ios-list';
              } else if (route.name === 'Favourites') {
                iconName = focused ? 'heart' : 'heart-outline';
              }
              return <Ionicons name={ iconName } size={ size } color={ color } />;
            },
          }) }
          tabBarOptions={ {
            activeTintColor: Colours.ColourPalette.ContrastPink,
            inactiveTintColor: 'gray',
          } }
        >
          <FollowTabs.Screen name="Recipes" component={ recipeStack } />
          <FollowTabs.Screen name="Favourites" component={ favouriteStack } />
        </FollowTabs.Navigator>);
    }

    return (
      <Provider store={ store }>
        <NavigationContainer>
          <Draw.Navigator>
            <Draw.Screen
              name="FollowStack"
              component={ followStack }
              options={ { title: "Find Recipes" } }
            />
            <Draw.Screen
              name="CreateStack"
              options={ { title: "Your Recipes" } }
              component={ createStack }
            />
          </Draw.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default Application;

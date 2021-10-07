import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../../ClassComponent/HomePage';
import CartPage from '../../ClassComponent/CartPage';
import Spalash from '../../ClassComponent/Spalash';
// import FavoritView from '../../ClassComponent/FavoritView';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Spalash"
          component={Spalash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CartPage"
          component={CartPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const HomeStack = createNativeStackNavigator();
// function HomeRoute() {
//   return (
//     <HomeStack.Navigator screenOptions={{headerShown: false}}>
//       <HomeStack.Screen name="Home" component={HomePage} />
//     </HomeStack.Navigator>
//   );
// }

// const CartStack = createNativeStackNavigator();
// function CartRoute() {
//   return (
//     <CartStack.Navigator>
//       <CartStack.Screen name="Cart" component={CartPage} />
//     </CartStack.Navigator>
//   );
// }
export default Router;

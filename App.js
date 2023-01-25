import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import * as SecureStore from 'expo-secure-store';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider as AuthProvider } from './context/AuthContext'
import { Context as AuthContext } from './context/AuthContext'

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Login from './tabs/Login';
import Home from './Screens/Home/Home';
import Detalle from './Stack/Detalle/Detalle';
import HomeDos from './Screens/Home Dos/HomeDos';
import Assigned from './Screens/Assignied/Assigned';
import Orders from './Screens/Orders/Orders';
import VerTodo from './Screens/Assignied/progresschart/VerTodo';
import Ver from './Screens/Orders/verMas/Ver';
import Services from './Screens/ServiceRequirements/Services';
import ServiceTimer from './Screens/ServiceRequirements/ServiceTimer';
import Parts from './Screens/Adds/parts/Parts';
import Observations from './Screens/Adds/observations/Observations';
import External from './Screens/Adds/extrernal/External';
import Advices from './Screens/Adds/advices/Advices';

import Svg, {
  G,
  Path,
  Rect,
  Defs,
  ClipPath,
} from 'react-native-svg';


function Splash() {
  return (
    <View style={styles.splash}>
      <StatusBar translucent style='auto' />
      <Svg width="180" height="35" viewBox="0 0 145 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G clip-path="url(#clip0_1_42)">
          <Path d="M6.16744 4.39246L10.3305 18.3997L14.4316 4.39246H20.5693L12.754 25.7871H7.90276L-0.00450134 4.39246H6.16744Z" fill="white" />
          <Path d="M44.4324 25.7871V4.39246H50.271V20.6572H59.9114V25.7785L44.4324 25.7871Z" fill="white" />
          <Path d="M60.5098 14.9146C60.5195 12.2155 61.5468 9.62071 63.3842 7.65401C64.4081 6.56148 65.6481 5.69686 67.0243 5.11585C68.4006 4.53484 69.8826 4.25033 71.3748 4.28065C73.4307 4.28065 75.2116 4.71065 76.7176 5.57065C78.1459 6.34392 79.317 7.52213 80.0856 8.95906L75.6255 12.1518C75.4499 11.6727 75.1802 11.234 74.8326 10.8618C74.5156 10.5313 74.1457 10.2566 73.7384 10.0491C73.3467 9.84776 72.9287 9.703 72.4968 9.61911C72.0867 9.54107 71.6704 9.50077 71.253 9.49871C70.543 9.47457 69.8379 9.62508 69.1989 9.93718C68.5598 10.2493 68.0061 10.7135 67.5857 11.2897C67.1911 11.8352 66.8972 12.4476 66.7181 13.0978C66.5312 13.7492 66.4355 14.4236 66.4338 15.1016C66.4309 15.827 66.542 16.5483 66.763 17.2387C66.9687 17.8956 67.2932 18.5086 67.7204 19.0469C68.1397 19.5698 68.666 19.9958 69.2634 20.296C69.8995 20.6146 70.6023 20.7753 71.3128 20.7647C71.7262 20.7636 72.1382 20.7175 72.5417 20.6271C72.9648 20.5352 73.3728 20.3832 73.7534 20.1756C74.1445 19.9635 74.4989 19.6891 74.8027 19.3629C75.1248 19.0094 75.374 18.595 75.5357 18.1439L80.2951 21.0055C79.9669 21.7972 79.476 22.5101 78.8547 23.0975C78.197 23.7272 77.4501 24.2554 76.6385 24.6648C75.7919 25.0925 74.8971 25.4159 73.9735 25.6281C73.0631 25.8452 72.1309 25.9563 71.1953 25.9591C69.7007 25.9772 68.2215 25.653 66.8698 25.011C65.5909 24.4008 64.4419 23.5464 63.4868 22.4955C62.5418 21.4573 61.7955 20.2524 61.2856 18.9415C60.7764 17.6606 60.5131 16.2942 60.5098 14.9146Z" fill="white" />
          <Path d="M87.5462 4.39246H92.8762L100.241 25.7785H94.3123L93.03 21.5925L90.2005 12.5625L87.371 21.5925L86.1122 25.7785H80.1497L87.5462 4.39246Z" fill="white" />
          <Path d="M107.844 15.2758V25.7871H102.006V4.39246H106.558L115.091 15.2672V4.39246H120.93V25.7785H116.288L107.844 15.2758Z" fill="white" />
          <Path d="M38.7905 17.3634C38.5404 16.8345 38.5981 16.4798 38.9208 16.0111C43.2356 9.72016 39.1345 0.771848 31.6056 0.0236469C31.3918 0.00429686 31.1781 0.01075 30.7678 0C31.426 1.37385 32.0372 2.6273 32.6314 3.88935C33.2013 5.10625 33.7654 6.32459 34.3239 7.54436C34.8069 8.60001 34.6146 9.43421 33.5973 9.96311C32.0629 10.76 30.4957 11.4925 28.8957 12.1604C27.8656 12.5904 27.0877 12.1841 26.6005 11.1349C25.5747 8.92323 24.5517 6.70944 23.5316 4.4935C23.4055 4.2226 23.2687 3.95601 23.0914 3.59266C22.2765 4.61833 21.6713 5.79605 21.3108 7.05801C20.9502 8.31997 20.8414 9.64122 20.9906 10.9457C21.2244 13.3135 22.2688 15.526 23.9451 17.2046C25.6214 18.8832 27.8255 19.9235 30.1801 20.1477C30.3964 20.1498 30.6067 20.2194 30.782 20.3469C30.9573 20.4743 31.089 20.6534 31.1589 20.8593C32.3664 23.5361 31.986 23.2759 33.2404 25.9914C33.4926 25.8882 43.0711 25.7764 43.2848 25.6882" fill="white" />
          <Path d="M144.237 11.1779C143.736 9.88762 143.001 8.70273 142.068 7.68412C141.114 6.64816 139.967 5.80973 138.693 5.21592C137.314 4.5787 135.811 4.25918 134.293 4.28066C132.793 4.26348 131.306 4.56687 129.931 5.17077C128.643 5.73467 127.473 6.54186 126.486 7.54867C125.521 8.53883 124.754 9.70676 124.227 10.9887C123.692 12.2771 123.416 13.6599 123.417 15.0565C123.417 16.4396 123.682 17.8097 124.197 19.092C124.703 20.3787 125.444 21.5587 126.382 22.5708C127.34 23.6036 128.488 24.4397 129.762 25.0325C131.142 25.669 132.645 25.9878 134.163 25.9656C135.662 25.9818 137.147 25.6738 138.518 25.0626C139.799 24.4897 140.959 23.6769 141.938 22.6675C142.896 21.6741 143.658 20.5068 144.184 19.2275C144.72 17.9455 144.996 16.568 144.994 15.1769C144.993 13.8079 144.736 12.4513 144.237 11.1779ZM137.612 21.0464H130.786L127.367 15.0952L130.786 9.14183H137.625L141.044 15.0952L137.612 21.0464Z" fill="white" />
        </G>
        <Defs>
          <ClipPath id="clip0_1_42">
            <Rect width="180" height="35" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
}

function SignInScreen() {
  const [email, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      < Login />
    </View>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#1C1B1B',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
});



const AuthStack = createStackNavigator();

function AuthFlow() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
    </AuthStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function HomeFlow() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#2B83F2',
        tabBarInactiveTintColor: '#2B83F2',
        tabBarActiveBackgroundColor: '#FDFDFD',
        tabBarInactiveBackgroundColor: '#FDFDFD',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? "home" : 'home-outline';
              break;
            case 'HomeDos':
              iconName = focused ? "home" : 'home-outline';
              break;
            case 'Orders':
              iconName = focused ? 'checkbox' : 'checkmark-outline';
              break;
            case 'Assigned':
              iconName = focused ? 'skull' : 'skull-outline';
              break;
            case 'Services':
              iconName = focused ? 'skull' : 'skull-outline';
              break;
          }
          return (
            <Ionicons name={iconName} size={25} color="#2B83F2" />
          );
        },
      })}
    >



      {/* {state.isLoading ? ( */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      {/* ) : state.userToken === null ?( */}
      {/* <> */}
      <Tab.Screen
        name="HomeDos"
        component={HomeDos}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Assigned"
        component={Assigned}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          headerShown: false,
        }}
      />
      {/* </>
      ) :  */}
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

function App() {

  const { state, restoreToken } = React.useContext(AuthContext);
  const [userType, setUserType] = useState("");

  const bootstrapAsync = async () => {
    let userToken;
    let userRole;
    userToken = await SecureStore.getItemAsync('userToken');
    userRole = await SecureStore.getItemAsync('role');
    restoreToken({ userToken });
    setUserType(userRole);
  };

  useEffect(() => {
    bootstrapAsync();
  }, []
  );

  useEffect(() => {
    console.log('User Role: ' + userType);
  }, [userType]

  );

  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.isLoading ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash"
            component={Splash}
          />
        ) : state.userToken === null ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Auth"
              component={AuthFlow}
            />
          </>
        ) : null}
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeFlow"
          component={HomeFlow}
        />
        <Stack.Screen
          name="Detalle"
          component={Detalle}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ver"
          component={Ver}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerTodo"
          component={VerTodo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ServiceTimer"
          component={ServiceTimer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Parts"
          component={Parts}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Observations"
          component={Observations}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="External"
          component={External}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Advices"
          component={Advices}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="HomeDos"
          component={HomeDos}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Assigned"
          component={Assigned}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        /> */}

        {/* {state.isLoading ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash"
            component={Splash}
          />
        ) : state.userToken === null ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Auth"
              component={AuthFlow}
            />
          </>
        ) : state.userToken !== null && userType !== "ADMIN" ? (
          <Stack.Screen
            name="HomeDos"
            component={HomeDos}
            options={{
              headerShown: false,
            }}
          />
        ) : state.userToken == null && userType == "ASESOR" ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        ) : null

        }
        <Stack.Screen
          name="HomeFlow"
          component={HomeFlow}
          options={{ headerShown: false }}
        />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
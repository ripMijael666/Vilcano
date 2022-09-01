import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as SecureStore from 'expo-secure-store';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider as AuthProvider } from './context/AuthContext'
import { Context as AuthContext } from './context/AuthContext'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Login from './tabs/Login';
import Home from './Screens/Home';
import Detalle from './Stack/Detalle';
import HomeDos from './Screens/HomeDos';





function Splash() {
  return (
    <View
      style={styles.splash}
    >
      <Image
        source={require('./assets/Logo.png')}
      />
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
              iconName = focused
                ? 'ios-checkbox'
                : 'ios-checkbox-outline';
              break;
            case 'HomeDos':
              iconName = focused
                ? 'ios-checkbox'
                : 'ios-checkbox-outline';
              break;
          }
          return (
            <MaterialIcons name="home-filled" size={30} color="#2B83F2" />
          );
        },
      })}

    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HomeDos"
        component={HomeDos}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

function App() {

  const { state, restoreToken } = React.useContext(AuthContext);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
      }
      restoreToken({ userToken });
    };
    bootstrapAsync();
  }, []
  );

  return (
    <NavigationContainer>

      <Stack.Navigator>
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
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeFlow"
            component={HomeFlow}
          />
        )}

        <Stack.Screen
          name="Detalle"
          component={Detalle}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1
        }}
      >
        <AuthProvider>
          <App />
        </AuthProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
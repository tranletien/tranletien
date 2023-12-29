import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login.js';
import Cart from '../components/Cart.js';
const Stack = createNativeStackNavigator();

function RouterPublic() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
export default RouterPublic;
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { PlaygroundScreen } from "../screens/PlaygroundScreen";
import { Navigation } from "./Navigation";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName={Navigation.Home}>
            <Stack.Screen name={Navigation.Home} component={HomeScreen} options={{ title: 'Home' }}/>
            <Stack.Screen name={Navigation.Playground} component={PlaygroundScreen} />
        </Stack.Navigator>
    )
}
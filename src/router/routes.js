import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../views/SignIn";



const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />
            {/* <Stack.Screen
                name="DashBoard"
                component={}
                options={{headerShown: false}}
                
            />
            <Stack.Screen
                name="SignUp "
                component={}
                options={{
                    title: 'Configurações',
                    headerStyle: {
                      backgroundColor: '#0B72F3',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
            /> */}
        </Stack.Navigator>
    )
}

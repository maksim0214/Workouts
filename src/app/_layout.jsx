import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text } from "react-native-web";



export default function HomeLayout() {
    const params = useLocalSearchParams()
    console.log(params);
    const options = {
        // title: params.name,
        title: 'AllExercises',
        headerStyle: {
            backgroundColor: '#eb7456',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }
    return (
        <Stack style={style}>
            <Stack.Screen name='index' options={options} />
        </Stack>
    );
}

const style = {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
}
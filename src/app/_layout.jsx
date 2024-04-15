import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text } from "react-native-web";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'



export default function HomeLayout() {
    const queryClient = new QueryClient()
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
        <QueryClientProvider>
            <Stack style={style}>
                <Stack.Screen name='index' options={options} />
            </Stack>
        </QueryClientProvider>
    );
}

const style = {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
}
// import "@expo/metro-runtime";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ExerciseListItem from '../components/ExerciseListItem.jsx'
// import exercises from '../../assets/data/exercises.json'
import { request, gql } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator } from 'react-native-web';
import client from '../graphqlClient.js'


// const url = 'https://mahlamaki.us-east-a.ibm.stepzen.net/api/Exercises/graphql'
const exercisesQuery = gql`
  query exercises($muscle: String, $name:String) {
    exercises(muscle: $muscle, name: $name) {
      name
      muscle
      equipment
    }
}`

// export default function ExercisesScreen() {
export default function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['exercises'],
    // queryFn: async () => {
      // return client.request({
          // url,
          // document:exercisesQuery,
          // exercisesQuery
          // requestHeaders: {
          //   'Authorization': 'apikey mahlamaki::local.net+1000::344f363981814ef8e13bb559130c43c6c453fe0aa6742fd6ad92269c2b204d9b'
          // }
      // })
      queryFn:()=> client.request(exercisesQuery)
  })

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;
  console.log('index/data: ', data)
  return (
    <View style={styles.body}>
      <StatusBar style="light" hidden={false} translucent={true} />
      <FlatList
        // data={exercises}
        data={data?.exercises}
        contentContainerStyle={{ gap: 10 }}
        renderItem={ExerciseListItem}
        keyExtractor={(item, index) => item.name + index}
      // renderItem={({ item }) => <ExerciseListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    // backgroundColor: 'gainsboro',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    // paddingTop: 70,
  }
});

// import "@expo/metro-runtime";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, FlatList } from 'react-native';
import ExerciseListItem from './src/components/ExerciseListItem.jsx'
import exercises from './assets/data/exercises.json'



export default function App() {
  return (
    <View style={styles.body}>
      {/* <StatusBar style="light" hidden={false} translucent={true} /> */}
      <Text>HMR test123</Text>
      <FlatList
        data={exercises}
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
    flex: 1,
    backgroundColor: 'gainsboro',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 70,

  }
});

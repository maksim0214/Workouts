import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json'

export default function App() {
  // console.log(exercises[0]);
  const exercise = exercises[0]
  return (
    <View style={styles.body}>
      <View style={styles.exercisesContainer}>
        <StatusBar style="light" hidden={false} translucent={true} />
        <Text style={styles.exercisesName}>{exercise.name}</Text>
        <Text style={styles.exercisesSubtitle}>{exercise.muscle.toUpperCase()}</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'gainsboro',
    // alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  exercisesContainer:{
    backgroundColor:'white',
    padding:10,
    borderRadius:10,
  },
  exercisesName: {
    fontSize: 36,
    color: 'black'
  },
  exercisesSubtitle: {
    fontSize: 20,
    color: 'grey'
  },
});

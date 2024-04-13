import { StyleSheet, Text, View, Pressable } from 'react-native';
import {Link} from 'expo-router'

export default function ExerciseListItem({ item }) {
  return (
    <Link href={`/${item.name}`} asChild>
      <Pressable  style={styles.exercisesContainer}>
        <Text style={styles.exercisesName}>{item.name}</Text>
        {/* <Text style={styles.exercisesName}>{item.type}</Text> */}
        {/* <Text style={styles.exercisesName}>{item.type + key}</Text> */}
        {/* <Text style={styles.exercisesName}>{Object.entries(item)}</Text> */}
        <Text style={styles.exercisesSubtitle}>{item.muscle} | {item.equipment}</Text>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  exercisesContainer: {
    backgroundColor: 'ghostWhite',
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal:2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 14,
  },
  exercisesName: {
    fontSize: 20,
    color: 'black',
    // display: inline,
  },
  exercisesSubtitle: {
    fontSize: 16,
    color: 'grey',
    textTransform: 'capitalize',
  },
});

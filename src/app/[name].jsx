import { View, Text, ScrollView, Animated } from "react-native-web";
import { useLocalSearchParams, Stack } from 'expo-router'
// import exercises from '../../assets/data/exercises.json'
import { gql } from 'graphql-request'
import graphqlClient from '../graphqlClient'
import { useQuery } from '@tanstack/react-query'
import { useState } from "react";

const exercisesDetailQuery = gql`
  query exercises($name:String) {
    exercises(name: $name) {
      name
      type
      muscle
      equipment
      difficulty
      instructions
    }
  }`

export default function Exercise() {
  // const params = useLocalSearchParams()
  // const exercise = exercises.find(exercise => (
    //   exercise.name === params.name
    // ))

  const [isExpanded, setExpanded] = useState(false)
  const { name } = useLocalSearchParams()

  const { data, isLoading, error } = useQuery({
    queryKey: ['exercises', name],
    queryFn: () => graphqlClient.request(exercisesDetailQuery,{name})
  })
  
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Something went wrong...</p>
  
  let exercise = data.exercises[0]
  // console.log('exercisesDetail:', data);

  const StackScreenOptions = {
    // title: exercise.name,
    title: exercise.name,
    headerStyle: {
      backgroundColor: '#83b2dd',
    }
  }
  const styles = {
    container: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      marginVertical: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    value: {
      fontSize: 16,
      marginBottom: 10,
    },
    instructions: {
      fontSize: 16,
      lineHeight: 22,

      // height: isExpanded ? 120 : 150, // 初始高度和最大高度
      // overflow: 'hidden',
    },
    seeMore: {
      alignSelf: 'center',
      fontWeight: 600,
    }

  };
  if (!exercise)
    return (
      <View>
        no data matched:the params is {params.name}{exercise}{JSON.stringify(params)}
      </View>
    )
  else return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={StackScreenOptions} />
      <Text style={styles.title}>{exercise.name}</Text>
      <Text style={styles.label}>Type:</Text>
      <Text style={styles.value}>{exercise.type}</Text>
      <Text style={styles.label}>Muscle:</Text>
      <Text style={styles.value}>{exercise.muscle}</Text>
      <Text style={styles.label}>Equipment:</Text>
      <Text style={styles.value}>{exercise.equipment}</Text>
      <Text style={styles.label}>Difficulty:</Text>
      <Text style={styles.value}>{exercise.difficulty}</Text>
      <Text style={styles.label}>Instructions:</Text>
      <Animated.View>
        <Text style={styles.instructions} numberOfLines={isExpanded ? 0 : 5}>{exercise.instructions}</Text>
      </Animated.View>
      <br></br>
      <Text style={styles.seeMore} onPress={() => setExpanded(!isExpanded)}>{isExpanded ? 'See Less' : 'See More'}</Text>
      {/* <Text style={styles.instructions} >{exercise.instructions}</Text> */}
    </ScrollView>
  );
};


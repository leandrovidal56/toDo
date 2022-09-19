import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ItemWrapper } from './ItemWrapper';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function TasksList({ tasks, toggleTaskDone, removeTask }: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <View style={styles.container}>
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => toggleTaskDone(item.id)}
              >
                <View 
                  testID={`marker-${index}`}
                  style={item.done ? styles.taskMarkerDone : styles.taskMarker }
                >
                  { item.done && (
                    <Icon 
                      name="check"
                      size={12}
                      color="#FFF"
                    />
                  )}
                </View>
                <Text 
                  style={item.done ? styles.taskTextDone : styles.taskText }
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                testID={`trash-${index}`}
                style={{ paddingHorizontal: 24 }}
                onPress={() => removeTask(item.id)}
                >
                <Icon 
                  name="trash-can-outline" 
                  size={25} 
                  color="#808080"  
                  />
              </TouchableOpacity>
            </View>
          </ItemWrapper>
        )
      }}
      style={{
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4EA8DE',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskText: {
    color: '#666',
  },
  taskMarkerDone: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#5E60CE',
    marginRight: 15,
    alignItems: 'center',
    backgroundColor: '#5E60CE',
    justifyContent: 'center'
  },
  taskTextDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
  }
})
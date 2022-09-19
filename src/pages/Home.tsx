import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header, Resume, Task, TasksList, TodoInput } from '../components/index'

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    
    setTasks(oldTasks => [...oldTasks, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({...task}))

    const foundItem = updatedTasks.find(item => item.id === id);

    if(!foundItem)
    return;

    foundItem.done = !foundItem.done;
    setTasks(updatedTasks);
  }

  const doneComplete = tasks.filter(item => item.done === true);
  
  function handleRemoveTask(id: number) {
    const updateTasks = tasks.filter(task => task.id !== id);

    setTasks(updateTasks);
  }

  return (
    <View style={styles.container}>
        <Header  />
        <TodoInput addTask={handleAddTask} />
        <Resume create={tasks.length} finished={doneComplete.length}/>
      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#454545',
    alignItems: 'center'
  },
})
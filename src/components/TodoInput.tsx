import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  async function handleAddNewTask() {
    if (!task) 
    return;

    addTask(task);
    setTask('');

  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input} 
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#B2B2B2"
        returnKeyType="send"
        selectionColor="#666666"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <Icon 
          name="pluscircleo" 
          size={20} 
          color="#fff"  
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    width: 327,
  },
  input: {
    flex: 1,
    height: 52,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 6,
    borderRightWidth: 1,
    borderRightColor: '#EBEBEB',
    color: '#666666'
  },
  addButton: {
    backgroundColor: '#1E6F9F',
    height: 52,
    width: 52,
    marginLeft: 4,
    borderRadius: 6,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
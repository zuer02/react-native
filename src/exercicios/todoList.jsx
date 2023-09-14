import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, TextInput, Keyboard, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Task from 'C:/Users/josue/OneDrive/Documentos/desMobile/zap2/components/Task.js';



function HomeScreen({ navigation }) {
    const Stack = createNativeStackNavigator();

    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleaddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask('');
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Bom dia</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Details')} style={styles.navigateButton}>
                    <Text style={styles.navigateText}>Reflexão</Text>
                </TouchableOpacity>
                
            </View>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Tarefas de hoje</Text>
                <View style={styles.items}>
                    {/* onde as tasks vao ficar */}
                    {
                        taskItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                    <Task text={item} />
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={"Escreva uma task"} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleaddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Você terminou todas as tasks? reflita.</Text>
      </View>
    );
  }

export default function ToDolist() {
    const Stack = createNativeStackNavigator();

    
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Lista de tarefas' }}/>
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5DC'
    },
    header: {
        flex: 1,
        backgroundColor: '#004225',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    headerText:{
        fontSize: 24,
        color: '#F5F5DC',
    },
    tasksWrapper: {
        flex: 9,
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTtile: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 70,
        backgroundColor: '#FFCF9D',
        borderColor: '#FFB000',
        borderWidth: 1,
        width: 250
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFB000',
        borderWidth: 1,
    },
    addText: {},
    navigateButton: {
        width: 60,
        height: 20,
        borderRadius: 60,
        backgroundColor: '#FFCF9D',
        borderWidth: 1,
        alignItems: 'center',
    },
    navigateText: {
        fontSize: 11,
        color: '#000',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
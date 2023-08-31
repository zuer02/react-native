import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default function State() {
  const [value, setValue] = useState(0);
  const [texto, setTexto] = useState('');

  const addOne = () => {
    setValue(value + 1);
    console.log(value)
  };
  const escreve = (d) =>{
    setTexto(d);
  }


  let count = 0;

  const setCount = () => {
    count = count + 1;
    console.log(count);
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text>contador</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>state : {value}</Text>
        <Text style={styles.valueText}>let : {count}</Text>
      </View>
      <View style={{ margin: "10px", gap: "10px" }}>
        <Button title="let" onPress={setCount} />
        <Button title="state" onPress={addOne} />
        <TextInput onChange={(d) => escreve(d.target.value)}></TextInput>
        <Text>{texto}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  valueContainer: {
    marginVertical: 20,
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
  },
  valueText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

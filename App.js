import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import CalculadoraIMC from "./src/exercicios/calculadoraIMC";
import Calculadora from "./src/exercicios/calculadora";
import State from "./src/exercicios/useState";

export default function App() {
    return(
    <View style={styles.container}>
    {/* <CalculadoraIMC/> */}
        {/* <Calculadora/> */}
        <State/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});
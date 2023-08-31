import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

export default function CalculadoraIMC() {
    const [peso, setPeso] = useState("");
    const [altura, SetAltura] = useState("");
    const [mensagem, setMensagem] = useState("");

    function calculaIMC() {
        const alt = altura / 100;
        const imc = peso / (alt * alt);
        if (imc < 18.5) {
            setMensagem('Abaixo do peso. IMC: '+imc.toFixed(2));
        } else if (imc >= 18.5 && imc < 24.9) {
            setMensagem('Normal. IMC: '+imc.toFixed(2));
        } else if (imc >= 24.9 && imc < 29.9) {
            setMensagem('Sobrepeso. IMC: '+imc.toFixed(2));
        } else if (imc >= 29.9 && imc < 39.9) {
            setMensagem('Obesidade. IMC: '+imc.toFixed(2));
        } else {
            setMensagem('Obesidade Grave. IMC: '+imc.toFixed(2));
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CALCULADORA IMC</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    value={peso}
                    onChangeText={(value) => setPeso(value)}
                    placeholder="Peso (em Kg)"
                />
                <TextInput
                    style={styles.input}
                    value={altura}
                    onChangeText={(value) => SetAltura(value)}
                    placeholder="Altura (em cm)"
                />
                <TouchableOpacity style={styles.button} onPress={calculaIMC}>
                    <Text style={styles.buttonText}>CALCULAR</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.imcText}>{mensagem}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#777777",
    },
    title: {
        fontSize: 50,
        marginBottom: 20,
    },
    form: {
        width: 300,
        alignItems: "center",
    },
    input: {
        width: "100%",
        height: 46,
        marginBottom: 12,
        backgroundColor: "#000000",
        borderRadius: 6,
        fontSize: 18,
        paddingHorizontal: 10,
        color: "#FFFFFF",
    },
    button: {
        width: "100%",
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "#007bff",
        marginTop: 10,
    },
    buttonText: {
        fontWeight: "bold",
        color: "#fff",
    },
    imcText: {
        margin: 10,
    },
});
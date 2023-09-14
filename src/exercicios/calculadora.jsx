import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Calculadora(){
    const [valorTela, setValorTela] = useState('');
    const [resultado, setResultado] = useState(0);
    const [acumulador, setAcumulador] = useState(0);
    const [operado, setOperado] = useState(false);


    const Tela = (valor, res) =>{
        return(
            <View style={styles.tela}>
                <Text style={styles.telaOper}>{valor}</Text>
                <Text style={styles.telaRes}>{res}</Text>
            </View>
        )
    }

    const Btn=(label, onClick)=>{
        return(
            <TouchableOpacity style={styles.Btn} onPress={onClick}>{label}</TouchableOpacity>
        )
    }

    
    const addDigitoTela=(d)=>{
        if((d=='+' || d=='-' || d=='*' || d=='/') && operado){
            console.log("+-/*");
            setOperado(false)
            setValorTela(resultado+d) 
            return
        }
        if(operado){ 
            setValorTela(d)
            setOperado(false)
            return
        }
        const valorDigitadoTela=valorTela + d 
        setValorTela(valorDigitadoTela)
    }

    const limparMemoria=()=>{
        setOperado(false)
        setValorTela('')
        setResultado(0);
        setAcumulador(0)
    }

    const Operacao=(oper)=>{
        if(oper=='bs'){
            let vtela = valorTela
            vtela=vtela.substring(0,(vtela.length-1))
            setValorTela(vtela)
            setOperado(false)
            return
        }
        try{
            const r=eval(valorTela) 
            setAcumulador(r)
            setResultado(r);
            setOperado(true)
        }
        catch{
            setResultado('ERRO');
        }
    }

    return(
        <View style={styles.container}>
            <Text>Calculadora Matematica Simples</Text>
            {Tela(valorTela, resultado)}
            <View style={styles.botoes}>
                {Btn('AC', ()=>limparMemoria())}
                {Btn('(', ()=>addDigitoTela('('))}
                {Btn(')', ()=>addDigitoTela(')'))}
                {Btn('/', ()=>addDigitoTela('/'))}
                {Btn('7', ()=>addDigitoTela('7'))}
                {Btn('8', ()=>addDigitoTela('8'))}
                {Btn('9', ()=>addDigitoTela('9'))}
                {Btn('*', ()=>addDigitoTela('*'))}
                {Btn('4', ()=>addDigitoTela('4'))}
                {Btn('5', ()=>addDigitoTela('5'))}
                {Btn('6', ()=>addDigitoTela('6'))}
                {Btn('-', ()=>addDigitoTela('-'))}
                {Btn('1', ()=>addDigitoTela('1'))}
                {Btn('2', ()=>addDigitoTela('2'))}
                {Btn('3', ()=>addDigitoTela('3'))}
                {Btn('+', ()=>addDigitoTela('+'))}
                {Btn('0', ()=>addDigitoTela('0'))}
                {Btn('.', ()=>addDigitoTela('.'))}
                {Btn('C', ()=>Operacao('bs'))}
                {Btn('=', ()=>Operacao('='))} 

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'column',
        width:'100%',
        border:'1px solid #000'
    },
    tela: {
        display: 'flex',
        paddingLeft:20,
        paddingRight: 20,
        justifyContent:'center',
        alignItems:'flex-start',
        backgroundColor:'#040D12',
        flexDirection:'column',
        width:'100%'
    },
    telaOper: {
        fontSize:25,
        color:'#93B1A6',
        height:20
    },
    telaRes: {
        fontSize:50,
        color:'#fff'
    },
    Btn: {
        fontSize:30,
        height:75,
        width:'25%',
        padding:20,
        backgroundColor:'#93B1A6',
        color:'#183D3D',
        borderColor:'#000',
        textAlign:'center',
    },
    botoes: {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    }

});

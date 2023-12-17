import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration} from "react-native";
import ResultIMC from "./Resultimc";
import styles from "./style";

export default function Form(props){

const [height, setHeight]= useState(null);
const [weight, setWeight]= useState(null);
const [messageIMC, setMessageIMC]= useState("preencha o peso e altura");
const [imc, setImc]= useState(null);
const [textButton, setTextButton]= useState("Calcular");
const [errorMenssage, setErroMessage] = useState(null);

function imcCalculator(){
    return setImc((
        (weight.replace(",", ".") * 1) /
        (height.replace(",", ".") * 1 * (height.replace(",", ".") * 1))
      ).toFixed(2)
    );
}
function verificationIMC(){
    if(imc == null){
        Vibration.vibrate();
        setErroMessage("campo obrigatório*");
    }
}

function validationIMC(){
    if(weight != null && height != null){
        imcCalculator();
        setHeight(null);
        setWeight(null);
        setErroMessage(null);
        setMessageIMC("Seu imc é igual: ");
        setTextButton("Calcular Novamente");
        return
    }
        verificationIMC();
        setImc(null);
        setTextButton("Calcular");
        setMessageIMC("preencha o peso e a altura");

}

    return(
        <View style={styles.FormContext}>
           <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMenssage}</Text>
            <TextInput
            style={styles.input}  
            onChangeText= {(newHeight) => setHeight(newHeight)}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numbers-and-punctuation"/>
        
            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMenssage}</Text>
            <TextInput 
            style={styles.input}
            onChangeText={(newWeight) => setWeight(newWeight)}
            value={weight}
            placeholder="Ex. 80.36" 
            keyboardType="numbers-and-punctuation"/>
        
            <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationIMC()}
           >
            <Text style={styles.textbuttonCalculator}>{textButton}</Text>
            </TouchableOpacity> 
           </View>
           <ResultIMC messageResultIMC ={messageIMC} resultIMC={imc}/>
        </View>
    );
}

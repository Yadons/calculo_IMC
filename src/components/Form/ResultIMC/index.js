import React from "react";
import { View, Text, TouchableOpacity, Share} from "react-native";
import styles from "../ResultIMC/style";

export default function ResultIMC(props){//Usado para fazer o compartilhamento.
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultIMC,
        })
    }

    return(// Inserindo o button de compartilhar e o resultado da conta.
        <View style={styles.contextIMC}> 
            <View style={styles.boxSharebutton}>
                {props.resultIMC != null ?
                <TouchableOpacity 
                onPress={onShare}
                style={styles.shared}>
                    <Text style={styles.sharedtext}>Share</Text>
                </TouchableOpacity>
                :
                <View></View>
                }
            </View>
           <Text style={styles.information}>{props.messageResultIMC}</Text>
           <Text style={styles.numberIMC}>{props.resultIMC}</Text>
        </View>
    );
}
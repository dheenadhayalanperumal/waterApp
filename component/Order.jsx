import React from "react";

// import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet,Text } from "react-native";

const Order = () => {
    // const navigation = useNavigation();
    
  
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Water can</Text>
            <View style={styles.main}>
                <Text style={styles.buttonText}>Order</Text>
            </View>
        </View>
    );
       
    }

export default Order;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        backgroundColor: "#3498db",
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
});


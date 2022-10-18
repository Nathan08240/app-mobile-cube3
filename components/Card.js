import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Card({ image, title, children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image source={image} style={styles.img} />
            <View>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#f4c852",
        borderStyle: "solid",
        borderWidth: 4,
        marginVertical: 10,
        padding: 20,
        borderRadius: 15,
        width:'70%',
        alignSelf:'center',
        height:200,
    },
    img: {
        width: "100%",
        height: 70,
        resizeMode: "contain",
    },
    title: {
        fontSize: 20,
        textTransform: "uppercase",
        textAlign: "center",
        marginBottom: 10,
        color: "#000000",
        fontWeight: "bold",
    },
});
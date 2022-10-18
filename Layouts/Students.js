import {useCallback, useEffect, useState} from 'react';
import {Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function Students() {
    const [reqStatus, setReqStatus] = useState('idle')
    const [students, setStudents] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    const getStudents = async () => {
        setReqStatus('pending')
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const student = await response.json();
            setStudents(student)
            setReqStatus('succeed')
        } catch (error) {
            setReqStatus('failed')
        }
    }

    useEffect(() => {
        getStudents()
    }, [])


    if (reqStatus === 'pending' || reqStatus === 'idle') {
        return <Text>Loading...</Text>
    }
    if (reqStatus === 'failed') {
        return <Text>Erreur</Text>
    }


    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            {students.map((student) => (
                <View style={styles.container} key={student.id} >
                    <Text style={styles.name}>{student.username}</Text>
                    <Image source={require("../assets/etudiant.png")} style={styles.img}/>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.seeMore}>Voir plus</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
}

export default Students;

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

    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: "#ffc251",
        alignItems: "center",
        margin: 10,
    },
    seeMore: {
        textAlign: "center",
        color: "#f8fff4",
        fontSize: 12,
    },
    name: {
        textAlign: "center",
        color: "#000",
        fontSize: 20,
    },
    img: {
        width: "100%",
        height: 70,
        resizeMode: "contain",
        marginVertical: 10,
    },
});
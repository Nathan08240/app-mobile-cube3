import {ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native";
import Card from '../components/Card'


function Home({navigation}) {
    const goToAgenda = () => navigation.navigate("Agenda")
    const goToStudents = () => navigation.navigate("Students")

    return (
        <>
            <ScrollView
                style={styles.container}
            >
                <Card image={require("../assets/planning.png")} title="Le planning" >
                    <TouchableOpacity onPress={goToAgenda} style={styles.button}>
                        <Text style={styles.seeMore}>Voir plus</Text>
                    </TouchableOpacity>
                </Card>
                <Card image={require("../assets/etudiant.png")} title="Les étudiants">
                    <TouchableOpacity onPress={goToStudents} style={styles.button}>
                        <Text style={styles.seeMore}>Voir plus</Text>
                    </TouchableOpacity>
                </Card>
                <Card image={require("../assets/cours.png")} title="Les cours">
                    <TouchableOpacity style={styles.cta}>
                        <Text style={styles.seeMore}>Voir plus</Text>
                    </TouchableOpacity>
                </Card>
                <Card image={require("../assets/promo.png")} title="Les promotions">
                    <TouchableOpacity style={styles.cta}>
                        <Text style={styles.seeMore}>Voir plus</Text>
                    </TouchableOpacity>
                </Card>
                <Card image={require("../assets/staff.png")} title="Le personnel">
                    <TouchableOpacity style={styles.cta}>
                        <Text style={styles.seeMore}>Voir plus</Text>
                    </TouchableOpacity>
                </Card>
                {/*<Card>*/}

                {/*</Card>*/}
            </ScrollView>
        </>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    wrapper: {
        marginTop: 20,
        borderWidth: 5,
        alignSelf: 'center',
        height: 200,
        width: '70%',
    },

    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: "#ffc251",
        alignItems: "center",
        margin: 10,
    },
    cta: {
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
    }

})
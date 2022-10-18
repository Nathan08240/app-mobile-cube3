import {SafeAreaView, StyleSheet, Text} from "react-native";

function Footer () {
  return (
      <SafeAreaView style={styles.footer}>
       <Text style={styles.title}>&copy; CESI 2022 - Tous droits réservés </Text>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#ffc251',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    title : {
        fontSize: 12,
        fontWeight: 'semi-bold',
        color: '#000',
        paddingTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',

    },

} )

export default Footer;
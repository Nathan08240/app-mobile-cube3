import {StyleSheet, Text, View} from "react-native";
import {Agenda} from 'react-native-calendars';
import React from "react";

function AgendaDisplayer() {

    return (
        <>
            <View style={styles.container}>
                <Agenda
                    style={styles.agenda}
                    showClosingKnob={true}

                    items={{
                        '2022-10-21': [{
                            text: 'Soutenance DI 2022 Région',
                            height: 80,
                            color: '#ffc251',
                            textColor: '#000',
                            key: '1',
                            time: '13:40-17:00',
                        }],
                        '2022-10-23': [{text: 'Donner le prochain projet', time: '9:00'}, {text: 'Payer un café à Nathan'}],

                    }}

                    theme={{
                        agendaDayTextColor: 'black',
                        agendaDayNumColor: 'black',
                        textSectionTitleColor: '#ffc251',
                        agendaTodayColor: '#BADA55',
                        agendaKnobColor: '#ffc251',
                        selectedDayBackgroundColor: '#BADA55',
                    }}

                    showClosingKnob={true}

                    markedDates={
                        {
                            '2022-10-21': {selected: true, marked: true, selectedColor: '#ffc251'},
                            '2022-10-23': {selected: true, marked: true, selectedColor: '#ffc251'},

                        }
                    }

                    pastScrollRange={50}
                    loadItemsForMonth={(month) => {
                        console.log('trigger items loading')

                    }}
                    renderItem={(item, firstItemInDay) => {
                        return (
                            <>
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>{item.text}</Text>
                                    <Text style={styles.itemTime}>{item.time}</Text>
                                </View>
                            </>
                        );
                    }}

                    renderEmptyData={() => {
                        return (
                            <View style={styles.emptyData}>
                                <Text style={styles.emptyDataText}>Aucun évènement aujourd'hui</Text>
                            </View>
                        );
                    } }

                />
            </View>
        </>
    )
}

export default AgendaDisplayer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    agenda: {
        paddingTop: 5,
        height: 700,
    },
    item: {
        backgroundColor: '#ffc251',
        flex: 1,
        borderRadius: 20,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    itemText: {
        color: '#000',
        fontSize: 16,
    },
    itemTime: {
        color: '#000',
        fontSize: 12,
    },
    emptyData: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyDataText: {
        color: '#000',
        fontSize: 16,
    },

});


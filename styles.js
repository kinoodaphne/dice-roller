import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffb961',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex: {
        flexDirection: 'row',
    },
    flextext: {
        fontSize: 22,
        margin: 10,
    },
    totaltext: {
        fontSize: 22,
        marginTop: 10,
    },
    gameBtn: {
        marginTop: 35,
        fontSize: 20,
        color: 'black',
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 40,
        borderRadius: 5,
        borderColor: 'black'
    },
    image: {
        height: 90,
        width: 90,
        margin: 10,
    }
});

  export { styles };
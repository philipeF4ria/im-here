import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      flex: 1,
      padding: 36,
    },
    eventName: {
      color: '#FDFCFE',
      fontWeight: 'bold',
      fontSize: 24,
      marginTop: 48,
    },
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16,
      marginTop: 8,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
    },
    input: {
        flex: 1,
        backgroundColor: '#1F1E25',
        height: 56,
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 8,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 26,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listEmptyText: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center',
    },
  });

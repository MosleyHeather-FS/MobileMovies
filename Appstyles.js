import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    largeHeading: {
        fontSize: 30,
      },
      font: {
        fontStyle: 'italic',
      },
      listContainer: {
        flexGrow: 0,
      },
      headingColor: {
        ...Platform.select({
            android: {
                color: 'red'
            },
            ios: {
                color: 'blue'
            },
            default: {
                color: 'green'
            }
        })
      }
  });

  export default styles;
import { StyleSheet, Platform } from 'react-native';
import cinema from './assets/cinema.jpeg';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    movieList: {
        flex: 1,
        color: 'white',
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
      },
    image: {
      flex: 1,
    },
    largeHeading: {
        fontSize: 30,
        color: 'white'
      },
      text: {
        fontStyle: 'italic',
        color: 'white',
      },
      
      backgroundImg: {
        imageStyle: `url(${cinema})`,
      },
      switch: {

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
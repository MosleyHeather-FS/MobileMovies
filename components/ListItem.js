import { StyleSheet, Text, View } from 'react-native'

export default function ListItem({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})*/

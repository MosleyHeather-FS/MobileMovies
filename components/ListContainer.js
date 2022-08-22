import { StyleSheet, FlatList, View } from 'react-native'
import ListItem from './ListItem'
import styles from '../Appstyles'

export default function ListContainer({ data }) {
  
  const renderItem = ({item}) => (
    <ListItem>{item.name}</ListItem>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      style={styles.listContainer}
    />
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})*/

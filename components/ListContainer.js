import React, {useEffect, useState} from 'react';
import { ImageBackground, FlatList, View, VirtualizedList } from 'react-native'
import { Icon, Avatar, Image } from 'react-native-elements'
import ListItem from './ListItem'
import styles from '../Appstyles'

export default function ListContainer({ data }) {

  const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    setLoading(true);
    try {
      await fetch(`https://crudmovieapi.herokuapp.com/api/v1/movies`)
      .then((res) => res.json())
      .then((data) => {
        console.log({data});
        setMovies(data);
      })
    } catch(error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  let ignore = false;
  useEffect(() => {
    if(!ignore) {
      getMovies();
    }
    return () => {
      ignore = true;
    };
  }, []);
  
  const renderItem = ({item}) => (
    <ListItem >{item.name}</ListItem>
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  );
}
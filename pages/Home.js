import { useState } from 'react'
import {Button, FlatList, Text, TextInput, View, Image, Pressable} from 'react-native'

export default Home = ({navigation}) => {
  const [games, setGames] = useState([]);

    const [searchText, setSearchText] = useState('');
    const handleSearch = () => {
      const apiKey = "6de6d7fbdff24d28a1ae799c4252b305";
      const url = `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURI(searchText)}`;
      fetch(url)
      .then(response => response.json())
      .then(data => {setGames(data.results)})
      .catch((msg) => alert(msg.message))
    }

    const handleClick = slug => {
      navigation.push('Details', {slug})
    }
   
  return (
    <View style={style.page}>
      <View style={style.searchBar}>
          <TextInput 
          style={style.searchInput} 
          onChangeText={setSearchText}
          value={searchText}
          >
          </TextInput>
          <Button onPress={handleSearch} title='Chercher'></Button>
      </View>
      <FlatList style={style.list} data={games} renderItem={({item}) =>(
        <Pressable onPress={()=> handleClick(item.slug)}>
          <View style={style.listItem}>
            <Image source={{uri:item.background_image}} style={style.listImage}></Image>
            <View>
              <Text>{item.name}</Text>
              <Text>Note: {item.rating}</Text>
            </View>
          </View>
        </Pressable>
      )} keyExtractor={(item)=>item.id}>
      </FlatList>
    </View>
    
  )
}

const style = {
  page: {
    flex:1
  },
  searchBar: {
    flexDirection: "row"
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#dddddd"
  }, 
  list: {
    flex: 1
  },
  listItem: {
    backgroundColor: "#e0e0e0", 
    margin: 2,
    padding: 15,
    flexDirection:"row"
  },
 listImage: {
  width: 75,
  resizeMode: 'center',
  marginRight:10
  }
}
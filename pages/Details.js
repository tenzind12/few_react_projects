import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { Text, View, Image, SafeAreaView,  ScrollView, StatusBar, StyleSheet} from 'react-native';
import * as Location from 'expo-location';

export default Details = ({ navigation, route }) => {
  // console.log(route.params.slug);

  const apiKey = "6de6d7fbdff24d28a1ae799c4252b305";
  const url = `https://api.rawg.io/api/games/${route.params.slug}?key=${apiKey}`;

  const fetchDetails = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDetails(data);
    store(data)
    console.log(apiKey)
  };

  // =====================TEST=================================//
// const [location, setLocation] = useState(null);
// const [error, setError] = useState(null);

// useEffect(() => {
//   (async () => {
//     let {status} = await Location.requestForegroundPermissionsAsync();
//     if(status !== 'granted') {
//       setError('Permission denied !')
//       return
//     }
//     let location = await Location.getCurrentPositionAsync({});
//     setLocation(location);
//   })();
// }, [])

// let text = 'waiting...';
// if(error) text = error;
// else if (location) text = JSON.stringify(location);


//   const [test, setTest] = useState({});


//   const store = async(data) => {
//     try {
//         const jsonData = JSON.stringify(data)
//         await AsyncStorage.setItem('test', jsonData)
//       } catch (error) {
//         console.log(error.message)
//       }
//     }
    
//   useEffect(() => {
//     const getit = async() => {
//       try {
//         const checking = await AsyncStorage.getItem('test');
//         checking ? setTest(JSON.parse(checking)) : null;
//       } catch (error) {
//         console.log(error.message)
//       }
//     }
//     getit()
//   }, [])
    
// console.log(test)

  // =====================END TEST=================================//


 
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchDetails();
  }, []);
  
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.listItem}>
            {details.background_image ? (
              <Image
                source={{ uri: details.background_image }}
                style={{width:"100%", height: 200 }}
              ></Image>
            ) : (
              <Text style={styles.imageText}>There is no image for this game</Text>
            )}

            <View>
              <Text style={styles.gameName}>{details.name}</Text>
              <Text >{details.description}</Text>
            </View>
          
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageText: {
    textAlign: 'center',
    fontSize: 32,
    backgroundColor: 'black',
    color: 'gold',
    fontWeight: 'bold',
  },
  gameName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  }, 
  description: {
    fontSize: 25,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  }, 
  listItem: {
    flexGrow: 1
  }
});
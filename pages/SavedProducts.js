import {
  View,
  Text,
  Button,
  Vibration,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { rating } from '../services/Service';

export default function SavedProducts({ setPageChange, storedItems, deleteHandler }) {
  // back to product page
  const backBtnHandler = () => {
    setPageChange(true);
    Vibration.vibrate(100);
  };

  return (
    <View style={styles.container}>
      <Button title="Back" onPress={backBtnHandler} />
      <Text style={styles.title}>Saved Products</Text>
      <FlatList
        data={storedItems}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            {item.image !== undefined && (
              <Image source={{ uri: item.image }} style={styles.image} />
            )}
            {item.image === undefined && (
              <Image
                source={{
                  uri: 'https://ps.w.org/replace-broken-images/assets/icon-256x256.png?rev=2561727',
                }}
                style={styles.image}
              />
            )}
            <View style={styles.deleteContainer}>
              {item.rating !== undefined ? (
                <Text>Rating: {rating(item.rating)}</Text>
              ) : (
                <Text>{rating(item.rating)}</Text>
              )}
              <TouchableOpacity onPress={deleteHandler(item.id)} style={styles.deleteBtn}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(_, index) => index}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    // shadow box
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    marginBottom: 20,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'skyblue',
    padding: 10,
    marginBottom: 10,
    borderRadius: 7,
  },
  itemName: {
    fontSize: 20,
    fontWeight: '100',
    color: 'teal',
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  deleteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  deleteBtn: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 3,
    borderRadius: 7,
  },
  deleteText: {
    color: 'grey',
  },
});

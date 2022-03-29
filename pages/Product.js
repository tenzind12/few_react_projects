import { View, Text, Image, StyleSheet } from 'react-native';
import Nutriments from '../components/Nutriments';
import Nutriscore from '../components/Nutriscore';

export default function Product({ products }) {
  // const { product_name, nutriments, image_front_small_url, nutriscore_grade } = products.product;
  return (
    products !== null && (
      <View style={styles.container}>
        <Text style={styles.name}>{products.product.product_name}</Text>
        <Image source={{ uri: products.product.image_front_small_url }} style={styles.image} />

        {/* nutriscore */}
        {products.product.nutriscore_grade === undefined ? (
          <Text style={styles.noScoreMessage}>This item doesn't have a nutriscore value</Text>
        ) : (
          <Nutriscore nutriscore_grade={products.product.nutriscore_grade} />
        )}

        {/* nutrition scores component*/}
        <Nutriments nutriments={products.product.nutriments} />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    alignItems: 'center',
  },
  name: {
    fontWeight: '100',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  noScoreMessage: {
    backgroundColor: 'teal',
    color: 'white',
    marginTop: 10,
    padding: 5,
    borderRadius: 7,
  },
});

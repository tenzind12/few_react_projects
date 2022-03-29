import { View, Text, StyleSheet } from 'react-native';

export default function Nutriments({ nutriments }) {
  return (
    <View style={styles.nutrimentsContainer}>
      <View style={styles.nutriment}>
        <Text>Carbohydrates</Text>
        <Text>
          {nutriments.carbohydrates_100g.toFixed(2)}
          <Text style={styles.spanText}>/100g</Text>
        </Text>
      </View>

      <View style={styles.nutriment}>
        <Text>Proteins</Text>
        <Text>
          {nutriments.proteins_100g.toFixed(2)}
          <Text style={styles.spanText}>/100g</Text>
        </Text>
      </View>

      <View style={styles.nutriment}>
        <Text>Fats</Text>
        <Text>
          {nutriments.fat_100g.toFixed(2)}
          <Text style={styles.spanText}>/100g</Text>
        </Text>
      </View>

      <View style={styles.nutriment}>
        <Text>Fiber</Text>
        <Text>
          {nutriments.fiber_100g.toFixed(2)}
          <Text style={styles.spanText}>/100g</Text>
        </Text>
      </View>

      <View style={styles.nutriment}>
        <Text>Salt</Text>
        <Text>
          {nutriments.salt_100g.toFixed(2)}
          <Text style={styles.spanText}>/100g</Text>
        </Text>
      </View>

      <View style={styles.nutriment}>
        <Text>Sugar</Text>
        <Text>
          {nutriments.sugars_100g.toFixed(2)}
          <Text style={styles.spanText}>/100g</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nutrimentsContainer: {
    width: 300,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
  },
  nutriment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spanText: {
    fontSize: 10,
  },
});

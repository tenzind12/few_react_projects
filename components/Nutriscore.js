import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Nutriscore({ nutriscore_grade }) {
  const [score] = useState(['a', 'b', 'c', 'd', 'e']);

  //   every score abcde
  const eachColor = (s) => {
    return s === 'a'
      ? { backgroundColor: '#3d8a3e', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }
      : s === 'b'
      ? { backgroundColor: '#63b853' }
      : s === 'c'
      ? { backgroundColor: '#d9e34f' }
      : s === 'd'
      ? { backgroundColor: '#de7352' }
      : { backgroundColor: '#d44a4a', borderTopRightRadius: 10, borderBottomRightRadius: 10 };
  };
  return (
    <View>
      <View style={styles.nutriscoreContainer}>
        {score.map((s, i) => (
          <Text
            key={i}
            style={[
              styles.score,
              s === nutriscore_grade ? styles.active : styles.nonActive,
              eachColor(s),
            ]}
          >
            {s}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nutriscoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 45,
    marginTop: 10,
  },
  active: {
    fontSize: 40,
    lineHeight: 40,
    color: 'white',
  },
  nonActive: {
    color: '#c4cfc4',
  },
  score: {
    fontSize: 25,
    padding: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

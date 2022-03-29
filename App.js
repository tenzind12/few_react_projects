import { StyleSheet, Text, View, Button, Vibration } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useState, useEffect, useContext } from 'react';
import Product from './pages/Product';
import { ProductContext } from './services/Context';

export default function App() {
  const [hasPermission, setHasPermissioin] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [products, setProducts] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [swapPage, setSwapPage] = useState(false);
  // context API
  const productContext = useContext(ProductContext);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermissioin(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    // console.log(`https://world.openfoodfacts.org/api/v0/product/${data}.json`);
    const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`);
    const responseBody = await response.json();
    responseBody.status === 0
      ? setErrorMessage("We don't rate this type of product")
      : setProducts(responseBody);
  };

  if (hasPermission === null) return <Text>Requesting for camera permission</Text>;
  if (hasPermission === false) return <Text>No permission</Text>;

  return (
    <View style={styles.container}>
      {scanned || (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={(StyleSheet.absoluteFillObject, styles.camera)}
        />
      )}

      {/* if the product is not found */}
      {errorMessage && <Text style={styles.noProduct}>{errorMessage}</Text>}

      {scanned && !errorMessage && (
        <ProductContext.Provider value={{ swapPage, setSwapPage }}>
          <Product products={products} />
        </ProductContext.Provider>
      )}

      <View style={styles.button}>
        <Button
          title={'Tap to Scan Again'}
          onPress={() => {
            setScanned(false);
            setErrorMessage(null);
            Vibration.vibrate(50);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  button: {
    marginTop: 50,
  },

  noProduct: {
    backgroundColor: 'teal',
    color: 'white',
    padding: 5,
    borderRadius: 7,
    marginTop: 100,
  },
  camera: {
    height: 500,
    width: 500,
    marginTop: 80,
  },
});

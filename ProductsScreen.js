import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './Redux_Tookit/productSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const status = useSelector(state => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>The world's Best Bike</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButtonActive}>
          <Text style={styles.filterTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>RoadBike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 8, width: "100%" }}>
        {status === 'loading' ? (
          <Text>Loading...</Text>
        ) : status === 'failed' ? (
          <Text>Error loading products</Text>
        ) : (
          <SafeAreaView style={{flex:1}}>
            <FlatList
              data={products}
              numColumns={2}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.productCard}
                  onPress={() => navigation.navigate('Details', { products: item })}
                >
                  <Image source={require('./images/heart.png')} style={styles.heartIco} />
                  <Image source={item.image} style={styles.productImage} />
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>
                    <Text style={{ color: '#F7BA83' }}>$</Text>{item.price}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </SafeAreaView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  pageTitle: {
    fontSize: 20,
    color: "#E94141",
    marginTop: 30,
    fontWeight: "bold",
    flex: 0.5,
  },
  filterContainer: {
    flexDirection: "row",
    flex: 0.5,
    justifyContent: "space-between"
  },
  filterButtonActive: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E94141",
  },
  filterButton: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E94141",
  },
  filterTextActive: {
    color: "#E94141",
  },
  filterText: {
    color: "#BEB6B6",
  },
  productCard: {
    backgroundColor: '#F7BA8326',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    position: "relative",
    flex: 1,
  },
  productImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  heartIco: {
    position: "absolute",
    top: 5,
    left: 10,
  },
  productName: {
    textAlign: "center",
  },
  productPrice: {
    textAlign: "center",
  },
});

export default ProductsScreen;
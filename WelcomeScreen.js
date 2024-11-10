import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323';
import AppLoading from 'expo-app-loading';

const WelcomeScreen = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    VT323_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContent}>
        <Text style={styles.welcomeTitle}>
          A premium online store for {"\n"} sporter and their stylish choice
        </Text>
        <View style={styles.imageSection}>
            <Image 
              source={require('./images/bifour.png')}
              style={styles.welcomeImage}
            />
        </View>
        <Text style={styles.brandName}>
          POWER BIKE{"\n"}Shop
        </Text>
        <TouchableOpacity
          style={styles.getStartButton}
          onPress={() => navigation.navigate('Products')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContent: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
    padding: 10,
  },
  welcomeTitle: {
    flex: 0.5,
    fontSize: 26,
    fontFamily: 'VT323_400Regular',
    justifyContent: "center",
    alignItems: "center", 
    textAlign: "center",
    marginTop: 60,
  },
  imageSection: {
    padding: 30,
    backgroundColor: "#E941411A",
    borderRadius: 25,
  },
  welcomeImage: {
    margin: 20,
    resizeMode: 'contain',
  },
  getStartButton: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  brandName: {
    fontSize: 26,
    fontFamily: 'VT323_400Regular',
    textAlign: "center",
    marginTop: 20,
  },
  buttonText: {
    backgroundColor: "#E94141",
    width: "80%",
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 20,
    color: "white",
    fontSize:26,
    fontFamily: 'VT323_400Regular',
    marginBottom: 80,
  },
});

export default WelcomeScreen;
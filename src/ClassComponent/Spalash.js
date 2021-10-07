import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Spalash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomePage');
    }, 3000);
  });
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar backgroundColor="#FFC516" barStyle="light-content" />
      <ImageBackground
        source={require('../assets/img/bg.jpg')}
        style={styles.ImageBackground}>
        {/* <View style={{flex: 1}}></View> */}
        <View style={styles.coverLogo}>
          <Image
            source={require('../assets/img/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={{marginHorizontal: 18}}>
          <Text style={styles.title}>Delicious Foods</Text>
          <Text style={styles.desc}>
            I can help you find your favorite food, with this application you
            will more easily find the food you want
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Spalash;

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  coverLogo: {
    borderWidth: 0,
    width: 300,
    height: 194,
    alignSelf: 'center',
    marginTop: 250,
  },
  logo: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#ffffff',
    fontFamily: 'sans-serif-light',
    maxWidth: 250,
    marginTop: 25,
  },
  desc: {
    color: '#ffffff',
    fontSize: 17,
    maxWidth: 350,
    marginTop: 20,
    fontWeight: '600',
    fontFamily: 'sans-serif',
  },
});

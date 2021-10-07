import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import {bg_full} from '../assets/color';
import FavoritRestaurantComp from '../Component/FavoritRestaurantComp';
import NavbarComp from '../Component/NavbarComp';
import RecommandetionComp from '../Component/RecommandetionComp';
import RestaurantMenuComp from '../Component/RestaurantMenuComp';
import SearchComp from '../Component/SearchComp';

export default class HomePage extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: bg_full}}>
        <ScrollView>
          <View style={{flex: 1}}>
            <SearchComp onPress={() => nav} />
            <RestaurantMenuComp />
            <FavoritRestaurantComp />

            {/* Recommendation */}
            <View style={{marginHorizontal: 17}}>
              <Text style={{fontSize: 15, color: '#fff', marginTop: 9}}>
                Recommedation
              </Text>
              <RecommandetionComp
                onPress={() => this.props.navigation.navigate('CartPage')}
                img1={require('./../assets/img/food2.jpg')}
                img2={require('./../assets/img/semur-daging-sapi.png')}
              />
              <RecommandetionComp
                img1={require('./../assets/img/steak.jpg')}
                img2={require('./../assets/img/food2.jpg')}
              />
              <RecommandetionComp
                img1={require('./../assets/img/food3.jpg')}
                img2={require('./../assets/img/semur-daging-sapi.png')}
              />
              <RecommandetionComp
                img1={require('./../assets/img/semur-daging-sapi.png')}
                img2={require('./../assets/img/food2.jpg')}
              />
            </View>
          </View>
        </ScrollView>

        {/* NavBar */}
        <View style={styles.navbar}>
          <View style={styles.icon}>
            <NavbarComp
              text="Home"
              img={require('./../assets/icone/home.png')}
            />
            <NavbarComp
              onPress={() => this.props.navigation.navigate('CartPage')}
              text="Cart"
              img={require('./../assets/icone/shopping-cart.png')}
            />
            <NavbarComp
              text="Notifikasi"
              img={require('./../assets/icone/notification.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#000',
    width: '100%',
    height: 55,
    borderRadius: 20,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    marginTop: 0,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 12,
  },
});

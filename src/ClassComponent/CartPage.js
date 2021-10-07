import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {bg_full, bg_orange} from '../assets/color';
import HeaderViewDetail from '../Component/headerViewDetail';

export default class CartPage extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#000', flex: 1}}>
        <View style={styles.header}>
          <HeaderViewDetail
            icon={require('../assets/icone/back.png')}
            onPress={() => this.props.navigation.navigate('HomePage')}
          />
          <HeaderViewDetail icon={require('../assets/icone/share.png')} />
        </View>
        <View style={styles.coverImg}>
          <Image
            source={require('../assets/img/steak.jpg')}
            style={styles.img}
          />
        </View>
        <View style={styles.opImg}></View>
        <View style={styles.coverDesc}>
          <View style={styles.smallLine} />
          <Text style={styles.title}>T-Bone Steak is very delicious</Text>
          <Text style={styles.desc}>Lorem Ipsum Dolar Sit Amet</Text>
          <View style={styles.line} />
          <View style={styles.boxAmount}>
            <TouchableOpacity>
              <Image
                source={require('../assets/icone/plus1.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 24, color: '#fff', fontWeight: 'bold'}}>
              1
            </Text>
            <TouchableOpacity>
              <Image
                source={require('../assets/icone/minus.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginLeft: 17, marginTop: 35}}>
            <Text style={styles.titlePrice}>Price</Text>
            <Text style={styles.price}>$42.82</Text>
          </View>
          <View style={styles.addCart}>
            <Image
              source={require('../assets/icone/plus.png')}
              style={{width: 20, height: 20, marginLeft: 25}}
            />
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 20,
                marginRight: 30,
              }}>
              Add to Cart
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 17,
    marginVertical: 18,
  },
  coverImg: {
    borderWidth: 0,
    borderColor: '#fff',
    width: '100%',
    height: 268,
  },
  img: {
    width: undefined,
    height: undefined,
    // resizeMode: 'cover',
    flex: 1,
    position: 'relative',
  },
  opImg: {
    backgroundColor: '#000',
    width: '100%',
    height: 268,
    position: 'absolute',
    marginTop: 60,
    opacity: 0.1,
  },
  coverDesc: {
    backgroundColor: '#323232',
    width: '100%',
    height: 390,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -22,
  },
  smallLine: {
    backgroundColor: '#C4C4C4',
    width: 39,
    height: 4,
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 15,
    maxWidth: 320,
  },
  desc: {
    color: '#BEBEBE',
    fontSize: 14,
    marginHorizontal: 15,
    marginTop: 4,
  },
  line: {
    backgroundColor: '#BEBEBE',
    width: '100%',
    height: 1,
    marginTop: 7,
  },
  boxAmount: {
    borderWidth: 1,
    borderColor: '#BEBEBE',
    width: 187,
    height: 37,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 15,
    marginTop: 7,
  },
  addCart: {
    backgroundColor: bg_orange,
    width: 229,
    height: 58,
    marginTop: 35,
    borderTopLeftRadius: 17,
    borderBottomLeftRadius: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titlePrice: {
    color: '#fff',
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

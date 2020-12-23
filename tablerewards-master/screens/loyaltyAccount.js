import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {Cards} from '../components/Card';
import {Card, Text, useTheme} from '@ui-kitten/components';
import Svg, {Path, Defs, Stop, Ellipse} from 'react-native-svg';
import {LinearGradient} from 'expo-linear-gradient';

// const cards = [
//   {
//     id:12312,
//   },
//   {
//     type: Cards.Card2,
//   },
//   {
//     type: Cards.Card3,
//   },
//   {
//     type: Cards.Card4,
//   },
//   {
//     type: Cards.Card5,
//   },
//   {
//     type: Cards.Card6,
//   },
// ];

const data = new Array(2).fill({
  title: 'Item',
});
const json = [
  {
    key: '1',
    title: 'Item',
    text: 'TableCheck Membership',
    balance: 5000,
    bottomText: 'Points used until June 25,2020:  8000',
    backgroundImage: require('../assets/images/TCMembership.jpg'),

  },
  {
    key: '2',
    title: 'Item',
    text: 'Hilton Gold Membership',
    balance: 3000,
    bottomText: 'Points used until June 25,2020:  10000',
    backgroundImage: require('../assets/images/Hilton.png'),
  },
];
export const LoyaltyAccount = ({navigation}) => {
  const theme = useTheme();

  const renderItem = (info) => {
    return (
      <View style={{flex:1, flexDirection: 'column', height: 250, width: 360, margin: 20}} key={info.item.text}>
        <ImageBackground source={info.item.backgroundImage} style={styles.image}>
        <TouchableOpacity onPress={() => navigation.navigate('Activity')} style={{padding: 10}}>
          <View style={styles.top}>
            <Text style={{color: 'white'}}>{info.item.text}</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.text} category="h4">
              Balance Points
            </Text>
            <Text style={styles.text}>{info.item.balance}</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {info.item.bottomText}
            </Text>
          </View>
        </TouchableOpacity>
        </ImageBackground>
        </View>
    );
  };
  return (
    <SafeAreaView style={styles.list}>
      <FlatList
        scrollEventThrottle={16}
        bounces={false}
        data={json}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    height: 230,
    width: 380,
    margin: 15,
    padding: 10,
    flex: 1,
  },
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'blue',
    width: 350,
    height: 230,
    margin: 15,
    borderRadius: 20,
    padding: 0,
  },
  top: {
    height: '20%',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    color: 'white',
  },
  bottom: {
    height: '10%',
  },
  text: {
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

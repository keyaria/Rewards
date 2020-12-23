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

const data = new Array(8).fill({
  title: 'Item',
});

export const Loyalty = ({navigation}) => {
  const theme = useTheme();

  const renderItem = (info) => (
    <ImageBackground source={require('../assets/images/TCMembership.jpg')}>

      <TouchableOpacity onPress={() => navigation.navigate('pj')}>
        <View style={styles.top}>
          <Text style={{color: 'white'}}>sTableCheck Membership</Text>
        </View>
        <View style={styles.center}>
          <Text style={styles.text} category="h4">
            Balance Points 5000
          </Text>
        </View>
        <View style={styles.bottom}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Used Points until June 25, 2020: 8000
          </Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
  return (
    <View height="100%" backgroundColor="white">
      <SafeAreaView style={styles.list}>
        <FlatList
          scrollEventThrottle={16}
          bounces={false}
          data={data}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
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
});

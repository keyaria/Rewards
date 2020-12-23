import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {
  Layout,
  Text,
  Card,
  List,
  Button,
  useTheme,
} from '@ui-kitten/components';
import {LinearGradient} from 'expo-linear-gradient';

const data = [
  {
    key: '1',
    title: 'Item',
    text: 'Pick Up Tokyo',
    description: 'Tokyo',
    data: 'Apr 20, 2020 ',
    isMinus: true,
    price: 200,
    icon: require('../assets/images/shopping-bags.png'),
  },
  {
    key: '2',

    title: 'Payment',
    text: 
    'Contactless Payment at Ukai',
    description: 'Minsk',
    data: 'Apr 21, 2020 ',
    isMinus: false,
    price: 230,
    icon: require('../assets/images/credit-card.png'),
  },
  {
    key: '3',
    title: 'Item',
    text: 'Deliviry',
    description: 'Tokyo',
    data: 'Apr 10, 2020 ',
    isMinus: true,
    price: 800,
    icon: require('../assets/images/delivery2.png'),
  },
];
export const Activity = () => {
  const theme = useTheme();
  const renderItem = (info) => (
    <View
      key={info.item.text}
      style={(styles.item, {padding: 10})}
      status="basic">
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 20,
            }}>
            <Image source={info.item.icon} />
          </View>

          <View styles={{flexDirection: 'column'}}>
            <Text>{info.item.text}</Text>
            <Text>{info.item.description}</Text>
            <Text
              style={{
                fontSize: 10,
                color: 'rgba(0, 0, 0, 0.7)',
              }}>
              {info.item.data}
            </Text>
          </View>
        </View>

        <View styles={{alignItems: 'center', justifyContent: 'center'}}>
          {info.item.isMinus ? (
            <Text
              style={{
                color: '#FE2D2D',

                fontWeight: 'bold',
                fontSize: 18,
              }}>
              -{info.item.price}
            </Text>
          ) : (
            <Text
              style={{
                color: '#F2C02A',

                fontWeight: 'bold',
                fontSize: 18,
              }}>
              +{info.item.price}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
  return (
    <View height="100%" style={{backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          height: 210,
          width: 360,
          margin: 20,
        }}>
        <ImageBackground
          source={require('../assets/images/TCMembership.jpg')}
          style={{width: '100%'}}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('pj')}
            style={{padding: 10}}>
            <View style={styles.top}>
              <Text style={{color: 'white'}}>TableCheck Membership</Text>
            </View>
            <View style={styles.center}>
              <Text style={styles.text} category="h4">
                Balance Points
              </Text>
              <Text style={styles.text} category="h5">
                5000
              </Text>
            </View>
            <View style={styles.bottom}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Used Points until June 25, 2020: 8000
              </Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={{margin: 20, marginBottom: 10, marginRight: 30}}>
        <Button
          color="#7935D2"
          style={{
            borderRadius: 29,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            fontWeight: 'bold',
            fontsize: 10,
            lineHeight: 13,
          }}>
          Earn Points with Contactless Pay
        </Button>
      </View>
      <View style={[styles.container]}>
          <SafeAreaView>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                height: '10%',
                alignItems: 'center'
              }}>
              <Text
                category="h5"
                status="control"
                style={{
                  color: '#000000',
                  fontWeight: 'bold',
                  fontSize: 17.5,
                  marginLeft: 10,
                }}>
                Activity
              </Text>
              <Image
                source={require('../assets/images/filters.png')}
                style={{
                  marginRight: 10,
                  height: 15
                }}
              />
            </View>
            <List style={styles.list} data={data} renderItem={renderItem} />
          </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  list: {
    height: '90%',
    width: '100%',
    backgroundColor: 'white',
    marginTop: 10,
  },
  linearGradient: {
    borderRadius: 5,
    height: 230,
    width: 380,
    margin: 15,
    padding: 10,
    flex: 1,
  },
  topWrapper: {
    height: '30%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 400,
    borderBottomEndRadius: 400,
    overflow: 'hidden',
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],
    alignItems: 'center',
    justifyContent: 'center',
  },
  te: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardCard: {
    flex: 1,
    margin: 3,
    height: 80,
    backgroundColor: '#EDD6FC',
  },
  item: {
    // margin: 10,
  },
  button: {
    borderRadius: 29,
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

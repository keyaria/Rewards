import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {Layout, Text, Card, List, useTheme, Icon, Input } from '@ui-kitten/components';
// import CreditCardIcon from '../assets/images/credit-card.png';

export const HomeScreen = ({ navigation }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState('');
  const renderItem = (info) => (
    <Card style={styles.item} status="basic">
      <Text>Add Card</Text>
    </Card>
  );
  return (
    <View height="100%" backgroundColor="white">
      <View
        style={[
          styles.topWrapper,
          {backgroundColor: theme['color-primary-default']},
        ]}>
        <SafeAreaView
          style={[
            styles.child,
            {backgroundColor: theme['color-primary-default']},
          ]}>


          <Image
            style={{marginLeft: 10}}
            source={require('../assets/images/logo.png')}
            />
            <Image
            style={{marginLeft: 200 }}
              source={require('../assets/images/TopNav.png')}
              />
              <View
                style={{ flexDirection:'row', position: 'absolute', top: 150, left: 80, height: 200, width: '100%'}}
              >
              <Image
              style={{marginRight: 40, width: 50, height: 60}}
                source={require('../assets/images/dining.png')}
                />
                <Image
                  style={{marginRight: 40, marginTop: 10, width: 60, height: 55}}
                  source={require('../assets/images/pickup.png')}
                  />
                  <Image
                    style={{marginTop: 10, width: 65, height: 55}}
                    source={require('../assets/images/delivery.png')}
                    />
                    </View>


        </SafeAreaView>

        <View>

        </View>
      </View>
      <ScrollView style={[styles.container]}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Input
              placeholder='search'
              value={value}
              onChangeText={nextValue => setValue(nextValue)}
              style={{
                width: 300
              }}
              />

          </View>


    <Image
    style={{marginTop: 30, height: 140, width: '90%'}}
      source={require('../assets/images/Banner.png')}

      />
      <Text style={{alignSelf: 'flex-start', marginTop: 30}} category='h6'>
        Best deals for you
      </Text>
      <View style={styles.row}>

        <View style={styles.rewardCard}>
          <Image source={require('../assets/images/Japanesecuisine.jpg')}  style={{width: '100%', height: '100%'}}/>
        </View>
        <View style={styles.rewardCard}>
          <Image source={require('../assets/images/beefdeal.jpg')}  style={{width: '100%', height: '100%'}}/>
        </View>
        <View style={styles.rewardCard}>
          <Image source={require('../assets/images/pizzadeal.jpg')}  style={{width: '100%', height: '100%'}}/>
        </View>
        </View>

        <Text style={{alignSelf: 'flex-start', marginTop: 30}}  category='h6'>
          Popular cuisines around you
        </Text>
        <View style={styles.row}>
        <View style={styles.rewardCard}>
          <Image source={require('../assets/images/sushideal.jpg')}  style={{width: '100%', height: '100%'}}/>
        </View>
        <View style={styles.rewardCard}>
          <Image source={require('../assets/images/Italiancuisine.jpg')}  style={{width: '100%', height: '100%'}}/>
        </View>
        <View style={styles.rewardCard}>
          <Image source={require('../assets/images/ChineseCuisine.jpg')}  style={{width: '100%', height: '100%'}}/>
        </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: -30,
    borderRadius: 30,
  },
  list: {
    height: '90%',
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
    flexDirection: 'row',
      flexWrap: 'wrap'

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  te: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  rewardCard: {
    flex: 1,
    margin: 10,
    height: 135,
    width: 135,
    borderColor: 'lightgrey',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.52,
    shadowRadius: 2.22,
    elevation: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    margin: 10,
  },
  cardBody: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    textAlign: 'center'
  }
});

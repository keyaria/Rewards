import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Layout, Text, Card, List, useTheme, Icon} from '@ui-kitten/components';
// import CreditCardIcon from '../assets/images/credit-card.png';

export const AccountScreen = ({navigation}) => {
  const theme = useTheme();
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
          <Image style={{ borderRadius: 30}} source={require('../assets/images/avatar.png')} />

          <Text style={{
            fontWeight: 'bold',
            fontSize: 22
          }} status="control">
            Hello, Hena Shah!
          </Text>
        </SafeAreaView>
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
            <View>
              <Card style={[styles.rewardCard]}>
                <View style={styles.cardBody}>
                  <Image source={require('../assets/images/points.png')} />
                  <Text style={styles.cardText}> Contactless Pay Points </Text>
                </View>
              </Card>
              <Card style={styles.rewardCard}>
                <View style={styles.cardBody}>
                  <Image source={require('../assets/images/credit-card.png')} />
                  <Text style={(styles.cardText, {width: '100%'})}>
                    {' '}
                    Saved Cards{' '}
                  </Text>
                </View>
              </Card>
              <Card style={[styles.rewardCard]}>
                <View style={styles.cardBody}>
                  <Image source={require('../assets/images/profile.png')} />
                </View>
                <Text style={styles.cardText}> Personal Information </Text>
              </Card>
            </View>
            <View>
              <Card style={[styles.rewardCard]}>
                <TouchableOpacity
                  style={styles.cardBody}
                  onPress={() => navigation.navigate('Loyalty')}>
                  <Image source={require('../assets/images/loyalty.png')} />
                  <Text style={(styles.cardText, {width: '100%'})}>
                    {' '}
                    Loyalty Programs{' '}
                  </Text>
                </TouchableOpacity>
              </Card>
              <Card style={styles.rewardCard}>
                <View style={styles.cardBody}>
                  <Image source={require('../assets/images/history.png')} />
                  <Text style={styles.cardText}> Payment History </Text>
                </View>
              </Card>
              <Card style={styles.rewardCard}>
                <View style={styles.cardBody}>
                  <Image
                    source={require('../assets/images/notification.png')}
                  />
                  <Text> Notification Preferences </Text>
                </View>
              </Card>
            </View>
            <View></View>
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
    marginRight: 30,
    marginLeft: 30,
    marginTop: -30,
    borderRadius: 30,
    backgroundColor: 'white',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  te: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    textAlign: 'center',
  },
});

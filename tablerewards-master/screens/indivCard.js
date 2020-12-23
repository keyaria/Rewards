import React from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { List, ListItem, Icon, Button, Text, useTheme } from '@ui-kitten/components';
import {LinearGradient} from 'expo-linear-gradient';

const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});
const renderItemAccessory = (props) => (
  <Button size='tiny'>FOLLOW</Button>
);

const renderItemIcon = (props) => (
  <Icon {...props} name='person'/>
);

const renderItem = ({ item, index }) => (
   <ListItem
     title={`${item.title} ${index + 1}`}
     description={`${item.description} ${index + 1}`}
     accessoryLeft={renderItemIcon}
     accessoryRight={renderItemAccessory}
   />
 );

export const indivCard = () => {
  const theme = useTheme();

  return (
    <View style={styles.box}>
    <ImageBackground source={require('../assets/images/TCMembership.jpg')}>
    <View style={styles.top} >
    <Text style={{color: 'white'}}>
      TableCheck Membership
    </Text>
   </View>
   <View style={styles.center} >
   <Text style={styles.text} category='h4'>
     Balance Points 5000
   </Text>
  </View>
  <View style={styles.bottom}>
   <Text style={{color: 'white', fontWeight: 'bold'}}>
     Used Points until June 25, 2020: 8000
    </Text>
  </View>
  </ImageBackground>

    <Text>
      Activity
    </Text>
    <List
  style={styles.container}
  data={data}
  renderItem={renderItem}
/>
</View>

  )
}

const styles = StyleSheet.create({
  linearGradient: {
        borderRadius: 5,
        height: 230,
        width: 350,
        margin: 15,
        padding: 10,
        flex: 1
},
  item: {
    backgroundColor: 'blue',
    width: 350,
    height: 230,
    margin: 15,
    borderRadius: 20,
    padding: 0
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
        height: '10%'
  },
  container: {
    flex: 1,
  },
  box: {
    width: '100%',
    height: 500
  }
})

import React from 'react';
import { Text, SafeAreaView, View,  StyleSheet, TopNavigation } from 'react-native';
import { WebView } from 'react-native-webview';
import { Input, Card, Icon } from '@ui-kitten/components';

const SearchIcon = (props) => (
  <Icon {...props} name='search-outline'/>
);

export const Reservation = () => {
  const [value, setValue] = React.useState('');
return(
  
  <SafeAreaView style={styles.container}>
  <Input
    placeholder='Search'
    value={value}
    onChangeText={nextValue => setValue(nextValue)}
    accessoryLeft={SearchIcon}
    />
    <SafeAreaView style={styles.mainPicture}>
    </SafeAreaView>

    <Text>
      Explore by cuisine
    </Text>
    <View style={styles.row}>
      <Card style={styles.rewardCard}>
        <Text> Here </Text>
      </Card>
      <Card style={styles.rewardCard}>
        <Text> Here </Text>
      </Card>
      <Card style={styles.rewardCard}>
        <Text> Here </Text>
      </Card>
      </View>
      <Text>
        Featured Deals
      </Text>
      <View style={styles.row}>
        <Card style={styles.rewardCard}>
          <Text> Here </Text>
        </Card>
        <Card style={styles.rewardCard}>
          <Text> Here </Text>
        </Card>
        <Card style={styles.rewardCard}>
          <Text> Here </Text>
        </Card>
    </View>
  </SafeAreaView>
)
};

//export default Reservation;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainPicture: {
    height: 300,
    backgroundColor: 'black'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardCard: {
    flex: 1,
    margin: 10,
    height: 90,
    backgroundColor: '#A164E3'
  },
});

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
  ImageBackground
} from 'react-native';
import {Cards} from '../components/Card';
import {Card, Text, Input, Button, Layout, useTheme} from '@ui-kitten/components';
import Svg, {Path, Defs, Stop, Ellipse} from 'react-native-svg';
import {LinearGradient} from 'expo-linear-gradient';

const DATA = new Array(8).fill({
  title: 'Item',
});
const a = { uri: '../assets/images/Deal1.png'};
const PAS = [
  {
    title: 'First',
    image: <Image source={require('../assets/images/deal12.png')}  style={{width: '100%', height: '100%'}}/>,
    text1:  ' The Atrium | Breakfast Deal',
    text2: 'Get 30% off with Contactless Pay',
    text3: 'Valid: July 12 - July 20, 08:00 - 12:00'
  },
  {
    title: 'Second',
    image: <Image source={require('../assets/images/deal12.png')}  style={{width: '100%', height: '100%'}}/>,
    text1:  'Ginza Sushiyoshi | Lunch, Dinner Deal',
    text2: 'Get 10% off with Contactless Pay',
    text3: 'Valid: July 12 - July 20, 08:00 - 12:00'

  },
  {
    title: 'Third',
    image: <Image source={require('../assets/images/deal12.png')}  style={{width: '100%', height: '100%'}}/>,
    text1:  'Bacana Ginza | Lunch, Dinner Deal',
    text2: 'Get ¥5000 unlimited buffet',
    text3: 'Valid: July 12 - July 20, 08:00 - 12:00'

  }
]
function Item({title, image, text1, text2, text3}) {
  return (
    <View style={{ marginTop: 60, width: 350, height: 100, padding: 0}}>
      {image}
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
      <Text category='label'>
        {text1}
      </Text>
      <Text category='c1'>
      {text2}
      </Text>
      <Text category='c1'>
      {text3}
      </Text>
      </View>
    </View>
  )
}
export const DealsScreen = ({navigation}) => {
  const theme = useTheme();
  const [value, setValue] = React.useState('');

  const renderItem = ({info}) => (
    <Card>
      <Text>{info.title} </Text>
    </Card>
  );
  return (
    <View height="100%" backgroundColor="white">

      <SafeAreaView style={styles.list}>
      <Input
        placeholder='search deals'
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
        style={{
          width: '100%'
        }}
        />
        <Layout level='1' styles={{flex: 1,flexDirection: 'column', flexWrap: 'wrap', alignItems: 'left', width: '100%'}}>
          <Button style={styles.button} appearance="outline" size='tiny' style={{alignSelf: 'flex-start'}}>
            For you
          </Button>
        </Layout>
        <FlatList
          scrollEventThrottle={16}
          bounces={false}
          data={PAS}
          renderItem={({item}) => <Item title={item.title} image={item.image} text1={item.text1} text2={item.text2} text3={item.text3}/>}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 2
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
});

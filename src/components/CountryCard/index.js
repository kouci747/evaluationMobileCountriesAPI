import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
const CountryCard = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://fr.web.img2.acsta.net/pictures/18/12/03/08/53/5968896.jpg',
        }}
        style={{width: 200, height: 200}}
      />
      <Text>Full name of the country</Text>
      <Text>Common name of the country</Text>
      <Text>Capital of the country</Text>
      <Text>Region/continent of the country</Text>

      {/*add a map here*/}
    </View>
  );
};

export default CountryCard;

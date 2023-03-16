// import React, {useContext, useState} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Linking,
// } from 'react-native';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import {Context} from '../../context';
// import styled from 'styled-components/native';

// function Favorites({route}) {
//   //const {favorites, setFavorites} = useContext(Context);
//   const {favorites, deleteFavorite} = useContext(Context);

//   const navigation = useNavigation(); //STEP 2
//   //const [favCountries, setFavCountries] = useState();

//   //récupérer les pays mis en favoris en paramètres depuis countryDetail puis les garder ici grace à
//   //un useState([])
//   return (
//     <SafeAreaView>
//       <Text>Favorite countries </Text>
//       {favorites?.map(fav => {
//         return (
//           <>
//             <Text
//               onPress={() =>
//                 Linking.openURL(`https://en.wikipedia.org/wiki/${fav}`)
//               }>
//               {fav}
//             </Text>
//             <Text onPress={() => deleteFavorite(fav)}>X</Text>
//           </>
//         );
//       })}
//     </SafeAreaView>
//   );
// }

// export default Favorites;

import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Context} from '../../context';
import styled from 'styled-components/native';

const FavoritesContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #010814;
  justify-content: center;
`;

const FavoriteItem = styled.View`
  background-color: #fff;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 5px;
`;

const FavoriteText = styled.Text`
  font-size: 20px;
  color: #000;
`;

const DeleteButton = styled.Text`
  font-size: 20px;
  color: red;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin: 20px;
`;

function Favorites() {
  const {favorites, deleteFavorite} = useContext(Context);

  return (
    <FavoritesContainer>
      <ScrollView>
        <Title>Favorite countries</Title>
        {favorites?.map(fav => (
          <FavoriteItem key={fav}>
            <FavoriteText
              onPress={() =>
                Linking.openURL(`https://en.wikipedia.org/wiki/${fav}`)
              }>
              {fav}
            </FavoriteText>
            <DeleteButton onPress={() => deleteFavorite(fav)}>X</DeleteButton>
          </FavoriteItem>
        ))}
      </ScrollView>
    </FavoritesContainer>
  );
}

export default Favorites;

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
  TouchableOpacity,
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

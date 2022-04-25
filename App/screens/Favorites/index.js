import React, {useState} from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Asset from '../../components/Asset';
import Container from '../../components/container';
import styles from './styles';

import handleFavorite from '../../redux/actions/favoriteAction';
import AssetDetails from '../../components/AssetDetails';

const Favorites = () => {
  const {favorites, assets} = useSelector(state => state.getAssetsReducer);
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const toggleFavorite = (id, isFavorite) => {
    dispatch(handleFavorite(id, assets, isFavorite));
  };

  const getSelectedItem = id => {
    let item = favorites.find(item => item.id === id);
    setItem(item);
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      {favorites.length < 1 && (
        <Text style={styles.empty}> Favorite List is empty</Text>
      )}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Asset
            title={item.name}
            price={item?.metrics?.market_data?.price_usd}
            isFavorite={item?.isFavorite}
            action={() => toggleFavorite(item?.id, item?.isFavorite)}
            getSelectedItem={() => getSelectedItem(item.id)}
          />
        )}
      />
      <AssetDetails
        item={item}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Container>
  );
};

export default Favorites;

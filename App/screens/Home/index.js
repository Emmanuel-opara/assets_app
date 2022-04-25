import React, {useState, useEffect} from 'react';
import {FlatList, Modal, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Container from '../../components/container';
import Asset from '../../components/Asset';
import getAssets from '../../redux/actions/getAssetsAction';
import handleFavorite from '../../redux/actions/favoriteAction';
import AssetDetails from '../../components/AssetDetails';

const Home = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [item, setItem] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const {assets, loading} = useSelector(state => state.getAssetsReducer);
  const dispatch = useDispatch();

  const toggleFavorite = (id, isFavorite) => {
    dispatch(handleFavorite(id, assets, isFavorite));
  };

  const getAssetsData = () => {
    dispatch(getAssets(page));
  };

  useEffect(() => {
    getAssetsData();
  }, []);

  const loadMore = () => {
    setPage(page + 1);
    console.log(page, 'page');
    return;
    dispatch(getAssets(page));
  };

  const getSelectedItem = id => {
    let item = assets.find(item => item.id === id);
    setItem(item);
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      <FlatList
        // contentContainerStyle={{flexGrow: 1}}
        // contentContainerStyle={{flexGrow: 1}}
        onRefresh={() => getAssetsData()}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        data={assets}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={10}
        // scrollEventThrottle={150}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Asset
            title={item.name}
            price={item?.metrics?.market_data?.price_usd}
            isFavorite={item?.isFavorite}
            action={() => toggleFavorite(item?.id, item?.isFavorite)}
            getSelectedItem={() => getSelectedItem(item.id)}
            navigation={navigation}
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

export default Home;

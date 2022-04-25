import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';

import favorite from '../../assets/icons/favorite.png';
import favorite_2 from '../../assets/icons/favorite-2.png';
import arrow from '../../assets/icons/arrow.png';

import styles from './styles';

Asset = ({title, price, isFavorite, action, getSelectedItem, navigation}) => {
  return (
    <Pressable onPress={() => getSelectedItem()}>
      <View style={styles.favoriteWrapper}>
        <View style={styles.row}>
          <View style={styles.width_55}>
            <View>
              <Text style={styles.title} ellipsizeMode="tail">
                {title}
              </Text>
              <Text style={styles.price}>${price}</Text>
            </View>
            <View style={styles.positionRight}>
              <Pressable onPress={() => action()}>
                <Image
                  style={styles.icon}
                  source={isFavorite ? favorite : favorite_2}
                />
              </Pressable>
            </View>
          </View>
          <Image style={[styles.icon, styles.position]} source={arrow} />
        </View>
      </View>
    </Pressable>
  );
};

export default Asset;

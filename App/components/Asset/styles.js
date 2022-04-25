import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  favoriteWrapper: {
    elevation: 5,
    backgroundColor: colors.LIGHTGREY,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  width_55: {width: '55%'},
  row: {flexDirection: 'row', justifyContent: 'space-between'},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  price: {
    fontSize: 14,
    paddingBottom: 5,
  },
  icon: {width: 20, height: 20, alignSelf: 'flex-end'},
  position: {
    alignSelf: 'center',
  },
  positionRight: {alignItems: 'flex-end'},
});

export default styles;

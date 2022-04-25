import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  closeText: {
    color: colors.RED,
    borderColor: colors.RED,
    borderWidth: 1,
    padding: 3,
    borderRadius: 5,
  },
  closeButton: {alignSelf: 'flex-end', paddingTop: 10},
  name: {fontSize: 17, fontWeight: 'bold', paddingTop: 10},
  price: {fontSize: 15, paddingTop: 10, fontWeight: 'bold'},
  chart: {paddingTop: 20},
});

export default styles;

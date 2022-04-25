import {StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  labelStyle: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 'normal',
    marginTop: 4,
    color: COLORS.SUB_TEXT,
  },
  activeLabelStyle: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 'bold',
    marginTop: 4,
    // color: COLORS.BLUE._400,
  },
  container: {
    backgroundColor: COLORS.LIGHTGREY,
  },
});

export default styles;

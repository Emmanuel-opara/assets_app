import NetInfo from '@react-native-community/netinfo';

export const checkNetwork = async () => {
  let connection = await NetInfo.fetch().then(state => {
    if (state.isConnected) {
      return true;
    }
    return false;
  });
  return connection;
};

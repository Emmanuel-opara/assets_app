import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

import * as actions from '../action_types';
import {BASE_URL} from '../../constants/apiURL';
import {checkNetwork} from '../../utils/checkNetwork';
import AlertMessage from '../../components/AlertMessage';

export const getAssetsStart = () => ({
  type: actions.Get_ASSETS_START,
  loading: true,
});

export const getAssetsSuccess = payload => {
  return {
    type: actions.Get_ASSETS_SUCCESS,
    data: payload,
    message: 'Get assets successful!',
  };
};

export const getAssetsFailed = payload => {
  return {
    type: actions.Get_ASSETS_FAILED,
    message: payload,
    loading: false,
  };
};

const getAssets = page => {
  //config
  let config = {
    url: `${BASE_URL}/v2/assets?page=1`,
    method: 'GET',
  };

  return dispatch => {
    dispatch(getAssetsStart());

    axios(config)
      .then(({data, status}) => {
        if (status === 200) {
          dispatch(getAssetsSuccess(data.data));
        }
      })
      .catch(err => {
        if (err.toString().includes('Network Error'))
          return AlertMessage(
            'Internet connection',
            'Please check your internet connection',
          );
        dispatch(getAssetsFailed(err.response.data.error_message));
      });
  };
};

export default getAssets;

import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {APIs} from '../config/APIs';
import Utils from '../utils/Utils';

function AuthMiddleware() {
  const navigation = useNavigation();
  useEffect(() => {
    Utils.get(APIs.profile).then(response => {
      console.log("Auth middleware  ",response)
      if (response.status >= 400 && response.status < 500) {
        navigation.navigate('Start');
        return;
      }
      if (response.status >= 200 && response.status < 300) {
        console.log(response.data);
        navigation.navigate('Info');
      }
    });
  }, []);
  return <></>;
}

export default AuthMiddleware;

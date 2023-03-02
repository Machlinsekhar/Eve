import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {APIs} from '../config/APIs';

export default function Info() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeRegister1');
    }, 2000)
  }, [])

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <ImageBackground
        source={require('../assests/info.jpg')}
        style={styles.sectionimage}>
        <Text style={styles.sectionTitle}>EVE</Text>
        <View style={styles.sectionbutton}>
          <Text style={styles.sectioncode}>
            Machlin Carissa Benetta Sebasty
          </Text>
          <TouchableOpacity
            >
            <Text style={styles.buttonText}>Welcome</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#D3B1C2',
  },
  sectionTitle: {
    fontSize: 80,
    fontWeight: '900',
    color: `#ff2316`,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 30,
  },
  sectioncode: {
    fontSize: 15,
    color: '#613659',
    textAlign: 'center',
    fontWeight: '500',
  },
  sectionbutton: {
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#6359A6',
    borderRadius: 6,
    width: 360,
    height: 45,
    marginTop: 25,
  },

  buttonText: {
    textAlign: 'center',
    color: '#6359A6',
    fontSize: 30,
    paddingTop: 8,
    fontWeight: '600',
  },

  sectionimage: {
    flex: 1,
  },
});

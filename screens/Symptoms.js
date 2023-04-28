import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";

export default function Symptoms() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [actionTriggered, setActionTriggered] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.sectionContainer}>

      <ImageBackground source={require('../assests/bg.png')} style={styles.sectionimage}>

        <View style={styles.sectionview}>
          <Text style={styles.sectionTitle}>Symptoms</Text>
        </View>

        <View style={styles.sectionend}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => {
              setModalVisible(!isModalVisible);
              setActionTriggered('ACTION_1')
            }} style={styles.sectionsys}>
              <Image source={require('../assests/flow.png')} />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => {
              setModalVisible(!isModalVisible);
              setActionTriggered('ACTION_2')
            }} style={styles.sectionsys}>
              <Image source={require('../assests/discharge.png')} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.sectionend}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => {
              setModalVisible(!isModalVisible);
              setActionTriggered('ACTION_3')
            }} style={styles.sectionsys}>
              <Image source={require('../assests/pain.png')} />
            </TouchableOpacity>
          </View>
          
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => {
              setModalVisible(!isModalVisible);
              setActionTriggered('ACTION_4')
            }} style={styles.sectionsys}>
              <Image source={require('../assests/mood.png')} />
            </TouchableOpacity>
            
          </View>
        </View>


        <View style={styles.sectionbutton}>
          <TouchableOpacity onPress={() => navigation.navigate('Loading')} style={styles.button}>
            <Text style={styles.buttonText}>Predict</Text>
          </TouchableOpacity>
        </View>

        <Modal isVisible={isModalVisible} style={{ flex: 1, backgroundColor: "#6359A6", marginVertical: 230, borderRadius: 6 }}>
          {actionTriggered === 'ACTION_1' ?
            <View>
              {<View>
                <Text style={styles.buttonText}>How heavy is the bleeding?</Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>spotting</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>light</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>medium</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>heavy</Text></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={toggleModal} style={styles.modalbutton}>
                  <Text style={styles.modalbuttontext}>Save</Text>
                </TouchableOpacity>
                </View>
              }
            </View> :
            actionTriggered === 'ACTION_4' ?
              <View>
                { <View>
                <Text style={styles.buttonText}>How do you feel today?</Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>happy</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>sad</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>stressed</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>energetic</Text></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={toggleModal} style={styles.modalbutton}>
                  <Text style={styles.modalbuttontext}>Save</Text>
                </TouchableOpacity>
              </View>}
              </View> :
              actionTriggered === 'ACTION_3' ?
                <View>
                  {<View>
                <Text style={styles.buttonText}>Did you experienced any type of Body pain?</Text>
                <View style={{ flexDirection: 'row',  }}>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>cramps</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>headache</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>Tender Breasts</Text></TouchableOpacity>
                  </View>
                  
                <TouchableOpacity onPress={toggleModal} style={styles.modalbutton}>
                  <Text style={styles.modalbuttontext}>Save</Text>
                </TouchableOpacity>
              </View>}
                </View> :
                actionTriggered === 'ACTION_2' ?
                  <View>
                    { <View>
                <Text style={styles.buttonText}>Lookiing and touching your vaginal discharge what describes it the best?</Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>slippery</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>dry</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>creamy</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.entry}><Text style={styles.entrytext}>brownish</Text></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={toggleModal} style={styles.modalbutton}>
                  <Text style={styles.modalbuttontext}>Save</Text>
                </TouchableOpacity>
              </View>}
                  </View> :
                  null}

        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#BEDCE6'
  },
  sectionimage: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 45,
    fontWeight: '900',
    color: `#0F2F5B`,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: 90,
    paddingBottom: 30,
  },
  sectioncode: {
    fontSize: 21,
    color: '#0F2F5B',
    textAlign: 'center',
    fontWeight: '700',
    paddingBottom: 20,
    paddingTop: 220,
    letterSpacing: 1.25
  },

  sectionview: {
    paddingBottom: 20,
  },
  sectionsys: {
    backgroundColor: '#6359A6',
    borderRadius: 10,
    width: 160,
    height: 85,
    marginTop: 25,
    marginHorizontal: 20
  },

  form: {
    paddingHorizontal: 20,
    paddingTop: 30
  },

  input: {
    backgroundColor: `#c0d1da`,
    borderRadius: 6,
    width: 360,
    marginBottom: 15,
    borderColor: "#BEDCE6",
    borderWidth: 2,
    fontSize: 17,
    paddingHorizontal: 20,
  },

  label: {
    color: '#0F2F5B',
    fontWeight: '600',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },

  sectionbutton: {
    alignItems: "center",
    marginTop: 40

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
    fontSize: 20,
    color: '#ffffff',
    paddingTop: 10,
    fontWeight: '600'
  },
  sectionend: {
    flexDirection: "row"
  },
  endline: {
    fontSize: 17,
    color: '#0F2F5B',
    textAlign: 'center',
    fontWeight: '800',
    paddingBottom: 20,
    paddingTop: 20,
    letterSpacing: 1,
    flex: 1.3
  },
  link: {
    fontSize: 17,
    color: '#07BB9C',
    fontWeight: '900',
    paddingBottom: 20,
    paddingTop: 20,
    letterSpacing: 1,
    flex: 0.5
  },
  sectionimage: {
    flex: 1,
  },
  entry: {
    marginVertical: 50,
    backgroundColor: "#ffff",
    borderRadius: 6,
    marginHorizontal: 4
  },
  entrytext: {
    color: "#6359A6",
    fontWeight: "900",
    fontSize: 18,
    letterSpacing: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  modalbuttontext: {
    textAlign: 'center',
    fontSize: 20,
    color: '#6359A6',
    paddingTop: 10,
    fontWeight: '800'
  },

  modalbutton: {
    backgroundColor: "#ffff",
    borderRadius: 6,
    width: 160,
    height: 45,
    marginTop: 15,
    marginHorizontal: 93
  }
});



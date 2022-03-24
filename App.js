import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
// prettier-ignore
import {StyleSheet,Text,View,KeyboardAvoidingView,TextInput,Pressable,FlatList,TouchableOpacity,Vibration,} from 'react-native';

export default function App() {
  const [text, setText] = useState({ name: '', telephone: '', email: '' });
  const [contacts, setContacts] = useState([]);

  // A D D   H A N D L E R
  const addhandler = () => {
    if (text.name) {
      // T E L E P H O N E   R E G E X - if(telephone)
      const regexPhone = /^((\+)33|0|0033)[1-9](\d{2}){4}$/g;
      if (text.telephone) {
        if (!text.telephone.match(regexPhone)) {
          alert('Only french number can be added for the moment');
          Vibration.vibrate();
          return;
        }
      }

      // E M A I L   R E G E X - if(email)
      const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (text.email) {
        if (!text.email.match(regexEmail)) {
          alert('Email format is not accepted');
          Vibration.vibrate();
          return;
        }
      }

      const newContactLists = [...contacts];
      newContactLists.push({ name: text.name, telephone: text.telephone, email: text.email });

      setContacts(newContactLists);
      setText({ name: '', telephone: '', email: '' });
      Vibration.vibrate(100);
    } else {
      alert('Le champ nom est obligatoire !');
      Vibration.vibrate();
    }
  };

  // D E L E T E   H A N D L E R
  const deleteHandler = (index) => {
    const newContactLists = [...contacts];
    newContactLists.splice(index, 1);
    setContacts(newContactLists);
    Vibration.vibrate(100);
  };

  const getLocalStorage = () => {
    AsyncStorage.getItem('lists')
      .then((response) => JSON.parse(response || '[]'))
      .then((data) => setContacts(data));
  };

  const storeLocalStorage = () => {
    AsyncStorage.setItem('lists', JSON.stringify(contacts));
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    storeLocalStorage();
  }, [contacts]);

  return (
    <View style={styles.container}>
      {/* list container */}
      {/* prettier-ignore */}
      <FlatList data={contacts} renderItem={({ item, index }) => (
          // prettier-ignore
          <TouchableOpacity key={index} onPress={() => {alert(item.name); Vibration.vibrate(100); }}>
            <View style={styles.listContainer}>
              <View style={styles.listContainer__first}>
                <Text style={styles.icon}>☎</Text>
                <View style={styles.infoContainer}>
                  <Text style={styles.contactName}>{item.name}</Text>
                  <Text>{item.telephone}</Text>
                  <Text>{item.email}</Text>
                </View>
              </View>
              <Pressable onPress={() => deleteHandler(index)}>
                <Text style={styles.icon}>❌</Text>
              </Pressable>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => index}
      ></FlatList>

      {/* input container */}
      <KeyboardAvoidingView style={styles.inputContainer}>
        <TextInput
          onChangeText={(e) => setText({ ...text, name: e })}
          style={styles.inputs}
          value={text.name}
          placeholder="Nom"
        />
        <TextInput
          onChangeText={(e) => setText({ ...text, telephone: e })}
          value={text.telephone}
          style={styles.inputs}
          placeholder="Téléphone"
        />
        <TextInput
          onChangeText={(e) => setText({ ...text, email: e })}
          value={text.email}
          style={styles.inputs}
          placeholder="Email"
        />
        <Pressable>
          <Text style={styles.addBtn} onPress={addhandler}>
            + Ajouter
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fa4e3',
    paddingTop: 60,
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  listContainer: {
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // first flex in the contact list
  listContainer__first: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 30,
    alignSelf: 'center',
  },
  infoContainer: {
    paddingLeft: 10,
    justifyContent: 'center',
  },
  contactName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#1f2245',
  },
  inputs: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  addBtn: {
    padding: 10,
    backgroundColor: '#3aa6c7',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
    borderRadius: 10,
  },
});

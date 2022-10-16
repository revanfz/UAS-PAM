import { AntDesign } from "@expo/vector-icons";
import * as Contacts from "expo-contacts";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Details from "./Details";

const ContactsList = () => {
  const [actualContacts, setActualContacts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.PHONE_NUMBERS],
        });
        if (data.length > 0) {
          setLoading(false);
          setActualContacts(data);
          setContacts(data);
        }
      }
    })();
  }, []);

  const searchContact = (value) => {
    const filteredContacts = contacts.filter((contact) => {
      let contactLowerCase = (
        contact.firstName +
        " " +
        contact.lastName
      ).toLowerCase();
      let keyLower = value.toLowerCase();
      return contactLowerCase.indexOf(keyLower) > -1;
    });
    setActualContacts(filteredContacts);
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#2596be",
          borderWidth: 1,
          margin: 10,
          borderRadius: 10,
          backgroundColor: "#1d2021",
        }}
      >
        <Details contact={item} />
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#282828",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#282828",
          maxHeight: 80,
        }}
      >
        <AntDesign
          name="search1"
          color="white"
          size={22}
          style={{ paddingLeft: 10 }}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#282828"
          style={{
            backgroundColor: "#fff",
            height: 50,
            paddingHorizontal: 40,
            color: "#282828",
            borderRadius: 30,
            width: "80%",
          }}
          onChangeText={(value) => searchContact(value)}
        />
      </View>
      {loading ? <ActivityIndicator size="large" color="#fff" /> : null}
      <FlatList
        data={actualContacts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
        ListEmptyComponent={() => {
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>No Contacts</Text>;
          </View>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});
export default ContactsList;

import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const getContact = (item) => {
  Alert.alert(item.name, item.phoneNumbers[0].number);
};

export default class Details extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => getContact(this.props.contact)}
        style={styles.container}
      >
        <View style={styles.avatar}>
          <View>
            <View style={styles.initial}>
              <Text>{this.props.contact.name[0]}</Text>
            </View>
          </View>
          <View style={styles.contactData}>
            <Text style={styles.name}>{this.props.contact.name}</Text>
            <Text style={styles.phoneNumber}>
              {this.props.contact.phoneNumbers[0].number}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  initial: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },
  contactData: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
  },
  name: {
    color: "#fff",
    fontSize: 16,
  },
  phoneNumber: {
    color: "#fff",
  },
});

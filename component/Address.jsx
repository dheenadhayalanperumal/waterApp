import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ad = {
  home: {
    DoorNO: "2/135",
    Street: "mettu street",
    city: "chennai",
    pin: "631201"
  },
  office: {
    DoorNO: "47",
    Street: "kovil street",
    city: "chennai",
    pin: "631201"
  },
  rent: {
    DoorNO: "272",
    Street: "1st main road, Engineer avenue",
    city: "chennai",
    pin: "6000117"
  }
};

const Address = () => {
  // const navigation = useNavigation();
  
  const [formData, setFormData] = useState({
    Name: "",
    DoorNO: "",
    BuildName: "",
    Streetname: "",
    mobile: "",
    Floor: "",
    Street: "",
    Area: "",
    City: "",
    pincode: "",
    Location: "",
    Landmark: "",
   
  });

  const handleSave = async () => {
    const isAnyFieldEmpty = Object.values(formData).some(value => value === "");

    if (isAnyFieldEmpty) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await AsyncStorage.setItem("Address", JSON.stringify(formData));
      // navigation.navigate("AddCustomer1");
    } catch (e) {
      console.error("Error saving data:", e);
    }
  };

  const handleChangeText = (name, text) => {
    setFormData({ ...formData, [name]: text });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              {[
                { label: "Customer name", name: "Name" },
                { label: "Door NO", name: "DoorNO" },
                { label: "Build Name", name: "BuildName" },
                { label: "Street name", name: "Streetname" },
                { label: "Floor", name: "Floor" },
                { label: "Street", name: "Street" },
                { label: "Area", name: "Area" },
                { label: "City", name: "City" },
                { label: "pincode", name: "pincode", keyboardType: "numeric" },
                { label: "Location", name: "Location" },
                { label: "Landmark", name: "Landmark" },
                { label: "Mobile Number", name: "mobile", keyboardType: "numeric" },
              ].map(({ label, name, keyboardType }) => (
                <View key={name}>
                  <Text style={styles.text}>{label}</Text>
                  <TextInput
                    style={styles.input}
                    value={formData[name]}
                    keyboardType={keyboardType}
                    onChangeText={(text) => handleChangeText(name, text)}
                  />
                </View>
              ))}

             

            </View>
          </TouchableWithoutFeedback>

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          {/* <View style={styles.space}></View> */}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
  space: { height: 100 },
  form: { width: "90%", marginTop: 10, alignItems: "center" },
  text: { fontSize: 15, marginBottom: 10, color: "#4A516D" },
  input: { height: 43, width:320, borderWidth: 1, borderColor: "#E6E8F0", padding: 10, marginBottom: 20, borderRadius: 5 },
  button: { backgroundColor: "#A20A3A", borderRadius: 5, height: 48, justifyContent: "center", alignItems: "center", marginBottom: 20 },
  buttonText: { color: "#fff", fontSize: 20 },
  switchContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
});

export default Address;

import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const colors = {
  primary: "#3498db",
  secondary: "#2ecc71",
  background: "#ecf0f1",
  text: "#2c3e50",
};

export default function Home() {
  const [count, setCount] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState("no");
  const [total, setTotal] = React.useState(0);
  const navigation = useNavigation();

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => (c > 0 ? c - 1 : 0));

  const rate = 30;

  const move = () => {
     navigation.navigate("Address");
    console.log("move to address screen");
  };

  useEffect(() => {
    const total = () => {
      if (selectedOption === "yes") {
        setTotal(rate * count + 90 * count);
      } else {
        setTotal(rate * count);
      }
    };
    total();
  }, [count, selectedOption]);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Water can</Text>

      <View style={styles.main}>
        
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.count}>{count}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.title}>With can</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            onPress={() => setSelectedOption("yes")}
            style={styles.radioButton}
          >
            <Text
              style={
                selectedOption === "yes" ? styles.selected : styles.unselected
              }
            >
              Yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedOption("no")}
            style={styles.radioButton}
          >
            <Text
              style={
                selectedOption === "no" ? styles.selected : styles.unselected
              }
            >
              No
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.optionContainer}>
        <Text>Selected option: {selectedOption}</Text>
      </View> */}

      <View style={styles.cost}>
        <Text style={styles.title}>Total cost: {total}</Text>
      </View>

      <View style={styles.address}>
        <TouchableOpacity style={styles.button} onPress={move}>
          <Text style={styles.buttonText}>Select Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  text: {
    color: colors.text,
    fontSize: 18,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 20,
  },
  radioContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  radioButton: {
    marginHorizontal: 10,
  },
  selected: {
    fontWeight: "bold",
   
  },
  unselected: {
    color: "gray",
  },
  address: {
    marginTop: 20,
  },
  cost: {
    marginTop: 20,
  },
  count: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={myStyle.viewKliye}>
      <Text style={myStyle.TextKLiye}>Hello world</Text>
      <TextInput placeholder="Enter Your Name" />
    </View>
  );
}


const myStyle = StyleSheet.create({
  viewKliye: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TextKLiye: {
    color: "blue",
    fontSize: 28,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    // Style Prop is not supported on all elements
    <View>

    </View>
  );
}

const styles = StyleSheet.create({

});

// export default function App() {
//   return (
//     // Style Prop is not supported on all elements
//     <View style={styles.container}>
//       <View>
//         <Text>Hello World</Text>
//       </View>
//       {/* A good styling practice is CSS objects */}
//       <Text
//         // style={{ margin: 20, borderWidth: 4, borderColor: "#fff", padding: 15 }}
//         style={styles.text}
//       >
//         Another React Text
//       </Text>
//       <Button title="Tap The Button NOW!!" />
//       <StatusBar />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ada",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   text: {
//     margin: 16,
//     borderWidth: 2,
//     padding: 16,
//     borderColor:'blue',
//   },
// });

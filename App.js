import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Text, SafeAreaView, ScrollView, View, StyleSheet, Image} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer} contentContainerStyle={{flex: 1, flexDirection: 'column', justifyContent: 'space-evenly'}}>

        {/* Name */}
        <View style={styles.nameTextContainer}>
          <Text style={styles.nameText}>
            Alexis Rodriguez
          </Text>
        </View>

        {/* Image */}
        <View style={styles.imageContainer}>
          <Image source={require("./assets/me.jpg")} style={styles.image} />
        </View>

        {/* Main Description */}
        <View style={styles.mainDescriptionContainer}>
          <Text style={styles.mainDescription} >Some description about me...</Text>
        </View>
       
        {/* Fun Facts */}
        <View style={styles.funFactsContainer}>
          <Text style={styles.funFacts} >Some fun facts about me...</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  scrollViewContainer: {
    backgroundColor: '#608cc1',
  },
  imageContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    borderRadius: 100
  },
  text: {
    fontSize: 42,
  },
  nameTextContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#faebd7'
  },
  nameText: {
    fontSize: 30,
  },
  mainDescriptionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#faebd7'
  },
  mainDescription: {
    fontSize: 25,
  },
  funFactsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  funFacts: {
    fontSize: 20
  }
});

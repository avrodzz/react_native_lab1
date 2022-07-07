import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Text, SafeAreaView, ScrollView, View, StyleSheet, Image} from "react-native";

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView>
    //     <View style={styles.photoContainer}>
    //     <Image source={require("./assets/perry.png")} style={styles.photo} />
    //   </View>
    //   <View style={styles.nameContainer}>
    //     <Text style={styles.nameAndPronouns}>Alexis Rodriguez</Text>
    //   </View>
    //   <View style={styles.blurbContainer}>
    //     <Text style={styles.blurb}>chirp chirp i'm a parakeet</Text>
    //   </View>
    //   </ScrollView>
      
    // </SafeAreaView>


    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer} contentContainerStyle={{flex: 1, flexDirection: 'column', justifyContent: 'space-evenly'}}>

        {/* Image */}
        <View style={styles.imageContainer}>
          <Image source={require("./assets/perry.png")} style={styles.image} />
        </View>

        <View style={styles.nameTextContainer}>
          <Text style={styles.nameText}>
            Alexis Rodriguez
          </Text>
        </View>
       

{/* <View style={styles.photoContainer}>
     <Image source={require("./assets/perry.png")} style={styles.photo} />
    //   </View> */}


      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
  },
  scrollViewContainer: {
    backgroundColor: '#608cc1',
  },
  imageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,

  },
  image: {
    resizeMode: "contain",
    width: "90%",
    padding: 50,
    borderRadius: 100
  },
  text: {
    fontSize: 42,
  },
  nameTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0
  },
  nameText: {
    fontSize: 50,
  },
  // blurbContainer: {
  //   flex: 2,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },


  // blurb: {
  //   fontSize: 20,
  // },
});

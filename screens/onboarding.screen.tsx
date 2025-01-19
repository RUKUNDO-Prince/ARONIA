import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function OnBoardingScreen() {
  return (
    <LinearGradient
      colors={["#250152", "#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text>OnBoardingScreen</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  // title: {
  //   color: "#fff",
  //   fontSize: scale(23),
  //   fontFamily: "SegoeUI",
  //   textAlign: "center",
  //   fontWeight: "500",
  // },
  // subtitle: {
  //   width: scale(290),
  //   marginHorizontal: "auto",
  //   color: "#9A9999",
  //   fontSize: scale(14),
  //   fontFamily: "SegoeUI",
  //   textAlign: "center",
  //   fontWeight: "400",
  //   paddingTop: verticalScale(10),
  // },
  // paginationContainer: {
  //   position: "absolute",
  //   bottom: verticalScale(70),
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   gap: scale(8),
  // },
  // dot: {
  //   width: scale(8),
  //   height: scale(8),
  //   borderRadius: 100,
  //   backgroundColor: "#fff",
  //   marginHorizontal: scale(2),
  // },
  // skipContainer: {
  //   position: "absolute",
  //   top: verticalScale(45),
  //   right: scale(30),
  //   flexDirection: "row",
  //   alignItems: "center",
  //   gap: scale(5),
  //   zIndex: 100,
  // },
  // skipText: {
  //   color: "#fff",
  //   fontSize: scale(16),
  //   fontFamily: "SegoeUI",
  //   fontWeight: "400",
  // },
});
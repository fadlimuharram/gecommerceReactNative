import React from "react";
import { AsyncStorage } from "react-native";

export const _storeData = async (key, val) => {
  try {
    await AsyncStorage.setItem(key, val);
  } catch (e) {
    console.log("Error saving data");
  }
};

export const _retrieveData = (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
}

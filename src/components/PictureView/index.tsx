import React from "react";
import { Button, SafeAreaView, View, Image, TouchableOpacity } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import { styles } from "./styles";
import { PictureViewProps } from "./props";

export function PictureView({ capturedPhoto, onDiscardPhoto, onSavePhoto, onSharePhoto }: PictureViewProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: capturedPhoto.uri }} style={{ width: "100%", height: "70%", borderRadius: 20 }} />
      <View style={styles.menuButtons}>
        <TouchableOpacity onPress={onSharePhoto}>
          <FontAwesome5 name="share-alt" size={50}></FontAwesome5>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSavePhoto}>
          <FontAwesome5 name="sd-card" size={50}></FontAwesome5>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDiscardPhoto}>
          <FontAwesome5 name="trash-alt" size={50}></FontAwesome5>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

import React from "react";
import { Button, SafeAreaView, TouchableOpacity, View } from "react-native";

import { Video } from "expo-av";
import { FontAwesome5 } from "@expo/vector-icons";

import { styles } from "./styles";
import { VideoPlayerProps } from "./props";

export function VideoPlayer({ video, onSave, onShare, onDiscard }: VideoPlayerProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Video style={styles.video} source={{ uri: video.uri }} useNativeControls isLooping />
      <View style={styles.menuButtons}>
        <TouchableOpacity onPress={onShare}>
          <FontAwesome5 name="share-alt" size={50}></FontAwesome5>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSave}>
          <FontAwesome5 name="sd-card" size={50}></FontAwesome5>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDiscard}>
          <FontAwesome5 name="trash-alt" size={50}></FontAwesome5>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

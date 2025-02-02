import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { CameraView } from "expo-camera";

import { styles } from "./styles";
import { CameraViewProps } from "./props";

export function CameraViewC({ cameraRef, isRecording, onRecord, onStopRecording, onPicture, cameraMode, onCameraMode }: CameraViewProps) {
  return (
    <CameraView ratio="16:9" mode={cameraMode} ref={cameraRef} mute={false} videoQuality="1080p" style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={isRecording ? onStopRecording : onRecord} style={styles.buttonRecord}>
          <Text style={styles.buttonText}>{isRecording ? <FontAwesome5 size={40} name="video" color="red" /> : <FontAwesome5 size={40} name="video" color="#FFF" />}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRecord} onPress={onCameraMode}>
          <Text style={styles.buttonText}>{cameraMode === "picture" ? <FontAwesome5 size={40} name="image" /> : <FontAwesome5 size={40} name="film" />}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRecord} onPress={onPicture}>
          <Text style={styles.buttonText}>
            <FontAwesome5 size={40} name="camera" />
          </Text>
        </TouchableOpacity>
      </View>
    </CameraView>
  );
}

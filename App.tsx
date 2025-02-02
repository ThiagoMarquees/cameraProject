import { useState, useEffect, useRef } from "react";
import { Text } from "react-native";

import { Camera, CameraView, CameraRecordingOptions, CameraPictureOptions } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

import { VideoPlayer } from "./src/components/VideoPlayer";
import { CameraViewC } from "./src/components/CameraViewC";
import { PictureView } from "./src/components/PictureView";

export default function App() {
  const cameraRef = useRef<CameraView>(null);
  const [isRecording, setIsRecording] = useState(Boolean);
  const [capturedPhoto, setCapturedPhoto] = useState<any>();
  const [cameraMode, setCameraMode] = useState<any>("picture");
  const [video, setVideo] = useState<any>();

  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMicrophonePermission(microphonePermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === false || hasMicrophonePermission === false) {
    return <Text>Não tem permissão de camera ou audio</Text>;
  }

  if (hasMediaLibraryPermission === false) {
    return <Text>Não tem acesso a biblioteca</Text>;
  }

  const takePicture = () => {
    const options: CameraPictureOptions = {
      quality: 1,
      imageType: "png",
    };
    if (isRecording !== true) {
      setCameraMode("picture");
    }
    setTimeout(() => {
      if (cameraRef && cameraRef.current && isRecording !== true) {
        cameraRef.current
          .takePictureAsync(options)
          .then((capturededPhoto: any) => {
            // console.log("Captured Photo:", capturededPhoto.uri);
            setCapturedPhoto(capturededPhoto);
          })
          .catch((error) => {
            console.error("Erro ao gravar Foto:", error); // Captura de erros
          });
      }
    }, 100);
  };

  const recordVideo = () => {
    setIsRecording(true);

    const options: CameraRecordingOptions = {
      maxDuration: 60,
    };
    setCameraMode("video");
    setTimeout(() => {
      if (cameraRef && cameraRef.current) {
        cameraRef.current
          .recordAsync(options)
          .then((recordedVideo: any) => {
            // console.log("Recorded Video:", recordedVideo);
            setVideo(recordedVideo);
            setIsRecording(false);
          })
          .catch((error) => {
            console.error("Erro ao gravar vídeo:", error); // Captura de erros
            setIsRecording(false);
          });
      }
    }, 100);
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (cameraRef && cameraRef.current) {
      cameraRef.current.stopRecording();
      // console.log("Recording stopped"); // Verifique se isso está sendo logado
    }
  };

  if (video) {
    // console.log("Video state updated:", video);
    const saveVideo = () => {
      MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
        setVideo(undefined);
      });
    };
    const shareVideo = () => {
      shareAsync(video.uri).then(() => {
        setVideo(undefined);
      });
    };
    const discardVideo = () => {
      setVideo(undefined);
    };
    return <VideoPlayer video={video} onShare={shareVideo} onSave={saveVideo} onDiscard={discardVideo} />;
  }

  if (capturedPhoto) {
    // console.log("Camera state updated:", capturedPhoto);

    const sharePhoto = () => {
      shareAsync(capturedPhoto.uri).then(() => {
        setCapturedPhoto(undefined);
      });
    };
    const savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(capturedPhoto.uri).then(() => {
        setCapturedPhoto(undefined);
      });
    };
    const discardPhoto = () => {
      setCapturedPhoto(undefined);
    };
    return <PictureView capturedPhoto={capturedPhoto} onDiscardPhoto={discardPhoto} onSavePhoto={savePhoto} onSharePhoto={sharePhoto} />;
  }

  const toggleCameraMode = () => {
    if (isRecording !== true) {
      setCameraMode((prevMode: string) => (prevMode === "picture" ? "video" : "picture"));
    }
  };

  return (
    <CameraViewC
      cameraMode={cameraMode}
      cameraRef={cameraRef}
      isRecording={isRecording}
      onRecord={recordVideo}
      onStopRecording={stopRecording}
      onPicture={takePicture}
      onCameraMode={toggleCameraMode}
    />
  );
}

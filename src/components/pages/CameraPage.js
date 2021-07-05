/* CAMERA PAGE - RENDERS THE CAMERA AND SAVES PHOTOS TO THE DEVICE CAMERA ROLL */

import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { useDispatch } from 'react-redux';
import * as MediaLibrary from 'expo-media-library';
import { addPhoto } from './../../actions/CreateRecipeActions';

export default function CameraPage({ navigation, route, imageHandler }) {
  const [ hasPermission, setHasPermission ] = useState(null);
  const [ hasMediaPermission, setMediaPermisson ] = useState(null);
  const dispatch = useDispatch();

  const [ type, setType ] = useState(Camera.Constants.Type.back);
  const [ tempImage, setTempImage ] = useState(0);

  const persistPhoto = (tempImage) => {
    dispatch(addPhoto(tempImage.base64));
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setMediaPermisson(status === 'granted');
    })();
  }, []);

  takePicture = async () => {
    if (this.camera) {
      this.camera.takePictureAsync({
        quality: 0.8,
        base64: true,
        onPictureSaved: this.renderImage
      });
    }
  };

  renderImage = photo => {
    setTempImage(photo);
  };

  saveImage = async () => {
    const albumName = "RecipePhotos";

    if (hasMediaPermission) {
      const asset = await MediaLibrary.createAssetAsync(tempImage.uri);
      const album = await MediaLibrary.getAlbumAsync(albumName).then((album) => {
        return album;
      });

      if (album == null) {
        MediaLibrary.createAlbumAsync(albumName, asset, false).then(() => {
          console.log("created album and saved");
        }).catch((e) => {
          console.log("e 1");
          console.log(JSON.stringify(e));
        });
      } else {
        MediaLibrary.addAssetsToAlbumAsync([ asset ], album, false).then(() => {
          console.log("Saved in album");
        }).catch((e) => {
          console.log("e 2");
          console.log(JSON.stringify(e));
        });
      }

      navigation.goBack();
      persistPhoto(tempImage);
    };
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const showCamera = () => {
    return (
      <Camera
        style={ styles.square }
        type={ type }
        ref={ ref => { this.camera = ref; } }
        ratio="1:1"
      >
        <View style={ styles.overaly }>
          <TouchableOpacity
            style={ styles.flip }
            onPress={ () => { setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back); } }>
            <Text style={ { fontSize: 18, color: 'white' } }>Flip</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ takePicture } style={ styles.shutterBox }>
            <View style={ styles.shutterButton } />
          </TouchableOpacity>
        </View>
      </Camera>
    );
  };

  const showImage = () => {
    return (
      <View>
        <Text style={ { color: 'black', fontSize: 30, textAlign: 'center' } }>Save this photo?</Text>
        <Image style={ {
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
        }, styles.square } source={ { uri: tempImage.uri } } />
        <View style={ { flexDirection: 'row', justifyContent: 'center' } }>
          <Feather name="check" size={ 50 } color="black" onPress={ () => saveImage() } />
          <Feather name="x" size={ 50 } color="black" onPress={ () => setTempImage(0) } />
        </View>
      </View>
    );
  };

  return (
    <View style={ styles.container }>
      { !tempImage ? showCamera() : showImage() }
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center'
  },
  overaly: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  square: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },

  shutterBox: {
    alignItems: 'center',
    marginBottom: 0,
    width: 100,
  },

  shutterButton: {
    borderWidth: 5,
    width: 100,
    height: 30,
    borderColor: 'white',
    borderRadius: 50,
    alignSelf: 'center',
    padding: 1,
    marginBottom: 10
  },

  flip: {
    height: 30,
    width: 100,
    alignItems: 'center',
  }
});

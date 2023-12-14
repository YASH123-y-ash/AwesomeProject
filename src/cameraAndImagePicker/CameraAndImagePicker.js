import React from 'react';
import {useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const CameraAndImagePicker = () => {
const[selectedImage, setSelectedImage] = useState();

const openImagePicker = () => {
const options = {
     mediaType: 'photo',
     includeBase64: false,
     maxHeight: 2000,
     maxWidth: 2000
}
launchImageLibrary(options, (response) => {
if(response.didCancel){
console.log('canceled image pickimg process');
}
else if(response?.error){
console.log('image picker error', response?.error)
}
else{
let imageUri = response.uri || response.assets?.[0]?.uri
console.log(response.uri)
setSelectedImage(imageUri);
}
})

}

const handleCameraLaunch = () => {
const options = {
     mediaType: 'photo',
     includeBase64: false,
     maxHeight: 2000,
     maxWidth: 2000
}
 launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
}
return(
<View  style={{ flex: 1, justifyContent: 'center' }}>
     {selectedImage && (
          <Image
            source={{ uri: selectedImage }}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
    )}
    <View style={{ marginTop: 20 }}>
      <Button title="Choose from Device" onPress={openImagePicker} />
    </View>
    <View style={{ marginTop: 20,marginBottom: 50 }}>
      <Button title="Open Camera" onPress={handleCameraLaunch} />
    </View>
</View>
)
}

export default CameraAndImagePicker;
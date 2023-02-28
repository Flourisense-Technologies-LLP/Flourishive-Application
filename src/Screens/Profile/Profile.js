import React,{useState} from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View , PermissionsAndroid , Platform, Alert } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Profile = () => {

    const [IsEditable, setIsEditable] = useState(false)
    const [updateProfilePhoto, setupdateProfilePhoto] = useState({uri:'' , type:'' ,name:''});


    /////////////////////////////////////////////////////////////////////////
    const clickAttachFile = () => {
        Alert.alert('Select image ', 'Choose options from below', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Choose From Library',
            onPress: async () => {
              _choose_image();
            },
          },
          {
            text: 'Take Photo',
            onPress: async () => {
              _captureImage();
            },
          },
        ]);
      };
      const _choose_image = () => {
        var options = {
          title: 'Select Image',
          customButtons: [
            {
              name: 'customOptionKey',
              title: 'Choose file from Custom Option',
            },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
          selectionLimit: 1,
        };
        launchImageLibrary(options, response => {
          console.log(response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            // alert(res.customButton);
          } else {
            
            let source = response.assets[0].uri;
            let type = response.assets[0].type;
            let name = response.assets[0].fileName;
            
            setupdateProfilePhoto({
              uri:source,
              type:type,
              name:name
            });
            // __apiCall_photo_update(source);
    
            // console.log("After ", _selected_images.length);
          }
        });
      };

      const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: 'Camera Permission',
                message: 'App needs camera permission',
              },
            );
            // If CAMERA Permission is granted
            // alert(granted)
            if(granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN)
            {
              console.log('reset');
            }
            return granted === PermissionsAndroid.RESULTS.GRANTED;
          } catch (err) {
            console.warn(err);
            return false;
          }
        } else return true;
      };
    
      const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'External Storage Write Permission',
                message: 'App needs write permission',
              },
            );
            // If WRITE_EXTERNAL_STORAGE Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
          } catch (err) {
            console.warn(err);
            // alert('Write permission err', err);
          }
          return false;
        } else return true;
      };
    
      const _captureImage = async () => {
        let options = {
          mediaType: 'image',
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
          // videoQuality: 'low',
          // durationLimit: 30, //Video max duration in seconds
          saveToPhotos: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        console.log('--', isCameraPermitted, '==', isStoragePermitted);
        if (isCameraPermitted && isStoragePermitted) {
          launchCamera(options, response => {
            console.log('Response uri = ', response.assets[0].uri);
            console.log('Response type = ', response.assets[0].type);
            console.log('Response name  = ', response.assets[0].fileName);
            if (response.didCancel) {
              console.log('User cancelled operation');
              return;
            } else if (response.errorCode == 'camera_unavailable') {
              console.log('Camera not available on device');
              return;
            } else if (response.errorCode == 'permission') {
              console.log('Permission not granted');
              return;
            } else if (response.errorCode == 'others') {
              console.log(response.errorMessage);
              return;
            }
            console.log('uri -> ', response.assets[0].uri);
    
            let source = response.assets[0].uri;
            let type = response.assets[0].type;
            let name = response.assets[0].fileName;
    
            setupdateProfilePhoto({
              uri:source,
              type:type,
              name:name
            });
          });
        } else {
          console.log('Give Camera and storage permission manually');
        }
      };
    
      
    /////////////////////////////////////////////////////////////////////////

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.main}>
        <View style={{height:200 , alignItems:'center',justifyContent:'center'}}>
            <View style={{height:100 , width:100 ,borderRadius:50}}>
                <Image 
                source={updateProfilePhoto.uri == '' ? require('../../Asset/krishna.jpg') : {uri:updateProfilePhoto.uri}}
                style={{height:100,width:100,borderRadius:60,borderWidth:2,borderColor:'#BDC1CA'}}/>
                <View style={{height:40 , width:40 , backgroundColor:'red',borderRadius:60,position:'absolute',right:-3,bottom:-3,borderWidth:2,borderColor:'#fff',alignItems:'center',justifyContent:'center'}}> 
                    <TouchableOpacity onPress={clickAttachFile}>
                    <Image source={require('../../Asset/pencil.png')} style={{height:25 , width:25}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{fontSize:18 , fontFamily:'Roboto-Bold' , color:'#E9282B' , marginVertical:10}}>Krishna Kale</Text>
        </View>
        <View>
            <View>
            <Text style={{fontSize:16 , fontFamily:'Roboto-Medium' , color:'#E9282B'}}>User Name</Text>
            <TextInput style={{borderBottomWidth:1 ,borderBottomColor:'#BDC1CA', marginBottom:10,color:'#3A3A3A'}} value='Krishna Kale' editable={IsEditable}/>
            <TouchableOpacity onPress={()=>{setIsEditable(!IsEditable)}}>
            <Image source={require('../../Asset/pencil.png')} style={{height:20 , width:20 , tintColor:'#E9282B',position:'absolute' , right:10 , bottom:20}}/>
            </TouchableOpacity>
            </View>
            <View>
            <Text style={{fontSize:16 , fontFamily:'Roboto-Medium' , color:'#E9282B'}}>E-mail ID</Text>
            <TextInput style={{borderBottomWidth:1 ,borderBottomColor:'#BDC1CA', marginBottom:10,color:'#3A3A3A'}} value='kalekrishna082001@gmail.com' editable={IsEditable}/>
            <TouchableOpacity onPress={()=>{setIsEditable(!IsEditable)}}>
            <Image source={require('../../Asset/pencil.png')} style={{height:20 , width:20 , tintColor:'#E9282B',position:'absolute' , right:10 , bottom:20}}/>
            </TouchableOpacity>
            </View>
            <View>
            <Text style={{fontSize:16 , fontFamily:'Roboto-Medium' , color:'#E9282B'}}>Phone Number</Text>
            <TextInput style={{borderBottomWidth:1 ,borderBottomColor:'#BDC1CA', marginBottom:10,color:'#3A3A3A'}} value='9834373642' editable={IsEditable}/>
            <TouchableOpacity onPress={()=>{setIsEditable(!IsEditable)}}>
            <Image source={require('../../Asset/pencil.png')} style={{height:20 , width:20 , tintColor:'#E9282B',position:'absolute' , right:10 , bottom:20}}/>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <View style={{width:'45%'}}>
            <Text style={{fontSize:16 , fontFamily:'Roboto-Medium' , color:'#E9282B'}}>City</Text>
            <TextInput style={{borderBottomWidth:1 ,borderBottomColor:'#BDC1CA', marginBottom:10,color:'#3A3A3A'}}  value='Pune' editable={IsEditable}/>
            <TouchableOpacity onPress={()=>{setIsEditable(!IsEditable)}}>
            <Image source={require('../../Asset/pencil.png')} style={{height:20 , width:20 , tintColor:'#E9282B',position:'absolute' , right:10 , bottom:20}}/>
            </TouchableOpacity>
            </View>
            <View style={{width:'45%'}}>
            <Text style={{fontSize:16 , fontFamily:'Roboto-Medium' , color:'#E9282B'}}>Pincode</Text>
            <TextInput style={{borderBottomWidth:1 ,borderBottomColor:'#BDC1CA', marginBottom:10,color:'#3A3A3A'}}  value='412207' editable={IsEditable}/>
            <TouchableOpacity onPress={()=>{setIsEditable(!IsEditable)}}>
            <Image source={require('../../Asset/pencil.png')} style={{height:20 , width:20 , tintColor:'#E9282B',position:'absolute' , right:10 , bottom:20}}/>
            </TouchableOpacity>
            </View>
            </View>
        </View>
        <View style={{justifyContent:'center',marginVertical:15}}>
        <Button
            title="Save"
            color="#E9282B"
        />
        </View>
    </View>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#fff',
        margin:20,
        padding:20,
        borderRadius:5
    }
})
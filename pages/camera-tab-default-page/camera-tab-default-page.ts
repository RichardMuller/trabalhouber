import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-camera-tab-default-page',
  templateUrl: 'camera-tab-default-page.html'
})
export class CameraTabDefaultPagePage {
  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  openCamera(){
	  const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 //let base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
});
}}
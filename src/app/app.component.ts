import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: "AIzaSyA-L4yZ6yy9_caHiAPxxUwYMySgAylEUG8",
  authDomain: "test-7b334.firebaseapp.com",
  databaseURL: "https://test-7b334.firebaseio.com",
  projectId: "test-7b334",
  storageBucket: "test-7b334.appspot.com",
  messagingSenderId: "399339344299"
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}

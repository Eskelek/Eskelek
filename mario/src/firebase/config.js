import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCkYLUxXy_FUGHqRz5qxMTGKjNT7gOedfE',
  authDomain: 'experimental-79ee9.firebaseapp.com',
  projectId: 'experimental-79ee9',
  storageBucket: 'experimental-79ee9.appspot.com',
  messagingSenderId: '62127223321',
  appId: '1:62127223321:web:4b369b425661f07938f088'
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }

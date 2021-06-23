import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

// const firebaseConfig = {
//   apiKey: 'AIzaSyCkYLUxXy_FUGHqRz5qxMTGKjNT7gOedfE',
//   authDomain: 'experimental-79ee9.firebaseapp.com',
//   projectId: 'experimental-79ee9',
//   storageBucket: 'experimental-79ee9.appspot.com',
//   messagingSenderId: '62127223321',
//   appId: '1:62127223321:web:4b369b425661f07938f088'
// }
const firebaseConfig = {
  apiKey: 'AIzaSyDj4Q1UhTLrfOiZNucOEmz0HX_dE2vNHE4',
  authDomain: 'homepage-67518.firebaseapp.com',
  projectId: 'homepage-67518',
  storageBucket: 'homepage-67518.appspot.com',
  messagingSenderId: '790200623598',
  appId: '1:790200623598:web:41f99e496912641c3eaeff',
  measurementId: 'G-W6GSV6TTH8'
}

firebase.initializeApp(firebaseConfig)

firebase.analytics()

const projectFirestore = firebase.firestore()

export { projectFirestore }

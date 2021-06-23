import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getMainPage = () => {
  const mainPage = ref([])
  const errorMainPage = ref(null)

  const loadMainPage = async () => {
    try {
      const res = await projectFirestore.collection('mainPage').get()
      mainPage.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })
    } catch (err) {
      errorMainPage.value = err.value.message
      console.log(errorMainPage.value)
    }
  }

  return { mainPage, errorMainPage, loadMainPage }
}

export default getMainPage

import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getLinks = () => {
  const links = ref([])
  const errorLinks = ref(null)

  const loadLinks = async () => {
    try {
      const res = await projectFirestore.collection('links').get()
      links.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })
    } catch (err) {
      errorLinks.value = err.value.message
      console.log(errorLinks.value)
    }
  }
  return { links, errorLinks, loadLinks }
}

export default getLinks

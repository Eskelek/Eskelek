import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPolicy = () => {
  const policy = ref([])
  const errorPolicy = ref(null)

  const loadPolicy = async () => {
    try {
      const res = await projectFirestore.collection('policy').get()
      policy.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })
    } catch (err) {
      errorPolicy.value = err.value.message
      console.log(errorPolicy.value)
    }
  }

  return { policy, errorPolicy, loadPolicy }
}

export default getPolicy

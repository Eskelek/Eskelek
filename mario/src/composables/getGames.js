import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getGames = () => {
  const games = ref([])
  const errorGames = ref(null)

  const loadGames = async () => {
    try {
      const res = await projectFirestore.collection('games').get()
      games.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })
    } catch (err) {
      errorGames.value = err.value.message
      console.log(errorGames.value)
    }
  }

  return { games, errorGames, loadGames }
}

export default getGames

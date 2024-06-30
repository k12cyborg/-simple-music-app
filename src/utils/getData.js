import axios from 'axios'

export async function getMusic(){
  try {
    const res = await axios.get("http://localhost:4000/api/music/musiccards")
    console.log(res)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export async function getSongs(){
  try {
    const res = await axios.get("http://localhost:4000/api/music/songs")
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export async function getSingers(){
  try {
    const res = await axios.get("http://localhost:4000/api/music/singers")
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export async function getGenres(){
  try {
    const res = await axios.get("http://localhost:4000/api/music/genres")
    return res.data
  } catch (error) {
    console.log(error)
  }
}

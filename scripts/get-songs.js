import axios from 'axios'

async function getSongs(){
  try {
    const res = await axios.get("http://localhost:4000/api/musiccard")
    return console.log(res)
  } catch (error) {
    console.log(error)
    return {error}
  }

}


export default getSongs
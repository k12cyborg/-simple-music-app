import axios from "axios";

export async function postGenre(form){
  let res;
  try {
    res = await axios.post("http://localhost:4000/api/music/genre", form);
  } catch (error) {
    if(error.response.data)
      if(error.response.data.cause.code === "DataAlreadyExists"){
        alert(`Genre named: ${form.GenreName} already exists.`)
      }
  }
}

export async function postMusicCard(form) {
  let formData = new FormData(form);
  let res;
  try {
    res = await axios.post("http://localhost:4000/admin/music/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res)
      console.log(res)

  } catch (error) {
    console.log(error);
  }
}

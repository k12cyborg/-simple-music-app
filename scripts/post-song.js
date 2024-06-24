import axios from 'axios';

const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  let formData = new FormData(form);
  console.log(formData)

  axios
    .post("http://localhost:4000/admin/musiccard", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      // Manejar la respuesta del backend
      console.log("Song and image uploaded succesfully", response.data);
    })
    .catch((error) => {
      // Manejar errores
      console.error("Error uploading song/image", error);
    });

})


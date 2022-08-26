//Aqui se centraliza la logica para realizar peticiones

//Realizar una peticion http
const jokeUrl = "https://api.chucknorris.io/jokes/random"; //End point al que se va a llamar
const urlUsuarios = "https://reqres.in/api/users?page=2";

const obtenerChiste = async () => {
  try {
    const respuesta = await fetch(jokeUrl);
    if (!respuesta.ok) throw "No se pudo realizar la petición";

    const { icon_url, id, value } = await respuesta.json();
    return { icon_url, id, value };
  } catch (error) {
    throw error;
  }
};

const obtenerUsuarios = async () => {
  try {
    const respuesta = await fetch(urlUsuarios);
    // if(!respuesta.ok) throw 'No se pudo realizar la petición';
    const { data, page } = await respuesta.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export { obtenerChiste, obtenerUsuarios };

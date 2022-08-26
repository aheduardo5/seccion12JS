import '../styles.css';
import { subirImagen } from "./crud-provider";

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {
  const html = `
        <h1 class="m-5">Subir Archivos</h1>
        <hr>

        <label class="mb-3">Selecciona una fotografia: </label>
        <input type="file" accept="image/png, image/jpeg" />
        <br>
        <img id="foto" class="img-thumbnail" src="" />
    `;
  const div = document.createElement("div");
  div.innerHTML = html;
  body.append(div);

  inputFile = document.querySelector("input");
  imgFoto = document.querySelector("#foto");
};

const eventos = () => {
  inputFile.addEventListener("change", (e) => {
    const file= e.target.files[0];
    // console.log(file);
    subirImagen(file).then( url => imgFoto.src = url)
  });
};
export const init = () => {
  crearInputFileHtml();
  eventos();
};

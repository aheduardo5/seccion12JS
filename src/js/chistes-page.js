import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, olList;
const chistes = [];

const crearChistesHtml = () => {
  const html = `
    <h1 class="mt-5">CHISTES</h1>
    <hr>
    <button class="btn btn-primary">Un chiste</button>
    <ol class="mt-2 list-group">
       
    </ol>`;

  const divChistes = document.createElement("div");
  divChistes.innerHTML = html;

  body.append(divChistes);
};

const eventos = () => {
  olList = document.querySelector("ol");
  btnOtro = document.querySelector("button");

  btnOtro.addEventListener("click", async () => {
    btnOtro.disabled = true;
    dibujarChiste(await obtenerChiste());
    setTimeout(() => {
      btnOtro.disabled = false;
    }, 1500);
  });
};

//{id,value} chiste
const dibujarChiste = (chiste) => {
  const olItem = document.createElement("li");
  olItem.innerHTML = `${chistes.length + 1} - <b>${chiste.id}</b> : ${
    chiste.value
  }`;
  olItem.classList.add("list-group-item");
  olList.append(olItem);
  chistes.push(olItem);
};

export const init = () => {
  crearChistesHtml();
  eventos();
};

const urlCRUD = "https://reqres.in/api/users";


// Cloudinary
const cloudPreset = 'vpfw5tor';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dmkf3d3vv/upload'

const getUsuario = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`);
  const { data } = await resp.json();

  return data;
};

const crearUsuario = async (usuario) => {
  const resp = await fetch(urlCRUD, {
    method: "POST",
    body: JSON.stringify(usuario),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(await resp.json());
};

const actualizarUsuario = async (id, usuario) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: "PUT",
    body: JSON.stringify(usuario),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

const eliminarUsuario = async(id,usuario) =>{

    const resp = await fetch(`${urlCRUD}/${id}`,{
        method: 'DELETE',
    });

    return ( resp.ok ) ? 'Usuario Eliminado' : 'No se pudo borrar el usuario';
}

const subirImagen = async(archivoSubir) =>{
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {
        const resp = await fetch(cloudUrl,{
            method: 'POST',
            body: formData
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.url;
        }else{
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}

export { getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario, subirImagen };

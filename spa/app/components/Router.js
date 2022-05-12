import { fetchApi } from "../helpers/fetch.js"
import api from "../helpers/wp_api.js"
import { PostCard } from "./PostCard.js"


export async function Router(){
const d = document;
const w = window;
const $main = d.getElementById("main");

    let {hash} = location
    console.log(hash)

    if(!hash || hash === "#/"){
        await fetchApi({
            url: api.POSTS,
            cbSuccess:(posts)=>{
                console.log(posts)
                let html = ""
                posts.forEach((post => html += PostCard(post)));
                $main.innerHTML = html ;
            }
        })
    }else if(hash.includes("#/search")){
        $main.innerHTML = `<h2>Seccion del Buscador</h2>`
    }else if(hash.includes("#/contacto")){
        $main.innerHTML = `<h2>Seccion de Contacto</h2>`
    }else{
        $main.innerHTML = `<h2>Aqui cargara el contenido del post previamente seleccionado</h2>`
        
    }
    d.querySelector(".loader").style.display = "none";
}
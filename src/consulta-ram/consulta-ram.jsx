import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function ConsultaRAM(){
    const [personagens, setPersonagens] = useState([]);

    useEffect(()=>{
        console.log("Consultar API");
        fetch("https://rickandmortyapi.com/api/character")
        .then((resposta)=>{
            return resposta.json()})
        .then((resultadoConsulta)=>{
            setPersonagens(resultadoConsulta.results)
        });
    },[]);
    return <>
        {
            personagens.map(personagem =>{
                return <div>
                <Link to = {`/consulta/${personagem.id}`}>{personagem.name}</Link>
                </div>
            })
        }
    </>
}

export default ConsultaRAM;
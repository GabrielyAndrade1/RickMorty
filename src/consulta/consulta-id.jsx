import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ConsultaId() {
    const { id } = useParams();
    console.log(id);
    const [personagem, setPersonagem] = useState(null);

    useEffect(() => {
        console.log("Consultar API");
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((resposta) => resposta.json())
            .then((resultadoConsulta) => {
                setPersonagem(resultadoConsulta);
            });
    }, [id]);

    if (!personagem) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h2>
                <img src={personagem.image} alt={personagem.name} />
                <br/>
                {personagem.name}
                <br/>
                {personagem.status}
                <br/>
                {personagem.species}
                {personagem.type && ` (${personagem.type})`}
                <br/>
                {personagem.gender}
                <br/>
                {personagem.origin.name}
                <br/>
                {personagem.location.name}
                <br/>

            </h2>
        </div>
    );
}

export default ConsultaId;

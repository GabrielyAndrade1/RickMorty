import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BuscaPorId() {
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/consulta/${id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Entre com o ID do personagem:
                <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </label>
            <button type="submit">Buscar</button>
        </form>
    );
}

export default BuscaPorId;

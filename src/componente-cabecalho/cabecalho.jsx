import {Link, Outlet } from "react-router-dom"

function Cabecalho() {
    return (
        <>
            <div>
                <h1>Rick and Morty</h1>
                <Link to={'/consulta-ram'}>Personagens</Link>
            </div>
            <Outlet/>
        </>
    );
}
export default Cabecalho;
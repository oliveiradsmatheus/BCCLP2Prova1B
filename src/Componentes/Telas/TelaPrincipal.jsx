import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import { candidatos } from "../../dados/candidatos";
export default function TelaPrincipal(props) {

    const [detalharCandidato, setDetalharCandidato] = useState(false);
    const [candidatoSelecionado, setCandidatoSelecionado] = useState(0);
    const [listaCandidatos, setListaCandidatos] = useState(candidatos)

    return (

        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato
                        candidatoSelecionado={candidatoSelecionado}
                        setCandidatoSelecionado={setCandidatoSelecionado}
                        setDetalharCandidato={setDetalharCandidato}
                        setListaCandidatos={setListaCandidatos}
                        listaCandidatos={listaCandidatos} />
                ) : (
                    <GridCandidatos
                        setCandidatoSelecionado={setCandidatoSelecionado}
                        setDetalharCandidato={setDetalharCandidato}
                        setListaCandidatos={setListaCandidatos}
                        listaCandidatos={listaCandidatos} />
                )
            }
        </Pagina>
    );
}
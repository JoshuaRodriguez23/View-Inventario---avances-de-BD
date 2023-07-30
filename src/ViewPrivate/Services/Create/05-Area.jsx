import { FrameSelect } from "../../Componentes/Frame"
export const Area = () =>{
    const BD = [
        {Nombre: "Biblioteca", Pk:1},
        {Nombre: "Vinculacion", Pk:2},
        {Nombre: "A-15", Pk:3},
    ]
    return(
        <FrameSelect Entidad="Area" Link_next="4" BD={BD} Fila={4}/>
    )
}


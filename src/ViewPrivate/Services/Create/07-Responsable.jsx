import { FrameSelect } from "../../Componentes/Frame"

export const Responsable = () =>{

    const BD = [
        {Nombre: "Juan", Pk:1},
        {Nombre: "Gabriel", Pk:2},
        {Nombre: "Ana", Pk:3},
    ]
    return(
        <FrameSelect Entidad="Responsable" Link_next="5" BD={BD} Fila={5}/> 
    )
}
import { FrameSelect } from "../../Componentes/Frame"
export const Rol = () =>{
    const BD = [
        {Nombre: "Docente", Pk:1},
        {Nombre: "Asesor", Pk:2},
        {Nombre: "Director de carrera", Pk:3},
    ]
    return(
        <FrameSelect Entidad="Rol" Link_next="4_1" BD={BD} Fila={5}/>
    )
}
import { FrameSelect } from "../Componentes/Frame"
export const Rol = () =>{
    const BD = [
        {nombre: "Docente", pk:1},
        {nombre: "Acesor", pk:2},
        {nombre: "Director de carrera", pk:3},
    ]
    return(
        <FrameSelect tabla="Rol" siguiente="4.1" BD={BD} Hilera={4}/>
    )
}
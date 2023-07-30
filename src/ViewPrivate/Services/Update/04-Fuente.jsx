import { FrameSelect } from "../Componentes/Frame"
export const Fuente = () =>{
    const BD = [
        {nombre: "N/A", pk:1},
        {nombre: "ingresos propios", pk:2},
        {nombre: "Donaciones", pk:3},
    ]
    return(
        <FrameSelect tabla="Fuente" siguiente="3" BD={BD} Hilera={2}/>
    )
}

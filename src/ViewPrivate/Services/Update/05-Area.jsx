import { FrameSelect } from "../Componentes/Frame"
export const Area = () =>{
    const BD = [
        {nombre: "Biblioteca", pk:1},
        {nombre: "Vinculacion", pk:2},
        {nombre: "A-15", pk:3},
    ]
    return(
        <FrameSelect tabla="Area" siguiente="4" BD={BD} Hilera={3}/>
    )
}


import { FrameSelect } from "../Componentes/Frame"
export const Catalogo = () =>{
    const BD = [
        {nombre: "Computadoras", pk:1},
        {nombre: "Impresoras", pk:2},
        {nombre: "Camaras", pk:3},
        {nombre: "Aire", pk:4},
    ]
    return(
        <FrameSelect tabla="Catalogo" siguiente="0.1" BD={BD} Hilera={0}/>
    )
}
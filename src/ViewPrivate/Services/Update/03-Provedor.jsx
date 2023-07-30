import { FrameSelect } from "../Componentes/Frame"
export const Provedor = () =>{
    const BD = [
        {nombre: "Apple", pk:1},
        {nombre: "Dell", pk:2},
        {nombre: "Soni", pk:3},
    ]
    return(
        <FrameSelect tabla="Provedor" siguiente="2" BD={BD} Hilera={1}/>
    )
}

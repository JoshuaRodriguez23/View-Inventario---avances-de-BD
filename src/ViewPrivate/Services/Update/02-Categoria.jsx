import { FrameSelect } from "../Componentes/Frame"
export const Categoria = () =>{
    const BD = [
        {nombre: "Aire acondicionado de ventana", pk:1},
    ]
    return(
        <FrameSelect tabla="Categoria" siguiente="1" BD={BD} Hilera={0}/>
    )
}
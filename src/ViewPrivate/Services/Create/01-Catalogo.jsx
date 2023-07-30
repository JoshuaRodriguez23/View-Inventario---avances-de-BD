import { FrameSelect } from "../../Componentes/Frame"
import { AlerModal } from "../../index"
export const Catalogo = () =>{
    const BD = [
        {Nombre: "Computadoras", Pk:1},
        {Nombre: "Impresoras", Pk:2},
        {Nombre: "Camaras", Pk:3},
        {Nombre: "Aire", Pk:4},
    ]        
    return(    
        <FrameSelect Entidad="Catalogo" Link_next="0_1" BD={BD} Fila={0} />    
    )
    
}
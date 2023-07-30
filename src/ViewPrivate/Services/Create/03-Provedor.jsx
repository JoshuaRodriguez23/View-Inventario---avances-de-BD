import { FrameSelect } from "../../Componentes/Frame"
export const Provedor = () =>{
    
    const BD = [
        {Nombre: "Apple", Pk:1},
        {Nombre: "Dell", Pk:2},
        {Nombre: "Soni", Pk:3},
    ]
    return(
        <FrameSelect Entidad="Provedor" Link_next="2" BD={BD} Fila={2}/>
    )
}

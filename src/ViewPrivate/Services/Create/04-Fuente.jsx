import { FrameSelect } from "../../Componentes/Frame"
export const Fuente = () =>{
    
    const BD = [
        {Nombre: "N/A", Pk:1},
        {Nombre: "ingresos propios", Pk:2},
        {Nombre: "Donaciones", Pk:3},
    ]
    return(
        <FrameSelect Entidad="Fuente" Link_next="3" BD={BD} Fila={3}/>
    )
}

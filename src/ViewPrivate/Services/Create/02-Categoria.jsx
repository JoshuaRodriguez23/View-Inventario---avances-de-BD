import { FrameSelect } from "../../Componentes/Frame"
export const Categoria = () =>{

    const BD = [
        {Pk:1,Descripcion:"aire acondicionado de techo",Modelo:"A135",Costo:35},
        {Pk:1,Descripcion:"mini split",Modelo:"A135",Costo:35},
        {Pk:1,Descripcion:"aire acondicionado de ventana",Modelo:"A135",Costo:35},
    ]
    return(
        <FrameSelect Entidad="Categoria" Link_next="1" BD={BD} Fila={1}/>
    )
}
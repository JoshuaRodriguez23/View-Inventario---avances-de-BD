import { FrameSelect } from "../Componentes/Frame"
import { useContext } from 'react';
import { ContextUser } from '../Context/ContextUser';

export const Responsable = () =>{

    const BD = [
        {nombre: "Juan", pk:1},
        {nombre: "Gabriel", pk:2},
        {nombre: "Ana", pk:3},
    ]
    return(
        <FrameSelect tabla="Responsable" siguiente="5" BD={BD} Hilera={4}/> 
    )
}
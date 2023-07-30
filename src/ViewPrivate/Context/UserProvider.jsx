import { useState } from "react"; 
import { ContextUser } from "./ContextUser";
import { useNavigate } from "react-router-dom";

export const UserProvider = ({ children }) => {

    const navigate = useNavigate();

    const [Data, setData] = useState([]);
    
    const [Nav, setNav] = useState([
        {tabla:"Categorias", titulo:"pendiente"},
        {tabla:"Provedores", titulo:"pendiente"},
        {tabla:"Fuente", titulo:"pendiente"},
        {tabla:"Area", titulo:"pendiente"},
        {tabla:"Responsable", titulo:"pendiente"},
        {tabla:"Articulo", titulo:"Token"}]);

    const EditarData = (BD,Fila,Siguiente,Entidad)=>{
        let newData = [...Data];
        newData[Fila] = BD
        
        setData(newData);

        if(Fila == 0){
            AgregarNav({Nombre:BD.Nombre, Titulo:Entidad, Siguiente:Siguiente, Llave:BD.Pk, Index:0})
        }
        if(Fila == 1){
            AgregarNav({Nombre:BD.Descripcion, Titulo:Entidad, Siguiente:Siguiente, Llave:BD.Pk, Index:0})
        }
        if(Fila == 2){
            AgregarNav({Nombre:BD.Nombre, Titulo:Entidad, Siguiente:Siguiente, Llave:BD.Pk, Index:1})
        }
        if(Fila == 3){
            AgregarNav({Nombre:BD.Nombre, Titulo:Entidad, Siguiente:Siguiente, Llave:BD.Pk, Index:2})
        }
        if(Fila == 4){
            AgregarNav({Nombre:BD.Nombre, Titulo:Entidad, Siguiente:Siguiente, Llave:BD.Pk, Index:3})
        }
        if(Fila == 5 || Fila == 6){
            AgregarNav({Nombre:BD.Nombre, Titulo:Entidad, Siguiente:Siguiente, Llave:BD.Pk, Index:4})
        }
    }

    const AgregarData = ({Reques:BD, Index:Fila, Link_next:Siguiente, Titulo:Entidad}) => {
        if(Data[Fila] != null){
            EditarData(BD,Fila,Siguiente,Entidad)
            return 0
        }

        const newData = [...Data, BD];
        setData(newData);

        if(Fila == 0){
            AgregarNav({Nombre:BD.Nombre, Titulo:Entidad, Siguiente:Siguiente, Llave:BD.Pk, Index:0})
        }
        if(Fila == 1){
            AgregarNav({Nombre:BD.Descripcion, Titulo:Entidad, Siguiente:Siguiente, Llave:BD.Pk, Index:0})
        }
        if(Fila == 2){
            AgregarNav({Nombre:BD.Nombre, Titulo:Entidad, Siguiente:Siguiente, Llave:BD.Pk, Index:1})
        }
        if(Fila == 3){
            AgregarNav({Nombre:BD.Nombre, Titulo:Entidad, Siguiente:Siguiente, Llave:BD.Pk, Index:2})
        }
        if(Fila == 4){
            AgregarNav({Nombre:BD.Nombre, Titulo:Entidad, Siguiente:Siguiente, Llave:BD.Pk, Index:3})
        }
        if(Fila == 5 || Fila == 6){
            AgregarNav({Nombre:BD.Nombre, Titulo:Entidad, Siguiente:Siguiente, Llave:BD.Pk, Index:4})
        }

        
    }

    const AgregarNav = ({Nombre:nombre, Titulo:entidad, Siguiente:siguiente, Llave:pk, Index:hilera}) => {
        if(Nav[hilera] != null){
            EditarNav({Nombre:nombre, Titulo:entidad, Siguiente:siguiente, Llave:pk, Index:hilera})
            return 0
        }

        const item = {tabla: entidad, titulo: nombre, funcion: "C", id: pk}
        const newNav = [...Nav, item];
        setNav(newNav);
        navigate('/Create/'+siguiente, {replace: true})
        //cambia la direccion del href Url
    }

    const EditarNav = ({Nombre:nombre, Titulo:entidad, Siguiente:siguiente, Llave:pk, Index:hilera})=>{
        let newNav = [...Nav];
        newNav[hilera] = {tabla: entidad, titulo: nombre, funcion: "C", id: pk}
        
        setNav(newNav);
        navigate('/Create/'+siguiente, {replace: true})
    }

    

   

    return (

        <ContextUser.Provider 
        value={{Data:Data, AddData:AgregarData,
                Nav:Nav, AddNav:AgregarNav}}>
            {children}
        </ContextUser.Provider>
    )
  }
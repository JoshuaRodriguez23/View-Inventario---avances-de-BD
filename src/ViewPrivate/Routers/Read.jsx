import {Route, Routes} from 'react-router-dom'
import Logo from "../../assets/Logo.png"
import { Responsables } from "../index"
import { NavBoton } from "../Componentes/NavBoton"
import { useContext } from 'react';
import { ContextUser } from '../Context/ContextUser';
import { Link } from "react-router-dom"

export const Read = () => {
  const { Data } = useContext( ContextUser)
console.table(Data)
    return (
      <>
        <div className="w-screen h-screen bg-black-500  flex flex-row items-center">     
        <div className='w-[320px] h-screen bg-white flex justify-center'>
            <div className=' max-w-[60%] pt-9'>
              <img src={Logo}/>
              <div className='w-[100%]'>
                <h1 className='pt-10'>
                  Articulos
                </h1>     
                <Link to="/Create">
                  <NavBoton titulo="Create" funcion="C"/>
                </Link> 

                <NavBoton titulo="Buscar" funcion="R"/>
              </div>
            </div>
          </div>

          <div className=' bg-gray-200 w-full h-full'>
              <div className="flex justify-end bg-white">
                <Link className='p-5' to="/">Cerrar sesion</Link>
              </div>
              
              <Routes>
                <Route path='/*' element={<Responsables/>}/>
              </Routes>
          </div>
        </div>
      </>
      
    )
  }
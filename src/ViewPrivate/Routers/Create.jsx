import {Route, Routes} from 'react-router-dom'
import Logo from "../../assets/Logo.png"
import { Catalogo, Categoria, Provedor, Fuente, Area, Rol, Responsable, Articulo } from "../index"
import { NavBoton } from "../Componentes/NavBoton"
import { useContext } from 'react';
import { ContextUser } from '../Context/ContextUser';
import { Link } from 'react-router-dom';

export const Create = () => {

const { Nav } = useContext( ContextUser)

const Color =[
  "bg-[#0032FF]",
  "bg-[#0C86E8]",
  "bg-[#00EAFF]",
  "bg-[#12DEA1]",
  "bg-[#02E049]",
]

    return (
      <>
        <div className="w-screen h-screen bg-black-500  flex flex-row items-center">
          <div className='w-[320px] h-screen bg-white flex justify-center '>
            <div className=' max-w-[60%] pt-9'>
              <img src={Logo}/>
              <div className='w-[100%]'>
                <h1 className='pt-10'>
                  Articulos
                </h1>      
                <NavBoton titulo="Crear" funcion="C" color=" bg-orange-500"/>
                
               
                  {Nav.map((element, index) => 
                    (
                        <NavBoton key={index}
                          direccion = {index}
                          color={Color[index]}
                          titulo={element.titulo}
                          funcion={element.funcion}
                          sub={element.tabla}
                        />
                      )
                    )
                  }
                <Link to="/Read">
                <NavBoton titulo="Buscar" funcion="R"/>
                </Link>
              
              </div>
            </div>
          </div>
          <div className='bg-gray-200 w-full h-full'>
              <div className="flex justify-end bg-white">
                <Link className='p-5' to="/">Cerrar sesion</Link>
              </div>
              <div className='w-full'>
                <Routes>
                  <Route path='/0' element={<Catalogo/>}/>
                  <Route path='/0_1' element={<Categoria/>}/>
                  <Route path='/1' element={<Provedor/>}/>
                  <Route path='/2' element={<Fuente/>}/>
                  <Route path='/3' element={<Area/>}/>
                  <Route path='/4' element={<Rol/>}/>
                  <Route path='/4_1' element={<Responsable/>}/>
                  <Route path='/5' element={<Articulo/>}/>
                  <Route path='/*' element={<Catalogo/>}/>
                </Routes>
              </div>
          </div>
        </div>
      </>
      
    )
  }




  // {Data.map((element, index) => 
  //   (
  //     <>
  //     <NavBoton
  //         color={element.style.color}
  //         titulo={element.style.titulo}
  //         funcion={element.style.funcion}
  //       />
  //        <h1> {index}</h1>
    
  //     </>
  //   ))}
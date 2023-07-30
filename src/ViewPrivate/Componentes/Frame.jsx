import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextUser } from '../Context/ContextUser';
import ImgDelete from "../../assets/Delete.svg";
import ImgUpdate from "../../assets/Edit.svg";

export const FrameSelect = ({ Entidad, Link_next, BD, Fila }) => {
  const { AddData } = useContext(ContextUser);

  const createToken = (pk, nombre) => {
    const tokenData = { pk, nombre };
    const jsonString = JSON.stringify(tokenData);
    const token = btoa(jsonString);
    return token;
  };

  const eliminar = (pk, nombre) => {
    // Implement the eliminar function here
  };

  const editar = (pk, nombre) => {
    // Implement the editar function here
  };

  return (
    <div className="w-full h-full pt-2">
      <div className="w-full h-[100%] p-5 flex justify-between">
        <div className="flex flex-wrap w-full bg-gray-500 fle-row">
          {BD.map((element, index) => (
            <div className="relative" key={index}>
              <div className="absolute top-0 left-0 max-w-[200px] min-w-[200px] m-5">
                <div className="flex flex-col w-full p-2 text-center">
                  <div className='relative z-10 flex flex-col items-end w-full'>
                    <Link to={`/Catalogo/${createToken(element.Pk, element.Nombre)}`}>
                      <button className='transition duration-150 ease-out bg-white p-1 m-1 border-yellow-400 border-[2px] rounded-lg'>
                        <img src={ImgUpdate} alt="Update" />
                      </button>
                    </Link>
                    <button onClick={() => eliminar(element.Pk, element.Nombre)} className='bg-white p-1 m-1 border-red-400 border-[2px] rounded-lg'>
                      <img src={ImgDelete} alt="Delete" />
                    </button>
                  </div>
                </div>
              </div>

              <div onClick={() => AddData({ Reques: element, Index: Fila, Link_next: Link_next, Titulo: Entidad })} className="bg-white max-w-[200px] min-w-[200px] m-5">
                <div className="flex flex-col w-full p-2 text-center bg-white">
                  <div className='relative flex flex-col items-end w-full'>
                  <Link to={`/Catalogo/${createToken(element.Pk, element.Nombre)}`}>
                      <button className='bg-white p-1 m-1 border-yellow-400 border-[2px] rounded-lg'>
                        <img src={ImgUpdate} alt="Update" />
                      </button>
                    </Link>
                    <button onClick={() => editar(element.Pk, element.Nombre)} className='p-1 m-1 border-red-400 border-[2px] rounded-lg'>
                      <img src={ImgDelete} alt="Delete" />
                    </button>
                  </div>
                  <div className='font-bold text-center w-full flex justify-center items-center h-[140px]'>
                    {/* Aquí puedes mostrar otros detalles del elemento */}
                    {element.Nombre && (
                      <h1>{element.Nombre}</h1>
                    )}
                    {element.Descripcion && (
                      <h1>{element.Descripcion}</h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameSelect;

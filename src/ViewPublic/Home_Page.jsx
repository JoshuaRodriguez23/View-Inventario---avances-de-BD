import {Link} from 'react-router-dom'
export const HomePage = () => {
  return (
  <>
    <div className="flex items-center justify-center w-screen h-screen bg-black-500 bg-slate-900">
      <h1 className="text-3xl font-bold text-white">
        Bienvenido a Home Page
      </h1>
      <Link to={"/"} className="p-2 bg-red-500 rounted-md">
      Volver al anterior
      </Link>
    </div>
  </> 
  )
}               
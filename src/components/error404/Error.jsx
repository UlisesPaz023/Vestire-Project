import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="container text-center mt-3">
      <h2> Error 404</h2>
      <p> Lo sentimos, esta página no existe :( </p>
      <button
        className="border-0 bg-black text-white fw-bold py-2 btn"
        onClick={() => navigate('/')}
      >
        Ir a Inicio
      </button>
    </div>
  )
}

export default Error

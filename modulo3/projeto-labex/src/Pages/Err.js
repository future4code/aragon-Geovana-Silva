import { useNavigate } from 'react-router-dom';
import { irParaHome } from '../Routes/Coordinator';

export default function Err() {
    const navigate = useNavigate()

return(
    <div>
        <h1> Erro! Página não encontrada! ❌</h1>
        <button onClick={() => irParaHome(navigate)}> Voltar para página inicial </button>
    </div>
)
}

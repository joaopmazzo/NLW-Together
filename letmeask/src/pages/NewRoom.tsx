import { Link } from 'react-router-dom';

//import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
  //const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&A ao-vivo</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo da Letmeask" />
          <h2>Crie uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />

            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala ja exitente? <Link to='/'>Clique aqui</Link >
          </p>
        </div>
      </main>
    </div>
  )
}
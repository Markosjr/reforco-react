
import { WelcomeMessageDTO } from 'classes/WelcomeMessageDTO';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { NodeAPI } from './services/services'
import CreateUser from 'views/CreateUser';


function App() {
  const [message, setMessage] = useState<string>('');

  async function getWelcomeMessage(){
    try{
    const WelcomeMessage: AxiosResponse<WelcomeMessageDTO> =
     await NodeAPI.get( `${process.env.REACT_APP_API_URL}` );
     console.log(WelcomeMessage.data.mensagem);
     setMessage(WelcomeMessage.data.mensagem);
    
    } catch (error) {
      console.log(error);
      setMessage('Erro na chamada da API');
    }
  }

  useEffect(() => {
    console.log('Renderizei meu componente');
    getWelcomeMessage();  
     
  }, []);

  return (
    <>
      <CreateUser/>
    </>
  );
}

export default App;

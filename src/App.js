
import { useState } from 'react';
import Formularios from './componentes/Formulario/index.js';
import Banner from './componentes/banner/banner';
import Time from './componentes/Time/index.js';
import Rodape from './componentes/Rodapé/index.js';

function App() {

  const times = [
    {
      nome: 'Programacao',
      corPrimaria: '#d9f7e9',
      corSecundaria: '#57c278'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#E8f8ff',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'UX e Desing',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      nome: 'Inovacao e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdcionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formularios times={times.map(time => time.nome)} aoColaboradorCadastrado={
        colaborador => aoNovoColaboradorAdcionado(colaborador)}
      />

      {times.map(time => <Time 
                            key={time.nome} 
                            nome={time.nome} 
                            corPrimaria={time.corPrimaria} 
                            corSecundaria={time.corSecundaria}
                            colaboradores={colaboradores.filter( colaborador => colaborador.time === time.nome)}
                            />)}
     <Rodape/>

    </div>
  );
}

export default App; 

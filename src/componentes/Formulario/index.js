import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao/Index'
import { useState } from 'react'

const Formularios = (props) => {

       
//estados - hook
const[nome, setNome] = useState('')
const[cargo, setCargo] = useState('')
const[imagem, setImagem] = useState('')
const[time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, cargo, imagem,time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os Dados para Criar o Cargo do Colaborador</h2>
                <CampoTexto  
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome' 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />

                <CampoTexto 
                    obrigatorio={true}  
                    label='Cargo' 
                    placeholder='Digite seu Cargo'
                    valor={cargo}
                    aoAlterado={valor =>setCargo(valor)} 
                    />
                
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />
                
                <ListaSuspensa 
                    obrigatorio={true}  
                    label='Time' 
                    itens={props.times}
                    valor ={time}
                    aoAlterado={valor=> setTime(valor)}
                    />

                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}
export default Formularios
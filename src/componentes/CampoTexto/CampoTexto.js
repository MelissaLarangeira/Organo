import { useState } from 'react'
import'./CampoTexto.css'

const CampoTexto = (props)=>{
    //interpolação de string
    const placeholderModificada = `${props.placeholder}...`
    
   // let valor = ''

   //Server para manter um estado dentro de uma ação
   //sempre que a ação iniciar-se com use, sempre se trata
   //de um hook
   //const [valor, setValor] = useState('')

    const aoDigitado = (evento)=>{
        props.aoAlterado(evento.target.value) 
    }
    
    return(        
    <div className="campo-texto">
        <label>{props.label}</label>
         <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
    </div>   
);
}
export default CampoTexto
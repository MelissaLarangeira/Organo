import'./Botao.css'

const Botao = (props) =>{
    return(
        <div className='botao-card'>   
            <button >
                {props.children}
            </button>
        </div>
    )
}
export default Botao
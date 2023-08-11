import './Rodape.css'
function Rodape() {

    const backgroundImageStyle = {
        backgroundImage: 'url("/imagens/fundo.png")',
    };

    return (
        //JSX - tratamento do react da imagem
        <footer className="rodape" style={backgroundImageStyle}>
            <section>
            <div className='redes'>
                <img src="/imagens/ig.png" />
                <img src="/imagens/tw.png" />
                <img src="/imagens/fb.png" />
            </div>

            <div className='organo' >
                <img src="/imagens/logo.png" />
            </div>
            <p>
                Desenvolvido por Melissa.
            </p>
            </section>
        </footer>
    )
}
export default Rodape
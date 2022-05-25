import { useState} from 'react';
import Head from 'next/head';
import Router from 'next/router';



function Home(){
    return(
        <div >
            
                <Head>
                <title>Jovepy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
        
                </Head>
            
                <div class="container-fluid">
                    <div class="position-absolute top-50 start-50 translate-middle">
                            <div class="d-grid gap-5 col-6 mx-auto px-auto">
                                <button class="btn btn-primary-dark" type="button" onClick={() => Router.push('/jovepy')} >Jove.py</button>
                                <button class="btn btn-primary-dark" type="button" onClick={() => Router.push('/caderno')} >Caderno</button>
                                <button class="btn btn-primary-dark" type="button" onClick={() => Router.push('/jovepy')} >Empreenda</button>
                                <button class="btn btn-primary-dark" type="button" onClick={() => Router.push('/jovepy')} >Opere com Derivativos</button>
                                <button class="btn btn-primary-dark" type="button" onClick={() => Router.push('/jovepy')} >Invista com FI's</button>
                                <Contador />
                        </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
        </div>
    </div>
    
    )
}

  

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador +1);
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>

        
    )
}


export default Home
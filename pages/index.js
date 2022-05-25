import { useState} from 'react';
//import Head from 'next/head';
import Router from 'next/router';



function Home(){
    return(
        <div >
            <button class="btn btn-primary-dark" type="button" onClick={() => Router.push('/jovepy')} >Jove.py</button>
            <button class="btn btn-primary-dark" type="button" onClick={() => Router.push('/jovepy')} >Caderno</button>
            <button class="btn btn-primary-dark" type="button" onClick={() => Router.push('/jovepy')} >Empreenda</button>
            <button class="btn btn-primary-dark" type="button" onClick={() => Router.push('/jovepy')} >Opere com Derivativos</button>
            <button class="btn btn-primary-dark" width = "400px" type="button" onClick={() => Router.push('/jovepy')} >Invista com FI's</button>   
            <Contador />
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
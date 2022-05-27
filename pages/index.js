//import Head from 'next/head';
import Router from 'next/router';
import Image from 'next/image';
import React from 'react'

const myLoader = ({ src, width, quality }) => {
    return `./${src}?w=${width}&q=${quality || 75}`
  }

function Home(){
    return(
        <div >

            <div class="row">
                <div class="col-6 col-md-4"></div>
                <div class="col-6 col-md-4">
                    <div class="position-absolute top-50 start-50 translate-middle">
                        <div class="d-grid gap-4">
                            <button class="btn btn-outline-light" type="button" onClick={() => Router.push('/jovepy')} >Jove.py</button>
                            <button class="btn btn-outline-light" type="button" onClick={() => Router.push('/jovepy')} >Caderno</button>
                            <button class="btn btn-outline-light" type="button" onClick={() => Router.push('https://jovepy.github.io/empreenda/')} >Empreenda</button>
                            <button class="btn btn-outline-light" type="button" onClick={() => Router.push('/jovepy')} >Opere com Derivativos</button>
                            <button class="btn btn-outline-light" type="button" onClick={() => Router.push('/jovepy')} >Invista com FI's</button>  
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <div call="col"><button><Image loader={myLoader} src="images/linkedin.png" alt="Picture of the author" width={25} height={25}/></button></div>
                                <div call="col"><button><Image loader={myLoader} src="images/linkedin.png" alt="Picture of the author" width={25} height={25}/></button></div>
                                <div call="col"><button><Image loader={myLoader} src="images/linkedin.png" alt="Picture of the author" width={25} height={25}/></button></div>
                                <div call="col"><button><Image loader={myLoader} src="images/linkedin.png" alt="Picture of the author" width={25} height={25}/></button></div>
                                <div call="col"><button><Image loader={myLoader} src="images/linkedin.png" alt="Picture of the author" width={25} height={25}/></button></div>
                            </div>
                        </div>

                        
                    </div>
                    
                </div>
                <div class="col-6 col-md-4"></div>
                
            </div>
            
        </div>
    
    )
}

export default Home
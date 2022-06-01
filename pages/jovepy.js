import React from 'react'
import Router from 'next/router';
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `./${src}?w=${width}&q=${quality || 75}`
}

function jovepy() {
    return (
    <div class="container-fluid">
    <div class="bg"></div>
    <div class="star-field">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="d-grid gap-3">
      <div class="container-fluid">
        <div><br></br></div>
        <div class="row align-items-center">
          <div class="col-6 col-md-4"></div>
          <div class=".col-md-6 .offset-md-3">
            <div class="d-grid gap-4">
            <button type="button" class="btn-close btn-close-white" type="button" onClick={() => Router.push('/')}></button>
                              <div class="card mb-4">
                                <div class="row g-0">                                    
                                  <div class="col-md-4">
                                    <div class="text-center">
                                    <div class="row"><br></br></div>
                                    <div class='mx-auto'>
                                    <img loader={myLoader} src="./images/perfilalt.png" alt="Rosto de Jovepy" width={150} height={150} class="profile"/>
                                    <div><br></br></div>
                                    </div>
                                  </div>
                                  </div>
                                  <div class="col-md-8">
                                    <div class="card-body">
                                      <h5 class="fw-bold">With open ('jove.py', 'r') as me:</h5>
                                      <p class="card-text">print(me.read())</p>
                                      <p class="font-monospace"> >>>26 anos, Graduando em Economia e Desenvolvedor Python</p>
                                      <p class="card-text"><small class="text-muted">atualizado em 30 de maio de 2022</small></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button class="btn btn-outline-light" type="button" onClick={() => Router.push('https://www.linkedin.com/in/rodrigojove')}>Linkedin</button>
                              <button class="btn btn-outline-light" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=83998775808&text=Olá!!')}>Envie-me uma mensagem</button>
                              <div class="row"></div>
                            </div>
                            
            </div>
          </div>
          </div>
          <div class="col-6 col-md-4"></div>
          </div>
        </div>
      </div>
    

    )

  }

export default jovepy
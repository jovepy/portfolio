//import Head from 'next/head';
import Router from 'next/router';
import React from 'react'


function Saudacao(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 18){
        greeting = 'Boa Noite.';
    } else if (hourNow >= 12){
        greeting = 'Boa Tarde.';
    } else{
        greeting = 'Bom dia.'
    }
    return (greeting);
}

function Home(){
    return (
        <div class="container-fluid">
        <div class="bg"></div>
        <div class="star-field">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="row"><br></br></div>
        <div class="row">
                  <div class="col-6 col-md-4"></div>
                  <div class="col-6 col-md-4">
                      <div class="position-absolute top-50 start-50 translate-middle">
                          <div class="d-grid gap-4">
                              <div class='greeting'>
                                    <h1 ><Saudacao /> Seja bem-vindo ao meu portfólio</h1>
                                    <p> Aqui você encontrará o caminho para todos os meus projetos</p>
                              </div>
                              <button class="btn btn-outline-light" type="button" onClick={() => Router.push('/jovepy')} >Jove.py</button>
                              <button class="btn btn-outline-light" type="button" onClick={() => Router.push('https://jovepy.github.io/empreenda/')} >Empreenda</button>
                              <button class="btn btn-outline-light" type="button" onClick={() => Router.push('https://github.com/jovepy/Opere-com-derivativos')} >Opere com Derivativos</button>
                              <button class="btn btn-outline-light" type="button" onClick={() => Router.push('https://github.com/jovepy/Fundos_Investimento_B3')} >Invista com FI's</button>  
                              <div class="row"></div>
                          </div>
                      </div>
                  </div>
                  <div class="col-6 col-md-4"></div>
              </div>
        </div>
        
        </div>

      )
  }

export default Home
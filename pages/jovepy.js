import Image from 'next/image';
import React from 'react'

const myLoader = ({ src, width, quality }) => {
  return `./${src}?w=${width}&q=${quality || 75}`
}

function jovepy() {
    return (
      <div class="container-fluid" >
      <div class="bg"></div>
      <div class="star-field">
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="row">
                  <div class="col-6 col-md-4"></div>
                  <div class="col-6 col-md-4">
                      <div class="position-absolute top-50 start-50 translate-middle">
                          <div class="d-grid gap-4">
                          <h2>With open ('jove.py', 'r') as me:</h2>
                          <h3>print(me.read())</h3>
                          <p>>> 26 anos, Graduando em Economia e Desenvolvedor Python</p>
                            <Image loader={myLoader} src="images/perfilalt.png" alt="Rosto de Jovepy" width={300} height={300} class="profile"/>  
                            <button class="btn btn-outline-light" type="button" onClick={() => Router.push('https://www.linkedin.com/in/rodrigojove/')} >Linkedin</button>
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
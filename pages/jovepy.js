import Image from 'next/image';
import React from 'react'

const myLoader = ({ src, width, quality }) => {
  return `./${src}?w=${width}&q=${quality || 75}`
}

function jovepy() {
    return (
      <div>
      <div class="bg"></div>
      <div class="star-field">
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>

      </div>
      </div>
    )

  }

export default jovepy
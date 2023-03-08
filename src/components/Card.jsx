import React from 'react'

export default function Card({item, handleChoice, visable}) {
    
  const handleClick = () => {
    handleChoice(item)
  }

  return (
    <>
        <div className={`relative flex justify-center items-center ${!visable ? 'card' : ''} `} style={{ background: `rgb(${item.color.join(', ')})` }} id={`card-${item.id}`} onClick={handleClick}></div>
    </>
  )
}

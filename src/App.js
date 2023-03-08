import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import GenerateItemList from './functions/GenerateItemList';

function App() {
  const [choiceOne, setChoiceOne] = useState(null) 
  const [choiceTwo, setChoiceTwo] = useState(null) 
  const [data, setData] = useState([])
  const [turns, setTurns] = useState(null)

  const handleChoice = (card) => {

    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);

  }

    useEffect(() => {
      setData(GenerateItemList())
    },[])


    const resetGame = () => {
       setData(GenerateItemList())
      
      setTurns(null)
    }
    
    useEffect(() => {
     
        if(choiceOne && choiceTwo){

          if(choiceOne.color === choiceTwo.color){
            setData(prevData => {
              return prevData.map(item => {
                if(item.color === choiceOne.color){
                  return {...item, matched: true }
                } else {
                  return item
                }
              })
            })
            resetTurn()
          } else {
             setTimeout(() => resetTurn(), 1000)
          }
  
        }
    

    }, [choiceOne, choiceTwo])

    const resetTurn = () => {
      setChoiceOne(null)
      setChoiceTwo(null)
      setTurns(prevTurn => prevTurn + 1)
    }

  return (
    <div className="App">
      <div className='container-full h-screen pt-20 flex md:justify-center md:pt-0 flex-col items-center gap-10'>
      <h1 className='text-3xl md:text-5xl font-bold text-white'>Memory game</h1>
      <button className=' bg-[#34aee6] rounded py-2 px-5 text-white' onClick={resetGame}>New Game</button>
        <div className='w-[350px] h-[400px] md:w-[800px] md:h-[500px] grid grid-cols-4 gap-4 bg-] text-white text-6xl' >
            {data.map(item => (
              <Card key={item.id} item={item} handleChoice={handleChoice} visable={item === choiceOne || item === choiceTwo || item.matched}/>
            ))}
        </div>
        {turns && <h2 className='text-2xl font-bold text-white '>Turns: {turns}</h2>}
      </div>
    </div>
  );
}

export default App;

export default function GenerateItemList() {


    const getColors = () => {
        const listOfColors = [];

        for(let i = 0; i < 16; i++){
            const rgbColor = [];
    
            for(let j = 0; j < 3; j++){
            const randomNum = Math.floor(Math.random() * 250);
    
            rgbColor.push(randomNum);
            }
    
            listOfColors.push(rgbColor);
        }
    
        return listOfColors
    }

    const listOfColors = getColors();

    const gameData = () => {

        const itemList = []
    
        for(let i = 0; i < 8; i++){
    
           const item = ({color: listOfColors[i], matched: false});
    
          itemList.push(item);
    
        }
    
        const gameItemList = [ ...itemList, ...itemList]
        .sort(() => Math.random() - 0.5)
        .map(card => ({ ...card, id: Math.floor(Math.random() * 1000)}))
    
        return gameItemList;
    
      }

      return gameData();
      // const generatedNums = [];
      // const rearrangeData = [];
    
      //   for (let i = 0; i < 16; i++) {
      //     let randomNum = Math.floor(Math.random() * 16);
    
      //     while (generatedNums.includes(randomNum)) {
      //       randomNum = Math.floor(Math.random() * 16);
      //     }
    
      //     rearrangeData.push(gameDataList[randomNum]);
      //     generatedNums.push(randomNum);
      //   }
    
      //   return rearrangeData
    
   
}

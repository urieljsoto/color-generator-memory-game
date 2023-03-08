export default function useColor(num) {

        const listOfColors = [];

        for(let i = 0; i < num; i++){
            const rgbColor = [];

            for(let j = 0; j < 3; j++){
            const randomNum = Math.floor(Math.random() * 250);

            rgbColor.push(randomNum);
            }

            listOfColors.push(rgbColor);
        }

        return listOfColors
        
    
}

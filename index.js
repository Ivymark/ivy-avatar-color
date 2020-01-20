const { stringToHexColor } = require('jukwaa-core/utils/ColorUtils');

const backgroundColors = [
    '004075',
    '0086A6',
    '1F9C87',
    '35800E',
    '4F9CE0',
    '60D4F0',
    '69DEC7',
    '7030A1',
    '71C944',
    'A62E61',
    'A6432F',
    'A87825',
    'B069E8',
    'F56EA8',
    'FB836F',
    'FFCF61'
];

module.exports = {
    getAvatarcColor(clientName){
        const backgroundColor = stringToHexColor(clientName);
        const colorList = [...backgroundColors];
        colorList.push(backgroundColor);
        colorList.sort();
        const colorIndex = Math.min(colorList.indexOf(backgroundColor), backgroundColors.length - 1);
        const colorFromList = backgroundColors[colorIndex];

        return colorFromList;
    }

}
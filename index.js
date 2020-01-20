

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

const hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
};

const intToHex = (i) => {
    let c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();
    return '00000'.substring(0, 6 - c.length) + c;
};

const stringToHexColor = (str) => {
    return intToHex(hashCode(str));
}


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
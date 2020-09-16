if (typeof $ == 'undefined') {
    console.log('oops! I still have to link my jQuery properly!');
} else { console.log('I did it! I linked jQuery and this js file properly!') };


const $div = $('<div>'); //created div
console.log('this is $div', $div);

$('body').append($div) //append div to body
$div.addClass('square') //add class "square"
$div.text('Add a Card') //add text
$div.css('background-color', 'rgb(0,0,0)')
$div.css('width', 250)
$div.css('height', 530)
$div.css('color', 'rgb(255,255,255')
$div.css('cursor', 'pointer')
$div.css('text-align', 'center')

const cards = [
    'https://www.trustedtarot.com/img/cards/the-fool.png',
    'https://www.trustedtarot.com/img/cards/the-magician.png',
    'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
    'https://www.trustedtarot.com/img/cards/the-empress.png',
    'https://www.trustedtarot.com/img/cards/the-emperor.png',
    'https://www.trustedtarot.com/img/cards/the-heirophant.png',
    'https://www.trustedtarot.com/img/cards/the-chariot.png',
    'https://www.trustedtarot.com/img/cards/strength.png',
    'https://www.trustedtarot.com/img/cards/the-hermit.png',
    'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
    'https://www.trustedtarot.com/img/cards/justice.png',
    'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
    'https://www.trustedtarot.com/img/cards/death.png',
    'https://www.trustedtarot.com/img/cards/temperance.png',
    'https://www.trustedtarot.com/img/cards/the-tower.png',
    'https://www.trustedtarot.com/img/cards/the-moon.png'
]

const $divToClick = $('div') //grab the div
$divToClick.on('click') //event listener



const addImage = () => {
    //selects random element from array, appends to body
    const cardLink = cards[Math.floor(Math.random() * cards.length)]
    const $img = $('<img>')
    $img.attr('src', cardLink).attr('alt', 'tarot pic')
    $('body').append($img)
}
$divToClick.on('click', addImage)

$(this).on('click', addImage)
   
//give same function to each added image

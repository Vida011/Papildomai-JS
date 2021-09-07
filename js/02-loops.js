const objektas = { 
    vardas: 'Dalia', 
    amzius: 40,
    megstamaSpalva: 'black',
    baigtaKlasiu: 12,
    gyvenamojiVieta: {  //vel viduje objektas
       miestas: 'Palanga',
       gatve: 'Basanaviciaus',
       namoNumeris: 1

    }
}
for (const raktazodis in objektas) {
    console.log('raktazodis '+ raktazodis +' reiksmė '+ ' '+ objektas[raktazodis] );
  
     
}

const masyvas = ['Dalia', 'Antanas','Sniega', 'Jonas'];
for (let index = 0; index < masyvas.length; index++) { // for galima daryti daugiau nustatymų
    const element = masyvas[index];
    console.log(element);
    
}

masyvas.forEach(element => {
    console.log(element);
    if (element === 'Antanas') {
        console.log('as esu Antanas');

    }
    else {
        console.log('as nesu Antanas');
    }
});


const neigiamiSkaiciai = [-5, -8, -0,001];

neigiamiSkaiciai.forEach(element) => {
    console.log(element);
    if (element === -0,001) {
        console.log(traukiam i sarasa);
    }
    else {
        console.log(nereikalinga);
    }

}


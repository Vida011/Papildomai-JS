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


const neigiamiSkaiciai = [-5, -8, -0.001]; // naudoti TASKA!

neigiamiSkaiciai.forEach((element, index) => {
    console.log(element);
    if (element === -0.001) {
        console.log(`traukiam i sarasa indexas ${index}`);
    }
    else {
        console.log('nereikalinga');
    }

})

// maps'as, panasus i foreach'a. Eina per kiekviena reiksme
neigiamiSkaiciai.map((skaicius, index) => {
    console.log(`cia yra skaicius ${skaicius}`);
    console.log(`cia yra indeksas ${index}`)
});

module.exports = neigiamiSkaiciai; // kintamojo pavad.,kuri eksportuojam




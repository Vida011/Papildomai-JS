// kad narsyklė isimintu mūsu vardą, bent jau tuo metu:

console.log('labas');

 const vardas = 'Vardenis'; // stringas
 const amzius = 99;  // skai2ius
 const buvoDuse = true; // boolean
 const dabarYraNaktis = false;  // boolean
 const dabarSninga = true;  // boolean
 // const dabarSninga = false; // consolėje jau šios reikšmės nerodo, kadangi gali būti tik viena šio kintamojo reikšmė!

 const pazymiai = [5, 2, 10, 8, 7]; //array
 const draugai = ['Dalia', 'Antanas','Sniega', 'Jonas']; //array

 console.log(draugai.length);
 console.log(draugai[1]); 
 draugai[1] = 'Tomas'; // masyvo viduje reikšmę galima keisti.
 console.log(draugai);

 const Dalia = { 
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

 Dalia.amzius = 38; // objekto viduje esančios reikšmės pakeitimas galimas.

 console.log(Dalia['gyvenamojiVieta' + ' yra' + ' Palanga']);


 // console.log(Dalia.amzius); // console atsapusdins tik "40"

 console.log(Dalia['amzius']); // console atsapusdins tik "40"- dar vienas būdas

 const neigiamiSkaiciai = [-5, -8, -0,001];


 const pazymys1 = 5;
 const pazymys_2 = 2

 
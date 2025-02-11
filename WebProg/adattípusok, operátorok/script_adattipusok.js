
// komment (line comment)

/*
blokk
komment
*/

/*
* Adattípusok
*/

// string (karakterfűzér)
console.log('szia');
console.log("Helló!");
let text
text = 'Szia!'
console.log(text)
text = 'Helló!'
console.log(text, '\n a típusa: ', typeof (text) )

// tegyük nagybetűssé
// nézzük meg hány karakterkből áll
// fordítsuk (reverse)
// fűzzünk hozzá egy másik stringet

// number (szám)

console.log(500);
let x = 201
console.log (x, typeof (x) )

// adjunk hozzá egy másik számot
// vonjunk ki belőle
// osztás utáni maradék


// boolean (igaz hamis értéket reprezentáló típus)

console.log(true);
console.log(false);
console.log (' true === "1" ?', true === "1" )

// logikai ÉS
// (boolean, boolean) -> boolean

// negálás
// ...

// undefined
console.log(undefined);
let y
console.log(y);


// null
console.log(null)

// debugger


/*
* Array (tömb)
*/

// Array<_>
// array of ?

// Array<string>

console.log(['elso', 'masodik', 'harmadik']);

// Array<number>
console.log([2, 12, 3]);

// szűrés
// sorba rendezés
// új elem hozzáadása
// aggregálás


console.log([2, 12, 3][1]);


// nem javasolt
console.log([true, 2, "string.."]);

// több dimenziós tömb

// Array<Array<number>>
console.log([[2, 3], [32, 10], [6, 4]][1][1]);

/*
* Object (objektum)
*/

// kulcs- érték párok sorozata

console.log(
    {
        firstName: 'József',
        lastName: 'Kovács',
        age: 30
    }
);

let person1 =  { firstName: 'József', lastName: 'Kovács', age: 30 }
console.log (person1)



// lookup, kulcs alapú kikérés

console.log (person1.firstName+' '+person1['lastName'] )

let kovacs2 =    {
        firstName: 'József',
        lastName: 'Kovács',
        age: 30,
        phoneNumbers: ['067023456', '067023457'],
        address: {
            street: 'Király u.',
            city: 'Budapest'
        }
    }

console.log (kovacs2)
console.log (kovacs2.phoneNumbers[1] , kovacs2.address.city, kovacs2.address.street)

console.log( [person1, kovacs2] )

const mobiles = [
    {
        brand: 'Apple',
        name: 'iPhone X',
        price: 250000,
        provider: {
            country: 'HU',
            name: 'Vodafone'
        }
    },
    {
        brand: 'Huawei',
        name: '10',
        price: 180000,
        provider: {
            country: 'DE',
            name: 'T-Mobile'
        }
    },
    {
        brand: 'ZTE',
        name: 'Blade',
        price: null,
        provider: {
            country: 'DE',
            name: 'Vodafone'
        }
    }
]


// 1. Az első telefon nevét
console.log('Az első telefon neve:')
console.log( mobiles[0].name )

// 2. A második telefon árát
console.log(mobiles[1].price)

// 3. A harmadik telefon szolgáltatójának országát
console.log(mobiles[2].provider.country)


console.log (mobiles)

for (let index = 0; index < mobiles.length; index++) {
    console.log(mobiles[index])
    document.getElementById('mobilok').innerHTML += mobiles[index].brand  + '<br>'
}

console.log("for - in")

for (const key in mobiles) {
    console.log (mobiles[key].brand)
}


mobiles.push ({
    brand: 'Samsung',
    name: 'S25',
    provider: {
        country: 'HU',
        name: 'One'
    }
})

document.getElementById('mobilok').innerHTML=''

for (const mobile of mobiles) {
    // let price = ''; if (mobile.price !=undefined) {price = mobile.price}
    let price = (mobile.price !=null) ? mobile.price : ''
    console.log(mobile)
    document.getElementById('mobilok').innerHTML+= mobile.brand + ' ' + mobile.name + price +  '<br>'
    //document.getElementById('mobilok').innerHTML+= `${mobile.brand} ${mobile.name} ${mobile.price!=null ? mobile.price : ''} <br>`
}
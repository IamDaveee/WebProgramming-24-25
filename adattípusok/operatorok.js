 /*
* Operátorok
*/


// (number, number) -> number
console.log(2 + 3);

/*
    Operátorok csoportosíthatók:
        - operandusok száma szerint:
            1: unary
            2: binary
            3: ternary
        - operátor lexikális elhelyezkedése
            előtte: prefix
            közötte: infix
            utána: postfix
        - hajt-e végre mellékhatást? (side effect)
            igen
            nem


/*
* Aritmetika
* (number, number) -> number
*/
console.log ( '--- Aritmetika (number, number) -> number ---')

debugger

// +, -, *, /, %
console.log(2 + 4);
console.log(2 - 4);
console.log(2 * 4);
console.log(2 / 4);
console.log(7 % 3);

/*
* Összehasonlító
* (any, any) -> boolean
*/

console.clear()

console.log ( '--- Összehasonlító (any, any) -> boolean ---')

debugger

// == (equality)
console.log(1 == true);
console.log( 2 == '2')
console.log( 2 === '2')


// !=
console.log(2 != 2); 

// === (identity)
console.log(1 === true);
console.log(1 !== true);
console.log('János' === 'József');

// >, <, >=, <=
console.log(3 > 5);


/*
* Logikai
* (boolean, boolean) -> boolean
* (boolean) -> boolean
*/
console.log('--- Logikai (boolean [, boolean]) -> boolean ---')

// logikai ÉS
console.log(true && true);

// logikai VAGY
console.log(true || false);

// negálás
console.log(!true);

console.log(2 === 2 && 1 > 5);
console.log(2 === 2 && (1 > 5 || true));

console.log((2 + 3) * 5);

/**
 * String operátor
 */
console.log ('String operátor (összefűzés)')
 // konkaktenálás
 console.log('Szia' + ' Daniel');
 // -> 'Szia Daniel'

/*
* Conditional
* (bool, any, any) -> any
*/
console.log('Conditional operátor (bool ? any : any)')
console.log(true ? 'első' : 'második');


/*
* Assignment
* (var, any) -> any
*/

console.log('Assignment (var | let | const , any) -> any')

var valtozo;
console.log(valtozo);

console.log(valtozo = 'szia');
console.log(valtozo);

valtozo = 3;

console.log(valtozo);


// increment, decrement
console.log('increment, decrement ++, --')

valtozo++;
valtozo--;
valtozo--;

console.log(valtozo);

// +=, -=
console.log ('+=, -= ..')

var szam = 5;

// szam = szam + 10;
szam += 10;
szam *= 10;
szam /= 10;
szam %= 10;
console.log(szam);

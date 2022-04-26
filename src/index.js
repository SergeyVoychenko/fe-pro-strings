/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */
export const replaceZAndVFromString = (string) => {
    let index = 0;
    do {
        index = string.toLowerCase().indexOf('z');
        if (index !== -1) {
            string = `${string.slice(0, index)}*${string.slice((index) + 1)}`;    
            // string = string.slice(0, index) + '*' + string.slice((index) + 1);
        }
    } while ((index !== -1));
    do {
        index = string.toLowerCase().indexOf('v');
        if (index !== -1) {
            string = `${string.slice(0, index)}*${string.slice((index) + 1)}`;
            // string = string.slice(0, index) + '*' + string.slice((index) + 1);
        }
    } while ((index !== -1));
    return string;
};

/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */
export const changeWord = (string, word, newWord) => {
    let index = string.indexOf(word);
    let name = string.substring(index, (index + word.length));
    while (name !== word) {
        index = string.indexOf(word, (index + 1));
        if (index === -1) {
            return string;
        }
    }
    string = `${string.slice(0, index)}${newWord}${string.slice(index + word.length)}`;
    // string = string.slice(0, index) + newWord + string.slice(index + word.length);
    return string;
};

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const truncate = (string, length) => {
    return string = string.slice(0, length);
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbols = (string, symbol) => {
    let i = 0;
    let pos = -1;
    for (; ;) {
        if ((pos = string.toLowerCase().indexOf(symbol.toLowerCase(), pos + 1)) === -1) {
            break;
        }
        i++;
    }
    return i;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
    let counter = 0;
    let pos = -1;
    while (true) {
        if ((pos = string.toLowerCase().indexOf(symbol.toLowerCase(), pos + 1)) === -1) {
            break;
        }
        counter++;
    }
    return counter;
};

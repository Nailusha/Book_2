//стр 45
var makeNoise = function () {
    console.log('Хрясь!');
};

makeNoise();


var power = function (base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
}
console.log(power(2, 10));

//стр 46 
var x = "outside";

var f1 = function () {
    var x = "inside f1";
};
f1();
console.log(x);

// → outside
var f2 = function () {
    x = "inside f2";
};

f2();
console.log(x);
// → inside f2

//стр 47

var landscape = function () {
    var result = "";
    var flat = function (size) {
        for (var count = 0; count < size; count++)
            result += "_";
    };
    var mountain = function (size) {
        result += "/";
        for (var count = 0; count < size; count++)
            result += "'";
        result += "\\";
    };

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
};
console.log(landscape());

//стр49

var launchMissiles = function (value) {
    missileSystem.launch("пли!");
};

if (safeMode)
    launchMissiles = function (value) {/* отбой */ };

//стр50

function greet(who) {
    console.log("Привет, " + who);
}
greet("Семён");
console.log("Покеда");

//стр 51

function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + " came first.");


//стр 52

function power(base, exponent) {
    if (exponent == undefined)
        exponent = 2;
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
}
console.log(power(4));

console.log(power(4, 3));

//стр 53

function wrapValue(n) {
    var localVariable = n;
    return function () { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());

console.log(wrap2());

//стр54

function power(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}
console.log(power(2, 3));

//стр56

function findSolution(target) {
    function find(start, history) {
        if (start == target)
            return history;
        else if (start > target)
            return null;
        else
            return find(start + 5, "(" + history + " + 5)") ||
                find(start * 3, "(" + history + " * 3)");
    }
    return find(1, "1");
}
console.log(findSolution(24));


//стр57

find(1, "1")
find(6, "(1 + 5)")
find(11, "((1 + 5) + 5)")
find(16, "(((1 + 5) + 5) + 5)")
too big
find(33, "(((1 + 5) + 5) * 3)")
too big
find(18, "((1 + 5) * 3)")
too big
find(3, "(1 * 3)")
find(8, "((1 * 3) + 5)")
find(13, "(((1 * 3) + 5) + 5)")
found!

//стр58

// вывестиИнвентаризациюФермы
function printFarmInventory(cows, chickens) {
    var cowString = String(cows);
    while (cowString.length < 3)
        cowString = "0" + cowString;
    console.log(cowString + " Коров");
    var chickenString = String(chickens);
    while (chickenString.length < 3)
        chickenString = "0" + chickenString;
    console.log(chickenString + " Куриц");
}
printFarmInventory(7, 11);

//стр59

// выводСДобавлениемНулейИМеткой
function printZeroPaddedWithLabel(number, label) {
    var numberString = String(number);
    while (numberString.length < 3)
        numberString = "0" + numberString;
    console.log(numberString + " " + label);
}
// вывестиИнвентаризациюФермы
function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Коров");
    printZeroPaddedWithLabel(chickens, "Куриц");
    printZeroPaddedWithLabel(pigs, "Свиней");
}
printFarmInventory(7, 11, 3);

// добавитьНулей
function zeroPad(number, width) {
    var string = String(number);
    while (string.length < width)
        string = "0" + string;
    return string;
}
// вывестиИнвентаризациюФермы
function printFarmInventory(cows, chickens, pigs) {
    console.log(zeroPad(cows, 3) + " Коров");
    console.log(zeroPad(chickens, 3) + " Куриц");
    console.log(zeroPad(pigs, 3) + " Свиней");
}
printFarmInventory(7, 16, 3);

//стр61

// Создаём f со ссылкой на функцию
var f = function (a) {
    console.log(a + 2);
};
// Объявляем функцию g
function g(a, b) {
    return a * b * 3.5;
}

//стр68

var mack = [];
mack.push("Трест,");
mack.push("который", "лопнул");
console.log(mack);
// → ["Трест,", "который", "лопнул"]
console.log(mack.join(" "));
// → Трест, который лопнул
console.log(mack.pop());
// → лопнул
console.log(mack);
// → ["Трест,", "который"]

//стр70

var anObject = { left: 1, right: 2 };
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

//стр73

var journal = [];
function addEntry(events, didITurnIntoASquirrel) {
    journal.push({
        events: events,
        squirrel: didITurnIntoASquirrel
    });
}

addEntry(["работа", "тронул дерево", "пицца", "пробежка", "телевизор"], false
    addEntry(["работа ", "мороженое", "цветная капуста", "лазанья", " тронул дерево "
    addEntry(["выходной", "велик", "перерыв", "арахис", "пивасик"], true);

//стр75

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));

function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
}
function tableFor(event, journal) {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i], index = 0;
        if (hasEvent(event, entry)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}
console.log(tableFor("pizza", JOURNAL));

//стр77

function gatherCorrelations(journal) {
    var phis = {};
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        }
    }
    return phis;
}
var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);

/*for (var event in correlations)
    console.log(event + ": " + correlations[event]);


for (var event in correlations) {
    var correlation = correlations[event];
    if (correlation > 0.1 || correlation < -0.1)
        console.log(event + ": " + correlation);
}
    */

for (var i = 0; i < JOURNAL.length; i++) {
    var entry = JOURNAL[i];
    if (hasEvent("арахис", entry) &&
        !hasEvent("чистка зубов", entry))
        entry.events.push("арахис зубы");
}
console.log(phi(tableFor("арахис зубы ", JOURNAL)));

//стр80

var todoList = [];

function rememberTo(task) {
    todoList.push(task);
}
function whatIsNext() {
    return todoList.shift();
}
function urgentlyRememberTo(task) {
    todoList.unshift(task);
}

//стр84

function randomPointOnCircle(radius) {
    var angle = Math.random() * 2 * Math.PI;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    };
}
console.log(randomPointOnCircle(2));

//стр86 Упражнения

//стр94

function gatherCorrelations(journal) {
    var phis = {};
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        }
    }
    return phis;
}


function gatherCorrelations(journal) {
    var phis = {};
    journal.forEach(function (entry) {
        entry.events.forEach(function (event) {
            if (!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        });
    });
    return phis;
}

//стр96 

function greaterThan(n) {
    return function (m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));


function noisy(f) {
    return function (arg) {
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    };
}
noisy(Boolean)(0);


function unless(test, then) {
    if (!test) then();
}
function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}
repeat(3, function (n) {
    unless(n % 2, function () {
        console.log(n, "is even");
    });
});


//стр 99

function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            passed.push(array[i]);
    }
    return passed;
}
console.log(filter(ancestry, function (person) {
    return person.born > 1900 && person.born < 1925;
}));

//стр100

function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
        mapped.push(transform(array[i]));
    return mapped;
}
var overNinety = ancestry.filter(function (person) {
    return person.died - person.born > 90;
});
console.log(map(overNinety, function (person) {
    return person.name;
}));

//стр101

function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}
console.log(reduce([1, 2, 3, 4], function (a, b) {
    return a + b;
}, 0));

//стр103

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }
console.log(average(ancestry.filter(male).map(age)));

console.log(average(ancestry.filter(female).map(age)));


//стр107

function countAncestors(person, test) {
    function combine(person, fromMother, fromFather) {
        var thisOneCounts = test(person);
        return fromMother + fromFather + (thisOneCounts ? 1 : 0);
    }
    return reduceAncestors(person, combine, 0);
}
function longLivingPercentage(person) {
    var all = countAncestors(person, function (person) {
        return true;
    });
    var longLiving = countAncestors(person, function (person) {
        return (person.died - person.born) >= 70;
    });
    return longLiving / all;
}
console.log(longLivingPercentage(byName["Emile Haverbeke"]));

//стр108 Упражнения

//стр114

var rabbit = {};
rabbit.speak = function (line) {
    console.log("Кролик говорит '" + line + "'");
};
rabbit.speak("Я живой.");


function speak(line) {
    console.log("А " + this.type + " кролик говорит '" + line + "'");
}
var whiteRabbit = { type: "белый", speak: speak };
var fatRabbit = { type: "толстый", speak: speak };
whiteRabbit.speak("Ушки мои и усики, " + "я же наверняка опаздываю!");
// → А белый кролик говорит ' Ушки мои и усики, я же наверняка опаздываю!'
fatRabbit.speak("Мне бы сейчас морковочки.");


//стр116

var protoRabbit = {
    speak: function (line) {
        console.log("А " + this.type + " кролик говорит '" + line + "'");
    }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "убийственный";
killerRabbit.speak("ХРЯЯЯСЬ!");

//стр117

function Rabbit(type) {
    this.type = type;
}
var killerRabbit = new Rabbit("убийственный");
var blackRabbit = new Rabbit("чёрный");
console.log(blackRabbit.type);


Rabbit.prototype.speak = function (line) {
    console.log("А " + this.type + " кролик говорит '" + line + "'");
};
blackRabbit.speak("Всем капец...");


//стр123

function rowHeights(rows) {
    return rows.map(function (row) {
        return row.reduce(function (max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}
function colWidths(rows) {
    return rows[0].map(function (_, i) {
        return rows.reduce(function (max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);
    function drawLine(blocks, lineNo) {
        return blocks.map(function (block) {
            return block[lineNo];
        }).join(" ");
    }
    function drawRow(row, rowNum) {
        var blocks = row.map(function (cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });
        return blocks[0].map(function (_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join("\n");
    }
    return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}
function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function () {
    return this.text.reduce(function (width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function () {
    return this.text.length;
};
TextCell.prototype.draw = function (width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

//стр126

var rows = [];
for (var i = 0; i < 5; i++) {
    var row = [];
    for (var j = 0; j < 5; j++) {
        if ((j + i) % 2 == 0)
            row.push(new TextCell("##"));
        else
            row.push(new TextCell(" "));
    }
    rows.push(row);
}
console.log(drawTable(rows));

//стр127

function UnderlinedCell(inner) {
    this.inner = inner;
};
UnderlinedCell.prototype.minWidth = function () {
    return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function () {
    return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height - 1)
        .concat([repeat("-", width)]);
};


function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function (name) {
        return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function (row) {
        return keys.map(function (name) {
            return new TextCell(String(row[name]));
        });
    });
    return [headers].concat(body);
}
console.log(drawTable(dataTable(MOUNTAINS)));

//стр129

var pile = {
    elements: ["скорлупа", "кожура", "червяк"],
    get height() {
        return this.elements.length;
    },
    set height(value) {
        console.log("Игнорируем попытку задать высоту ", value);
    }
};
console.log(pile.height);
// → 3
pile.height = 100;


Object.defineProperty(TextCell.prototype, "heightProp", {
    get: function () { return this.text.length; }
});
var cell = new TextCell("да\nну");
console.log(cell.heightProp);
// → 2
cell.heightProp = 100;
console.log(cell.heightProp);

//стр130

function RTextCell(text) {
    TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function (width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(repeat(" ", width - line.length) + line);
    }
    return result;
};

function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function (name) {
        return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function (row) {
        return keys.map(function (name) {
            var value = row[name];
            // Тут поменяли:
            if (typeof value == "number")
                return new RTextCell(String(value));
            else
                return new TextCell(String(value));
        });
    });
    return [headers].concat(body);
}
console.log(drawTable(dataTable(MOUNTAINS)));

//стр133 Упражнения

//Проект электронная жизнь

//стр157

function canYouSpotTheProblem() {
    "use strict";
    for (counter = 0; counter < 10; counter++)
        console.log("Всё будет офигенно");
}
canYouSpotTheProblem();

function Person(name) { this.name = name; }
var ferdinand = Person("Евлампий"); // ой-вэй
console.log(name);

"use strict";
function Person(name) { this.name = name; }
// Опаньки, мы ж забыли 'new'
var ferdinand = Person("Евлампий ");
// → TypeError: Cannot set property 'name' of undefined


//стр159

function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function (other) {
    return new Vector(this.x + other.x, this.y + other.y);
};

function testVector() {
    var p1 = new Vector(10, 20);
    var p2 = new Vector(-10, 5);
    var p3 = p1.plus(p2);
    if (p1.x !== 10) return "облом: x property";
    if (p1.y !== 20) return " облом: y property";
    if (p2.x !== -10) return " облом: negative x property";
    if (p3.x !== 0) return " облом: x from plus";
    if (p3.y !== 25) return " облом: y from plus";
    return "всё пучком";
}
console.log(testVector());

//стр160

function numberToString(n, base) {
    var result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        n /= base;
    } while (n > 0);
    return sign + result;
}
console.log(numberToString(13, 10));

//стр162

function promptNumber(question) {
    var result = Number(prompt(question, ""));
    if (isNaN(result)) return null;
    else return result;
}
console.log(promptNumber("Сколько пальцев видите?"));

//стр164

function promptDirection(question) {
    var result = prompt(question, "");
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Недопустимое направление: " + result);
}
function look() {
    if (promptDirection("Куда?") == "L")
        return "дом";
    else
        return "двоих разъярённых медведей";
}
try {
    console.log("Вы видите ", look());
} catch (error) {
    console.log("Что-то не так: " + error);
}

//стр165

function withContext(newContext, body) {
    var oldContext = context;
    context = newContext;
    var result = body();
    context = oldContext;
    return result;
}

function withContext(newContext, body) {
    var oldContext = context;
    context = newContext;
    try {
        return body();
    } finally {
        context = oldContext;
    }
}

try {
    withContext(5, function () {
        if (context < 10)
            throw new Error("Контекст слишком мал!");
    });
} catch (e) {
    console.log("Игнорируем: " + e);
}
// → Игнорируем: Error: Контекст слишком мал!
console.log(context);

//стр167

for (; ;) {
    try {
        var dir = promtDirection("Куда?"); // ← опечатка!
        console.log("Ваш выбор ", dir);
        break;
    } catch (e) {
        console.log("Недопустимое направление. Попробуйте ещё раз.");
    }
}

//стр168

function InputError(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";

function promptDirection(question) {
    var result = prompt(question, "");
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}
// А в цикле её будет ловить сподручнее.
for (; ;) {
    try {
        var dir = promptDirection("Куда?");
        console.log("Ваш выбор", dir);
        break;
    } catch (e) {
        if (e instanceof InputError)
            console.log("Недопустимое направление. Попробуйте ещё раз.");
        else
            throw e;
    }
}

//стр169

function AssertionFailed(message) {
    this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);
function assert(test, message) {
    if (!test)
        throw new AssertionFailed(message);
}
function lastElement(array) {
    assert(array.length > 0, "пустой массив в lastElement");
    return array[array.length - 1];
}

//стр170 Упражнение

//стр180

function findDate(string) {
    var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
    var match = dateTime.exec(string);
    return new Date(Number(match[3]),
        Number(match[2]) - 1,
        Number(match[1]));
}
console.log(findDate("30-1-2003"));


//стр186

var s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, function (str) {
    return str.toUpperCase();
}));

var stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) // остался только один, удаляем 's' в конце
        unit = unit.slice(0, unit.length - 1);
    else if (amount == 0)
        amount = "no";
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

//стр188

var name = "гарри";
var text = "А у Гарри на лбу шрам.";
var regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

//стр191

searchengine = http://www.google.com/search?q=$1
spitefulness = 9.7
    ; перед комментариями ставится точка с запятой
    ; каждая секция относится к отдельному врагу
    [larry]
fullname = Larry Doe
type = бычара из детсада
website = http://www.geocities.com/CapeCanaveral/11451
[gargamel]
fullname = Gargamel
type = злой волшебник
outputdir = /home/marijn / enemies / gargamel


function parseINI(string) {
    // Начнём с объекта, содержащего настройки верхнего уровня
    var currentSection = { name: null, fields: [] };
    var categories = [currentSection];
    string.split(/\r?\n/).forEach(function (line) {
        var match;
        if (/^\s*(;.*)?$/.test(line)) {
            return;
        } else if (match = line.match(/^\[(.*)\]$/)) {
            currentSection = { name: match[1], fields: [] };
            categories.push(currentSection);
        } else if (match = line.match(/^(\w+)=(.*)$/)) {
            currentSection.fields.push({
                name: match[1],
                value: match[2]
            });
        } else {
            throw new Error("Строчка '" + line + "' содержит неверные данные.");
        }
    });
    return categories;
}

//стр195 Упражнения

//стр202

var dayName = function () {
    var names = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return function (number) {
        return names[number];
    };
}();
console.log(dayName(3));


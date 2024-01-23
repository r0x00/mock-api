var express = require('express');
var router = express.Router();

const data = {};

// Return a number between 1 at 6 (change ever 15 seconds)
router.get('/number', function(req, res, next) {
    if(data.number) {
        console.log("/api/number result: " + data.number.result);
        console.log(" ");
        return res.send({ count: data.number.result });
    };

    data.number = {};
    data.number.fn = () => {
        const numbers = '123456';

        data.number.result = numbers[randomN(numbers)];

        setTimeout(() => data.number.fn(), 1000 * 15);
    };

    data.number.fn()

    console.log("/api/number result: " + data.number.result);
    console.log(" ");
    res.send({ count: data.number.result });
});


// Return a name (bob, master, sheng fui) (change ever 30 seconds)
router.get('/name', function(req, res, next) {
    if(data.name) {
        console.log("/api/name result: " + data.name.result);
        console.log(" ");
        return res.send( data.name.result );
    };

    data.name = {};
    data.name.fn = () => {
        const names = ['bob', 'master', 'sheng fui'];

        data.name.result = names[randomN(names)];

        setTimeout(() => data.name.fn(), 1000 * 30);
    };

    data.name.fn();

    console.log("/api/name result: " + data.name.result);
    console.log(" ");
    res.send( data.name.result );
});


// Return a {}  or { data: {'Hola:)'}} (change ever 60 seconds)
router.get('/empty', function(req, res, next) {
    if(data.empty) {
        console.log("/api/empty result: " + data.empty.result);
        console.log(" ");
        return res.send(data.empty.result);
    };

    data.empty = {};
    data.empty.fn = () => {
        const emptys = [ {}, { data: 'Hola:)'} ];

        data.empty.result = emptys[randomN(emptys)];

        setTimeout(() => data.empty.fn(), 1000 * 60);
    };

    data.empty.fn();

    console.log("/api/empty result: " + data.empty.result);
    console.log(" ");
    res.send(data.empty.result);
});


// Return a boolean (change ever 45 seconds)
router.get('/boolean', function(req, res, next) {
    if(data.boolean) {
        console.log("/api/boolean result: " + data.boolean.result);
        console.log(" ");
        return res.send({ bool: data.boolean.result });
    };

    data.boolean = {};
    data.boolean.fn = () => {
        data.boolean.result = !data.boolean.result;

        setTimeout(() => data.boolean.fn(), 1000 * 45);
    };

    data.boolean.fn();

    console.log("/api/boolean result: " + data.boolean.result);
    console.log(" ");
    res.send({ bool: data.boolean.result });
});


const randomN = (value) => {
    const number = Math.floor(Math.random() * (value.length));
    return number;
}

module.exports = router;

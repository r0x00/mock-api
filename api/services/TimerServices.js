const data = {};

// Return a number between 1 at 6 (change ever 15 seconds);
exports.number = (req, res, next) => {
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
};


// Return a name (bob, master, sheng fui) (change ever 30 seconds);
exports.name = (req, res, next) => {
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
};


// Return a {}  or { data: {'Hola:)'}} (change ever 60 seconds);
exports.empty = (req, res, next) => {
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
};



// Return a boolean (change ever 45 seconds);
exports.boolean = (req, res, next) => {
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
};



exports.load =  (req, res, next) => {
    console.log(data.generate)
    res.send(data.generate);
};


exports.show = (req, res, next) => {
    const { id } = req.params;

    if(!data.generate) return res.send("No methods add yet");

    if(!id) return res.status(400).send({err: "Please add the necessary data"});

    const method = data.generate[id];

    if(!method) return res.status(400).send({err: "The method was not found"});

    res.send( method );
};


exports.create = (req, res, next) => {
    if(!data.generate) data.generate = {};

    const { name, random, duration } = req.body;


    if(!name || !random || (!duration && typeof duration != 'number')) return res.status(400).send({err: "Please add the necessary data"});

    let newName = name + Math.random().toString(28);


    data.generate[newName] = {};

    data.generate[newName].fn = () => {
        const r = random;

        data.generate[newName].result = r[randomN(r)];

        setTimeout(() =>  data.generate[newName].fn(), duration);
    };

    data.generate[newName].fn()

    res.send({msg: "Access the api by: /api/generate/" + newName, id: newName});
};


exports.delete = (req, res, next) => {
    const values = req.body;

    if(!data.generate) return res.send("No methods add yet");

    if(!values || !values.id) return res.status(400).send({err: "Please add the necessary data"});

    delete data.generate[values.id];

    res.send();
};


const randomN = (value) => {
    const number = Math.floor(Math.random() * (value.length));
    return number;
};

const TimerController = require('../api/controllers/TimerController');
const express = require('express');
const router = express.Router();
const _ = require('lodash');


const routes = {};

routes.TimerController = {
    'get /timer/number': {
        action: "number",
        controller: TimerController
    },
    'get /timer/name': {
        action: "name",
        controller: TimerController
    },
    'get /timer/empty': {
        action: "empty",
        controller: TimerController
    },
    'get /timer/boolean': {
        action: "boolean",
        controller: TimerController
    },
    'get /timer/generate': {
        action: "load",
        controller: TimerController
    },
    'get /timer/generate/:id': {
        action: "show",
        controller: TimerController
    },
    'post /timer/generate': {
        action: "create",
        controller: TimerController
    },
    'delete /timer/generate': {
        action: "delete",
        controller: TimerController
    },
};


_.each(routes, (v, k) => {
    _.each(v, (d, r) => {
        const [ method, route ] = r.split(' ');

        router[method](route, (req, res, next) => {
            d.controller[d.action](req, res, next);
        });
    });
});


module.exports = router;

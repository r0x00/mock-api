const TimerServices = require('../services/TimerServices');

module.exports = {
    number: (req, res, next) => {
        TimerServices.number(req, res, next);
    },

    name: (req, res, next) => {
        TimerServices.name(req, res, next);
    },

    empty: (req, res, next) => {
        TimerServices.empty(req, res, next);
    },

    boolean: (req, res, next) => {
        TimerServices.boolean(req, res, next);
    },

    load: (req, res, next) => {
        TimerServices.load(req, res, next);
    },

    show: (req, res, next) => {
        TimerServices.show(req, res, next);
    },

    create: (req, res, next) => {
        TimerServices.create(req, res, next);
    },

    delete: (req, res, next) => {
        TimerServices.delete(req, res, next);
    },
};
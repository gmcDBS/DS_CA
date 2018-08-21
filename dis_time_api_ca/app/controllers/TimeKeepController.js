'use strict';
var TimeKeep = require('../models/TimeKeep');

exports.getTimeKeep = function (req, res) {
    TimeKeep.find({}, function (err, timeKeeps) {
        if (err) return res.status(500).send("There was a problem finding the TimeKeeps.");
        res.status(200).send(timeKeeps);
    });
}

exports.getTest = function (req, res) {
        res.status(200).send("It works!");
}

exports.createTimeKeep = function (req, res) {
    TimeKeep.create({
            userId: req.body.userId,
            workDate: req.body.workDate,
            workHours: req.body.workHours,
            createDate: req.body.createDate
        },
        function (err, timeKeep) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(timeKeep);
        });
}

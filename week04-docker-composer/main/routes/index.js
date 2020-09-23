var express = require('express');
var router = express.Router();
const requester = require('request');

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Main philippine tembo'
    });
});
router.get('/system-environment/you-rang', function(req, res) {
    requester('http://system-environment:30028/you-rang').pipe(res);
});
router.get('/route-tester/you-rang', function(req, res) {
    requester('http://route-tester:30029/you-rang').pipe(res);
});
router.get('/system-environment/checkoutBranch', function(req, res) {
    requester('http://system-environment:30028/checkoutBranch').pipe(res);
});
router.get('/system-environment/checkGitIgnore', function(req, res) {
    requester('http://system-environment:30028/checkGitIgnore').pipe(res);
});
router.get('/system-environment/getBranches', function(req, res) {
    requester('http://system-environment:30028/getBranches').pipe(res);
});
router.get('/system-environment/getRepoNames', function(req, res) {
    requester('http://system-environment:30028/getRepoNames').pipe(res);
});
router.get('/system-environment/setWorkingDir', function(req, res) {
    requester(
        `http://system-environment:30028/setWorkingDir/${req._parsedUrl.search}`
    ).pipe(res);
});

router.get('/:id', function(req, res) {
    res.redirect('/');
});
module.exports = router;

// ==UserScript==
// @name         black theme for ptpit
// @version      1
// @description  ну крч, тут темная тема для птпитааааа
// @author       pxmperc
// @match        https://ptpit.ru/*
// @match        https://timetable.ptpit.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ptpit.ru
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
    //база
    addGlobalStyle('body.custom-background { background-color: #303030 !important; }');

     addGlobalStyle('#wrapper { background: #303030 !important; }');

    addGlobalStyle('.type-page { padding: 25px !important; }');

    addGlobalStyle('body { color: #ffffff !important; }');

    addGlobalStyle('.type-page { background: #1b1116 !important; }');

    addGlobalStyle('.post { background: #a5a5a5 !important; }');
//тут уже расписание
    addGlobalStyle('.table-bordered>tbody>tr>td { border: 1px solid #740000; !important; }');

    addGlobalStyle('.btn-default { color: #fff; !important; }');

    addGlobalStyle('.btn-default { background-color: #333; !important; }');

    addGlobalStyle('.btn-default { border-color: #8c4852; !important; }');

    addGlobalStyle('.btn-default.focus { color: #fff; !important; }');

    addGlobalStyle('.btn-default.focus { background-color: #fff; !important; }');

    //баттон праймери(показать)
    addGlobalStyle('.btn-primary { background-color: #303030; !important; }');

    addGlobalStyle('.btn-primary { border-color: #fff; !important; }');

    addGlobalStyle('.btn-primary.focus { border-color: #8c4852; !important; }');

    addGlobalStyle('.btn-primary.focus { border-color: #303030 !important; }');

    addGlobalStyle('.btn-primary:hover { background-color: #1b1116; !important; }');

    addGlobalStyle('.btn-primary:hover { border-color: #303030 !important; }');

    addGlobalStyle('.btn-primary.active { background-color: #1b1116; !important; }');

    addGlobalStyle('.btn-primary.active { border-color: #204d74; !important; }');

    addGlobalStyle('.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle.btn-primary.focus,.open>.dropdown-toggle.btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover { background-color: #1b1116; !important; }');

    addGlobalStyle('.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary { background-color: #1b1116; !important; }');

    addGlobalStyle('.btn-primary:active { background-color: #337ab7; !important; }');

    addGlobalStyle('.btn-primary.active { background-color: #5cb85c; !important; }');

    addGlobalStyle('.btn-primary .badge { color: #337ab7; !important; }');

    addGlobalStyle('.btn-primary:hover { background-color: #1b1116; !important; }');

    addGlobalStyle('.btn-primary.disabled.focus { background-color: #161a1e; !important; }');

    addGlobalStyle('.btn-primary:focus { background-color: #161a1e; !important; }');

    addGlobalStyle('body { background-color: rgb(58, 58, 58); !important; }');

    addGlobalStyle('.table-bordered>tbody>tr>td { border: 1px solid #303030; !important; }');

    addGlobalStyle('.form-control { background-color: #424242; !important; }');

    addGlobalStyle('.form-control { color: #fff; !important; }');

    addGlobalStyle('.btn-default.active { color: #333; !important; }');

    addGlobalStyle('.open>.dropdown-toggle.btn-default { background-color: #585858; !important; }');

    addGlobalStyle('.open>.dropdown-toggle.btn-default:hover { background-color: #585858; !important; }');

    addGlobalStyle('.dropdown-menu { background-color: #303030; !important; }');

    addGlobalStyle('.table-bordered>tbody>tr>th { border: 1px solid #343030; !important; }');

    addGlobalStyle('.dropdown-menu>li>a { color: #dbdbdb; !important; }');

    addGlobalStyle('.dropdown-menu>li>a:focus { background-color: #303030 !important; }');

    addGlobalStyle('.dropdown-menu>li>a:hover { background-color: #303030 !important; }');

    addGlobalStyle('.dropdown-menu>li>a:focus { color: #fff; !important; }');

    addGlobalStyle('.dropdown-menu>li>a:hover { color: #fff; !important; }');

    addGlobalStyle('.btn-default.focus { background-color: #303030 !important; }');

    addGlobalStyle('.btn-default:focus { background-color: #303030 !important; }');

    addGlobalStyle('.btn-default:focus { color: #fff; !important; }');

    addGlobalStyle('.btn-default:hover { color: #fff; !important; }');

    addGlobalStyle('.btn-default:hover { background-color: #303030; !important; }');

    addGlobalStyle('.btn-default.active { background-color: #303030 !important; }');

    addGlobalStyle('.btn-default:active { background-color: #303030 !important; }');

    addGlobalStyle('.open>.dropdown-toggle.btn-default { color: #fff !important; }');

    addGlobalStyle('.btn-default.active.focus { background-color: #fff; !important; }');

    addGlobalStyle('.btn-default.active:focus { background-color: #fff; !important; }');

    addGlobalStyle('.btn-default.active:hover { background-color: #fff; !important; }');

    addGlobalStyle('.btn-default:active.focus { background-color: #fff; !important; }');

    addGlobalStyle('.btn-default:active:focus { background-color: #fff; !important; }');

    addGlobalStyle('.btn-default:active:hover { background-color: #fff; !important; }');

    addGlobalStyle('.open>.dropdown-toggle.btn-default.focus { background-color: #fff; !important; }');

    addGlobalStyle('.open>.dropdown-toggle.btn-default:focus { background-color: #fff; !important; }');

    addGlobalStyle('.open>.dropdown-toggle.btn-default:hover { background-color: #fff; !important; }');

    addGlobalStyle('.btn-default.focus { background-color: #fff; !important; }');

    addGlobalStyle('btn-default:focus { color: #fff; !important; }');

    addGlobalStyle('.modal-content { background-color: #000; !important; }');

    addGlobalStyle('.btn-default.active { color: #fff; !important; }');

    addGlobalStyle('.btn-default:active { color: #fff; !important; }');

    addGlobalStyle(' { !important; }');

    addGlobalStyle(' { background-color: #303030 !important; }');

    addGlobalStyle(' { background-color: #303030 !important; }');

    //addGlobalStyle('father_att { att !important; }');



function addzakr(asd) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = asd;
    head.appendChild(style);
}
        addzakr('#header { border-radius: 36px !important; }');
     addzakr('#header { padding: 0px !important; }');
    addzakr('.type-page { padding: 25px !important; }');
    //addzakr('.type-page { background: 805050 !important; }');
})();
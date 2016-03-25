/**
 *core.js
 *@author honghuai
 * @created 2016-03-18 14:48.
 */
require({
    baseUrl:"js/",
    paths:{
        jquery:"lib/jquery.min",
        jqueryUI:"lib/jquery-ui",
        window:"window",
        widget:"widget",
        alert:"alert"
    },shim:{
        "jqueryUI":["jquery"]
    }
},["alert"]);
/*
*
*
* */
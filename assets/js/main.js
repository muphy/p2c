require.config({
    baseUrl: '/js/lib',

    paths: {
        app: '../app',
        views: '../app/views',
        models: '../app/models',
        collections: '../app/collections',
        tpl: '../app/tpl',
        text: 'text'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ["underscore", "jquery"],
            exports: 'Backbone'
        },
        'jquery.handsontable': {
            deps: ["jquery"]
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'jquery.tmpl': {
            deps: ['jquery']
        },
        'underscore': {
            exports: '_'
        },
        'jquery.bxslider': {
            deps: ['jquery']
        },
    }
});
window.App = {
    view: {},
    model: {},
    collection: {}
};
define(function(require) {
    var Router = require('app/router');
    // var pathname = window.location.pathname;
    // if (/pathname/.test('admin')) {
    //     window.App.router = new Router.AdminRouter();
    // } else {
    //     window.App.router = new Router.AppRouter();
    // }
    window.App.router = new Router.AppRouter();
    Backbone.history.start();
});

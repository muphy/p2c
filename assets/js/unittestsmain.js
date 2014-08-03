"use strict";
require.config({
    baseUrl: '/js/lib',
    paths: {
        app: '../app',
        views: '../app/views',
        models: '../app/models',
        collections: '../app/collections',
        tpl: '../app/tpl',
        tests: '../tests'
    },
    shim: {
        'qunit': {
            exports: 'QUnit',
            init: function() {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        },
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
        }
    }
});

// require the unit tests.
require(
    ['qunit', 'tests/dummyTest', 'tests/dummyTest2'],
    function(QUnit, dummyTest, dummyTest2) {
        // run the tests.
        dummyTest.run();
        dummyTest2.run();
        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);

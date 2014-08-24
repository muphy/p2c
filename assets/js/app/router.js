define(function(require) {

    "use strict";

    var Backbone = require('backbone');

    require('bootstrap');
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            '': 'index',
            'calcres': 'calcres',
            'admin/jeolsu': function() {
                var JeolsuParentView = require('views/admin/jeolsu.parent.view');
                var JeolsuCollection = require('models/admin/jeolsucol');
                new JeolsuParentView({
                    collection: new JeolsuCollection()
                });
            },
            'admin/paperkind': function() {
                var PaperkindParentView = require('views/admin/paperkinds.parent.view');
                new PaperkindParentView();
            },
            'about': 'test_slider',
            contact: function() {
                alert('contact');
            },
            // Default
            '*actions': function(actions) {
                // We have no matching route, lets just log what the URL was
                alert('No route:' + actions);
            }
        },
        calcres: function() {
            if (!App.calResWrapView) {
                var CalResWrapView = require('views/calres/wrap.view');
                App.calResWrapView = new CalResWrapView();
            }
            App.calResWrapView.render();
        },
        index: function() {
            // if (!App.view.orderFormView) {
            //     var OrderForm = require('views/order/form.view');
            //     App.view.orderFormView = new OrderForm();
            // }
            // App.view.orderFormView.render();

            if (!App.view.contnet) {
                var ContentView = require('views/content.view');
                App.view.contentView = new ContentView();
            }
            App.view.contentView.render();

        },
        test_slider: function() {
            if (!App.view.slider) {
                var Slider = require('slider');
                App.view.slider = new Slider();
            }
            App.view.slider.render().initParam();
        }
    });

    var AdminRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            '': function() {
                var JeolsuParentView = require('views/admin/jeolsu.parent.view');
                var jeolsuParentView = new JeolsuParentView();
            },

            about: function() {
                alert('about');
            },
            contact: function() {
                alert('contact');
            },
            // Default
            '*actions': function(actions) {
                // We have no matching route, lets just log what the URL was
                alert('No route:' + actions);
            }
        }
    });

    return {
        AppRouter: AppRouter,
        AdminRouter: AdminRouter
    };
});

var SPA = require('spa-jquery');
var Component = SPA.Component;
var State = SPA.State;
var $ = require('jquery');

State.define('StateDemo', {
    urlPattern: '/StateDemo',
    $body: null,

    onEnter: function (stateParams, next) {
        next();
    },

    onState: function () {
        var self = this;

        Component.create('StateDemo/StateDemo').then(function ($stateDemo) {
            Component.getRootComponent().append($stateDemo);

            return $stateDemo;
        }).then(function ($stateDemo) {
            self.$body = $stateDemo;
        });
    },

    onExit: function (next) {
        this.$body.remove();

        next();
    }
});
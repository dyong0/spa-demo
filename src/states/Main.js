var SPA = require('spa-jquery');
var Component = SPA.Component;
var State = SPA.State;
var $ = require('jquery');

State.define('Main', {
    urlPattern: '/',
    $body: null,

    onEnter: function (stateParams, next) {
        $.getJSON('/data/users.json', function (users) {
            next(users);
        });
    },

    onState: function (users) {
        var self = this;
        Component.create('Main').then(function ($main) {
            Component.getRootComponent().append($main);

            Component.create('UserList/UserList').then(function ($userList) {
                $userList.update({
                    users: users
                });

                $main.append($userList);
            });

            return $main;
        }).then(function ($main) {
            self.$body = $main;
        });
    },

    onExit: function (next) {
        this.$body.remove();

        next();
    }
});
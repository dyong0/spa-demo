var SPA = require('spa-jquery');
var Component = SPA.Component;
var State = SPA.State;
var $ = require('jquery');

State.define('Main', {
    urlPattern : '/',  

    onEnter: function (stateParams, next) {
        $.getJSON('/data/users.json', function (users) {
            next(users);
        });
    },

    onState: function (users) {
        Component.create('Main').then(function ($main) {
            $('#app').append($main); 
            
            Component.create('UserList/UserList').then(function($userList){
                $userList.update({
                    users : users
                });

                $main.append($userList);
            });
        });
    },

    onExit: function (next) {
        $('#app').empty();

        next();
    }
});
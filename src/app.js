var SPA = require('spa-jquery');
var Component = SPA.Component;
var State = SPA.State;

Component.setRootPath('/src/components');
State.setDefaultState('Main');
SPA.run();
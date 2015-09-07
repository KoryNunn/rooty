var caroot = require('caroot'),
    Module = require('module'),
    originalLoad = Module._load;

Module._load = function(request, parent, isMain) {
    return originalLoad(caroot(request, parent.filename), parent, isMain);
};
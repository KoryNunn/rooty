var caroot = require('caroot'),
    Module = require('module'),
    originalLoad = Module._load,
    originalResolve = Module._resolveFilename;

Module._load = function(request, parent, isMain) {
    return originalLoad(caroot(request, parent.filename), parent, isMain);
};

Module._resolveFilename = function(path, passedModule){
    return originalResolve(caroot(path, passedModule.filename), passedModule);
};
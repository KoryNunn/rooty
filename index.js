var caroot = require('caroot'),
    Module = require('module'),
    originalLoad = Module._load,
    originalResolve = Module._resolveFilename;

function init(rootPath){
    Module._resolveFilename = function(path, passedModule){
        return originalResolve(caroot(path, passedModule.filename, rootPath), passedModule);
    };

    Module._load = function(request, parent, isMain) {
        return originalLoad(caroot(request, parent.filename, rootPath), parent, isMain);
    };
}

module.exports = init;
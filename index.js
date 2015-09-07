var caroot = require('caroot'),
    Module = require('module'),
    originalLoad = Module._load;

Module._load = function(request, parent, isMain) {
    var replacement = caroot(request, parent.filename);

    if (replacement) {
        return originalLoad(replacement, parent, isMain);
    }

    return originalLoad(request, parent, isMain);
};
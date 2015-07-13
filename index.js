var findRoot = require('find-root'),
    Module = require('module'),
    originalLoad = Module._load;

function getReplacement(file, currentPath) {
    if(file.charAt(0) === '^') {
        return findRoot(currentPath) + '/' + file.slice(1);
    }

    return null;
}

Module._load = function(request, parent, isMain) {
    var replacement = getReplacement(request, parent.filename);

    if (replacement) {
        return originalLoad(replacement, parent, isMain);
    }

    return originalLoad(request, parent, isMain);
};
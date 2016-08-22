module.exports = {
    "rules": {
        "indent": [
            2,
            4
        ],
        "quotes": 0,
        "linebreak-style": 0,
        "semi": [
            2,
            "always"
        ],
        "no-unused-vars":[2, {"args": "after-used", "argsIgnorePattern": "^_"}]
    },
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended"
};
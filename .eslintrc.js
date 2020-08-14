module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
    "plugins": [
        "jsdoc"
    ],
	"extends": "mdcs",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018
	},
	"rules": {
	}
};

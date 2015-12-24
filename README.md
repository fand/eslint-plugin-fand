# eslint-plugin-fand

ESLint plugin for fand

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-fand`:

```
$ npm install eslint-plugin-fand --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-fand` globally.

## Usage

Add `fand` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "fand"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "fand/rule-name": 2
    }
}
```

## Supported Rules

* no-japanese

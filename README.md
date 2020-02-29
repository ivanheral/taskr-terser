# @taskr/terser [![npm](https://img.shields.io/npm/v/taskr-terser.svg)](https://npmjs.org/package/taskr-terser)

> [Terser](https://github.com/terser/terser/) plugin for [Taskr](https://github.com/lukeed/taskr).


## Install

```
$ npm install --save-dev taskr-terser
```

## Usage

Check out the [documentation](https://github.com/terser/terser) to see the available options.

```js
exports.terser = function * (task) {
  yield task.source('src/**/*.js').terser().target('dist/js')
}
```

## Support

Any issues or questions can be sent to the [Taskr monorepo](https://github.com/lukeed/taskr/issues/new).

Please be sure to specify that you are using `taskr-terser`.

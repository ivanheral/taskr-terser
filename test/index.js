const join = require("path").join;
const Taskr = require("taskr");
const test = require("tape");

const dir = join(__dirname, 'fixtures');
const tmp = join(__dirname, 'tmp');

test('taskr-terser', (t) => {
  t.plan(3);

  const taskr = new Taskr({
    plugins: [
      require('../'),
      require('@taskr/clear')
    ],
    tasks: {
      * foo(f) {
        t.ok('terser' in taskr.plugins, 'attach the `terser()` plugin to taskr');
        yield f.source(`${dir}/foo.js`).terser().target(tmp);
        const sent = yield f.$.read(`${tmp}/foo.js`, 'utf8');
        t.ok(sent, 'creates a `.js` file');
        t.equal(sent, "var x={baz_:(0,3),foo_:1,calc:function(){return this.foo_+this.baz_},bar_:2};console.log(x.calc());", 'compile the `.js` contents correctly');
        yield f.clear(tmp);
      }
    }
  });

  taskr.serial(['foo']);
});
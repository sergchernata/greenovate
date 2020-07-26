import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | product/dakhuur', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:product/dakhuur');
    assert.ok(route);
  });
});

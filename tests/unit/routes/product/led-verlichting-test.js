import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | product/led-verlichting', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:product/led-verlichting');
    assert.ok(route);
  });
});

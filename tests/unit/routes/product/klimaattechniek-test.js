import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | product/klimaattechniek', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:product/klimaattechniek');
    assert.ok(route);
  });
});

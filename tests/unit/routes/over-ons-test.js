import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | over-ons', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:over-ons');
    assert.ok(route);
  });
});

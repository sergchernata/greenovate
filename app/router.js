import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('product', function() {
    this.route('klimaattechniek');
    this.route('led-verlichting');
    this.route('dakhuur');
  });
  this.route('over-ons');
});

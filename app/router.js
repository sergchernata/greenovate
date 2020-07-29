import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import EmberRouterScroll from 'ember-router-scroll';

export default class Router extends EmberRouterScroll {
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

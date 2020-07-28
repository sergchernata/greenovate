import Component from '@ember/component';

export default Component.extend({
    classNames: ['quote-form'],
    wantScan: false,

    init() {
        this._super(...arguments)
        this.set('email', {newsletter: false});
    },

});
import Component from '@ember/component';
import { task, timeout } from "ember-concurrency";
import axios from 'axios';

export default Component.extend({
    classNames: ['quote-form'],
    endpoint: 'https://formspree.io/xknqkdpn',

    init() {
        this._super(...arguments)
        this.set('email', {wantScan: false, wantNews: false});
    },

    submit: task(function*() {
        try {
            yield axios.post(this.endpoint, this.email);
        }
        catch(_e) {
            this.set('error', 'Something went wront, please try again.');
            console.log(_e)
        }
        finally{
            this.set('sent', true);
            this.set('email', {wantScan: false, wantNews: false});
        }
    }),

    actions: {
        validate() {
            this.set('error', false);

            const required = ['email', 'firstName', 'lastName', 'subject'];
            const scan_required = ['roofSize', 'houseNumber', 'street', 'city', 'zip'];

            for (const field of required) {
                if(this.email[field] === null || this.email[field] === '') {
                    this.set('error', `Please fill out all required contact fields.`)
                    return;
                }
            }

            if(this.email.wantScan) {
                for (const field of scan_required) {
                    if(this.email[field] === null || this.email[field] === '') {
                        this.set('error', `Please fill out all required roof scan fields.`)
                        return;
                    }
                }
            }

            this.submit.perform();
        },
        closeSent() {
            console.log('called', this.sent)
            this.set('sent', false);
        }
    }

});
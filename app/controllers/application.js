import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
    router: service(),
    showQuoteForm: false,

    currentRouteName: computed('router.currentRouteName', function() {
        return this.get('router.currentRouteName');
    }),
    actions: {
        scrollTo(id) {
            const element = document.getElementById(id)
            const rect = element.getBoundingClientRect();

            window.scrollTo({
                top: rect.top,
                left: 100,
                behavior: 'smooth'
            });
        },
        toggleNav() {
            document.body.classList.toggle('open');
            document.getElementById('mobile-nav-toggle').classList.toggle('open');
            document.getElementById('mobile-nav').classList.toggle('open');
        }
    }
});

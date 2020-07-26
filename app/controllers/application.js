import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        scrollTo(id) {
            const element = document.getElementById(id)
            const rect = element.getBoundingClientRect();

            window.scrollTo({
                top: rect.top,
                left: 100,
                behavior: 'smooth'
            });
        }
    }
});

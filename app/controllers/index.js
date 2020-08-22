import Controller from '@ember/controller';

const slides = [
    {
        title: 'Minder CO₂-uitstoot',
        text: 'Doordat u kiest voor duurzame oplossingen draagt u bij aan de vermindering van CO₂-uitstoot.',
        image: 'c02-icon.svg',
        alt: 'icon',
    },
    {
        title: 'Verbetering energielabel',
        text: 'Uw energielabel wordt verbeterd door het verduurzamingsproces.',
        image: 'chart-icon.svg',
        alt: 'icon',
    },
    {
        title: 'Invulling MVO-beleid',
        text: 'Direct invulling aan uw MVO-beleid en u investeert in de toekomstbestendigheid van uw bedrijf.',
        image: 'mvo-icon.svg',
        alt: 'icon',
    },
    {
        title: 'Imagoverbetering',
        text: 'Een positieve bijdrage aan de uitstraling van uw bedrijf. Zo laat u duidelijk zien dat u bijdraagt aan een betere wereld.',
        image: 'eye-icon.svg',
        alt: 'icon',
    },
    {
        title: 'Besparen',
        text: 'Door te kiezen voor duurzame oplossingen gaat u energie en geld besparen. In het geval van dak verhuur verdient u zelfs extra geld zonder investering.',
        image: 'bank-icon.svg',
        alt: 'icon',
    },
    {
        title: 'Goed geregeld',
        text: 'Wij nemen u zorgen gedurende het proces uit handen, en u kunt zich blijven richten op uw core-business. Heeft uw vragen? Dan staan wij en onze partners klaar om uw vragen te beantwoorden.',
        image: 'thumb-up-icon.svg',
        alt: 'icon',
    },
    {
        title: 'Geen terugverdientijd',
        text: 'In het geval dat u kiest voor dakhuur heeft u geen terugverdientijd en profiteert u direct van de plaatsing van de zonnepanelen.',
        image: 'time-icon.svg',
        alt: 'icon',
    },
    {
        title: 'Gezamenlijk belang',
        text: 'Ons netwerk bestaat enkel uit experts die gebruik maken van de beste kwaliteit materialen.',
        image: 'hands-icon.svg',
        alt: 'icon',
    },
];

export default Controller.extend({
    slides: slides,
    carouselIndex: 1,

    actions: {
        slideChanged(index) {
            // index seems bugged, correct manually
            index = index === -1 ? this.slides.length - 1 : index;
            index = index === this.slides.length ? 0 : index;
            this.set('carouselIndex', index + 1);
        }
    }
});

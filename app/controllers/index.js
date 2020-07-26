import Controller from '@ember/controller';

const slides = [
    {
        title: 'Minder CO₂-uitstoot',
        text: 'Doordat u kiest voor duurzame energie draagt u bij aan de vermindering van CO₂-uitstoot.',
        image: '',
    },
    {
        title: 'Verbetering energielabel',
        text: 'Uw energielabel wordt verbeterd door de plaatsing van zonnepanelen op uw dak.',
        image: '',
    },
    {
        title: '100% groene stroom',
        text: 'U kunt ervoor kiezen om over te gaan naar 100% groene energie verbruik.',
        image: '',
    },
    {
        title: 'Invulling MVO-beleid',
        text: 'Direct invulling aan uw MVO-beleid en u investeert aan de toekomstbestendigheid van uw bedrijf.',
        image: '',
    },
    {
        title: 'Behoud kredietruimte',
        text: 'Wij doen de investering en u kan zich blijven richten op uw core business.',
        image: '',
    },
    {
        title: 'Imagoverbetering',
        text: 'Een positieve bijdrage aan de groene uitstraling van uw bedrijf. Zo laat u duidelijk zien dat u bijdraagt aan een beter milieu.',
        image: '',
    },
    {
        title: 'Goed geregeld',
        text: 'Wij nemen niet alleen het werk uit handen maar ook de bijbehorende risico’s. Heeft uw vragen? Dan staat ons team klaar om uw vragen te beantwoorden.',
        image: '',
    },
    {
        title: 'Geen terugverdientijd',
        text: 'Doordat wij de investering doen, heeft u geen terugverdientijd en profiteert u direct van de plaatsing van onze zonnepanelen via dakhuur.',
        image: '',
    },
    {
        title: 'Gezamenlijk belang',
        text: 'Wij maken gebruik van de beste kwaliteit materialen en zonnepanelen. Wij halen het meeste rendement uit uw dak.',
        image: '',
    },
    {
        title: 'Inkomsten dakhuur',
        text: 'Zodra de zonnepanelen zijn aangesloten op het elektriciteitsnet, ontvangt u het maandelijkse huurbedrag en start u met verdienen.',
        image: '',
    },
];

export default Controller.extend({
    slides: slides,
    carouselIndex: 1,
    wantScan: false,

    actions: {
        slideChanged(index) {
            this.set('carouselIndex', Math.abs(index + 1));
        }
    }
});

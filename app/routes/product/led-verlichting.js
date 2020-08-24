import Route from '@ember/routing/route';
import { metadata } from '../../metadata';

export default class ProductLedVerlichtingRoute extends Route {
  headTags() {
    return [
      {
        type: 'title',
        tagId: 'meta-title-tag',
        content: metadata.products.led_verlichting.title,
      },
      {
        type: 'meta',
        tagId: 'meta-description-tag',
        attrs: {
          name: 'description',
          content: metadata.products.led_verlichting.description,
        }
      }
    ];
  }
}

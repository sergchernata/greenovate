import Route from '@ember/routing/route';
import { metadata } from '../metadata';

export default Route.extend({
  headTags() {
    return [
      {
        type: 'title',
        tagId: 'meta-title-tag',
        content: metadata.home.title,
      },
      {
        type: 'meta',
        tagId: 'meta-description-tag',
        attrs: {
          name: 'description',
          content: metadata.home.description,
        }
      }
    ];
  }
});
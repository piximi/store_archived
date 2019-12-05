import { createCategoryAction } from './classifier';
import { Category, Classifier, Image, Partition, Score } from '@piximi/types';

const unknownCategory: Category = {
  description: 'Unknown',
  identifier: '00000000-0000-0000-0000-000000000000',
  index: 0,
  visualization: {
    color: 'rgb(233, 165, 177)',
    visible: true
  }
};

describe('createCategoryAction', () => {
  it('creates a category', () => {
    // const createCategory = (category: Category) => {
    //   return action('create-category', category)
    // };

    const category: Category = {
      description: 'example',
      identifier: '11111111-1111-1111-1111-11111111111',
      index: 1,
      visualization: {
        color: '#FFFFFF',
        visible: true
      }
    };

    const payload = {
      category: category
    };

    const increment = createAction('counter/increment');

    expect(increment(1)).toEqual([]);
  });
});

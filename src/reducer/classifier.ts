import { Category, Classifier, Image } from '@piximi/types';
import { createReducer, getType } from 'typesafe-actions';
import { ActionType } from 'typesafe-actions';
import {
  createCategoryAction,
  createClassifierAction,
  createImageAction,
  createImagesAction,
  createImagesScoreAction,
  deleteCategoryAction,
  deleteImageAction,
  openClassifierAction,
  toggleCategoryVisibilityAction,
  updateCategoryColorAction,
  updateCategoryDescriptionAction,
  updateCategoryVisibilityAction,
  updateClassifierNameAction,
  updateImageBrightnessAction,
  updateImageCategoryAction,
  updateImageContrastAction,
  updateImagesCategoryAction,
  updateImagesPartitionAction,
  updateImagesVisibilityAction,
  updateImageVisibilityAction
} from '../actions';

const actions = [
  createCategoryAction,
  createClassifierAction,
  createImageAction,
  createImagesAction,
  createImagesScoreAction,
  deleteCategoryAction,
  deleteImageAction,
  openClassifierAction,
  toggleCategoryVisibilityAction,
  updateCategoryColorAction,
  updateCategoryDescriptionAction,
  updateCategoryVisibilityAction,
  updateClassifierNameAction,
  updateImageBrightnessAction,
  updateImageCategoryAction,
  updateImageContrastAction,
  updateImagesCategoryAction,
  updateImagesPartitionAction,
  updateImagesVisibilityAction,
  updateImageVisibilityAction
];

export type ClassifierAction = ActionType<typeof actions>;

const findCategoryIndex = (
  categories: Category[],
  identifier: string
): number => {
  return categories.findIndex(
    (category: Category) => category.identifier === identifier
  );
};

const findImageIndex = (images: Image[], identifier: string): number => {
  return images.findIndex((image: Image) => image.identifier === identifier);
};

const initialState: Classifier = {
  categories: [],
  images: [],
  name: 'Untitled classifier'
};

const unknownCategory: Category = {
  description: 'Unknown',
  identifier: '00000000-0000-0000-0000-000000000000',
  index: 0,
  visualization: {
    color: 'rgb(233, 165, 177)',
    visible: true
  }
};

import { StateType } from 'typesafe-actions';

export type RootAction = ActionType<typeof actions>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}

const classifierReducer = createReducer(initialState)
  .handleAction(actions.createCategoryAction, (state, action) => {
    const { category } = action.payload;

    state.categories.push(category);
  })
  .handleAction(actions.createClassifierAction, (state, action) => {
    const { name } = action.payload;

    state.categories = [];

    state.categories.push(unknownCategory);

    state.images = [];

    state.name = name;
  })
  .handleAction(actions.openClassifierAction, (state, action) => {
    const { classifier } = action.payload;

    state.categories = classifier.categories;

    state.images = classifier.images;

    state.name = classifier.name;
  })
  .handleAction(actions.createImageAction, (state, action) => {
    const { image } = action.payload;

    state.images.push(image);
  })
  .handleAction(actions.createImagesAction, (state, action) => {
    const { images } = action.payload;

    images.forEach((image: Image) => state.images.push(image));
  })
  .handleAction(actions.createImagesScoreAction, (state, action) => {
    const { identifiers, scores } = action.payload;
    for (let i = 0; i < identifiers.length; i++) {
      const index: number = findImageIndex(state.images, identifiers[i]);
      const image: Image = state.images[index];
      image.scores = scores[i];
    }
  })
  .handleAction(actions.deleteCategoryAction, (state, action) => {
    const { identifier } = action.payload;

    state.categories = state.categories.filter((category: Category) => {
      return category.identifier !== identifier;
    });

    state.images = state.images.map((image: Image) => {
      if (image.categoryIdentifier === identifier) {
        image.categoryIdentifier = '00000000-0000-0000-0000-000000000000';
      }

      return image;
    });
  })
  .handleAction(actions.deleteImageAction, (state, action) => {
    const { identifier } = action.payload;

    state.images = state.images.filter(
      (image: Image) => image.identifier !== identifier
    );
  })
  .handleAction(actions.toggleCategoryVisibilityAction, (state, action) => {
    const { identifier } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visualization.visible = !category.visualization.visible;
  })
  .handleAction(actions.updateCategoryColorAction, (state, action) => {
    const { identifier, color } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visualization.color = color;
  })
  .handleAction(actions.updateCategoryDescriptionAction, (state, action) => {
    const { identifier, description } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.description = description;
  })
  .handleAction(actions.updateCategoryVisibilityAction, (state, action) => {
    const { identifier, visible } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visualization.visible = visible;
  })
  .handleAction(actions.updateClassifierNameAction, (state, action) => {
    const { name } = action.payload;

    state.name = name;
  })
  .handleAction(actions.updateImageBrightnessAction, (state, action) => {
    const { identifier, brightness } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visualization.brightness = brightness;
  })
  .handleAction(actions.updateImageCategoryAction, (state, action) => {
    const { identifier, categoryIdentifier } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.categoryIdentifier = categoryIdentifier;
  })
  .handleAction(actions.updateImagesCategoryAction, (state, action) => {
    const { identifiers, categoryIdentifier } = action.payload;

    identifiers.forEach((identifier: string) => {
      const index: number = findImageIndex(state.images, identifier);
      const image: Image = state.images[index];
      image.categoryIdentifier = categoryIdentifier;
    });
  })
  .handleAction(actions.updateImageContrastAction, (state, action) => {
    const { identifier, contrast } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visualization.contrast = contrast;
  })
  .handleAction(actions.updateImageVisibilityAction, (state, action) => {
    const { identifier, visible } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visualization.visible = visible;
  })
  .handleAction(actions.updateImagesPartitionAction, (state, action) => {
    const { partitions } = action.payload;

    state.images.forEach((image: Image) => {
      image.partition = partitions[0];
      partitions.splice(0, 1);
    });
  })
  .handleAction(actions.updateImagesVisibilityAction, (state, action) => {
    const { identifiers, visible } = action.payload;

    for (let i = 0; i < identifiers.length; i++) {
      const index: number = findImageIndex(state.images, identifiers[i]);

      const image: Image = state.images[index];

      image.visualization.visible = visible;
    }
  });

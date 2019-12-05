import { Category } from '@piximi/types';
import { createAction } from 'typesafe-actions';

export const createCategoryAction = createAction('create-category', action => {
  return (category: Category) => {
    return action(category);
  };
});

export const createClassifierAction = createAction(
  'create-classifier',
  action => {
    return (category: Category) => {
      return action(category);
    };
  }
);

export const createImageAction = createAction('create-image', action => {
  return (category: Category) => {
    return action(category);
  };
});

export const createImagesAction = createAction('create-images', action => {
  return (category: Category) => {
    return action(category);
  };
});

export const createImagesScoreAction = createAction(
  'create-images-score',
  action => {
    return (category: Category) => {
      return action(category);
    };
  }
);

export const deleteCategoryAction = createAction('delete-category', action => {
  return (category: Category) => {
    return action(category);
  };
});

export const deleteImageAction = createAction('delete-image', action => {
  return (category: Category) => {
    return action(category);
  };
});

export const openClassifierAction = createAction('open-classifier', action => {
  return (category: Category) => {
    return action(category);
  };
});

export const toggleCategoryVisibilityAction = createAction(
  'toggle-category-visibility',
  action => {
    return (category: Category) => {
      return action(category);
    };
  }
);

export const updateCategoryColorAction = createAction(
  'update-category-color',
  action => {
    return (category: Category) => {
      return action(category);
    };
  }
);

export const updateCategoryDescriptionAction = createAction(
  'update-category-description',
  action => {
    return (category: Category) => {
      return action(category);
    };
  }
);

export const updateCategoryVisibilityAction = createAction(
  'update-category-visibility',
  action => {
    return (category: Category) => {
      return action(category);
    };
  }
);

export const updateClassifierNameAction = createAction(
  'update-classifier-name',
  action => {
    return (category: Category) => {
      return action(category);
    };
  }
);

export const updateImageBrightnessAction = createAction(
  'update-image-brightness',
  action => {
    return (category: Category) => {
      return action(category);
    };
  }
);

export const updateImageCategoryAction = createAction(
  'update-image-category',
  action => {
    return (category: Category) => {
      return action(category);
    };
  }
);

export const updateImageContrastAction = createAction(
  'update-image-contrast',
  action => {
    return (category: Category) => {
      return action(category);
    };
  }
);

export const updateImageVisibilityAction = createAction(
  'update-image-visibility',
  action => {
    return (category: Category) => {
      return action(category);
    };
  }
);

export const updateImagesCategoryAction = createAction(
  'update-images-category',
  action => {
    return (category: Category) => {
      return action(category);
    };
  }
);

export const updateImagesPartitionAction = createAction(
  'update-images-partition',
  action => {
    return (category: Category) => {
      return action(category);
    };
  }
);

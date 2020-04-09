import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopSections = createSelector(
  [selectShop],
  shop => shop.sections
);

export const selectSectionsForPreview = createSelector(
  [selectShopSections],
  sections => sections
  ? Object.keys( sections )
    .map(key =>
      sections[key]
    )
  : []
);

export const selectSection = sectionUrlParam => createSelector(
  [selectShopSections],
  sections => ( sections
  ? sections[sectionUrlParam]
  : null )
)

export const selectIsSectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectIsSectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.sections
)

import { createSelector } from 'reselect';

const selectContact = state => state.contact;

export const selectContactDetails = createSelector(
  [selectContact],
  contact => contact.contactDetails
);

export const selectContactDetailsForSharing = createSelector(
  [selectContactDetails],
  contactDetails => contactDetails
  ? Object.keys( contactDetails )
    .map(key =>
      contactDetails[key]
    )
  : []
);

export const selectAreContactDetailsFetching = createSelector(
  [selectContactDetails],
  details => details.isFetching
)

export const selectAreContactDetailsLoaded = createSelector(
  [selectContactDetails],
  details => !!details.sections
)

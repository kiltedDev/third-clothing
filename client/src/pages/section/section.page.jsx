import React from 'react';
import { connect } from 'react-redux';

import SectionItem from '../../components/section-item/section-item.component';

import { selectSection } from '../../redux/shop/shop.selectors';

import {
  SectionPageContainer,
  SectionPageItems,
  SectionPageTitle
} from './section.styles';

const SectionPage = ({ match, section }) => {
  const { title, items } = section;
  return(
    <SectionPageContainer className='section-page'>
      <SectionPageTitle
        className='title'
        children={ title }
      />
    <SectionPageItems className='items' >
        { items.map ( item  => (
          <SectionItem
            key={ item.id }
            item={ item }
          />
        ))}
      </SectionPageItems>
    </SectionPageContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  section: selectSection(ownProps.match.params.sectionId)(state)
});

export default connect(mapStateToProps)(SectionPage);

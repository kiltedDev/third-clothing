import { mount } from 'enzyme';
import React from 'react';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ShopPage } from './shop.page';

const createMockStore = ({ state, reducers }) => {
  const store = createStore(combineReducers(reducers), state);
  return {
    ...store,
    persistor: {
      persist: () => null
    }
  };
};

describe('ShopPage', () => {
  let wrapper;
  let snapshot;
  let mockMatch;
  let mockFetchSectionsStart;
  let mockHideCart;
  let store;
  beforeAll(() => {
    const mockReducer = (
      state = {
        isFetching: true
      },
      action
    ) => state;

    const mockState = {
      shop: {
        isFetching: true
      }
    }

    mockMatch = jest.fn();
    mockFetchSectionsStart = jest.fn();
    mockHideCart = jest.fn();

    store = createMockStore({
      state: mockState,
      reducers: { shop: mockReducer }
    });

    const mockProps = {
      match: mockMatch,
      hideCart: mockHideCart,
      fetchSectionsStart: mockFetchSectionsStart
    };
    wrapper = mount(
      <BrowserRouter>
        <Provider store={ store }>
          <ShopPage { ...mockProps } />
        </Provider>
      </BrowserRouter>
    );
    snapshot = wrapper.debug();
  });

  it('should render ShopPage component',() => {
    expect( snapshot ).toMatchSnapshot();
  });

  it('should call fetchSectionsStart upon mounting',() => {
    expect( mockFetchSectionsStart ).toHaveBeenCalled();
  });

  it('should call hideCart upon mounting',() => {
    expect( mockHideCart ).toHaveBeenCalled();
  });
});

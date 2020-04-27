import directoryReducer from './directory.reducer';

const initialState = {
  sections: []
}

describe('directoryReducer', () => {
  it('should return initial state', () => {
    expect( directoryReducer( undefined, {} ) )
    .toEqual( initialState );
  });
});

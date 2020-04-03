// diverged from course here because in a RW scenario we'd be importing
// from a database and I'd like to have this structured more in that
// direction.  p sure they'll do that later anyhow.

// import DIRECTORY_DATA from '../../components/directory/directory.data';

const INITIAL_STATE = {
  sections: []
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
    return state;
  }
}

export default directoryReducer;

import React from 'react';

import  {
  ErrorImageOverlay,
  ErrorImageText,
  ErrorImageContainer
} from './error-boundary.styles';

export class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStatedFromError( error ) {
    // do stuff with error
    return { hasErrored: true }
  }

  componentDidCatch( error, info ) {
    console.log( error );
  }

  render() {
    if ( this.state.hasErrored ) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/FOeYt4E.png'/>
          <ErrorImageText>Sorry this page is hiding in the sand.</ErrorImageText>
        </ErrorImageOverlay>
      )
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary;

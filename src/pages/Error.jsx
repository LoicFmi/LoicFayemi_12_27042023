import React from 'react';
// import {
//   userInfos,
//   userActivity,
//   userPerformance,
//   userAverageSessions
// } from '../utils/apiCall.js';

function NotFound() {
  return (
    <main className="notfound">
      <h1 className="notfound__404">404</h1>
      <p className="notfound__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
    </main>
  );
}

// export default NotFound;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, info) {
  //   // Example "componentStack":
  //   //   in ComponentThatThrows (created by App)
  //   //   in ErrorBoundary (created by App)
  //   //   in div (created by App)
  //   //   in App
  //   userInfos(error, info.componentStack);
  //   userActivity(error, info.componentStack);
  //   userPerformance(error, info.componentStack);
  //   userAverageSessions(error, info.componentStack);
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
      // return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

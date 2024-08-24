import React from 'react';
import * as WebBrowser from 'expo-web-browser';

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    WebBrowser.warmUpAsync(); // Initialize the web browser

    return () => {
      WebBrowser.coolDownAsync(); // Clean up when the component unmounts
    };
  }, []);
};

import React, { useEffect, useState, Fragment } from 'react';
import ForgeReconciler, {Text, Spinner} from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke('callFeature', { feature_code: 'summarize' }).then(setData);
  }, []);

  return (
    <>
      {data ? (
        <Text>{data}</Text>
      ) : (
        <Spinner size="large" label="processing"/>
      )}
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
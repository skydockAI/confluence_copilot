import React, { useEffect, useState, Fragment } from 'react';
import ForgeReconciler, {Text, Textfield, TextArea, Button, ButtonGroup, Box, Label, Spinner, SectionMessage, Heading } from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {
  const [featureResponse, setFeatureResponse] = useState('');
  const [question, setQuestion] = useState('');
  const [showLoading, setShowLoading] = useState(false);

  const FEATURES = [
    ["📑 Summarize", "summarize"],
    ["📌 Highlight", "highlight"]
  ];

  const callFeature = async (feature_code) => {
    setShowLoading(true);
    setFeatureResponse(null);
    var response = null;
    if (feature_code == "qAndA"){
      response = await invoke('callFeature', {feature_code: feature_code, question: question});
    }
    else {
      response = await invoke('callFeature', {feature_code: feature_code});
    }
    setFeatureResponse(response);
    setShowLoading(false);
  };

  return (
    <>
      <Heading as="h1">Confluence Copilot</Heading>
      <Box paddingBlock='space.100'>
        <ButtonGroup>
          {FEATURES.map(([feature_text, feature_code]) => (
            <Button key={feature_code} appearance="primary" onClick={async () => { await callFeature(feature_code); }}>
              {feature_text}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <Box paddingBlock='space.100'>
        <Label labelFor="question">Document Q&A</Label>
        <Textfield id="question" value={question} onChange={(e) => setQuestion(e.target.value)}/>
      </Box>
      <Box paddingBlock='space.100'>
        <Button
          appearance="primary"
          onClick={async () => {
            await callFeature("qAndA");
          }}
        >
          Ask
        </Button>
      </Box>

      {showLoading && (
         <Fragment>
          <Box paddingBlock='space.100'>
            <Spinner size="large" label="processing"/>
          </Box>
        </Fragment>
      )}

      {featureResponse && (
        <Fragment>
          <Box paddingBlock='space.100'>
            <Heading as="h4">Answer:</Heading>
            <TextArea appearance="subtle" value={featureResponse} onChange={(e) => setFeatureResponse(e.target.value)}/>
          </Box>
        </Fragment>
      )}
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
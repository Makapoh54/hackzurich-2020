import { makeStyles } from "@material-ui/core";
// App.js
import React, { useCallback, useState } from "react";
import { Confirm, Container, Grid } from "semantic-ui-react";

import Diagram from "../components/Diagram";
import { Menu } from "../components/Menu";
import RecognitionModal from "../components/RecognitionModal";
import { useNeuralData } from "../useNeuralData";

const useStyles = makeStyles({
  container: {
    padding: '3em'
  },
});

// render function...
export default function App() {
  const [confirmReset, setConfirmReset] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [processed, setProcessed] = useState(false)
  const classes = useStyles()
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const selectedNode = params.get("selectedNode");
  if (+(selectedNode ?? 0) > 0) setTimeout(() => setProcessed(true), 0)
  const finishProcessing = useCallback(() => {
    setProcessed(true)
    setModalOpen(false)
  }, [])

  const { nodeDataArray, linkDataArray } = useNeuralData(processed)

  return (
    <>
      <Grid container>

        <Grid.Column width={4}>
          <Menu reset={() => setConfirmReset(true)} start={() => setModalOpen(true)} />
        </Grid.Column>
        <Grid.Column>
          <Diagram nodeDataArray={nodeDataArray} linkDataArray={linkDataArray} selectedNode={selectedNode} />
        </Grid.Column>

      </Grid>
      <RecognitionModal
        open={modalOpen}
        onOpen={() => setModalOpen(true)}
        onClose={() => setModalOpen(false)}
        onFinish={finishProcessing}
      />
      <Confirm
        open={confirmReset}
        onCancel={() => setConfirmReset(false)}
        onConfirm={() => setConfirmReset(false)}
      />
    </>
  );
}

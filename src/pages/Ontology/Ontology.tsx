import React from 'react';
import { Panel } from '../../components/Panel/Panel';
import { LuWandSparkles } from 'react-icons/lu';
import { Button } from '../../components/Button';
import { countParticipants } from './index';
import { Heading } from '@chakra-ui/react';

function Ontology() {
  const [response, setResponse] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <>
      <Panel mb={4}>
        <Button onClick={async () => {
          setLoading(true);
          await countParticipants().then((res) => {
              setResponse(`${res}`);
              setLoading(false);
            }
          );
        }} loading={loading} icon={<LuWandSparkles />} label={'Count Participants'} />
      </Panel>
      <Panel>
        <Heading>Response: {response}</Heading>
      </Panel>
    </>
  );
}

export default Ontology;

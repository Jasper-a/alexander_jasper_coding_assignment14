import React from 'react';

import {BasicInformation} from '@jasper-a/alexander_jasper_coding_assignment14';
import {Work} from '@jasper-a/alexander_jasper_coding_assignment14';
import {Skills} from '@jasper-a/alexander_jasper_coding_assignment14';
import {Resources} from '@jasper-a/alexander_jasper_coding_assignment14';
import {DeveloperSetup} from '@jasper-a/alexander_jasper_coding_assignment14';

function App() {
  return (
    <div className="App">
      <BasicInformation fontFamily='consolas' />
      <Work fontFamily='consolas' />
      <Skills fontFamily='consolas' />
      <Resources fontFamily='consolas' />
      <DeveloperSetup fontFamily='consolas' />
    </div>
  );
}

export default App;

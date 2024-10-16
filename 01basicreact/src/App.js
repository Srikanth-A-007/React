// C:\Srikanth\React_JS\01basicreact\src\App.js

import React from 'react';
import StandardButton from './components/standard button'; // Adjust path if necessary
import StandardTextbox from './components/standard textbox'; // Import your textbox component


function App() {
  return (
    <div>
      <h1>Hello Cogni</h1>
      <StandardButton />  {/* Button component */}
      <StandardTextbox /> {/* Text field component */}
      
      
    </div>
  );
}

export default App;

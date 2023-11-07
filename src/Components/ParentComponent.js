// ParentComponent.js
import React from 'react';
import useCustomHook from './useCustomHook';
import ChildComponent from './ChildComponent'; // Import the ChildComponent

function ParentComponent() {
  const { rollNo, updateRollNo } = useCustomHook(1);

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Roll Number: {rollNo}</p>
      <button onClick={() => updateRollNo(rollNo + 1)}>Increment Roll Number</button>
      
      
      <ChildComponent rollNo={rollNo} />
    </div>
  );
}

export default ParentComponent;

import { useState, useEffect } from 'react';

function useCustomHook(initialRollNo) {
  const [rollNo, setRollNo] = useState(initialRollNo);

  useEffect(() => {  
  }, [rollNo]);

  const updateRollNo = (newRollNo) => {
    setRollNo(newRollNo);
  };

  return { rollNo, updateRollNo };
}

export default useCustomHook;

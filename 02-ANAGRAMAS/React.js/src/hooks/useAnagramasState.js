import React, { useState } from 'react';

const useAnagramState = () => {
  const [mainString, setMainString] = useState('');
  const [secString, setSecString] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [result, setResult] = useState(null);

  return { mainString, setMainString, secString, setSecString, error, setError, success, setSuccess, result, setResult };
};

export default useAnagramState;
import React, { useEffect, useState, useCallback } from 'react';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const callApi = async () => {
    setLoading(true);
    await fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setLoading(false);
      });
  };

  const callApi2 = useCallback(() => {
    setLoading(true);
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setLoading(false);
        setData(resp?.users);
      });
  }, []);

  const call = () => {
    console.log('123');
  };

  useEffect(() => {
    // callApi();
    callApi2();
    // call();
  }, [callApi2]);

  return (
    <div>
      <p>Hellow</p>
      <p>{loading ? 'true' : 'false'}</p>
    </div>
  );
};

export default App;

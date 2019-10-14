import React, { useState } from 'react';

const uri =
  'http://api.coinlayer.com/api/live?access_key=bd5f2c91e98cfd32c7c8a18671ea0510&symbols=BTC,ETH,EOS';

const fetchLiveData = async setRates => {
  console.log('fetch start');
  const res = await fetch(uri);
  const liveData = await res.json();
  const rates = liveData.rates;
  if(rates) setRates(rates);
};

const ListCurrenry = props => {
  console.log(props);
  const { rates } = props;
  return Object.keys(rates).map(key => <p>{key}: {rates[key]}</p>);
};
const LiveData = () => {
  const [rates, setRates] = useState({});
  fetchLiveData(setRates);
  return (
    <>
      <h1>hello</h1>
      <ListCurrenry rates={rates} />
    </>
  );
};

export default LiveData;

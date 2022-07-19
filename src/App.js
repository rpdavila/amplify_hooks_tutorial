import React, { useState } from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createPersonalInfo } from './graphql/mutations';
import { listPersonalInfos } from './graphql/queries'

import awsconfig from './aws-exports';

import './App.css';

Amplify.configure(awsconfig);

let personalInformation = {
  name: '',
  age: '',
  address: ''
}

function App() {

  const [info, setInfo] = useState(personalInformation);
  const { name, age, address } = info

  const handleChange = (e) => {
    const {value, name} = e.target
    setInfo({...info, [name]: value})
  }

  const addInfos = async () => {
    try {
      await API.graphql(graphqlOperation(createPersonalInfo, { input: { name: name, age: age, address: address }}));
    } catch (error) {
      console.log(error);
    }    
  }

  return (
    <div className="App">
      <p>GraphQL Amplify Custom Hook Tutorial</p>
      <br/>
      <div>
        <input
          type='text'
          name='name'
          onChange={handleChange}
          placeholder='Name'
          required
        />

        <input
          type='text'
          name='age'
          onChange={handleChange}
          placeholder='Age'
          required
        />

        <input
          type='text'
          name='address'
          onChange={handleChange}
          placeholder='Address'
          required
        />
      </div>
      <button onClick={addInfos}> Submit </button>

    </div>
  );
}

export default App;

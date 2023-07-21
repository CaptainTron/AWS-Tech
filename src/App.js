import './App.css';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { DataStore } from '@aws-amplify/datastore';
import { AWSTech } from './models';
Amplify.configure(awsconfig);

function App() {

  async function GetData() {
    try {
      const Savadata = await DataStore.save(new AWSTech({
        "fname": "Lorem ipsum dolor sit amet",
        "lname": 1020,
        "rollnumber": "Lorem ipsum dolor sit amet"
      })
      );
      console.log(Savadata)
    } catch (err) {
      alert("N")
    }
  }
  GetData()


  return (
    <>
      <h2>Enter Your fame</h2>
      <input type="text" />
      <br />
      <h2>Enter Your lname</h2>
      <input type="number" />
      <br />
      <h2>Enter Your RollNumber</h2>
      <input type="text" />

    </>
  )
}

export default App;

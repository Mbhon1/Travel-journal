import './App.css';
import Header from './Header';
import Main from './Main';
import mainData from '../data/mainData';

function App() {
  const main = mainData.map(travelData => {
    return (
      <Main 
        key={travelData.id}
        {...travelData}
      />
    )
  })
  
  return (
    <main>
      <Header />
      {main}
    </main>
  );
}

export default App;

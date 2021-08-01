import './App.css';
import Card from './components/Card/Card';
import Loader from './components/Loader/Loader';
import Header from './containers/Header/Header';

function App() {
  return (
    <div className="AppWrapper">
      <Header />
      <main className="AppMain">
        <Card>
          <Loader /> 
        </Card>
      </main>
    </div>
  );
}

export default App;

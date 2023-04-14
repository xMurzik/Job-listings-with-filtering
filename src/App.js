import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import ActiveList from './components/ActiveList/ActiveList';

function App() {
  return (
    <>
      <Header />
      <Main>
        <ActiveList />
      </Main>
    </>
  );
}

export default App;

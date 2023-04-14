import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import ActiveList from './components/ActiveList/ActiveList';
import WorkPlace from './components/WorkPlace/WorkPlace';

function App() {
  return (
    <>
      <Header />
      <Main>
        <ActiveList />
        <WorkPlace />
      </Main>
    </>
  );
}

export default App;

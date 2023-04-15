import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import ActiveList from './components/ActiveList/ActiveList';
import WorkPlace from './components/WorkPlace/WorkPlace';
import data from './data.json';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadList } from './components/ElemWorkPlace/listSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadList(data));
  }, [dispatch]);

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

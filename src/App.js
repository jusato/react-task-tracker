import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="container">
      <Header />  {/*poderia passar um valor para props title aqui, tipo title='Hello'*/}
      <Tasks />
    </div>
  );
}

export default App;

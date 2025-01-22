import reactImg from './assets/react-core-concepts.png';

const reactDescriptions = [ 'Fundermental', 'Crucial','Core'];

function getRandomInt(max){
  return Math.floor(Math.random()*(max + 1));
}

function Header(){

  const descriptions = reactDescriptions[getRandomInt(2)];
  return (
   <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {descriptions} Concepts!! Hello!!
    </p>
   </header>

  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <Header></Header>
      <main>
        <h2>Omo</h2>
      </main>
    </div>
  );
}

export default App;

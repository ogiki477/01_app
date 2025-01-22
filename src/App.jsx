import reactImg from './assets/react-core-concepts.png';

import ImageReact from './assets/components.png';

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

function CoreConcept(props){
  return (
    <li>
      <img src={props.image} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
          title = 'Components' 
          description = "Core UI building Blocks" 
          image = {ImageReact} 
          />
          <CoreConcept
          title='Props'
          />
          <CoreConcept/>
          <CoreConcept/>      
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;

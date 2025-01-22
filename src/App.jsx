import { CORE_CONCEPTS } from './data.js';

import Header from './components/Header/Header.jsx';
import TabButton from './components/TapButton.jsx';
import CoreConcept from './components/CoreConcept.jsx';

function App() {
  return (
    <div>
      <Header></Header>
      
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
          title = {CORE_CONCEPTS[0].title} 
          description = {CORE_CONCEPTS[0].description}
          image = {CORE_CONCEPTS[0].image}
          />
          
          <CoreConcept {...CORE_CONCEPTS[1]} />
          
          <CoreConcept {...CORE_CONCEPTS[2]} />
          
          <CoreConcept {...CORE_CONCEPTS[3]} />
                
          </ul>
        </section>

        <section id='examples'>
          <h1>Examples</h1>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
        
      </main>
    </div>
  );
}

export default App;

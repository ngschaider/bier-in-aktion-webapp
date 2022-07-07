import Header from './Header';
import Content from './Content';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        { /* <Sidebar /> */ }
        <section id="content-section">
          <Content />
        </section>
      </main>
    </>
  );
}

export default App;

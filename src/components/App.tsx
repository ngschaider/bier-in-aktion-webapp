import './App.css';
import Header from './Header';
import Content from './Content';

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

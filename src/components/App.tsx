import './App.css';
import Header from './Header';
import Content from './Content';
import MySidebar from './Sidebar';

const App = () => {
  
  return (
    <>
      <main>
        <MySidebar>
          <section id="content-section">
            <Content />
          </section>
        </MySidebar>
      </main>
    </>
  );
}

export default App;

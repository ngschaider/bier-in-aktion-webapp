import Sidebar from './Sidebar';
import OptionMenu from './OptionMenu';
import ProductGrid from './ProductGrid';
import './App.css';

const App = () => {
  
  return (
    <>
      <main>
        <section id="sidebar-section">
          <Sidebar />
        </section>
        <section id="content-section">
          <OptionMenu />
          <ProductGrid />
        </section>
      </main>
    </>
  );
}

export default App;

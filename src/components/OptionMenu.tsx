import './OptionMenu.css';

const OptionMenu = () => {
  return (
    <section id="option-section">
      <div>
        <div className="select-container">
          <select className="dropdown" name="marketFilter" id="market-select" placeholder="Markt">
            <option value="billa">Billa</option>
            <option value="billa_plus">Billa Plus</option>
            <option value="spar">Spar</option>
          </select>
        </div>

        <div className="select-container">
          <select className="dropdown" name="brandFilter" id="brand-select" placeholder="Marke">
            <option value="goesser">Gösser</option>
            <option value="stiegl">Stiegl</option>
            <option value="otterkringer">Otterkringer</option>
            <option value="schwechater">Schwechater</option>
          </select>
        </div>
      </div>

      <div>
        <div className="select-container">
          <select className="dropdown" name="sortBy" id="price-select" placeholder="Sortierung">
            <option value="price_asc">Preis aufsteigend</option>
            <option value="price_desc">Preis absteigend</option>
            <option value="discount_percentage">Max. Rabatt (in %)</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default OptionMenu;

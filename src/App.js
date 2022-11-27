function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img src="./img/logo.png" alt="img" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img src="./img/cart.svg" alt="img" />
            <span>1205 $</span>
          </li>
          <li>
            <img src="./img/user.svg" alt="img" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="conteinerWrapper">
          <div className="card">
            <img src="./img/sneakers/1.jpg" alt="sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardWrapper">
              <div className="cardInner">
                <span>Цена:</span>
                <b>12 999 $</b>
              </div>
              <button>
                <img src="./img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="./img/sneakers/2.jpg" alt="sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardWrapper">
              <div className="cardInner">
                <span>Цена:</span>
                <b>12 999 $</b>
              </div>
              <button>
                <img src="./img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="./img/sneakers/3.jpg" alt="sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardWrapper">
              <div className="cardInner">
                <span>Цена:</span>
                <b>12 999 $</b>
              </div>
              <button>
                <img src="./img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="./img/sneakers/4.jpg" alt="sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardWrapper">
              <div className="cardInner">
                <span>Цена:</span>
                <b>12 999 $</b>
              </div>
              <button>
                <img src="./img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';

const currentPage = window.location.pathname.slice(0, 6);

console.log(currentPage);

const response = await fetch(
  `https://apps.kodim.cz/daweb/trening-api/apis/realitka${currentPage}`,
);
const data = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header />
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>,
);

import './styles.css'
import divisor from '../../assets/divisor.svg'
import search from '../../assets/search.svg'

export default function SearchBar() {
  return (
    <div className="searchBar">
      <input className="input" type="text" placeholder="Buscar games"/>
      <div className="searchRight">
        <img src={divisor} alt="divisor" />
        <button>
          <img src={search} alt="search" />
        </button>
      </div>
    </div>
  );
}
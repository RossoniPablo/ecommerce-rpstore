import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBar = () => {
  return (
    <form className="w-[480px]">
      <div className="relative">
        <input type="search" placeholder="Oque você procura?" className="w-full p-3 rounded-full outline-none bg-zinc-200 text-black" />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 py-1 px-2 bg-primary rounded-full">
          <FontAwesomeIcon icon={faSearch} className='text-white size-3.5' />
        </button>
      </div>
    </form>
  )
}

export default SearchBar
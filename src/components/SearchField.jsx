import React , {useContext, useState} from "react"
import { ImageContext } from "../App";

const SearchField = () => {

    const [serachValue,setSearchValue] = useState('');

    const {fetchData,setSearchImage} = useContext(ImageContext);

    const handleInputChange = (e)=>{
          setSearchValue(e.target.value);
          e.preventDefault();
    }

    const handlebutton = ()=>{
      fetchData(`search/photos?page=1&query=${serachValue}&client_id=9WN2yoVeuTsvYFHqW7msB7CwZ4y-nrri7pc5SaQTMMo`)
      setSearchValue("");
      setSearchImage(serachValue)
    }

    const handleKey = (e)=>{
      if(e.key==='Enter')
      {
        fetchData(`search/photos?page=1&query=${serachValue}&client_id=9WN2yoVeuTsvYFHqW7msB7CwZ4y-nrri7pc5SaQTMMo`)
        setSearchValue("");
        setSearchImage(serachValue);
      }
    }

  return (
    <div className="flex">
      <input 
      className="bg-white-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounde-bl"
      type="search" 
      value={serachValue}
      onChange={handleInputChange}
      onKeyDown={handleKey}
      placeholder="Search Images.."/>
     <button disabled={!serachValue} onClick={handlebutton}  className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      >Search</button>
    </div>
  )
}

export default SearchField

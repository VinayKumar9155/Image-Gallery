import { createContext, useState } from 'react';
import './App.css';
import Images from './components/Images';
import Jumbotron from './components/Jumbotron';
import SearchField from './components/SearchField';
import useAxios from './hooks/useAxios';
import Navbar from './components/Navbar';

//create Context

export const ImageContext = createContext();

function App() {

  const [searchImage,setSearchImage] = useState('');

  const {response,isLoading,error,fetchData} = useAxios(`search/photos?page=1&query=cars&client_id=9WN2yoVeuTsvYFHqW7msB7CwZ4y-nrri7pc5SaQTMMo`)
  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Navbar/>
      <Jumbotron>
        <SearchField/>
      </Jumbotron>
      <Images/>
    </ImageContext.Provider>
  );
}

export default App;

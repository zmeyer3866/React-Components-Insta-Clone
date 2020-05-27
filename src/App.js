/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React,{ useState } from "react";
import "./App.css";
import SearchBar from './components/SearchBar/SearchBarContainer'
import PostsPage from './components/PostsContainer/PostsPage'

// import the PostsPage and SearchBar and add them to the App


const App = () => {
  const [searchString, changeSearchString] = useState('');
  const [toSearch, changeToSearch] = useState('');

  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar searchString={searchString} changeSearchString={changeSearchString} changeToSearch={changeToSearch}/>
      <PostsPage toSearch={toSearch}/>
    </div>
  );
};

export default App;

import './App.css';
import Navbar from './Navbar';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com"
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>
        <p> 10 </p>
        <p> {Math.random()*100}</p>
        <a href={link}>Google</a>
      </div>
    </div>
    
  );
}

export default App;

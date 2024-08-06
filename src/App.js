import logo from './logo.svg';
import './App.css';
import pic from './SPACE QUIZ.png'

function App() {
  return (
    <div className="App">
        <img src={pic}  alt="logo" width={1480} />
      <div className='question-container1'><div>What is STAC?</div><div>The Space Technology Awareness Camp(STAC) is a program designed to promote space technolody among students. The program aims to introduce to the basics of space technology and its applications. the program includes lectures, workshops, and hands-on activities to help students understand the concepts of space technology and its importance in todays world.</div></div>
    <div className='4_containers'></div>
    <div className='question-container1'><div>Why Participate?</div><div>Participating in STAC is a unique opportunity to explore your intrest in space science, showcase your talents, ang gain racognition. It's a platform to connect with like minded individuals and professionals in the field.</div></div>
    <div className="memories">
      <div>Some of our Memories from STAC</div>
      <div></div>
    </div>
    </div>
  );
}

export default App;

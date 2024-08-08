import logo from './logo.svg';
import './App.css';
import pic from './SPACE QUIZ (4).png'
import { FaSpaceAwesome } from "react-icons/fa6";
import { PiShootingStarFill } from "react-icons/pi";
import { FaMoon } from "react-icons/fa6";
import { FaSpaceShuttle } from "react-icons/fa";

function App() {
  const datas=[
    {img:'/Designer (1).png', card_heading:'STAC from XYZ university', description:'Brief overview of the details about the stacnnnnnnnnnnnnnnnnnnnnnnnnn',index: 1},
    {img:'/Designer (1).png', card_heading:'STAC from XYZ university', description:'Brief overview of the details about the stacnnnnnnnnnnnnnnnnnnnnnnnnn', index: 2},
    {img:'/Designer (4).png', card_heading:'STAC from XYZ university', description:'Brief overview of the details about the stacnnnnnnnnnnnnnnnnnnnnnnnnn', index: 3},
    {img:'/logo512.png', card_heading:'STAC from XYZ university', description:'Brief overview of the details about the stacnnnnnnnnnnnnnnnnnnnnnnnnn', index: 4}

  ]
  const datas2=[
    {img:<FaSpaceAwesome className='icon'/>, card_heading:'Event Details', description:'Mode of Conduct: Offline, Online',index: 1},
    {img:<FaSpaceShuttle className='icon'/>, card_heading:'Events', description:'Lift off, Space quiz, Astro Presentation, Cosmomath and many more.', index: 2},
    {img:<PiShootingStarFill className='icon'/>, card_heading:'Prizes and Certificates', description:'Prizes:Attractive prizes for winners of each competition', index: 3},
    {img:<FaMoon className='icon'/>, card_heading:'Special Opportunities', description:'NSSC-2024 Access, Student Ambassadors', index: 4}

  ]
  const Card = ({ img, card_heading, description }) => (
  <div className="card">
    <img src={img} alt={card_heading} width={250}/>
    <h2 className='card_heading'>{card_heading}</h2>
    <p>{description}</p>
  </div>
);
const Card2 = ({ img, card_heading, description }) => (
  <div className="card2">
    {img}
    <h2 className='card_heading'>{card_heading}</h2>
    <p>{description}</p>
  </div>
);
  return (
    <div className="App">
        <div className='pic-div'><img src={pic}  alt="logo" className='main_pic' height={350}/><h1 className='main-pic-heading'>STAC</h1><p className='main-pic-description'>Welcome to STAC-Space technology Awareness Camp!</p></div>
     <div className="container"> <div className='question-container1'><div className='Question'>What is STAC?</div><div>The Space Technology Awareness Camp(STAC) is a program designed to promote space technolody among students. The program aims to introduce to the basics of space technology and its applications. the program includes lectures, workshops, and hands-on activities to help students understand the concepts of space technology and its importance in todays world.</div></div></div>

    <div className='four_containers'>{datas2.map((data, index) => (
      <Card2
        key={index}
        img={data.img}
        card_heading={data.card_heading}
        description={data.description}
      />
    ))}</div>
   <div className="container"> <div className='question-container1'><div className='Question'>Why Participate?</div><div>Participating in STAC is a unique opportunity to explore your intrest in space science, showcase your talents, ang gain racognition. It's a platform to connect with like minded individuals and professionals in the field.</div></div></div>

    <div className="memories">
      <div className='set_of_cards_heading'>Some of our Memories from STAC</div>
      <div className='set_of_cards'>
       {datas.map((data, index) => (
      <Card
        key={index}
        img={data.img}
        card_heading={data.card_heading}
        description={data.description}
      />
    ))}
      </div>
    </div>
    </div>
  );
}

export default App;

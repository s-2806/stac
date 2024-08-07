import logo from './logo.svg';
import './App.css';
import pic from './SPACE QUIZ (2).png'

function App() {
  const datas=[
    {img:'/Designer (1).png', card_heading:'XYZ', description:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',index: 1},
    {img:'/Designer (1).png', card_heading:'XYZ', description:'ABCDEFGHIJKLMNOPQRSTUVWXYZ', index: 2},
    {img:'/Designer (4).png', card_heading:'XYZ', description:'ABCDEFGHIJKLMNOPQRSTUVWXYZ', index: 3},
    {img:'/logo512.png', card_heading:'XYZ', description:'ABCDEFGHIJKLMNOPQRSTUVWXYZ', index: 4}

  ]
  const Card = ({ img, card_heading, description }) => (
  <div className="card">
    <img src={img} alt={card_heading} width={250}/>
    <h2 className='card_heading'>{card_heading}</h2>
    <p>{description}</p>
  </div>
);
  return (
    <div className="App">
        <img src={pic}  alt="logo" className='main_pic'/>
     <div className="container"> <div className='question-container1'><div className='Question'>What is STAC?</div><div>The Space Technology Awareness Camp(STAC) is a program designed to promote space technolody among students. The program aims to introduce to the basics of space technology and its applications. the program includes lectures, workshops, and hands-on activities to help students understand the concepts of space technology and its importance in todays world.</div></div></div>

    <div className='4_containers'></div>
   <div className="container"> <div className='question-container1'><div className='Question'>Why Participate?</div><div>Participating in STAC is a unique opportunity to explore your intrest in space science, showcase your talents, ang gain racognition. It's a platform to connect with like minded individuals and professionals in the field.</div></div></div>

    <div className="memories">
      <div>Some of our Memories from STAC</div>
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

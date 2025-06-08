import './App.css'
import Card from './components/Card'

function App() {
  //card details to be generated
  const cardData =[
    {
      title: "React Development",
      description: "Learn how to build web applications with React and Tailwind CSS.",
      buttonText: "Learn More",
      imageUrl:"https://picsum.photos/id/26/600/300"
    },
    {
      title: "Tailwind CSS Mastery",
      description: "Master the art of rapid UI development with Tailwind CSS.",
      buttonText: "Explore",
      imageUrl:"https://picsum.photos/id/312/600/300"
    }
  ];

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center mb-8'>My Card Application</h1>
      <div className='flex flex-wrap justify-center'>
        {/*Create a new card for each item in cardData*/}
        {cardData.map((card, index)=> (
          <Card key={index} {...card} />
        ))}  
      </div> 

    </div>
  );
};

export default App

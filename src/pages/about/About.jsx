import { useParams, useNavigate } from 'react-router-dom';
import { food } from '../../data/food';
import said from '../../constant/data'



const About = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const hmed = said.said
      console.log(hmed);
  // const movie = food.find(movie => movie.index === parseInt(index));
  

  



  return (
    <div className="min-h-screen   text-white">
      <header className=" p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
       
          <button 
            onClick={() => navigate('/')}
            className=" bg-emerald-500 hover:bg-emerald-700 text-black px-4 py-2 rounded cursor-pointer"
          >
            Back to Home
          </button>
         
          
        </div>
      </header>
      
      <div>

            {
                hmed.map((e, index) => (
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hmed.map((item, index) => (
            <div 
              key={index}
              className="bg-white/10  rounded-xl p-6 shadow-lg hover:shadow-xl  hover:scale-105 transition-all  "
            >
              <div className="pb-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
              </div>
              
              <div className="text-center">
                <h2 className="text-xl font-semibold pb-2">{item.name}</h2>  {item.price && (
                  <p className="text-yellow-300 font-bold text-lg">${item.price}</p>)}
                {item.category && (
                  <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-xs ">
                    {item.category}
                  </span>
                )}
              </div>
              
              <div className="pt-4 flex justify-center">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-black px-4 py-2 rounded-lg transition-colors duration-200"
                >View Details </button>
              </div>
            </div>
          ))}
        </div>
                ))

            }
        </div>
    </div>
  );
};

export default About; 




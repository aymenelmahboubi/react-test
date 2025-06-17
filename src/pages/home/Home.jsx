import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { food } from '../../data/food';
import cake from "../../assets/images/cake.png";
import { FaArrowRight } from "react-icons/fa";



const Home = () => {
  const navigate = useNavigate();
  const [foodList, ] = useState(food);
  

  

  return (
    <>
     <div className="max-w-6xl mx-auto bg-blue-200 rounded-2xl shadow-2xl overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Image  */}
       
         <img src={cake} alt="" />
        
        <div className=" p-8 lg:p-12 flex flex-col justify-center relative">
         
          <div className="flex items-center gap-2 mb-6">
            
            <span className="text-orange-500 font-medium">85% would make this again</span>
          </div>

         
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Mighty Super Cheesecake
          </h1>

         
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Look no further for a creamy and ultra smooth classic cheesecake recipe! 
            No one can deny its simple decadence.
          </p>

         
          <button className="inline-flex w-20 items-center py-2 bg-orange-400 gap-2 text-white px-8  rounded-full text-lg absolute bottom-10.5 right-3.5">
           <FaArrowRight />
          </button>

         
         
        </div>
      </div>

    </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-left">
        Popular Categories
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {food.map((food, index) => (
          <div  key={index}
            className="flex flex-col items-center  hover:scale-105 cursor-pointer transition-transform duration-200"
          >
            <div className={`w-32 h-32 rounded-full overflow-hidden shadow-lg mb-4 transition-shadow duration-200 group-hover:shadow-xl`}>
              <img src={food.image} alt={food.name} onClick={() => navigate(`/about/${food.id}`)}
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              {food.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
    
    
    </>
   



  );
};

export default Home; 
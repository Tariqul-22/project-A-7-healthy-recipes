import PropTypes from 'prop-types';
import { GoClock } from "react-icons/go";
import { AiOutlineFire } from "react-icons/ai";

const Card = ({card,handleWantToCook}) => {
    // console.log(card);
    const {RecipeImage,RecipeID, RecipeName, Description, Ingredients, PreparingTime, Calories}= card
    return (
        <div className='rounded-2xl border border-solid border-[#28282833] p-6 lg:p-5 xl:p-6'>
            <img className='rounded-2xl h-[200px] w-full' src={RecipeImage} alt="Recipe" />
            <h3 className='text-xl font-semibold my-4'>{RecipeName}</h3>
            <p className='opacity-80 mb-4'>{Description}</p>
    
            <div className='py-4 border-y border-solid border-[#28282833]'>
                <h4 className='text-lg font-medium mb-4'>Ingredients : {Ingredients.length}</h4>
                <ul className='ml-3'>
                {
                    Ingredients.map((Ingredient, idx) => <li key={idx} className='text-lg leading-8'>{Ingredient}</li>)
                }
                </ul>
            </div>
            <div className='flex opacity-80 gap-6 items-center my-4 lg:text-xs xl:text-base'>
                <div className='flex gap-4 items-center'>
                    <GoClock />
                    <p>{PreparingTime} minutes</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <AiOutlineFire />
                    <p>{Calories} calories</p>
                </div>
            </div>
            <button onClick={() => handleWantToCook(card, RecipeID)} className='px-6 py-3 bg-green-500 text-lg font-medium rounded-[50px]'>Want To Cook</button>
            
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
  };

export default Card;
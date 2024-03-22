import PropTypes from 'prop-types';

const WantToCookCard = ({wantToCookCard, handleCurrentlyCooking, index}) => {
    const {RecipeID, RecipeName, PreparingTime, Calories} = wantToCookCard
    // console.log(wantToCookCard);
    return (
        <div className="flex items-center justify-between gap-6 lg:gap-4 xl:gap-6 opacity-70 px-2 md:px-6 lg:px-2 xl:px-6 py-3 bg-red-50 mb-2 text-sm md:text-base lg:text-sm xl:text-base">
            <p>{index}</p>
            <p className="max-w-28">{RecipeName}</p>
            <p>{PreparingTime} minutes</p>
            <p>{Calories} calories</p>
            <button onClick={() => handleCurrentlyCooking(wantToCookCard,RecipeID)} className="px-2 h-10 rounded-[50px] bg-green-500 font-medium">Preparing</button>
        </div>
    );
};

WantToCookCard.propTypes = {
    wantToCookCard: PropTypes.object,
    handleCurrentlyCooking: PropTypes.func,
    index: PropTypes.number,
  };

export default WantToCookCard;
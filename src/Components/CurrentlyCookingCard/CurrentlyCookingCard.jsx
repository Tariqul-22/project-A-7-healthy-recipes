import PropTypes from 'prop-types';

const CurrentlyCookingCard = ({currentlyCookingCard, index}) => {
    const {RecipeName, PreparingTime, Calories} = currentlyCookingCard
    return (
        <div className="flex items-center  justify-around gap-6 opacity-70 px-6 py-3 bg-red-50 mb-2">
            <p>{index}</p>
            <p className="max-w-28">{RecipeName}</p>
            <p>{PreparingTime} minutes</p>
            <p>{Calories} calories</p>
        </div>
    );
};

CurrentlyCookingCard.propTypes = {
    currentlyCookingCard: PropTypes.object,
    index: PropTypes.number,
  };

export default CurrentlyCookingCard;
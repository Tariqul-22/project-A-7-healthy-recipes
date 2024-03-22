import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import WantToCookCard from "../WantToCookCard/WantToCookCard";
import CurrentlyCookingCard from "../CurrentlyCookingCard/CurrentlyCookingCard";


const RecipesCardSection = ({notify}) => {
    const [cards, setCards] = useState([])
    const [wantToCookCards, setWantToCookCards] = useState([])
    const [currentlyCookingCards, setCurrentlyCookingCards] = useState([])
    

    const handleWantToCook = (card, givenId) =>{
        
        let checkId = true;
        for(const wantToCookCard of wantToCookCards){
            if (wantToCookCard?.RecipeID === givenId) {
                checkId = false;
            }
        }
        console.log(checkId);
        if (checkId) {
            const newCards = [...wantToCookCards, card];
            setWantToCookCards(newCards);
        }
        else{
            notify();
        }
       
        
    }
    const handleCurrentlyCooking = (card, givenId) =>{
        const newCards = [...currentlyCookingCards, card];
        setCurrentlyCookingCards(newCards);
        // Remove from Want to Cook
        const remainingWantToCookCards = wantToCookCards.filter(wantToCookCard => wantToCookCard.RecipeID !== givenId);
        setWantToCookCards(remainingWantToCookCards);
    }

    useEffect(() => {
        fetch('/cards.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    cards.map(card => <Card 
                        key={card.RecipeID}
                        card={card}
                        handleWantToCook={handleWantToCook}></Card>)
                }
            </div>
            <div className="lg:w-2/5 w-full">
                <div className='rounded-2xl border border-solid border-[#28282833]'>
                    <div>
                        <h3 className="text-2xl font-semibold text-center py-4">Want to cook: {wantToCookCards.length}</h3>
                        <hr />
                        <ul className='flex items-center font-medium py-4'>
                            <li className='pl-10 md:pl-24 lg:pl-6 xl:pl-14'>Name</li>
                            <li className='pl-10 md:pl-28 lg:pl-12 xl:pl-20'>Time</li>
                            <li className='pl-10 md:pl-28 lg:pl-6 xl:pl-14'>Calories</li>
                        </ul>
                        {
                            wantToCookCards.map((wantToCookCard, index) => <WantToCookCard 
                                wantToCookCard ={wantToCookCard}
                                handleCurrentlyCooking={handleCurrentlyCooking}
                                key={index}
                                index={index+1}>
                                </WantToCookCard>)
                        }


                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center py-4">Currently cooking: {currentlyCookingCards.length}</h3>
                            <hr />
                            <ul className='flex items-center font-medium py-4'>
                                <li className='pl-14 md:pl-[9.5rem] lg:pl-14 pr-2'>Name</li>
                                <li className='pl-20 md:pl-36 lg:pl-16 xl:pl-36'>Time</li>
                                <li className='pl-12 md:pl-36 lg:pl-14 xl:pl-20'>Calories</li>
                            </ul>
                            {
                                currentlyCookingCards.map((currentlyCookingCard, idx) => <CurrentlyCookingCard 
                                    currentlyCookingCard={currentlyCookingCard}
                                    key={idx}
                                    index={idx+1}>
                                    </CurrentlyCookingCard>)
                            }
                    </div>
                </div>
            </div>
            
        </div>
    );
};

RecipesCardSection.propTypes = {
    notify: PropTypes.func,
};

export default RecipesCardSection;
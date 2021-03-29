import React from 'react';


const seasonDisplay = {
    summer: {
        text: "It's hot",
        sport: 'biking'
    },
    winter: {
        text: "It's cold",
        sport: 'skiing'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9)
        return lat < 0 ? 'summer' : 'winter';
    else
        return lat > 0 ? 'winter' : 'summer';
};



const ShowSeason = ({lat}) => {

    const getMonth = new Date().getMonth();
    const season = getSeason(lat, getMonth);

    const { text, sport} = seasonDisplay[season];

     return (

        <div>            
            <p>{text}</p>
            <p>{`I love ${sport}`}</p>
            
        </div>

     );

};




export default ShowSeason;

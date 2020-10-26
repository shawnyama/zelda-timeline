import React, { useState, useEffect } from 'react';
import Info from './Info';
import Games from '../data/games.json';
import './styles/Timeline.scss';

function Timeline() {

   const [chosenGame, setChosenGame] = useState({});

   // This function renders systems and symbols or data which can come in multiples
   function renderDesc(descData, dataType) {
      var description = [];

      if (dataType === "systems") {
         for (let i=0; i < descData.length; i++) {
            description.push(
               <div className={descData} key={i}>
                  {descData[i]}
               </div>
            );
         }
      } 
      else if (dataType === "symbols") {
         for (let i=0; i < descData.length; i++) {
            description.push(
               <img 
                  key={i}
                  className={descData[i]} 
                  src={require("../images/symbols/" + descData[i])} 
               >
               </img>
            );
            console.log(descData[i])
         }
      }

      return description;
   }
   
	return (
		<div className="Timeline">
         <div className="timeline-nav">
            {  // Loop through time streams
               ["diverged", "prime", "converged"].map((stream) => 
                  <div id={stream} key={stream}>
                     {  // Loop through games within the time stream
                        Games[stream].map((game) =>
                           <span 
                              key={game.subtitle}
                              onClick={() => setChosenGame({stream: stream, subtitle: game.subtitle})}
                           >
                              <div className="subtitle">
                                 {game.subtitle}
                              </div>
                              <div className="systems">
                                 {renderDesc(game.systems, "systems")}
                              </div>
                              <div className="symbols">
                                 {renderDesc(game.symbols, "symbols")}
                              </div>
                           </span>
                        )
                     }
                  </div>
               )
            }
         </div>
         <Info
            chosenGame={chosenGame}
         />
      </div>
  	);
}

export default Timeline;
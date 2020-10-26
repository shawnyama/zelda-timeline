import React from 'react';
import './styles/Info.scss';

function Info(props) {

    

	return (
		<div className="Info">
			INFO
            {props.chosenGame.subtitle}
   		</div>
  	);
}

export default Info;
import React from 'react';

import Person from './Components/Person';
import Water from './Components/Water';
import HeartRate from './Components/HeartRate';
import Temperature from './Components/Temperature';

class AppElsy extends React.Component{


    constructor(state) {            
        super(state)
        this.state = {
            initialHeart: 120,
            currentTemperature: -10,
            currentSteps: 3000,
            water: 1.5,
            heart : 120,
            temperature : -10,
            steps : 3000,
        };
        this.onStepsChange = this.onStepsChange.bind(this);
        this.onHeartChange = this.onHeartChange.bind(this);
        this.onTemperatureChange = this.onTemperatureChange.bind(this);
    }

    onStepsChange(val){
        this.onCalculateWater(val,"steps");
        this.setState({
            steps: val,
        });
    }
    onHeartChange(val){
        this.onCalculateWater(val,"heart");
        this.setState({
            heart: val,
        });
    }
    onTemperatureChange(val){
        this.onCalculateWater(val,"temperature");
        this.setState({
            temperature: val,
        });
    }
    onCalculateWater(val,swf){
        if( swf === 'steps' && val > 10000 ){
            if( this.state.currentSteps < val ){
                let temp = ( val - 10000 ) * 0.00002; 
                temp =  this.state.water + temp; 
                this.setState({
                    water: temp,
                });       
            }

            this.setState({
                currentSteps: val,
            });
        }

        if( swf === 'heart' && val > 120 ){
            if( this.state.initialHeart < val ){
                let temp = ( val - 120 ) * 0.0008;  
                temp =  this.state.water + temp; 
                this.setState({
                    water: temp,
                });       
            }

            this.setState({
                initialHeart: val,
            });
            
        }

        if( swf === 'temperature' && val > 20 ){
            
            if( this.state.currentTemperature < val ){                
                let temp = ( val - 20 ) * 0.02;  
                temp =  this.state.water + temp;
                this.setState({
                    water: temp,
                });       
            }

            this.setState({
                currentTemperature: val,
            });

            
        }
    }

    render(){

        document.title = "Elsy";

        const MIN_TEMPERATURE = -20;
        const MAX_TEMPERATURE = 40;

        const MIN_HEART = 80;
        const MAX_HEART = 180;

        const MIN_STEPS = 0;
        const MAX_STEPS = 50000;

        return(
            <div className="row mx-0">
                <Water
                    water={this.state.water.toFixed(2)}
                />
                <Person 
                    min={MIN_STEPS} 
                    max={MAX_STEPS} 
                    onChange={this.onStepsChange} 
                    steps={this.state.steps}
                />
                <HeartRate 
                    min={MIN_HEART} 
                    max={MAX_HEART} 
                    onChange={this.onHeartChange} 
                    heart={this.state.heart} 
                />
                <Temperature 
                    min={MIN_TEMPERATURE} 
                    max={MAX_TEMPERATURE} 
                    onChange={this.onTemperatureChange} 
                    temperature={this.state.temperature} 
                />
            </div>
        );
    }

}

export default AppElsy;
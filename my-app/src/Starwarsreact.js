import React from 'react';
import FilmItemRow from './FilmsItem';
/*import ImageRow from './Imagerecongnition'*/;

class Starwars extends React.Component {
    constructor(){
        super()
        /*setting default variables in an object*/
        this.state = {  
            /*setting the characer in variable as false in order to use it in the react IF statement later*/
            characterin : false,
            
            /*setting all the data to be null initially*/
            Name : null,
            height : null,
            homeworld : null,
            films : []
        }
    }
    getnewcharacter(){
        const randomnumber = Math.round(Math.random() * 82)
        
        const url =  `https://swapi.dev/api/people/${randomnumber}/`
        
        /*const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomnumber}.json`*/
        
        /*getting a link and converting into a template in order to use javascript(randomnumber) in it.*/
        
        /*fetching or importing URL*/
        fetch(url)  
            
            /* converting the response to JSON*/
            .then(response => response.json()) 
            
            .then(data => {   
                
                /*printing imported data in console*/
                console.log(data)  
                
                this.setState({
                    
                    /*getting name from the data*/
                    Name : data.name, 
                    height : data.height,
                    homeworld : data.homeworld,
                    films : data.films,
                    image: data.image,
                    characterin : true,
            })
        }
        )
    }
    render(){
        /*mapping the links of each film link in the film list to a key and then using that mapping to print it in the subsequent lines.*/
        const movies =  this.state.films.map((film, i) => {
            return <FilmItemRow key ={i} film = {film}/>
        })
        
        return(
            <div>
                <h1>STARWARS</h1>
                {
                    this.state.characterin &&
                        <div>
                            <h2>{this.state.Name}</h2>
                            <p>Height: {this.state.height}</p>
                            <a href = {this.state.homeworld} >Homeworld</a>
                            <ul>{movies}</ul>    
                        </div>
                        /* We are using href to get into a link by clicking on Homeworld where href - Hypertext reference*/
                }           
                <button type = "button" className='btn' onClick={() => this.getnewcharacter()}>Choose Character</button>
            </div>
        )
    }
}
export default Starwars;

/*<ImageRow  image = {this.state.image} name = {this.state.Name}/>--line 64*/

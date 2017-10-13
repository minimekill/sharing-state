import React from 'react';

const images = ["img/green.png","img/lotus.png"];

export default class MyApp extends React.Component{
    constructor(){
        super()
        this.state = {
            imgs: images[0],
            status: "red"
        }
        this.changePic = this.changePic.bind(this);
        

    }
    changePic(){
        let x = Math.floor(Math.random()*images.length);
        console.log(x + " " + images.length);
        this.setState({imgs: images[x]})
    }
    render(){
        return(

            <div>
                
                  <img src={this.state.imgs}/>
                  <button onClick={this.changePic}>Change Pic</button> 

                
            </div>
            

        )
        
    }
}
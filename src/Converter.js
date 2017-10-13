import React from 'react'

export default class Converter extends React.Component{
    constructor(){
        super()
        this.state ={kilo: 0, pund: 0} 
        this.convert = this.convert.bind(this)
    }
    convert(event){
        const who = event.target.id
        if(who === "kilo"){
            const kilo = event.target.value
            const pund = kilo * 2.20462
            this.setState({kilo: kilo,pund:pund})
        }else {
            const pund = event.target.value
            const kilo = pund / 2.20462
            this.setState({kilo: kilo,pund:pund})
        }
        
    }
    render(){
        return (
            <div>

            <span>Kilo:</span><input type="number" id="kilo" onChange={this.convert} value={this.state.kilo}/><br/>
            <span>Pund:</span><input type="number" id="pund" onChange={this.convert} value={this.state.pund}/>


                </div>




        )
    }
}
//const Input = (props)=>{return <input type="number" id={props.id} onChange={props.onChange} value={props.value}/>}
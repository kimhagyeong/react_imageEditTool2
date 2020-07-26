import React, { Component } from 'react';
import './mainpage.css';



class ContactInfo extends Component {
    
    render(){
        return(
            <div className='square' 
                id={"imgEdit"+this.props.index}
                onMouseDown={() => {if(!this.props.isEnter)this.props.isEntering(this.props.index)}}
                onMouseUp={() => {if(this.props.isEnter)this.props.isLeaving(this.props.index)}}
                style={{
                    width: this.props.w + 'px', 
                    height: this.props.h+'px',
                    background: this.props.color,
                    top: this.props.top+'px', 
                    left: this.props.left+'px' }}>
                
                <div 
                className='menu resize'
                onMouseDown={() => {if(!this.props.isResize)this.props.isEnteringResize(this.props.index)}}
                onMouseUp={() => {if(this.props.isResize)this.props.isLeavingResize(this.props.index)}}>↔</div>
            </div>
        );
    }
}

class Mainpage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sqaures: [
                {top: 20, left: 0,w: 100, h: 50, color: 'red',isEnter:false,isDrag:false, isResize:false},
                {top: 120, left: 0,w: 100, h: 50, color: 'blue',isEnter:false,isDrag:false, isResize:false},
            ],
            dragNow:false,
            divNow:"",
            onResize:false,
        }
        this.moveHandler=this.moveHandler.bind(this);
    };

    componentDidMount(){
        document.addEventListener('mousemove', this.moveHandler);
        document.addEventListener('mousedown', e => this.setState({dragNow:true}));
        document.addEventListener('mouseup', e => this.setState({dragNow:false}))
    }

    isEntering=(index)=>{
        let basket=[
            ...this.state.sqaures
        ]
        basket[index].isEnter=true;
        this.setState({sqaures:basket, dragNow:true,divNow:index})
    }
    isLeaving=(index)=>{
        let basket=[
            ...this.state.sqaures
        ]
        basket[index].isEnter=false;
        this.setState({sqaures:basket, dragNow:false,divNow:""})
    }
    isEnteringResize=(index)=>{
        let basket=[
            ...this.state.sqaures
        ]
        basket[index].isEnter=true;
        this.setState({sqaures:basket, dragNow:true,divNow:index,onResize:true})
    }
    isLeavingResize=(index)=>{
        let basket=[
            ...this.state.sqaures
        ]
        basket[index].isEnter=false;
        this.setState({sqaures:basket, dragNow:false,divNow:"",onResize:false})
        
    }

    moveHandler(e){
        
        if(this.state.dragNow){
            var basket=[
                ...this.state.sqaures
            ]
            if(this.state.onResize){
                var basket=[
                    ...this.state.sqaures
                ]
                if(this.state.divNow!==""){
                    if(basket[this.state.divNow].isEnter){
                        basket[this.state.divNow].w= Math.max(e.clientX - basket[this.state.divNow].left+5,20);
                        basket[this.state.divNow].h= Math.max(e.clientY - basket[this.state.divNow].top+5,20);
                        this.setState({sqaures:basket})
                }}
            }
            else if(this.state.divNow!==""){
                if(basket[this.state.divNow].isEnter){
                    basket[this.state.divNow].top= e.clientY - basket[this.state.divNow].h/2;
                    basket[this.state.divNow].left= e.clientX - basket[this.state.divNow].w/2;
                    this.setState({sqaures:basket})
            }}
        }
      }
    render(){
        return(
            <div id='container'>
                {this.state.sqaures.map((square, index) => 
                {
                    return(
                        <ContactInfo
                        index={index} 
                        color={square.color}
                        top={square.top}
                        left={square.left}
                        w={square.w}
                        h={square.h}
                        isEntering={this.isEntering.bind(this)}
                        isLeaving={this.isLeaving.bind(this)}
                        isEnter={this.state.isEnter}
                        isEnteringResize={this.isEnteringResize.bind(this)}
                        isLeavingResize={this.isLeavingResize.bind(this)}
                        isResize={this.state.onResize}
                        />     
                    );
                })
                }
            </div>
        );
    }
}

export default Mainpage;




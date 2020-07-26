import React, { Component } from 'react';
import './mainpage.css';



class ContactInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            drag : false,
            resize : false,
            square:"",
            resizeDiv:"",
        }
   //     this.moveHandler=this.moveHandler.bind(this);
   //     this.resizeHandler=this.resizeHandler.bind(this);
    }
    
    componentDidMount(){
        document.addEventListener('mousemove', this.moveHandler);
        this.setState({
            square : document.getElementsByClassName('square')[this.props.index],
            resizeDiv : document.createElement('div'),
        })
        // this.state.resizeDiv.className = 'menu resize'


        var __square=this.state.square;
        __square.addEventListener('mousedown', e => this.setState({drag:true}));
        // this.state.square.addEventListener('mousedown', e => this.setState({drag:true}))
        document.addEventListener('mouseup', e => {
            this.setState({drag:false, resize:false})
            // this.state.drag=false
            // this.state.resize = false;
        })

        this.state.resizeDiv.addEventListener('mousedown', this.resizeHandler)
        this.state.square.appendChild(this.state.resizeDiv)
    }
    // componentWillUnmount() {
    //     document.removeEventListener("mousemove", this.moveHandler);
    //     document.removeEventListener("mousemove", this.resizeHandler);
    // }
    moveHandler(e){
        if(this.state.drag){
          this.props.setSquares(prevSquares => prevSquares.map((sq, i) => {
            return i===this.props.index?{...sq, 
              pos: {top: e.clientY - sq.size.h/2, left: e.clientX - sq.size.w/2}}:sq
          }))
        }
        if(this.state.resize){
          this.props.setSquares(prevSquares => {
            return prevSquares.map((sq, index) => {
              return index===this.props.index? {...sq,
                 size: {w: Math.max(e.clientX - sq.pos.left + 5, 20), 
                        h: Math.max(e.clientY - sq.pos.top + 5, 20)}}:sq
            })
          })
        }
      }

    // deleteMe(e){
    //     e.stopPropagation()
    //     this.props.setSquares(prevState => {
    //       return prevState.filter((square, index) => index !== this.props.index)
    //     })
    //   }

    // resizeHandler(e){
    //     e.stopPropagation();
    //     // this.state.resize = true;
    //     this.setState({resize:true})
    // }
    render(){
        return(
            <div className='square' 
                style={{
                    width: this.props.w + 'px', 
                    height: this.props.h+'px',
                    background: this.props.color,
                    top: this.props.top+'px', left: this.props.left+'px' }}>
                <div 
                className='menu close'
                onClick={this.deleteMe}>X</div>
            </div>
        );
    }
}
class Mainpage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sqaures: [
                {top: 20, left: 0,w: 50, h: 50, color: 'red'},
                {top: 120, left: 0,w: 50, h: 50, color: 'blue'},
            ],
        }
    };

    render(){
        return(
            <div id='container'>
                {this.state.sqaures.map((square, index) => 
                {
                    return(
                        <ContactInfo
                        // setSquares={this.state.sqaures} 
                        index={index} 
                        color={square.color}
                        top={square.top}
                        left={square.left}
                        w={square.w}
                        h={square.h}
                        />     
                    );
                })
                }
            </div>
        );
    }
}

export default Mainpage;




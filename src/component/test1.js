import React, { Component } from 'react';
import './mainpage.css';
// import api from '../api';
// import { render } from "react-dom";
import { Rnd } from "react-rnd";

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };

class mainpage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: 200,
            height: 200,
            width2: 200,
            height2: 200,
            x: 10,
            y: 10,
            x2: 500,
            y2: 500,
        }
    }

    componentDidMount=async()=>{
        // var _receive_data = api.getImageInfo(post_id);
        //     var receive_data = await _receive_data;

        //     api.setAuthToken(this.getCookie('access'));
        //     var _tmp = api.getViewCount(post_id).catch(function (error) {
        //         that.loginValidation()
        //     });;
        //     tmp = await _tmp;
            
        //     this.setState({
        //         index:receive_data.data['some'],
        //         mapping:tmp.data,
        //     })
    }

    render(){
        // const list = this.state.imgs.map((elem) => (
        //     this.showDiv(elem.i)
        // ));
        return(
            <div>
                <Rnd
                    style={style}
                    size={{ width: this.state.width, height: this.state.height }}
                    position={{ x: this.state.x, y: this.state.y }}
                    onDragStop={(e, d) => {
                    this.setState({ x: d.x, y: d.y });
                    }}
                    onResizeStop={(e, direction, ref, delta, position) => {
                    this.setState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position
                    });
                    }}
                >
                    Rnd<br/><br/>x:{this.state.x}<br/>y:{this.state.y}<br/>size:{this.state.width}
                </Rnd>
                <Rnd
                    style={style}
                    size={{ width: this.state.width2, height: this.state.height2 }}
                    position={{ x: this.state.x2, y: this.state.y2 }}
                    onDragStop={(e, d) => {
                    this.setState({ x2: d.x, y2: d.y });
                    }}
                    onResizeStop={(e, direction, ref, delta, position) => {
                    this.setState({
                        width2: ref.style.width,
                        height2: ref.style.height,
                        ...position
                    });
                    }}
                >
                Rnd2
                <br/><br/>x:{this.state.x2}<br/>y:{this.state.y2}<br/>size:{this.state.width2}
            </Rnd>
         </div>
        )
    }
}

export default mainpage;


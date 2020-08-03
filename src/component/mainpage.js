import React, { Component } from 'react';
import './mainpage.css';
import ResizableRect from 'react-resizable-rotatable-draggable'
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


class Mainpage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sqaures: [
                {top: 20, left: 0,width: 100, height: 50, color: 'red',title:"0번이었던 네모", shadowX:0,shadowY:0,shadowBlur:0,shadowColor:"#474747",shadowPX:0,rotateX:0,rotateY:0,perspective:0,rotateAngle:0,borderForm:"none",borderColor:"#474747",borderPX:0,borderRadius:0},
                {top: 120, left: 0,width: 100, height: 50, color: 'blue',title:"1번이었던 네모", shadowX:0,shadowY:0,shadowBlur:0,shadowColor:"#474747",shadowPX:0,rotateX:0,rotateY:0,perspective:0,rotateAngle:0,borderForm:"none",borderColor:"#474747",borderPX:0,borderRadius:0},
                {top: 220, left: 0,width: 100, height: 50, color: 'green',title:"2번이었던 네모", shadowX:0,shadowY:0,shadowBlur:0,shadowColor:"#474747",shadowPX:0,rotateX:0,rotateY:0,perspective:0,rotateAngle:0,borderForm:"none",borderColor:"#474747",borderPX:0,borderRadius:0},
                {top: 320, left: 0,width: 100, height: 50, color: 'yellow',title:"3번이었던 네모", shadowX:0,shadowY:0,shadowBlur:0,shadowColor:"#474747",shadowPX:0,rotateX:0,rotateY:0,perspective:0,rotateAngle:0,borderForm:"none",borderColor:"#474747",borderPX:0,borderRadius:0},
            ],
            isSquareClick:false,
            divNow:0,
            val_shadowX:0,
            val_shadowY:0,
            val_shadowBlur:0,
            val_shadowColor:"#474747",
            val_shadowPX:0,
            val_rotateX:0,
            val_rotateY:0,
            val_perspective:0,
            val_borderForm:"none",
            val_borderColor:"#474747",
            val_borderPX:0,
            val_borderRadius:0,
        }
    }
    handlingFocus(index){
        var basket=[
            ...this.state.sqaures
        ]
        this.setState({
            isSquareClick:true,
            divNow:index,
            val_shadowX:basket[index].shadowX,
            val_shadowY:basket[index].shadowY,
            val_shadowBlur:basket[index].shadowBlur,
            val_shadowColor:basket[index].shadowColor,
            val_shadowPX:basket[index].shadowPX,
            val_rotateX:basket[index].rotateX,
            val_rotateY:basket[index].rotateY,
            val_perspective:basket[index].perspective,
            val_borderForm:basket[index].borderForm,
            val_borderColor:basket[index].borderColor,
            val_borderPX:basket[index].borderPX,
            val_borderRadius:basket[index].borderRadius,
        })
    }
    handleResize = (style, isShiftKey, type) => {
        let basket=[
            ...this.state.sqaures
        ]
        let { top, left, width, height } = style
        basket[this.state.divNow].top= Math.round(top);
        basket[this.state.divNow].left= Math.round(left);
        basket[this.state.divNow].width=Math.round(width);
        basket[this.state.divNow].height= Math.round(height);
        
        this.setState({
          sqaures:basket
        })
      }
    
      handleRotate = (rotateAngle) => {
          let basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].rotateAngle= rotateAngle;
        this.setState({
          sqaures:basket
        })
      }
    
      handleDrag = (deltaX, deltaY) => {
        let basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].left= basket[this.state.divNow].left + deltaX
        basket[this.state.divNow].top= basket[this.state.divNow].top + deltaY
        this.setState({
            sqaures:basket
        })
      }

    //   리스트 추가/삭제 레이어 변경
      addSquare(){
        var basket=[
            {top: 100, left: 100,width: 100, height: 50, color: 'red',title:(this.state.sqaures.length)+"번이었던 네모", shadowX:0,shadowY:0,perspective:0,shadowBlur:0,shadowColor:"#474747",shadowPX:0,rotateX:0,rotateY:0,rotateAngle:0,borderForm:"none",borderColor:"#474747",borderPX:"0",borderRadius:"0"},
        ]
        this.setState({sqaures:[...this.state.sqaures, ...basket]})
    }
    onClickLayerDown(index){
        var basket=[
            ...this.state.sqaures
        ]

        var tmp_basket=[]
        tmp_basket=basket[index]
        basket[index]=basket[index+1]
        basket[index+1]=tmp_basket

        this.setState({sqaures:basket, divNow:this.state.divNow+1})
    }
    onClickLayerUp(index){
        var basket=[
            ...this.state.sqaures
        ]

        var tmp_basket=[]
        tmp_basket=basket[index-1]
        basket[index-1]=basket[index]
        basket[index]=tmp_basket

        this.setState({sqaures:basket, divNow:this.state.divNow-1})
    }
    isCloseing=(index)=>{
        this.setState({
            sqaures: this.state.sqaures.filter((elem,i) => i !== index),
          });
    }

    // 여기부터는 slider shadow 핸들러 함수
    handleSliderChangeX = (event, newValue) => {
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].shadowX=newValue;
        this.setState({val_shadowX:newValue,sqaures:basket})
      };

      handleSliderChangeY = (event, newValue) => {
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].shadowY=newValue;
        this.setState({val_shadowY:newValue,sqaures:basket})
      };
      handleSliderChangeBlur = (event, newValue) => {
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].shadowBlur=newValue;
        this.setState({val_shadowBlur:newValue,sqaures:basket})
      };
      handleSliderChangeshadowPX = (event, newValue) => {
        
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].shadowPX=newValue;
        this.setState({val_shadowPX:newValue,sqaures:basket})
      };
      handleSliderChangeRX = (event, newValue) => {
        
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].rotateX=newValue;
        this.setState({val_rotateX:newValue,sqaures:basket})
      };
      handleSliderChangeRY = (event, newValue) => {
       
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].rotateY=newValue;
        this.setState({val_rotateY:newValue,sqaures:basket})
      };

      handleSliderChangePer= (event, newValue) => {
       
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].perspective=newValue;
        this.setState({val_perspective:newValue,sqaures:basket})
      };

      handleSliderChangePX = (event, newValue) => {
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].borderPX=newValue;
        this.setState({val_borderPX:newValue,sqaures:basket})
      };
      handleSliderChangeRadius = (event, newValue) => {
        
        var basket=[
            ...this.state.sqaures
        ]
        basket[this.state.divNow].borderRadius=newValue;
        this.setState({val_borderRadius:newValue,sqaures:basket})
      };



      //input change
    handleInputChangeX = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].shadowX= Number(event.target.value);
            this.setState({
                val_shadowX:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      handleInputChangeY = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].shadowY= Number(event.target.value);
            this.setState({
                val_shadowY:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      handleInputChangeBlur = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].shadowBlur= Number(event.target.value);
            this.setState({
                val_shadowBlur:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      handleInputChangeshadowPX = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].shadowPX= Number(event.target.value);
            this.setState({
                val_shadowPX:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      handleInputChangeColor = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].shadowColor=(event.target.value);
            this.setState({
                val_shadowColor:(event.target.value),
                sqaures:basket
            })
        }
      };  
      handleInputChangeRX = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].rotateX= Number(event.target.value);
            this.setState({
                val_rotateX:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      
      handleInputChangeRY = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].rotateY= Number(event.target.value);
            this.setState({
                val_rotateY:Number(event.target.value),
                sqaures:basket
            })
        }
      };

      handleInputChangeper= (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].perspective= Number(event.target.value);
            this.setState({
                val_perspective:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      handleInputChangePX = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].borderPX= Number(event.target.value);
            this.setState({
                val_borderPX:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      handleInputChangeRadius = (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].borderRadius= Number(event.target.value);
            this.setState({
                val_borderRadius:Number(event.target.value),
                sqaures:basket
            })
        }
      };
      
      handleInputborderColor= (event) => {
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].borderColor= (event.target.value);
            this.setState({
                val_borderColor:(event.target.value),
                sqaures:basket
            })
        }
      };
      //여기까지

      handleRadioChange=(event)=>{
        if(event.target.value !== ''){
            var basket=[
                ...this.state.sqaures
            ]
            basket[this.state.divNow].borderForm= (event.target.value);
            this.setState({
                val_borderForm:(event.target.value),
                sqaures:basket
            })
        }
      }
    render(){
        const squareList = this.state.sqaures.map((elem,i)=>(
            <p key={i} style={i===this.state.divNow?{fontWeight:"bold"}:null}>{elem.title} 
                <button style={(i===0)?{display:"none"}:null} onClick={()=>this.onClickLayerUp(i)}>∧</button>
                <button style={(i===(this.state.sqaures.length-1))?{display:"none"}:null} onClick={()=>this.onClickLayerDown(i)}>∨</button>
                <button onClick={()=>this.isCloseing(i)}>-</button>
            </p>
        ));
        return(
            <div className="App">
                <div id='container'>
                {
                    this.state.sqaures.map((square, index) => {
                        var {width, top, left, height, rotateAngle} = square;
                        return(
                            <div key={index}>
                                <ResizableRect
                                    left={left}
                                    top={top}
                                    width={width}
                                    height={height}
                                    rotateAngle={rotateAngle}
                                    zoomable='n, w, s, e, nw, ne, se, sw'
                                    onRotate={this.handleRotate}
                                    onResize={this.handleResize}
                                    onDrag={this.handleDrag}
                                    onResizeStart={()=>{this.handlingFocus(index)}}
                                    onDragStart={()=>this.handlingFocus(index)}
                                    onResizeEnd={()=>this.setState({isSquareClick:false})}
                                    onDragEnd={()=>this.setState({isSquareClick:false})}
                                    />
                                <div key={index}
                                    style={{boxSizing: "border-box",
                                    backgroundColor:square.color, 
                                    width:width,height:height,position:"absolute",
                                    zIndex:index+1,left:left,top:top,
                                    boxShadow:square.shadowX+"px "+square.shadowY+"px "+square.shadowBlur+"px "+square.shadowPX+"px "+square.shadowColor,
                                    transform: "perspective("+square.perspective+"px) rotateX("+square.rotateX+"deg) rotateY("+square.rotateY+"deg) rotateZ("+rotateAngle+"deg)", 
                                    WebkitTransform:"perspective("+square.perspective+"px) rotateX("+square.rotateX+"deg) rotateY("+square.rotateY+"deg) rotateZ("+rotateAngle+"deg)",
                                    border: square.borderPX+"px "+square.borderColor+" "+square.borderForm,
                                    borderRadius:square.borderRadius+"px"
                                }}>
                                    {/* <img alt="#" style={{width:"100%",height:"100%", objectFit:"contain"}}/> */}
                                </div>
                            </div>
                        )                    
                    })
                }
                </div>
                <div style={{width:"50%",height:"50vh",backgroundColor:"rgba(146, 146, 146, 0.418)",top:"600px",position:"absolute"}}>
                    <button onClick={()=>this.addSquare()}>+</button>
                    <h2>{this.state.divNow}</h2>
                    {squareList}
                </div>
                {!this.state.isSquareClick? 
                <div style={{width:"45%",height:"70vh",left:"50%",backgroundColor:"rgba(146, 146, 146, 0.418)",top:"600px",position:"absolute"}}>
                그림자 X : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={-100}
                    max={100}
                    style={{width:"60%"}}
                    value={typeof this.state.val_shadowX === 'number' ? this.state.val_shadowX : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangeX}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_shadowX}
                    margin="dense"
                    onChange={this.handleInputChangeX}
                    inputProps={{
                        step: 0.5,
                        min: -100,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                그림자 Y : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={-100}
                    max={100}
                    style={{width:"60%"}}
                    value={typeof this.state.val_shadowY === 'number' ? this.state.val_shadowY : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangeY}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_shadowY}
                    margin="dense"
                    onChange={this.handleInputChangeY}
                    inputProps={{
                        step: 0.5,
                        min: -100,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                그림자 Blur : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={0}
                    max={100}
                    style={{width:"60%"}}
                    value={typeof this.state.val_shadowBlur === 'number' ? this.state.val_shadowBlur : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangeBlur}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_shadowBlur}
                    margin="dense"
                    onChange={this.handleInputChangeBlur}
                    inputProps={{
                        step: 0.5,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                그림자 크기 : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={0}
                    max={100}
                    style={{width:"60%"}}
                    value={typeof this.state.val_shadowPX=== 'number' ? this.state.val_shadowPX : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangeshadowPX}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_shadowPX}
                    margin="dense"
                    onChange={this.handleInputChangeshadowPX}
                    inputProps={{
                        step: 0.5,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                그림자 색깔 : &nbsp;&nbsp;
                <input
                    style={{width:"20%"}}
                    value={this.state.val_shadowColor}
                    margin="dense"
                    onChange={this.handleInputChangeColor}
                    type='color'
                />   
                <hr />

                <br />
                X축 기울기 : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={-180}
                    max={180}
                    style={{width:"60%"}}
                    value={typeof this.state.val_rotateX === 'number' ? this.state.val_rotateX : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangeRX}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_rotateX}
                    margin="dense"
                    onChange={this.handleInputChangeRX}
                    inputProps={{
                        step: 0.5,
                        min: -180,
                        max: 180,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                Y축 기울기 : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={-180}
                    max={180}
                    style={{width:"60%"}}
                    value={typeof this.state.val_rotateY === 'number' ? this.state.val_rotateY : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangeRY}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_rotateY}
                    margin="dense"
                    onChange={this.handleInputChangeRY}
                    inputProps={{
                        step: 0.5,
                        min: -180,
                        max: 180,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                사다리꼴 기울기 : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={0}
                    max={360}
                    style={{width:"60%"}}
                    value={typeof this.state.val_perspective === 'number' ? this.state.val_perspective : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangePer}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_perspective}
                    margin="dense"
                    onChange={this.handleInputChangeper}
                    inputProps={{
                        step: 1,
                        min: 0,
                        max: 1000,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <hr />
                <FormControl component="fieldset">
                <FormLabel component="legend">그림 테두리</FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="none" onChange={this.handleRadioChange}>
                    <FormControlLabel
                    value="none"
                    control={<Radio color="primary" />}
                    label="없음"
                    labelPlacement="top"
                    />
                    <FormControlLabel
                    value="solid"
                    control={<Radio color="primary" />}
                    label="선"
                    labelPlacement="top"
                    />
                    <FormControlLabel
                    value="dashed"
                    control={<Radio color="primary" />}
                    label="점선"
                    labelPlacement="top"
                    />
                    <FormControlLabel
                    value="double"
                    control={<Radio color="primary" />}
                    label="두줄"
                    labelPlacement="top"
                    />
                    <FormControlLabel
                    value="ridge"
                    control={<Radio color="primary" />}
                    label="입체"
                    labelPlacement="top"
                    />
                </RadioGroup>
                </FormControl>

                <br />
                테두리 두께 : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={0}
                    max={100}
                    style={{width:"60%"}}
                    value={typeof this.state.val_borderPX === 'number' ? this.state.val_borderPX : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangePX}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_borderPX}
                    margin="dense"
                    onChange={this.handleInputChangePX}
                    inputProps={{
                        step: 0.5,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                테두리 모서리 : &nbsp;&nbsp;
                <Slider
                    defaultValue={0}
                    min={0}
                    max={100}
                    style={{width:"60%"}}
                    value={typeof this.state.val_borderRadius === 'number' ? this.state.val_borderRadius : 0}
                    aria-labelledby="input-slider"
                    onChange={this.handleSliderChangeRadius}
                />
                 <Input
                    style={{width:"10%",marginLeft:"5%"}}
                    value={this.state.val_borderRadius}
                    margin="dense"
                    onChange={this.handleInputChangeRadius}
                    inputProps={{
                        step: 0.5,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
                <br />
                테두리 색깔 : &nbsp;&nbsp;
                <input
                    style={{width:"20%"}}
                    value={this.state.val_borderColor}
                    margin="dense"
                    onChange={this.handleInputborderColor}
                    type='color'
                />  
                </div>:null}
          </div>
        )
    }
}


export default Mainpage;




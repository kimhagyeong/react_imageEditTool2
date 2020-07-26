function Square(props){
    function deleteMe(e){
      e.stopPropagation()
      props.setSquares(prevState => {
        return prevState.filter((square, index) => index !== props.index)
      })
    }
    React.useEffect(() => {
      let drag = false;
      let resize = false;
      const square = document.getElementsByClassName('square')[props.index]
      function moveHandler(e){
        if(drag){
          props.setSquares(prevSquares => prevSquares.map((sq, i) => {
            return i===props.index?{...sq, 
              pos: {top: e.clientY - sq.size.h/2, left: e.clientX - sq.size.w/2}}:sq
          }))
          const newContSize = [e.clientX + props.size.w/2  + 10, e.clientY + props.size.h/2  + 10]
          if(newContSize[0] > props.containerSize[0] || newContSize[1] > props.containerSize[1]){
            props.setContainerSize(prevSize => [
              Math.max(prevSize[0], newContSize[0]), 
              Math.max(prevSize[1], newContSize[1])])
          }
        }
        if(resize){
          props.setSquares(prevSquares => {
            return prevSquares.map((sq, index) => {
              return index===props.index? {...sq,
                 size: {w: Math.max(e.clientX - sq.pos.left + 5, 20), 
                        h: Math.max(e.clientY - sq.pos.top + 5, 20)}}:sq
            })
          })
        }
      }
      document.addEventListener('mousemove', moveHandler)
      square.addEventListener('mousedown', e => drag=true)
      document.addEventListener('mouseup', e => {
        drag=false
        resize = false;
      })
      
      const resizeDiv = document.createElement('div');
      resizeDiv.className = 'menu resize'
      function resizeHandler(e){
        e.stopPropagation();
        resize = true;
      }
      resizeDiv.addEventListener('mousedown', resizeHandler)
      square.appendChild(resizeDiv)
    },[])
    return (
      <div 
        style={{
          width: props.size.w + 'px', 
          height: props.size.h+'px',
          background: props.color,
          top: props.pos.top+'px', left: props.pos.left+'px'
         }}
        className='square'>
      <div 
        className='menu close'
        onClick={deleteMe}>X</div>
      </div>)
  }
  function App(){
    const [squares, setSquares] = React.useState([
      {pos: {top: 20, left: 0}, size: {w: 50, h: 50}, color: 'red'},
      {pos: {top: 20, left: 100}, size: {w: 50, h: 50}, color: 'blue'},
      {pos: {top: 20, left: 200}, size: {w: 50, h: 50}, color: 'green'},
      {pos: {top: 20, left: 300}, size: {w: 50, h: 50}, color: 'orange'}])
    const [containerSize, setContainerSize] = React.useState([400, 100])
    React.useEffect(() => {
      const container = document.getElementById('container')
      container.style.width = containerSize[0] + 'px'
      container.style.height = containerSize[1] + 'px'
    }, [containerSize])
    return <div id='container'>{squares.map((square, index) => <Square 
      setSquares={setSquares} 
      index={index} 
      color={square.color}                                         
      pos={square.pos} 
      size={square.size}
      containerSize={containerSize}
      setContainerSize={setContainerSize}/>)}</div>
  }
  ReactDOM.render(<App/>, document.getElementById('root'))
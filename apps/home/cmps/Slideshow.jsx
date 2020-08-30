export class Slideshow  extends React.Component {
    state={
        slideImages:[
            'assets/img/1.png',
            'assets/img/2.png',
            'assets/img/3.png'
        ]
    }


    render() {
        return (
            <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${this.state.slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${this.state.slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${this.state.slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
            
           
        )
    }
}
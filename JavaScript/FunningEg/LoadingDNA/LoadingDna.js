import React, {Component} from 'react'
import './LoadingDna.less'

class LoadingDna extends Component {
  onHealthWindowResize = () => {
    //this.forceUpdate();
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.onHealthWindowResize);
  }

  componentDidMount() {
    window.addEventListener("resize", this.onHealthWindowResize);
  }

  render() {
    const data = [...new Array(Math.round(document.body.clientWidth / 70))]
    const node_top_bottom = data.map((i, index) => (<div key={index} className="dna_section">
          <div className="node top" style={{animationDelay: -(index * 300) + "ms"}}/>
          <div className="node bottom" style={{animationDelay: -(index * 300) + 'ms'}}/>
        </div>
      )
    )
    return (
      <div className="site-canvas">
        <div className="dna">
          {node_top_bottom}
        </div>
      </div>
    )
  }
}

export default LoadingDna

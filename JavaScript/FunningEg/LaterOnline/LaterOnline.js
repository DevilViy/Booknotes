/*
* 期待页面
* */

import React, {Component} from "react";
import "./LaterOnLine.less";

class LaterOnline extends Component {
  static defaultProps = {
    special_last: '' //一些特殊的判定，判断换不换颜色
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {special_last} = this.props;
    const dot = special_last ? "dot dot-the-last" : "dot";
    return (
      <div>
        <div className="dots-main">
          <div className="dots-loading">
            <h1 className={special_last ? "the-last-color" : ""}>期待呦～</h1>
            <div className="dots">
              <div className={dot}/>
              <div className={dot}/>
              <div className={dot}/>
              <div className={dot}/>
              <div className={dot}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LaterOnline;

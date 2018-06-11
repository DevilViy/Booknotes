/*
* @desc 时间线
* @param {object[]} dataSource 参数dataSource为对象数组，[{title:"标题"，description：'内容'}]
* */

import React, {Component} from 'react'
import './TimeLines.less'

class TimeLines extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {dataSource} = this.props
        return (
            <div className="timelines-div" style={{width: (dataSource.length + 2) * 150}}>
                <ol className="timelines-div-ol">
                    {dataSource.map((i, index) => {
                        return (
                            <li className="timelines-div-ol-li" key={index}>
                                <p className="diplome">{i.title}</p>
                                <span className="point"/>
                                {!i.description ? null : (
                                    <div className="description">
                                        {i.description}
                                    </div>)}
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}

export default TimeLines

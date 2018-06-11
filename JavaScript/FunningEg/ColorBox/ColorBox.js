/*
* 48个方块涂色
* */

import React, {Component} from 'react'
import {Row, Col} from 'antd'

class ColorBox extends Component {
  static defaultProps = {
    colorNumber: 48,
    height: 20,
    width: 200,
    minWidth: 300
  }

  render() {
    const {colorNumber, height, width, minWidth, colorMap} = this.props,
      colorSet = new Set()
    for (let i in colorMap) {
      colorSet.add(i)
    }
    const list = [...new Array(colorNumber)].map((i, index) => {
        return <div key={index}>
          <div style={{position: 'absolute', top: -height}}>{!colorSet.has((index - 1).toString()) ||
          !colorSet.has((index + 1).toString()) ? colorMap[index] : ""}</div>
          <div
            style={{
              background: colorSet.has(index.toString()) ? "#2DB7F5" : '#b7eb8f',
              height: height,
              width: '100%'
            }}
          />
        </div>
      }
    )

    return (
      <div style={{height, width, minWidth,display:'inline-block'}}>
        <Row gutter={2}>
          <Col span={12}>
            <Row gutter={2}>
              {list.slice(0, 24).map((i, index) => <Col key={index} span={1}>{i}</Col>)}
            </Row>
          </Col>
          <Col span={12}>
            <Row gutter={2}>
              {list.slice(24, 48).map((i, index) => <Col key={index} span={1}>{i}</Col>)}
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ColorBox

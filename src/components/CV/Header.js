import React from 'react'
import { Row, Col } from 'antd'

const Header = () => (
  <Row type="flex" justify="space-around" align="middle">
    <Col span={2} className="hide-mobile">
      <a href="/cv.pdf" target="_blank" className="no-print">
        <img src="/logos/pdf.svg" height="50" alt="pdf icon" />
      </a>
    </Col>
    <Col span={8} className="text-center">
      <h2 className="text-2xl">FELIPE AUSTRÍACO</h2>
      <h5>WEB DEVELOPER</h5>
    </Col>
    <Col span={4} className="text-center">
      <a href="/">
        <img
          src="/felipe.jpeg"
          alt="Felipe Austríaco"
          width={80}
          className="rounded-full max-w-3/4"
        />
      </a>
    </Col>
    <Col span={10} className="text-center">
      <div>Brasil, São Paulo, São Paulo</div>
      <div>
        github: <a href="https://github.com/w1redl4in">w1redl4in</a>
      </div>
    </Col>
  </Row>
)

export default Header

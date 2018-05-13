import * as React from "react"

import {Tab, Tabs} from "components/Tabs/index"
import {Col, Row} from "components/grid"

interface IProps {
}

const StyleguideTabs: React.SFC<IProps> = () => {
  return (
    <Tabs>
      <Tab name={"See our growth"}>
        <>
          <Row
            className="text-center"
            hAlign="center"
          >
            <Col
              small={12}
              medium={10}
              large={8}
            >
              <h2 className="section-title">We're growing to provide to the markets best financial services</h2>
            </Col>
          </Row>
          <Row>
            <Col small={12}>
              <p>Wykres</p>
            </Col>
          </Row>
        </>
      </Tab>
      <Tab name={"Markets map"}>
        <>
          <Row
            className="text-center"
            hAlign="center"
          >
            <Col
              small={12}
              medium={10}
              large={8}
            >
              <h2 className="section-title">We’re growing to provide better access to credit globally</h2>
            </Col>
          </Row>
          <Row>
            <Col small={12}>
              <p>Mapa</p>
              <div className="feature-card round">
                <h3 className="icon icon-russia-building">Russia</h3>
                <ul className="defs">
                  <li><strong>Loans granted:</strong> 712,380</li>
                  <li><strong>Total amount:</strong> 77,631,663 €</li>
                  <li><strong>Office:</strong> Moscow</li>
                  <li><strong>Products:</strong> Microloans</li>
                </ul>
                <a className="local-hire-link icon icon-case">Check Russia openings</a>
              </div>
            </Col>
          </Row>
        </>
      </Tab>
    </Tabs>
  )
}

export {StyleguideTabs}

import React from 'react'
import { Card, Row, Col, Divider } from 'antd'
import data from './data.json'

const Education = () => (
  <>
    <h3 className="text-center mt-1 mb-0">Education</h3>
    <Card className="education">
      {data.education.map((institution, i) => (
        <Row
          type="flex"
          justify="space-between"
          key={institution.place}
          className="text-lg"
        >
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
            {institution.period}
          </Divider>
          <Col span={10} style={{ textAlign: 'center' }}>
            <h3>{institution.place}</h3>
          </Col>
          <Col span={14} style={{ textAlign: 'center' }}>
            <h3>{institution.degree}</h3>
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Education

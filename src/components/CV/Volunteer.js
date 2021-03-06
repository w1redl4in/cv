import React from 'react'
import { Card, Col, Divider, Row } from 'antd'
import { Column } from './styles'
import data from './data.json'

const Volunteer = () => (
  <>
    <h3 className="text-center mt-1 mb-0">Volunteer</h3>
    <br />
    <Card>
      {data.volunteer.map((activity, i) => (
        <Row
          type="flex"
          justify="space-around"
          align="middle"
          key={activity.place}
          className="text-lg"
        >
          <Divider orientation="center" className={i === 0 && 'mt-0'}>
            {activity.period}
          </Divider>
          <Column span={6}>
            <img
              src={`/companies/${activity.logo}`}
              alt={activity.place}
              className="max-w-3/4 inline"
            />
          </Column>
          <Col span={17}>
            <h3>{activity.description}</h3>
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Volunteer

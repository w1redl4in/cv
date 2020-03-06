import React from 'react'
import { Card, Row, Col, Divider, Typography } from 'antd'
import { Column } from './styles'
import data from './data.json'

const Education = () => (
  <>
    <h3 className="text-center mt-1 mb-0">Education</h3>
    <br />
    <Card className="education">
      {data.education.map((institution, i) => (
        <Row
          type="flex"
          justify="space-around"
          key={institution.place}
          className="text-lg"
        >
          <Divider orientation="center" className={i === 0 && 'mt-0'}>
            {institution.period}
          </Divider>
          <Column span={10} style={{ textAlign: 'center' }}>
            <h3>{institution.place}</h3>
          </Column>
          <Column span={13} style={{ textAlign: 'center' }}>
            <Typography.Text>{institution.degree}</Typography.Text>
          </Column>
        </Row>
      ))}
    </Card>
  </>
)

export default Education

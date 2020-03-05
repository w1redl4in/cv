import React from 'react'
import { Card, Row, Col } from 'antd'
import data from './data.json'

const Experiments = () => (
  <>
    <h3 className="text-center mt-10 mb-5">Experiments</h3>
    <Card className="experiments">
      <Row type="flex" justify="space-around">
        {data.experiments.map((experiment, i) => (
          <Col span={8} className="pl-5" key={i}>
            <h4 className="mb-0 text-lg">
              <a href={experiment.link}>
                <span className="inline-block mr-3">{experiment.name}</span>
                <img
                  src={`/logos/${experiment.locationIcon}`}
                  alt=""
                  height="20"
                  className="m-2 ml-0"
                />
              </a>
              {experiment.sourceCode && (
                <a href={experiment.sourceCode}>
                  <img
                    src="/logos/github.svg"
                    alt="Source code"
                    height="20"
                    className=""
                  />
                </a>
              )}
            </h4>
            <div className="text-lg">{experiment.description}</div>
            <p className="pt-2 mb-1">
              {experiment.builtWith.map(techName => (
                <a
                  href={data.tech[techName].website}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={techName}
                  className="p-1"
                >
                  <img
                    src={`/tech/${data.tech[techName].logo}`}
                    alt={data.tech[techName].name}
                    title={data.tech[techName].name}
                    height={20}
                  />
                </a>
              ))}
            </p>
          </Col>
        ))}
      </Row>
    </Card>
  </>
)

export default Experiments

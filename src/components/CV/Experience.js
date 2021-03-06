import React from 'react'
import { Card, Row, Divider, Tag } from 'antd'
import { Column } from './styles'
import data from './data.json'

const Experience = () => (
  <>
    <h3 className="text-center mt-10 mb-5">Work experience</h3>
    <Card className="work-experience">
      {data.workExperience.map((item, i) => (
        <Row type="flex" justify="space-around" align="middle" key={item.company.name}>
          <Divider orientation="center" className={i === 0 && 'mt-0'}>
            {item.company.period}
          </Divider>
          <Column span={4} style={{ display: 'flex', flexDirection: 'column' }}>
            {item.company.logo ? (
              <div>
                <h4
                  style={{ textAlign: 'left', width: '110px', marginLeft: '-8px' }}
                  className="mb-5"
                >
                  Company
                </h4>
                <img
                  src={`/companies/${item.company.logo}`}
                  alt={item.company.name}
                  style={{ width: '50px', minHeight: '50px' }}
                />
              </div>
            ) : (
              <h2 className="text-2xl">{item.company.name}</h2>
            )}
          </Column>
          <Column xs={24} sm={24} md={20} lg={20} xl={20}>
            {item.projects.map((project, i) => (
              <Row
                type="flex"
                justify="space-around"
                align="middle"
                key={project.name}
                className="mb-5"
              >
                {project.logo && (
                  <Column span={5} style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ textAlign: 'center', width: '110px' }} className="mb-5">
                      Project
                    </h4>
                    <img
                      src={`/companies/${project.logo}`}
                      alt={project.name}
                      style={{ width: '110px', minHeight: '10px' }}
                    />
                  </Column>
                )}
                <Column span={project.logo ? 19 : 24} className="text-lg">
                  <h3>{project.role}</h3>
                  <p>{project.description}</p>
                  {project.achievements && (
                    <ul>
                      {project.achievements.map(achievement => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                  <div
                    className="py-1"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexWrap: 'wrap'
                    }}
                  >
                    {project.stack.me &&
                      project.stack.me.map(tech => (
                        <Tag
                          color="#ab71fc"
                          style={{ margin: '5px' }}
                          key={tech}
                          className="mb-1 text-base"
                        >
                          {tech}
                        </Tag>
                      ))}
                    {project.stack.all &&
                      project.stack.all.map(tech => (
                        <Tag
                          color="#c7a5f7"
                          key={tech}
                          style={{ margin: '5px' }}
                          className="mb-1 text-base text-black"
                        >
                          {tech}
                        </Tag>
                      ))}
                  </div>
                </Column>
                {item.projects.length - 1 > i && <Divider />}
              </Row>
            ))}
          </Column>
        </Row>
      ))}
    </Card>
  </>
)

export default Experience

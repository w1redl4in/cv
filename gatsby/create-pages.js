const path = require('path')
const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  createPage({
    path: '/',
    component: path.resolve('./src/templates/index-template.js')
  })
}
module.exports = createPages

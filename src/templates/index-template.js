import React from 'react'
import Layout from '../components/Layout'
import CV from '../components/CV'
import '../assets/css/init.css'

const IndexTemplate = () => {
  return (
    <Layout title="Felipe Austríaco | CV" className="bg-black">
      <CV />
    </Layout>
  )
}

export default IndexTemplate

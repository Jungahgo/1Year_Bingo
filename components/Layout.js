import React from 'react'
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
        <Head>
            <title>1 YEAR</title>
        </Head>
        <Header/>
        <Footer/>
        <h1>Layout</h1>
        <table border="3">
            <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>
            <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>
                        <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>

        </table>
        
    </div>
  )
}

export default Layout
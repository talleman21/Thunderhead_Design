import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import GraphicsAndAnimation from './pages/GraphicsAndAnimation'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import ThreeDPrinting from './pages/ThreeDPrinting'
import WebDesign from './pages/WebDesign'
import { Container,Paper } from '@mui/material'

type Props = {}

export default function Main({}: Props) {
  return (
    <Container maxWidth='xl' sx={{mt:2}}>
      <Paper 
        elevation={3}
        sx={{padding:5}}
      >
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Web-Design' element={<WebDesign />}/>
          <Route path='/3D-Graphics-And-Animation' element={<GraphicsAndAnimation />}/>
          <Route path='/3D-Printing' element={<ThreeDPrinting />}/>
          <Route path='/Gallery' element={<Gallery />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Routes>
      </Paper>
    </Container>
  )
}
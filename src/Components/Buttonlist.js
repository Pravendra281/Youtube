import React from 'react'
import Buttoncard from './Buttoncard'

const Buttonlist = () => {
  return (
    <div className="flex">
      <Buttoncard name="All"/>
      <Buttoncard name="Live"/>
      <Buttoncard name="Games" />
      <Buttoncard name="Cricket"/>
      <Buttoncard name="Movies "/>
      <Buttoncard name="News"/>
      <Buttoncard name="Weather"/>
      <Buttoncard name="latest"/>
      <Buttoncard name="Hollywood"/>
    </div>
  )
}

export default Buttonlist

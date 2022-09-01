import React from 'react'
import Jubmo from '../Components/Home_componnts/jumbo'
import About from '../Components/Home_componnts/About';
import Featured_Food from './Home_componnts/Featured Food';
import Pizza from '../Components/Home_componnts/Pizza'
import TodayMenu from './Home_componnts/TodayMenu';
import ReserverTable from '../Components/Home_componnts/ReserveTable'

export default function Home() {
  return (
    <div>
      <Jubmo />
      <About />
      <Featured_Food />
      <Pizza />
      < TodayMenu />
      <ReserverTable />
    </div>
  )
}

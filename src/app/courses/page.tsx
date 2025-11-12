import React from 'react'
import Gifts from '../_Components/(Courses)/gifts'
import MainHeader from '../_Components/(Courses)/mainheader'
import Reviews from '../_Components/(Courses)/reviews'
import Instapay from '../_Components/(Courses)/instapay'
import Advantage from '../_Components/(Courses)/advantage'
import Refernce from '../_Components/(Courses)/refernce'
import Payment from '../_Components/(Courses)/payment'
import OfferForCourse from '../_Components/(Courses)/offerForCourse'
import { Asks } from '../_Components/(Courses)/Asks'
import Videos from '../_Components/(Courses)/videos'


export default function Courses() {
  return (<>
  <div  dir='rtl'>
<MainHeader/>
<Advantage/>
<Refernce/>
<Gifts/>
<Videos/>
<OfferForCourse/>
<Reviews/>
<Asks/>
<Instapay/>
<Payment/>


</div>
</>
  )
}

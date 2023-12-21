import React from 'react'
import Cards from './Components/Cards'

function App() {
  let data = [
    {
    plan:"FREE",
    price:0,
    user:"Single User",
    isUser: true,
    storage:"5 GB",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    isPublicprojects:true,
    access:"Community Access",
    isAccess:true,
    privateProjects:"Unlimited Private Projects",
    isPrivateprojects:false,
    phoneSupport: "Dedicated Phone Support",
    isPhonesupport:false,
    subdomain:"Free Subdomain",
    isSubdomain:false,
    reports:"Monthly Status Reports",
    isReports:false
  },

  {
    plan:"PLUS",
    price:9,
    user:"5 Users",
    isUser: true,
    storage:"50GB",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    isPublicprojects:true,
    access:"Community Access",
    isAccess:true,
    privateProjects:"Unlimited Private Projects",
    isPrivateprojects:true,
    phoneSupport: "Dedicated Phone Support",
    isPhonesupport:true,
    subdomain:"Free Subdomain",
    isSubdomain:true,
    reports:"Monthly Status Reports",
    isReports:false
},

 {
    plan:"PRO",
    price:49,
    user:"Unlimited Users",
    isUser: true,
    storage:"50GB",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    isPublicprojects:true,
    access:"Community Access",
    isAccess:true,
    privateProjects:"Unlimited Private Projects",
    isPrivateprojects:true,
    phoneSupport: "Dedicated Phone Support",
    isPhonesupport:true,
    subdomain:"Free Subdomain",
    isSubdomain:true,
    reports:"Monthly Status Reports",
    isReports:true
 }
]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
     data.map((e,i)=>{
      return <Cards data={e} key={i}/>
     })
    }
      
    </div>
  </div>
</section>
  </>
    
  
}

export default App
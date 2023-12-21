import React from 'react'

function Cards({data}) {
  return <>
  <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">${data.price}<span>/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.isUser?"":"text-muted"} ><span className="fa-li"><i className={data.isUser?"fas fa-check":"fas fa-times"}></i></span>{data.plan!=="FREE"?<b>{data.user}</b>:data.user}</li>
              <li className={data.isStorage?"":"text-muted"}><span className="fa-li"><i className={data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
              <li className={data.isPublicprojects?"":"text-muted"}><span className="fa-li"><i className={data.isUser?"fas fa-check":"fas fa-times"}></i></span>{data.publicProjects}</li>
              <li className={data.isAccess?"":"text-muted"}><span className="fa-li"><i className={data.isPublicprojects?"fas fa-check":"fas fa-times"}></i></span>{data.access}</li>
              <li className={data.isPrivateprojects?"":"text-muted"}><span className="fa-li"><i className={data.isPrivateprojects?"fas fa-check":"fas fa-times"}></i></span>{data.privateProjects}</li>
              <li className={data.isPhonesupport?"":"text-muted"}><span className="fa-li"><i className={data.isPhonesupport?"fas fa-check":"fas fa-times"}></i></span>{data.phoneSupport}</li>
              <li className={data.isSubdomain?"":"text-muted"}><span className="fa-li"><i className={data.isSubdomain?"fas fa-check":"fas fa-times"}></i></span>{data.plan=="PRO"?<><b>Unlimited</b> {data.subdomain}</>:data.subdomain}
              </li>
              <li className={data.isReports?"":"text-muted"}><span className="fa-li"><i className={data.isRepots?"fas fa-check":"fas fa-times"}></i></span>{data.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      
  </>
}

export default Cards
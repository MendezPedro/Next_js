import React, {useEffect} from 'react'
import Link from "next/link";

export default function Navbar() {

  //esta funcion ayuda al error de bootstrap
  useEffect(()=>{
    if(typeof document !== undefined){
      require('bootstrap/dist/js/bootstrap')
    }
  },[])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="navbar-brand" href="#">Navbar</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link href="/">
          <div className="nav-link active" aria-current="page"> Home</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blog">
          <div className="nav-link" href="/blog">blog</div>
          </Link>
        </li>

      </ul>

    </div>
  </div>
</nav>
    </div>
  )
}
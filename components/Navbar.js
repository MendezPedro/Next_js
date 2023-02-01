import React, {useEffect} from 'react'
import Link from "next/link";
import Image from 'next/image'
import logo from "../public/images/logo-ne.png"

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
        <Image
            src={logo}
            alt="Picture of the author"
            width={160}
            height={70}
            className="p-2"
          />
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
                <div className="nav-link active">blog</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/markdown">
                <div className="nav-link active">markdown</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/data_science">
                <div className="nav-link active">data_science</div>
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  </div>
  )
}
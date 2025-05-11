import React from 'react'
function Navbar() {
 return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light shadow">
        <div className="container">
            <a href="#" className="navbar-brand">React ile bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#kapanabilenmenu" aria-expanded="true">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse show" id="kapanabilenmenu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Anasayfa</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Hakkımzda</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">İletişim</a>
                    </li>
                </ul>    
            </div>
        </div>
    </nav>    
  )
}
export default Navbar;

export function CategoryBar() {
  return (
     <nav className="navbar bg-warning">

    </nav>
  )
}

/*const Navbar=() =>{
    return (
        <div>

        </div>
    )
}
export default Navbar;*/
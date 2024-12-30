import React from 'react'
import { Link } from 'react-router-dom';
const navbar = () => {
  return (
    <>
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-3 shadow-none border-radius-xl" id="navbarBlur"
            data-scroll="true">
            <div className="container-fluid py-1 px-3">
                {/* <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Pages</a></li>
                        <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
                    </ol>
                </nav> */}
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                        <div className="input-group input-group-outline">
                        <label className="form-label">Type here...</label>
                        <input type="text" className="form-control"/>
                        </div>
                    </div>
                <ul className="navbar-nav d-flex align-items-center  justify-content-end">
                    <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                        <button
                            className="nav-link text-body p-0 bg-transparent border-0"
                            id="iconNavbarSidenav"
                            onClick={() => {
                            const sidenav = document.getElementById('sidenav-main');
                            if (sidenav) {
                                sidenav.classList.toggle('d-none');
                            }
                            }}
                        >
                            <div class="sidenav-toggler-inner">
                                <i class="sidenav-toggler-line"></i>
                                <i class="sidenav-toggler-line"></i>
                                <i class="sidenav-toggler-line"></i>
                            </div>
                        </button>
                    </li>

                    {/* <li className="nav-item px-3 d-flex align-items-center">
                        <a href="javascript:;" className="nav-link text-body p-0">
                            <i className="material-symbols-rounded fixed-plugin-button-nav">settings</i>
                        </a>
                    </li> */}
                    <li className="nav-item d-flex align-items-center">
                    <Link to="/login" className="nav-link text-body font-weight-bold px-0">
                        <i className="material-symbols-rounded">account_circle</i>
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default navbar

import React from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function main() {
  return (
    <>
        <Sidebar/>
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar/>
            <div className="container-fluid py-2">
                <div className="row">
                    <div className="col-12">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Main table</h6>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="text-end m-4">
                                <Link className="btn btn-secondary" to="/add-main">Add Play List</Link>
                            </div>
                         <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">No</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Decription</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Total Assets</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>
                                        <th className="text-secondary opacity-7"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p className="text-xs font-weight-bold mb-0">1</p>
                                            </td>
                                            <td>
                                                <p className="text-xs font-weight-bold mb-0">Manager</p>
                                            </td>
                                            <td>
                                                <p className="text-xs text-secondary mb-0">Organization</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <p className="text-xs text-secondary mb-0">4</p>
                                            </td>
                                            <td className="align-middle">
                                                <Link to="/edit-main" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                    <i class="fa-solid fa-pen-to-square fs-5 me-3"></i>
                                                </Link>
                                                <Link to="" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                    <i class="fa-solid fa-trash fs-5 me-3 text-danger"></i>                                                
                                                </Link>
                                                <Link to="" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                    <i class="fa-solid fa-laptop-file  fs-5 me-3 text-success"></i>                                               
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </>
  )
}

export default main

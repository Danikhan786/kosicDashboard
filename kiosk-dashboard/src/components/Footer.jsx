import React from 'react';

function Footer() {
  return (
    <>
      <div className="fixed-plugin">
        <button className="fixed-plugin-button text-dark position-fixed px-3 py-2">
          <i className="material-symbols-rounded py-2">settings</i>
        </button>
        <div className="card shadow-lg">
          <div className="card-header pb-0 pt-3">
            <div className="float-end mt-4">
              <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i className="material-symbols-rounded">clear</i>
              </button>
            </div>
          </div>
          <hr className="horizontal dark my-1" />
          <div className="card-body pt-sm-3 pt-0">
            <div>
              <h6 className="mb-0">Sidebar Colors</h6>
            </div>
            {/* Replace <a> with a div or span */}
            <div className="switch-trigger background-color">
              <div className="badge-colors my-2 text-start">
                <span
                  className="badge filter bg-gradient-primary"
                  data-color="primary"
                  onClick={() => console.log('Primary color clicked')}
                ></span>
                <span
                  className="badge filter bg-gradient-dark active"
                  data-color="dark"
                  onClick={() => console.log('Dark color clicked')}
                ></span>
                <span
                  className="badge filter bg-gradient-info"
                  data-color="info"
                  onClick={() => console.log('Info color clicked')}
                ></span>
                <span
                  className="badge filter bg-gradient-success"
                  data-color="success"
                  onClick={() => console.log('Success color clicked')}
                ></span>
                <span
                  className="badge filter bg-gradient-warning"
                  data-color="warning"
                  onClick={() => console.log('Warning color clicked')}
                ></span>
                <span
                  className="badge filter bg-gradient-danger"
                  data-color="danger"
                  onClick={() => console.log('Danger color clicked')}
                ></span>
              </div>
            </div>
            <div className="mt-3">
              <h6 className="mb-0">Sidenav Type</h6>
              <p className="text-sm">Choose between different sidenav types.</p>
            </div>
            <div className="d-flex">
              <button
                className="btn bg-gradient-dark px-3 mb-2"
                data-classname="bg-gradient-dark"
                onClick={() => console.log('Dark sidenav type selected')}
              >
                Dark
              </button>
              <button
                className="btn bg-gradient-dark px-3 mb-2 ms-2"
                data-classname="bg-transparent"
                onClick={() => console.log('Transparent sidenav type selected')}
              >
                Transparent
              </button>
              <button
                className="btn bg-gradient-dark px-3 mb-2 active ms-2"
                data-classname="bg-white"
                onClick={() => console.log('White sidenav type selected')}
              >
                White
              </button>
            </div>
            <p className="text-sm d-xl-none d-block mt-2">
              You can change the sidenav type just on desktop view.
            </p>
            <div className="mt-3 d-flex">
              <h6 className="mb-0">Navbar Fixed</h6>
              <div className="form-check form-switch ps-0 ms-auto my-auto">
                <input
                  className="form-check-input mt-1 ms-auto"
                  type="checkbox"
                  id="navbarFixed"
                  onClick={() => console.log('Navbar fixed toggled')}
                />
              </div>
            </div>
            <hr className="horizontal dark my-3" />
            <div className="mt-2 d-flex">
              <h6 className="mb-0">Light / Dark</h6>
              <div className="form-check form-switch ps-0 ms-auto my-auto">
                <input
                  className="form-check-input mt-1 ms-auto"
                  type="checkbox"
                  id="dark-version"
                  onClick={() => console.log('Dark mode toggled')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

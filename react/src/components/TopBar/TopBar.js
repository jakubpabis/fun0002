import React, { useEffect } from 'react';
import CashLeft from './CashLeft';
import Invested from './Invested';
import Notifications from './Notifications';

const TopBar = () => {
  useEffect(() =>  {
    window.$('[data-toggle="tooltip"]').tooltip();
  })
        return (
          <nav className="navbar navbar-expand-md navbar-light d-none d-md-flex" id="topbar">
          <div className="container-fluid justify-content-end">

          <div className="mr-5 d-none d-md-flex">
            <CashLeft />
          </div>

          <div className="mr-5 d-none d-md-block">
            <Invested />

          </div>


          {/* <!-- User --> */}
          <div className="navbar-user">

            {/* <!-- Dropdown --> */}
              <Notifications />
            {/* <!-- Dropdown --> */}
            <div className="dropdown ml-4 d-xl-none d-lg-none d-md-none">

              {/* <!-- Toggle --> */}
              <a href="true" className="avatar avatar-sm avatar-online dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="./assets/img/avatars/profiles/avatar-2.jpg" alt="..." className="avatar-img rounded-circle" />
              </a>

              {/* <!-- Menu --> */}
              <div className="dropdown-menu dropdown-menu-right">
                <a href="profile-posts.html" className="dropdown-item">Profile</a>
                <a href="settings.html" className="dropdown-item">Settings</a>
                <hr className="dropdown-divider" />
                <a href="sign-in.html" className="dropdown-item">Logout</a>
              </div>

            </div>

          </div>

        </div>
      </nav>

        )

}

export default TopBar;
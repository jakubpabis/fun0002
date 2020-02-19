import React from 'react';

const Modals = () => {
    return (
        <div>
        {/* <!-- Modal: Members --> */}
    <div className="modal fade" id="modalMembers" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-card card" data-toggle="lists" data-options='{"valueNames": ["name"]}'>
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">

                  {/* <!-- Title --> */}
                  <h4 className="card-header-title" id="exampleModalCenterTitle">
                    Add a member
                  </h4>

                </div>
                <div className="col-auto">

                  {/* <!-- Close --> */}
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>

                </div>
              </div> {/* <!-- / .row --> */}
            </div>
            <div className="card-header">

              {/* <!-- Form --> */}
              <form>
                <div className="input-group input-group-flush input-group-merge">
                  <input type="search" className="form-control form-control-prepended search" placeholder="Search" />
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <span className="fe fe-search"></span>
                    </div>
                  </div>
                </div>
              </form>

            </div>
            <div className="card-body">

              {/* <!-- List group --> */}
              <ul className="list-group list-group-flush list my-n3">
                <li className="list-group-item px-0">

                  <div className="row align-items-center">
                    <div className="col-auto">

                      {/* <!-- Avatar --> */}
                      <a href="profile-posts.html" className="avatar">
                        <img src="./assets/img/avatars/profiles/avatar-5.jpg" alt="..." className="avatar-img rounded-circle" />
                      </a>

                    </div>
                    <div className="col ml-n2">

                      {/* <!-- Title --> */}
                      <h4 className="mb-1 name">
                        <a href="profile-posts.html">Miyah Myles</a>
                      </h4>

                      {/* <!-- Time --> */}
                      <p className="small mb-0">
                        <span className="text-success">●</span> Online
                      </p>

                    </div>
                    <div className="col-auto">

                      {/* <!-- Button --> */}
                      <a href="#!" className="btn btn-sm btn-white">
                        Add
                      </a>

                    </div>
                  </div> {/* <!-- / .row --> */}

                </li>
                <li className="list-group-item px-0">

                  <div className="row align-items-center">
                    <div className="col-auto">

                      {/* <!-- Avatar --> */}
                      <a href="profile-posts.html" className="avatar">
                        <img src="./assets/img/avatars/profiles/avatar-6.jpg" alt="..." className="avatar-img rounded-circle" />
                      </a>

                    </div>
                    <div className="col ml-n2">

                      {/* <!-- Title --> */}
                      <h4 className="mb-1 name">
                        <a href="profile-posts.html">Ryu Duke</a>
                      </h4>

                      {/* <!-- Time --> */}
                      <p className="small mb-0">
                        <span className="text-success">●</span> Online
                      </p>

                    </div>
                    <div className="col-auto">

                      {/* <!-- Button --> */}
                      <a href="#!" className="btn btn-sm btn-white">
                        Add
                      </a>

                    </div>
                  </div> {/* <!-- / .row --> */}

                </li>
                <li className="list-group-item px-0">

                  <div className="row align-items-center">
                    <div className="col-auto">

                      {/* <!-- Avatar --> */}
                      <a href="profile-posts.html" className="avatar">
                        <img src="./assets/img/avatars/profiles/avatar-7.jpg" alt="..." className="avatar-img rounded-circle" />
                      </a>

                    </div>
                    <div className="col ml-n2">

                      {/* <!-- Title --> */}
                      <h4 className="mb-1 name">
                        <a href="profile-posts.html">Glen Rouse</a>
                      </h4>

                      {/* <!-- Time --> */}
                      <p className="small mb-0">
                        <span className="text-warning">●</span> Busy
                      </p>

                    </div>
                    <div className="col-auto">

                      {/* <!-- Button --> */}
                      <a href="#!" className="btn btn-sm btn-white">
                        Add
                      </a>

                    </div>
                  </div> {/* <!-- / .row --> */}

                </li>
                <li className="list-group-item px-0">

                  <div className="row align-items-center">
                    <div className="col-auto">

                      {/* <!-- Avatar --> */}
                      <a href="profile-posts.html" className="avatar">
                        <img src="./assets/img/avatars/profiles/avatar-8.jpg" alt="..." className="avatar-img rounded-circle" />
                      </a>

                    </div>
                    <div className="col ml-n2">

                      {/* <!-- Title --> */}
                      <h4 className="mb-1 name">
                        <a href="profile-posts.html">Grace Gross</a>
                      </h4>

                      {/* <!-- Time --> */}
                      <p className="small mb-0">
                        <span className="text-danger">●</span> Offline
                      </p>

                    </div>
                    <div className="col-auto">

                      {/* <!-- Button --> */}
                      <a href="#!" className="btn btn-sm btn-white">
                        Add
                      </a>

                    </div>
                  </div> {/* <!-- / .row --> */}

                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Modal: Search --> */}
    <div className="modal fade" id="sidebarModalSearch" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-vertical" role="document">
        <div className="modal-content">
          <div className="modal-body" data-toggle="lists" data-options='{"valueNames": ["name"]}'>

            {/* <!-- Form --> */}
            <form className="mb-4">
              <div className="input-group input-group-merge input-group-rounded">
                <input type="search" className="form-control form-control-prepended search" placeholder="Search" />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="fe fe-search"></span>
                  </div>
                </div>
              </div>
            </form>

            {/* <!-- List group --> */}
            <div className="my-n3">
              <div className="list-group list-group-flush list">
                <a href="team-overview.html" className="list-group-item px-0">
                  <div className="row align-items-center">
                    <div className="col-auto">

                      {/* <!-- Avatar --> */}
                      <div className="avatar">
                        <img src="./assets/img/avatars/teams/team-logo-1.jpg" alt="..." className="avatar-img rounded" />
                      </div>

                    </div>
                    <div className="col ml-n2">

                      {/* <!-- Title --> */}
                      <h4 className="text-body mb-1 name">
                        Airbnb
                      </h4>

                      {/* <!-- Time --> */}
                      <p className="small text-muted mb-0">
                        <span className="fe fe-clock"></span> <time dateTime="2018-05-24">Updated 2hr ago</time>
                      </p>

                    </div>
                  </div> {/* <!-- / .row --> */}
                </a>
                <a href="team-overview.html" className="list-group-item px-0">
                  <div className="row align-items-center">
                    <div className="col-auto">

                      {/* <!-- Avatar --> */}
                      <div className="avatar">
                        <img src="./assets/img/avatars/teams/team-logo-2.jpg" alt="..." className="avatar-img rounded" />
                      </div>

                    </div>
                    <div className="col ml-n2">

                      {/* <!-- Title --> */}
                      <h4 className="text-body mb-1 name">
                        Medium Corporation
                      </h4>

                      {/* <!-- Time --> */}
                      <p className="small text-muted mb-0">
                        <span className="fe fe-clock"></span> <time dateTime="2018-05-24">Updated 2hr ago</time>
                      </p>

                    </div>
                  </div> {/* <!-- / .row --> */}
                </a>
                <a href="project-overview.html" className="list-group-item px-0">

                  <div className="row align-items-center">
                    <div className="col-auto">

                      {/* <!-- Avatar --> */}
                      <div className="avatar avatar-4by3">
                        <img src="./assets/img/avatars/projects/project-1.jpg" alt="..." className="avatar-img rounded" />
                      </div>

                    </div>
                    <div className="col ml-n2">

                      {/* <!-- Title --> */}
                      <h4 className="text-body mb-1 name">
                        Homepage Redesign
                      </h4>

                      {/* <!-- Time --> */}
                      <p className="small text-muted mb-0">
                        <span className="fe fe-clock"></span> <time dateTime="2018-05-24">Updated 4hr ago</time>
                      </p>

                    </div>
                  </div> {/* <!-- / .row --> */}

                </a>
                <a href="project-overview.html" className="list-group-item px-0">

                  <div className="row align-items-center">
                    <div className="col-auto">

                      {/* <!-- Avatar --> */}
                      <div className="avatar avatar-4by3">
                        <img src="./assets/img/avatars/projects/project-2.jpg" alt="..." className="avatar-img rounded" />
                      </div>

                    </div>
                    <div className="col ml-n2">

                      {/* <!-- Title --> */}
                      <h4 className="text-body mb-1 name">
                        Travels & Time
                      </h4>

                      {/* <!-- Time --> */}
                      <p className="small text-muted mb-0">
                        <span className="fe fe-clock"></span> <time dateTime="2018-05-24">Updated 4hr ago</time>
                      </p>

                    </div>
                  </div> {/* <!-- / .row --> */}

                </a>
                <a href="project-overview.html" className="list-group-item px-0">

                  <div className="row align-items-center">
                    <div className="col-auto">

                      {/* <!-- Avatar --> */}
                      <div className="avatar avatar-4by3">
                        <img src="./assets/img/avatars/projects/project-3.jpg" alt="..." className="avatar-img rounded" />
                      </div>

                    </div>
                    <div className="col ml-n2">

                      {/* <!-- Title --> */}
                      <h4 className="text-body mb-1 name">
                        Safari Exploration
                      </h4>

                      {/* <!-- Time --> */}
                      <p className="small text-muted mb-0">
                        <span className="fe fe-clock"></span> <time dateTime="2018-05-24">Updated 4hr ago</time>
                      </p>

                    </div>
                  </div> {/* <!-- / .row --> */}

                </a>
                <a href="profile-posts.html" className="list-group-item px-0">

                  <div className="row align-items-center">
                    <div className="col-auto">

                      {/* <!-- Avatar --> */}
                      <div className="avatar">
                        <img src="./assets/img/avatars/profiles/avatar-1.jpg" alt="..." className="avatar-img rounded-circle" />
                      </div>

                    </div>
                    <div className="col ml-n2">

                      {/* <!-- Title --> */}
                      <h4 className="text-body mb-1 name">
                        Dianna Smiley
                      </h4>

                      {/* <!-- Status --> */}
                      <p className="text-body small mb-0">
                        <span className="text-success">●</span> Online
                      </p>

                    </div>
                  </div> {/* <!-- / .row --> */}

                </a>
                <a href="profile-posts.html" className="list-group-item px-0">

                  <div className="row align-items-center">
                    <div className="col-auto">

                      {/* <!-- Avatar --> */}
                      <div className="avatar">
                        <img src="./assets/img/avatars/profiles/avatar-2.jpg" alt="..." className="avatar-img rounded-circle" />
                      </div>

                    </div>
                    <div className="col ml-n2">

                      {/* <!-- Title --> */}
                      <h4 className="text-body mb-1 name">
                        Ab Hadley
                      </h4>

                      {/* <!-- Status --> */}
                      <p className="text-body small mb-0">
                        <span className="text-danger">●</span> Offline
                      </p>

                    </div>
                  </div> {/* <!-- / .row --> */}

                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* <!-- Modal: Activity --> */}
    <div className="modal fade" id="sidebarModalActivity" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-vertical" role="document">
        <div className="modal-content">
          <div className="modal-header">

            {/* <!-- Title --> */}
            <h4 className="modal-title">
              Notifications
            </h4>

            {/* <!-- Link --> */}
            <a href="#!">
              Mark all as read
            </a>

          </div>
          <div className="modal-body">

            {/* <!-- List group --> */}
            <div className="list-group list-group-flush my-n3">
              <a className="list-group-item text-reset px-0" href="#!">

                <div className="row">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm">
                      <img src="./assets/img/avatars/profiles/avatar-1.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Content --> */}
                    <div className="small">
                      <strong>Dianna Smiley</strong> shared your post with Ab Hadley, Adolfo Hess, and 3 others.
                    </div>

                    {/* <!-- Time --> */}
                    <small className="text-muted">
                      2m ago
                    </small>

                  </div>
                </div> {/* <!-- / .row --> */}

              </a>
              <a className="list-group-item text-reset px-0" href="#!">

                <div className="row">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm">
                      <img src="./assets/img/avatars/profiles/avatar-2.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Content --> */}
                    <div className="small">
                      <strong>Ab Hadley</strong> reacted to your post with a 😍
                    </div>

                    {/* <!-- Time --> */}
                    <small className="text-muted">
                      2m ago
                    </small>

                  </div>
                </div> {/* <!-- / .row --> */}

              </a>
              <a className="list-group-item text-reset px-0" href="#!">

                <div className="row">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm">
                      <img src="./assets/img/avatars/profiles/avatar-3.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Content --> */}
                    <div className="small">
                      <strong>Adolfo Hess</strong> commented <blockquote className="mb-0">“I don’t think this really makes sense to do without approval from Johnathan since he’s the one...” </blockquote>
                    </div>

                    {/* <!-- Time --> */}
                    <small className="text-muted">
                      2m ago
                    </small>

                  </div>
                </div> {/* <!-- / .row --> */}

              </a>
              <a className="list-group-item text-reset px-0" href="#!">

                <div className="row">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm">
                      <img src="./assets/img/avatars/profiles/avatar-4.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Content --> */}
                    <div className="small">
                      <strong>Daniela Dewitt</strong> subscribed to you.
                    </div>

                    {/* <!-- Time --> */}
                    <small className="text-muted">
                      2m ago
                    </small>

                  </div>
                </div> {/* <!-- / .row --> */}

              </a>
              <a className="list-group-item text-reset px-0" href="#!">

                <div className="row">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm">
                      <img src="./assets/img/avatars/profiles/avatar-5.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Content --> */}
                    <div className="small">
                      <strong>Miyah Myles</strong> shared your post with Ryu Duke, Glen Rouse, and 3 others.
                    </div>

                    {/* <!-- Time --> */}
                    <small className="text-muted">
                      2m ago
                    </small>

                  </div>
                </div> {/* <!-- / .row --> */}

              </a>
              <a className="list-group-item text-reset px-0" href="#!">

                <div className="row">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm">
                      <img src="./assets/img/avatars/profiles/avatar-6.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Content --> */}
                    <div className="small">
                      <strong>Ryu Duke</strong> reacted to your post with a 😍
                    </div>

                    {/* <!-- Time --> */}
                    <small className="text-muted">
                      2m ago
                    </small>

                  </div>
                </div> {/* <!-- / .row --> */}

              </a>
              <a className="list-group-item text-reset px-0" href="#!">

                <div className="row">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm">
                      <img src="./assets/img/avatars/profiles/avatar-7.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Content --> */}
                    <div className="small">
                      <strong>Glen Rouse</strong> commented <blockquote className="mb-0">“I don’t think this really makes sense to do without approval from Johnathan since he’s the one...” </blockquote>
                    </div>

                    {/* <!-- Time --> */}
                    <small className="text-muted">
                      2m ago
                    </small>

                  </div>
                </div> {/* <!-- / .row --> */}

              </a>
              <a className="list-group-item text-reset px-0" href="#!">

                <div className="row">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm">
                      <img src="./assets/img/avatars/profiles/avatar-8.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Content --> */}
                    <div className="small">
                      <strong>Grace Gross</strong> subscribed to you.
                    </div>

                    {/* <!-- Time --> */}
                    <small className="text-muted">
                      2m ago
                    </small>

                  </div>
                </div> {/* <!-- / .row --> */}

              </a>
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* <!-- Modal: Kanban task --> */}
    <div className="modal fade" id="modalKanbanTask" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-lighter">
          <div className="modal-body">

            {/* <!-- Header --> */}
            <div className="row">
              <div className="col">

                {/* <!-- Prettitle --> */}
                <h6 className="text-uppercase text-muted mb-3">
                  <a href="#!" className="text-reset">How to Use Kanban</a>
                </h6>

                {/* <!-- Title --> */}
                <h2 className="mb-2">
                  Update Dashkit to include new components!
                </h2>

                {/* <!-- Subtitle --> */}
                <p className="text-muted mb-0">
                  This is a description of this task. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nisi, ultrices ut pharetra eget.
                </p>

              </div>
              <div className="col-auto">

                {/* <!-- Close --> */}
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">
                    &times;
                  </span>
                </button>

              </div>
            </div> {/* <!-- / .row --> */}

            {/* <!-- Divider --> */}
            <hr className="my-4" />

            {/* <!-- Buttons --> */}
            <div className="mb-4">
              <div className="row">
                <div className="col">

                  <a href="#!" className="btn btn-sm btn-white">
                  <span role="img" aria-label="smile">😬</span> 1
                  </a>
                  <a href="#!" className="btn btn-sm btn-white">
                  <span role="img" aria-label="thumbsup">👍</span>  2
                  </a>
                  <a href="#!" className="btn btn-sm btn-white">
                    Add Reaction
                  </a>

                </div>
                <div className="col-auto mr-n3">

                  <div className="avatar-group d-none d-sm-flex">
                    <a href="profile-posts.html" className="avatar avatar-xs" data-toggle="tooltip" title="Ab Hadley">
                      <img src="assets/img/avatars/profiles/avatar-2.jpg" alt="..." className="avatar-img rounded-circle" />
                    </a>
                    <a href="profile-posts.html" className="avatar avatar-xs" data-toggle="tooltip" title="Adolfo Hess">
                      <img src="assets/img/avatars/profiles/avatar-3.jpg" alt="..." className="avatar-img rounded-circle" />
                    </a>
                    <a href="profile-posts.html" className="avatar avatar-xs" data-toggle="tooltip" title="Daniela Dewitt">
                      <img src="assets/img/avatars/profiles/avatar-4.jpg" alt="..." className="avatar-img rounded-circle" />
                    </a>
                    <a href="profile-posts.html" className="avatar avatar-xs" data-toggle="tooltip" title="Miyah Myles">
                      <img src="assets/img/avatars/profiles/avatar-5.jpg" alt="..." className="avatar-img rounded-circle" />
                    </a>
                  </div>

                </div>
                <div className="col-auto">

                  <a href="#!" className="btn btn-sm btn-white">
                    Share
                  </a>

                </div>
              </div> {/* <!-- / .row --> */}
            </div>

            {/* <!-- Card --> */}
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">

                    {/* <!-- Title --> */}
                    <h4 className="card-header-title">
                      Files
                    </h4>

                  </div>
                  <div className="col-auto">

                    {/* <!-- Button --> */}
                    <a href="#!" className="btn btn-sm btn-white">
                      Add files
                    </a>

                  </div>
                </div> {/* <!-- / .row --> */}
              </div>
              <div className="card-body">

                <div className="row align-items-center">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <a href="project-overview.html" className="avatar">
                      <img src="assets/img/files/file-1.jpg" alt="..." className="avatar-img rounded" />
                    </a>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Title --> */}
                    <h4 className="card-title mb-1">
                      <a href="project-overview.html">Launchday logo</a>
                    </h4>

                    {/* <!-- Time --> */}
                    <p className="card-text small text-muted">
                      1.5mb PNG Dave
                    </p>

                  </div>
                  <div className="col-auto">

                    {/* <!-- Dropdown --> */}
                    <div className="dropdown">
                      <a href="true" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fe fe-more-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#!" className="dropdown-item">
                          Action
                        </a>
                        <a href="#!" className="dropdown-item">
                          Another action
                        </a>
                        <a href="#!" className="dropdown-item">
                          Something else here
                        </a>
                      </div>
                    </div>

                  </div>
                </div> {/* <!-- / .row --> */}

                {/* <!-- Divider --> */}
                <hr />

                <div className="row align-items-center">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <a href="project-overview.html" className="avatar">
                      <img src="assets/img/files/file-1.jpg" alt="..." className="avatar-img rounded" />
                    </a>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Title --> */}
                    <h4 className="card-title mb-1">
                      <a href="project-overview.html">Launchday logo</a>
                    </h4>

                    {/* <!-- Time --> */}
                    <p className="card-text small text-muted">
                      1.5mb PNG Dave
                    </p>

                  </div>
                  <div className="col-auto">

                    {/* <!-- Dropdown --> */}
                    <div className="dropdown">
                      <a href="true" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fe fe-more-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#!" className="dropdown-item">
                          Action
                        </a>
                        <a href="#!" className="dropdown-item">
                          Another action
                        </a>
                        <a href="#!" className="dropdown-item">
                          Something else here
                        </a>
                      </div>
                    </div>

                  </div>
                </div> {/* <!-- / .row --> */}

              </div>
            </div>

            {/* <!-- Card --> */}
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src="assets/img/avatars/profiles/avatar-1.jpg" alt="..." />
                    </div>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Form --> */}
                    <form className="mt-1">
                      <textarea className="form-control form-control-flush form-control" data-toggle="autosize" rows="1" placeholder="Leave a comment"></textarea>
                    </form>

                  </div>
                  <div className="col-auto align-self-end">

                    {/* <!-- Icons --> */}
                    <div className="text-muted mb-2">
                      <a href="#!" className="text-reset mr-3">
                        <i className="fe fe-camera"></i>
                      </a>
                      <a href="#!" className="text-reset mr-3">
                        <i className="fe fe-paperclip"></i>
                      </a>
                      <a href="#!" className="text-reset">
                        <i className="fe fe-mic"></i>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
              <div className="card-body">

                {/* <!-- Comments --> */}
                <div className="comment mb-3">
                  <div className="row">
                    <div className="col-auto">

                      {/* <!-- Avatar --> */}
                      <a className="avatar avatar-sm" href="profile-posts.html">
                        <img src="assets/img/avatars/profiles/avatar-2.jpg" alt="..." className="avatar-img rounded-circle" />
                      </a>

                    </div>
                    <div className="col ml-n2">

                      {/* <!-- Body --> */}
                      <div className="comment-body">

                        <div className="row">
                          <div className="col">

                            {/* <!-- Title --> */}
                            <h5 className="comment-title">
                              Ab Hadley
                            </h5>

                          </div>
                          <div className="col-auto">

                            {/* <!-- Time --> */}
                            <time className="comment-time">
                              11:12
                            </time>

                          </div>
                        </div> {/* <!-- / .row --> */}

                        {/* <!-- Text --> */}
                        <p className="comment-text">
                          Looking good Dianna! I like the image grid on the left, but it feels like a lot to process and doesn't really <em>show</em> me what the product does? I think using a short looping video or something similar demo'ing the product might be better?
                        </p>

                      </div>

                    </div>
                  </div> {/* <!-- / .row --> */}
                </div>
                <div className="comment">
                  <div className="row">
                    <div className="col-auto">

                      {/* <!-- Avatar --> */}
                      <a className="avatar avatar-sm" href="profile-posts.html">
                        <img src="assets/img/avatars/profiles/avatar-3.jpg" alt="..." className="avatar-img rounded-circle" />
                      </a>

                    </div>
                    <div className="col ml-n2">

                      {/* <!-- Body --> */}
                      <div className="comment-body">

                        <div className="row">
                          <div className="col">

                            {/* <!-- Title --> */}
                            <h5 className="comment-title">
                              Adolfo Hess
                            </h5>

                          </div>
                          <div className="col-auto">

                            {/* <!-- Time --> */}
                            <time className="comment-time">
                              11:12
                            </time>

                          </div>
                        </div> {/* <!-- / .row --> */}

                        {/* <!-- Text --> */}
                        <p className="comment-text">
                          Any chance you're going to link the grid up to a public gallery of sites built with Launchday?
                        </p>

                      </div>

                    </div>
                  </div> {/* <!-- / .row --> */}
                </div>

              </div>
            </div>

            {/* <!-- Card --> */}
            <div className="card mb-0">
              <div className="card-header">

                {/* <!-- Title --> */}
                <h4 className="card-header-title">
                  Activity
                </h4>

              </div>
              <div className="card-body">

                <div className="row align-items-center">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src="assets/img/avatars/profiles/avatar-1.jpg" alt="..." />
                    </div>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Heading --> */}
                    <p className="small mb-0">
                      <strong>Johathan Goldstein</strong> reacted to you post with 😊
                    </p>

                    {/* <!-- Time --> */}
                    <small className="text-muted">
                      2m ago
                    </small>

                  </div>
                </div> {/* <!-- / .row --> */}

                {/* <!-- Divider --> */}
                <hr />

                <div className="row align-items-center">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src="assets/img/avatars/profiles/avatar-1.jpg" alt="..." />
                    </div>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Heading --> */}
                    <p className="small mb-0">
                      <strong>Johnathan Goldstein</strong> uploaded the files “Launchday Logo” and “Revisiting the Past”.
                    </p>

                    {/* <!-- Time --> */}
                    <small className="text-muted">
                      2m ago
                    </small>

                  </div>
                </div> {/* <!-- / .row --> */}

                {/* <!-- Divider --> */}
                <hr />

                <div className="row align-items-center">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src="assets/img/avatars/profiles/avatar-1.jpg" alt="..." />
                    </div>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Heading --> */}
                    <p className="small mb-0">
                      <strong>Kimmy Schmitt</strong> shared this task with Donnie Calvin, Casey Fyfe, Jimmy Smits, and 16 others.
                    </p>

                    {/* <!-- Time --> */}
                    <small className="text-muted">
                      2m ago
                    </small>

                  </div>
                </div> {/* <!-- / .row --> */}

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* <!-- Modal: Kanban task --> */}
    <div className="modal fade" id="modalKanbanTaskEmpty" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-lighter">
          <div className="modal-body">

            {/* <!-- Header --> */}
            <div className="row">
              <div className="col">

                {/* <!-- Prettitle --> */}
                <h6 className="text-uppercase text-muted mb-3">
                  <a href="#!" className="text-reset">How to Use Kanban</a>
                </h6>

                {/* <!-- Title --> */}
                <h2 className="mb-2">
                  Update Dashkit to include new components!
                </h2>

                {/* <!-- Subtitle --> */}
                <textarea className="form-control form-control-flush form-control-auto" data-toggle="autosize" rows="1" placeholder="Add a description..."></textarea>

              </div>
              <div className="col-auto">

                {/* <!-- Close --> */}
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">
                    &times;
                  </span>
                </button>

              </div>
            </div> {/* <!-- / .row --> */}

            {/* <!-- Divider --> */}
            <hr className="my-4" />

            {/* <!-- Buttons --> */}
            <div className="mb-4">
              <div className="row">
                <div className="col">

                  <a href="#!" className="btn btn-sm btn-white">
                    Add Reaction
                  </a>

                </div>
                <div className="col-auto">

                  <a href="#!" className="btn btn-sm btn-white">
                    Share
                  </a>

                </div>
              </div> {/* <!-- / .row --> */}
            </div>

            {/* <!-- Card --> */}
            <div className="card">
              <div className="card-body">
                <div className="dropzone dropzone-multiple" data-toggle="dropzone" data-options='{"url": "https://"}'>

                  <div className="fallback">
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="customFileUpload" multiple />
                      <label className="custom-file-label" htmlFor="customFileUpload">Choose file</label>
                    </div>
                  </div>

                  <ul className="dz-preview dz-preview-multiple list-group list-group-lg list-group-flush">
                    <li className="list-group-item px-0">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <div className="avatar">
                            <img className="avatar-img rounded" src="..." alt="..." data-dz-thumbnail />
                          </div>
                        </div>
                        <div className="col ml-n3">
                          <h4 className="mb-1" data-dz-name>...</h4>
                          <p className="small text-muted mb-0" data-dz-size></p>
                        </div>
                        <div className="col-auto">

                          <div className="dropdown">
                            <a href="true" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fe fe-more-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="true" className="dropdown-item" data-dz-remove>
                                Remove
                              </a>
                            </div>
                          </div>

                        </div>
                      </div>
                    </li>
                  </ul>

                </div>
              </div>
            </div>

            {/* <!-- Card --> */}
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-auto">

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src="assets/img/avatars/profiles/avatar-1.jpg" alt="..." />
                    </div>

                  </div>
                  <div className="col ml-n2">

                    {/* <!-- Form --> */}
                    <form className="mt-1">
                      <textarea className="form-control form-control-flush" data-toggle="autosize" rows="1" placeholder="Leave a comment"></textarea>
                    </form>

                  </div>
                  <div className="col-auto align-self-end">

                    {/* <!-- Icons --> */}
                    <div className="text-muted mb-2">
                      <a href="#!" className="text-reset mr-3">
                        <i className="fe fe-camera"></i>
                      </a>
                      <a href="#!" className="text-reset mr-3">
                        <i className="fe fe-paperclip"></i>
                      </a>
                      <a href="#!" className="text-reset">
                        <i className="fe fe-mic"></i>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
    )
}
export default  Modals;
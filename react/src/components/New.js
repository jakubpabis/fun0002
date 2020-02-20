import React from 'react';
import useScript from '../hooks/useScript';

const New = () => {

  useScript(`${process.env.PUBLIC_URL}/assets/js/theme.min.js`);
  // useEffect(() =>  {
  // window.$('[data-toggle="tooltip"]').tooltip();
  // })

  return (
      <div>
    <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">

            {/* <!-- Header --> */}
            <div className="header mt-md-5">
              <div className="header-body">
                <div className="row align-items-center">
                  <div className="col">

                    {/* <!-- Pretitle --> */}
                    <h6 className="header-pretitle">
                      New project
                    </h6>

                    {/* <!-- Title --> */}
                    <h1 className="header-title">
                      Create a new project
                    </h1>

                  </div>
                </div> {/* <!-- / .row --> */}
              </div>
            </div>

            {/* <!-- Form --> */}
            <form className="mb-4">

              {/* <!-- Project name --> */}
              <div className="form-group">
                <label>
                  Project name
                </label>
                <input type="text" className="form-control" />
              </div>

              {/* <!-- Project description --> */}
              <div className="form-group">
                <label className="mb-1">
                  Project description
                </label>
                <small className="form-text text-muted">
                  This is how others will learn about the project, so make it good!
                </small>
                <div data-toggle="quill"></div>
              </div>

              {/* <!-- Project tags --> */}
              <div className="form-group">
                <label>
                  Project tags
                </label>
                <select className="form-control" data-toggle="select" multiple>
                  <option>CSS</option>
                  <option>HTML</option>
                  <option>JavaScript</option>
                  <option>Bootstrap</option>
                </select>
              </div>

              <div className="row">
                <div className="col-12 col-md-6">

                  {/* <!-- Start date --> */}
                  <div className="form-group">
                    <label>
                      Start date
                    </label>
                    <input type="text" className="form-control" data-toggle="flatpickr" />
                  </div>

                </div>
                <div className="col-12 col-md-6">

                  {/* <!-- Start date --> */}
                  <div className="form-group">
                    <label>
                      End date
                    </label>
                    <input type="text" className="form-control" data-toggle="flatpickr" />
                  </div>

                </div>
              </div> {/* <!-- / .row --> */}

              {/* <!-- Divider --> */}
              <hr className="mt-4 mb-5" />

              {/* <!-- Project cover --> */}
              <div className="form-group">
                <label className="mb-1">
                  Project cover
                </label>
                <small className="form-text text-muted">
                  Please use an image no larger than 1200px * 600px.
                </small>
                <div className="dropzone dropzone-single mb-3" data-toggle="dropzone" data-options='{"url": "https://", "maxFiles": 1, "acceptedFiles": "image/*"}'>

                  <div className="fallback">
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="projectCoverUploads" />
                      <label className="custom-file-label" for="projectCoverUploads">Choose file</label>
                    </div>
                  </div>

                  <div className="dz-preview dz-preview-single">
                    <div className="dz-preview-cover">
                      <img className="dz-preview-img" src="..." alt="..." data-dz-thumbnail />
                    </div>
                  </div>

                </div>
              </div>

              {/* <!-- Divider --> */}
              <hr className="mt-5 mb-5" />

              {/* <!-- Starting files --> */}
              <div className="form-group" />
                <label className="mb-1">
                  Starting files
                </label>
                <small className="form-text text-muted">
                  Upload any files you want to start the projust with.
                </small>
                <div className="card">
                  <div className="card-body">
                    <div className="dropzone dropzone-multiple" data-toggle="dropzone" data-options='{"url": "https://"}'>

                      <div className="fallback">
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" id="customFileUpload" multiple />
                          <label className="custom-file-label" for="customFileUpload">Choose file</label>
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
              </form>

              {/* <!-- Divider --> */}
              <hr className="mt-5 mb-5" />

              <div className="row">
                <div className="col-12 col-md-6">

                  {/* <!-- Private project --> */}
                  <div className="form-group">
                    <label className="mb-1">
                      Private project
                    </label>
                    <small className="form-text text-muted">
                      If you are available for hire outside of the current situation, you can encourage others to hire you.
                    </small>
                    <div className="custom-control custom-switch">
                      <input type="checkbox" className="custom-control-input" id="switchOne" />
                      <label className="custom-control-label" for="switchOne"></label>
                    </div>
                  </div>

                </div>
                <div className="col-12 col-md-6">

                  {/* <!-- Warning --> */}
                  <div className="card bg-light border">
                    <div className="card-body">

                      <h4 className="mb-2">
                        <i className="fe fe-alert-triangle"></i> Warning
                      </h4>

                      <p className="small text-muted mb-0">
                        Once a project is made private, you cannot revert it to a public project.
                      </p>

                    </div>
                  </div>

                </div>
              </div> {/* <!-- / .row --> */}

              {/* <!-- Divider --> */}
              <hr className="mt-5 mb-5" />

              {/* <!-- Buttons --> */}
              <a href="true" className="btn btn-block btn-primary">
                Create project
              </a>
              <a href="true" className="btn btn-block btn-link text-muted">
                Cancel this project
              </a>



        {/* <!-- / .row --> */}
      </div>

    </div></div></div>

  )
}

export default New;
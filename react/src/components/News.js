import React from 'react';
import useScript from '../hooks/useScript';

const News = () => {

  useScript(`${process.env.PUBLIC_URL}/assets/js/theme.min.js`);
  // useEffect(() =>  {
  // window.$('[data-toggle="tooltip"]').tooltip();
  // })

  return (
    <div>
    <div className="container-fluid">

    <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a className="nav-item nav-link pb-3 active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><strong>Wszystko</strong></a>
            <a className="nav-item nav-link pb-3" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">AutoRobin</a>
            <a className="nav-item nav-link pb-3" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Footroll</a>
        </div>
    </nav>
    <div className="tab-content pt-4" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

            <div className="row justify-content-center">
                <div className="col-xl-6">

                    <div className="card">
                        <div className="card-body">

                            {/* <!-- Header --> */}
                            <div className="mb-3">
                            <div className="row align-items-center">
                                <div className="col-auto">

                                {/* <!-- Avatar --> */}
                                <a href="#!" className="avatar">
                                    <img src="assets/img/avatars/projects/project-1.jpg" alt="..." className="avatar-img rounded-circle" />
                                </a>

                                </div>
                                <div className="col ml-n2">

                                {/* <!-- Title --> */}
                                <h4 className="card-title mb-1">
                                    Footroll
                                </h4>

                                {/* <!-- Time --> */}
                                <p className="card-text small text-muted">
                                    <span className="fe fe-clock"></span> <time datetime="2018-05-24">4 godz. temu</time>
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

                            {/* <!-- Text --> */}
                            <p className="mb-3">
                            I've been working on shipping the latest version of Launchday. The story I'm trying to focus on is something like "You're launching soon and need to be 100% focused on your product. Don't lose precious days designing, coding, and testing a product site. Instead, build one in minutes."
                            </p>

                            <p className="mb-4">
                                What do you y'all think? Would love some feedback from <a href="#!" className="badge badge-soft-primary">@Ab</a> or <a href="#!" className="badge badge-soft-primary">@Adolfo</a>?
                            </p>

                            {/* <!-- Image --> */}
                            <p className="text-center mb-3">
                            <img src="assets/img/covers/profile-cover-4.jpg" alt="..." className="img-fluid rounded" />
                            </p>

                            {/* <!-- Buttons --> */}
                            <div className="mb-3">
                            <div className="row">
                                <div className="col">

                                <a href="#!" className="btn btn-sm btn-white">
                                <span role="img" aria-label="smile">😬</span> 1
                                </a>
                                <a href="#!" className="btn btn-sm btn-white">
                                <span role="img" aria-label="thumbsup">👍</span> 2
                                </a>
                                <a href="#!" className="btn btn-sm btn-white">
                                    Zareaguj
                                </a>

                                </div>

                                <div className="col-auto">

                                <a href="#!" className="btn btn-sm btn-white">
                                Udostępnij
                                </a>

                                </div>
                            </div> {/* <!-- / .row --> */}
                            </div>

                            {/* <!-- Divider --> */}
                            <hr />

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

                            <div className="comment mb-3">
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

                            {/* <!-- Divider --> */}
                            <hr />

                            {/* <!-- Form --> */}
                            <div className="row">
                            <div className="col-auto">

                                {/* <!-- Avatar --> */}
                                <div className="avatar avatar-sm">
                                <img src="assets/img/avatars/profiles/patryk.jpg" alt="..." className="avatar-img rounded-circle" />
                                </div>

                            </div>
                            <div className="col ml-n2">

                                {/* <!-- Input --> */}
                                <form className="mt-1">
                                <label className="sr-only">Skomentuj...</label>
                                <textarea className="form-control form-control-flush" data-toggle="autosize" rows="1" placeholder="Skomentuj..."></textarea>
                                </form>

                            </div>
                            <div className="col-auto align-self-end">

                                {/* <!-- Icons --> */}
                                <div className="text-muted mb-2">
                                <a className="text-reset mr-3" href="#!" data-toggle="tooltip" title="Wstaw ikonkę emoji">
                                    <i className="fe fe-smile"></i>
                                </a>
                                <a className="text-reset" href="#!" data-toggle="tooltip" title="Załącz zdjęcie lub film">
                                    <i className="fe fe-camera"></i>
                                </a>
                                </div>

                            </div>
                            </div> {/* <!-- / .row --> */}

                        </div>
                    </div>

                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-6">

                    <div className="card">
                        <div className="card-body">

                            {/* <!-- Header --> */}
                            <div className="mb-3">
                            <div className="row align-items-center">
                                <div className="col-auto">

                                {/* <!-- Avatar --> */}
                                <a href="#!" className="avatar">
                                    <img src="assets/img/avatars/projects/project-1.jpg" alt="..." className="avatar-img rounded-circle" />
                                </a>

                                </div>
                                <div className="col ml-n2">

                                {/* <!-- Title --> */}
                                <h4 className="card-title mb-1">
                                    AutoRobin
                                </h4>

                                {/* <!-- Time --> */}
                                <p className="card-text small text-muted">
                                    <span className="fe fe-clock"></span> <time datetime="2018-05-24">4 godz. temu</time>
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

                            {/* <!-- Text --> */}
                            <p className="mb-3">
                            I've been working on shipping the latest version of Launchday. The story I'm trying to focus on is something like "You're launching soon and need to be 100% focused on your product. Don't lose precious days designing, coding, and testing a product site. Instead, build one in minutes."
                            </p>

                            <p className="mb-4">
                                What do you y'all think? Would love some feedback from <a href="#!" className="badge badge-soft-primary">@Ab</a> or <a href="#!" className="badge badge-soft-primary">@Adolfo</a>?
                            </p>

                            {/* <!-- Image --> */}
                            <p className="text-center mb-3">
                            <img src="assets/img/covers/profile-cover-4.jpg" alt="..." className="img-fluid rounded" />
                            </p>

                            {/* <!-- Buttons --> */}
                            <div className="mb-3">
                            <div className="row">
                                <div className="col">

                                <a href="#!" className="btn btn-sm btn-white">
                                <span role="img" aria-label="smile">😬</span> 1
                                </a>
                                <a href="#!" className="btn btn-sm btn-white">
                                <span role="img" aria-label="thumbsup">👍</span> 2
                                </a>
                                <a href="#!" className="btn btn-sm btn-white">
                                    Zareaguj
                                </a>

                                </div>

                                <div className="col-auto">

                                <a href="#!" className="btn btn-sm btn-white">
                                Udostępnij
                                </a>

                                </div>
                            </div> {/* <!-- / .row --> */}
                            </div>

                            {/* <!-- Divider --> */}
                            <hr />

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

                            <div className="comment mb-3">
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

                            {/* <!-- Divider --> */}
                            <hr />

                            {/* <!-- Form --> */}
                            <div className="row">
                            <div className="col-auto">

                                {/* <!-- Avatar --> */}
                                <div className="avatar avatar-sm">
                                <img src="assets/img/avatars/profiles/patryk.jpg" alt="..." className="avatar-img rounded-circle" />
                                </div>

                            </div>
                            <div className="col ml-n2">

                                {/* <!-- Input --> */}
                                <form className="mt-1">
                                <label className="sr-only">Skomentuj...</label>
                                <textarea className="form-control form-control-flush" data-toggle="autosize" rows="1" placeholder="Skomentuj..."></textarea>
                                </form>

                            </div>
                            <div className="col-auto align-self-end">

                                {/* <!-- Icons --> */}
                                <div className="text-muted mb-2">
                                <a className="text-reset mr-3" href="#!" data-toggle="tooltip" title="Wstaw ikonkę emoji">
                                    <i className="fe fe-smile"></i>
                                </a>
                                <a className="text-reset" href="#!" data-toggle="tooltip" title="Załącz zdjęcie lub film">
                                    <i className="fe fe-camera"></i>
                                </a>
                                </div>

                            </div>
                            </div> {/* <!-- / .row --> */}

                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div className="row justify-content-center">
                <div className="col-xl-6">

                    <div className="card">
                        <div className="card-body">

                            {/* <!-- Header --> */}
                            <div className="mb-3">
                            <div className="row align-items-center">
                                <div className="col-auto">

                                {/* <!-- Avatar --> */}
                                <a href="#!" className="avatar">
                                    <img src="assets/img/avatars/projects/project-1.jpg" alt="..." className="avatar-img rounded-circle" />
                                </a>

                                </div>
                                <div className="col ml-n2">

                                {/* <!-- Title --> */}
                                <h4 className="card-title mb-1">
                                    AutoRobin
                                </h4>

                                {/* <!-- Time --> */}
                                <p className="card-text small text-muted">
                                    <span className="fe fe-clock"></span> <time datetime="2018-05-24">4 godz. temu</time>
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

                            {/* <!-- Text --> */}
                            <p className="mb-3">
                            I've been working on shipping the latest version of Launchday. The story I'm trying to focus on is something like "You're launching soon and need to be 100% focused on your product. Don't lose precious days designing, coding, and testing a product site. Instead, build one in minutes."
                            </p>

                            <p className="mb-4">
                                What do you y'all think? Would love some feedback from <a href="#!" className="badge badge-soft-primary">@Ab</a> or <a href="#!" className="badge badge-soft-primary">@Adolfo</a>?
                            </p>

                            {/* <!-- Image --> */}
                            <p className="text-center mb-3">
                            <img src="assets/img/covers/profile-cover-4.jpg" alt="..." className="img-fluid rounded" />
                            </p>

                            {/* <!-- Buttons --> */}
                            <div className="mb-3">
                            <div className="row">
                                <div className="col">

                                <a href="#!" className="btn btn-sm btn-white">
                                <span role="img" aria-label="smile">😬</span> 1
                                </a>
                                <a href="#!" className="btn btn-sm btn-white">
                                <span role="img" aria-label="thumbsup">👍</span> 2
                                </a>
                                <a href="#!" className="btn btn-sm btn-white">
                                    Zareaguj
                                </a>

                                </div>

                                <div className="col-auto">

                                <a href="#!" className="btn btn-sm btn-white">
                                Udostępnij
                                </a>

                                </div>
                            </div> {/* <!-- / .row --> */}
                            </div>

                            {/* <!-- Divider --> */}
                            <hr />

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

                            <div className="comment mb-3">
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

                            {/* <!-- Divider --> */}
                            <hr />

                            {/* <!-- Form --> */}
                            <div className="row">
                            <div className="col-auto">

                                {/* <!-- Avatar --> */}
                                <div className="avatar avatar-sm">
                                <img src="assets/img/avatars/profiles/patryk.jpg" alt="..." className="avatar-img rounded-circle" />
                                </div>

                            </div>
                            <div className="col ml-n2">

                                {/* <!-- Input --> */}
                                <form className="mt-1">
                                <label className="sr-only">Skomentuj...</label>
                                <textarea className="form-control form-control-flush" data-toggle="autosize" rows="1" placeholder="Skomentuj..."></textarea>
                                </form>

                            </div>
                            <div className="col-auto align-self-end">

                                {/* <!-- Icons --> */}
                                <div className="text-muted mb-2">
                                <a className="text-reset mr-3" href="#!" data-toggle="tooltip" title="Wstaw ikonkę emoji">
                                    <i className="fe fe-smile"></i>
                                </a>
                                <a className="text-reset" href="#!" data-toggle="tooltip" title="Załącz zdjęcie lub film">
                                    <i className="fe fe-camera"></i>
                                </a>
                                </div>

                            </div>
                            </div> {/* <!-- / .row --> */}

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            <div className="row justify-content-center">
                <div className="col-xl-6">

                    <div className="card">
                        <div className="card-body">

                            {/* <!-- Header --> */}
                            <div className="mb-3">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                {/* <!-- Avatar --> */}
                                <a href="#!" className="avatar">
                                    <img src="assets/img/avatars/projects/project-1.jpg" alt="..." className="avatar-img rounded-circle" />
                                </a>

                                </div>
                                <div className="col ml-n2">

                                {/* <!-- Title --> */}
                                <h4 className="card-title mb-1">
                                    Footroll
                                </h4>

                                {/* <!-- Time --> */}
                                <p className="card-text small text-muted">
                                    <span className="fe fe-clock"></span> <time datetime="2018-05-24">4 godz. temu</time>
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

                            {/* <!-- Text --> */}
                            <p className="mb-3">
                            I've been working on shipping the latest version of Launchday. The story I'm trying to focus on is something like "You're launching soon and need to be 100% focused on your product. Don't lose precious days designing, coding, and testing a product site. Instead, build one in minutes."
                            </p>

                            <p className="mb-4">
                                What do you y'all think? Would love some feedback from <a href="#!" className="badge badge-soft-primary">@Ab</a> or <a href="#!" className="badge badge-soft-primary">@Adolfo</a>?
                            </p>

                            {/* <!-- Image --> */}
                            <p className="text-center mb-3">
                            <img src="assets/img/covers/profile-cover-4.jpg" alt="..." className="img-fluid rounded" />
                            </p>

                            {/* <!-- Buttons --> */}
                            <div className="mb-3">
                            <div className="row">
                                <div className="col">

                                <a href="#!" className="btn btn-sm btn-white">
                                <span role="img" aria-label="smile">😬</span> 1
                                </a>
                                <a href="#!" className="btn btn-sm btn-white">
                                <span role="img" aria-label="thumbsup">👍</span> 2
                                </a>
                                <a href="#!" className="btn btn-sm btn-white">
                                    Zareaguj
                                </a>

                                </div>

                                <div className="col-auto">

                                <a href="#!" className="btn btn-sm btn-white">
                                Udostępnij
                                </a>

                                </div>
                            </div> {/* <!-- / .row --> */}
                            </div>

                            {/* <!-- Divider --> */}
                            <hr />

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

                            <div className="comment mb-3">
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

                            {/* <!-- Divider --> */}
                            <hr />

                            {/* <!-- Form --> */}
                            <div className="row">
                            <div className="col-auto">

                                {/* <!-- Avatar --> */}
                                <div className="avatar avatar-sm">
                                <img src="assets/img/avatars/profiles/patryk.jpg" alt="..." className="avatar-img rounded-circle" />
                                </div>

                            </div>
                            <div className="col ml-n2">

                                {/* <!-- Input --> */}
                                <form className="mt-1">
                                <label className="sr-only">Skomentuj...</label>
                                <textarea className="form-control form-control-flush" data-toggle="autosize" rows="1" placeholder="Skomentuj..."></textarea>
                                </form>

                            </div>
                            <div className="col-auto align-self-end">

                                {/* <!-- Icons --> */}
                                <div className="text-muted mb-2">
                                <a className="text-reset mr-3" href="#!" data-toggle="tooltip" title="Wstaw ikonkę emoji">
                                    <i className="fe fe-smile"></i>
                                </a>
                                <a className="text-reset" href="#!" data-toggle="tooltip" title="Załącz zdjęcie lub film">
                                    <i className="fe fe-camera"></i>
                                </a>
                                </div>

                            </div>
                            </div>
                            {/* <!-- / .row --> */}

                        </div>
                    </div>
                    </div></div></div></div></div></div>


  )
}

export default News;
import React, { useEffect } from 'react';

const Carousel = () => {
    useEffect(() =>  {
        window.$('.carousel').carousel();
      })

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleSlidesOnly" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleSlidesOnly" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="header-footer">

                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                <div className="col-xl-3">

                                    <a href="project-overview.html">
                                    <img src="assets/img/avatars/projects/project-1.jpg" alt="..." className="rounded" />
                                    </a>

                                </div>
                                <div className="col-xl-3">

                                    <h1 className="card-title mb-3 name">
                                    <a href="project-overview.html">Footroll</a>
                                    </h1>

                                    <p className="card-text text-muted mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est repellat minima iusto, hic porro earum eligendi ipsam quaerat fugit. Accusantium delectus fuga aut esse ipsa fugit eveniet ipsum enim quam?
                                    </p>

                                </div>
                                <div className="col-xl-6 pl-5">

                                    {/* <!-- Pretitle --> */}
                                    <h6 className="header-pretitle text-secondary">
                                    Zebrano:
                                    </h6>
                                    <div className="progress progress mb-3">
                                    <div className="progress-bar" role="progressbar" style={{width: "29%"}} aria-valuenow="29" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="row justify-content-between align-items-center">
                                    <div className="col-auto">
                                        <h1 className="mb-0">28 754 PLN <small className="text-muted ml-2">z 100 000 PLN</small></h1>
                                    </div>
                                    <div className="col-auto">
                                        <h2 className="mb-0">
                                        <span className="badge badge-soft-info"> 29%</span>
                                        </h2>
                                    </div>
                                    </div>

                                    <div className="row mt-5 align-items-center">
                                    <div className="col-12">
                                        <h3>
                                        Kup jednostki
                                        </h3>
                                    </div>
                                    <div className="col-lg-4">
                                        <input type="number" className="form-control form-control-prepended" placeholder="Kwota" data-mask="#.### PLN" data-mask-reverse="true" defaultValue="1000" />
                                    </div>
                                    <div className="col-auto pl-0 pr-0">
                                        <h3 className="mb-0">=</h3>
                                    </div>
                                    <div className="col-lg-4 pr-0 input-jednostki">
                                        <input type="number" className="form-control" placeholder="Jednostki" defaultValue="100" />
                                        <i className="fe fe-info" data-toggle="tooltip" data-placement="bottom" title="Cena za jednostkę: 10 PLN" />
                                    </div>
                                    <div className="col-auto">
                                        <button type="button" className="btn btn-outline-primary"><i className="fe fe-check-circle mr-2" /> Kupuj</button>
                                    </div>
                                    </div>

                                </div>
                                </div>
                            </div>
                            </div>

                    </div>
                </div>
                <div className="carousel-item">
                    <div className="header-footer">

                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                <div className="col-xl-3">

                                    <a href="project-overview.html">
                                    <img src="assets/img/avatars/projects/project-4.jpg" alt="..." className="rounded" />
                                    </a>

                                </div>
                                <div className="col-xl-3">

                                    <h1 className="card-title mb-3 name">
                                    <a href="project-overview.html">Techmed</a>
                                    </h1>

                                    <p className="card-text text-muted mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est repellat minima iusto, hic porro earum eligendi ipsam quaerat fugit. Accusantium delectus fuga aut esse ipsa fugit eveniet ipsum enim quam?
                                    </p>

                                </div>
                                <div className="col-xl-6 pl-5">

                                    {/* <!-- Pretitle --> */}
                                    <h6 className="header-pretitle text-secondary">
                                    Zebrano:
                                    </h6>
                                    <div className="progress progress mb-3">
                                    <div className="progress-bar" role="progressbar" style={{width: "76%"}} aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="row justify-content-between align-items-center">
                                    <div className="col-auto">
                                        <h1 className="mb-0">128 754 PLN <small className="text-muted ml-2">z 150 000 PLN</small></h1>
                                    </div>
                                    <div className="col-auto">
                                        <h2 className="mb-0">
                                        <span className="badge badge-soft-info"> 76%</span>
                                        </h2>
                                    </div>
                                    </div>

                                    <div className="row mt-5 align-items-center">
                                    <div className="col-12">
                                        <h3>
                                        Kup jednostki
                                        </h3>
                                    </div>
                                    <div className="col-lg-4">
                                        <input type="number" className="form-control form-control-prepended" placeholder="Kwota" data-mask="#.### PLN" data-mask-reverse="true" defaultValue="1000" />
                                    </div>
                                    <div className="col-auto pl-0 pr-0">
                                        <h3 className="mb-0">=</h3>
                                    </div>
                                    <div className="col-lg-4 pr-0 input-jednostki">
                                        <input type="number" className="form-control" placeholder="Jednostki" defaultValue="50" />
                                        <i className="fe fe-info" data-toggle="tooltip" data-placement="bottom" title="Cena za jednostkę: 20 PLN"></i>
                                    </div>
                                    <div className="col-auto">
                                        <button type="button" className="btn btn-outline-primary"><i className="fe fe-check-circle mr-2"></i> Kupuj</button>
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

export default Carousel;
import React from 'react';
// import { Line } from 'react-chartjs-2';
import useScript from '../hooks/useScript';

const Kupuj = () => {

  useScript(`${process.env.PUBLIC_URL}/assets/js/theme.min.js`);
  // useEffect(() =>  {
  // window.$('[data-toggle="tooltip"]').tooltip();
  // })

  return (
      <div>
      <div className="header pb-5">
      <div className="container-fluid">

        <div className="row justify-content-center">
          {/* object widht below */}
          <div className="col-xl-9 col-lg-10 col-12">
            {/* <!-- Body --> */}
            <div className="card mt-5">
              <div className="card-header bg-primary">
                <div>
                {/* <!-- Title --> */}
                  <h1 className="mt-3 header-title ">
                    AutoRobin
                  </h1>

                  {/* <!-- Pretitle --> */}

                    <h6 className="mt-2 mb-3 header-pretitle text-white">
                      Wartość jednostek udziałowych
                    </h6>
                  </div>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row justify-content-end">
                      <div className="col-auto">

                          {/* <!-- Nav --> */}
                          <div className="btn-group" role="group" aria-label="Wykres">
                            <button type="button" className="btn btn-light" data-toggle="chart" data-target="#headerChart2" data-update='{"data":{"datasets":[{"data":[0,10,5,15,10,20,15,25,20,30,25,40]}]}}' data-prefix="" data-suffix="k PLN" datatoggle="tab">1 tydzień</button>
                            <button type="button" className="btn btn-light" data-toggle="chart" data-target="#headerChart2" data-update='{"data":{"datasets":[{"data":[0,10,5,15,10,20,15,25,20,30,25,40]}]}}' data-prefix="" data-suffix="k PLN" datatoggle="tab">2 tygodnie</button>
                            <button type="button" className="btn btn-light" data-toggle="chart" data-target="#headerChart2" data-update='{"data":{"labels": ["1.11", "7.11", "14.11", "21.11", "28.11"],"datasets":[{"data":[10,25,30,5,100]}]}}' data-prefix="" data-suffix="k PLN" datatoggle="tab">1 miesiąc</button>
                            <button type="button" className="btn btn-light active" data-toggle="chart" data-target="#headerChart2" data-update='{"data":{"labels": ["Lis", "Gru", "Sty"], "datasets":[{"data":[-20,15,100]}]}}' data-prefix="" data-suffix="k PLN" datatoggle="tab">3 miesiące</button>
                          </div>

                      </div>
                    </div>
                    {/* <!-- / .row --> */}

                    <div className="header-footer">

                    {/* <!-- Chart --> */}
                    <div className="chart mb-5">
                      <canvas id="headerChart2" className="chart-canvas"></canvas>
                    </div>

                      <hr className="mb-5" />

                      <h2 className="header-title mb-4">
                        Więcej o AutoRobin
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>





                    </div>

                  </div>

                  <div className="card-footer bg-lighter">
                    <div className="header-footer pt-3 pb-3">
                      <h1 className="mb-5 text-primary">
                        Kup jednostki
                      </h1>
                      <div className="row align-items-end pb-4">
                        <div className="col-auto">
                          <label htmlFor="">Kwota zakupu</label>
                          <input type="text" className="form-control form-control-prepended" placeholder="Kwota" data-mask="#.### PLN" data-mask-reverse="true" defaultValue="500" />
                        </div>
                        <div className="col-auto pl-0 pr-0">
                          <h3 className="mb-3"> = </h3>
                        </div>
                        <div className="col-auto pr-0 input-jednostki">
                          <label htmlFor="">Ilość jednostek</label>
                          <input type="number" className="form-control" placeholder="Jednostki" defaultValue="15" />
                          <i className="fe fe-info" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Cena poszczególnych jednostek: <br/>2 jedn. ⟶ 10 PLN<br/> 10 jedn. ⟶ 35 PLN<br/> 3 jedn. ⟶ 40 PLN"></i>
                          <div className="info position-absolute mt-2" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Cena poszczególnych jednostek: <br/>2 jedn. ⟶ 10 PLN<br/> 10 jedn. ⟶ 35 PLN<br/> 3 jedn. ⟶ 40 PLN">
                            <small className="text-muted">Do zapłaty: <strong className="white">450 PLN</strong></small>
                          </div>
                        </div>
                        <div className="col-auto">
                          <button type="button" className="btn btn-primary pl-5 pr-5"><i className="fe fe-check-circle mr-2"></i> Kupuje</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  </div>
                  </div>

              {/* <!-- Footer --> */}
              {/* <div className="header-footer">



              </div>
          </div>
          <div className="col-12"> */}
          {/* <!-- Body --> */}
          {/* <div className="header-body">
              <div className="row align-items-end">
              <div className="col"> */}

                  {/* <!-- Pretitle --> */}
                  {/* <h6 className="header-pretitle text-secondary">
                    Wartość jednostek udziałowych
                  </h6> */}

                  {/* <!-- Title --> */}
                  {/* <h1 className="header-title text-white">
                    Techmed
                  </h1>

              </div>
              <div className="col-auto"> */}

                  {/* <!-- Nav --> */}
                  {/* <ul className="nav nav-tabs header-tabs">
                  <li className="nav-item" data-toggle="chart" data-target="#headerChart2" data-update='{"data":{"datasets":[{"data":[-20,10,5,15,10,-20,15,25,20,-30,25,100]}]}}' data-prefix="" data-suffix="k PLN">
                      <a href="true" className="nav-link text-center active" data-toggle="tab">
                      <h6 className="header-pretitle text-secondary">
                          Saldo
                      </h6>
                      <h3 className="text-white mb-0">
                          109.93k PLN
                      </h3>
                      </a>
                  </li>
                  </ul>

              </div> */}
          {/* </div> <!-- / .row --> */}
          {/* </div> <!-- / .header-body --> */}

          {/* <!-- Footer --> */}
          {/* <div className="header-footer"> */}

              {/* <!-- Chart --> */}
              {/* <div className="chart">
                <canvas id="headerChart2" className="chart-canvas"></canvas>
              </div>

              <div className="card mt-4">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col"> */}

                            {/* <!-- Title --> */}
                            {/* <h6 className="card-title text-uppercase text-muted mb-2">
                            Saldo
                            </h6> */}

                            {/* <!-- Heading --> */}
                            {/* <span className="h2 mb-0">
                              109,930 PLN
                            </span> */}

                            {/* <!-- Badge --> */}
                            {/* <span className="badge badge-soft-success mt-n1">
                            +28.21%
                            </span>

                        </div>
                        <div className="col-auto">
 */}
                            {/* <!-- Icon --> */}
                            {/* <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>

                        </div> */}
                    {/* </div> <!-- / .row --> */}

                {/* </div>
              </div>

              <div className="card card-inactive">

                  <div className="card-header">
                      <h2 className="header-title text-white">
                          Więcej o Techmed
                        </h2>
                  </div>

                  <div className="card-body">

                    <div className="card-text">
                      <p>
                          Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                      </p>
                    </div>

                  </div>

                </div>

          </div>
          </div>
        </div> */}

      </div>
    {/* </div> <!-- / .header --> */}

    {/* <!-- CARDS --> */}
    {/* <div className="container-fluid">
      <div className="row mt-4 mt-md-5">
        <div className="col-12 col-lg-6">



        </div>
      </div>
    </div> */}

  </div>
</div>
</div>
  )
}

export default Kupuj;
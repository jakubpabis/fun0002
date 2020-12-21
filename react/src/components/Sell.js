import React from 'react';
import useScript from '../hooks/useScript';

const Sprzedaj = () => {

  useScript(`${process.env.PUBLIC_URL}/assets/js/theme.min.js`);
  // useEffect(() =>  {
  //   window.$('[datatoggle="tooltip"]').tooltip();
  // })
  return (
      <div>
      <div className="header pb-5">
      <div className="container-fluid">

          <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-10 col-12">
                  {/* zmiany */}
                  <div className="card mt-5">
                <div className="card-header bg-primary">

                    <div>
                      {/* <!-- Title --> */}
                      <h1 className="mt-3 header-title">
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
                          <button type="button" className="btn btn-light" datatoggle="chart" data-target="#headerChart" data-update='{"data":{"datasets":[{"data":[0,10,5,15,10,20,15,25,20,30,25,40]}]}}' data-prefix="" data-suffix="k PLN" data-toggle="tab">1 tydzień</button>
                          <button type="button" className="btn btn-light" datatoggle="chart" data-target="#headerChart" data-update='{"data":{"datasets":[{"data":[0,10,5,15,10,20,15,25,20,30,25,40]}]}}' data-prefix="" data-suffix="k PLN" data-toggle="tab">2 tygodnie</button>
                          <button type="button" className="btn btn-light" datatoggle="chart" data-target="#headerChart" data-update='{"data":{"labels": ["1.11", "7.11", "14.11", "21.11", "28.11"],"datasets":[{"data":[10,25,30,5,100]}]}}' data-prefix="" data-suffix="k PLN" data-toggle="tab">1 miesiąc</button>
                          <button type="button" className="btn btn-light active" datatoggle="chart" data-target="#headerChart" data-update='{"data":{"labels": ["Lis", "Gru", "Sty"], "datasets":[{"data":[-20,15,100]}]}}' data-prefix="" data-suffix="k PLN" data-toggle="tab">3 miesiące</button>
                        </div>

                    </div>
                  </div>
                  {/* <!-- / .row --> */}

                  <div className="header-footer">

                    {/* <!-- Chart --> */}
                    <div className="chart mb-4">
                        <canvas id="headerChart" className="chart-canvas"></canvas>
                    </div>

                  </div>

                </div>
                <div className="card-footer bg-lighter">
                  <div className="header-footer">
                    <h1 className="mb-5 text-primary">
                      Sprzedaj jednostki
                    </h1>
                    <div className="row align-items-end pb-2">
                      <div className="col-lg-4">
                        <label htmlFor="">Cena za jednostkę</label>
                        <input type="text" className="form-control form-control-prepended" placeholder="Kwota" data-mask="#.### PLN" data-mask-reverse="true" defaultValue="500" />
                      </div>
                      <div className="col-auto pl-0 pr-0">
                        <h3 className="mb-3"> x </h3>
                      </div>
                      <div className="col-lg-4 pr-0 input-jednostki">
                        <label htmlFor="">Ilość jednostek</label>
                        <input type="number" className="form-control" placeholder="Jednostki" defaultValue="15" />
                      </div>
                      <div className="col-auto">
                        <button type="button" className="btn btn-primary pl-5 pr-5"><i className="fe fe-check-circle mr-2"></i> Sprzedaj</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10 col-12">

              <div className="card mt-5">
                <div className="card-header bg-primary">
                  <div>
                    {/* <!-- Title --> */}
                    <h1 className="mt-3 header-title">
                      Footroll
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
                          <button type="button" className="btn btn-light" datatoggle="chart" data-target="#headerChart2" data-update='{"data":{"datasets":[{"data":[0,10,5,15,10,20,15,25,20,30,25,40]}]}}' data-prefix="" data-suffix="k PLN" data-toggle="tab">1 tydzień</button>
                          <button type="button" className="btn btn-light" datatoggle="chart" data-target="#headerChart2" data-update='{"data":{"datasets":[{"data":[0,10,5,15,10,20,15,25,20,30,25,40]}]}}' data-prefix="" data-suffix="k PLN" data-toggle="tab">2 tygodnie</button>
                          <button type="button" className="btn btn-light" datatoggle="chart" data-target="#headerChart2" data-update='{"data":{"labels": ["1.11", "7.11", "14.11", "21.11", "28.11"],"datasets":[{"data":[10,25,30,5,100]}]}}' data-prefix="" data-suffix="k PLN" data-toggle="tab">1 miesiąc</button>
                          <button type="button" className="btn btn-light active" datatoggle="chart" data-target="#headerChart2" data-update='{"data":{"labels": ["Lis", "Gru", "Sty"], "datasets":[{"data":[-20,15,100]}]}}' data-prefix="" data-suffix="k PLN" data-toggle="tab">3 miesiące</button>
                        </div>

                    </div>
                  </div>
                  {/* <!-- / .row --> */}

                  <div className="header-footer">

                    {/* <!-- Chart --> */}
                    <div className="chart mb-4">
                        <canvas id="headerChart2" className="chart-canvas"></canvas>
                    </div>

                  </div>

                </div>
                <div className="card-footer bg-lighter">
                  <div className="header-footer">
                    <h1 className="mb-5 text-primary">
                      Sprzedaj jednostki
                    </h1>
                    <div className="row align-items-end pb-2">
                      <div className="col-lg-4">
                        <label htmlFor="">Cena za jednostkę</label>
                        <input type="text" className="form-control form-control-prepended" placeholder="Kwota" data-mask="#.### PLN" data-mask-reverse="true" defaultValue="500" />
                      </div>
                      <div className="col-auto pl-0 pr-0">
                        <h3 className="mb-3"> x </h3>
                      </div>
                      <div className="col-lg-4 pr-0 input-jednostki">
                        <label htmlFor="">Ilość jednostek</label>
                        <input type="number" className="form-control" placeholder="Jednostki" defaultValue="15" />
                      </div>
                      <div className="col-auto">
                        <button type="button" className="btn btn-primary pl-5 pr-5"><i className="fe fe-check-circle mr-2"></i> Sprzedaj</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>


      {/* <!-- / .row --> */}

    </div>

  </div>


  )
}

export default Sprzedaj;
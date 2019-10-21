import React, { Component } from 'react';

export default class Sprzedaj extends Component {
    render() {
        return (
            <div>


            {/* <!-- HEADER --> */}
            <div className="header bg-dark pb-5">
                <div className="container-fluid">
                {/* div className="@@if(navPosition=='sidenav'||navPosition=='combo'){container-fluid}@@if(navPosition=='topnav'){container}"> */}

                    <div className="row">
                        <div className="col-lg-6">
                            {/* <!-- Body --> */}
                            <div className="header-body">
                                <div className="row align-items-end">
                                <div className="col">

                                    {/* <!-- Pretitle --> */}
                                    <h6 className="header-pretitle text-secondary">
                                    Firma 1
                                    </h6>

                                    {/* <!-- Title --> */}
                                    <h1 className="header-title text-white">
                                    Stan inwestycji
                                    </h1>

                                </div>
                                <div className="col-auto">

                                    {/* <!-- Nav --> */}
                                    <ul className="nav nav-tabs header-tabs">
                                    <li className="nav-item" data-toggle="chart" data-target="#headerChart" data-update='{"data":{"datasets":[{"data":[0,10,5,15,10,20,15,25,20,30,25,40]}]}}' data-prefix="" data-suffix="k PLN">
                                        <a href="true" className="nav-link text-center active" data-toggle="tab">
                                        <h6 className="header-pretitle text-secondary">
                                            Zarobki
                                        </h6>
                                        <h3 className="text-white mb-0">
                                            19.2k PLN
                                        </h3>
                                        </a>
                                    </li>
                                    </ul>

                                </div>
                                </div> {/* <!-- / .row --> */}
                            </div> {/* <!-- / .header-body --> */}

                            {/* <!-- Footer --> */}
                            <div className="header-footer">

                                {/* <!-- Chart --> */}
                                <div className="chart">
                                    <canvas id="headerChart" className="chart-canvas"></canvas>
                                </div>

                                {/* <!-- Card --> */}
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col">

                                                {/* <!-- Title --> */}
                                                <h6 className="card-title text-uppercase text-muted mb-2">
                                                Saldo
                                                </h6>

                                                {/* <!-- Heading --> */}
                                                <span className="h2 mb-0">
                                                24,500 PLN
                                                </span>

                                                {/* <!-- Badge --> */}
                                                <span className="badge badge-soft-success mt-n1">
                                                +13.5%
                                                </span>

                                            </div>
                                            <div className="col-auto">

                                                {/* <!-- Icon --> */}
                                                <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>

                                            </div>
                                        </div> {/* <!-- / .row --> */}

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6">
                        {/* <!-- Body --> */}
                        <div className="header-body">
                            <div className="row align-items-end">
                            <div className="col">

                                {/* <!-- Pretitle --> */}
                                <h6 className="header-pretitle text-secondary">
                                Firma 2
                                </h6>

                                {/* <!-- Title --> */}
                                <h1 className="header-title text-white">
                                Stan czegoś
                                </h1>

                            </div>
                            <div className="col-auto">

                                {/* <!-- Nav --> */}
                                <ul className="nav nav-tabs header-tabs">
                                <li className="nav-item" data-toggle="chart" data-target="#headerChart2" data-update='{"data":{"datasets":[{"data":[-20,10,5,15,10,-20,15,25,20,-30,25,100]}]}}' data-prefix="" data-suffix="k PLN">
                                    <a href="true" className="nav-link text-center active" data-toggle="tab">
                                    <h6 className="header-pretitle text-secondary">
                                        Zarobki
                                    </h6>
                                    <h3 className="text-white mb-0">
                                        109.93k PLN
                                    </h3>
                                    </a>
                                </li>
                                </ul>

                            </div>
                        </div> {/* <!-- / .row --> */}
                        </div> {/* <!-- / .header-body --> */}

                        {/* <!-- Footer --> */}
                        <div className="header-footer">

                            {/* <!-- Chart --> */}
                            <div className="chart">
                            <canvas id="headerChart2" className="chart-canvas"></canvas>
                            </div>

                        </div>
                        </div>
                    </div>

                </div>
            </div> {/* <!-- / .header --> */}

            {/* <!-- CARDS --> */}
            <div className="container-fluid">
            {/* <div className="@@if(navPosition=='sidenav'||navPosition=='combo'){container-fluid}@@if(navPosition=='topnav'){container} mt-n6"> */}
                <div className="row">
                <div className="col-12 col-lg-6 col-xl">

                    {/* <!-- Card --> */}
                    <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                        <div className="col">

                            {/* <!-- Title --> */}
                            <h6 className="card-title text-uppercase text-muted mb-2">
                            Saldo
                            </h6>

                            {/* <!-- Heading --> */}
                            <span className="h2 mb-0">
                            24,500 PLN
                            </span>

                            {/* <!-- Badge --> */}
                            <span className="badge badge-soft-success mt-n1">
                            +13.5%
                            </span>

                        </div>
                        <div className="col-auto">

                            {/* <!-- Icon --> */}
                            <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>

                        </div>
                        </div> {/* <!-- / .row --> */}

                    </div>
                    </div>

                </div>
                <div className="col-12 col-lg-6 col-xl">

                    {/* <!-- Card --> */}
                    <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                        <div className="col">

                            {/* <!-- Title --> */}
                            <h6 className="card-title text-uppercase text-muted mb-2">
                            Total Hours
                            </h6>

                            {/* <!-- Heading --> */}
                            <span className="h2 mb-0">
                            763.5
                            </span>

                        </div>
                        <div className="col-auto">

                            {/* <!-- Icon --> */}
                            <span className="h2 fe fe-briefcase text-muted mb-0"></span>

                        </div>
                        </div> {/* <!-- / .row --> */}

                    </div>
                    </div>

                </div>
                <div className="col-12 col-lg-6 col-xl">

                    {/* <!-- Card --> */}
                    <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                        <div className="col">

                            {/* <!-- Title --> */}
                            <h6 className="card-title text-uppercase text-muted mb-2">
                            Progress
                            </h6>

                            <div className="row align-items-center no-gutters">
                            <div className="col-auto">

                                {/* <!-- Heading --> */}
                                <span className="h2 mr-2 mb-0">
                                84.5%
                                </span>

                            </div>
                            <div className="col">

                                {/* <!-- Progress --> */}
                                <div className="progress progress-sm">
                                <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                            </div>
                            </div> {/* <!-- / .row --> */}

                        </div>
                        <div className="col-auto">

                            {/* <!-- Icon --> */}
                            <span className="h2 fe fe-clipboard text-muted mb-0"></span>

                        </div>
                        </div> {/* <!-- / .row --> */}

                    </div>
                    </div>

                </div>
                <div className="col-12 col-lg-6 col-xl">

                    {/* <!-- Card --> */}
                    <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                        <div className="col">

                            {/* <!-- Title --> */}
                            <h6 className="card-title text-uppercase text-muted mb-2">
                            Cost/Unit
                            </h6>

                            {/* <!-- Heading --> */}
                            <span className="h2 mb-0">
                            $5.50
                            </span>

                        </div>
                        <div className="col-auto">

                            {/* <!-- Chart --> */}
                            <div className="chart chart-sparkline">
                            <canvas className="chart-canvas" id="sparklineChart"></canvas>
                            </div>

                        </div>
                        </div> {/* <!-- / .row --> */}

                    </div>
                    </div>

                </div>
                </div> {/* <!-- / .row --> */}

            </div>

            </div>

        )
    }
}

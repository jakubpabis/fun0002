import React, { Component } from 'react';

export default class TopBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light d-none d-md-flex" id="topbar">
                <div className="container-fluid">

                    <div className="mr-4 d-none d-md-flex">
                    <div className="col-auto pl-0">
                        <h6 className="header-pretitle">
                        Pozostały abonament <i data-toggle="tooltip" title="dziala!!!">blabla</i>
                        </h6>
                        <h2 className="header-title">
                        1 234,56 <small>PLN</small>
                        </h2>
                    </div>
                    </div>

                    <div className="mr-4 d-none d-md-block">
                    <div className="col-auto pl-0">
                        <a href="true" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <h6 className="header-pretitle">
                            Zainwestowany kapitał
                        </h6>
                        <h2 className="header-title text-white">
                            6 543,21 <small>PLN</small>
                        </h2>
                        </a>
                        {/* <!-- Menu --> */}
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-card">
                            <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">

                                {/* <!-- Title --> */}
                                <h5 className="card-header-title">
                                    Inwestycje
                                </h5>

                                </div>
                                <div className="col-auto">

                                {/* <!-- Link --> */}
                                <a href="#!" className="small">
                                    Wszystkie
                                </a>

                                </div>
                            </div> {/* <!-- / .row --> */}
                            </div> {/* <!-- / .card-header --> */}
                            <div className="card-body">

                            {/* <!-- List group --> */}
                            <div className="list-group list-group-flush my-n3">
                                <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                    <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                        <img src="/assets/img/avatars/profiles/avatar-1.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                    </div>
                                    <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                        <strong className="text-body">Dianna Smiley</strong> shared your post with <strong className="text-body">Ab Hadley</strong>, <strong className="text-body">Adolfo Hess</strong>, and <strong className="text-body">3 others</strong>.
                                    </div>

                                    </div>
                                    <div className="col-auto">

                                    <small className="text-muted">
                                        2m
                                    </small>

                                    </div>
                                </div> {/* <!-- / .row --> */}

                                </a>
                                <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                    <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                        <img src="/assets/img/avatars/profiles/avatar-2.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                    </div>
                                    <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                        <strong className="text-body">Ab Hadley</strong> reacted to your post with a 😍
                                    </div>

                                    </div>
                                    <div className="col-auto">

                                    <small className="text-muted">
                                        2m
                                    </small>

                                    </div>
                                </div> {/* <!-- / .row --> */}

                                </a>
                                <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                    <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                        <img src="/assets/img/avatars/profiles/avatar-3.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                    </div>
                                    <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                        <strong className="text-body">Adolfo Hess</strong> commented <blockquote className="text-body">“I don’t think this really makes sense to do without approval from Johnathan since he’s the one...” </blockquote>
                                    </div>

                                    </div>
                                    <div className="col-auto">

                                    <small className="text-muted">
                                        2m
                                    </small>

                                    </div>
                                </div> {/* <!-- / .row --> */}

                                </a>
                                <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                    <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                        <img src="/assets/img/avatars/profiles/avatar-4.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                    </div>
                                    <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                        <strong className="text-body">Daniela Dewitt</strong> subscribed to you.
                                    </div>

                                    </div>
                                    <div className="col-auto">

                                    <small className="text-muted">
                                        2m
                                    </small>

                                    </div>
                                </div> {/* <!-- / .row --> */}

                                </a>
                                <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                    <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                        <img src="/assets/img/avatars/profiles/avatar-5.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                    </div>
                                    <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                        <strong className="text-body">Miyah Myles</strong> shared your post with <strong className="text-body">Ryu Duke</strong>, <strong className="text-body">Glen Rouse</strong>, and <strong className="text-body">3 others</strong>.
                                    </div>

                                    </div>
                                    <div className="col-auto">

                                    <small className="text-muted">
                                        2m
                                    </small>

                                    </div>
                                </div> {/* <!-- / .row --> */}

                                </a>
                                <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                    <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                        <img src="/assets/img/avatars/profiles/avatar-6.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                    </div>
                                    <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                        <strong className="text-body">Ryu Duke</strong> reacted to your post with a 😍
                                    </div>

                                    </div>
                                    <div className="col-auto">

                                    <small className="text-muted">
                                        2m
                                    </small>

                                    </div>
                                </div> {/* <!-- / .row --> */}

                                </a>
                                <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                    <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                        <img src="/assets/img/avatars/profiles/avatar-7.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                    </div>
                                    <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                        <strong className="text-body">Glen Rouse</strong> commented <blockquote className="text-body">“I don’t think this really makes sense to do without approval from Johnathan since he’s the one...” </blockquote>
                                    </div>

                                    </div>
                                    <div className="col-auto">

                                    <small className="text-muted">
                                        2m
                                    </small>

                                    </div>
                                </div> {/* <!-- / .row --> */}

                                </a>
                                <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                    <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                        <img src="/assets/img/avatars/profiles/avatar-8.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                    </div>
                                    <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                        <strong className="text-body">Grace Gross</strong> subscribed to you.
                                    </div>

                                    </div>
                                    <div className="col-auto">

                                    <small className="text-muted">
                                        2m
                                    </small>

                                    </div>
                                </div> {/* <!-- / .row --> */}

                                </a>
                            </div>

                            </div>
                        </div> {/* <!-- / .dropdown-menu --> */}
                    </div>

                    </div>


                    {/* <!-- User --> */}
                    <div className="navbar-user">

                    {/* <!-- Dropdown --> */}
                    <div className="dropdown d-none d-md-flex">

                        {/* <!-- Toggle --> */}
                        <a href="true" className="btn btn-rounded-circle btn-primary icon-xl" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fe fe-bell"></i>
                        <span className="badge badge-warning badge-pill position-absolute pos-badge">23</span>
                        </a>

                        {/* <!-- Menu --> */}
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-card">
                        <div className="card-header">
                            <div className="row align-items-center">
                            <div className="col">

                                {/* <!-- Title --> */}
                                <h5 className="card-header-title">
                                Powiadomienia
                                </h5>

                            </div>
                            <div className="col-auto">

                                {/* <!-- Link --> */}
                                <a href="#!" className="small">
                                Wszystkie
                                </a>

                            </div>
                            </div> {/* <!-- / .row --> */}
                        </div> {/* <!-- / .card-header --> */}
                        <div className="card-body">

                            {/* <!-- List group --> */}
                            <div className="list-group list-group-flush my-n3">
                            <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                    <img src="/assets/img/avatars/profiles/avatar-1.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                </div>
                                <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                    <strong className="text-body">Dianna Smiley</strong> shared your post with <strong className="text-body">Ab Hadley</strong>, <strong className="text-body">Adolfo Hess</strong>, and <strong className="text-body">3 others</strong>.
                                    </div>

                                </div>
                                <div className="col-auto">

                                    <small className="text-muted">
                                    2m
                                    </small>

                                </div>
                                </div> {/* <!-- / .row --> */}

                            </a>
                            <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                    <img src="/assets/img/avatars/profiles/avatar-2.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                </div>
                                <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                    <strong className="text-body">Ab Hadley</strong> reacted to your post with a 😍
                                    </div>

                                </div>
                                <div className="col-auto">

                                    <small className="text-muted">
                                    2m
                                    </small>

                                </div>
                                </div> {/* <!-- / .row --> */}

                            </a>
                            <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                    <img src="/assets/img/avatars/profiles/avatar-3.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                </div>
                                <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                    <strong className="text-body">Adolfo Hess</strong> commented <blockquote className="text-body">“I don’t think this really makes sense to do without approval from Johnathan since he’s the one...” </blockquote>
                                    </div>

                                </div>
                                <div className="col-auto">

                                    <small className="text-muted">
                                    2m
                                    </small>

                                </div>
                                </div> {/* <!-- / .row --> */}

                            </a>
                            <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                    <img src="/assets/img/avatars/profiles/avatar-4.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                </div>
                                <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                    <strong className="text-body">Daniela Dewitt</strong> subscribed to you.
                                    </div>

                                </div>
                                <div className="col-auto">

                                    <small className="text-muted">
                                    2m
                                    </small>

                                </div>
                                </div> {/* <!-- / .row --> */}

                            </a>
                            <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                    <img src="/assets/img/avatars/profiles/avatar-5.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                </div>
                                <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                    <strong className="text-body">Miyah Myles</strong> shared your post with <strong className="text-body">Ryu Duke</strong>, <strong className="text-body">Glen Rouse</strong>, and <strong className="text-body">3 others</strong>.
                                    </div>

                                </div>
                                <div className="col-auto">

                                    <small className="text-muted">
                                    2m
                                    </small>

                                </div>
                                </div> {/* <!-- / .row --> */}

                            </a>
                            <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                    <img src="/assets/img/avatars/profiles/avatar-6.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                </div>
                                <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                    <strong className="text-body">Ryu Duke</strong> reacted to your post with a 😍
                                    </div>

                                </div>
                                <div className="col-auto">

                                    <small className="text-muted">
                                    2m
                                    </small>

                                </div>
                                </div> {/* <!-- / .row --> */}

                            </a>
                            <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                    <img src="/assets/img/avatars/profiles/avatar-7.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                </div>
                                <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                    <strong className="text-body">Glen Rouse</strong> commented <blockquote className="text-body">“I don’t think this really makes sense to do without approval from Johnathan since he’s the one...” </blockquote>
                                    </div>

                                </div>
                                <div className="col-auto">

                                    <small className="text-muted">
                                    2m
                                    </small>

                                </div>
                                </div> {/* <!-- / .row --> */}

                            </a>
                            <a className="list-group-item px-0" href="#!">

                                <div className="row">
                                <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-sm">
                                    <img src="/assets/img/avatars/profiles/avatar-8.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>

                                </div>
                                <div className="col ml-n2">

                                    {/* <!-- Content --> */}
                                    <div className="small text-muted">
                                    <strong className="text-body">Grace Gross</strong> subscribed to you.
                                    </div>

                                </div>
                                <div className="col-auto">

                                    <small className="text-muted">
                                    2m
                                    </small>

                                </div>
                                </div> {/* <!-- / .row --> */}

                            </a>
                            </div>

                        </div>
                        </div> {/* <!-- / .dropdown-menu --> */}

                    </div>

                    {/* <!-- Dropdown --> */}
                    <div className="dropdown ml-4 d-xl-none d-lg-none d-md-none">

                        {/* <!-- Toggle --> */}
                        <a href="true" className="avatar avatar-sm avatar-online dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="/assets/img/avatars/profiles/avatar-2.jpg" alt="..." className="avatar-img rounded-circle" />
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
}
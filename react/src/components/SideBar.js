import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SideBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light" id="sidebar">
            <div className="container-fluid">

                {/* <!-- Toggler --> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                {/* <!-- Brand --> */}
                <a className="navbar-brand" href="/">
                <img src="/assets/img/logo_white.svg" className="navbar-brand-img mx-auto" alt="..." />
                </a>

                <div className="avatar avatar-xxl mx-auto mb-5 d-none d-xl-block d-lg-block d-md-block text-center">
                <img src="assets/img/avatars/profiles/patryk.jpg" alt="..." className="mx-auto avatar-img rounded-circle" />
                <h3 className="mt-3 header-title text-center">
                    Patryk Starzycki <i data-toggle="tooltip" title="dziala!!!">blabla</i>
                </h3>
                </div>

                {/* <!-- User (xs) --> */}
                <div className="navbar-user d-md-none">

                {/* <!-- Dropdown --> */}
                <div className="dropdown">

                    {/* <!-- Toggle --> */}
                    <a href="true" id="sidebarIcon" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="avatar avatar-sm avatar-online">
                        <img src="/assets/img/avatars/profiles/patryk.jpg" className="avatar-img rounded-circle" alt="..." />
                    </div>
                    </a>

                    {/* <!-- Menu --> */}
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="sidebarIcon">
                    <a href="profile-posts.html" className="dropdown-item">Profile</a>
                    <a href="settings.html" className="dropdown-item">Settings</a>
                    <hr className="dropdown-divider" />
                    <a href="sign-in.html" className="dropdown-item">Logout</a>
                    </div>

                </div>

                </div>

                {/* <!-- Collapse --> */}
                <div className="mt-5 collapse navbar-collapse" id="sidebarCollapse">

                {/* <!-- Form --> */}
                <form className="mt-4 mb-3 d-md-none">
                    <div className="input-group input-group-rounded input-group-merge">
                    <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="Szukaj" aria-label="Szukaj" />
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <span className="fe fe-search"></span>
                        </div>
                    </div>
                    </div>
                </form>
            {/* to FIX ! on page refresh no class Active on index */}
                {/* <!-- Navigation --> */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link @@if(page=='index.html'){active}" to="/" role="button">
                        <i className="fe fe-home"></i> Panel główny
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link @@if(page=='kupuj.html'){active}" to="/kupuj" role="button">
                        <i className="fe fe-shopping-cart"></i> Kupuj
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link @@if(page=='sprzedaj.html'){active}" to="/sprzedaj" role="button">
                        <i className="fe fe-dollar-sign"></i> Sprzedaj
                    </Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#sidebarPages" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarPages">
                        <i className="fe fe-file"></i> Pages
                    </a>
                    <div className="collapse @@if(category=='pages'){show}" id="sidebarPages">
                        <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                            <a href="#sidebarProfile" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProfile">
                            Profile
                            </a>
                            <div className="collapse @@if(subcategory=='profile'){show}" id="sidebarProfile">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                <a href="profile-posts.html" className="nav-link @@if(page=='profile-posts.html'){active}">
                                    Posts
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="profile-groups.html" className="nav-link @@if(page=='profile-groups.html'){active}">
                                    Groups
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="profile-projects.html" className="nav-link @@if(page=='profile-projects.html'){active}">
                                    Projects
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="profile-files.html" className="nav-link @@if(page=='profile-files.html'){active}">
                                    Files
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="profile-subscribers.html" className="nav-link @@if(page=='profile-subscribers.html'){active}">
                                    Subscribers
                                </a>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#sidebarProject" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProject">
                            Project
                            </a>
                            <div className="collapse @@if(subcategory=='project'){show}" id="sidebarProject">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                <a href="project-overview.html" className="nav-link @@if(page=='project-overview.html'){active}">
                                    Overview
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="project-files.html" className="nav-link @@if(page=='project-files.html'){active}">
                                    Files
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="project-reports.html" className="nav-link @@if(page=='project-reports.html'){active}">
                                    Reports
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="project-new.html" className="nav-link @@if(page=='project-new.html'){active}">
                                    New project
                                </a>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#sidebarTeam" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTeam">
                            Team
                            </a>
                            <div className="collapse @@if(subcategory=='team'){show}" id="sidebarTeam">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                <a href="team-overview.html" className="nav-link @@if(page=='team-overview.html'){active}">
                                    Overview
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="team-projects.html" className="nav-link @@if(page=='team-projects.html'){active}">
                                    Projects
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="team-members.html" className="nav-link @@if(page=='team-members.html'){active}">
                                    Members
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="team-new.html" className="nav-link @@if(page=='team-new.html'){active}">
                                    New team
                                </a>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#sidebarFeed" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarFeed">
                            Feed
                            </a>
                            <div className="collapse @@if(subcategory=='feed'){show}" id="sidebarFeed">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                <a href="feed.html" className="nav-link @@if(page=='feed.html'){active}">
                                    Platform
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="social-feed.html" className="nav-link @@if(page=='social-feed.html'){active}">
                                    Social <span className="badge badge-soft-success ml-auto">New</span>
                                </a>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="kanban.html" className="nav-link @@if(page=='kanban.html'){active}">
                            Kanban <span className="badge badge-soft-success ml-auto">New</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="orders.html" className="nav-link @@if(page=='orders.html'){active}">
                            Orders
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="settings.html" className="nav-link @@if(page=='settings.html'){active}">
                            Settings
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="invoice.html" className="nav-link @@if(page=='invoice.html'){active}">
                            Invoice
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pricing.html" className="nav-link @@if(page=='pricing.html'){active}">
                            Pricing
                            </a>
                        </li>
                        </ul>
                    </div>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#sidebarAuth" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuth">
                        <i className="fe fe-user"></i> Authentication
                    </a>
                    <div className="collapse" id="sidebarAuth">
                        <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                            <a href="#sidebarSignIn" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarSignIn">
                            Sign in
                            </a>
                            <div className="collapse" id="sidebarSignIn">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                <a href="sign-in-cover.html" className="nav-link">
                                    Cover
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="sign-in-illustration.html" className="nav-link">
                                    Illustration
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="sign-in.html" className="nav-link">
                                    Basic
                                </a>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#sidebarSignUp" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarSignUp">
                            Sign up
                            </a>
                            <div className="collapse" id="sidebarSignUp">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                <a href="sign-up-cover.html" className="nav-link">
                                    Cover
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="sign-up-illustration.html" className="nav-link">
                                    Illustration
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="sign-up.html" className="nav-link">
                                    Basic
                                </a>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#sidebarPassword" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarPassword">
                            Password reset
                            </a>
                            <div className="collapse" id="sidebarPassword">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                <a href="password-reset-cover.html" className="nav-link">
                                    Cover
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="password-reset-illustration.html" className="nav-link">
                                    Illustration
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="password-reset.html" className="nav-link">
                                    Basic
                                </a>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#sidebarError" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarError">
                            Error
                            </a>
                            <div className="collapse" id="sidebarError">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                <a href="error-illustration.html" className="nav-link">
                                    Illustration
                                </a>
                                </li>
                                <li className="nav-item">
                                <a href="error.html" className="nav-link">
                                    Basic
                                </a>
                                </li>
                            </ul>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </li>
                    <li className="nav-item d-md-none">
                    <a className="nav-link" href="#sidebarModalActivity" data-toggle="modal">
                    <span className="fe fe-bell"></span> Notifications
                    </a>
                    </li>
                </ul>

                {/* <!-- Divider --> */}
                <hr className="navbar-divider my-3" />

                {/* <!-- Heading
                <h6 className="navbar-heading">
                    Dodatkowe
                </h6>--> */}

                {/* <!-- Navigation --> */}
                <ul className="navbar-nav mb-md-4">
                    <li className="nav-item">
                    <a className="nav-link" href="#sidebarComponents" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarComponents">
                        <i className="fe fe-book-open"></i> Components
                    </a>
                    <div className="collapse @@if(category=='components'){show}" id="sidebarComponents">
                        <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                            <a href="components.html#alerts" className="nav-link">
                            Alerts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#autosizePlugin" className="nav-link">
                            Autosize
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#avatars" className="nav-link">
                            Avatars
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#badges" className="nav-link">
                            Badges
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#breadcrumb" className="nav-link">
                            Breadcrumb
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#buttons" className="nav-link">
                            Buttons
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#button-group" className="nav-link">
                            Button group
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#cards" className="nav-link">
                            Cards
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#charts" className="nav-link">
                            Charts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#dropdowns" className="nav-link">
                            Dropdowns
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#forms" className="nav-link">
                            Forms
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#icons" className="nav-link">
                            Icons
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#kanban" className="nav-link">
                            Kanban
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#lists" className="nav-link">
                            Lists
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#map" className="nav-link">
                            Map
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#modal" className="nav-link">
                            Modal
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#navs" className="nav-link">
                            Navs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#navbarExample" className="nav-link">
                            Navbar
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#page-headers" className="nav-link">
                            Page headers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#pagination" className="nav-link">
                            Pagination
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#popovers" className="nav-link">
                            Popovers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#progress" className="nav-link">
                            Progress
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#social-posts" className="nav-link">
                            Social post
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#spinners" className="nav-link">
                            Spinners
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#tables" className="nav-link">
                            Tables
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#toasts" className="nav-link">
                            Toasts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#tooltips" className="nav-link">
                            Tooltips
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#typography" className="nav-link">
                            Typography
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="components.html#utilities" className="nav-link">
                            Utilities
                            </a>
                        </li>
                        </ul>
                    </div>
                    </li>
                </ul>

                {/* <!-- Push content down --> */}
                <div className="mt-auto"></div>

                {/*@@if (demoMode) {
                // <!-- Customize -->
                <a href="#modalDemo" className="btn btn-block btn-primary mb-4" data-toggle="modal">
                    <i className="fe fe-sliders mr-2"></i> Personalizuj
                </a>
                }

                @@if (navPosition == 'sidenav') {
                // <!-- User (md) -->
                <div className="navbar-user d-none d-md-flex" id="sidebarUser">

                    <!-- Icon -->
                    <a href="#sidebarModalActivity" className="navbar-user-link" data-toggle="modal">
                    <span className="icon">
                        <i className="fe fe-bell"></i>
                    </span>
                    </a>

                    <!-- Dropup -->
                    <div className="dropup">

                     <!-- Toggle -->
                    <a href="true" id="sidebarIconCopy" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="avatar avatar-sm avatar-online">
                        <img src="/assets/img/avatars/profiles/patryk.jpg" className="avatar-img rounded-circle" alt="..." />
                        </div>
                        <h2 className="header-title">
                        Patryk Starzycki
                        </h2>
                    </a>

                     <!-- Menu -->
                    <div className="dropdown-menu" aria-labelledby="sidebarIconCopy">
                        <a href="profile-posts.html" className="dropdown-item">Profile</a>
                        <a href="settings.html" className="dropdown-item">Settings</a>
                        <hr className="dropdown-divider" />
                        <a href="sign-in.html" className="dropdown-item">Logout</a>
                    </div>

                    </div>

                    <!-- Icon -->
                    <a href="#sidebarModalSearch" className="navbar-user-link" data-toggle="modal">
                    <span className="icon">
                        <i className="fe fe-search"></i>
                    </span>
                    </a>

                </div>
                } */}

                </div>
                {/* <!-- / .navbar-collapse --> */}

            </div>
            </nav>
        )
    }
}
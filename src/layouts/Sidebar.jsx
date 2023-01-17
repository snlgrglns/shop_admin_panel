import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     employees:[]
        // }
        this.productList = this.productList.bind(this);
        this.productAdd = this.productAdd.bind(this);
        // this.viewEmployee = this.viewEmployee.bind(this);
        // this.editEmployee = this.editEmployee.bind(this);
        // this.deleteEmployee = this.deleteEmployee.bind(this);        
        // this.handleCustomerClick = this.handleCustomerClick(this)
    }
    productList= () => {
        window.location.assign('/product/list');
        // window.location.assign('/add-employee');        
        // this.context.router.history.push('/add-employee');
        // this.props.history.push('/products/');
    };
    productAdd= () => {
        window.location.assign('/product/add');
    };
    render() {
        return (
            <div>
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="../../index3.html" className="brand-link">
                    <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
                                        with font-awesome or any other icon font library */}
                            
                            
                            
                            <li className="nav-header">Products</li>                        
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.productList}>
                                    <i className="nav-icon far fa-calendar-alt" />
                                    <p>
                                    List
                                    <span className="badge badge-info right">..</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.productAdd}>
                                    <i className="nav-icon far fa fa-plus" />
                                    <p>
                                    Add
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="../gallery.html" className="nav-link">
                                    <i className="nav-icon far fa-image" />
                                    <p>
                                    Gallery
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-envelope" />
                                    <p>
                                    Mailbox
                                    <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                    <a href="../mailbox/mailbox.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Inbox</p>
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="../mailbox/compose.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Compose</p>
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="../mailbox/read-mail.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Read</p>
                                    </a>
                                    </li>
                                </ul>
                            </li>                        
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
                </aside>

            </div>
        );
    }
}

export default Sidebar;
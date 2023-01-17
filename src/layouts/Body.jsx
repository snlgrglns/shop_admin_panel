import React, { Component } from 'react';

class Body extends Component {
    render() {
        return (
            <div>
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1>Home Page</h1>
                        </div>
                        <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                        </div>
                    </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    {/* Default box */}
                    <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Title</h3>
                        <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                            <i className="fas fa-minus" /></button>
                        <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                            <i className="fas fa-times" /></button>
                        </div>
                    </div>
                    <div className="card-body">
                        This is Dashboard
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                        Footer
                    </div>
                    {/* /.card-footer*/}
                    </div>
                    {/* /.card */}
                </section>
                {/* /.content */}
            </div>
        );
    }
}

export default Body;
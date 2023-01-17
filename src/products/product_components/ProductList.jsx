import React, { Component } from 'react';
import ProductService from '../product_services/ProductService';
class ProductList extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
        // this.addEmployee = this.addEmployee.bind(this);
        this.viewProduct = this.viewProduct.bind(this);
        // this.editEmployee = this.editEmployee.bind(this);
        // this.deleteEmployee = this.deleteEmployee.bind(this);        
        // this.handleCustomerClick = this.handleCustomerClick(this)
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({products: res.data});
            console.log(res);
        });        
    }

    viewProduct= (id) =>{
        window.location.assign('/product/view/'+id);
    }

    render() {
        return (
            <div>
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1>Products</h1>
                        </div>
                        <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Products</li>
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
                    <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(
                                    product =>
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.productPrice[product.productPrice.length-1].price}</td>
                                        <td>{product.status}</td>
                                        <td>
                                            <button onClick={()=>this.viewProduct(product.id)} className='badge btn btn-success'>View</button>                                            
                                            <button style={{marginLeft: "5px"}} onClick={()=>this.deleteEmployee(product.id)} className='badge btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
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

export default ProductList;
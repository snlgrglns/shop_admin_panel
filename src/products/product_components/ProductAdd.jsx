import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Multiselect from 'multiselect-react-dropdown';
import ProductService from '../product_services/ProductService';

class ProductAdd extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            image: '',
            description: '',
            price:'',
            sizes:[],
            colors:[],
            clr:[]
        }
        this.multiselectRef = React.createRef();
        // const [colors, setColors] = useState();

        this.changeNameHandler=this.changeNameHandler.bind(this);        
        this.changeImageHandler=this.changeImageHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);        
        this.changePriceHandler = this.changePriceHandler .bind(this);
        this.changeSizesHandler = this.changeSizesHandler.bind(this);
        this.changeColorsHandler = this.changeColorsHandler.bind(this);
        this.saveProduct = this.saveProduct .bind(this);
    }

    
    saveProduct=(e)=>{
        e.preventDefault();
        const productData = new FormData();
        productData.append(
            "productImageFile",
            this.state.image,
            this.state.image.name,
          );
        // let productDetail = {name:this.state.name,description:this.state.description, status:1, productPrice:[{price: this.state.price}],productColor:this.state.colors,productSize:this.state.sizes,productImage:[{imagePath:this.state.image}]};
        let productDetail = {name:this.state.name,description:this.state.description, status:1, productPrice:[{price: this.state.price}],productColor:this.state.colors,productSize:this.state.sizes};        // alert(JSON.stringify(productDetail));
        // ProductService.createProduct(productDetail);
        productData.append("productDetail", JSON.stringify(productDetail));
        console.log(JSON.stringify(productDetail));

        ProductService.createProduct(productData).then(res=>{
            this.props.history.push('/product/list');
        });
    }

    changeNameHandler=(event) => {
        this.setState({name: event.target.value});
    }

    changeImageHandler = event => {     
        // Update the state
        this.setState({ image: event.target.files[0] });       
    };


    // changeImageHandler=(event) => {
    //     this.setState({image: event.target.value});
    // }

    changeDescriptionHandler=(event) => {
        this.setState({description: event.target.value});
    }

    changePriceHandler=(event) => {
        this.setState({price: event.target.value});
    }

    changeSizesHandler=(event) => {
        let sz =[];
        for (let i=0; i<event.length; i++) {
            sz.push({size: event[i]});
        }
        this.setState({sizes: sz});
    }

    changeColorsHandler=(event) => {
        let clr =[];
        for (let i=0; i<event.length; i++) {
            clr.push({colorName: event[i]});
        }
        this.setState({colors: clr});
    };

  render() {
    return (
      <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                {/* general form elements */}
                <div className="card card-primary">
                    <div className="card-header">
                    <h3 className="card-title">Add Product</h3>
                    </div>
                    {/* /.card-header */}
                    {/* form start */}
                    <form role="form">
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" name="name" className="form-control" id="exampleInputEmail1" placeholder="Enter Name" onChange={this.changeNameHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Image</label>
                            <input accept='image/*' className='form-control' id="upload-image-field" type="file" onChange={this.changeImageHandler}/>
                            {/* <input type="text" name="image" className="form-control" id="exampleInputEmail1" placeholder="Enter Image" onChange={this.changeImageHandler}/> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Description</label>
                            <textarea className="form-control" name="description"  id="exampleInputEmail1" placeholder="Description" onChange={this.changeDescriptionHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Price</label>
                            <input type="number" name="price" className="form-control" id="exampleInputEmail1" placeholder="Price" onChange={this.changePriceHandler}/>
                        </div>
                        <div className="form-group">
                            <label>Sizes</label>
                            <Multiselect
                                isObject={false}
                                // onKeyPressFn={function noRefCheck(){}}
                                // onRemove={function noRefCheck(){}}
                                // onSearch={function noRefCheck(){}}
                                onSelect={this.changeSizesHandler}
                                options={['XSmall', 'Small', 'Medium', 'Large', 'XLarge']}
                                />
                        </div>

                        <div className="form-group">
                            <label>Colors</label>
                            <Multiselect
                                isObject={false}
                                // onKeyPressFn={function noRefCheck(){}}
                                // onRemove={function noRefCheck(){}}
                                // onSearch={function noRefCheck(){}}
                                onSelect={this.changeColorsHandler}
                                options={['Red', 'White', 'Blue', 'Green', 'Orange', 'Black']}
                                />
                        </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                        <button type="submit" onClick={this.saveProduct} className="btn btn-primary">Submit</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>

      </div>
    )
  }
}

export default ProductAdd;
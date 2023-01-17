import React, { Component } from 'react';
import ProductService from '../product_services/ProductService';

class ProductView extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            product:{},
            colors:[],
            sizes:[],
            prices:[],
            newColor:'',
            newSize:'',
            newPrice:'',
            productImage:null,
            receivedProductImage:[],
        }
        this.deleteColor = this.deleteColor.bind(this);
        this.deleteSize = this.deleteSize.bind(this);   
        this.changeColorHandler=this.changeColorHandler.bind(this); 
        this.changeSizeHandler=this.changeSizeHandler.bind(this); 
        this.changePriceHandler=this.changePriceHandler.bind(this); 
        this.saveColor = this.saveColor.bind(this);
        this.saveSize = this.saveSize.bind(this);
        this.savePrice = this.savePrice.bind(this);
        this.changeFileHandler = this.changeFileHandler.bind(this);
    }

    changeFileHandler = event => {     
        // Update the state
        this.setState({ productImage: event.target.files[0] });       
    };

    uploadImage = () => {
        // event.preventDefault();
        const formData = new FormData();
        formData.append(
            "productImageFile",
            this.state.productImage,
            this.state.productImage.name,
          );
          formData.append("product_id", this.state.id);
         
          // Details of the uploaded file
          console.log(this.state.productImage);
          ProductService.uploadImage(formData).then(res=>{
            // this.props.history.push('/product/view/'+this.state.product.id);
            window.location.assign('/product/view/'+this.state.product.id);
        });
    }

    changeColorHandler(event){
        this.setState({newColor: event.target.value});
    }

    changeSizeHandler(event){
        this.setState({newSize: event.target.value});
    }

    changePriceHandler(event){        
        this.setState({newPrice: event.target.value});
    }

    saveColor(event){
        event.preventDefault();
        let productColor = {productId:this.state.product.id, colorName:this.state.newColor}
        ProductService.addColor(productColor).then(res=>{
            // this.props.history.push('/product/view/'+this.state.product.id);
            window.location.assign('/product/view/'+this.state.product.id);
        });
    }

    saveSize(event){
        event.preventDefault();
        let newSize = {productId:this.state.product.id, size:this.state.newSize}
        ProductService.addSize(newSize).then(res=>{
            // this.props.history.push('/product/view/'+this.state.product.id);
            window.location.assign('/product/view/'+this.state.product.id);
        });
    }

    savePrice(event){
        event.preventDefault();
        let newPrice = {productId:this.state.product.id, price:this.state.newPrice}
        ProductService.addPrice(newPrice).then(res=>{
            // this.props.history.push('/product/view/'+this.state.product.id);
            window.location.assign('/product/view/'+this.state.product.id);
        });
    }

    deleteColor(id){
        ProductService.deleteProductColor(id).then(res=>{
            this.setState({colors: this.state.colors.filter(color=>color.id!==id)});
        });
    }

    deleteSize(id){
        ProductService.deleteProductSize(id).then(res=>{
            this.setState({sizes: this.state.sizes.filter(size=>size.id!==id)});
        });
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then(res=>{
            // alert(JSON.stringify(res.data));
            this.setState({product: res.data});
            this.setState({colors: res.data.productColor});
            this.setState({sizes: res.data.productSize});
            this.setState({prices: res.data.productPrice});
            this.setState({receivedProductImage: res.data.productImage});
        });
    }

    getActiveImage(data) {
        // var data = this.state.receivedProductImage; 
        var act_img = "";
        if(data && data.length){
            var d1 = data[0]||{};
            act_img = d1.imagePath; 
            // console.log(d1);           
        }else{
            act_img = "https://cdn-icons-png.flaticon.com/512/2748/2748558.png";
        }
        // console.log(act_img);
        return act_img;
      }

    render() {
        var obj = [...this.state.prices];
                    obj.sort((a,b) => a.id - b.id);
        var last_price = obj[obj.length-1];
        var active_price="";
        var active_id="";
        for (const [key, value] of Object.entries(last_price||{})) {
            if(key=="price"){
                active_price=value;
            }  
            if(key=="id"){
                active_id=value;
            }          
        }
        return (
        <div>
        {/* Content Header (Page header) */}
        <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1>{this.state.product.name}</h1>
                </div>
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">View</li>
                </ol>
                </div>
            </div>
            </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
            {/* Default box */}
            <div className="card card-solid">
            <div className="card-body">
                <div className="row">
                <div className="col-12 col-sm-6">
                    <h3 className="d-inline-block d-sm-none">{this.state.product.name}</h3>
                    <div className="col-12">
                    <img src={this.getActiveImage(this.state.receivedProductImage)} className="product-image" alt="Product Image" />
                    </div>
                    <div className="col-12 product-image-thumbs">
                        {/* <div className="product-image-thumb active"><img src={this.state.receivedProductImage[0].imagePath} alt="Product Image" /></div> */}
                        {
                        this.state.receivedProductImage.map(
                            path =>
                            <div key={"product_img"+path.id} className="product-image-thumb"><img src={path.imagePath} alt="Product Image" /></div>
                            )
                        }
                    </div>
                    <div className="mt-8">
                    <div className="btn btn-primary btn-lg btn-flat" data-toggle="modal" data-target="#modal-addimage">
                        <i className="fas fa-plus fa-lg mr-2" /> 
                        Add Image
                    </div>
                    </div>
                </div>
                
                <div className="col-12 col-sm-6">
                    <h3 className="my-3">{this.state.product.name}</h3>
                    <p>{this.state.product.description}</p>
                    <hr />
                    <h4>Available Colors</h4>
                    <p>Click on <i className="fas fa-times" style={{color:"red"}}></i> to delete colors</p>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    { 
                    this.state.colors.map(color=>
                        <label className="btn btn-default text-center" key={color.id}>
                            <button type="button" className="remove_btn btn btn-tool" onClick={()=>this.deleteColor(color.id)} style={{color:"red", position: "absolute", right: "-5px"}}><i className="fas fa-times"></i></button>
                            <input type="radio" name="color_option" autoComplete="off" />
                            {color.colorName}
                            <br />
                            <i className={'fas fa-circle fa-2x text-'+color.colorName.toLowerCase()} />
                        </label>
                    )                    
                    }                       
                    </div>
                    <div className="mt-8">
                    <div className="btn btn-primary btn-lg btn-flat" data-toggle="modal" data-target="#modal-addcolor">
                        <i className="fas fa-plus fa-lg mr-2" /> 
                        Add Color
                    </div>
                    </div>

                    <h4 className="mt-3">Sizes <small></small></h4>
                    <p>Click on <i className="fas fa-times" style={{color:"red"}}></i> to delete Size</p>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    { 
                    this.state.sizes.map(size=>
                    <label className="btn btn-default text-center" key={size.id}>
                        <button type="button" className="remove_btn btn btn-tool" onClick={()=>this.deleteSize(size.id)} style={{color:"red", position: "absolute", right: "-5px"}}><i className="fas fa-times"></i></button>
                        <input type="radio" name="color_option" id="color_option1" autoComplete="off" />
                        {/* <span className="text-xl">S</span> */}
                        <br />
                        {size.size}
                    </label>
                    )}
                    </div>
                    <div className="mt-8">
                    <div className="btn btn-primary btn-lg btn-flat" data-toggle="modal" data-target="#modal-addsize">
                        <i className="fas fa-plus fa-lg mr-2" /> 
                        Add Size
                    </div>
                    </div>
                    <div className="bg-gray py-2 px-3 mt-4">
                    <h2 className="mb-0">${active_price}</h2>
                    <h4 className="mt-0">
                        Previous Prices:
                    </h4>
                    <h4 className="mt-0">
                    {obj.map(ob => (ob.id!=active_id)?(<small key={ob.id}>${ob.price}, </small>):""
                        )}
                    </h4>
                    </div>
                    <div className="mt-8">
                    <div className="btn btn-primary btn-lg btn-flat" data-toggle="modal" data-target="#modal-changeprice">
                        <i className="fas fa-edit fa-lg mr-2" /> 
                        Change
                    </div>
                    </div>
                    
                </div>
                </div>
                
            </div>
            {/* /.card-body */}
           <div className="modal fade" id="modal-addcolor">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Add Color</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <form role="form">
                    <div className="modal-body">
                    
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Color</label>
                                <input type="text" name="color" className="form-control" id="exampleInputEmail1" placeholder="Enter Color" onChange={this.changeColorHandler}/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.saveColor}>Save Color</button>
                    </div>
                </form>
                </div>
                {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
            {/* /.card-body */}
            <div className="modal fade" id="modal-addimage">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Add Image</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <form role="form">
                    <div className="modal-body">
                    
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Image</label>
                                <input accept='image/*' className='form-control' id="upload-image-field" type="file" onChange={this.changeFileHandler}/>
                                {/* <input type="text" name="name" className="form-control" id="exampleInputEmail1" placeholder="Enter Size" onChange={this.changeSizeHandler}/> */}
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.uploadImage}>Save Image</button>
                    </div>
                </form>
                </div>
                {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
            {/* /.card-body */}
           <div className="modal fade" id="modal-addsize">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Add Size</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <form role="form">
                    <div className="modal-body">
                    
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Size</label>
                                <input type="text" name="name" className="form-control" id="exampleInputEmail1" placeholder="Enter Size" onChange={this.changeSizeHandler}/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.saveSize}>Save Size</button>
                    </div>
                </form>
                </div>
                {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
            </div>
            {/* /.modal */}

            {/* /.card-body */}
           <div className="modal fade" id="modal-changeprice">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Change Price</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <form role="form">
                    <div className="modal-body">
                    
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Price</label>
                                <input type="number" name="price" className="form-control" id="exampleInputEmail1" placeholder="Enter Price" onChange={this.changePriceHandler}/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.savePrice}>Save Price</button>
                    </div>
                </form>
                </div>
                {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
            </div>
            {/* /.modal */}

            </div>
            {/* /.card */}
        </section>
        {/* /.content */}
        </div>

        );
    }
}

export default ProductView;
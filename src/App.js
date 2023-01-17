import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Body from './layouts/Body';
import Footer from './layouts/Footer';
import ProductList from './products/product_components/ProductList';
import ProductAdd from './products/product_components/ProductAdd';
import ProductView from './products/product_components/ProductView';
import UploadView from './products/product_components/UploadView';

function App() {
  return (
    <div className="">
      {/* <header className="App-header"> */}
        {/* <Header/> */}
        {/* <Sidebar/> */}
        {/* <Body/> */}
      {/* </header> */}
      <Router>
        <Header/>
        <Sidebar/>
          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">                
            <Switch>
              <Route path="/" exact component={Body}></Route>
              <Route path="/product/list" component={ProductList}></Route>
              <Route path="/product/add" component={ProductAdd}></Route>
              <Route path="/product/view/:id" component={ProductView}></Route>
              <Route path="/product/up" component={UploadView}></Route>
              {/* <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
              <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>               */}
              {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> */}
            </Switch>
          </div>
          {/* /.content-wrapper */}      
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

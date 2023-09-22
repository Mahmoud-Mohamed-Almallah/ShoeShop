// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import NavBar from "./Component/Navbar/NavBar";
import Product from "./product/product";
import Recommended from "./Recommended/Recommended";
import SideBar from "./SideBar/SideBar";
import Card from "./Card";
import './index.css'
//database
import products from './data'
import Cover from "./Component/Cover/Cover";
import Footer from "./Component/Footer/Footer";

function App() {
  //make 2 useState
  const [selectedCategory, setSelecteCategory] = useState(null);
    //........Input Filter.......
  const [query, setQuery] = useState("");

//---------------------
  function InputChangeHandler (event){
    setQuery(event.target.value);
  }

  const filteredItem = products.filter((product) => 
  product.title.toLowerCase().indexOf(query.toLocaleLowerCase())!== -1);


    //........Radio Filter.......
    function ChangeHandler(event){
      setSelecteCategory(event.target.value)
    }

     //........Buttons Filter.......
    function ClickHandler(event){
      setSelecteCategory(event.target.value)
    }

    function filteredData(products, selected, query){
      let filteredProducts = products;

      //filtering Input items
      if(query){
        filteredProducts = filteredItem;
      }

      //selected filter
      if(selected){
        filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) =>
        category === selected || color === selected || 
        company === selected || newPrice === selected ||
         title === selected );
      }

      return filteredProducts.map(({img, title, star, reviews,prevPrice, newPrice}) => (
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      />
      )
      );
    }

  const result= filteredData(products, selectedCategory, query);

  return (
    <>
    <NavBar />
    <Cover/>
    <SideBar ChangeHandler={ChangeHandler}/>
    {/* value and inputChange for the search */}
    <Recommended value={query} InputChangeHandler={InputChangeHandler} ClickHandler={ClickHandler} />
    <Product result={result}/>
    <Footer/>
    </>
  );
}

export default App;

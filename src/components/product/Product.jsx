import "./product.css";

const Product = ({img,desc}) => {
  return (
  
    <div className="p">

      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
    
        <img src={img} alt="" className="p-img" />
   
        <br/>
     
    </div>
    
    
  );
};

export default Product;
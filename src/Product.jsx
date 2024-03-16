import PropTypes from 'prop-types';
const Product = ({product,handelProduct}) => {
    const {title,price,description,image} = product;
    // console.log(handelProduct);
    return (
        <div>
            <div className='card'>
            <img src={image} alt=''/>
            <h1>{title.slice(0,20)}</h1>
            <p>{description.slice(0,100)}</p>
            <div className='card-footer'>
            <h1>{price}</h1>
              <button onClick={()=>handelProduct(product)} className='add-btn'>Add to Cart</button>
            </div>
          </div>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object.isRequired,
    handelProduct : PropTypes.func.isRequired
}
export default Product;
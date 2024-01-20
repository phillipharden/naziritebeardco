import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const imageStyle = {
    transition: 'background-image 0.5s ease', // Add transition property for background-image
    backgroundImage: hovered ? `url(${product.imageHover})` : `url(${product.image})`, // Set background-image based on hover state
  };

  
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        {/* <Card.Img src={product.image} variant="top" /> */}
        <Card.Img
        src={hovered ? product.imageHover : product.image}
        variant="top"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        className="product-img"
      />
      </Link>
      <Card.Body className="">
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

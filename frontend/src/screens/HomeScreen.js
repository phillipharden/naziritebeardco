import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
// import products from '../products';
import Product from '../components/Product';
import Benefits from '../components/Benefits';
import Banner from '../components/Banner';
import axios from 'axios';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  //   const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {/* { isLoading ? (<Loader />) : error ? (<Message variant='danger'>{ error?.data?.message || error.error} </Message>) : (<>   */}
      <Row className="my-5">
        <Col>
          <Banner />
        </Col>
      </Row>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      <Row className="my-5">
        <Benefits />
      </Row>
       {/* ) } //{' '} */}
    </>
  );
};

export default HomeScreen;

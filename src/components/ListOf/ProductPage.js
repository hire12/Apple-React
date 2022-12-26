import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Four04 from './Four04';

function ProductPage() {
    const [product, setProduct] = useState([]);
    console.log(useParams());
    const { productID } = useParams();

    useEffect(() => {
        fetch("/iphonse.json")
          .then((res) => res.json())
          .then((data) => {
            const prodictList = data.products;
            const SingleProduct = prodictList.filter(
                (product) => product.product_url === productID
            );
            setProduct(SingleProduct)
          })
          .catch(() => console.log("Error: Unable to Catch"))
      }, [productID]);

      if (product.length) {
        return (
            <div>
              <section className="internal-page-wrapper top-100">
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12">
                      <div className="title-wraper bold">Iphones</div>
                      <div className="brief-description">
                        The best for the brightest.
                      </div>
                    </div>
                  </div>
                  {product?.map((product) => {
                    let id = product.product_url;
                    let title = product.product_name;
                    let img = product.product_img;
                    let Brief = product.product_brief_description;
                    let StartPrice = product.starting_price;
                    let PriceRange = product.price_range;
                    let productPage = "/iphone/" + id;
                    let detail = product.product_description;
        
        
                    let productDiv = (
                      <div
                        key={id}
                        className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
                      >
                        <div className={`col-sm-12 col-md-6 my-auto `}>
                          <div className="product-title">{title}</div>
                          <div className="product-brief">{Brief}</div>
                          <div className="starting-price">
                            {`Starting at ${StartPrice}`}
                          </div>
                          <div className="monthly-price">{PriceRange}</div>
                          <div className="monthly-price">{detail}</div>
                          <div className="links-wrapper">
                            <ul>
                              <li>
                              </li>
                            </ul>
                          </div>
                        </div>
        
                        <div className={`col-sm-12 col-md-6`}>
                          <div className="prodict-image">
                            <img src={img} alt="" />
                          </div>
                        </div>
                      </div>
                    );
                    return productDiv;
                  })}
                </div>
              </section>
            </div>
          );
    }else {
        return <Four04 />;
    }
        
      }
    

export default ProductPage
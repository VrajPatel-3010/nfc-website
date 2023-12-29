import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "../Service.css";
import AuthService from "../services/auth.service";
import service from "../services/service";
// const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
const CLIENT_ID = "AYcGnNjmoAfp1ShB0SAfITeAkHYdHh4EcF3tCPg3gG3dTnnX49TtY7FcKqiVPRKQPIScn5cX5XzT61_9";
const APP_SECRET = "";
export default function PaymentPage() {
  const navigate = useNavigate();

  //Retrive Id
  const user = AuthService.getCurrentUser();
  let loginId = ""
  let cardType = 0

  const [price, setPrice] = useState();
  const [themeId, setthemeId] = useState();
  const [cardPrice, setCardPrice] = useState();
  const [cardTypeName, setCardTypeName] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [isLogoAdded, setIsLogoAdded] = useState(false);
  const [isFobAdded, setIsFobAdded] = useState(false)
  const [isSmartBtnAdded, setIsSmartBtnAdded] = useState(false)



  if (user) {
    loginId = user.id
  }
  // useEffect(() => {
  //     service.getIdList(loginId).then(resp => {
  //       if (resp.data.length > 0) {
  //         setPrice(resp.data[0].price)
  //         setthemeId(resp.data[0].themeId)
  //       }
  //     })
  //     if (price == 0 || price < 0) {
  //       alert("Please select the theme then do the Payment !");
  //       navigate('/dashboard/products');
  //     }
  // });

  const initialOptions = {
    clientId: CLIENT_ID,
    currency: "CAD",
    intent: "capture",
};



  useEffect(() => {
    service.getCardInfo(loginId).then(resp => {
      if (resp.data != undefined) {
        console.log(resp.data)
        setCardPrice(resp.data.cardPrice)
        setFirstName(resp.data.firstName)
        setLastName(resp.data.lastName)
        setIsLogoAdded(resp.data.isLogoAdded)
        setIsFobAdded(resp.data.isFobAdded)
        setIsSmartBtnAdded(resp.data.isSmartBtnAdded)

        cardType = resp.data.cardType
        if (cardType == 1) {
          setCardTypeName("Gold Foil on Matte Black")
        }
        if (cardType == 2) {
          setCardTypeName("Gold Foil on Ceramic White")
        }
        if (cardType == 3) {
          setCardTypeName("Silver Foil on Matte Black")
        }
        if (cardType == 0 || cardType < 0) {
          alert("Please select the Card then do the Payment !");
          navigate('/dashboard/CardType');
        }

        setPrice(resp.data.themePrice)
        setthemeId(resp.data.themeId)
        if (price == 0 || price < 0) {
          alert("Please select the theme then do the Payment !");
          navigate('/dashboard/products');
        }
      }
    })
  }, []);


  function sendConfirmationEmail(loginId){
    service.sendConfirmationEmail(loginId, window.location.origin).then(resp => {
      if (resp.data != undefined) {
      }
    })
  };
  //Paypal Starts
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  // creates a paypal order
  let totalAmoutTobePaid = isLogoAdded ? parseInt(price) + parseInt(cardPrice) + 20 : parseInt(price) + parseInt(cardPrice);
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "NFC Card Order",
          amount: {
            currency_code: "CAD",
            value: 1,
          },
        },
      ],
    }).then((orderID) => {
      setOrderID(orderID);
      return orderID;
    });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      sendConfirmationEmail(loginId);
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!! Check you Email for QR code !");
      console.log('Order successful . Your order id is--', orderID);
    }
  }, [success]);
  //Ends

  return (
    <div>
      <h3>Pay Here</h3>
      <div class="paymentcontainer mt-5">

        <div class="hero">
          <img class="hero_img" src="/static/payment.jpg" alt="" />
        </div>
        <div class="paymentcontent mt-2">
          <div class="text_content mt-3 text-center">
            <h1>Order Summary</h1>
            <p>{firstName} {lastName}</p>
          </div>

          <div className="container woocommerce row row-large row-divided">
            <div className="col large-7 pb-0 ">
              <form className="woocommerce-cart-form" method="post">
                <div className="cart-wrapper sm-touch-scroll">
                  <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th className="product-price">Quantity</th>
                        <th className="product-quantity">Description</th>
                        <th className="product-subtotal">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="woocommerce-cart-form__cart-item cart_item">

                        <td className="product-price" data-title="Price">
                          <span className="woocommerce-Price-amount amount"><bdi> 1</bdi></span>						</td>
                        <td className="product-quantity" data-title="Quantity">
                          <div className="quantity buttons_added">
                            <label className="screen-reader-text" htmlFor="quantity_649dd51a7fb41">Theme {themeId}</label>
                          </div>
                        </td>
                        <td className="product-subtotal" data-title="Subtotal">
                          <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span> {price}</bdi></span>						</td>
                      </tr>
                      <tr className="woocommerce-cart-form__cart-item cart_item">
                        <td className="product-price" data-title="Price">
                          <span className="woocommerce-Price-amount amount"><bdi> 1</bdi></span>						</td>
                        <td className="product-quantity" data-title="Quantity">
                          <div className="quantity buttons_added">
                            <label className="screen-reader-text" htmlFor="quantity_649dd51a7fb41">{cardTypeName}</label>
                          </div>
                        </td>
                        <td className="product-subtotal" data-title="Subtotal">
                          <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span> 69</bdi></span>						</td>
                      </tr>
                      {/* {isLogoAdded && <tr className="woocommerce-cart-form__cart-item cart_item">
                        <td className="product-price" data-title="Price">
                          <span className="woocommerce-Price-amount amount"><bdi> 1</bdi></span>						</td>
                        <td className="product-quantity" data-title="Quantity">
                          <div className="quantity buttons_added">
                            <label className="screen-reader-text" htmlFor="quantity_649dd51a7fb41">Logo Added on Card</label>
                          </div>
                        </td>
                        <td className="product-subtotal" data-title="Subtotal">
                          <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span> 30</bdi></span>						</td>
                      </tr>} */}

                      {/* {isFobAdded && <tr className="woocommerce-cart-form__cart-item cart_item">
                        <td className="product-price" data-title="Price">
                          <span className="woocommerce-Price-amount amount"><bdi> 1</bdi></span>						</td>
                        <td className="product-quantity" data-title="Quantity">
                          <div className="quantity buttons_added">
                            <label className="screen-reader-text" htmlFor="quantity_649dd51a7fb41">NFC Key fob</label>
                          </div>
                        </td>
                        <td className="product-subtotal" data-title="Subtotal">
                          <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span> 10</bdi></span>						</td>
                      </tr>} */}

                      {/* {isSmartBtnAdded && <tr className="woocommerce-cart-form__cart-item cart_item">
                        <td className="product-price" data-title="Price">
                          <span className="woocommerce-Price-amount amount"><bdi> 1</bdi></span>						</td>
                        <td className="product-quantity" data-title="Quantity">
                          <div className="quantity buttons_added">
                            <label className="screen-reader-text" htmlFor="quantity_649dd51a7fb41">NFC smart button</label>
                          </div>
                        </td>
                        <td className="product-subtotal" data-title="Subtotal">
                          <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span> 10</bdi></span>						</td>
                      </tr>} */}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            <div className="cart-collaterals large-5 col pb-0">
              <div className="cart-sidebar col-inner ">
                <div className="cart_totals ">
                  <table cellSpacing={0}>
                    <thead>
                      <tr>
                        <th className="product-name" colSpan={2}>Totals</th>
                      </tr>
                    </thead>
                  </table>
                  <h2>Totals</h2>
                  <table cellSpacing={0} className="shop_table shop_table_responsive">
                    <tbody><tr className="cart-subtotal">
                      <th>Subtotal</th>
                      <td data-title="Subtotal"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span> {parseInt(price) + parseInt(cardPrice)}</bdi></span></td>
                    </tr>
                      <tr className="woocommerce-shipping-totals shipping ">
                        <td className="shipping__inner" colSpan={2}>
                          <table className="shipping__table ">
                            <tbody>
                              <tr>
                                <th>Shipping</th>
                                <td data-title="Shipping">
                                  <ul id="shipping_method" className="shipping__list woocommerce-shipping-methods">
                                    <li className="shipping__list_item">
                                      <input type="hidden" name="shipping_method[0]" data-index={0} id="shipping_method_0_free_shipping5" defaultValue="free_shipping:5" className="shipping_method" /><label className="shipping__list_label" htmlFor="shipping_method_0_free_shipping5">Free (5-7 Business Days)</label>									</li>
                                  </ul>
                                  <p className="woocommerce-shipping-destination">
                                    Shipping options will be updated during checkout.
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr className="tax-total">
                        <th>Tax <small>(estimated for Canada)</small></th>
                        <td data-title="Tax"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>0.00</bdi></span></td>
                      </tr>
                      <tr className="order-total">
                        <th>Total</th>
                        <td data-title="Total"><strong><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span> {isLogoAdded ? parseInt(price) + parseInt(cardPrice) + 20 : parseInt(price) + parseInt(cardPrice)}</bdi></span></strong> </td>
                      </tr>
                    </tbody></table>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div className="p-5">
          <PayPalScriptProvider options={initialOptions}>
            <div>                
              <br></br>
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                />
            </div>
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
}

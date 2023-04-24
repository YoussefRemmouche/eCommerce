import React, { useState } from "react";
import styles from "./checkout.module.css";
import Menu from "../../components/Menu/menu";
import { Banner } from "../../components/Banner/banner";
import PagesFooter from "../../components/Footer/footer";
const BillingDetail = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit"); // initialize payment method state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    town: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additional_info: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <>
      <Menu />
      <Banner title="Checkout" />
      <div>
        <h2 style={{ marginLeft: "30px" }}>Billing Detail</h2>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ width: "40%" }}>
            <div className="billing-details-page">
              <form className="billing-details-form">
                <div className={styles.checkoutNames}>
                  <div className={styles.checkoutName}>
                    <p htmlFor="firstName">First Name</p>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className={styles.checkoutSurname}>
                    <p htmlFor="lastName">Last Name</p>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                <p htmlFor="companyName">Company Name (Optional)</p>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleFormChange}
                />
                <p htmlFor="country">Country</p>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleFormChange}
                >
                  <option value="">Select a Country</option>
                  <option value="Antrim">Antrim</option>
                  <option value="Armagh">Armagh</option>
                  <option value="Carlow">Carlow</option>
                  <option value="Cavan">Cavan</option>
                  <option value="Clare">Clare</option>
                </select>
                <p htmlFor="streetAddress">Street Address</p>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleFormChange}
                />
                <p htmlFor="town">Town</p>
                <input
                  type="text"
                  id="town"
                  name="town"
                  value={formData.town}
                  onChange={handleFormChange}
                />
                <p htmlFor="province">Province</p>
                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleFormChange}
                >
                  <option value="">Select a Province</option>
                  <option value="Connacht">Connacht</option>
                  <option value="Leinster">Leinster</option>
                  <option value="Munster">Munster</option>
                  <option value="Ulster">Ulster</option>
                </select>
                <p htmlFor="zipCode">Zip Code</p>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleFormChange}
                />
                <p htmlFor="phone">Phone</p>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                />
                <p htmlFor="email">Email</p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                />
                <br />
                <br />
                <input
                  type="text"
                  id="additional_info"
                  name="additional_info"
                  value={formData.additional_info}
                  onChange={handleFormChange}
                  placeholder="Additional Information"
                />
                <br />
                <br />
              </form>
            </div>
          </div>
          <div style={{ width: "40%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Product </h3> <h4>Subtotal</h4>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Asgaard sofa X 1</p>
              <p>Rs. 250,000.00</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Subtotal</p>
              <p>Rs. 250,000.00</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>
                <b>Total</b>
              </p>
              <p>
                <b>Rs. 250,000.00</b>
              </p>
            </div>

            <div className={styles.border}></div>

            <label>
              <input
                style={{ width: "auto" }}
                type="radio"
                value="credit"
                checked={paymentMethod === "credit"}
                onChange={handlePaymentMethodChange}
              />
              Direct Bank Transfer
            </label>
            <br />
            {paymentMethod === "credit" && (
              <div>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </div>
            )}

            <label>
              <input
                style={{ width: "auto" }}
                type="radio"
                value="transfer"
                checked={paymentMethod === "transfer"}
                onChange={handlePaymentMethodChange}
              />
              Direct Bank Transfer
            </label>
            <br />
            {paymentMethod === "transfer" && (
              <div>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </div>
            )}
            <label>
              <input
                style={{ width: "auto" }}
                type="radio"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={handlePaymentMethodChange}
              />
              Pay On Delivery
            </label>
            <br />

            {paymentMethod === "paypal" && (
              <div>Make your payment when the item is delivered</div>
            )}
            <br />
            <br />
            <div>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </div>
            <br />

            <button className={styles.placeOrderButton}>Place Order</button>
          </div>
        </div>
      </div>
      <PagesFooter />
    </>
  );
};

export default BillingDetail;

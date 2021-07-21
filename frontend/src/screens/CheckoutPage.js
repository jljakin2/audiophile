// third-party
import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

// components
import BackButton from "../components/Buttons/BackButton";
import Text from "../components/Text";
import CheckoutCartItem from "../components/CheckoutCartItem";
import ButtonSolid from "../components/Buttons/ButtonSolid";
import CashExchange from "../components/Icons/CashExchange";

// redux actions
import { createOrder } from "../actions/orderActions";
import { removeAllItemsFromCart } from "../actions/cartActions";
import { handleLockBody, handleOrderModal } from "../actions/visibleActions";

// helpers
import validateForm from "../helpers/validateForm";
import { formatCheckoutPrice } from "../helpers/helperFunctions";
import theme from "../theme/theme";

// ===== START OF STYLING =====
const Background = styled.div`
  background: ${({ theme }) => theme.grey};

  width: 100%;
  height: 100%;
  padding-bottom: 8.8125rem;
`;

const PageContainer = styled.div`
  padding: 0 10.3125rem;

  // 900px
  @media only screen and (max-width: 56.25em) {
    padding: 0 2.5rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    padding: 0 1.5rem;
  }
`;

const ContentContainer = styled.form`
  display: grid;
  grid-template:
    "checkout-form checkout-form summary" auto
    "checkout-form checkout-form ."
    / 1fr 1fr 1fr;
  grid-column-gap: 1.875rem;

  width: 100%;
  height: 100%;

  // 900px
  @media only screen and (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
  }
`;

const CheckoutFormContainer = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;

  grid-area: checkout-form;

  padding: 3.375rem 3rem 3rem 3rem;

  // 900px
  @media only screen and (max-width: 56.25em) {
    display: flex;
    flex-direction: column;

    padding: 3.375rem 1.71875rem 1.71875rem 1.71875rem;
    margin-bottom: 2rem;
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    padding: 1.5rem 1.5rem 2rem 1.5rem;
  }
`;

const SummaryContainer = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;

  grid-area: summary;

  padding: 2rem;
`;

const FormControl = styled.div`
  width: 100%;
  margin-bottom: 3.3125rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    margin-bottom: 2rem;
  }
`;

const FormContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - 0.5rem);

  // 450px
  @media only screen and (max-width: 28.125em) {
    flex-basis: 100%;
  }
`;

const RadioContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 0.5rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-basis: calc(50% - 0.5rem);

  padding: 1.5rem 1.5rem 1.5rem 3.25rem;

  &:hover {
    border: 1px solid ${({ theme }) => theme.orange};
  }

  // 450px
  @media only screen and (max-width: 28.125em) {
    flex-basis: 100%;
  }
`;

const StyledLabel = styled.label`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.black};
  letter-spacing: 0.21px;
  font-weight: 700;

  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 8px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.black};
  cursor: pointer;
  caret-color: ${({ theme }) => theme.orange};

  padding: 1.5rem;

  &:hover {
    border: 1px solid ${({ theme }) => theme.orange};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.orange};
  }

  &::placeholder {
    opacity: 0.4;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.black};
    letter-spacing: -0.25px;
  }
`;

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const CostCalculationContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 2rem;
`;

const Calculation = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 1rem;
`;

const RadioLabel = styled.label`
  cursor: pointer;

  position: relative;

  & input {
    display: none;
  }

  & input:checked ~ span::after {
    display: block;
  }
`;

const CustomCheck = styled.span`
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: -2.25rem;
  transform: translateY(-50%);

  width: 1.25rem;
  height: 1.25rem;

  &::after {
    content: "";
    background: ${({ theme }) => theme.orange};
    border-radius: 50%;

    display: none;
    position: absolute;
    top: 50%;
    left: 0.25rem;
    transform: translateY(-50%);

    width: 0.625rem;
    height: 0.625rem;
  }
`;

const PaymentInfoContainer = styled.div`
  margin-top: 1rem;
`;

const CashDeliveryContainer = styled.div`
  display: flex;
  align-items: center;

  // 450px
  @media only screen and (max-width: 28.125em) {
    flex-direction: column;

    margin-top: 2rem;
  }
`;

const LabelContainer = styled.div`
  display: flex;
`;

const Error = styled.small`
  color: ${({ theme }) => theme.error};
  font-size: 0.75rem;
  letter-spacing: 0.21px;
  font-weight: 700;

  margin-left: auto;
`;
// ===== END OF STYLING =====

const CheckoutPage = ({ history }) => {
  // keep track of form field values
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentType: "e-money",
    eMoneyNum: "",
    eMoneyPin: "",
  });

  // keep track of any errors
  const [errors, setErrors] = useState({});

  // media query for mobile
  const isMobile = useMediaQuery({
    query: "(max-width: 450px)",
  });

  // set dispatch in order to call actions later
  const dispatch = useDispatch();
  // get redux state to allow order modal and locking of body to occur
  const visible = useSelector(state => state.visible);
  const { showModal, lockBody } = visible;

  // get shopping cart info from redux store
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  // cost calculation variables and helper functions for cost information
  const costForAllCartItems =
    cartItems < 1
      ? 0
      : cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const totalCost = formatCheckoutPrice(costForAllCartItems);
  const shippingCost = 50;
  const vatCost = formatCheckoutPrice(costForAllCartItems * 0.2);

  const grandTotal = formatCheckoutPrice(
    costForAllCartItems + shippingCost + costForAllCartItems * 0.2
  );

  const totalForOrder =
    costForAllCartItems + shippingCost + costForAllCartItems * 0.2;

  // take only the needed fields out of each item in the cart to make a list
  // of the items in the order
  const orderItems = cartItems.map(item => {
    return {
      name: item.name,
      image: item.image,
      price: item.price,
      qty: Number(item.qty),
    };
  });

  const onFormSubmit = e => {
    /**
     * when the checkout form is submitted:
     * 1. check form fields for errors
     * 2. if there aren't any errors, create a new order
     * 3. once order is created, remove all items from cart, and lock body and show order modal
     */
    e.preventDefault();

    // grab the relevant fields from our local state values object that tracks the form fields
    const { fullName, email, paymentType } = values;

    // use the form validation helper to see if there are errors, and then set the local errors state with the
    // errors object that comes back from the validation helper
    const formErrors = validateForm(values);
    setErrors(formErrors);

    // create order
    if (Object.keys(formErrors).length === 0) {
      dispatch(
        createOrder({
          orderItems,
          fullName,
          email,
          paymentType,
          grandTotal: totalForOrder,
        })
      );

      // remove all cart items because the order has been created so the cart items aren't needed
      dispatch(removeAllItemsFromCart());

      // update these states in order to lock the modal and show the order modal
      dispatch(handleOrderModal(showModal));
      dispatch(handleLockBody(lockBody));
    }
  };

  const handleChange = event => {
    /**
     * helper function used to keep the local field states updated with the field values
     */

    // destructure name and value info from the event object.
    // ! it is super important that the name of the input field and the name of the local state for the field value are the same,
    // ! otherwise, the state and input field won't update each other
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // styles for field errors
  const errorLabelStyling = { color: `${theme.error}` };
  const errorInputStyling = { border: `2px solid ${theme.error}` };

  return (
    <Background>
      <PageContainer>
        <BackButton history={history} />
        <ContentContainer onSubmit={onFormSubmit}>
          <CheckoutFormContainer>
            <Text type="heading3" content="Checkout" mb="2.5625rem" />
            <div>
              {/*====== billing info section =======*/}
              <FormControl>
                <Text
                  type="checkoutFormHeader"
                  content="Billing Details"
                  color={theme.orange}
                  mb="1rem"
                />
                <FormContent>
                  <InputContainer>
                    <LabelContainer>
                      <StyledLabel
                        htmlFor="fullName"
                        style={errors.fullName && errorLabelStyling}>
                        Name
                      </StyledLabel>
                      {errors.fullName && <Error>{errors.fullName}</Error>}
                    </LabelContainer>
                    <StyledInput
                      id="fullName"
                      type="text"
                      name="fullName"
                      placeholder="Alexei Ward"
                      value={values.fullName}
                      onChange={handleChange}
                      style={errors.fullName && errorInputStyling}
                    />
                  </InputContainer>
                  <InputContainer>
                    <LabelContainer>
                      <StyledLabel
                        htmlFor="email"
                        style={errors.email && errorLabelStyling}>
                        Email
                      </StyledLabel>
                      {errors.email && <Error>{errors.email}</Error>}
                    </LabelContainer>
                    <StyledInput
                      id="email"
                      type="text"
                      name="email"
                      placeholder="alexei@mail.com"
                      value={values.email}
                      onChange={handleChange}
                      style={errors.email && errorInputStyling}
                    />
                  </InputContainer>
                  <InputContainer>
                    <LabelContainer>
                      <StyledLabel
                        htmlFor="phone"
                        style={errors.phone && errorLabelStyling}>
                        Phone Number
                      </StyledLabel>
                      {errors.phone && <Error>{errors.phone}</Error>}
                    </LabelContainer>
                    <StyledInput
                      id="phone"
                      type="text"
                      name="phone"
                      placeholder="+1 202-555-0136"
                      value={values.phone}
                      onChange={handleChange}
                      style={errors.phone && errorInputStyling}
                    />
                  </InputContainer>
                </FormContent>
              </FormControl>

              {/*====== shipping info section =======*/}
              <FormControl>
                <Text
                  type="checkoutFormHeader"
                  content="Shipping Info"
                  color={theme.orange}
                  mb="1rem"
                />
                <FormContent>
                  <InputContainer style={{ flexBasis: "100%" }}>
                    <LabelContainer>
                      <StyledLabel
                        htmlFor="address"
                        style={errors.address && errorLabelStyling}>
                        Address
                      </StyledLabel>
                      {errors.address && <Error>{errors.address}</Error>}
                    </LabelContainer>
                    <StyledInput
                      id="address"
                      type="text"
                      name="address"
                      placeholder="1137 Williams Avenue"
                      value={values.address}
                      onChange={handleChange}
                      style={errors.address && errorInputStyling}
                    />
                  </InputContainer>
                  <InputContainer>
                    <LabelContainer>
                      <StyledLabel
                        htmlFor="zip"
                        style={errors.zip && errorLabelStyling}>
                        Zip Code
                      </StyledLabel>
                      {errors.zip && <Error>{errors.zip}</Error>}
                    </LabelContainer>
                    <StyledInput
                      id="zip"
                      type="text"
                      name="zip"
                      placeholder="10001"
                      value={values.zip}
                      onChange={handleChange}
                      style={errors.zip && errorInputStyling}
                    />
                  </InputContainer>
                  <InputContainer>
                    <LabelContainer>
                      <StyledLabel
                        htmlFor="city"
                        style={errors.city && errorLabelStyling}>
                        City
                      </StyledLabel>
                      {errors.city && <Error>{errors.city}</Error>}
                    </LabelContainer>
                    <StyledInput
                      id="city"
                      type="text"
                      name="city"
                      placeholder="New York"
                      value={values.city}
                      onChange={handleChange}
                      style={errors.city && errorInputStyling}
                    />
                  </InputContainer>
                  <InputContainer>
                    <LabelContainer>
                      <StyledLabel
                        htmlFor="country"
                        style={errors.country && errorLabelStyling}>
                        Country
                      </StyledLabel>
                      {errors.country && <Error>{errors.country}</Error>}
                    </LabelContainer>
                    <StyledInput
                      id="country"
                      type="text"
                      name="country"
                      placeholder="United States"
                      value={values.country}
                      onChange={handleChange}
                      style={errors.country && errorInputStyling}
                    />
                  </InputContainer>
                </FormContent>
              </FormControl>

              {/*====== payment info section =======*/}
              <FormControl>
                <Text
                  type="checkoutFormHeader"
                  content="Payment Details"
                  color={theme.orange}
                  mb="1rem"
                />
                <FormContent>
                  <RadioContainer>
                    <RadioLabel htmlFor="e-money">
                      <input
                        id="e-money"
                        type="radio"
                        name="paymentType"
                        value="e-money"
                        checked={values.paymentType === "e-money"}
                        onChange={handleChange}
                      />
                      <CustomCheck />
                      e-Money
                    </RadioLabel>
                  </RadioContainer>

                  <RadioContainer>
                    <RadioLabel htmlFor="cash">
                      <input
                        id="cash"
                        type="radio"
                        name="paymentType"
                        value="cash"
                        checked={values.paymentType === "cash"}
                        onChange={handleChange}
                      />
                      <CustomCheck />
                      Cash on Delivery
                    </RadioLabel>
                  </RadioContainer>
                </FormContent>
                <PaymentInfoContainer>
                  {/* conditional check to show correct fields depending on which radio button is selected */}
                  {values.paymentType === "e-money" ? (
                    <FormContent>
                      <InputContainer>
                        <LabelContainer>
                          <StyledLabel
                            htmlFor="e-money-num"
                            style={errors.eMoneyNum && errorLabelStyling}>
                            e-Money Number
                          </StyledLabel>
                          {errors.eMoneyNum && (
                            <Error>{errors.eMoneyNum}</Error>
                          )}
                        </LabelContainer>
                        <StyledInput
                          id="e-money-num"
                          type="text"
                          placeholder="238521993"
                          name="eMoneyNum"
                          value={values.eMoneyNum}
                          onChange={handleChange}
                          style={errors.eMoneyNum && errorInputStyling}
                        />
                      </InputContainer>
                      <InputContainer>
                        <LabelContainer>
                          <StyledLabel
                            htmlFor="pin"
                            style={errors.eMoneyPin && errorLabelStyling}>
                            e-Money PIN
                          </StyledLabel>
                          {errors.eMoneyPin && (
                            <Error>{errors.eMoneyPin}</Error>
                          )}
                        </LabelContainer>
                        <StyledInput
                          id="pin"
                          type="text"
                          placeholder="6891"
                          name="eMoneyPin"
                          value={values.eMoneyPin}
                          onChange={handleChange}
                          style={errors.eMoneyPin && errorInputStyling}
                        />
                      </InputContainer>
                    </FormContent>
                  ) : (
                    <CashDeliveryContainer>
                      <CashExchange />
                      <Text
                        type="body"
                        content="The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled."
                        opacity="0.5"
                        ml={isMobile ? "0rem" : "2rem"}
                        mt={isMobile ? "1.5rem" : "0rem"}
                      />
                    </CashDeliveryContainer>
                  )}
                  {/* ===== end of conditional check ===== */}
                </PaymentInfoContainer>
              </FormControl>
            </div>
          </CheckoutFormContainer>

          {/* ===== SUMMARY Section ===== */}
          <SummaryContainer>
            <Text type="heading6" content="Summary" mb="2.125rem" />
            {/* ===== start of conditional check ===== */}
            {/* we are checking whether there are order items. if so,
                show the summary, otherwise, just show blank summary section  */}
            {cartItems.length > 0 && (
              <>
                <CartItemsContainer>
                  {cartItems.map(item => {
                    return <CheckoutCartItem item={item} mb="1.5rem" />;
                  })}
                </CartItemsContainer>
                <CostCalculationContainer>
                  <Calculation>
                    <Text type="heading6" content="Total" opacity="0.5" />
                    <Text type="heading6" content={totalCost} />
                  </Calculation>
                  <Calculation>
                    <Text type="heading6" content="Shipping" opacity="0.5" />
                    <Text type="heading6" content={`$${shippingCost}`} />
                  </Calculation>
                  <Calculation>
                    <Text
                      type="heading6"
                      content="Vat (Included)"
                      opacity="0.5"
                    />
                    <Text type="heading6" content={vatCost} />
                  </Calculation>
                  <Calculation style={{ marginTop: ".5rem" }}>
                    <Text type="heading6" content="Grand Total" opacity="0.5" />
                    <Text
                      type="heading6"
                      content={grandTotal}
                      color={theme.orange}
                    />
                  </Calculation>
                </CostCalculationContainer>
                <div>
                  <ButtonSolid
                    form="checkout-form"
                    type="button"
                    text="Complete Order"
                    bgColor={theme.orange}
                    hoverBgColor={theme.lightOrange}
                  />
                </div>
              </>
            )}
            {/* ===== end of conditional check ===== */}
          </SummaryContainer>
        </ContentContainer>
      </PageContainer>
    </Background>
  );
};

export default withTheme(CheckoutPage);

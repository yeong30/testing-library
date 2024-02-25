import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function OrderSummaryForm() {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const changeCheckboxHandler = (ele) => {
    setIsBtnDisabled(!ele.target.checked);
  };
  return (
    <Form>
      <Form.Group>
        <Form.Check
          checked={!isBtnDisabled}
          onChange={changeCheckboxHandler}
          type="checkbox"
          id="user-agree"
        ></Form.Check>
        <label htmlFor="user-agree">user condition agree </label>
        <Button disabled={isBtnDisabled}>confrim order</Button>
      </Form.Group>
    </Form>
  );
}
export default OrderSummaryForm;

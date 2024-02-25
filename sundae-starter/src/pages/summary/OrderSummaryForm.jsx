import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function OrderSummaryForm() {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const changeCheckboxHandler = (ele) => {
    setIsBtnDisabled(!ele.target.checked);
  };

  const popver = (
    <Popover id="popover">
      <Popover.Body>실제 아이스크림은 배달되지 않습니다.</Popover.Body>
    </Popover>
  );

  const checkboxLable = (
    <span>
      해당
      <OverayTrigger overlay={popver}>
        <span>약관</span>
      </OverayTrigger>
      을 모두 읽었으며 동의합니다.
    </span>
  );

  return (
    <Form>
      <Form.Group>
        <Form.Check
          checked={!isBtnDisabled}
          onChange={changeCheckboxHandler}
          type="checkbox"
          id="user-agree"
          label={checkboxLable}
        ></Form.Check>
        <Button disabled={isBtnDisabled}>주문하기</Button>
      </Form.Group>
    </Form>
  );
}
export default OrderSummaryForm;

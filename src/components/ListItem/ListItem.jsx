import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import Caffee from "../../assets/caffee.jpg";

export default function ListItem({
  data = {},
  addToCart = () => {},
  disabled = false,
}) {
  return (
    <Card className="d-flex flex-row mb-2">
      <img
        style={{
          width: 150,
        }}
        alt={data.name || "caffee"}
        src={data.image || Caffee}
      />
      <CardBody>
        <CardTitle tag="h5">{data.name || "NO TITLE"}</CardTitle>
        <CardText className="mb-2">
          {data.price ? `${data.price} INR` : "0 INR"}
        </CardText>
        <Button
          style={{ background: "#1e3932" }}
          onClick={(e) => addToCart(e, data)}
          disabled={disabled}
        >
          ADD TO CART
        </Button>
      </CardBody>
    </Card>
  );
}

ListItem.propTypes = {
  data: Object,
  addToCart: Function,
  disabled: Boolean,
};

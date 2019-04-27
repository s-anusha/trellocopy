import  React from "react";
import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const Item = () => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>Item #1</Typography>
      </CardContent>
    </Card>
  );
};

export default Item;

import { useParams } from "react-router-dom";

export const SingleProductList = () => {
const params=useParams()

    // make a request to get the details
  return <>
  {console.log(params.id)}
  </>;
};

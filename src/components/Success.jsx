import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const { responseData } = location.state;
  return <div>{responseData.malzeme.join()}</div>;
}

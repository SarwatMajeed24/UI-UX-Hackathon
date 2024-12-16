import { ProductDetailComponent } from "../components/productdetails/ProductDetails";
import Customer from "../components/productdetails/ProductReviews";
import YouMayLike from "../components/productdetails/ProductYouLike";

export default function ProductDetail() {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center">
      <ProductDetailComponent />
      <Customer />
      <YouMayLike />
    </div>
  );
}

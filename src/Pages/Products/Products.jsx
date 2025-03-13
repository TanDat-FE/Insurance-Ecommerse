import Header from "@/Pages/Header/Header";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import { breadcrumbLinks } from "@components/Breadcrumb/BreadcrumbLinks";
import Homeowners from "@components/Homeowners/Homeowners";
import ProductFAQ from "@components/ProductFAQ/ProductFAQ";

function Products() {
  return (
    <div className="m-auto">
      <Breadcrumb links={breadcrumbLinks} />
      <Homeowners />
      <ProductFAQ />
    </div>
  );
}

export default Products;

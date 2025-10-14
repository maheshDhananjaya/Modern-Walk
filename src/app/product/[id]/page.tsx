import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";

import ProductNavPath from "@/components/Product/ProductNavPath";
import ProductCard from "@/components/Product/ProductCard";
import ProductRating from "@/components/Product/ProductRating";
import { IProductDetail } from "@/types/product/productResponse";
import { getProductById } from "@/lib/api";
import ProductSizeSelect from "@/components/Product/ProductSizeSelect";

interface ProductDetailPageProps {
  params: Promise<{ id: number }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const productData = await getProductById(id);
  return {
    title: `${productData.title}`,
    description: productData.description,
    openGraph: {
      title: productData.title,
      description: productData.description,
      images: [productData.image],
    },
  };
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { id } = await params;
  const productData: IProductDetail = await getProductById(id);
  return (
    <div className="flex min-h-screen flex-col px-30 py-32">
      <div className="flex flex-row gap-2.5 mb-16 items-center">
        <ProductNavPath label={"Home"} href="/" />
        <ChevronRight
          className="text-muted-foreground"
          width={15}
          height={15}
        />
        <ProductNavPath label={"Shop"} href="/product" />
        <ChevronRight
          className="text-muted-foreground"
          width={15}
          height={15}
        />
        <ProductNavPath label={productData.category} />
        <ChevronRight
          className="text-muted-foreground"
          width={15}
          height={15}
        />
        <ProductNavPath label={productData.title} isSelected />
      </div>
      <div className="flex flex-row gap-6 col-span-3 mb-32 items-center">
        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="min-w-45 h-42.5 border rounded-xl">
              <Image
                src={productData.image || "/assets/sample.jpg"}
                alt="Product Image"
                width={148}
                height={148}
                className="object-cover w-full h-full p-4"
              />
            </div>
          ))}
        </div>
        <div className="flex min-w-120 h-131 border rounded-xl">
          <Image
            src={productData.image || "/assets/sample.jpg"}
            alt="Product Image"
            width={454}
            height={524}
            className="object-cover w-full h-full p-4"
          />
        </div>
        <div className="flex flex-col py-16">
          <div className="flex flex-col gap-4 pb-8 ">
            <h1 className="text-2xl font-bold">{productData?.title}</h1>
            <p className="text-lg text-gray-600">{`$${productData.price}`}</p>
            <ProductRating rating={productData.rating.rate} />
            <p className="text-gray-700">{productData?.description}</p>
          </div>
          <ProductSizeSelect />
        </div>
      </div>
      <div>
        <p className="text-3xl text-primary font-bold mb-8">Product Details</p>
        <p className="text-gray-700">{productData?.description}</p>
      </div>
      <div className="mt-32">
        <p className="text-3xl text-primary leading-none font-bold mb-4">
          Related Products
        </p>
        <div className="mt-8 gap-6 grid grid-cols-4">
          {productData.related.map((product) => (
            <div key={product.id} className="mb-4">
              <ProductCard productData={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

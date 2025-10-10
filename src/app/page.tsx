import ProductCard from "@/components/Product/ProductCard";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="px-30 py-32">
        <div className="flex flex-row justify-between items-center">
          <Typography>Shop By Category</Typography>
          <Button variant="link" className="text-primary">
            Browse All Categories
            <ArrowRight />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="relative bg-black h-125 rounded-xl p-8 flex flex-col justify-end">
            <div>
              <Typography variant="h3" className="text-white mb-3">
                New Arrivals
              </Typography>
              <div className="flex items-center gap-2 text-white cursor-pointer hover:underline">
                <span className="text-sm font-medium">Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative bg-black h-59 rounded-xl p-8 flex flex-col justify-end">
              <div>
                <Typography variant="h3" className="text-white mb-3">
                  Women’s Clothing
                </Typography>
                <div className="flex items-center gap-2 text-white cursor-pointer hover:underline">
                  <span className="text-sm font-medium">Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="relative bg-black h-59 rounded-xl p-8 flex flex-col justify-end">
              <div>
                <Typography variant="h3" className="text-white mb-3">
                  Men’s Clothing
                </Typography>
                <div className="flex items-center gap-2 text-white cursor-pointer hover:underline">
                  <span className="text-sm font-medium">Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-30 pb-32">
        <Typography variant="h3">Flash Sale</Typography>
        <div className="mt-8 gap-6 grid grid-cols-4">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index}>
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
      <div className="px-30 pb-32">
        <Typography variant="h3">Most Popular</Typography>
        <div className="mt-8 gap-6 grid grid-cols-4">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index}>
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
      <div className="px-30 pb-32 h-80">
        <div className="flex flex-col justify-between bg-muted px-16 py-8 rounded-xl">
          <div>
            <Typography variant="h3" className="">
              Autumn Sale
            </Typography>
            <Typography className="text-muted-foreground">
              Limited time only. Don’t miss out!
            </Typography>
            <Typography variant={"h1"} className="mt-2">
              40% Off
            </Typography>
          </div>
          <div></div>
        </div>
      </div>
      <div className="px-30 pb-32">
        <div className="flex flex-row justify-between items-center">
          <Typography>Latest Products</Typography>
          <Button variant="link" className="text-primary">
            Browse All Categories
            <ArrowRight />
          </Button>
        </div>
        <div className="mt-8 gap-6 grid grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div key={index}>
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
      <div className="px-30 mb-32 h-40">
        <div className="flex flex-row justify-between bg-black px-16 py-8 rounded-xl">
          <div>
            <Typography
              variant="h1"
              className="text-white max-w-sm"
              lineHeight={"none"}
            >
              Subscribe to Our Newsletter
            </Typography>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center border rounded-md bg-muted min-w-100 py-2.5 px-3">
              <Mail className="mx-2 w-4 h-4" />
              <Typography
                className="text-muted-foreground"
                lineHeight={"none"}
                variant={"base"}
              >
                Enter your email
              </Typography>
            </div>
            <Button className="bg-white text-black min-w-100">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Product 1",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fb34fe2-cc91-4865-9fa6-79b3b26b8ac7/pegasus-41-road-running-shoes-RZm89S.png",
    price: 100000,
  },
  {
    id: 2,
    title: "Product 2",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c588a4d1-8bdc-4384-92ea-cb971164fbc4/pegasus-41-older-road-running-shoes-z1216h.png",
    price: 200000,
  },
  {
    id: 3,
    title: "Product 3",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c9a165ad-baa9-4c30-adc0-45d5b3e49824/sabrina-2-colour-vision-ep-basketball-shoes-w6qwqM.png",
    price: 300000,
  },
  // {
  //   id: 4,
  //   title: "Product 3",
  //   image:
  //     "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c9a165ad-baa9-4c30-adc0-45d5b3e49824/sabrina-2-colour-vision-ep-basketball-shoes-w6qwqM.png",
  //   price: 300000,
  // },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    // const detailProduct = data.find((item) => item.id === Number(id));
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        massage: "success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      massage: "Not Found",
      data: {},
    });
  }

  const products = await retrieveData("products");
  return NextResponse.json({
    status: 200,
    massage: "success",
    data: products,
  });
}

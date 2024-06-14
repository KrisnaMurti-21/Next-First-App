// import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";
import dynamic from "next/dynamic";
import Image from "next/image";

const Modal = dynamic(() => import("@/components/core/Modal"), { ssr: false });

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const data = await getData(
    `http:localhost:3000/api/product/?id=${params.id}`
  );
  return (
    <Modal>
      <Image
        src={data.data.image}
        alt="product"
        className="w-full object-cover aspect-square col-span-2"
        width={500}
        height={500}
      />
      <div className="bg-white p-4 px-6">
        <h3>{data.data.title}</h3>
        <p>Price : ${data.data.price}</p>
      </div>
    </Modal>
  );
}

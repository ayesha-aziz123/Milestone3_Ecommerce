"use client"
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/Hooks";
import Image from "next/image";

interface propsType {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

const CardProduct: React.FC<propsType> = ({
  id,
  img,
  name,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image width={300} height={300} className="w-[100px] object-cover" src={img} alt={name} />

        <div className="space-y-2">
          <h3 className="font-medium">{name} </h3>
          <p>
            {quantity} x {price}.00
          </p>
        </div>
      </div>

      <RxCross1
        className={"cursor-pointer"}
        onClick={() => dispatch(removeFromCart(id))}
      />
    </div>
  );
};
export default CardProduct;

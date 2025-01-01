"use client";
import { useAppSelector, useAppDispatch } from "@/redux/Hooks";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import { useState } from "react";
import { clearCart } from "@/redux/features/cartSlice";

interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

interface FormData {
  name: string;
  email: string;
  address: string;
}

interface CartProps {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart = ({ setShowCart }: CartProps) => {
  const products = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    address: "",
  });
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Get total cart value
  const getTotal = () => {
    let total = 0;
    products.forEach(
      (item: Product) => (total += item.price * item.quantity)
    );
    return total;
  };

  // Clear cart and sync localStorage
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSuccess(true);
    setTimeout(() => {
      dispatch(clearCart()); // Clear Redux cart
      setShowCart(false);
    }, 1500);
  };



  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
        <RxCross1
          className="absolute top-0 text-black right-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>

        {products.length === 0 ? (
          <div className="text-center mt-10">
            <h2 className="text-xl font-bold text-gray-600">Your Cart is Empty</h2>
            <p className="text-gray-500 py-7">Start shopping to add items to your cart!</p>
          </div>
        ) : (
          <>
            <div className="mt-6 space-y-2">
              {products.map((item: Product) => (
                <CartProduct
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </div>

            <div className="flex justify-between items-center font-medium text-xl py-4">
              <p>Total:</p>
              <p>${getTotal()}.00</p>
            </div>

            <button
              onClick={() => setShowCheckoutForm(!showCheckoutForm)}
              className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent mb-4 mt-4"
            >
              CheckOut
            </button>
          </>
        )}

        {showCheckoutForm  && !orderSuccess && (
          <div className="mt-4 p-4 border-t-2">
            <h4 className="text-lg font-medium">Checkout Form</h4>
            <form className="mt-2" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm text-gray-600">Name</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded-lg"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-600">Email</label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-2 mt-2 border rounded-lg"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-600">Address</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded-lg"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-lg w-full mt-4 hover:bg-accent"
              >
                Submit Order
              </button>
            </form>
          </div>
        )}

        {orderSuccess && (
          <div className="mt-4 p-4 border-t-2">
            <h4 className="text-xl font-bold text-green-600">
              Order Successful!
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Your order has been successfully placed. Thank you for shopping
              with us!
            </p>
            <button
              onClick={() => setShowCart(false)}
              className="bg-black text-white py-2 px-4 rounded-lg w-full mt-4 hover:bg-accent"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

import { CartCounter } from "@/shopping-cart/components/CartCounter";





export const metadata = {
  title: 'SEO Count',
  description: 'SEO Count Description',
};


export default function CounterPage() {



  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
          <CartCounter value={ 10 }/>
    </div>
  );
}




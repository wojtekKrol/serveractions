import {revalidateTag} from "next/cache";
import {Product} from "@/types/products";
import {addProduct} from "@/serverActions/serverActions";
import AddProduct from "@/components/AddProduct";

export default async function Home() {
    const res = await fetch('https://64de1650825d19d9bfb20a62.mockapi.io/products',{
            cache: 'no-cache',
            next: {
                tags: ['products']
            }
        })

    const products: Product[] = await res.json()

  return (
      <main>
          <h1 className="text=3xl font-bold text-center">Products Warehouse</h1>
          <form action={addProduct} className='flex flex-col gap-5 max-w-xl mx-auto p-5'>
              <input
                  type="text"
                  name='productName'
                  placeholder='Enter Product name'
                  className='border border-gray-300 p-2 rounded-md'
              />
              <input
                  type="text"
                  name='price'
                  placeholder='Enter price'
                  className='border border-gray-300 p-2 rounded-md'
              />
              <button>Add Product</button>
          </form>

          <h2 className='text-center font-bold p-5'>List of Products</h2>

          <div className='flex flex-wrap justify-center gap-5'>
              {products.map(({ name, price, id}) => (
                    <div key={id} className='transition ease-in delay-50 shadow border border-gray-300 p-5 rounded-md hover:bg-sky-700 hover:text-white'>
                        <h3 className='font-bold'>{name}</h3>
                        <p>{price}</p>
                    </div>
                ))}
          </div>

          <AddProduct/>
      </main>
  )
}

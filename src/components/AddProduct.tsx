'use client'

import {addProduct} from "@/serverActions/serverActions";
import { useTransition } from "react";

const AddProduct = () => {
    const [pending, startTransition] = useTransition()
    const formData = new FormData()
    formData.append('productName', 'Product name')
    formData.append('price', '2137')

    return (
        <button
            onClick={() => startTransition(() => addProduct(formData))}
            className='fixed text-white bottom-10 right-10 border bg-amber-500 border-gray-300 p-2 rounded-md'
        >
            {pending ? 'Adding...' : 'Add Product'}
        </button>
    )
}

export default AddProduct
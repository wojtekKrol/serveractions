'use server'

import {revalidateTag} from "next/cache";

const addProduct = async (e: FormData) => {
    const name = e.get('productName')?.toString()
    const price = e.get('price')?.toString()

    if(!name || !price) return

    const newProduct = {
        name,
        price,
    }

    await fetch('https://64de1650825d19d9bfb20a62.mockapi.io/products', {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    revalidateTag('products')
}

export {
    addProduct
}
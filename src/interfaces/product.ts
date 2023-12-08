export interface Product {
  _id: string
  name: string,
  price: number,
  image: {
    public_id: string,
    url: string
  },
  desc: string
}
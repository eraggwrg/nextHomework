import Link from "next/link"
import { IBook } from "../lib/types"
const fs = require('fs')
const data = fs.readFileSync('books.json')
const books: IBook[] = JSON.parse(data)


export default function Page() {
  return (
    <>
      <div className="page">
        <h1>Books</h1>
        <div style={{ display: "flex", gap: 100 }}>
          {
            books.map(elm =>
              <div key={elm.id} >
                <p><img style={{ width: 200, height: 230 }} src={elm.photo} /></p>
                <p>{elm.title}</p>
                <p>{elm.author}</p>
                <p><strong>{elm.price}$</strong></p>
                <Link className="navbar-item is-color-white" href={`books/${elm.id}`}>details</Link>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}

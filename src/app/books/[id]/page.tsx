import { notFound } from "next/navigation"
import { IBook } from "@/app/lib/types"
interface IProps {
    params: { id: number }
}

const fs = require('fs')
const data = fs.readFileSync('books.json')
const books: IBook[] = JSON.parse(data)

export default function Page(props: IProps) {
    const found: IBook | undefined = books.find(elm => +elm.id == props.params.id)
    if (!found) {
        notFound()
    }
    if (props.params.id > 10) {
        notFound()
    }

    return <>
        <p className="is-size-2">book No.{props.params.id}</p>
        <div style={{display:"flex", justifyContent:"center", alignContent:"center",}}>
            <img src={found.photo} style={{ width: 500, height: 600 }} />
        </div>
            <p  style={{textAlign:"center"}}className="is-size-2">{found.title}</p>
    </>
}
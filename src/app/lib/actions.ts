
import { IBook } from "./types"
import { readFile }from 'node:fs/promises'

export const getAllBooks = async ():Promise<IBook[]>  => {

        const data = await readFile('books.json','utf-8')
        const books = JSON.parse(data)
        return books
}
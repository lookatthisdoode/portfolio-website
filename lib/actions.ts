'use server'

import {sql} from "@vercel/postgres";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";


export async function createMessage( props:{name:string, contact:string, message:string}) {
    const {name, contact, message} = props
    try {
        await sql`
    INSERT INTO portfolio_messages (name, contact, message)
    VALUES (${name}, ${contact}, ${message})
    `;
    } catch (error) {
        throw new Error(`Server action error, ${error}`)
    }
}
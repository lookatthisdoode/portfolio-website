'use server'

import {sql} from "@vercel/postgres";
import sendMail from "./mail-service";


export async function createMessage( props:{name:string, contact:string, message:string}) {
    const {name, contact, message} = props
    try {
        await sendMail(props)
    //     await sql`
    // INSERT INTO portfolio_messages (name, contact, message)
    // VALUES (${name}, ${contact}, ${message})
    // `;
    } catch (error) {
        throw new Error(`Server action error, ${error}`)
    }
}

'use server'

import {sql} from "@vercel/postgres";
import sendMail from "./mail-service";


// will try to send into DB if not immediately delivered
export async function createMessage( props:{name:string, contact:string, message:string}) {
    const {name, contact, message} = props
    try {
        await sendMail(props)
    } catch (error) {
        try {
            await sql`
            INSERT INTO portfolio_messages (name, contact, message)
            VALUES (${name}, ${contact}, ${message})
            `;
        } catch (error) {
            throw new Error(`Error saving to db ${error}`)
        }
        throw new Error(`Error sending email, trying to put into db ${error}`)
    }
}

'use client'
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {useRef} from "react";



export default function ContactForm( {gratitude}: {gratitude:CallableFunction} ) {
    const form = useRef<HTMLFormElement | null>(null);

    const formSchema = z.object({
        name: z.string().min(1, {message: 'Name cant empty'}),
        contact: z.string().min(1, {message: 'Contact cant be empty either'}),
        project: z.string().min(1, {message: 'Well, you know the drill'}),
    })

    const formOptions = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        //defaultValues for error messages
        defaultValues: {
            name: "",
            contact: "",
            project: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // console.log(form.current)
        // form.current && form.current.submit()
        gratitude()
        console.log(values)
    }


    // create element showin thanks
    // make that element appear only when you press submit
    // make it dissapear and slide up after 3 seconds
    // make a slider



    return (
        <Form {...formOptions} >
            <form action={"/"} ref={form} onSubmit={formOptions.handleSubmit(onSubmit)} className="space-y-2 w-full">
                <FormField
                    control={formOptions.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Smith" {...field} />
                            </FormControl>
                            <FormDescription>
                                Your name
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formOptions.control}
                    name="contact"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contact</FormLabel>
                            <FormControl>
                                <Input placeholder="john.smith@gmail.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                How can I get back to You?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formOptions.control}
                    name="project"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Info</FormLabel>
                            <FormControl>
                                <Textarea placeholder="I have a coffee shop that I want to have a website for." {...field} />
                            </FormControl>
                            <FormDescription>
                                What do you have in mind?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className={`bg-backgroundDark hover:bg-opacity-40 cursor-pointer`} type="submit">Submit</Button>
            </form>
        </Form>
    )

}
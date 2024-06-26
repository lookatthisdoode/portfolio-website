"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createMessage } from "@/lib/actions";
import { robotoMono } from "@/app/ui/fonts";

export default function ContactForm({
  gratitude,
}: {
  gratitude: CallableFunction;
}) {
  const initialFormState = { name: "", contact: "", message: "" };

  const formSchema = z.object({
    name: z.string().min(1, { message: "Name cant empty" }),
    contact: z.string().min(1, { message: "Contact cant be empty either" }),
    message: z.string().min(1, { message: "Well, you know the drill" }),
  });

  // Apparently this defines a whole form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    //defaultValues for error messages
    defaultValues: initialFormState,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    gratitude();
    form.reset(initialFormState);
    await createMessage(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-2 w-full ${robotoMono.className}`}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Smith" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact</FormLabel>
              <FormControl>
                <Input placeholder="john.smith@gmail.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What do you have in mind?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="I have a coffee shop that I want to have a website for."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={`h-[10px]`}></div>
        <Button
          className={`bg-text text-backgroundDark md:text-text md:bg-backgroundDark md:hover:shadow-xl md:hover:bg-slate-700 cursor-pointer`}
          type="submit"
        >
          Send
        </Button>
      </form>
    </Form>
  );
}

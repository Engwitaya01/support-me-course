"use client";
//rfc
import React from "react";
import {
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handlesubmit = () => {
    console.log("Login validation successful");
  };

  return (
    <>
      <PersonStandingIcon size={50} />

      <Card className=" w-full  max-w-sm  ">
        <CardHeader>
          <CardTitle>Login</CardTitle>

          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={form.handleSubmit(handlesubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <input
                        placeholder="witaya.chaison@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      We'll never share your email
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      We'll never share your password with anyone.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Login</Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="justify-between">
          <small>Don't have an account? </small>
          <Button asChild variant="outline" size="sm">
            <a href="/sign-up">Sign Up</a>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

"use client";

import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import axios from "axios";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "../ui/use-toast";

const registerFormSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(4, {
        message: "Password length should be atleast 4 characters.",
      })
      .max(16, {
        message: "Password length should be less than 16 characters.",
      }),
    confirmPassword: z
      .string()
      .min(4, {
        message: "Password length should be atleast 4 characters.",
      })
      .max(16, {
        message: "Password length should be less than 16 characters.",
      }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "The passwords did not match",
      });
    }
  });

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const registerForm = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onRegisterSubmit = async (
    values: z.infer<typeof registerFormSchema>
  ) => {
    console.log(values);
    if (values.password === values.confirmPassword) {
      axios
        .post(`${process.env.NEXT_PUBLIC_APP_URL}/api/user`, {
          email: values.email,
          password: values.password,
        })
        .then(async () => {
          await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: true,
            callbackUrl: "/",
          });
        })
        .catch(() =>
          toast({
            title: "User Already Exists with the Credentials!",
            description: "Try using different credentials.",
            variant: "destructive",
          })
        );
    } else {
      console.log("Passwords do not match!");
      toast({
        title: "Passwords do not match!",
      });
    }
  };

  const githubLogin = async () => {
    await signIn("github", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  const googleLogin = async () => {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  const credentialsLogin = async () => {
    await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/",
    }).catch(() =>
      toast({
        title: "Login Failed!",
        description: "Incorrect Email or Password",
        variant: "destructive",
      })
    );
  };

  return (
    <div className="w-full flex items-center justify-center">
      <Tabs defaultValue="login" className="flex flex-col">
        <TabsList>
          <TabsTrigger value="login" className="w-full">
            Sign In
          </TabsTrigger>
          <TabsTrigger value="register" className="w-full">
            Create Account
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>
                Enter your email below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-6">
                <Button variant="outline" onClick={githubLogin}>
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                  Github
                </Button>
                <Button variant="outline" onClick={googleLogin}>
                  <Icons.google className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={credentialsLogin}>
                Sign In
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <CardDescription>
                Enter your email below to create your account
              </CardDescription>
            </CardHeader>
            <Form {...registerForm}>
              <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)}>
                <CardContent className="grid gap-4">
                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="me@example.com" {...field} />
                        </FormControl>
                        <FormDescription>
                          We will never share your email with anyone.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit">
                    Create account
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginForm;

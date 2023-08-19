"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginDialog = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitGithub = async () => {
    const result = await signIn("github", { redirect: true, callbackUrl: "/" });
  };

  const onSubmitCredentials = async () => {
    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </DialogTrigger>
        <DialogContent className="grid gap-4">
          <DialogHeader className="space-y-1">
            <DialogTitle className="text-2xl">Sign In</DialogTitle>
            <DialogDescription>Welcome back!</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" onSubmit={onSubmitGithub}>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
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
          <DialogFooter>
            <Button
              type="submit"
              className="w-full"
              onSubmit={onSubmitCredentials}
            >
              Sign In
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginDialog;

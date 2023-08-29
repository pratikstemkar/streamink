"use client";

import { Settings } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

const EditProfile = () => {
  const { data: session, update } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/user");
    },
  });

  const [newName, setNewName] = useState(session?.user?.name);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Settings className="mr-0 lg:mr-2 h-4 w-4" />
          <span className="hidden lg:block">Edit Profile</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] lg:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-left">Edit Profile</DialogTitle>
          <DialogDescription className="text-left">
            Make changes to your profile here. Click update when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <Label>Name</Label>
        <Input
          type="text"
          value={newName!}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Button
          onClick={() => update({ name: newName?.trim() })}
          disabled={
            newName === session?.user?.name ||
            newName === "" ||
            newName === null ||
            newName!.trim().length < 4
          }
        >
          Update Profile
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;

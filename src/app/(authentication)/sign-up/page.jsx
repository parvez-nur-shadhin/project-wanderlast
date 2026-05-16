"use client";
import { authClient, useSession } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      callbackURL: "/",
    });
    console.log(res, error);
  };

  return (
    <div className="container mx-auto my-15">
      <div className="space-y-3">
        <h1 className="text-center font-bold text-5xl">Welcome Back</h1>
        <h1 className="text-center font-medium text-2xl text-[#6C696D]">
          Resume your adventure with Wanderlust
        </h1>

        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-96 flex-col gap-4 shadow-2xl p-5 rounded-lg mx-auto"
          render={(props) => <form {...props} data-custom="foo" />}
        >
          <TextField isRequired type="text">
            <FieldError />
            <Label>Name</Label>
            <Input
              className={"rounded-none"}
              placeholder="John Doe"
              {...register("name", { required: true })}
            />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <FieldError />
            <Label>Email</Label>
            <Input
              className={"rounded-none"}
              placeholder="Enter Your Email"
              {...register("email", { required: true })}
            />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input
              className={"rounded-none"}
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button
              className={"w-full bg-[#15A1BF] rounded-none"}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;

"use client";

import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
} from "@heroui/react";
import { Controller, useForm } from "react-hook-form";

const AddDestinationForm = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = async(data) => {
    const res = await fetch('http://localhost:8000/destinations', {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(data)
    });
    const resData = await res.json();
    console.log(resData);
  };

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-5xl text-center my-5">
        Add New Travel Package
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 space-y-8 max-w-3xl mx-auto my-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Destination Name */}
          <div className="md:col-span-2">
            <TextField name="destinationName" isRequired>
              <Label>Destination Name</Label>
              <Input
                placeholder="Bali Paradise"
                className="rounded-2xl"
                {...register("destinationName")}
              />
              <FieldError />
            </TextField>
          </div>

          {/* Country */}
          <TextField name="country" isRequired>
            <Label>Country</Label>
            <Input
              placeholder="Indonesia"
              className="rounded-2xl"
              {...register("country")}
            />
            <FieldError />
          </TextField>

          {/* Category - Updated Select Component */}
          <div>
            <Controller
              name="category"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  selectedKeys={field.value ? [field.value] : []}
                  onSelectionChange={(keys) => {
                    field.onChange(Array.from(keys)[0]);
                  }}
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Category</Label>

                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Beach">Beach</ListBox.Item>

                      <ListBox.Item id="Mountain">Mountain</ListBox.Item>

                      <ListBox.Item id="City">City</ListBox.Item>

                      <ListBox.Item id="Adventure">Adventure</ListBox.Item>

                      <ListBox.Item id="Cultural">Cultural</ListBox.Item>

                      <ListBox.Item id="Luxury">Luxury</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              )}
            />
          </div>

          {/* Price */}
          <TextField name="price" type="number" isRequired>
            <Label>Price (USD)</Label>
            <Input
              type="number"
              placeholder="1299"
              className="rounded-2xl"
              {...register("price")}
            />
            <FieldError />
          </TextField>

          {/* Duration */}
          <TextField name="duration" isRequired>
            <Label>Duration</Label>
            <Input
              placeholder="7 Days / 6 Nights"
              className="rounded-2xl"
              {...register("duration")}
            />
            <FieldError />
          </TextField>

          {/* Departure Date */}
          <div className="md:col-span-2">
            <TextField name="departureDate" type="date" isRequired>
              <Label>Departure Date</Label>
              <Input
                type="date"
                className="rounded-2xl"
                {...register("departureDate")}
              />
              <FieldError />
            </TextField>
          </div>

          {/* Image URL - Removed preview */}
          <div className="md:col-span-2">
            <TextField name="imageUrl" isRequired>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-2xl"
                {...register("imageUrl")}
              />
              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-3xl"
                {...register("description")}
              />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Buttons */}

        <Button
          type="submit"
          variant="outline"
          className=" rounded-none w-full bg-cyan-500 text-white"
        >
          Add Destination
        </Button>
      </form>
    </div>
  );
};

export default AddDestinationForm;

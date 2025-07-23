"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const productOptions = {
  "Kitchen Products": [
    { value: "cutting-board", label: "Cutting Board" },
    { value: "kitchen-cabinet", label: "Kitchen Cabinet" },
    { value: "spice-rack", label: "Spice Rack" },
    { value: "kitchen-island", label: "Kitchen Island" },
  ],
  Furniture: [
    { value: "dining-table", label: "Dining Table" },
    { value: "coffee-table", label: "Coffee Table" },
    { value: "bookshelf", label: "Bookshelf" },
    { value: "wardrobe", label: "Wardrobe" },
  ],
  "Decorative Items": [
    { value: "wall-art", label: "Wall Art" },
    { value: "picture-frame", label: "Picture Frame" },
    { value: "decorative-bowl", label: "Decorative Bowl" },
    { value: "candle-holder", label: "Candle Holder" },
  ],
};

const formSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  city: z.string().min(1, "City is required"),
  address: z.string().min(1, "Address is required"),
  products: z
    .array(
      z.object({
        productId: z.string().min(1, "Please select a product"),
        quantity: z.number().min(1, "Quantity must be at least 1"),
      })
    )
    .min(1, "At least one product must be selected"),
  specialRequests: z.string().optional(),
});
export default function OfferPricePage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerName: "",
      companyName: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      products: [{ productId: "", quantity: 1 }],
      specialRequests: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "products",
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    toast({
      title: "Quote Request Submitted",
      description:
        "We'll get back to you within 24 hours with your custom quote.",
    });
  };

  const addProduct = () => {
    append({ productId: "", quantity: 1 });
  };

  const removeProduct = (index) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Request Custom Quote
          </h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a personalized quote for your custom woodworking project. Select
            your products and we'll provide detailed pricing.
          </p> */}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Customer Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="customerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          className="bg-white border border-gray-200 rounded-md placeholder:text-gray-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your company name"
                          className="bg-white border border-gray-200 rounded-md placeholder:text-gray-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number"
                          className="bg-white border border-gray-200 rounded-md placeholder:text-gray-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-white border border-gray-200 rounded-md placeholder:text-gray-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your city"
                          className="bg-white border border-gray-200 rounded-md placeholder:text-gray-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your address"
                          className="bg-white border border-gray-200 rounded-md placeholder:text-gray-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Products Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    Products
                  </h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addProduct}
                    className="bg-gray-900 text-white font-bold rounded-md hover:bg-gray-800 flex items-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Product
                  </Button>
                </div>

                <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                  {fields.map((field, index) => (
                    <div
                      key={field.id}
                      className="flex gap-4 items-end p-4 rounded-lg bg-muted/50"
                    >
                      <div className="flex-1">
                        <FormField
                          control={form.control}
                          name={`products.${index}.productId`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Product {index + 1}</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="bg-white border mb-0 border-gray-200 rounded-md placeholder:text-gray-400">
                                    <SelectValue placeholder="Select a product" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {Object.entries(productOptions).map(
                                    ([category, products]) => (
                                      <SelectGroup key={category}>
                                        <SelectLabel>{category}</SelectLabel>
                                        {products.map((product) => (
                                          <SelectItem
                                            key={product.value}
                                            value={product.value}
                                          >
                                            {product.label}
                                          </SelectItem>
                                        ))}
                                      </SelectGroup>
                                    )
                                  )}
                                </SelectContent>
                              </Select>
                              <FormMessage className="absolute" />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="w-24">
                        <FormField
                          control={form.control}
                          name={`products.${index}.quantity`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Qty</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  min="1"
                                  placeholder="1"
                                  className="bg-white border border-gray-200 rounded-md placeholder:text-gray-400"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(
                                      parseInt(e.target.value) || 1
                                    )
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeProduct(index)}
                        disabled={fields.length === 1}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <FormField
                control={form.control}
                name="specialRequests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Requests (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any specific requirements, dimensions, or customizations..."
                        className="min-h-[100px] bg-white border border-gray-200 rounded-md placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gray-900 text-white font-bold rounded-md hover:bg-gray-800 px-8"
                >
                  Submit Quote Request
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

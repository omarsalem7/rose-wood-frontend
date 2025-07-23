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
import en from "@/../public/locales/en/offerPrice.json";
import ar from "@/../public/locales/ar/offerPrice.json";

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

export default function OfferPricePage({ params }) {
  // Unwrap the params Promise
  const { locale } = React.use(params);

  const t = locale === "ar" ? ar : en;

  // Localized Zod schema
  const formSchema = z.object({
    customerName: z.string().min(2, t.validation.nameMin),
    companyName: z.string().optional(),
    email: z.string().email(t.validation.email),
    phone: z.string().min(10, t.validation.phoneMin),
    city: z.string().min(1, t.validation.city),
    address: z.string().min(1, t.validation.address),
    products: z
      .array(
        z.object({
          productId: z.string().min(1, t.validation.productRequired),
          quantity: z.number().min(1, t.validation.quantityMin),
        })
      )
      .min(1, t.validation.productsMin),
    specialRequests: z.string().optional(),
  });

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
      title: t.title,
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
          <h2 className="text-3xl  font-bold text-foreground mb-4">
            {t.title}
          </h2>
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
                      <FormLabel>{t.fullName}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t.fullName}
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
                      <FormLabel>{t.companyName}</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder={t.companyName}
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
                      <FormLabel>{t.phone}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t.phone}
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
                      <FormLabel>{t.email}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t.email}
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
                      <FormLabel>{t.city}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t.city}
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
                      <FormLabel>{t.address}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t.address}
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
                    {t.products}
                  </h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addProduct}
                    className="font-bold cursor-pointer  hover:bg-gray-100 rounded-md flex items-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    {t.addProduct}
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
                              <FormLabel>{`${t.products} ${
                                index + 1
                              }`}</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="bg-white border mb-0 border-gray-200 rounded-md placeholder:text-gray-400">
                                    <SelectValue
                                      placeholder={t.selectProduct}
                                    />
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
                              <FormLabel>{t.qty}</FormLabel>
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
                    <FormLabel>{t.specialRequests}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t.specialRequests}
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
                  className="bg-[#5F361F] text-white font-bold rounded-md hover:bg-amber-900 cursor-pointer px-8"
                >
                  {t.submit}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

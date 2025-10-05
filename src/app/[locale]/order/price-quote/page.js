"use client";

import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Plus, Trash2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { getLookupProducts } from "@/lib/api/products";
import { submitPriceQuote } from "@/lib/api/order";
import FormResultDialog from "@/components/FormResultDialog";
import en from "@/../public/locales/en/offerPrice.json";
import ar from "@/../public/locales/ar/offerPrice.json";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Function to organize products by category
const organizeProductsByCategory = (products) => {
  const categories = {};

  products.forEach((product) => {
    const categoryName = product.category?.name || "Other";
    if (!categories[categoryName]) {
      categories[categoryName] = [];
    }
    categories[categoryName].push({
      value: product.documentId.toString(),
      label: product.name,
      image: product.mainImageUrl || null,
    });
  });

  return categories;
};

export default function OfferPricePage({ params }) {
  // Unwrap the params Promise
  const { locale } = React.use(params);

  const t = locale === "ar" ? ar : en;

  // State for products data
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // State for form submission
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [dialogState, setDialogState] = React.useState({
    isOpen: false,
    type: "success", // 'success' or 'error'
    title: "",
    message: "",
  });

  // State for "choose all products" checkbox
  const [chooseAllProducts, setChooseAllProducts] = React.useState(false);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productsData = await getLookupProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Dynamic Zod schema based on chooseAllProducts state
  const getFormSchema = (chooseAllProducts) => {
    return z.object({
      fullName: z.string().min(2, t.validation.nameMin),
      companyName: z.string().optional(),
      email: z.string().email(t.validation.email),
      phone: z.string().min(10, t.validation.phoneMin),
      city: z.string().min(1, t.validation.city),
      address: z.string().min(1, t.validation.address),
      products: chooseAllProducts
        ? z
            .array(
              z.object({
                productId: z.string().optional(),
                quantity: z.number().optional(),
              })
            )
            .optional()
        : z
            .array(
              z.object({
                productId: z.string().min(1, t.validation.productRequired),
                quantity: z.number().min(1, t.validation.quantityMin),
              })
            )
            .min(1, t.validation.productsMin),
      specialRequests: z.string().optional(),
    });
  };

  const form = useForm({
    resolver: zodResolver(getFormSchema(chooseAllProducts)),
    defaultValues: {
      fullName: "",
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

  // Update form when chooseAllProducts changes
  useEffect(() => {
    form.clearErrors();
    form.setValue("products", [{ productId: "", quantity: 1 }]);
  }, [chooseAllProducts, form]);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      // Prepare the data according to the Strapi schema
      const formData = {
        fullName: data.fullName,
        companyName: data.companyName || "",
        phone: data.phone,
        email: data.email,
        city: data.city,
        address: data.address,
        specialRequests: data.specialRequests || "",
        chooseAllProducts: chooseAllProducts,
      };

      // Handle order_items based on chooseAllProducts flag
      if (chooseAllProducts) {
        // If "choose all products" is checked, create order_items for all products
        formData.order_items = products.map((product) => ({
          product: product.documentId,
          quantity: 1,
        }));
      } else {
        // Create order_items for selected products with their quantities
        formData.order_items = data.products
          .filter((p) => p.productId && p.quantity)
          .map((p) => ({
            product: p.productId,
            quantity: p.quantity,
          }));
      }

      // Submit the form data to the API
      await submitPriceQuote(formData);

      // Show success dialog
      setDialogState({
        isOpen: true,
        type: "success",
        title: t.title,
        message: t.successMessage,
      });

      // Reset the form after successful submission
      form.reset();
      setChooseAllProducts(false);
    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error dialog
      setDialogState({
        isOpen: true,
        type: "error",
        title: "Error",
        message: t.errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  name="fullName"
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
                        <PhoneInput
                          country={"eg"}
                          value={field.value}
                          disableSearchIcon={true}
                          onChange={(phone, country) => {
                            field.onChange(phone);
                          }}
                          enableSearch={true}
                          searchPlaceholder={
                            locale === "ar"
                              ? "البحث عن البلد..."
                              : "Search country..."
                          }
                          preferredCountries={["ae", "eg", "sa"]}
                          placeholder={t.phone}
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
                </div>

                {/* Choose All Products Checkbox */}
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="chooseAllProducts"
                    checked={chooseAllProducts}
                    onCheckedChange={setChooseAllProducts}
                    disabled={loading}
                  />
                  <label
                    htmlFor="chooseAllProducts"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {t.chooseAllProducts}
                  </label>
                </div>

                {!chooseAllProducts && (
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-0 md:p-4">
                    {fields.map((field, index) => (
                      <div
                        key={field.id}
                        className="flex gap-2 md:gap-4 items-end p-4 rounded-lg bg-muted/50"
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
                                  options={organizeProductsByCategory(products)}
                                  value={
                                    field.value
                                      ? {
                                          value: field.value,
                                          label:
                                            products.find(
                                              (p) =>
                                                p.documentId.toString() ===
                                                field.value
                                            )?.name || field.value,
                                        }
                                      : null
                                  }
                                  onChange={(selectedOption) => {
                                    field.onChange(selectedOption?.value || "");
                                  }}
                                  placeholder={
                                    loading
                                      ? t.loadingProducts
                                      : t.selectProduct
                                  }
                                  isDisabled={loading}
                                  isLoading={loading}
                                  isSearchable={true}
                                />
                                <FormMessage className="absolute" />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="w-12 md:w-24">
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
                                    className="bg-white border border-gray-200 rounded-md placeholder:text-gray-400"
                                    {...field}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      if (value === "") {
                                        field.onChange("");
                                      } else {
                                        const numValue = parseInt(value);
                                        field.onChange(
                                          isNaN(numValue) ? 1 : numValue
                                        );
                                      }
                                    }}
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
                          className="text-destructive hover:text-destructive cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                {chooseAllProducts && (
                  <div className="bg-green-50 rounded-lg border border-green-200 p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-green-800 font-medium">
                        {t.chooseAllProducts} - {products.length} {t.products}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              {!chooseAllProducts && (
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
              )}
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
                  disabled={isSubmitting}
                  className="bg-[#5F361F] text-white font-bold rounded-md hover:bg-amber-900 cursor-pointer px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.submitting : t.submit}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      {/* Form Result Dialog */}
      <FormResultDialog
        isOpen={dialogState.isOpen}
        onClose={() => setDialogState({ ...dialogState, isOpen: false })}
        type={dialogState.type}
        title={dialogState.title}
        message={dialogState.message}
        redirectPath={`/${locale}`}
        successButtonText={t.goToHome}
        errorButtonText={t.tryAgain}
      />
    </section>
  );
}

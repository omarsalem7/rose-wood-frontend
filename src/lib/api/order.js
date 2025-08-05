import { apiCall } from "../utils";

export const submitRequestSample = async (data) => {
  try {
    const response = await apiCall("/request-samples", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    return response;
  } catch (error) {
    console.error("Error submitting request sample:", error);
    throw error;
  }
};
export const submitPriceQuote = async (data) => {
  try {
    // Step 1: Create order items first
    const orderItemIds = [];

    if (data.order_items && data.order_items.length > 0) {
      for (const orderItem of data.order_items) {
        const orderItemData = {
          product: { connect: [orderItem.product] },
          quantity: orderItem.quantity,
        };

        console.log("Creating order item with data:", orderItemData);

        const orderItemResponse = await apiCall("/order-items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: orderItemData }),
        });

        console.log("Order item created:", orderItemResponse.data);
        orderItemIds.push(orderItemResponse.data.documentId);
      }
    }

    console.log("Collected order item IDs:", orderItemIds);

    // Step 2: Create price quotation and connect order items
    const strapiData = {
      fullName: data.fullName,
      companyName: data.companyName,
      phone: data.phone,
      email: data.email,
      city: data.city,
      address: data.address,
      specialRequests: data.specialRequests,
      chooseAllProducts: data.chooseAllProducts,
      // Connect the created order items
      order_items: { connect: orderItemIds },
      // requestStatus will default to "new" as per schema
    };

    console.log("Creating price quotation with data:", strapiData);

    const response = await apiCall("/price-quotations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: strapiData }),
    });

    console.log("Price quotation created:", response.data);

    return response;
  } catch (error) {
    console.error("Error submitting price quote:", error);
    throw error;
  }
};
export const submitInternationalExports = async (data) => {
  try {
    const response = await apiCall("/international-exports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    return response;
  } catch (error) {
    console.error("Error submitting international exports:", error);
    throw error;
  }
};
export const submitLocalExports = async (data) => {
  try {
    const response = await apiCall("/local-exports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    return response;
  } catch (error) {
    console.error("Error submitting local exports:", error);
    throw error;
  }
};

export const submitContactForm = async (data) => {
  const response = await apiCall("/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });

  return response;
};

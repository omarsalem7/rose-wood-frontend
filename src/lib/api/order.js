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
    let orderItemIds = [];

    // Step 1: Batch create order items concurrently for performance
    if (
      !data.chooseAllProducts &&
      Array.isArray(data.order_items) &&
      data.order_items.length > 0
    ) {
      const orderItemPromises = data.order_items.map((orderItem) => {
        const orderItemData = {
          product: { connect: [orderItem.product] },
          quantity: orderItem.quantity,
        };
        return apiCall("/order-items", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: orderItemData }),
        });
      });

      // Use Promise.allSettled for failure resilience
      const orderItemResults = await Promise.allSettled(orderItemPromises);
      orderItemIds = orderItemResults
        .filter(
          (result) =>
            result.status === "fulfilled" && result.value?.data?.documentId
        )
        .map((result) => result.value.data.documentId);

      // If any order item failed, optionally log or handle as needed
      if (orderItemIds.length !== data.order_items.length) {
        console.warn("Some order items failed to create");
      }
    }

    // Step 2: Create price quotation and connect successful order items
    const strapiData = {
      fullName: data.fullName,
      companyName: data.companyName,
      phone: data.phone,
      email: data.email,
      city: data.city,
      address: data.address,
      specialRequests: data.specialRequests,
      chooseAllProducts: data.chooseAllProducts,
      order_items: { connect: orderItemIds },
      // requestStatus defaults to "new"
    };

    const response = await apiCall("/price-quotations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: strapiData }),
    });

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

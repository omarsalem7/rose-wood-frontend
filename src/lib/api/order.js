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
    const response = await apiCall("/price-quotations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
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

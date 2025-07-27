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

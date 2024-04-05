import { useState } from "react";
import { useMutation } from "convex/react";
import { Result } from "postcss";

export const useApiMutation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apimutation = useMutation(mutationFunction);

  const mutate = (payload: any) => {
    setPending(true);
    return apimutation(payload)
      .finally(() => setPending(false))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  };

  return {
    mutate,
    pending,
  };
};

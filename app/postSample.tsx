"use client";
import { endpoints } from "@/app/services/endpoint";

import { postRegister } from "@/app/services";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";

export default function postSample() {
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: () => postRegister({}, endpoints.auth.register),
  });

  const { register, control, handleSubmit, formState, reset, watch } =
    useForm();
  return (
    <div>
      <input
        id="first_name"
        placeholder="asasda"
        type="text"
        {...register("first_name")}
      />
    </div>
  );
}

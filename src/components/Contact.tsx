"use client";

import React, { useState } from "react";

const defaultFormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [status, setStatus] = useState<{ submitting: boolean; succeeded: boolean; error: string | null }>({ submitting: false, succeeded: false, error: null });

  interface FormData {
    name: { value: string; error: string };
    email: { value: string; error: string };
    message: { value: string; error: string };
  }

  interface Status {
    submitting: boolean;
    succeeded: boolean;
    error: string | null;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    setStatus({ submitting: true, succeeded: false, error: null });

    try {
      const response = await fetch("https://formspree.io/f/mwpvpyqa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.value,
          email: formData.email.value,
          message: formData.message.value,
        }),
      });

      if (response.ok) {
        setStatus({ submitting: false, succeeded: true, error: null });
        setFormData(defaultFormState); // Reset form
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setStatus({ submitting: false, succeeded: false, error: error instanceof Error ? error.message : "An unknown error occurred" });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {status.succeeded && (
        <p className="text-green-500 mb-4">Thanks for your submission!</p>
      )}
      {status.error && (
        <p className="text-red-500 mb-4">Error: {status.error}</p>
      )}

      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="w-full">
          <input
            name="name"
            type="text"
            placeholder="Enter your full name"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.name.value}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: { value: e.target.value, error: "" },
              })
            }
          />
        </div>
        <div className="w-full">
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.email.value}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: { value: e.target.value, error: "" },
              })
            }
          />
        </div>
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Write your message here"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: { value: e.target.value, error: "" },
            })
          }
        />
      </div>
      <button
        className={`w-full px-2 py-2 mt-4 rounded-md font-bold ${
          status.submitting
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-neutral-100 text-neutral-500"
        }`}
        type="submit"
        disabled={status.submitting}
      >
        {status.submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

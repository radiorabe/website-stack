"use client";
import Button from "@/components/Button";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import { FormEvent, useEffect, useState } from "react";
import Input from "./Input";
import Colors from "@/lib/Colors";
// import Layout from "../components/Layout";

export default function Statement(props) {
  const [errors, setErrors] = useState([]);
  console.log("errors", errors);

  const inputs = [
    {
      label: "Vorname*",
      inputKey: "first_name",
      required: true,
      type: "string",
    },
    {
      label: "Nachname*",
      inputKey: "family_name",
      required: true,
      type: "string",
    },
    { label: "E-Mail*", inputKey: "email", required: true, type: "email" },
    { label: "Adresse*", inputKey: "address", required: true, type: "string" },
    { label: "PLZ*", inputKey: "plz", required: true, type: "string" },
    { label: "Ort*", inputKey: "city", required: true, type: "string" },
    {
      label: "Telefon",
      inputKey: "phone_number",
      required: false,
      type: "string",
    },
  ];

  const handleSubmit = (formData) => {
    console.log("handleSubmit", formData);
    // const { name, email, address } = Object.fromEntries(data);
    const data = Object.fromEntries(formData);
    console.log("data", data);
    let newErrors = [];
    inputs.forEach((obj) => {
      if (!data[obj.inputKey] && obj.required) {
        newErrors.push(obj.inputKey);
      }
      setErrors(newErrors);
    });

    if (newErrors.length === 0) {
      console.log("fetch");
      fetch("http://localhost:3000/api/order", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          console.log("respons", response);
          return response.json();
        })
        .then((data) => console.log("data", data))
        .catch((e) => console.log("error", e));
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        width: "74vw",
      }}
    >
      <form action={handleSubmit} style={{}}>
        {inputs.map((obj) => {
          return (
            <Input
              label={obj.label}
              inputKey={obj.inputKey}
              error={errors.includes(obj.inputKey)}
              type={obj.type}
            ></Input>
          );
        })}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: Metrics.baseMargin,
          }}
        >
          <button type="submit" style={{ all: "unset" }}>
            <Button label={"Absenden"}></Button>
          </button>
        </div>
      </form>
    </div>
  );
}

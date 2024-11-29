"use client";
import Button from "@/components/Button";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import { FormEvent, useCallback, useEffect, useState } from "react";
import Input from "./Input";
import Colors from "@/lib/Colors";
import { useRouter } from "next/navigation";
// import Layout from "../components/Layout";

export default function Statement({ id, type }) {
  const [errors, setErrors] = useState([]);
  const [saferpayUrl, setSaferpayUrl] = useState();
  const [orderId, setOrderId] = useState();
  const [iFrameHeight, setIFrameHeight] = useState(0);
  console.log("errors", errors);
  const router = useRouter();

  const handleIframeMessage = useCallback((e) => {
    console.log("handleIframeMessage", e);

    if (e.data.height) {
      setIFrameHeight(e.data.height);
    }
    if (e.data.error) {
      setSaferpayUrl(undefined);
      setOrderId(undefined);
    } else if (e.data.id) {
      // iframe finished we can thank the user
      router.push(`/bestellung/danke?id=${e.data.id}`);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleIframeMessage);

    return () => {
      window.removeEventListener("message", handleIframeMessage);
    };
  }, [handleIframeMessage]);

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
      fetch("http://localhost:3000/api/order/init", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          console.log("respons", response);
          return response.json();
        })
        .then((data) => {
          console.log("asldkfj");
          if (data.saferpay_url && data.id) {
            console.log("asldkfj");
            setSaferpayUrl(data.saferpay_url);
            setOrderId(data.id);
          }
        })
        .catch((e) => console.log("error", e));
    }
  };

  console.log("saferpayUrl", saferpayUrl);
  console.log("iFrameHeight", iFrameHeight);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {saferpayUrl ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "74vw",
            minWidth: 280,
          }}
        >
          <iframe
            // onLoad={(loadData) => {
            //   console.log("loadData", loadData);
            // }}
            style={{ border: 0 }}
            src={saferpayUrl}
            // sandbox=""
            name="fields-card-number"
            scrolling="no"
            height={iFrameHeight === 0 ? undefined : iFrameHeight}
          />
        </div>
      ) : (
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
            {inputs.map((obj, index) => {
              return (
                <Input
                  key={"input-" + index}
                  label={obj.label}
                  inputKey={obj.inputKey}
                  error={errors.includes(obj.inputKey)}
                  type={obj.type}
                ></Input>
              );
            })}
            <input type="hidden" name={"id"} value={id} />
            <input type="hidden" name={"type"} value={type} />

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
      )}
    </div>
  );
}

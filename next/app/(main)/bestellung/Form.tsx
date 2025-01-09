"use client";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import { FormEvent, useCallback, useEffect, useState } from "react";
import Input from "./Input";
import Colors from "@/lib/Colors";
import { useRouter } from "next/navigation";
import StyleSheet from "react-native-media-query";
import Select from "react-select";
import Button from "@/components/Button";
import ButtonText from "@/components/ButtonText";

export default function Statement({ id, type, options, defaultValue }) {
  const [errors, setErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [saferpayUrl, setSaferpayUrl] = useState();
  const [programName, setProgramName] = useState("");
  const [orderId, setOrderId] = useState();
  const [iFrameHeight, setIFrameHeight] = useState(0);
  // console.log("errors", errors);
  const router = useRouter();

  const handleIframeMessage = useCallback((e) => {
    // console.log("handleIframeMessage", e);

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
    const data = Object.fromEntries(formData);
    // console.log("data", data);
    let newErrors = [];
    inputs.forEach((obj) => {
      if (!data[obj.inputKey] && obj.required) {
        newErrors.push(obj.inputKey);
      }
    });

    if (data.program !== undefined && data.program === "") {
      newErrors.push("program");
    } else {
      setProgramName(data.program);
    }

    if (data.amount !== undefined && (data.amount === "" || data.amount < 5)) {
      newErrors.push("amount");
    }

    if (!data.agb) {
      newErrors.push("agb");
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      // console.log("fetch");
      setErrorMessage("");
      fetch("/api/order/init", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          // console.log("respons", response);
          return response.json();
        })
        .then((data) => {
          // console.log("data", data);
          if (data.saferpay_url && data.id) {
            setSaferpayUrl(data.saferpay_url);
            setOrderId(data.id);
          }
          if (data.errorMessage) {
            setErrorMessage(data.errorMessage);
          }
        })
        .catch((e) => console.log("error", e));
    }
  };

  // console.log("saferpayUrl", saferpayUrl);
  // console.log("saferpayUrl", saferpayUrl);
  // console.log("iFrameHeight", iFrameHeight);

  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
      }}
    >
      {saferpayUrl ? (
        <View
          style={styles.iFrameContainer}
          dataSet={{ media: ids.iFrameContainer }}
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
        </View>
      ) : (
        <View
          style={styles.formContainer}
          dataSet={{ media: ids.formContainer }}
        >
          <form action={handleSubmit} style={{}}>
            {options && (
              <>
                <View
                  style={{
                    width: "100%",
                    maxWidth: 400,
                    paddingTop: Metrics.baseMargin,
                    zIndex: 900,
                  }}
                >
                  <Text
                    style={{
                      ...Fonts.style.text,
                      paddingBottom: Metrics.halfBaseMargin,
                    }}
                  >
                    {"Support Sendung:"}
                  </Text>
                  <Select
                    name={"program"}
                    options={options}
                    defaultValue={defaultValue}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: 0,
                        alignSelf: "flex-end",
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: errors.includes("program")
                          ? "#f00"
                          : "#ccc",
                      }),
                      option: (
                        styles,
                        { data, isDisabled, isFocused, isSelected }
                      ) => ({
                        ...styles,
                        fontFamily: Fonts.type.regular,
                        letterSpacing: 0,
                        fontFeatureSettings: '"tnum" on',
                        backgroundColor: isDisabled
                          ? undefined
                          : isSelected
                            ? Colors.green
                            : isFocused
                              ? Colors.lightGreen
                              : undefined,
                      }),
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: 400,
                    paddingTop: Metrics.baseMargin,
                  }}
                >
                  <Text
                    style={{
                      ...Fonts.style.text,
                      // marginBottom: Metrics.doubleBaseMargin,
                    }}
                  >
                    {"Betrag"}
                  </Text>
                  <input
                    type={"number"}
                    name={"amount"}
                    min="5"
                    step="5"
                    style={{
                      alignSelf: "flex-end",
                      borderWidth: 1,
                      borderColor: errors.includes("amount") ? "#f00" : "#ccc",
                      borderStyle: "solid",
                      padding: "12px 16px",
                    }}
                  ></input>
                </View>
              </>
            )}

            {inputs.map((obj, index) => {
              return (
                <Input
                  key={"input-" + index}
                  error={errors.includes(obj.inputKey)}
                  {...obj}
                ></Input>
              );
            })}
            <View
              style={{ paddingTop: Metrics.baseMargin, flexDirection: "row" }}
            >
              <input type="checkbox" name="agb" id="agb" value="yes" />
              <label
                for="agb"
                style={{
                  display: "flex",
                  paddingLeft: Metrics.halfBaseMargin,
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    ...Fonts.style.textSmall,
                    color: errors.includes("agb") ? "red" : Colors.black,
                  }}
                >
                  Ich habe die
                </Text>
                <ButtonText
                  style={{ ...Fonts.style.textSmall, color: Colors.darkGreen }}
                  hoverStyle={{ color: Colors.green }}
                  href={"/agb"}
                >
                  {" RaBe AGBs "}
                </ButtonText>
                <Text
                  style={{
                    ...Fonts.style.textSmall,
                    color: errors.includes("agb") ? "red" : Colors.black,
                  }}
                >
                  glesen und akzeptiere diese.
                </Text>
              </label>
            </View>
            <input type="hidden" name={"id"} value={id} />
            <input type="hidden" name={"type"} value={type} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingTop: Metrics.baseMargin,
              }}
            >
              <button type="submit" style={{ all: "unset" }}>
                <Button label={"Absenden"}></Button>
                <div>{errorMessage}</div>
              </button>
            </View>
          </form>
        </View>
      )}
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  formContainer: {
    alignSelf: "center",
    alignItems: "center",
    width: "74vw",
    "@media (max-width: 910px)": {
      width: "90vw",
    },
  },
  iFrameContainer: {
    width: "74vw",
    minWidth: 280,
    "@media (max-width: 910px)": {
      width: "90vw",
    },
  },
});

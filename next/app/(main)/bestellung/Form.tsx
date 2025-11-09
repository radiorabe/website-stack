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

export default function Form({ id, type, options, defaultValue }) {
  const [errors, setErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [saferpayUrl, setSaferpayUrl] = useState();
  const [programName, setProgramName] = useState("");
  const [orderId, setOrderId] = useState();
  const [agbChecked, setAGBChecked] = useState(false);
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

  const inputs = {
    first_name: {
      label: "Vorname*",
      inputKey: "first_name",
      required: true,
      type: "string",
    },
    family_name: {
      label: "Name*",
      inputKey: "family_name",
      required: true,
      type: "string",
    },
    email: {
      label: "E-Mail*",
      inputKey: "email",
      required: true,
      type: "email",
    },
    address: {
      label: "Adresse*",
      inputKey: "address",
      required: true,
      type: "string",
    },
    zip: { label: "PLZ*", inputKey: "plz", required: true, type: "string" },
    city: { label: "Ort*", inputKey: "city", required: true, type: "string" },
    phone: {
      label: "Telefon",
      inputKey: "phone_number",
      required: false,
      type: "string",
    },
  };

  const handleSubmit = (formData) => {
    const data = Object.fromEntries(formData);
    console.log("data", data);
    let newErrors = [];
    // iterate over inputs
    Object.values(inputs).forEach((obj) => {
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
      console.log("done");
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

  // console.log("agbCHecked", agbChecked);
  // console.log("saferpayUrl", saferpayUrl);
  // console.log("saferpayUrl", saferpayUrl);
  // console.log("iFrameHeight", iFrameHeight);

  return (
    <View
      style={{
        // alignItems: "center",
        // backgroundColor: Colors.gray,
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
          <Text
            style={{
              ...Fonts.style.h2,
              marginBottom: Metrics.doubleBaseMargin,
            }}
          >
            {options
              ? "Danke supportest du eine unserer Sendungen"
              : "Deine Angaben bitte ausfüllen"}
          </Text>
          <form action={handleSubmit} style={{}}>
            {options && (
              <View
                style={styles.programInputsContainer}
                dataSet={{ media: ids.programInputsContainer }}
              >
                <View
                  style={{
                    flex: 1,
                    marginBottom: Metrics.baseMargin,
                  }}
                >
                  <Select
                    name={"program"}
                    options={options}
                    defaultValue={defaultValue}
                    placeholder={"Sendung wählen"}
                    styles={{
                      valueContainer: (baseStyles) => ({
                        ...baseStyles,
                        fontFamily: Fonts.type.bold,
                        fontSize: Fonts.size.text,
                        padding: "12px 16px",
                        paddingLeft: Metrics.halfBaseMargin,
                      }),
                      placeholder: (baseStyles) => ({
                        ...baseStyles,
                        fontFamily: Fonts.type.bold,
                        color: errors.includes("program")
                          ? "#FF686B"
                          : Colors.black,
                        // padding: "12px 16px",
                        // paddingLeft: Metrics.halfBaseMargin,
                      }),
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: 0,
                        alignSelf: "flex-end",
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderRadius: 8,
                        borderColor: errors.includes("program")
                          ? "#FF686B"
                          : "#000",
                      }),
                      option: (
                        styles,
                        { data, isDisabled, isFocused, isSelected }
                      ) => ({
                        ...styles,
                        fontFamily: Fonts.type.regular,
                        fontSize: Fonts.size.text,
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
                    width: Metrics.baseMargin,
                  }}
                ></View>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingLeft: Metrics.halfBaseMargin,
                      borderWidth: 1,
                      borderColor: errors.includes("amount")
                        ? "#FF686B"
                        : "#000",
                      borderRadius: 8,
                      borderStyle: "solid",
                    }}
                  >
                    <Text
                      style={{
                        ...Fonts.style.textLink,
                        color: errors.includes("amount")
                          ? "#f00"
                          : Colors.green,
                        // marginBottom: Metrics.doubleBaseMargin,
                      }}
                    >
                      {"Betrag: "}
                    </Text>
                    <input
                      type={"number"}
                      name={"amount"}
                      min="5"
                      step="5"
                      style={{
                        alignSelf: "flex-end",
                        borderRadius: 8,
                        borderWidth: 0,
                        padding: "16px 16px",
                        paddingLeft: Metrics.halfBaseMargin,
                        paddingRight: Metrics.halfBaseMargin,
                        fontFamily: Fonts.type.regular,
                        fontSize: Fonts.size.text,
                        textAlign: "right",
                        flex: 1,
                      }}
                    ></input>
                  </View>
                </View>
              </View>
            )}

            <View
              style={styles.inputContainer}
              dataSet={{ media: ids.inputContainer }}
            >
              <View style={{ flex: 1 }}>
                <Input
                  error={errors.includes(inputs.family_name.inputKey)}
                  {...inputs.family_name}
                ></Input>
              </View>

              <View
                style={{
                  width: Metrics.baseMargin,
                }}
              ></View>
              <View style={{ flex: 1 }}>
                <Input
                  error={errors.includes(inputs.first_name.inputKey)}
                  {...inputs.first_name}
                ></Input>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Input
                error={errors.includes(inputs.address.inputKey)}
                {...inputs.address}
              ></Input>
            </View>
            <View
              style={styles.inputContainer}
              dataSet={{ media: ids.inputContainer }}
            >
              <View style={{ flex: 1 }}>
                <Input
                  error={errors.includes(inputs.zip.inputKey)}
                  {...inputs.zip}
                ></Input>
              </View>
              <View style={{ width: Metrics.baseMargin }}></View>

              <View style={{ flex: 1 }}>
                <Input
                  error={errors.includes(inputs.city.inputKey)}
                  {...inputs.city}
                ></Input>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Input
                error={errors.includes(inputs.email.inputKey)}
                {...inputs.email}
              ></Input>
            </View>
            <View
              style={{
                // paddingTop: Metrics.baseMargin,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span
                onClick={() => {
                  setAGBChecked(!agbChecked);
                }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  borderWidth: 1,
                  borderColor: errors.includes("agb") ? "#FF686B" : "#000",
                  borderStyle: "solid",
                  width: Metrics.baseMargin,
                  height: Metrics.baseMargin,
                  borderRadius: 8,
                }}
              >
                <input
                  hidden
                  type="checkbox"
                  name="agb"
                  id="agb"
                  // value={agbChecked}
                  checked={agbChecked}
                  // onChange={() => {}}
                  // type="hidden"
                />
                {agbChecked === true && (
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: Metrics.halfBaseMargin,
                      height: Metrics.halfBaseMargin,
                      borderRadius: 2,
                      backgroundColor: Colors.green,
                      // borderRadius: 9,
                    }}
                  ></span>
                )}
              </span>

              <label
                htmlFor="agb"
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
                  // href={"/agb"}
                  url={process.env.NEXT_PUBLIC_FE_URL + "/agb"}
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
                justifyContent: "flex-start",
                paddingTop: Metrics.tripleBaseMargin,
              }}
            >
              <button type="submit" style={{ all: "unset" }}>
                {/* <Button label={"Absenden"}></Button> */}
                <Button full textColor={Colors.white} label={"Absenden"} />
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
    // alignSelf: "center",
    // alignItems: "center",
    // width: "100%",
    // "@media (max-width: 910px)": {
    //   width: "90vw",
    // },
    // backgroundColor: Colors.red,
  },
  inputContainer: {
    flexDirection: "row",
    "@media (max-width: 910px)": {
      flexDirection: "column",
    },
  },
  programInputsContainer: {
    width: "100%",
    flexDirection: "row",
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
    zIndex: 900,

    "@media (max-width: 910px)": {
      width: "100%",
      flexDirection: "column",
    },
  },

  iFrameContainer: {
    // width: "74vw",
    // minWidth: 280,
    // "@media (max-width: 910px)": {
    //   width: "90vw",
    // },
  },
});

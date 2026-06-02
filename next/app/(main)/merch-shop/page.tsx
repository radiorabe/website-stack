import { Metadata } from "next";
import MerchShop from "./MerchShop";

export const metadata: Metadata = {
  title: "Merch Shop",
};

export default async function MerchShopPage(props) {
  return <MerchShop></MerchShop>;
}

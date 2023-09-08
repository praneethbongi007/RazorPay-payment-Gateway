import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

function Home() {
  const checkoutHandler = async (amount) => {
    try {
      // Fetch the Razorpay API key
      const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");
      console.log("Razorpay Key:", key);

      // Create an order on your server
      const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        amount
      });
      console.log("Order:", order);

      // Configure Razorpay options
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "B.Praneeth",
        description: "RazorPay Payment Gateway",
        image: "https://avatars.githubusercontent.com/u/114381493?s=400&u=d7d52aebc92078960c4b36fb30a1510e61e1942c&v=4",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: "Praneeth Bongi",
          email: "praneethbongi.com",
          contact: "6303337548"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#121212"
        }
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems="center"
        justifyContent="center"
        direction={["column", "row"]}
      >
        <Card
          amount={5000}
          img={
            "https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={3000}
          img={
            "http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
}

export default Home;

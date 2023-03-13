import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

export const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailValue.match(validRegex)) {
      setMessage("Please use correct email address!");
    } else {
      setMessage("");
    }

    try {
      const response = await axios.post(
        "//localhost:3000/api/email-registration",
        {
          headers: {
            "Content-Type": "application/json",
          },
          email: emailValue,
          eventId,
        }
      );

      // Send a POST request
      // const response = await axios({
      //   method: "post",
      //   url: "//localhost:3000/api/email-registration",
      //   data: JSON.stringify({
      //     email: emailValue,
      //     eventId,
      //   }),
      // });
      console.log("response: ", response);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log("databalikan : ", data);
      setMessage(data.message);
      inputEmail.current.value = "";
    } catch (e) {
      console.log("Error", e);
    }
    // try {
    //   //POST-fetch-request
    //   // body- emailValue and eventId
    //   const response = await fetch("/api/email-registration", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email: emailValue, eventId }),
    //   });

    //   if (!response.ok) throw new Error(`Error: ${response.status}`);
    //   const data = await response.json();
    //   setMessage(data.message);
    //   inputEmail.current.value = "";
    // } catch (e) {
    //   console.log("Error", e);
    // }
  };

  return (
    <div className="event_single_page">
      <Image
        src={data.image_link}
        width={500}
        height={500}
        alt={data.title}
      ></Image>
      <h1>{data.title}</h1>
      <h3>Date of Event: {Date(data.event_date)}</h3>
      <h3>Quota: {data.quota}</h3>
      <p>{data.description}</p>
      <label>Get Registered for this event! </label>
      <form onSubmit={onSubmit} className="email_registration">
        <input
          ref={inputEmail}
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

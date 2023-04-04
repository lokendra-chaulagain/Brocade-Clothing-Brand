import React from "react";
import { toast } from "react-toastify";

export default function GiveAway() {
  const enterGiveAway = () => {
    toast.error("Giveaway Full");
  };
  return (
    <section className="news_letter_wrapper text-white ">
      <p className="h1">Giveaway</p>
      <p className="h4">20 hr. 12 min. 19 sec.</p>
      <button
        type="button"
        onClick={enterGiveAway}
        className="global_black_button mt-3 px-4">
        Enter the giveAway
      </button>
    </section>
  );
}

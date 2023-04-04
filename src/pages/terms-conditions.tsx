import React from "react";

export default function TermConditions() {
  return (
    <div className="pt-5 container d-flex flex-column gap-4 mb-5">
      <div>
        <p className=" h1 fw-bold pt-5">TERMS & CONDITIONS.</p>
        <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, Information Collection And Use We collect several different types of information for various purposes to provide and improve our Service to you. terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from anywhere.</p>
      </div>

      <p className="h4">Types of Data Collected</p>

      <div>
        <p className="h5">Personal Data</p>
        <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you Personal Data. Personally identifiable information may include, but is not limited to:</p>
        <ul className=" ">
          <li>
            <p className="h6 ">Email address</p>
          </li>
          <li>
            <p className="h6 ">First name and last name</p>
          </li>
          <li>
            <p className="h6 ">Cookies and Usage Data</p>
          </li>
        </ul>
      </div>

      <div>
        <p className="h5">Usage Data</p>
        <p>We may also collect information how the Service is accessed and used Usage Data. This Usage Data may include information such as your computers Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
      </div>

      <div>
        <p className="h5">Tracking & Cookies Data</p>
        <p>
          We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service. You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
        </p>
      </div>
    </div>
  );
}

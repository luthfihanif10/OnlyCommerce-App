import React, { useContext } from "react";
import "./req.css";
import { Requests } from "../../requestings";
import ReqCards from "./req-cards";
import { Navbar } from "../../components/navbar";

function Req() {
  const totalReq = getReqAmount();
  return (
    <div>
      <Navbar />
      {totalReq > 0 ? (
        <div className="requests">
          <div>
            <h1>
              Request saat ini
              <br />
            </h1>
          </div>
          <div className="req-body">
            {" "}
            {Requests.map((reqs) => {
              return <ReqCards data={reqs} />;
            })}
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Tidak ada permintaan saat ini!</h1>
      )}
    </div>
  );
}

export default Req;

function getReqAmount() {
  return Requests.length;
}

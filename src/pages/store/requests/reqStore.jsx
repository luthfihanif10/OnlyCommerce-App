import React from "react";
import "./reqStore.css";
import { Requests } from "../../../requestings";
import ReqCardStore from "./reqCardStore";
import Navbar from "../../../components/navbar1";


function ReqStore() {
  const totalReq = getReqAmount();
  return (
    <div>
      <Navbar role="toko" />
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
              return <ReqCardStore data={reqs} />;
            })}
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Tidak ada permintaan saat ini!</h1>
      )}
    </div>
  );
}

export default ReqStore;

function getReqAmount() {
  return Requests.length;
}

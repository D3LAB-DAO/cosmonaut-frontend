import React from "react";
import Error from "./Error";
import ErrorMsg from "./ErrorMsg";
import Execute from "./Execute";
import Incorrect from "./Incorrect";
import Query from "./Query";
import Success from "./Success";
import YourCode from "./YourCode";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import ExpectCode from "./ExpectCode";
let JSONPrettyMon = require("react-json-pretty/dist/monikai");
let JSONPrettyAdv = require("react-json-pretty/dist/adventure_time");

const ResultCom = ({ runSuccess, executeRes, queryRes }) => {
  return (
    <>
      {runSuccess ? (
        <div className="flex w-full">
          <div className="w-1/2">
            <Execute>Execute</Execute>
            <div>
              {executeRes.result === "success" ? (
                <Success>{executeRes.result}</Success>
              ) : null}
            </div>
            <div>
              {executeRes.result === "incorrect" ? (
                <Incorrect>{executeRes.result}</Incorrect>
              ) : null}
            </div>
            <div>
              {executeRes.result === "error" ? (
                <>
                  <Error>{executeRes.result}</Error>
                  {executeRes.errors?.map(e => (
                    <ErrorMsg>{e}</ErrorMsg>
                  ))}
                </>
              ) : null}
            </div>
          </div>
          <div className="relative w-1/2">
            <Query>Query</Query>
            <div>
              {queryRes.result === "success" ? (
                <Success>{queryRes.result}</Success>
              ) : null}
            </div>
            <div>
              {queryRes.result === "incorrect" ? (
                <Incorrect>{queryRes.result}</Incorrect>
              ) : null}
            </div>
            <div>
              {queryRes.result === "error" ? (
                <div>
                  {queryRes.errors?.map((e, index) => (
                    <ErrorMsg>
                      <p className="text-white inline">{index} : </p>
                      {e}
                    </ErrorMsg>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
      {executeRes.result === "incorrect"
        ? executeRes.differences?.map(e => (
            <>
              <div className="flex justify-between border-2 p-2 border-green-600">
                <div>
                  <YourCode>Your Codes</YourCode>
                  <JSONPretty theme={JSONPrettyMon} data={e.yours} />
                </div>
                <div>
                  <ExpectCode>Expected Codes</ExpectCode>
                  <JSONPretty theme={JSONPrettyAdv} data={e.expected} />
                </div>
              </div>
            </>
          ))
        : null}
    </>
  );
};

export default ResultCom;

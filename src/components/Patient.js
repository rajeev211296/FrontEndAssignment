import React from "react";

const Patient = () => {
  return (
    <div className="patient">
      <div className="container1">
        <div className="row1">
          <div className="col-6">
            <h1> Patient Journey </h1>
            <h3>1.Check Eligibility</h3>
            <p>
              Check your eligibility by taking up the eligibility test.If you
              are eligible,you can connect with the team at a study sight of
              your choice.
            </p>
            <h3>2.Screening Period </h3>
            <p>
              The team will connect with you and screen you with other
              preliminary tests.This can take up to 30-35 days which may be
              extended.
            </p>
            <h3>3.Treatment Period</h3>
            <p>
              Eligible candidates will receive intial treatment upto 24 weeks
              during which the health,sleep and physical activities will be
              monitored.
            </p>
            <h3>4.Follow-up Period</h3>
            <p>
              A follow-up period where you will be contacted approximately every
              12 weeks to ask how you are doing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;

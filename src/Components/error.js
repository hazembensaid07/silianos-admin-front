import React from "react";

import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <b className="screen-overlay" />

      <main className="main-wrap">
        <section className="content-main">
          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-sm-12">
              <div className="w-50 mx-auto text-center">
                <img
                  src="images/not-found.png"
                  width={350}
                  alt="Page Not Found"
                />
                <h3 className="mt-4">Oops! Page not found</h3>
                <p>
                  It's looking like you may have taken a wrong turn. Don't
                  worry... it happens to the best of us. Here's a little tip
                  that might help you get back on track.
                </p>
                <Link
                  to={{ pathname: `/admin_dashboard` }}
                  className="btn btn-primary mt-4"
                >
                  Back to main{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>{" "}
        {/* content-main end// */}
      </main>
    </div>
  );
};

export default Error;

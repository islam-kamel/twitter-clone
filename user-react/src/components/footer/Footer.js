import TwModal from "../modal/modal";
import noneLoginRequire from "../../guards/noneLoginRequire";


const footerStyle = {
  height: 72,
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
}

const footerHeadingStyle = {
  fontSize: 23,
  lineHeight: "24px",
}

const footerSubTitleStyle = {
  fontSize: 15,
}

function Footer() {
  return (
    <footer className={"bg-primary p-0 "} style={footerStyle}>

      <div className={"container-fluid container-md px-0 text-light h-100"}>
        <div className="h-100 row justify-content-center mx-0 my-auto align-items-center">
          <div className="col-2 col-lg-3 d-none d-md-block"></div>
          <div className=" col-6 d-none d-md-block p-0">
            <h3 style={footerHeadingStyle} className={"fw-bold"}>
              Don’t miss what’s happening
            </h3>
            <h5 style={footerSubTitleStyle} className={"fw-light"}>
              People on Twitter are the first to know.
            </h5>
          </div>
          <div className="col">
            <div className={"row w-100 row-cols-2 justify-content-sm-around mx-0 my-auto align-items-center"}>
              <div className={"col"}>
                <TwModal.ModalButton
                  title={"Login"}
                  targetId={"login-modal"}
                  classes={"rounded-5 w-100"}
                  btnStyle={"outline-light"}
                />
              </div>
              <div className={"col"}>
                <TwModal.ModalButton
                  title={"Sign up"}
                  targetId={"signup-modal"}
                  classes={"rounded-5 w-100"}
                  btnStyle={"light"}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default noneLoginRequire(Footer);

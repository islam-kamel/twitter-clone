import TwButton from "../tw-button/tw-button";


const footerStyle = {
    height: 72,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
}

const footerHeadingStyle = {
    fontSize: 23,
    lineHeight: '24px',
}

const footerSubTitleStyle = {
    fontSize: 15,
}
export default function Footer() {
    return (
        <footer className={"bg-primary p-0"} style={footerStyle}>
            <div className={"container text-light h-100"}>
                <div className="h-100 row justify-content-center align-items-center">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 col-lg-6 d-sm-none d-md-block">
                        <h3 style={footerHeadingStyle} className={"fw-bold"}>Don’t miss what’s happening</h3>
                        <h5 style={footerSubTitleStyle} className={"fw-light"}>People on Twitter are the first to
                            know.</h5>
                    </div>
                    <div className="col-md-2 col h-100">
                        <div className={"row row-cols-2 justify-content-sm-around h-100 mx-auto my-auto align-items-center"}>
                            <div className={'col'}>
                                <TwButton btnStyle={"outline-light rounded-5 w-100"}>Login</TwButton>
                            </div>
                            <div className={'col'}>
                                <TwButton btnStyle={"light rounded-5 w-100"}>Login</TwButton>
                            </div>
                        </div>

                        {/*<LogIN/>*/}

                        {/*<JoinNowTwitter/>*/}
                    </div>
                </div>

            </div>
        </footer>
    );
}

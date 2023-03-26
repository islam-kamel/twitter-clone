import TwButton from "../tw-button/tw-button";
import Login from "../login/login";
import TwModal from "../modal/modal";


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
                    <div className="col-md-3"></div>
                    <div className=" col-6 d-none d-md-block p-0">
                        <h3 style={footerHeadingStyle} className={"fw-bold"}>Don’t miss what’s happening</h3>
                        <h5 style={footerSubTitleStyle} className={"fw-light"}>People on Twitter are the first to
                            know.</h5>
                    </div>
                    <div className="col h-100">
                        <div className={"row row-cols-2 justify-content-sm-around h-100 my-auto align-items-center"}>
                            <div className={'col'}>
                                <TwModal.ModalButton title={'Login'} targetId={'login-modal'} classes={'rounded-5 w-100'} btnStyle={'outline-light'}/>
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

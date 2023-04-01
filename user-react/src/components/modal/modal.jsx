import React, {ButtonHTMLAttributes, MouseEventHandler} from "react";

const contentContainerStyle = {
    maxHeight: "90vh",
    minHeight: 430,
    minWidth: 600,
    height: 650
}

/**
 * @param {string} id use for set modal id
 * @param {string} modalStyle use for set class name for modal
 * @returns {TwModal, TwModal.Body, TwModal.Header, TwModal.Footer, TwModal.ModalButton}
 * */
class TwModal extends React.Component {

    _label: string = (id) => `${id}Label`;

    /**
     *
     * @return React.Component
     * @param props
     * */
    static Header(props: {
        title?: string,
        children?: React.Component | React.Component[],
        defaultBtn?: boolean,
        classes?: string,
        label?: string
    }) {
        function DefaultBtn() {
            return (
                <button
                    type={"button"}
                    className={"btn-close ms-0 rounded-5"}
                    data-bs-dismiss={"modal"}
                    aria-label={"Close"}
                ></button>
            );
        }

        return (
            <div className={"modal-header border-0 pt-0"}>
                {props?.children ?? (
                    <div className={"row w-100 g-0 justify-content-center align-items-center"}>
                        <div className={"col-4"}>
                            {props?.defaultBtn ? <DefaultBtn/> : false}
                        </div>
                        <div className={"col"}>

                            <h1 className={`modal-title ${props?.classes ?? "fs-5"}`}
                                id={`${props?.label}Label`}>{props.title}</h1>
                        </div>
                        <div className={"col-4"}></div>
                    </div>
                )}

            </div>
        );
    }

    /**
     * @param {React.Component} children use to set Component in Footer body
     * @param {React.HTMLAttributes.className} classes set custom class for header element
     * @return React.Component
     * */
    static Footer({children, classes}) {
        return (
            <div className={`modal-footer ${classes ?? null}`}>
                {children}
            </div>
        );
    }

    /**
     * @param {React.Component} children use to set Component in body
     * @param {React.HTMLAttributes.className} classes set custom class for header element
     * @return React.Component
     * */
    static Body({children, classes}) {
        return (
            <div className={`modal-body ${classes ?? null}`}>
                {children}
            </div>
        );
    }

    /**
     * @return React.Component
     * @param props
     * */
    static ModalButton(
        props: {
            targetId: string,
            btnStyle?: string,
            withOutButton?: boolean,
            classes?: string,
            title?: string,
            children?: React.ReactElement,
            other?: MouseEventHandler | ButtonHTMLAttributes
        }
    ) {
        const elementRole = {
            type: "button",
            className: `btn btn-${props.btnStyle ?? "primary"} ${props.classes ?? ""}`,
            "data-bs-toggle": "modal",
            "data-bs-target": `#${props.targetId}`,
        }
        return (
            <>
                {!props?.withOutButton
                    ? (
                        <button
                            {...elementRole}
                            {...props.other}
                        >
                            {props.title ? props.title : props.children ? props.children : "Tw Model"}
                        </button>
                    ) : (
                        <span  {...elementRole} className={""}>{props?.children}</span>
                    )
                }

            </>
        );
    }

    render() {
        return (

            <div
                className={"modal fade"}
                id={this.props.id}
                tabIndex="-1"
                aria-labelledby={this._label(this.props.id)}
                aria-hidden="true"
            >
                <div className={`modal-dialog ${this.props.modalStyle ?? "modal-dialog-centered"}`}>
                    <div className={"modal-content rounded-4"} style={contentContainerStyle}>
                        {this.props.children.length ? this.getMap() : this.props.children}
                    </div>
                </div>
            </div>
        );
    }

    getMap() {
        return this.props.children.map(child => child.type !== TwModal.ModalButton ? child : false);
    }
}

export default TwModal;

import React from "react";

/**
 * @param {string} id use for set modal id
 * @param {string} modalStyle use for set class name for modal
 * @returns {TwModal, TwModal.Body, TwModal.Header, TwModal.Footer, TwModal.ModalButton}
 * */
class TwModal extends React.Component {

    _label: string = (id) => `${id}Label`;

    /**
     * @param {string} title set Modal title
     * @param {boolean} defaultBtn option to render Default button or not default true
     * @param {React.HTMLAttributes.className} classes set custom class for header element
     * @param {string} label use to set element id
     * @return React.Component
     * */
    static Header({title, defaultBtn = true, classes, label = "TwModal"}) {
        function DefaultBtn() {
            return (
                <button
                    type={"button"}
                    className={"btn-close"}
                    data-bs-dismiss={"modal"}
                    aria-label={"Close"}
                ></button>
            );
        }

        return (
            <div className={"modal-header"}>
                <h1 className={`modal-title ${classes ?? "fs-5"}`} id={`${label}Label`}>{title}</h1>
                {defaultBtn ? <DefaultBtn/> : false}
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
     * @param {string} targetId use to set target modal
     * @param {string} btnStyle set custom style for button
     * @param {string} title set title for button
     * @param {React.HTMLAttributes.className} classes set custom class for header element
     * @return React.Component
     * */
    static ModalButton({targetId, btnStyle, classes, title}) {
        return (
            <button
                type="button"
                className={`btn btn-${btnStyle ?? "primary"} ${classes ?? null}`}
                data-bs-toggle="modal"
                data-bs-target={`#${targetId}`}
            >
                {title ?? "Tw Model"}
            </button>
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
                    <div className={"modal-content"}>
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

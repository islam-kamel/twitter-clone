# User-React App

## Reusable Component
- ### TwModal
  - Example
  ```jsx
    <TwModal.ModalButton targetId={"myModal"} title={"Show Form"} btnStyle={"outline-dark"} classes={"any-other-classes-names"}/>
    <TwModal
        id={"myModal"}
        modalStyle={"modal-dialog-static or-other-classes-name"}
    >
        <TwModal.Header
            title={"My New Modal"}
            classes={"text-primary fs-5 custom-class-for-element"}
        />
        <TwModal.Body>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with
                            anyone else.
                        </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </TwModal.Body>
        <TwModal.Footer>
            <button className={"btn btn-secondary"}>FooterButton</button>
        </TwModal.Footer>
    </TwModal>
  ```
  ----
  - ## TwButton 
    - Example
    ```jsx
        <TwButton 
            btnStyle={'outline-primary'}
            classes={'text-dark'}
        >
            FooterButton
        </TwButton>
    ```
  - ## TwInput
    - Example
    ```jsx
        <TwInput
           type={'email'} // text id default
           id={'id'}
           labelText={'label text'}
           errorMessage={'your message'}
           errorClasses={'text-danger'}
           other={{
                onChange: (event) => console.log(event.target),
                placeholder: 'Youer Holder here',
                // you can added any element attrbuite like className ! not recomended.
           }}
        />
    ```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

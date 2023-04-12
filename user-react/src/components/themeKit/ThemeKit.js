import React from "react";

export default function ThemeKit() {
  return (
    <>
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"/>
          </button>
          <a className="navbar-brand" href="#!">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
              <li className="nav-item active">
                <a className="nav-link" href="#!">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#!">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
            </form>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-lg-3 col-md-6">
              {/*Body text*/}
              <p>Hello. I'm a little bit of body text. Plain and simple.</p>
              {/*Badges*/}
              <span className="badge badge-primary">Primary</span>
              <span className="badge badge-secondary">Secondary</span>
              <span className="badge badge-success">Success</span>
              <span className="badge badge-danger">Danger</span>
              <span className="badge badge-warning">Warning</span>
              <span className="badge badge-info">Info</span>
              <span className="badge badge-light">Light</span>
              <span className="badge badge-dark">Dark</span>
              {/*Breadcrumb*/}
              <nav aria-label="breadcrumb" role="navigation">
                <ol className="breadcrumb mt-2">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Data
                  </li>
                </ol>
              </nav>
              {/*Buttons*/}
              <div>
                <button type="button" className="btn btn-primary">
                  Primary
                </button>
                <button type="button" className="btn btn-secondary">
                  Secondary
                </button>
                <button type="button" className="btn btn-success">
                  Success
                </button>
                <button type="button" className="btn btn-danger">
                  Danger
                </button>
              </div>
              <div className="mt-2">
                <button type="button" className="btn btn-warning">
                  Warning
                </button>
                <button type="button" className="btn btn-info">
                  Info
                </button>
                <button type="button" className="btn btn-light">
                  Light
                </button>
                <button type="button" className="btn btn-dark">
                  Dark
                </button>
              </div>
              {/*Outline Buttons*/}
              <div className="mt-2">
                <button type="button" className="btn btn-outline-primary">
                  Primary
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Secondary
                </button>
                <button type="button" className="btn btn-outline-success">
                  Success
                </button>
                <button type="button" className="btn btn-outline-danger">
                  Danger
                </button>
              </div>
              <div className="mt-2">
                <button type="button" className="btn btn-outline-warning">
                  Warning
                </button>
                <button type="button" className="btn btn-outline-info">
                  Info
                </button>
                <button type="button" className="btn btn-outline-light">
                  Light
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Dark
                </button>
              </div>
              {/*Checkbox buttons*/}
              <div className="mt-3">
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-primary active">
                    <input type="checkbox" defaultChecked="" autoComplete="off"/> Yes
                  </label>
                  <label className="btn btn-primary">
                    <input type="checkbox" autoComplete="off"/> No
                  </label>
                </div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-secondary active">
                    <input type="checkbox" defaultChecked="" autoComplete="off"/> Yes
                  </label>
                  <label className="btn btn-secondary">
                    <input type="checkbox" autoComplete="off"/> No
                  </label>
                </div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-success active">
                    <input type="checkbox" defaultChecked="" autoComplete="off"/> Yes
                  </label>
                  <label className="btn btn-success">
                    <input type="checkbox" autoComplete="off"/> No
                  </label>
                </div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-danger active">
                    <input type="checkbox" defaultChecked="" autoComplete="off"/> Yes
                  </label>
                  <label className="btn btn-danger">
                    <input type="checkbox" autoComplete="off"/> No
                  </label>
                </div>
              </div>
              <div className="mt-2">
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-warning active">
                    <input type="checkbox" defaultChecked="" autoComplete="off"/> Yes
                  </label>
                  <label className="btn btn-warning">
                    <input type="checkbox" autoComplete="off"/> No
                  </label>
                </div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-info active">
                    <input type="checkbox" defaultChecked="" autoComplete="off"/> Yes
                  </label>
                  <label className="btn btn-info">
                    <input type="checkbox" autoComplete="off"/> No
                  </label>
                </div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-light active">
                    <input type="checkbox" defaultChecked="" autoComplete="off"/> Yes
                  </label>
                  <label className="btn btn-light">
                    <input type="checkbox" autoComplete="off"/> No
                  </label>
                </div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-dark active">
                    <input type="checkbox" defaultChecked="" autoComplete="off"/> Yes
                  </label>
                  <label className="btn btn-dark">
                    <input type="checkbox" autoComplete="off"/> No
                  </label>
                </div>
              </div>
              {/*Dropdown buttons*/}
              <div className="mt-3">
                <div className="btn-group">
                  <button type="button" className="btn btn-primary">
                    Primary
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                {/* /btn-group */}
                <div className="btn-group">
                  <button type="button" className="btn btn-secondary">
                    Secondary
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                {/* /btn-group */}
                <div className="btn-group">
                  <button type="button" className="btn btn-success">
                    Success
                  </button>
                  <button
                    type="button"
                    className="btn btn-success dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                {/* /btn-group */}
              </div>
              <div className="mt-2">
                <div className="btn-group">
                  <button type="button" className="btn btn-info">
                    Info
                  </button>
                  <button
                    type="button"
                    className="btn btn-info dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                {/* /btn-group */}
                <div className="btn-group">
                  <button type="button" className="btn btn-warning">
                    Warning
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                {/* /btn-group */}
                <div className="btn-group">
                  <button type="button" className="btn btn-danger">
                    Danger
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                {/* /btn-group */}
              </div>
              {/*Forms*/}
              <div className="mt-3">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Form label</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Form Text - To give hints and things
                    </small>
                  </div>
                </form>
              </div>
              <div className="mt-2">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Custom check
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" htmlFor="customRadio1">
                    Custom radio
                  </label>
                </div>
                <select className="custom-select">
                  <option selected="">Custom select menu</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
              <div className="mt-2">
                <label className="custom-file">
                  <input type="file" id="file" className="custom-file-input"/>
                  <span className="custom-file-control"/>
                </label>
              </div>
              {/*Pagination*/}
              <div className="mt-2">
                <nav aria-label="...">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#!">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                <span className="page-link">
                  2<span className="sr-only">(current)</span>
                </span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#!">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#!">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mt-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-light"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-dark"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="progress mt-2">
                  <div
                    className="progress-bar progress-bar-striped bg-primary"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar progress-bar-striped bg-secondary"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar progress-bar-striped bg-success"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar progress-bar-striped bg-info"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar progress-bar-striped bg-warning"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar progress-bar-striped bg-danger"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar progress-bar-striped bg-light"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar progress-bar-striped bg-dark"
                    role="progressbar"
                    style={{width: "16%"}}
                    aria-valuenow={16}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/*Alerts*/}
              <div className="mb-2 alert alert-primary" role="alert">
                This is a primary alert with{" "}
                <a href="#" className="alert-link">
                  an example link
                </a>
                .
              </div>
              <div className="mb-2 alert alert-secondary" role="alert">
                This is a secondary alert with{" "}
                <a href="#" className="alert-link">
                  an example link
                </a>
                .
              </div>
              <div className="mb-2 alert alert-success" role="alert">
                This is a success alert with{" "}
                <a href="#" className="alert-link">
                  an example link
                </a>
                .
              </div>
              <div className="mb-2 alert alert-danger" role="alert">
                This is a danger alert with{" "}
                <a href="#" className="alert-link">
                  an example link
                </a>
                .
              </div>
              <div className="mb-2 alert alert-warning" role="alert">
                This is a warning alert with{" "}
                <a href="#" className="alert-link">
                  an example link
                </a>
                .
              </div>
              <div className="mb-2 alert alert-info" role="alert">
                This is a info alert with{" "}
                <a href="#" className="alert-link">
                  an example link
                </a>
                .
              </div>
              <div className="mb-2 alert alert-light" role="alert">
                This is a light alert with{" "}
                <a href="#" className="alert-link">
                  an example link
                </a>
                .
              </div>
              <div className="mb-2 alert alert-dark" role="alert">
                This is a dark alert with{" "}
                <a href="#" className="alert-link">
                  an example link
                </a>
                .
              </div>
              <div className="mt-2">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-primary">
                    Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    Cras justo odio
                  </li>
                  <li className="list-group-item list-group-item-success">
                    Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item list-group-item-danger">
                    Porta ac consectetur ac
                  </li>
                  <li className="list-group-item list-group-item-warning">
                    Vestibulum at eros
                  </li>
                  <li className="list-group-item list-group-item-info">
                    Cras justo odio
                  </li>
                  <li className="list-group-item list-group-item-light">
                    Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    Porta ac consectetur ac
                  </li>
                </ul>
              </div>
            </div>
            {/*Progress*/}
            <div className="col-lg-6 mt-lg-0 mt-4">
              <div
                className="card text-white bg-primary mb-2 d-inline-block"
                style={{maxWidth: "18rem"}}
              >
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h4 className="card-title">Primary card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                </div>
              </div>
              <div
                className="card text-white bg-secondary mb-2 d-inline-block"
                style={{maxWidth: "18rem"}}
              >
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h4 className="card-title">Secondary card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                </div>
              </div>
              <div
                className="card text-white bg-success mb-2 d-inline-block"
                style={{maxWidth: "18rem"}}
              >
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h4 className="card-title">Success card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                </div>
              </div>
              <div
                className="card text-white bg-danger mb-2 d-inline-block"
                style={{maxWidth: "18rem"}}
              >
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h4 className="card-title">Danger card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                </div>
              </div>
              <div
                className="card text-white bg-warning mb-2 d-inline-block"
                style={{maxWidth: "18rem"}}
              >
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h4 className="card-title">Warning card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                </div>
              </div>
              <div
                className="card text-white bg-info mb-2 d-inline-block"
                style={{maxWidth: "18rem"}}
              >
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h4 className="card-title">Info card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                </div>
              </div>
              <div
                className="card bg-light mb-2 d-inline-block"
                style={{maxWidth: "18rem"}}
              >
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h4 className="card-title">Light card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                </div>
              </div>
              <div
                className="card text-white bg-dark mb-2 d-inline-block"
                style={{maxWidth: "18rem"}}
              >
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h4 className="card-title">Dark card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                </div>
              </div>
              <div>
                <table className="table table-hover table-striped table-">
                  <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Column</th>
                    <th>Column</th>
                    <th>Column</th>
                    <th>Column</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td className="table-primary">Content</td>
                    <td className="table-secondary">Content</td>
                    <td className="table-success">Content</td>
                    <td className="table-danger">Content</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td className="table-warning">Content</td>
                    <td className="table-info">Content</td>
                    <td className="table-light">Content</td>
                    <td className="table-dark">Content</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td className="bg-primary">Content</td>
                    <td className="bg-secondary">Content</td>
                    <td className="bg-success">Content</td>
                    <td className="bg-danger">Content</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td className="bg-warning">Content</td>
                    <td className="bg-info">Content</td>
                    <td className="bg-light">Content</td>
                    <td className="bg-dark">Content</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>

    </>
  );
}

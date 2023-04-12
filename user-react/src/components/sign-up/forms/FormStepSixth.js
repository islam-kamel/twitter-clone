function FormStepSixth(props: { handleSubmit: Function }) {

  return (
    <form className="mt-3" onSubmit={props?.handleSubmit}>
      <h2 className="mb-3"><b>Pick a profile picture</b></h2>
      <span
        className="p-0 fs-6 fw-light text-secondary mb-5"
      >
                Have a favorite selfie? Upload it now.
            </span>
      <div className="image-upload">
        <label htmlFor="file-input">
          <i className="bi bi-camera"></i>
        </label>
        <input id="file-input" type="file"/>
      </div>
    </form>
  );
}

export default FormStepSixth;

function FormWrapper(props: {children: React.Component, title: string}) {
  return (
    <div className="row row-cols-1 gy-0 d-flex flex-column overflow-y-scroll overflow-x-hidden"
         style={{minHeight: 0, height: "90%"}}>
      <h2 className="fw-bold">{props?.title}</h2>
      <div className={"mt-2"}>{props?.children}</div>
    </div>
  );
}

export default FormWrapper;

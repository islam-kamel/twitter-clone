import React from 'react';

const OneMessage = () => {
    return (
        <>
            <div className=" container-fluid msg1">

                <span className="row p-1 ">
                    <img alt={'...'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU" className="col-2 col-md-2 col-lg-2 " />
                    <span className="col-1 col-lg-1  ps-1">Safaa </span>

                    <span className="col-3 col-lg-3 "> @safaa123 </span>

                    <span className="col-4  col-lg-4 ">Feb 2</span>

                    <span className="col-2 col-lg-2"><i className="bi bi-three-dots more" title="More"></i></span>
                    <p className="col-12 ps-5 ms-3">hi safaa </p>
                </span>

            </div>
        </>
    );
}

export default OneMessage;

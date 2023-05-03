import Card from "../card/card";
import "./home.style.css";
import { emoji, gif, imageIcon, poll } from "../../constants/icons";
import TwButton from "../tw-button/tw-button";
import authGuard from "../../guards/authGuard";
import { useEffect, useRef, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../../store/features/tweets/tweets";
import Header from "../header/header";
import Picker from "emoji-picker-react";
import { useTranslation } from "react-i18next";

export function NewTweet(props) {
  const axiosPrivate = useAxiosPrivate();
  const userInfo = useSelector((state) => state.currentUser.userProfile);
  const media = useRef();
  const [fileUrl, setFileUrl] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const inputValue = useRef(null);

  const [t] = useTranslation();

  const handleEmojiClick = (emojiObject) => {
    inputValue.current.value += emojiObject.emoji;
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handelInputChange = (e) => {
    const file = e.target.files;
    if (file?.length) {
      for (let f of file) {
        const obj_url = URL.createObjectURL(f);
        setFileUrl([...fileUrl, { preview: obj_url, file: f, type: f.type }]);
      }
    }
  };

  async function createTweet(data) {
    return await axiosPrivate.post("api/tweet/create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
 


  const handelSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);


    const validDate = {
      content: formData.get("content"),
      user: userInfo?.id,
      media: [
        ...fileUrl.map((item) => {
          return { file: item.file };
        }),
      ],
    };
    if(props?.callBackFunction)
    {
      return props.callBackFunction(validDate)
    }
    createTweet(validDate)
      .then((res) => console.log(res))
      .catch((error) => console.log(error.response.data))
      .finally(() => {
        event.target?.reset();
        setFileUrl([]);
      });
  };

  return (
    <div className="card p-3 new_tweet border-0 col-12">
      <div className="row g-0 justify-content-start align-items-start">
        <div className={"col-1 me-3"}>
          <img
            src={
              process.env.REACT_APP_MEDIA_BASE_URL + userInfo?.profile?.image
            }
            alt="img"
            className="rounded-circle tw-profile-image"
          />
        </div>
        <form className={"col w-100"} onSubmit={handelSubmit}>
          <div
            className={
              "d-flex align-self-start align-items-center justify-content-center w-100"
            }
          >
            <div className={"w-100 ms-3"}>
              <textarea
                dir={t("dir")}
                name={"content"}
                ref={inputValue}
                autoFocus 
                className={"form-control border-0  h-100"}
                placeholder={t(props?.placeholder || "home.what_happening")}
                style={{ resize: "none" }}
              />
              <div
                className={
                  "d-flex overflow-x-auto flex-nowrap flex-row  overflow-y-auto "
                }
                style={{ maxHeight: 200 }}
              >
                {fileUrl.map((url) => {
                  if (url.type.includes("video")) {
                    return (
                      <div className={"position-relative"}>
                        <button
                          onClick={() => {
                            setFileUrl((el) => {
                              return el.filter(
                                (item) => item.preview !== url.preview
                              );
                            });
                          }}
                          className={
                            "my-1 mx-2 position-absolute z-1 end-0  btn btn-sm  btn-light rounded-circle "
                          }
                        >
                          <i className={"bi bi-x"}></i>
                        </button>
                        <div className={"card border-0 w-100"}>
                          <video className={"card-img img-fluid "} controls>
                            <source src={url.preview}></source>
                          </video>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div className={"position-relative"}>
                      <button
                        onClick={() => {
                          setFileUrl((el) => {
                            return el.filter(
                              (item) => item.preview !== url.preview
                            );
                          });
                        }}
                        className={
                          " my-1 mx-2 position-absolute z-1 end-0  btn btn-sm  btn-light rounded-circle "
                        }
                      >
                        <i className={"bi bi-x"}></i>
                      </button>
                      <div className={"card border-0 w-100"}>
                        <img
                          className={"card-img  px-1"}
                          src={url.preview}
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className={
                  "mt-3 text-primary d-flex justify-content-between align-items-center"
                }
              >
                <div className={"row row-cols-4 g-0 w-50"}>
                  <input
                    onChange={handelInputChange}
                    ref={media}
                    hidden={true}
                    type={"file"}
                    name={"image"}
                    multiple
                    accept={"image/*, video/*"}
                  />
                  <span onClick={() => media.current?.click()} role={"button"}>
                    {" "}
                    {imageIcon}{" "}
                  </span>
                  <span role={"button"}> {gif} </span>
                  <span role={"button"}> {poll} </span>
                  <span role={"button"} onClick={togglePicker}>
                    {" "}
                    {emoji}{" "}
                  </span>
                  {showPicker && (
                    <div className={"position-relative mt-1"}>
                      <div className={"position-absolute"}>
                        <Picker
                          onEmojiClick={handleEmojiClick}
                          emojiStyle={"twitter"}
                          lazyLoadEmojis={true}
                          autoFocusSearch={true}
                          suggestedEmojisMode={"frequent"}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <TwButton
                  other={{
                    type: "submit",
                  }}
                  btnStyle={"primary"}
                  classes={"rounded-pill w-25 align-self-end"}
                >
                  {t(props?.buttonText || "home.tweet")}
                </TwButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function Tweets() {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.tweets || []);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return tweets.map((tweet) => {
    return <Card key={tweet.id} tweet={tweet} />;
  });
}

function Home() {
  const [t] = useTranslation();
  return (
    <main className="">
      <Header>
        <Header.Top>
          <h1 className={"p-4"} style={{ fontSize: "20px", fontWeight: "600" }}>
            {t("home.title")}
          </h1>
        </Header.Top>
        <Header.Down>
          <h3 style={{ fontSize: "18px", fontWeight: "400" }}>
            {t("home.foru")}{" "}
          </h3>
          <h3 style={{ fontSize: "18px", fontWeight: "400" }}>
            {t("home.following")}{" "}
          </h3>
        </Header.Down>
      </Header>

      {/*New Tweet Start*/}
      <NewTweet />
      {/*New Tweet End*/}
      <Tweets />
    </main>
  );
}

export default authGuard(Home);

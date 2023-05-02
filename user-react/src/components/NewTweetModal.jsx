import React from "react";
import TwModal from "./modal/modal";
import NewToTwitter from "./new-to-twitter/NewToTwitter";
import { NewTweet } from "./home/home";

const NewTweetModal = () => {
  return (
    <>
      <TwModal id={"NewTweetModal"}>
        <TwModal.Header defaultHeader></TwModal.Header>
        <TwModal.Body>
          <NewTweet />
        </TwModal.Body>
      </TwModal>
    </>
  );
};

export default NewTweetModal;

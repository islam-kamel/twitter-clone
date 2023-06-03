import {threeDots} from "../../constants/icons";
import Card from "../card/card";
import TwDropdown from "../twDropdown/TwDropdown";
import {Link} from "react-router-dom";
import authGuard from "../../guards/authGuard";
import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Header from "../header/header";
import {deleteBookmark, fetchBookmarks} from "../../store/features/user/user";


function Bookmarks() {
  const [t] = useTranslation();
  const bookmarks = useSelector(state => state.currentUser.bookmarks)
  const userInfo = useSelector(state => state.currentUser.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookmarks())
  }, [dispatch])

  const handleDeleteAllBookmarks = useCallback(() => {
    dispatch(deleteBookmark({tweet: true, all: true, method: "delete"}))
    dispatch(fetchBookmarks())
  }, [dispatch])

  return (
    <>
      <Header>
        <Header.Top>
          <div className="d-flex align-items-center mt-2 w-100">
            <div className={"mx-3"}>
              <i
                role={"button"}
                className="bi bi-arrow-left cursor-pointer bi-fw-bolder fs-4"
              ></i>
            </div>
            <div className={'d-flex align-items-center justify-content-between w-100'}>
              <div className={"d-flex flex-column"}>
                <h1 className={"fw-bold m-0"}>Bookmarks</h1>
                <span className={"text-muted"}>@{userInfo.username}</span>
              </div>

              <TwDropdown
                down={true}
                toggle={
                  <TwDropdown.Toggle>
                    <span role={"button"} className={'mx-3'}>{threeDots}</span>
                  </TwDropdown.Toggle>
                }
              >
                <Link onClick={handleDeleteAllBookmarks} to={"#"}
                      className={"text-danger text-decoration-none"}>{t('bookmarks.remove_bookmarks')}</Link>
              </TwDropdown>
            </div>
          </div>
        </Header.Top>
      </Header>
      <div className={"container h-100 border p-0"}>

        <div className={"d-flex flex-column p-0"}>


          {bookmarks.map((bookmark) => <Card key={bookmark.id} tweet={bookmark.tweet}/>) }
        </div>
      </div>
    </>
  );
}

export default authGuard(Bookmarks);

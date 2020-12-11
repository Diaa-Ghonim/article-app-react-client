

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Style from '../style.module.scss';
import { deleteArticle } from '../../../actions';


export default ({ article }) => {
  const dispatch = useDispatch();
  const mainUser = useSelector(({ mainUser }) => (mainUser));
  const isMainUserOwnerThisArticle = mainUser.user.username === article.ownerUsername;

  return (
    <>
      <div className={Style.dropdown} >
        {
          isMainUserOwnerThisArticle && (
            <div
              className={Style.listContainer}
              onClick={() => dispatch(deleteArticle(article.id))}
            >
              <div className={Style.icon}>
                <svg viewBox="0 0 24 24" height='24' width='24'><g><path d="M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"></path><path d="M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"></path></g></svg>
              </div>
              <div className={Style.textContainer}>
                <div>
                  <span>Remove</span>
                </div>
              </div>

            </div>
          )
        }



        <div className={Style.listContainer}>
          <div className={Style.icon}>
            <svg viewBox="0 0 24 24" ><g><path d="M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z"></path></g></svg>
          </div>
          <div className={Style.textContainer}>
            <div>
              <span>Pin to your profile</span>
            </div>
          </div>

        </div>


        <div className={Style.listContainer}>
          <div className={Style.icon}>
            <svg viewBox="0 0 24 24"><g><path d="M23.804 11.5l-6.496-7.25c-.278-.31-.752-.334-1.06-.06-.308.277-.334.752-.058 1.06L22.238 12l-6.047 6.75c-.275.308-.25.782.06 1.06.142.127.32.19.5.19.204 0 .41-.084.558-.25l6.496-7.25c.252-.28.258-.713 0-1zm-23.606 0l6.496-7.25c.278-.31.752-.334 1.06-.06.308.277.334.752.058 1.06L1.764 12l6.047 6.75c.277.308.25.782-.057 1.06-.143.127-.322.19-.5.19-.206 0-.41-.084-.56-.25L.197 12.5c-.252-.28-.257-.713 0-1zm9.872 12c-.045 0-.09-.004-.135-.012-.407-.073-.68-.463-.605-.87l3.863-21.5c.074-.407.466-.674.87-.606.408.073.68.463.606.87l-3.864 21.5c-.065.363-.38.618-.737.618z"></path></g></svg>
          </div>
          <div className={Style.textContainer}>
            <div>
              <span>Embed Article</span>
            </div>
          </div>

        </div>

        <div className={Style.listContainer}>
          <div className={Style.icon}>
            <svg viewBox="0 0 24 24" ><g><path d="M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z"></path></g></svg>
          </div>
          <div className={Style.textContainer}>
            <div>
              <span>View Article activity</span>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

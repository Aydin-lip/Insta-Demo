import * as INFOR from "./typeActions";

export const LOGO = (data) => ({
  type: INFOR.Logo,
  payload: data,
});
export const POSTSLIKE = (data) => ({
  type: INFOR.PostsLikeInfor,
  payload: data,
});
export const POSTSSAVED = (data) => ({
  type: INFOR.PostsSavedInfor,
  payload: data,
});
export const changeMODALshare = (data) => ({
  type: INFOR.changeModalShare,
  payload: data,
});
export const changeMODALcomments = (data) => ({
  type: INFOR.changeModalComment,
  payload: data,
});
export const changeMODALmoreOption = (data) => ({
  type: INFOR.changeModalMoreOption,
  payload: data,
});
export const changeNAVBARwindow = (data) => ({
  type: INFOR.changeNavbarWindow,
  payload: data,
});
export const changeNEWPOST = (data) => ({
  type: INFOR.changeNewPost,
  payload: data,
});
export const changeNEWmessage = (data) => ({
  type: INFOR.changeNewMessage,
  payload: data,
});
export const changeNEWaccount = (data) => ({
  type: INFOR.changeNewAccount,
  payload: data,
});
export const changeBOXmessage = (data) => ({
  type: INFOR.changeBoxMessage,
  payload: data,
});
export const changeDETAILSdirect = (data) => ({
  type: INFOR.changeDetailsDirect,
  payload: data,
});
export const changeACTIVITY = (data) => ({
  type: INFOR.changeActivity,
  payload: data,
});
export const changeADDsavedBox = (data) => ({
  type: INFOR.changeAddSavedBox,
  payload: data,
});
export const changePROFILE = (data) => ({
  type: INFOR.changeProfile,
  payload: data,
});

export const ACCOUNT = (data) => ({
  type: INFOR.Account,
  payload: data,
});
export const LOGGIN = (data) => ({
  type: INFOR.Loggin,
  payload: data,
});
export const USERSapi = (data) => ({
  type: INFOR.UsersAPI,
  payload: data,
});
export const POSTSapi = (data) => ({
  type: INFOR.PostsAPI,
  payload: data,
});
export const COMMENTSapi = (data) => ({
  type: INFOR.CommentsAPI,
  payload: data,
});
export const ERRORUSERS = (data) => ({
  type: INFOR.ErrorUsers,
  payload: data,
});
export const ERRORPOSTS = (data) => ({
  type: INFOR.ErrorPosts,
  payload: data,
});

export const SAVEcomments = (data) => ({
  type: INFOR.Comments,
  payload: data,
});
export const SETfollowers = (data) => ({
  type: INFOR.Followers,
  payload: data,
});
export const SETfollowing = (data) => ({
  type: INFOR.Following,
  payload: data,
});
export const SEARCH = (data) => ({
  type: INFOR.Search,
  payload: data,
});

export const MESSAGE = (data) => ({
  type: INFOR.MessageDirect,
  payload: data,
});

export const MEPOSTS = (data) => ({
  type: INFOR.MePosts,
  payload: data,
});

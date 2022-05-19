import * as INFOR from "./typeActions";

export const changePostInformation = (data) => ({
  type: INFOR.changePostInformation,
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

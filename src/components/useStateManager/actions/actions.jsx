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
import { del, get, post, put } from "./api_helper";
import * as url from "./url_helper_api";

const postLogin = (data) => post(url.POST_LOGIN, data);
const postSignup = (data) => post(url.POST_SIGNUP, data);
const postOTPResend = (data) => post(url.POST_OTP_RESEND, data);
const postOTPVerify = (data) => post(url.POST_OTP_VERIFY, data);
const postCreateBid = (data) => post(url.POST_CREATE_BID, data);
const getPaginatedBids = (bidQuery) => get(`${url.GET_BIDS}?${bidQuery}`);
const postChangePassword = (data) => post(url.POST_CHANGE_PASSWORD, data);
const getNotifications = (data) => get(url.GET_NOTIFICATIONS, data);
const putReadNotification = (data) => put(url.PUT_READ_NOTIFICATION, data);
const postCreateWallet = (data) => post(url.POST_CREATE_WALLET, data);
const getFetchWallet = () => get(url.GET_FETCH_WALLET);
const postStartTrade = (data) => post(url.POST_START_TRADE, data);
const getTradesList = (tradeQuery) =>
  get(`${url.GET_TRADES_LIST}?${tradeQuery}`);
const getTradeById = (id) => get(`${url.GET_TRADE_BY_ID}/${id}`);
const postEngageUser = (params) => post(`${url.POST_ENGAGE_USER}/${params}`);
const postCancelTrade = (id) => post(url.POST_CANCEL_TRADE, id);
const postCompleteTrade = (id) => post(url.POST_COMPLETE_TRADE, id);
const postUpdateTradeStatus = (id) => post(url.POST_UPDATE_TRADE_STATUS, id);
const getPKRDPrice = () => get(url.GET_PKRD_PRICE);
const postCreateIPInfo = (data) => post(url.POST_CREATE_IP_INFO, data);
const getFetchIPInfo = () => get(url.GET_FETCH_IP_INFO);
const postAddExchange = (data) => post(url.POST_ADD_EXCHANGE, data);

export {
  postLogin,
  postSignup,
  postOTPResend,
  postOTPVerify,
  postCreateBid,
  getPaginatedBids,
  postChangePassword,
  getNotifications,
  putReadNotification,
  postCreateWallet,
  postStartTrade,
  postEngageUser,
  getFetchWallet,
  getTradesList,
  getPKRDPrice,
  getTradeById,
  postCancelTrade,
  postCompleteTrade,
  postUpdateTradeStatus,
  postCreateIPInfo,
  getFetchIPInfo,
  postAddExchange
};


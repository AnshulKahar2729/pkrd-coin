const baseUrl = "http://localhost:5004/api/";

export const POST_LOGIN = `${baseUrl}auth/login`;
export const POST_SIGNUP = `${baseUrl}auth/sign_up`;
export const POST_OTP_RESEND = `${baseUrl}auth/resend_otp`;
export const POST_OTP_VERIFY = `${baseUrl}auth/verify_otp`;
export const POST_CREATE_BID = `${baseUrl}bids/add`;
export const GET_BIDS = `${baseUrl}bids/list`;
export const POST_CHANGE_PASSWORD = `${baseUrl}auth/change_password`;
export const GET_NOTIFICATIONS = `${baseUrl}notification/list`;
export const PUT_READ_NOTIFICATION = `${baseUrl}notification/read-notification`;
export const POST_CREATE_WALLET = `${baseUrl}wallet/add`;
export const GET_FETCH_WALLET = `${baseUrl}wallet/view`;
export const POST_START_TRADE = `${baseUrl}trade/trade-start`;
export const GET_TRADES_LIST = `${baseUrl}trade/list`;
export const GET_TRADE_BY_ID = `${baseUrl}trade/view`;
export const POST_CANCEL_TRADE = `${baseUrl}trade/cancel-trade`;
export const POST_COMPLETE_TRADE = `${baseUrl}trade/edit`;
export const POST_UPDATE_TRADE_STATUS = `${baseUrl}trade/update-status`;
export const POST_ENGAGE_USER = `${baseUrl}trade/engage-user`;
export const GET_PKRD_PRICE = `https://api.coingecko.com/api/v3/coins/tether`;

// IP_INFO
export const POST_CREATE_IP_INFO = `${baseUrl}ip_info/add`;
export const GET_FETCH_IP_INFO = `${baseUrl}ip_info/view`;

// EXCHANGE
export const POST_ADD_EXCHANGE = `${baseUrl}exchange/add`;

// ?page=1&limit=10&sort=1&activeStatus=1

export const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export const ACCOUNT_ACTIONS = {
  DEPOSIT: "account/deposit",
  WITHDRAW: "account/withdraw",
  REQUEST_LOAN: "account/request_loan",
  PAY_LOAN: "account/pay_loan",
};

export const accountReducer = function (state = accountInitialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACCOUNT_ACTIONS.DEPOSIT: {
      return {
        ...state,
        balance: state.balance + payload,
      };
    }

    case ACCOUNT_ACTIONS.WITHDRAW: {
      return {
        ...state,
        balance: state.balance - payload,
      };
    }

    case ACCOUNT_ACTIONS.REQUEST_LOAN: {
      if (state.loan > 0) return;
      return {
        ...state,
        balance: balance + payload.amount,
        loanPurpose: payload.purpose,
      };
    }

    case ACCOUNT_ACTIONS.PAY_LOAN: {
      return {
        ...state,
        balance: state.balance + state.loan,
        loan: 0,
      };
    }
  }
};

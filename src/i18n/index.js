import en_US from "./en-US";
import da_DK from "./da-DK";

export const messages = {
  "en-US": en_US,
  "da-DK": da_DK
};

export const numberFormats = {
  "en-US": {
    currency: {
      style: "currency",
      currency: "DKK"
    }
  },
  "da-DK": {
    currency: {
      style: "currency",
      currency: "DKK"
    }
  }
};

export const dateTimeFormats = {
  'en-US': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric'
    }
  },
  'da-DK': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric', hour24: true
    }
  }
}

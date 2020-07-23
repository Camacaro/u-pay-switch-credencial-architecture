'use strict';

export default (value) => {
  const notBase64 = /[^A-Z0-9+/=]/i;

  if (notBase64.test(value)) {
    return false;
  }

  return true;
};

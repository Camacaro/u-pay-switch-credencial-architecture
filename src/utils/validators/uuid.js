'use strict';

export default (str) => {
  const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (regex.test(str)) {
    return true;
  }

  return false;
};

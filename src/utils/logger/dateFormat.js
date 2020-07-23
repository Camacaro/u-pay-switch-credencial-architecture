'use strict';

import moment from 'moment';

export default (type) => {
  if (type === 'day') {
    return moment(new Date()).format('DD');
  }
  if (type === 'month') {
    return moment(new Date()).format('MM');
  }
  if (type === 'year') {
    return moment(new Date()).format('YYYY');
  }

  return undefined;
};

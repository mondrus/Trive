/**
 * @Author: philip
 * @Date:   2017-05-30T10:15:14+00:00
 * @Filename: formatDate.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-30T10:16:11+00:00
 */

import moment from 'moment';


export default (date, format="DD.MM.YYYY") => (
  moment(date).format(format)
);


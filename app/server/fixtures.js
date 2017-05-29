/**
 * @Author: philip
 * @Date:   2017-05-26T17:10:06+00:00
 * @Filename: fixtures.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-26T17:14:01+00:00
 */


import NewsRooms from '/lib/collections/newsRooms';
import NewsRoomsList from './newsRooms';

if (!NewsRooms.findOne()) {
  NewsRoomsList.map((newsRoom) => {
    NewsRooms.insert(newsRoom);
  });
}

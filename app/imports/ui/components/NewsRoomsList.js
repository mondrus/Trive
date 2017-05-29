/**
 * @Author: philip
 * @Date:   2017-05-27T20:49:09+00:00
 * @Filename: NewsRoomsList.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T13:43:29+00:00
 */



import React from 'react';
import NewsRoomItem from './NewsRoomItem';

export default ({ newsRooms, showRssFeedModal }) => (
  <div>
    {newsRooms.map(({ ...data }, index) => (
      <NewsRoomItem key={index} showRssFeedModal={showRssFeedModal} { ...data } />
    ))}
  </div>
);

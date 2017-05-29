/**
 * @Author: philip
 * @Date:   2017-05-26T12:23:35+00:00
 * @Filename: outlets.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-26T17:14:42+00:00
 */

import { Random } from 'meteor/random';

// TODO: change to collection
const NewsRooms = [
  {
    name: 'CNN',
    tag: 'cnn',
    description: '',
    image: 'https://d35fkdjhhgt99.cloudfront.net/static/use-media-items/28/27012/full-1400x1400/5670256f/cnn-logo-square.png?resolution=0',
    link: '',
    rss: [
      {
        _id: Random.id(),
        title: 'Top Stories',
        url: 'http://rss.cnn.com/rss/edition.rss'
      },
      {
        _id: Random.id(),
        title: 'World',
        url: 'http://rss.cnn.com/rss/edition_world.rss'
      },
      {
        _id: Random.id(),
        title: 'Africa',
        url: 'http://rss.cnn.com/rss/edition_africa.rss'
      },
      {
        _id: Random.id(),
        title: 'Americas',
        url: 'http://rss.cnn.com/rss/edition_americas.rss'
      },
      {
        _id: Random.id(),
        title: 'Asia',
        url: 'http://rss.cnn.com/rss/edition_asia.rss'
      },
      {
        _id: Random.id(),
        title: 'Europe',
        url: 'http://rss.cnn.com/rss/edition_europe.rss'
      },
      {
        _id: Random.id(),
        title: 'Middle East',
        url: 'http://rss.cnn.com/rss/edition_meast.rss'
      }
    ]
  },
  {
    name: 'BBC News',
    tag: 'bbc',
    description: '',
    image: 'https://vignette2.wikia.nocookie.net/logos2/images/9/92/Bbc_news_logo_2016.png/revision/20150322100649',
    link: '',
    rss: [
      {
        _id: Random.id(),
        title: 'Top Stories',
        url: 'http://rss.cnn.com/rss/edition.rss'
      },
      {
        _id: Random.id(),
        title: 'World',
        url: 'http://rss.cnn.com/rss/edition_world.rss'
      },
      {
        _id: Random.id(),
        title: 'Africa',
        url: 'http://rss.cnn.com/rss/edition_africa.rss'
      },
      {
        _id: Random.id(),
        title: 'Americas',
        url: 'http://rss.cnn.com/rss/edition_americas.rss'
      },
      {
        _id: Random.id(),
        title: 'Asia',
        url: 'http://rss.cnn.com/rss/edition_asia.rss'
      },
      {
        _id: Random.id(),
        title: 'Europe',
        url: 'http://rss.cnn.com/rss/edition_europe.rss'
      },
      {
        _id: Random.id(),
        title: 'Middle East',
        url: 'http://rss.cnn.com/rss/edition_meast.rss'
      }
    ]
  }
];

global.NewsRooms = NewsRooms;
export default NewsRooms;


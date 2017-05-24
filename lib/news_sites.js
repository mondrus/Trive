/**
 * @Author: philip
 * @Date:   2017-05-23T08:19:06+00:00
 * @Filename: news_sites.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-23T22:34:02+00:00
 */

// http://edition.cnn.com/services/rss/

const newsSites = [
  {
    name: 'CNN',
    tag: 'cnn',
    image: '',
    link: '',
    rss: [
      {
        title: 'Top Stories',
        url: 'http://rss.cnn.com/rss/edition.rss'
      },
      {
        title: 'World',
        url: 'http://rss.cnn.com/rss/edition_world.rss'
      },
      {
        title: 'Africa',
        url: 'http://rss.cnn.com/rss/edition_africa.rss'
      },
      {
        title: 'Americas',
        url: 'http://rss.cnn.com/rss/edition_americas.rss'
      },
      {
        title: 'Asia',
        url: 'http://rss.cnn.com/rss/edition_asia.rss'
      },
      {
        title: 'Europe',
        url: 'http://rss.cnn.com/rss/edition_europe.rss'
      },
      {
        title: 'Middle East',
        url: 'http://rss.cnn.com/rss/edition_meast.rss'
      }
    ]
  }
];

global.NewsSites = newsSites;

// export default newsSite;

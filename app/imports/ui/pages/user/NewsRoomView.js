/**
 * @Author: philip
 * @Date:   2017-05-27T21:54:22+00:00
 * @Filename: NewsRoomView.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T14:57:32+00:00
 */



import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ArticleList from '../../components/ArticleList';
import moment from 'moment';

const NothingHere = () => (
  <div>Nothing here for now</div>
);

const formatDate = (date, format="DD.MM.YYYY") => (
  moment(date).format(format)
);

class NewsRoomView extends Component {
  constructor(props) {
    super(props);
    
    props.setTitle(this.props.tag);
  }
  
  render() {
    const { tag, articles } = this.props;

    return (
      <div className="fh-breadcrumb">
          <div className="fh-column">
              <div className="full-height-scroll">
                  <ul className="list-group elements-list">
                      {articles.map((article, index) => (
                        <li key={index} className="list-group-item">
                            <a data-toggle="tab" href="#tab-1">
                                <small className="pull-right text-muted"> {formatDate(article.pubDate)}</small>
                                <strong>{tag}</strong>
                              <div className="small m-t-xs">
                                    <p>
                                        {article.title}
                                    </p>
                                </div>
                            </a>
                        </li>
                      ))}
                  </ul>
              </div>
          </div>

          <div className="full-height">
              <div className="full-height-scroll white-bg border-left">

                  <div className="element-detail-box">

                      <div className="tab-content">
                          <div id="tab-1" className="tab-pane">

                              <div className="pull-right">
                                  <div className="tooltip-demo">
                                      <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="left" title="Plug this message"><i className="fa fa-plug"></i> Plug it</button>
                                    <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="Mark as read"><i className="fa fa-eye"></i> </button>
                                  <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as important"><i className="fa fa-exclamation"></i> </button>
                                <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash"><i className="fa fa-trash-o"></i> </button>

                                  </div>
                              </div>
                              <div className="small text-muted">
                                  <i className="fa fa-clock-o"></i> Friday, 12 April 2014, 12:32 am
                              </div>

                              <h1>
                                  Their separate existence is a myth
                              </h1>

                              <p>
                                  The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                              </p>
                              <p>
                                  The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.
                              </p>
                              <p>
                                  The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.
                              </p>

                              <p>
                                  The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                              </p>
                              <p>
                                  The new common language will be more simple and regular than the existing European languages. It will be as simpl.
                              </p>
                              <p>
                                  To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                              </p>
                              <p>
                                  The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.
                              </p>
                              <p>
                                  It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.
                              </p>

                              <p>
                                  The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                              </p>
                              <p>
                                  To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                              </p>
                              <p className="small">
                                  <strong>Best regards, Anthony Smith </strong>
                              </p>

                              <div className="m-t-lg">
                                  <p>
                                      <span><i className="fa fa-paperclip"></i> 2 attachments - </span>
                                      <a href="#">Download all</a>
                                      |
                                      <a href="#">View all images</a>
                                  </p>
                              </div>

                          </div>
                      </div>

                  </div>

              </div>
          </div>
      </div>
      // <div className="wrapper wrapper-content">
      //   <div className="row">
      //     <Col lg={3}>
      //       <div className="ibox float-e-margins">
      //         <div className="ibox-content mailbox-content">
      //           <div className="file-manager">
      //             <div className="space-25"></div>
      //             <h5>Feeds</h5>
      //             <ArticleList articles={articles} />
      //             <div className="clearfix"></div>
      //           </div>
      //         </div>
      //       </div>
      //     </Col>
      //     <div className="col-lg-9 animated fadeInRight">
      //       <NothingHere />
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default NewsRoomView;

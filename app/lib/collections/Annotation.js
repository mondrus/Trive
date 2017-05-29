/**
 * @Author: philip
 * @Date:   2017-05-27T14:06:26+00:00
 * @Filename: Annotations.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-27T14:11:02+00:00
 */



class Annotation {
  constructor(doc) {
    _.extend(this, doc);
  }
  
  allAnnotations() {
    console.log('allAnnotations', this.annotations);
    const annotations = this.annotations;
    return annotations;
  }
}

export default Annotation;

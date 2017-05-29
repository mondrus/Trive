/**
 * @Author: philip
 * @Date:   2017-05-28T06:53:00+00:00
 * @Filename: CustomAnnotationStorage.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-28T07:30:38+00:00
 */


export default ({ story, annotations }) => {
  return {
    create(annotation) {
      console.debug('create', annotation);
      Meteor.call('createStoryAnnotation', story, annotation);
      return annotation;
    },
    
    update(annotation) {
      console.debug('update', annotation);
      Meteor.call('updateStoryAnnotation', story, annotation);
      return annotation;
    },
    
    delete(annotation) {
      console.debug('delete', annotation);
      Meteor.call('deleteStoryAnnotation', story, annotation);
      return annotation;
    },
    
    query: function(queryObj) {
      if (annotations) {
        return { results: annotations };
      }
      
      return { results: [] };
    },
    
    configure(registry) {
      registry.registerUtility(this, 'storage');
    }
  }
};

export const UserUtil = () => {
  return {
    beforeAnnotationCreated(annotation) {
      annotation.createdAt = new Date();
      annotation.updatedAt = new Date();
      annotation.createdBy = Meteor.userId();
      console.log('beforeAnnotationCreated', annotation);
    },
    
    beforeAnnotationUpdated(annotation) {
      console.log('beforeAnnotationUpdated');
    }
    
  }
}

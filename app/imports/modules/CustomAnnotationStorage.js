/**
 * @Author: philip
 * @Date:   2017-05-28T06:53:00+00:00
 * @Filename: CustomAnnotationStorage.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-30T09:13:36+00:00
 */


export default ({ story, annotations }) => {
  return {
    create(annotation) {
      Meteor.call('createStoryAnnotation', story, annotation);
      return annotation;
    },
    
    update(annotation) {
      Meteor.call('updateStoryAnnotation', story, annotation);
      return annotation;
    },
    
    delete(annotation) {
      Meteor.call('deleteStoryAnnotation', story, annotation);
      return annotation;
    },
    
    query(queryObj) {
      if (queryObj) {
        return { results: queryObj };
      }
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
    },
    
    beforeAnnotationUpdated(annotation) {
      console.log('beforeAnnotationUpdated');
    }
    
  }
}

/**
 * @Author: philip
 * @Date:   2017-05-27T01:02:44+00:00
 * @Filename: annotations.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-27T14:22:14+00:00
 */


import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import Annotation from './Annotation';

const AnnotationSchema = new SimpleSchema({
  id: { type: String },
  quote: { type: String },
  ranges: { type: [Object], blackbox: true },
  text: { type: String },
  createdBy: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date }  
});

const AnnotationsSchema = new SimpleSchema({
  _id: { type: String },
  storyId: { type: String },
  annotations: { type: [AnnotationSchema], blackbox: true }
});


const Annotations = new Mongo.Collection('annotations', {
  transform: doc => (new Annotation(doc))
});

global.Annotations = Annotations;

Annotations.attachSchema(AnnotationsSchema);

export default Annotations;

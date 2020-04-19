import { Meteor } from 'meteor/meteor';

import { IsMakinesies } from '../../../imports/collections/isMakinesies';

Meteor.publish('isMakinesiList', function() {
  return IsMakinesies.find({});
});

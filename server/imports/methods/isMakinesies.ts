import { Meteor } from 'meteor/meteor';

import { IsMakinesies } from '../../../imports/collections/isMakinesies';
import { IsMakinesi } from 'imports/models/IsMakinesi';

Meteor.methods({
  addIsMakinesi(data : IsMakinesi) {
    IsMakinesies.insert(data);
  },
  removeIsMakinesi(_id: string) {
    IsMakinesies.remove({
      _id
    })
  },
  findByIdIsMakinesi(_id: string) {
    IsMakinesies.find({
      _id
    })
  }
})

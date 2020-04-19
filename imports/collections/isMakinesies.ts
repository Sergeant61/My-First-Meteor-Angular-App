import { MongoObservable } from 'meteor-rxjs';

import { IsMakinesi } from '../models/IsMakinesi';

export const IsMakinesies = new MongoObservable.Collection<IsMakinesi>('isMakinesies');

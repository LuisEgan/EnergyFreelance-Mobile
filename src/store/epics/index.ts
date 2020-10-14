import { combineEpics, createEpicMiddleware } from 'redux-observable';
import epics from './epics';

export const rootEpic = combineEpics(epics);

export default createEpicMiddleware();

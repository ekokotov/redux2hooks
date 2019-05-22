import EventTypes from './event-types';

export function getEventTextByType(type) {
  switch (type) {
    case EventTypes.create:
      return 'created a repository';
    case EventTypes.fork:
      return 'forked repository';
    case EventTypes.comment:
      return 'leaved comment';
    case EventTypes.issue:
      return 'opened issue';
    default:
      return 'starred'
  }
}

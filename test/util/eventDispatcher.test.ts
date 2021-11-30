import { EventDispatcher, Event } from '../../src/util/event';
import { BaseEventTypes } from '../../src';

describe('EventDispatcherのテスト', () => {
  const eventDispatcher = new EventDispatcher<BaseEventTypes>();
  const mockCB1 = jest.fn<Event, any>();
  const mockCB2 = jest.fn<Event, any>();

  test('addEventListenerのテスト', () => {
    eventDispatcher.addEventListener('test1', mockCB1);
    expect(eventDispatcher['_eventListeners'].get('test1')).toEqual([mockCB1]);

    eventDispatcher.addEventListener('test2', mockCB2);
    expect(eventDispatcher['_eventListeners'].get('test2')).toEqual([mockCB2]);
    eventDispatcher.addEventListener('test2', mockCB2);
    expect(eventDispatcher['_eventListeners'].get('test2')).toEqual([
      mockCB2,
      mockCB2,
    ]);
  });

  test('dispatchEventのテスト', () => {
    eventDispatcher.dispatchEvent('test1', new Event('Test'));
    expect(mockCB1.mock.calls.length).toBe(1);
    eventDispatcher.dispatchEvent('test1', new Event('Test'));
    expect(mockCB1.mock.calls.length).toBe(2);
    expect(() =>
      eventDispatcher.dispatchEvent('test3', new Event('Test'))
    ).toThrow();
  });

  test('removeEventListenerのテスト', () => {
    eventDispatcher.removeEventListener('test1');
    expect(eventDispatcher['_eventListeners'].get('test1')).toBeUndefined();

    eventDispatcher.removeEventListener('test2');
    expect(eventDispatcher['_eventListeners'].get('test2')).toBeUndefined();
  });
});

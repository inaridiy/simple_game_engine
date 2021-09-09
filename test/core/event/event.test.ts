import { EventDispatcher } from '../../../src/core/event';
const spyLog = jest.spyOn(console, 'log');
spyLog.mockImplementation((x: string) => x);

describe('EventDispatcherのテスト', () => {
  const eventDispatcher = new EventDispatcher<string>();
  test('addEventLisnerのテスト', () => {
    eventDispatcher.addEventListener('test', () => {
      console.log('test1');
    });
    expect('test' in eventDispatcher._eventListeners).toBe(true);

    eventDispatcher.addEventListener('test', () => {
      console.log('test2');
    });

    expect(eventDispatcher._eventListeners.test.length).toBe(2);
  });
});

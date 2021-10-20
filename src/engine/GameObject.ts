import { classDecorator } from './event';

@classDecorator<GameObject>()
export class GameObject {}

const obj = new GameObject();
obj.on;

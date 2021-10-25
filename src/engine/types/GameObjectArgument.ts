import { Component } from '../Component';
import { GameObject } from '../GameObject';
import { System } from '../System';

export type GameObjectArgument = {
  components?: Component[];
  children?: GameObject[];
  systems?: System[];
};

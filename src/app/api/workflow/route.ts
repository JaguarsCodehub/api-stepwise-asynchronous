// http:localhost:3000/api/workflow

import { Workflow } from './core';

const workflow = new Workflow();

export const { POST } = workflow.createWorkflow((step) => {
  step
    .create((input) => {
      return { age: 25 };
    })
    .create(async (input) => {
      return { name: 'John' };
    })
    .create(async (input) => {
      return { name: 'John' };
    })
    .create(async (input) => {
      return { name: 'John' };
    });
});

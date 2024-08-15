import * as core from '@actions/core';
import * as github from '@actions/github';

async function main() {
  console.log('Main function');

  // `who-to-greet` input defined in action metadata file
  const nameToGreet: string = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload: string = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);

  const time: string = (new Date()).toTimeString();
  core.setOutput('time', time);
}

async function post() {
  console.log('Post function');
}

try {
  // We call this file twice in action.yaml: as `main:` and as `post:`.
  // This state lets us differentiate betwee the two cases.
  const runPostFunction = !!core.getState('runPostFunction');
  if (!runPostFunction) {
    core.saveState('runPostFunction', 'true');
    main();
  } else {
    post();
  }
} catch (err: any) {
  core.setFailed(`Action failed with error ${err}`);
}

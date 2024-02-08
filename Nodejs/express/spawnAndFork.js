const { spawn } = require('child_process');

// Spawn a new process to execute 'ls' command
const ls = spawn('ls', ['-lh', '/usr']);

// Listen for data from the child process
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


const { fork } = require('child_process');

// Fork a new Node.js process to run another JavaScript file
const child = fork('child.js');

// Listen for messages from the child process
child.on('message', (message) => {
  console.log('Message from child:', message);
});

// Send a message to the child process
child.send({ hello: 'world' });

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//console.log(secretMessage.length);
secretMessage.pop();
//console.log(secretMessage.length);

secretMessage.push('to', 'Program');

secretMessage[7] = 'right';

secretMessage.shift();
secretMessage.shift('Programming');
//console.log(secretMessage);
secretMessage.splice(2, 5, 'know');

console.log(secretMessage.join(' '));

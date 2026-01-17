module.exports = {
  name: 'hello', // metadata
  description: 'Responds with a random fun message',
  execute(message) {
    const content = message.content.replace(/<@!?(\d+)>/g, '').trim().split(/\s+/)[0];

    if (content === 'hi') {  // exact match, case-sensitive
      const responses = [
        'huh',
        'hi',
        'sup m8',
        'who pinged me',
        'yo wsg'
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.channel.send(randomResponse);
    }
  },
};

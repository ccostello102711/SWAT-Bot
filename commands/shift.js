// Shift command implementation

module.exports = {
    name: 'shift',
    description: 'Shifts items to the left or right in an array',
    execute(message, args) {
        const direction = args[0];
        const items = args.slice(1);

        if (direction !== 'left' && direction !== 'right') {
            return message.reply('Please specify the direction: `left` or `right`.');
        }

        if (direction === 'left') {
            const shifted = items.shift();
            items.push(shifted);
        } else if (direction === 'right') {
            const shifted = items.pop();
            items.unshift(shifted);
        }

        return message.channel.send(items.join(' '));
    },
};
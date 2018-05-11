export function normalizeMessages(messages = []) {
  return messages.data.map((message) => {
    const newMessage = Object.assign({}, message);
    newMessage.isChecked = false;
    return newMessage;
  });
}

export default {
  normalizeMessages,
};

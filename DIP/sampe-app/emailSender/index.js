const emailProvider = {
  sendEmail: (emailAddress, message) => {
    console.log(`"${message}" has ben sent to "${emailAddress}"`);
  },
};

module.exports = function sendEmailMessage(user, message) {
  emailProvider.sendEmail(user.email, message);
};

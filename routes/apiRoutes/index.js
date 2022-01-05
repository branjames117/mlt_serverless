const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/membership-application', ({ body }, res) => {
  const {
    payerID,
    type,
    name,
    businessName,
    birthday,
    others,
    address,
    phone,
    email,
    referred,
    consent,
    listingPreference,
  } = body;

  const message = `A new ${type} membership form has been submitted.

PayerID: ${payerID ? payerID : 'Not found'}
Membership Start Date: ${new Date().toDateString()}
Membership End Date: ${new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  ).toDateString()}
Membership Type: ${type}
Name: ${name}
Birthday (MM/DD): ${birthday}
Other Names and Birthdays on Membership:
  ${others}
Address:
  ${address}
Phone: ${phone}
Email: ${email}
Referred by: ${referred ? referred : 'None'}
Social media consent: ${consent}
Listing preference: ${listingPreference ? listingPreference : 'No preference'}`;

  const businessMessage = `A new ${type} membership form has been submitted.
  
PayerID: ${payerID ? payerID : 'Not found'}
Membership Start Date: ${new Date()}
Membership End Date: ${new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  ).toDateString()}
Membership Type: ${type}
Name: ${name}
Business Name: ${businessName}
Address:
  ${address}
Phone: ${phone}
Email: ${email}
Referred by: ${referred ? referred : 'None'}
Social media consent: ${consent}
Listing preference: ${listingPreference ? listingPreference : 'No preference'}`;

  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  let mailDetails = {
    from: process.env.APP_EMAIL,
    // to: process.env.APP_PERSONAL,
    to: process.env.APP_ADRESSEES,
    subject: 'New Membership Form Submitted',
    text: businessName ? businessMessage : message,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) console.log(err);
  });

  res.redirect('../thank-you');
});

module.exports = router;

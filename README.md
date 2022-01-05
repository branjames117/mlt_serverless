# Murfreesboro Little Theater - since 1962

# 59 Years of Continuous Community Theater

- Mobile responsive using Tailwind CSS and a collapsible menu for mobile.

## HOME PAGE - /

- Announcements
- Business Member Appreciation
- Links to Penguin Project, TN Arts Commission, TN Specialty Plates

## NOW SHOWING - /now-showing

## MEMBERSHIP - /membership

## ABOUT US - /about-us

- The donation button on this page is broken.

## CONTACT - /contact

## TICKET POLICY - /ticket-policy

## HISTORY - /history

- Each decade will be on-demand rendered on the same page, with a View All button as well
- 1962-1971 Seasons
- 1972-1981 Seasons
- 1982-1991 Seasons
- 1992-2001 Seasons
- 2002-2011 Seasons
- 2012-2021 Seasons

## EVENTS - tickets.

- Stick with Alf.io backend.

## Footer

- Mailing address, donation button, links to social (FB, Twitter, Insta).

## Backend

- Processing Membership forms following successful PayPal payment:
  - Member information is stored in a database, with "Name or Business Name" "Email Address" "Plan (Individual, Couple, Family, Business)" "Membership Activated" "Membership Expires" "Active Member"
  - An email is also generated that is sent to the person in charge of memberships so they know a new member plan was just purchased. Use Nodemailer module and a throwaway gmail account.

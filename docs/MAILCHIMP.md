Mailchimp newsletter signup (static JSONP)

Overview
- The site is a static export, so we integrate Mailchimp using their JSONP endpoint (no server/API key needed).
- The newsletter form posts to Mailchimp’s audience via `post-json` and shows success/error messages inline.

Configure Mailchimp variables
1) In Mailchimp, go to Audience → Signup forms → Embedded forms.
2) Copy the form action URL. It looks like:
   https://<dc>.list-manage.com/subscribe/post?u=<u>&id=<id>
   - <dc> is your datacenter (e.g., us21)
   - <u> is your user/account hash (public)
   - <id> is your Audience/List ID (public)
3) Add these as public env vars at build time:
   - NEXT_PUBLIC_MAILCHIMP_DC=<dc>
   - NEXT_PUBLIC_MAILCHIMP_U=<u>
   - NEXT_PUBLIC_MAILCHIMP_ID=<id>

GitHub Pages (CI) setup
- Define the three variables under GitHub → Settings → Variables → Repository variables.
- The workflow `.github/workflows/deploy.yml` already forwards them to the build environment.

Local development
- Create `.env.local` in the repo root:

  NEXT_PUBLIC_MAILCHIMP_DC=us21
  NEXT_PUBLIC_MAILCHIMP_U=abc123abc123abc123abc123
  NEXT_PUBLIC_MAILCHIMP_ID=1234567890

Notes
- Double opt-in behavior and confirmation emails are controlled by your Mailchimp audience settings.
- The form maps fields to Mailchimp merge tags: `EMAIL`, `FNAME`, `LNAME`.
- No API keys are used or exposed; these are the same public values used in Mailchimp’s embed forms.


# Native Screens — LeadConnector / GoHighLevel Lead Messages
Owner: Larry · Phone: (954) 966-0163

NOTE: Keep {{contact.first_name}} exactly as written — GHL swaps in the real name.
If a lead has no name, GHL leaves it blank, so each message still reads fine without it.

====================================================================
1) MISSED-CALL TEXT-BACK  (fires when a call is missed)
====================================================================
Trigger: Call Status = Missed  →  Action: Send SMS

MESSAGE:
Hi, this is Native Screens — sorry we missed your call! We're likely out on a
job. Reply here with what you need (rescreen, new enclosure, repair) and your
address, and we'll get right back to you. Or call us at (954) 966-0163. — Larry

--------------------------------------------------------------------
Shorter version (if you prefer):
Hi, it's Native Screens — sorry we missed you! Text us what you need and we'll
call you right back. (954) 966-0163

====================================================================
2) WEBSITE FORM AUTO-REPLY  (fires when the "Get a Quote" form is submitted)
====================================================================
Trigger: Form Submitted  →  Actions: Send SMS + Send Email

SMS:
Hi {{contact.first_name}}, thanks for reaching out to Native Screens! We got
your quote request and we'll call you shortly to set up a free estimate. Need us
sooner? Call or text (954) 966-0163. — Larry

EMAIL SUBJECT:
We got your request — Native Screens

EMAIL BODY:
Hi {{contact.first_name}},

Thanks for contacting Native Screens! We received your request and we'll reach
out shortly to schedule your free, no-pressure estimate.

We've been South Florida's family-owned screen enclosure company since 1972 —
pool enclosures, rescreens, screen rooms, aluminum roofs, and super gutters.

Prefer to talk now? Call or text (954) 966-0163 and a real person will help you.

Talk soon,
Larry
Native Screens
(954) 966-0163
www.nativescreens.com

====================================================================
3) QUOTE FOLLOW-UP SEQUENCE  (for leads that went quiet after an estimate)
====================================================================
Build as a Workflow with Wait steps. Trigger it when you tag a lead "Quoted".

--- Follow-up #1  (wait 2 days after quote) --- SMS:
Hi {{contact.first_name}}, it's Larry at Native Screens. Just checking in on the
estimate we gave you — any questions I can answer? Happy to walk you through it.
(954) 966-0163

--- Follow-up #2  (wait 4 more days, so ~6 days total) --- SMS:
Hi {{contact.first_name}}, following up one more time on your screen enclosure
estimate. We'd love to earn your business — and our schedule is filling up. Just
reply here or call (954) 966-0163 when you're ready. — Larry, Native Screens

--- (Optional) Follow-up #3  (wait 7 more days) --- SMS:
Hi {{contact.first_name}}, no pressure at all — just keeping the door open on
your enclosure project. Whenever you're ready, we're here. (954) 966-0163

====================================================================
4) REVIEW REQUEST  (fires when you mark a job "Completed")
====================================================================
Trigger: Tag added "Job Complete"  →  Wait 2 hours  →  Send SMS

MESSAGE (swap in your DIRECT Google review link once you have it):
Hi {{contact.first_name}}, thank you for choosing Native Screens! If you were
happy with the work, a quick Google review really helps our family business —
it takes 30 seconds: [PASTE GOOGLE REVIEW LINK]. Thank you! — Larry

====================================================================
SETUP CHECKLIST (in GoHighLevel / LeadConnector)
====================================================================
[ ] Settings → Trust Center → confirm A2P 10DLC is REGISTERED & APPROVED
    (texts won't send until this is done — do this first)
[ ] Settings → Phone Numbers → enable "Missed Call Text Back", paste msg #1
[ ] Automation → Workflows → New → trigger "Form Submitted" → add SMS + Email (#2)
[ ] Automation → Workflows → New → trigger "Contact Tag: Quoted" → Wait/SMS steps (#3)
[ ] Automation → Workflows → New → trigger "Contact Tag: Job Complete" → Wait 2h → SMS (#4)
[ ] Test each one by submitting your own form / calling your own number

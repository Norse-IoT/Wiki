# Project Freezerburn
This project was originally pitched by Professor Sarah Mann for the IoT Club as a way to detect when her freezers were open. Sarah Mann owns a farm in Kentucky that has multiple freezers spread across several buildings, so any solution would need to be scalable.

@rweberhorowitz is our point of contact for Sarah Mann on this project. 


## Deliverables
- Push notifications when freezers are left open
- Status page where freezer status (open/closed) can be viewed.
- Additional data when possible, including temperature over time.

## Solutions

- Read switches to detect open/closed with magnetic force.
- Roll ball switch embedded in door (requires door modification, may not be ideal on a climate controlled freezer)
- Limit switch

## Open Questions
- What types of freezers does she have?
- How many freezers does she have?
- Can integrate with existing smart home systems, or use the Matter protocol?
- Do we want an app to send push notifications?

## Email Interview Transcript
1. What type of freezer do you use (chest-shaped or upright)? If you have model number(s), that would work too.

**2 freezers are uprights and 2 are chest-type**


2. Would each freezer location have access to WiFi?
   
**The 2 uprights and 1 chest-type have access to wifi (these 3 are in my basement). The fourth freezer does not currently have access to wifi (this one is located in a different location altogether)**


3. How spread out are the freezers from one another?

**The 2 uprights are sitting side-by-side and the 1 chest is about 12 feet away but all in the same basement.  The fourth freezer is a few miles away.**


4. Is there adequate access to power at each freezer location?

**Yes**


5. Do any of the freezers already have some sort of electronic display?

**No**


6. How long are the doors usually left open to move product?

**Usually just long enough to get something out for summer.  A couple of times per year, they are opened longer when restocking, etc.**

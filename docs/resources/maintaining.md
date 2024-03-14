# Maintaining Club Software

As a club, we have a variety of software resources that require maintenance work in order to continue work. This includes our various sites and social media.

## Websites
- norseiot.club
    - Serves important information about the club, "first impression" for new club members.
    - Static site that runs on GitHub Pages, proxied through CloudFlare.
- wiki.norseiot.club
    - Serves club documentation for long term projects.
    - Content is generated via MkDocs and runs on GitHub Pages, proxied through CloudFlare.
- scrum.norseiot.club
    - Serves tasks for active projects.
    - Runs in a docker container on the Norse IoT Oracle Cloud instance, proxied through CloudFlare.

## Social Media
- Instagram (norseiot)
    - Semi-active
- Twitter (@norseiot)
    - Inactive
- LinkedIn (norse-iot)
    - Inactive

## Web Accounts
- GitHub Pages handles web hosting for all static projects like norseiot.club. Anyone set up as an admin in GitHub can adjust settings as needed.
- Oracle Cloud handles web hosting for all dynamic projects like scrum.norseiot.club. Anyone needing to log in will need the private key, which can be obtained from Chris Brewer or Cassian Godsted.
- CloudFlare handles DNS, caching, email aliases, and proxy services for the norseiot.club domain. Anyone needing access will need to contact Cassian Godsted.
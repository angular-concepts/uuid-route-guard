# UUID Route Guard

Consider the following situation:

You have a web application where you'd like to have a "consent form" as the first page. When the user accepts the consent form, you allow them to move further into the dashboard. If the user wants, he can go back and unconsent. However, we only allow the inner routes to be accessible to users who have consented.

We also want to uniquely identify each user using a UUID. So when the user clicks on the "accept" button under the consent form, we generate a fresh UUID for them and store it in localStorage. However, we use NGXS to manage state and modify the localStorage in a cleaner manner.

To protect the inner routes, we use a route guard to check the local storage and see if the uuid field within the store has a 36 character string. To experiment more with angular's router, we add child routes within the dashboard, moreover, these child pages are dynamically extracted from a file that stores all the required details (like heading, content, and sub-url string) for the possible sub-pages.

We also redirect any invalid url paths back to the dashboard. Note that if the consent form hasn't been accepted, the dashboard will further redirect to the consent url. Moreover, the dashboard also has a button to go back to the consent form and "unconsent," the consent form after the consent has been accepted looks different: it shows the UUID and a button to unconsent.

An addition to this would be to keep the sub-page details on firebase, and have the dynamic routing get the details using a request.

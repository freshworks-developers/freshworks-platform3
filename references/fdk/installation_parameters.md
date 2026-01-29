>title: What is the Settings page and installation parameters in Freshworks apps
>tags: iparams, installation-parameters, settings-page
>content:

Your app typically requires, from the app's user, certain data that is necessary to process the app logic. It might not be possible to include this data in your app code due to reasons such as - exposing secure information or simply the unavailability of the data with you during app building. At times, your app can also be user-scoped - meaning, it can work based on the user's needs. To do this, it is essential for the app to retrieve user-input data and at times, persist the data. 

The developer platform enables you to configure either a default Settings page or a custom Settings page to collect data from the app user. Installation params or iparams are parameters whose values app users can set when they install an app. These parameters are presented to the app users through the Settings page.

---
>title: What are installation parameters attributes in Platform 3.0
>tags: iparams, installation-parameters
>content:

## Installation Parameter Attributes

1. `modules`: (array of string) - From the modules registered in the App Manifest, names of the modules for which the iparam is applicable. For an app built for multiple modules, only if the iparam is applicable to the module on which the app is deployed, the iparam is displayed on the Settings page of the app.

---

## UE Auth Client SDK

This is an openAPI generated client SDK for the [UE Auth](https://ueauth.com) API. It utilizes Axios. For any support or help, please [contact United Effects directly](mailto:help@unitedeffects.com).

## Full API

The full API can be viewed in the UE documents site: https://docs.unitedeffects.com

## Install and Use

Example is with yarn but you could use npm. All APIs are provided as classes.
```
yarn i @ue/auth
```

```javascript
// Example for SystemApi with basic JavaScript
const { SystemApi } = require('@ue/auth');
const sys = new SystemApi();

sys.apiHealthGet()
.then(d => console.info(d.data))
.catch(e => console.info(e));
```

```javascript
// Example for SystemApi with import and async/await
import { SystemApi } from '@ue/auth';
const sys = new SystemApi();

async function example() {
    try {
        const resp = await sys.apiHealthGet();   
        console.info(resp.data);
    } catch (e) {
        console.info(e);
    }
    
}
```

## API List

These classes are exported and available via import or require.

* AccountDashboardApi
* ClientAccessApi
* ClientsApi
* DeviceChallengeApi
* NotificationApi
* OIDCApi
* OperationsAPI
* OrganizationDomainsApi
* OrganizationNotificationApi
* OrganizationPermissionsApi
* OrganizationProductsApi
* OrganizationRolesApi
* OrganizationUserProfilesApi
* OrganizationUsersAccessApi
* OrganizationApi
* PermissionsApi
* ProductsApi
* ProfileAccessApi
* ProfileRequestsApi
* ProfilesApi
* RolesApi
* SystemApi
* UsersApi
* ValidateAccessApi
* WebAuthNApi

## Environments

This SDK can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

## Additional Information

* [UE Auth](https://ueauth.com)
* [Quick Start with UE Auth](https://docs.unitedeffects.com/docs/getting-started)
* [United Effects](https://unitedeffects.com)
* [All Documentation](https://docs.unitedeffects.com)
* [United Effects LinkedIn](https://www.linkedin.com/company/unitedeffects)
* [Our Blog](https://blog.unitedeffects.com)
* [UE Streams](https://uestreams.com)
* [Service Status Page](https://status.unitedeffects.com)
* **UE Auth and UE Streams are Patent Pending Technologies**

## Investment Opportunities

If you are interested in learning about investment opportunities with United Effects, contact [invest@unitedeffects.com](mailto:invest@unitedeffects.com)

Copyright (c) 2023 [United Effects LLC](https://unitedeffects.com), all rights reserved.
/* tslint:disable */
/* eslint-disable */
/**
 * ue-auth
 * UEAuth is provided by <a href='https://unitedeffects.com'>United Effects LLC</a>. Copyright &#169; 2023, all rights reserved.<br><br> As a general reference, this provider implements the following OIDC endpoints. All OpenID Connect schema specific endpoints follow the pattern <code>/{group}/path</code>.<br>UE Auth identity and access endpoints follow the pattern <code>/api/{group}/path</code>. Full documentation on the OpenID Connect specification can be found here: <a href='https://openid.net/developers/specs/'>OIDC API DOCUMENTATION</a>.<br><code><br>authorization: '/{group}/auth',<br> check_session: '/{group}/session/check',<br> code_verification: '/{group}/device',<br> device_authorization: '/{group}/device/auth',<br> end_session: '/{group}/session/end',<br> introspection: '/{group}/token/introspection',<br> initial_access: '/{group}/token/initial_access',<br> jwks: '/{group}/jwks',<br> pushed_authorization_request: '/{group}/request',<br> registration: '/{group}/reg',<br> revocation: '/{group}/token/revocation',<br> token: '/{group}/token',<br> userinfo: '/{group}/me'</code><br><br> <small>Not all of the above endpoints are detailed with contracts in this API documentation. Please reference the <a href='https://openid.net/developers/specs/'>OIDC</a> docs for any path specs not shown.</small><br><br> <h2>Query and Patch Standards</h2>This API uses <a href='https://www.odata.org/documentation/'>oData</a> and <a href='http://jsonpatch.com/'>JSON Patch</a> as standards for most paginated GET and PATCH methods. You may wish to review these standards.
 *
 * OpenAPI spec version: 1.32.7
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * This API is multi purpose and will usually be requested at least twice in an MFA recovery workflow. The first time you would just send state to initiate the process using basic auth or a logged in bearer token. This will respond with an Initial Access Token that can be used to request a device for validation of idenity (assuming it is required to validate identity). You would then call this API again with the results of the identity validation request to rebind the user and see instructions for MFA setup on a device. If on the first call of this API it is determined that the user is not currently MFA enabled, the system will do a protective revoke of all possible devices and immediately bind the user and respond with instructions.
 * @export
 * @interface MfaRequestBind
 */
export interface MfaRequestBind {
    /**
     * This is used to bind together a series of transactions. When beginning a recovery flow, you must send a unique and url safe generated string. All other requests pertaining to this recovery will need to include this state. When the user is recoverying MFA via the UI wizard, this state is auto generated by the server.
     * @type {string}
     * @memberof MfaRequestBind
     */
    state?: string;
    /**
     * Initial access token used when the mechanism for identity validation is email. Do not include if initiating the flow or if validating user with device rather than email.
     * @type {string}
     * @memberof MfaRequestBind
     */
    code?: string;
    /**
     * This would be used on a second call where identity has already been validated either by email or device challenge. On the second call you must explicitly state which method you used to validate identity so that this can be verified on the backend before rebinding the user.
     * @type {string}
     * @memberof MfaRequestBind
     */
    method?: MfaRequestBindMethodEnum;
    /**
     * This would be used on a second call where the identity has already been validated by a device. When creating the challenge, the provider should return an id for the transaction. This is the providerKey.
     * @type {string}
     * @memberof MfaRequestBind
     */
    providerKey?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum MfaRequestBindMethodEnum {
    Device = 'device',
    Email = 'email'
}


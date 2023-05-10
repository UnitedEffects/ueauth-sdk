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
import { GlobalPluginsMfaChallengeApi } from './global-plugins-mfa-challenge-api';
/**
 * 
 * @export
 * @interface GlobalPluginsMfaChallengeProviders
 */
export interface GlobalPluginsMfaChallengeProviders {
    /**
     * 
     * @type {string}
     * @memberof GlobalPluginsMfaChallengeProviders
     */
    name?: GlobalPluginsMfaChallengeProvidersNameEnum;
    /**
     * 
     * @type {GlobalPluginsMfaChallengeApi}
     * @memberof GlobalPluginsMfaChallengeProviders
     */
    api?: GlobalPluginsMfaChallengeApi;
    /**
     * this is only present if the configuration is http-proxy
     * @type {string}
     * @memberof GlobalPluginsMfaChallengeProviders
     */
    proxyClientId?: string;
    /**
     * If this is an http-proxy mfa setup, you will need to open a web page where you handle the device connection, through your proxy service. This is usually presented as instructions and a QR code. UE Auth will send the JSON results of the bind API call to this request via query parameters.
     * @type {string}
     * @memberof GlobalPluginsMfaChallengeProviders
     */
    proxyEnableScreen?: string;
    /**
     * This is the text used on the button that links to the enablement screen
     * @type {string}
     * @memberof GlobalPluginsMfaChallengeProviders
     */
    proxyEnableScreenButtonText?: string;
    /**
     * UE Auth will display this text as instructions if desired. New lines can be represented with '--'
     * @type {string}
     * @memberof GlobalPluginsMfaChallengeProviders
     */
    proxyEnableInstructions?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum GlobalPluginsMfaChallengeProvidersNameEnum {
    HttpProxy = 'http-proxy',
    Privakey = 'privakey'
}


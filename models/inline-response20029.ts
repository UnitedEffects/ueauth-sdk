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
import { Domain } from './domain';
/**
 * 
 * @export
 * @interface InlineResponse20029
 */
export interface InlineResponse20029 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20029
     */
    type?: string;
    /**
     * 
     * @type {Domain}
     * @memberof InlineResponse20029
     */
    data?: Domain;
}

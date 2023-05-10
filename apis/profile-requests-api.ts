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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { DefaultError } from '../models';
import { InlineResponse2012 } from '../models';
import { ProfileRequestUpdate } from '../models';
import { WriteProfileRequest } from '../models';
/**
 * ProfileRequestsApi - axios parameter creator
 * @export
 */
export const ProfileRequestsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requests are async mechanisms to access profile data. The Account holder may approve or deny the request. Requests automatically expire after 7 days.
         * @summary Create a request to access someone's profile information
         * @param {WriteProfileRequest} body Profile data to be written
         * @param {string} group the auth group ID associated to your business account
         * @param {string} accountId the account Id to whom you are making the request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRequest: async (body: WriteProfileRequest, group: string, accountId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createRequest.');
            }
            // verify required parameter 'group' is not null or undefined
            if (group === null || group === undefined) {
                throw new RequiredError('group','Required parameter group was null or undefined when calling createRequest.');
            }
            // verify required parameter 'accountId' is not null or undefined
            if (accountId === null || accountId === undefined) {
                throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling createRequest.');
            }
            const localVarPath = `/api/{group}/profile/request/{account_id}`
                .replace(`{${"group"}}`, encodeURIComponent(String(group)))
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required

            // authentication openId required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a profile request. You must be either the recipient or sender.
         * @summary Get a profile request
         * @param {string} group the auth group ID associated to your business account
         * @param {string} id the request id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRequest: async (group: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'group' is not null or undefined
            if (group === null || group === undefined) {
                throw new RequiredError('group','Required parameter group was null or undefined when calling getRequest.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getRequest.');
            }
            const localVarPath = `/api/{group}/profile/request/{id}`
                .replace(`{${"group"}}`, encodeURIComponent(String(group)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required

            // authentication openId required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Specify requests to you or from you and retrieve the list
         * @summary Retrieve your profile requests
         * @param {string} group the auth group ID associated to your business account
         * @param {string} sor specify sent or received
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRequests: async (group: string, sor: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'group' is not null or undefined
            if (group === null || group === undefined) {
                throw new RequiredError('group','Required parameter group was null or undefined when calling getRequests.');
            }
            // verify required parameter 'sor' is not null or undefined
            if (sor === null || sor === undefined) {
                throw new RequiredError('sor','Required parameter sor was null or undefined when calling getRequests.');
            }
            const localVarPath = `/api/{group}/profile/requests/{sor}`
                .replace(`{${"group"}}`, encodeURIComponent(String(group)))
                .replace(`{${"sor"}}`, encodeURIComponent(String(sor)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required

            // authentication openId required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a profile request. You must be either the recipient or sender.
         * @summary Delete a profile request
         * @param {string} group the auth group ID associated to your business account
         * @param {string} id the request id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeRequest: async (group: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'group' is not null or undefined
            if (group === null || group === undefined) {
                throw new RequiredError('group','Required parameter group was null or undefined when calling removeRequest.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling removeRequest.');
            }
            const localVarPath = `/api/{group}/profile/request/{id}`
                .replace(`{${"group"}}`, encodeURIComponent(String(group)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required

            // authentication openId required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Approve or deny a request to access your profile data. Only the recipient can make this change.
         * @summary Approve or deny a request to access your profile data
         * @param {ProfileRequestUpdate} body Profile data to be updated
         * @param {string} group the auth group ID associated to your business account
         * @param {string} id the request id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRequest: async (body: ProfileRequestUpdate, group: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateRequest.');
            }
            // verify required parameter 'group' is not null or undefined
            if (group === null || group === undefined) {
                throw new RequiredError('group','Required parameter group was null or undefined when calling updateRequest.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateRequest.');
            }
            const localVarPath = `/api/{group}/profile/request/{id}`
                .replace(`{${"group"}}`, encodeURIComponent(String(group)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required

            // authentication openId required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProfileRequestsApi - functional programming interface
 * @export
 */
export const ProfileRequestsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requests are async mechanisms to access profile data. The Account holder may approve or deny the request. Requests automatically expire after 7 days.
         * @summary Create a request to access someone's profile information
         * @param {WriteProfileRequest} body Profile data to be written
         * @param {string} group the auth group ID associated to your business account
         * @param {string} accountId the account Id to whom you are making the request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRequest(body: WriteProfileRequest, group: string, accountId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2012>>> {
            const localVarAxiosArgs = await ProfileRequestsApiAxiosParamCreator(configuration).createRequest(body, group, accountId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get a profile request. You must be either the recipient or sender.
         * @summary Get a profile request
         * @param {string} group the auth group ID associated to your business account
         * @param {string} id the request id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRequest(group: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2012>>> {
            const localVarAxiosArgs = await ProfileRequestsApiAxiosParamCreator(configuration).getRequest(group, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Specify requests to you or from you and retrieve the list
         * @summary Retrieve your profile requests
         * @param {string} group the auth group ID associated to your business account
         * @param {string} sor specify sent or received
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRequests(group: string, sor: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2012>>> {
            const localVarAxiosArgs = await ProfileRequestsApiAxiosParamCreator(configuration).getRequests(group, sor, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a profile request. You must be either the recipient or sender.
         * @summary Delete a profile request
         * @param {string} group the auth group ID associated to your business account
         * @param {string} id the request id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeRequest(group: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2012>>> {
            const localVarAxiosArgs = await ProfileRequestsApiAxiosParamCreator(configuration).removeRequest(group, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Approve or deny a request to access your profile data. Only the recipient can make this change.
         * @summary Approve or deny a request to access your profile data
         * @param {ProfileRequestUpdate} body Profile data to be updated
         * @param {string} group the auth group ID associated to your business account
         * @param {string} id the request id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRequest(body: ProfileRequestUpdate, group: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2012>>> {
            const localVarAxiosArgs = await ProfileRequestsApiAxiosParamCreator(configuration).updateRequest(body, group, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ProfileRequestsApi - factory interface
 * @export
 */
export const ProfileRequestsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requests are async mechanisms to access profile data. The Account holder may approve or deny the request. Requests automatically expire after 7 days.
         * @summary Create a request to access someone's profile information
         * @param {WriteProfileRequest} body Profile data to be written
         * @param {string} group the auth group ID associated to your business account
         * @param {string} accountId the account Id to whom you are making the request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRequest(body: WriteProfileRequest, group: string, accountId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2012>> {
            return ProfileRequestsApiFp(configuration).createRequest(body, group, accountId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a profile request. You must be either the recipient or sender.
         * @summary Get a profile request
         * @param {string} group the auth group ID associated to your business account
         * @param {string} id the request id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRequest(group: string, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2012>> {
            return ProfileRequestsApiFp(configuration).getRequest(group, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Specify requests to you or from you and retrieve the list
         * @summary Retrieve your profile requests
         * @param {string} group the auth group ID associated to your business account
         * @param {string} sor specify sent or received
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRequests(group: string, sor: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2012>> {
            return ProfileRequestsApiFp(configuration).getRequests(group, sor, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a profile request. You must be either the recipient or sender.
         * @summary Delete a profile request
         * @param {string} group the auth group ID associated to your business account
         * @param {string} id the request id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeRequest(group: string, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2012>> {
            return ProfileRequestsApiFp(configuration).removeRequest(group, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Approve or deny a request to access your profile data. Only the recipient can make this change.
         * @summary Approve or deny a request to access your profile data
         * @param {ProfileRequestUpdate} body Profile data to be updated
         * @param {string} group the auth group ID associated to your business account
         * @param {string} id the request id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRequest(body: ProfileRequestUpdate, group: string, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2012>> {
            return ProfileRequestsApiFp(configuration).updateRequest(body, group, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProfileRequestsApi - object-oriented interface
 * @export
 * @class ProfileRequestsApi
 * @extends {BaseAPI}
 */
export class ProfileRequestsApi extends BaseAPI {
    /**
     * Requests are async mechanisms to access profile data. The Account holder may approve or deny the request. Requests automatically expire after 7 days.
     * @summary Create a request to access someone's profile information
     * @param {WriteProfileRequest} body Profile data to be written
     * @param {string} group the auth group ID associated to your business account
     * @param {string} accountId the account Id to whom you are making the request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileRequestsApi
     */
    public async createRequest(body: WriteProfileRequest, group: string, accountId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2012>> {
        return ProfileRequestsApiFp(this.configuration).createRequest(body, group, accountId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a profile request. You must be either the recipient or sender.
     * @summary Get a profile request
     * @param {string} group the auth group ID associated to your business account
     * @param {string} id the request id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileRequestsApi
     */
    public async getRequest(group: string, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2012>> {
        return ProfileRequestsApiFp(this.configuration).getRequest(group, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Specify requests to you or from you and retrieve the list
     * @summary Retrieve your profile requests
     * @param {string} group the auth group ID associated to your business account
     * @param {string} sor specify sent or received
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileRequestsApi
     */
    public async getRequests(group: string, sor: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2012>> {
        return ProfileRequestsApiFp(this.configuration).getRequests(group, sor, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete a profile request. You must be either the recipient or sender.
     * @summary Delete a profile request
     * @param {string} group the auth group ID associated to your business account
     * @param {string} id the request id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileRequestsApi
     */
    public async removeRequest(group: string, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2012>> {
        return ProfileRequestsApiFp(this.configuration).removeRequest(group, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Approve or deny a request to access your profile data. Only the recipient can make this change.
     * @summary Approve or deny a request to access your profile data
     * @param {ProfileRequestUpdate} body Profile data to be updated
     * @param {string} group the auth group ID associated to your business account
     * @param {string} id the request id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileRequestsApi
     */
    public async updateRequest(body: ProfileRequestUpdate, group: string, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2012>> {
        return ProfileRequestsApiFp(this.configuration).updateRequest(body, group, id, options).then((request) => request(this.axios, this.basePath));
    }
}

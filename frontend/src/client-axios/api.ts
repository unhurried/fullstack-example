/* tslint:disable */
/* eslint-disable */
/**
 * Todo
 * Todo API specification
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * Error code
     * @type {string}
     * @memberof ModelError
     */
    code?: string;
    /**
     * Error message
     * @type {string}
     * @memberof ModelError
     */
    message: string;
}
/**
 * 
 * @export
 * @interface Todo
 */
export interface Todo {
    /**
     * Id
     * @type {string}
     * @memberof Todo
     */
    id?: string;
    /**
     * Title
     * @type {string}
     * @memberof Todo
     */
    title: string;
    /**
     * Category
     * @type {string}
     * @memberof Todo
     */
    category: TodoCategoryEnum;
    /**
     * Content
     * @type {string}
     * @memberof Todo
     */
    content?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum TodoCategoryEnum {
    One = 'one',
    Two = 'two',
    Three = 'three'
}

/**
 * 
 * @export
 * @interface TodoList
 */
export interface TodoList {
    /**
     * List of todo items
     * @type {Array<Todo>}
     * @memberof TodoList
     */
    items: Array<Todo>;
    /**
     * Total number of items
     * @type {number}
     * @memberof TodoList
     */
    total: number;
}
/**
 * 
 * @export
 * @interface TokenReponse
 */
export interface TokenReponse {
    /**
     * Access Token
     * @type {string}
     * @memberof TokenReponse
     */
    accessToken: string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * Username
     * @type {string}
     * @memberof User
     */
    username: string;
    /**
     * Password
     * @type {string}
     * @memberof User
     */
    password: string;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get an access token
         * @param {User} user 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerLogin: async (user: User, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'user' is not null or undefined
            if (user === null || user === undefined) {
                throw new RequiredError('user','Required parameter user was null or undefined when calling authControllerLogin.');
            }
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof user !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(user !== undefined ? user : {})
                : (user || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get an access token
         * @param {User} user 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerLogin(user: User, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenReponse>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authControllerLogin(user, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get an access token
         * @param {User} user 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerLogin(user: User, options?: any): AxiosPromise<TokenReponse> {
            return AuthApiFp(configuration).authControllerLogin(user, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @summary Get an access token
     * @param {User} user 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerLogin(user: User, options?: any) {
        return AuthApiFp(this.configuration).authControllerLogin(user, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * TodoApi - axios parameter creator
 * @export
 */
export const TodoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete a todo item
         * @param {string} id Resource ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerDelete: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling todoControllerDelete.');
            }
            const localVarPath = `/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a todo item
         * @param {string} id Resource ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerGet: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling todoControllerGet.');
            }
            const localVarPath = `/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a list of todo items
         * @param {number} [offset] Starting index of items to get
         * @param {number} [limit] Maximum number of items to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerGetList: async (offset?: number, limit?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (offset !== undefined) {
                localVarQueryParameter['Offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['Limit'] = limit;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a todo item
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerPost: async (todo: Todo, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'todo' is not null or undefined
            if (todo === null || todo === undefined) {
                throw new RequiredError('todo','Required parameter todo was null or undefined when calling todoControllerPost.');
            }
            const localVarPath = `/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof todo !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(todo !== undefined ? todo : {})
                : (todo || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a todo item
         * @param {string} id Resource ID
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerUpdate: async (id: string, todo: Todo, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling todoControllerUpdate.');
            }
            // verify required parameter 'todo' is not null or undefined
            if (todo === null || todo === undefined) {
                throw new RequiredError('todo','Required parameter todo was null or undefined when calling todoControllerUpdate.');
            }
            const localVarPath = `/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof todo !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(todo !== undefined ? todo : {})
                : (todo || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TodoApi - functional programming interface
 * @export
 */
export const TodoApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete a todo item
         * @param {string} id Resource ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoControllerDelete(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TodoApiAxiosParamCreator(configuration).todoControllerDelete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get a todo item
         * @param {string} id Resource ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoControllerGet(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await TodoApiAxiosParamCreator(configuration).todoControllerGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get a list of todo items
         * @param {number} [offset] Starting index of items to get
         * @param {number} [limit] Maximum number of items to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoControllerGetList(offset?: number, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoList>> {
            const localVarAxiosArgs = await TodoApiAxiosParamCreator(configuration).todoControllerGetList(offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create a todo item
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoControllerPost(todo: Todo, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await TodoApiAxiosParamCreator(configuration).todoControllerPost(todo, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update a todo item
         * @param {string} id Resource ID
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoControllerUpdate(id: string, todo: Todo, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await TodoApiAxiosParamCreator(configuration).todoControllerUpdate(id, todo, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TodoApi - factory interface
 * @export
 */
export const TodoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Delete a todo item
         * @param {string} id Resource ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerDelete(id: string, options?: any): AxiosPromise<void> {
            return TodoApiFp(configuration).todoControllerDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a todo item
         * @param {string} id Resource ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerGet(id: string, options?: any): AxiosPromise<Todo> {
            return TodoApiFp(configuration).todoControllerGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a list of todo items
         * @param {number} [offset] Starting index of items to get
         * @param {number} [limit] Maximum number of items to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerGetList(offset?: number, limit?: number, options?: any): AxiosPromise<TodoList> {
            return TodoApiFp(configuration).todoControllerGetList(offset, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a todo item
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerPost(todo: Todo, options?: any): AxiosPromise<Todo> {
            return TodoApiFp(configuration).todoControllerPost(todo, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a todo item
         * @param {string} id Resource ID
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerUpdate(id: string, todo: Todo, options?: any): AxiosPromise<Todo> {
            return TodoApiFp(configuration).todoControllerUpdate(id, todo, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TodoApi - object-oriented interface
 * @export
 * @class TodoApi
 * @extends {BaseAPI}
 */
export class TodoApi extends BaseAPI {
    /**
     * 
     * @summary Delete a todo item
     * @param {string} id Resource ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public todoControllerDelete(id: string, options?: any) {
        return TodoApiFp(this.configuration).todoControllerDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a todo item
     * @param {string} id Resource ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public todoControllerGet(id: string, options?: any) {
        return TodoApiFp(this.configuration).todoControllerGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a list of todo items
     * @param {number} [offset] Starting index of items to get
     * @param {number} [limit] Maximum number of items to get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public todoControllerGetList(offset?: number, limit?: number, options?: any) {
        return TodoApiFp(this.configuration).todoControllerGetList(offset, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a todo item
     * @param {Todo} todo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public todoControllerPost(todo: Todo, options?: any) {
        return TodoApiFp(this.configuration).todoControllerPost(todo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a todo item
     * @param {string} id Resource ID
     * @param {Todo} todo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public todoControllerUpdate(id: string, todo: Todo, options?: any) {
        return TodoApiFp(this.configuration).todoControllerUpdate(id, todo, options).then((request) => request(this.axios, this.basePath));
    }
}



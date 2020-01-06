// tslint:disable
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


import * as globalImportUrl from 'url';
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
        _delete(id: string, options: any = {}): RequestArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling _delete.');
            }
            const localVarPath = `/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
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
        get(id: string, options: any = {}): RequestArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling get.');
            }
            const localVarPath = `/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a list of todo items
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList(offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/todos`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (offset !== undefined) {
                localVarQueryParameter['Offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['Limit'] = limit;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
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
        post(todo: Todo, options: any = {}): RequestArgs {
            // verify required parameter 'todo' is not null or undefined
            if (todo === null || todo === undefined) {
                throw new RequiredError('todo','Required parameter todo was null or undefined when calling post.');
            }
            const localVarPath = `/todos`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof todo !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(todo !== undefined ? todo : {}) : (todo || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
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
        update(id: string, todo: Todo, options: any = {}): RequestArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling update.');
            }
            // verify required parameter 'todo' is not null or undefined
            if (todo === null || todo === undefined) {
                throw new RequiredError('todo','Required parameter todo was null or undefined when calling update.');
            }
            const localVarPath = `/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof todo !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(todo !== undefined ? todo : {}) : (todo || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
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
        _delete(id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = TodoApiAxiosParamCreator(configuration)._delete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
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
        get(id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo> {
            const localVarAxiosArgs = TodoApiAxiosParamCreator(configuration).get(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get a list of todo items
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList(offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoList> {
            const localVarAxiosArgs = TodoApiAxiosParamCreator(configuration).getList(offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
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
        post(todo: Todo, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo> {
            const localVarAxiosArgs = TodoApiAxiosParamCreator(configuration).post(todo, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
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
        update(id: string, todo: Todo, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo> {
            const localVarAxiosArgs = TodoApiAxiosParamCreator(configuration).update(id, todo, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
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
        _delete(id: string, options?: any) {
            return TodoApiFp(configuration)._delete(id, options)(axios, basePath);
        },
        /**
         * 
         * @summary Get a todo item
         * @param {string} id Resource ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(id: string, options?: any) {
            return TodoApiFp(configuration).get(id, options)(axios, basePath);
        },
        /**
         * 
         * @summary Get a list of todo items
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList(offset?: number, limit?: number, options?: any) {
            return TodoApiFp(configuration).getList(offset, limit, options)(axios, basePath);
        },
        /**
         * 
         * @summary Create a todo item
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        post(todo: Todo, options?: any) {
            return TodoApiFp(configuration).post(todo, options)(axios, basePath);
        },
        /**
         * 
         * @summary Update a todo item
         * @param {string} id Resource ID
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update(id: string, todo: Todo, options?: any) {
            return TodoApiFp(configuration).update(id, todo, options)(axios, basePath);
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
    public _delete(id: string, options?: any) {
        return TodoApiFp(this.configuration)._delete(id, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary Get a todo item
     * @param {string} id Resource ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public get(id: string, options?: any) {
        return TodoApiFp(this.configuration).get(id, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary Get a list of todo items
     * @param {number} [offset] 
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public getList(offset?: number, limit?: number, options?: any) {
        return TodoApiFp(this.configuration).getList(offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary Create a todo item
     * @param {Todo} todo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public post(todo: Todo, options?: any) {
        return TodoApiFp(this.configuration).post(todo, options)(this.axios, this.basePath);
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
    public update(id: string, todo: Todo, options?: any) {
        return TodoApiFp(this.configuration).update(id, todo, options)(this.axios, this.basePath);
    }

}


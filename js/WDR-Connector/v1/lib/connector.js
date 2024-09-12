"use strict";
/* based on ORSCF StudyWorkflowDefinition Contract v1.8.0.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WdrConnector = exports.ResearchStudyDefiClient = void 0;
const axios_1 = require("axios");
/**
 * Provides CRUD access to stored ResearchStudyDefinitions (based on schema version '1.5.0')
 */
class ResearchStudyDefiClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'researchStudyDefi/';
        }
        else {
            return rootUrl + '/researchStudyDefi/';
        }
    }
    /**
     * Loads a specific ResearchStudyDefinition addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     */
    getResearchStudyDefinitionByResearchStudyDefinitionIdentity(researchStudyDefinitionIdentity) {
        let requestWrapper = {
            researchStudyDefinitionIdentity: researchStudyDefinitionIdentity
        };
        let url = this.getEndpointUrl() + 'getResearchStudyDefinitionByResearchStudyDefinitionIdentity';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * Loads ResearchStudyDefinitions.
     */
    getResearchStudyDefinitions(page = 0, pageSize = 0) {
        let requestWrapper = {
            page: page,
            pageSize: pageSize
        };
        let url = this.getEndpointUrl() + 'getResearchStudyDefinitions';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * Loads ResearchStudyDefinitions where values matching to the given filterExpression
     */
    searchResearchStudyDefinitions(filterExpression, sortingExpression, page = 0, pageSize = 0) {
        let requestWrapper = {
            filterExpression: filterExpression,
            sortingExpression: sortingExpression,
            page: page,
            pageSize: pageSize
        };
        let url = this.getEndpointUrl() + 'searchResearchStudyDefinitions';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * Adds a new ResearchStudyDefinition and returns its primary identifier (or null on failure).
     */
    addNewResearchStudyDefinition(researchStudyDefinition) {
        let requestWrapper = {
            researchStudyDefinition: researchStudyDefinition
        };
        let url = this.getEndpointUrl() + 'addNewResearchStudyDefinition';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the primary identifier fields within the given ResearchStudyDefinition. Returns false on failure or if no target record was found, otherwise true.
     */
    updateResearchStudyDefinition(researchStudyDefinition) {
        let requestWrapper = {
            researchStudyDefinition: researchStudyDefinition
        };
        let url = this.getEndpointUrl() + 'updateResearchStudyDefinition';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     */
    updateResearchStudyDefinitionByResearchStudyDefinitionIdentity(researchStudyDefinitionIdentity, researchStudyDefinition) {
        let requestWrapper = {
            researchStudyDefinitionIdentity: researchStudyDefinitionIdentity,
            researchStudyDefinition: researchStudyDefinition
        };
        let url = this.getEndpointUrl() + 'updateResearchStudyDefinitionByResearchStudyDefinitionIdentity';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * Deletes a specific ResearchStudyDefinition addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     */
    deleteResearchStudyDefinitionByResearchStudyDefinitionIdentity(researchStudyDefinitionIdentity) {
        let requestWrapper = {
            researchStudyDefinitionIdentity: researchStudyDefinitionIdentity
        };
        let url = this.getEndpointUrl() + 'deleteResearchStudyDefinitionByResearchStudyDefinitionIdentity';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
}
exports.ResearchStudyDefiClient = ResearchStudyDefiClient;
class WdrConnector {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
        if (this.httpPostMethod == null) {
            this.axiosHttpApi = axios_1.default.create({ baseURL: this.rootUrlResolver() });
            this.httpPostMethod = (url, requestObject, apiToken) => {
                if (!this.axiosHttpApi) {
                    this.axiosHttpApi = axios_1.default.create({ baseURL: this.rootUrlResolver() });
                }
                return this.axiosHttpApi.post(url, requestObject, {
                    headers: {
                        Authorization: apiToken
                    }
                });
            };
        }
        this.researchStudyDefiClient = new ResearchStudyDefiClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    }
    getRootUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl;
        }
        else {
            return rootUrl + '/';
        }
    }
    /**
     * Provides CRUD access to stored ResearchStudyDefinitions (based on schema version '1.5.0')
     */
    get researchStudyDefi() { return this.researchStudyDefiClient; }
}
exports.WdrConnector = WdrConnector;
//# sourceMappingURL=connector.js.map
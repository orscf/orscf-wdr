import * as Models from 'orscf-studyworkflowdefinition-contract/models';
/**
 * Provides CRUD access to stored ResearchStudyDefinitions (based on schema version '1.5.0')
 */
export declare class ResearchStudyDefiClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * Loads a specific ResearchStudyDefinition addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     */
    getResearchStudyDefinitionByResearchStudyDefinitionIdentity(researchStudyDefinitionIdentity: Models.ResearchStudyDefinitionIdentity): Promise<Models.ResearchStudyDefinition>;
    /**
     * Loads ResearchStudyDefinitions.
     */
    getResearchStudyDefinitions(page?: number, pageSize?: number): Promise<Models.ResearchStudyDefinition[]>;
    /**
     * Loads ResearchStudyDefinitions where values matching to the given filterExpression
     */
    searchResearchStudyDefinitions(filterExpression: string, sortingExpression: string, page?: number, pageSize?: number): Promise<Models.ResearchStudyDefinition[]>;
    /**
     * Adds a new ResearchStudyDefinition and returns its primary identifier (or null on failure).
     */
    addNewResearchStudyDefinition(researchStudyDefinition: Models.ResearchStudyDefinition): Promise<boolean>;
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the primary identifier fields within the given ResearchStudyDefinition. Returns false on failure or if no target record was found, otherwise true.
     */
    updateResearchStudyDefinition(researchStudyDefinition: Models.ResearchStudyDefinition): Promise<boolean>;
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     */
    updateResearchStudyDefinitionByResearchStudyDefinitionIdentity(researchStudyDefinitionIdentity: Models.ResearchStudyDefinitionIdentity, researchStudyDefinition: Models.ResearchStudyDefinition): Promise<boolean>;
    /**
     * Deletes a specific ResearchStudyDefinition addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     */
    deleteResearchStudyDefinitionByResearchStudyDefinitionIdentity(researchStudyDefinitionIdentity: Models.ResearchStudyDefinitionIdentity): Promise<boolean>;
}
export declare class WdrConnector {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    private researchStudyDefiClient;
    private axiosHttpApi?;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getRootUrl;
    /**
     * Provides CRUD access to stored ResearchStudyDefinitions (based on schema version '1.5.0')
     */
    get researchStudyDefi(): ResearchStudyDefiClient;
}
//# sourceMappingURL=connector.d.ts.map
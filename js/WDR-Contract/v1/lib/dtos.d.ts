import * as Models from './models';
/**
 * Contains arguments for calling 'GetResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Loads a specific ResearchStudyDefinition addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
 */
export declare class GetResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest {
    researchStudyDefinitionIdentity: Models.ResearchStudyDefinitionIdentity;
}
/**
 * Contains results from calling 'GetResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Loads a specific ResearchStudyDefinition addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
 */
export declare class GetResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse {
    fault?: string;
    return: Models.ResearchStudyDefinition;
}
/**
 * Contains arguments for calling 'GetResearchStudyDefinitions'.
 * Method: Loads ResearchStudyDefinitions.
 */
export declare class GetResearchStudyDefinitionsRequest {
    page?: number;
    pageSize?: number;
}
/**
 * Contains results from calling 'GetResearchStudyDefinitions'.
 * Method: Loads ResearchStudyDefinitions.
 */
export declare class GetResearchStudyDefinitionsResponse {
    fault?: string;
    return: Models.ResearchStudyDefinition[];
}
/**
 * Contains arguments for calling 'SearchResearchStudyDefinitions'.
 * Method: Loads ResearchStudyDefinitions where values matching to the given filterExpression
 */
export declare class SearchResearchStudyDefinitionsRequest {
    filterExpression: string;
    sortingExpression?: string;
    page?: number;
    pageSize?: number;
}
/**
 * Contains results from calling 'SearchResearchStudyDefinitions'.
 * Method: Loads ResearchStudyDefinitions where values matching to the given filterExpression
 */
export declare class SearchResearchStudyDefinitionsResponse {
    fault?: string;
    return: Models.ResearchStudyDefinition[];
}
/**
 * Contains arguments for calling 'AddNewResearchStudyDefinition'.
 * Method: Adds a new ResearchStudyDefinition and returns its primary identifier (or null on failure).
 */
export declare class AddNewResearchStudyDefinitionRequest {
    researchStudyDefinition: Models.ResearchStudyDefinition;
}
/**
 * Contains results from calling 'AddNewResearchStudyDefinition'.
 * Method: Adds a new ResearchStudyDefinition and returns its primary identifier (or null on failure).
 */
export declare class AddNewResearchStudyDefinitionResponse {
    fault?: string;
    return: boolean;
}
/**
 * Contains arguments for calling 'UpdateResearchStudyDefinition'.
 * Method: Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the primary identifier fields within the given ResearchStudyDefinition. Returns false on failure or if no target record was found, otherwise true.
 */
export declare class UpdateResearchStudyDefinitionRequest {
    researchStudyDefinition: Models.ResearchStudyDefinition;
}
/**
 * Contains results from calling 'UpdateResearchStudyDefinition'.
 * Method: Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the primary identifier fields within the given ResearchStudyDefinition. Returns false on failure or if no target record was found, otherwise true.
 */
export declare class UpdateResearchStudyDefinitionResponse {
    fault?: string;
    return: boolean;
}
/**
 * Contains arguments for calling 'UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
 */
export declare class UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest {
    researchStudyDefinitionIdentity: Models.ResearchStudyDefinitionIdentity;
    researchStudyDefinition: Models.ResearchStudyDefinition;
}
/**
 * Contains results from calling 'UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
 */
export declare class UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse {
    fault?: string;
    return: boolean;
}
/**
 * Contains arguments for calling 'DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Deletes a specific ResearchStudyDefinition addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
 */
export declare class DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest {
    researchStudyDefinitionIdentity: Models.ResearchStudyDefinitionIdentity;
}
/**
 * Contains results from calling 'DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Deletes a specific ResearchStudyDefinition addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
 */
export declare class DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse {
    fault?: string;
    return: boolean;
}
//# sourceMappingURL=dtos.d.ts.map
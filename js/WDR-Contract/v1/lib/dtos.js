"use strict";
/* based on ORSCF StudyWorkflowDefinition Contract v1.8.0.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse = exports.DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = exports.UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse = exports.UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = exports.UpdateResearchStudyDefinitionResponse = exports.UpdateResearchStudyDefinitionRequest = exports.AddNewResearchStudyDefinitionResponse = exports.AddNewResearchStudyDefinitionRequest = exports.SearchResearchStudyDefinitionsResponse = exports.SearchResearchStudyDefinitionsRequest = exports.GetResearchStudyDefinitionsResponse = exports.GetResearchStudyDefinitionsRequest = exports.GetResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse = exports.GetResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = void 0;
var Models = require("./models");
/**
 * Contains arguments for calling 'GetResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Loads a specific ResearchStudyDefinition addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
 */
var GetResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = /** @class */ (function () {
    function GetResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest() {
        // Required Argument for 'GetResearchStudyDefinitionByResearchStudyDefinitionIdentity' (Models.ResearchStudyDefinitionIdentity): Composite Key, which represents the primary identity of a ResearchStudyDefinition
        this.researchStudyDefinitionIdentity = new Models.ResearchStudyDefinitionIdentity();
    }
    return GetResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest;
}());
exports.GetResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = GetResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest;
/**
 * Contains results from calling 'GetResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Loads a specific ResearchStudyDefinition addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
 */
var GetResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse = /** @class */ (function () {
    function GetResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse() {
        // Return-Value of 'GetResearchStudyDefinitionByResearchStudyDefinitionIdentity' (ResearchStudyDefinition)
        this.return = new Models.ResearchStudyDefinition();
    }
    return GetResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse;
}());
exports.GetResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse = GetResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse;
/**
 * Contains arguments for calling 'GetResearchStudyDefinitions'.
 * Method: Loads ResearchStudyDefinitions.
 */
var GetResearchStudyDefinitionsRequest = /** @class */ (function () {
    function GetResearchStudyDefinitionsRequest() {
    }
    return GetResearchStudyDefinitionsRequest;
}());
exports.GetResearchStudyDefinitionsRequest = GetResearchStudyDefinitionsRequest;
/**
 * Contains results from calling 'GetResearchStudyDefinitions'.
 * Method: Loads ResearchStudyDefinitions.
 */
var GetResearchStudyDefinitionsResponse = /** @class */ (function () {
    function GetResearchStudyDefinitionsResponse() {
        // Return-Value of 'GetResearchStudyDefinitions' (ResearchStudyDefinition[])
        this.return = [];
    }
    return GetResearchStudyDefinitionsResponse;
}());
exports.GetResearchStudyDefinitionsResponse = GetResearchStudyDefinitionsResponse;
/**
 * Contains arguments for calling 'SearchResearchStudyDefinitions'.
 * Method: Loads ResearchStudyDefinitions where values matching to the given filterExpression
 */
var SearchResearchStudyDefinitionsRequest = /** @class */ (function () {
    function SearchResearchStudyDefinitionsRequest() {
        // Required Argument for 'SearchResearchStudyDefinitions' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
        this.filterExpression = '';
    }
    return SearchResearchStudyDefinitionsRequest;
}());
exports.SearchResearchStudyDefinitionsRequest = SearchResearchStudyDefinitionsRequest;
/**
 * Contains results from calling 'SearchResearchStudyDefinitions'.
 * Method: Loads ResearchStudyDefinitions where values matching to the given filterExpression
 */
var SearchResearchStudyDefinitionsResponse = /** @class */ (function () {
    function SearchResearchStudyDefinitionsResponse() {
        // Return-Value of 'SearchResearchStudyDefinitions' (ResearchStudyDefinition[])
        this.return = [];
    }
    return SearchResearchStudyDefinitionsResponse;
}());
exports.SearchResearchStudyDefinitionsResponse = SearchResearchStudyDefinitionsResponse;
/**
 * Contains arguments for calling 'AddNewResearchStudyDefinition'.
 * Method: Adds a new ResearchStudyDefinition and returns its primary identifier (or null on failure).
 */
var AddNewResearchStudyDefinitionRequest = /** @class */ (function () {
    function AddNewResearchStudyDefinitionRequest() {
        // Required Argument for 'AddNewResearchStudyDefinition' (Models.ResearchStudyDefinition): ResearchStudyDefinition containing the new values
        this.researchStudyDefinition = new Models.ResearchStudyDefinition();
    }
    return AddNewResearchStudyDefinitionRequest;
}());
exports.AddNewResearchStudyDefinitionRequest = AddNewResearchStudyDefinitionRequest;
/**
 * Contains results from calling 'AddNewResearchStudyDefinition'.
 * Method: Adds a new ResearchStudyDefinition and returns its primary identifier (or null on failure).
 */
var AddNewResearchStudyDefinitionResponse = /** @class */ (function () {
    function AddNewResearchStudyDefinitionResponse() {
        // Return-Value of 'AddNewResearchStudyDefinition' (Boolean)
        this.return = false;
    }
    return AddNewResearchStudyDefinitionResponse;
}());
exports.AddNewResearchStudyDefinitionResponse = AddNewResearchStudyDefinitionResponse;
/**
 * Contains arguments for calling 'UpdateResearchStudyDefinition'.
 * Method: Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the primary identifier fields within the given ResearchStudyDefinition. Returns false on failure or if no target record was found, otherwise true.
 */
var UpdateResearchStudyDefinitionRequest = /** @class */ (function () {
    function UpdateResearchStudyDefinitionRequest() {
        // Required Argument for 'UpdateResearchStudyDefinition' (Models.ResearchStudyDefinition): ResearchStudyDefinition containing the new values (the primary identifier fields within the given ResearchStudyDefinition will be used to address the target record)
        this.researchStudyDefinition = new Models.ResearchStudyDefinition();
    }
    return UpdateResearchStudyDefinitionRequest;
}());
exports.UpdateResearchStudyDefinitionRequest = UpdateResearchStudyDefinitionRequest;
/**
 * Contains results from calling 'UpdateResearchStudyDefinition'.
 * Method: Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the primary identifier fields within the given ResearchStudyDefinition. Returns false on failure or if no target record was found, otherwise true.
 */
var UpdateResearchStudyDefinitionResponse = /** @class */ (function () {
    function UpdateResearchStudyDefinitionResponse() {
        // Return-Value of 'UpdateResearchStudyDefinition' (Boolean)
        this.return = false;
    }
    return UpdateResearchStudyDefinitionResponse;
}());
exports.UpdateResearchStudyDefinitionResponse = UpdateResearchStudyDefinitionResponse;
/**
 * Contains arguments for calling 'UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
 */
var UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = /** @class */ (function () {
    function UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest() {
        // Required Argument for 'UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentity' (Models.ResearchStudyDefinitionIdentity): Composite Key, which represents the primary identity of a ResearchStudyDefinition
        this.researchStudyDefinitionIdentity = new Models.ResearchStudyDefinitionIdentity();
        // Required Argument for 'UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentity' (Models.ResearchStudyDefinition): ResearchStudyDefinition containing the new values (the primary identifier fields within the given ResearchStudyDefinition will be ignored)
        this.researchStudyDefinition = new Models.ResearchStudyDefinition();
    }
    return UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest;
}());
exports.UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest;
/**
 * Contains results from calling 'UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
 */
var UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse = /** @class */ (function () {
    function UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse() {
        // Return-Value of 'UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentity' (Boolean)
        this.return = false;
    }
    return UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse;
}());
exports.UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse = UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse;
/**
 * Contains arguments for calling 'DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Deletes a specific ResearchStudyDefinition addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
 */
var DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = /** @class */ (function () {
    function DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest() {
        // Required Argument for 'DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentity' (Models.ResearchStudyDefinitionIdentity): Composite Key, which represents the primary identity of a ResearchStudyDefinition
        this.researchStudyDefinitionIdentity = new Models.ResearchStudyDefinitionIdentity();
    }
    return DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest;
}());
exports.DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest;
/**
 * Contains results from calling 'DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Deletes a specific ResearchStudyDefinition addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
 */
var DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse = /** @class */ (function () {
    function DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse() {
        // Return-Value of 'DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentity' (Boolean)
        this.return = false;
    }
    return DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse;
}());
exports.DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse = DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse;
//# sourceMappingURL=dtos.js.map
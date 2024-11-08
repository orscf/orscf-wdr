# ResearchStudyDefinitionStore
Provides CRUD access to stored ResearchStudyDefinitions (based on schema version '2.0.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|[ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a ResearchStudyDefinition|
**return value:** [ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [ResearchStudyDefinition](#ResearchStudyDefinition)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [ResearchStudyDefinition](#ResearchStudyDefinition)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|[ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a ResearchStudyDefinition|
**return value:** [ResearchStudyDefinition](#ResearchStudyDefinition)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|[ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a ResearchStudyDefinition|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|[ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)|**IN**-Param (required): Composite Key, which represents the primary identity of a ResearchStudyDefinition|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[ResearchStudyDefinition](#ResearchStudyDefinition)|**IN**-Param (required)|
**return value:** [ResearchStudyDefinition](#ResearchStudyDefinition)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[ResearchStudyDefinition](#ResearchStudyDefinition)|**IN**-Param (required)|
**return value:** [ResearchStudyDefinition](#ResearchStudyDefinition)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[ResearchStudyDefinition](#ResearchStudyDefinition)|**IN**-Param (required)|
**return value:** [ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|[ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a ResearchStudyDefinition|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** [ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** [ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** [ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|[ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a ResearchStudyDefinition|
**return value:** [ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|[ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)|**IN**-Param (required): Composite Key, which represents the primary identity of a ResearchStudyDefinition|
|newKey|[ResearchStudyDefinitionIdentity](#ResearchStudyDefinitionIdentity)|**IN**-Param (required): Composite Key, which represents the primary identity of a ResearchStudyDefinition|
**return value:** Boolean



# Models:



## Arm
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|StudyArmName|String|(required): Name of the Arm - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50|
|StudyWorkflowName|String|(required): *this field has a max length of 100|
|StudyWorkflowVersion|String|(required): *this field has a max length of 20|
|RootProcedureScheduleId|Guid|(optional): the ProcedureSchedule which is representing the primary-/entry-workflow (estimated visits) for participants of this arm *this field is optional|
|BillablePriceOnFailedInclusion|Decimal|(optional): *this field is optional|
|BillablePriceOnSuccessfullInclusion|Decimal|(optional): *this field is optional|
|BillablePriceOnAbortedParticipation|Decimal|(optional): *this field is optional|
|BillablePriceOnCompletedParticipation|Decimal|(optional): *this field is optional|
|ArmSpecificDocumentationUrl|String|(optional): *this field is optional (use null as value)|
|InclusionCriteria|String|(optional): *this field is optional (use null as value)|
|AllowedSubstudies|String|(optional): comma sparated list of Sub-Study names which are allowed to be executed for this arm *this field is optional (use null as value)|



## DataRecordingTaskDefinition
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|TaskDefinitionName|String|(required): Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50|
|StudyWorkflowName|String|(required): *this field has a max length of 100|
|StudyWorkflowVersion|String|(required): *this field has a max length of 20|
|BillablePriceOnCompletedExecution|Decimal|(optional): *this field is optional|
|ShortDescription|String|(required)|
|TaskSpecificDocumentationUrl|String|(optional): *this field is optional (use null as value)|
|ImportantNotices|String|(optional): *this field is optional (use null as value)|
|DataSchemaUrl|String|(required): schema-url of the data which have to be recorded|
|DefaultData|String|(optional): RAW data, in the schema as defined at the 'DataSchemaUrl' *this field is optional (use null as value)|



## DrugApplymentTaskDefinition
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|TaskDefinitionName|String|(required): Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50|
|StudyWorkflowName|String|(required): *this field has a max length of 100|
|StudyWorkflowVersion|String|(required): *this field has a max length of 20|
|BillablePriceOnCompletedExecution|Decimal|(optional): *this field is optional|
|ShortDescription|String|(required)|
|TaskSpecificDocumentationUrl|String|(optional): *this field is optional (use null as value)|
|DrugName|String|(required)|
|DrugDoseMgPerUnitMg|Decimal|(required)|
|UnitsToApply|Decimal|(required)|
|ApplymentRoute|String|(required)|
|ImportantNotices|String|(optional): *this field is optional (use null as value)|



## InducedDataRecordingTask
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|Id|Guid|(required)|
|TaskScheduleId|Guid|(required)|
|TaskDefinitionName|String|(required): *this field has a max length of 50|
|SchedulingOffset|Int32|(required): estimated scheduling time relative to the scheduling date of the parent TaskSchedule|
|SchedulingOffsetUnit|String|(required): 'h'=Hours / 'm'=Minutes / 's'=Seconds|
|SchedulingVariabilityBefore|String|(required): defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time.|
|SchedulingVariabilityAfter|String|(required): defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time.|
|SchedulingVariabilityUnit|String|(required): 'h'=Hours / 'm'=Minutes / 's'=Seconds|
|UniqueExecutionName|String|(required): the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names.|
|Skipable|Boolean|(required): defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)|
|EventOnSkip|String|(required)|
|EventOnLost|String|(required)|
|Position|Int32|(required): The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!|
|SchedulingOffsetFixpoint|Int32|(required): 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'|
|SchedulingByEstimate|Boolean|(required): If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!|
|DedicatedToSubstudy|String|(optional): The name of a Sub-Study for which this Task should be induced or empty when its part of the current Arms regular workflow *this field is optional (use null as value)|
|TaskNumber|Int32|(required): Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules|



## InducedDrugApplymentTask
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|Id|Guid|(required)|
|TaskScheduleId|Guid|(required)|
|TaskDefinitionName|String|(required): *this field has a max length of 50|
|SchedulingOffset|Int32|(required): estimated scheduling time relative to the scheduling date of the parent TaskSchedule|
|SchedulingOffsetUnit|String|(required): 'h'=Hours / 'm'=Minutes / 's'=Seconds|
|SchedulingVariabilityBefore|Int32|(required): defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time.|
|SchedulingVariabilityAfter|Int32|(required): defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time.|
|SchedulingVariabilityUnit|String|(required): 'h'=Hours / 'm'=Minutes / 's'=Seconds|
|UniqueExecutionName|String|(required): the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names.|
|Skipable|Boolean|(required): defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)|
|EventOnSkip|String|(required)|
|EventOnLost|String|(required)|
|Position|Int32|(required): The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!|
|SchedulingOffsetFixpoint|Int32|(required): 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'|
|SchedulingByEstimate|Boolean|(required): If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!|
|DedicatedToSubstudy|String|(optional): The name of a Sub-Study for which this Task should be induced or empty when its part of the current Arms regular workflow *this field is optional (use null as value)|
|TaskNumber|Int32|(required): Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules|



## InducedProcedure
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|Id|Guid|(required)|
|ProcedureScheduleId|Guid|(required)|
|SchedulingOffset|Int32|(required): estimated scheduling date relative to the scheduling date of the parent ProcedureSchedule|
|SchedulingOffsetUnit|String|(required): 'M'=Months / 'W'=Weeks / 'D'=Days|
|SchedulingVariabilityBefore|Int32|(required): defines an additional variability RELATIVE to the estimated scheduling date (which is calculated from the offset), in this case the EARLIEST possible date.|
|SchedulingVariabilityAfter|Int32|(required): defines an additional variability RELATIVE to the estimated scheduling date (which is calculated from the offset), in this case the LATEST possible date.|
|SchedulingVariabilityUnit|String|(required): 'M'=Months / 'W'=Weeks / 'D'=Days|
|ProcedureDefinitionName|String|(required): *this field has a max length of 50|
|UniqueExecutionName|String|(required): the name for the induced execution (=VISIT), like 'V0', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: 'C{cy}-V0') to prevent from duplicate execution names.|
|Skipable|Boolean|(required): defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)|
|EventOnSkip|String|(required)|
|EventOnLost|String|(required)|
|Position|Int32|(required): The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!|
|SchedulingOffsetFixpoint|Int32|(required): 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor procedure or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'|
|SchedulingByEstimate|Boolean|(required): If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!|
|DedicatedToSubstudy|String|(optional): The name of a Sub-Study for which this procedure should be induced or empty when its part of the current Arms regular workflow  *this field is optional (use null as value)|
|VisitNumber|Int32|(required): Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules|



## InducedSubProcedureSchedule
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|Id|Guid|(required)|
|ParentProcedureScheduleId|Guid|(required)|
|InducedProcedureScheduleId|Guid|(required)|
|SchedulingOffset|Int32|(required): estimated scheduling date relative to the scheduling date of the parent ProcedureSchedule|
|SchedulingOffsetUnit|String|(required): 'M'=Months / 'W'=Weeks / 'D'=Days|
|SharedSkipCounters|Boolean|(required)|
|SharedLostCounters|Boolean|(required)|
|Position|Int32|(required): The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!|
|SchedulingOffsetFixpoint|Int32|(required): 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor procedure or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'|
|SchedulingByEstimate|Boolean|(required): If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!|
|DedicatedToSubstudy|String|(optional): The name of a Sub-Study for which this schedule should be induced or empty when its part of the current Arms regular workflow  *this field is optional (use null as value)|
|IncreaseVisitNumberBase|Int32|(required)|
|InheritVisitNumberBase|Boolean|(required)|



## InducedSubTaskSchedule
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|Id|Guid|(required)|
|ParentTaskScheduleId|Guid|(required)|
|InducedTaskScheduleId|Guid|(required)|
|SchedulingOffset|Int32|(required): estimated scheduling time relative to the scheduling date of the parent ProcedureSchedule|
|SchedulingOffsetUnit|String|(required): 'h'=Hours / 'm'=Minutes / 's'=Seconds|
|SharedSkipCounters|Boolean|(required)|
|SharedLostCounters|Boolean|(required)|
|Position|Int32|(required): The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!|
|SchedulingOffsetFixpoint|Int32|(required): 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'|
|SchedulingByEstimate|Boolean|(required): If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!|
|DedicatedToSubstudy|String|(optional): The name of a Sub-Study for which this schedule should be induced or empty when its part of the current Arms regular workflow  *this field is optional (use null as value)|
|IncreaseVisitNumberBase|Int32|(required)|
|InheritVisitNumberBase|Boolean|(required)|



## InducedTreatmentTask
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|Id|Guid|(required)|
|TaskScheduleId|Guid|(required)|
|TaskDefinitionName|String|(required): *this field has a max length of 50|
|SchedulingOffset|Int32|(required): estimated scheduling time relative to the scheduling date of the parent TaskSchedule|
|SchedulingOffsetUnit|String|(required): 'h'=Hours / 'm'=Minutes / 's'=Seconds|
|SchedulingVariabilityBefore|String|(required): defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time.|
|SchedulingVariabilityAfter|String|(required): defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time.|
|SchedulingVariabilityUnit|String|(required): 'h'=Hours / 'm'=Minutes / 's'=Seconds|
|UniqueExecutionName|String|(required): the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names.|
|Skipable|Boolean|(required): defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)|
|EventOnSkip|String|(required)|
|EventOnLost|String|(required)|
|Position|Int32|(required): The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!|
|SchedulingOffsetFixpoint|Int32|(required): 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'|
|SchedulingByEstimate|Boolean|(required): If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!|
|DedicatedToSubstudy|String|(optional): The name of a Sub-Study for which this Task should be induced or empty when its part of the current Arms regular workflow *this field is optional (use null as value)|
|TaskNumber|Int32|(required): Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules|



## ProcedureCycleDefinition
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|ProcedureScheduleId|Guid|(required)|
|ReschedulingOffsetFixpoint|Int32|(required): 0=InducementOfScheduleOrCycle: when the start of the last cycle was induced / -1=InducementOfPredessessor: when the last procedure or subschedule (based on the 'Position') of the previous cycle was induced. *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'ReschedulingByEstimate'|
|ReschedulingOffset|Int32|(required): estimated scheduling date relative to the ReschedulingBase|
|ReschedulingOffsetUnit|String|(required): 'M'=Months / 'W'=Weeks / 'D'=Days|
|CycleLimit|Int32|(optional): number of cycles (of null for a infinite number of cycles) *this field is optional|
|SharedSkipCounters|Boolean|(required)|
|SharedLostCounters|Boolean|(required)|
|ReschedulingByEstimate|Boolean|(required): If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!|
|IncreaseVisitNumberBasePerCycle|Int32|(required): -1: automatic, based on the usage of visit numbers within the schedule|



## ProcedureDefinition
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|ProcedureDefinitionName|String|(required): Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50|
|StudyWorkflowName|String|(required): *this field has a max length of 100|
|StudyWorkflowVersion|String|(required): *this field has a max length of 20|
|RootTaskScheduleId|Guid|(optional): the TaskSchedule which is representing the primary-/entry-workflow (estimated tasks) when executing this visit *this field is optional|
|BillablePriceOnAbortedExecution|Decimal|(optional): *this field is optional|
|BillablePriceOnCompletedExecution|Decimal|(optional): *this field is optional|
|VisitSpecificDocumentationUrl|String|(optional): *this field is optional (use null as value)|



## ProcedureSchedule
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|ProcedureScheduleId|Guid|(required)|
|StudyWorkflowName|String|(required): *this field has a max length of 100|
|StudyWorkflowVersion|String|(required): *this field has a max length of 20|
|ScheduleWorkflowName|String|(required): Name of the Workflow which is represented by this schedule - INVARIANT! because it is used to generate Identifers for induced executions!|
|MaxSkipsBeforeLost|String|(required)|
|MaxSubsequentSkipsBeforeLost|String|(required)|
|MaxLostsBeforeLtfuAbort|String|(required)|
|MaxSubsequentLostsBeforeLtfuAbort|String|(required)|
|EventOnLtfuAbort|String|(required)|
|EventOnCycleEnded|String|(required)|
|EventOnAllCyclesEnded|String|(required)|
|InducingEvents|String|(required)|
|AbortCausingEvents|String|(required)|
|InducedProcedures|*List*<[InducedProcedure](#InducedProcedure)>|(optional)|
|InducedSubProcedureSchedules|*List*<[InducedSubProcedureSchedule](#InducedSubProcedureSchedule)>|(optional)|
|CycleDefinition|[ProcedureCycleDefinition](#ProcedureCycleDefinition)|(optional)|



## ResearchStudyDefinition
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|StudyWorkflowName|String|(required): the official invariant name of the study as given by the sponsor *this field has a max length of 100|
|StudyWorkflowVersion|String|(required): This value follows the rules of 'Semantic Versioning' (https://semver.org) and needs to be updated exactly and only on transition to DraftState.Released! If the previously DraftState was 'DraftNewFix', then the 3. number must be increased at this time! If the previously DraftState was 'DraftNewMinor', then the 2. number must be increased, and the 3. number must be set to 0 at this time! If the previously DraftState was 'DraftNewMajor', then the 1. number must be increased, and the 2.+3. number must be set to 0 at this time! *this field has a max length of 20|
|OfficialLabel|String|(required)|
|DefinitionOwner|String|(required)|
|DocumentationUrl|String|(required)|
|LogoImage|String|(optional): Logo in base64 *this field is optional (use null as value)|
|Description|String|(required)|
|VersionIdentity|String|(required): IT MUST NOT be updated on every change during Draft! Format: the Author, which is starting the new Draft (Alphanumeric, in PascalCase without blanks or other Symbols) + the current UTC-Time when setting the value (in ISO8601 format) separated by a Pipe "|" Sample: "MaxMustermann|2020-06-15T13:45:30.0000000Z".|
|LastChangeUtc|DateTime|(required)|
|DraftState|Int32|(required): 0=Released / 1=DraftNewFix / 2=DraftNewMinor / 3=DraftNewMajor|
|BillingCurrency|String|(optional): *this field is optional (use null as value)|
|BillablePriceForGeneralPreparation|Decimal|(optional): *this field is optional|
|StudyDocumentationUrl|String|(optional): *this field is optional (use null as value)|
|CaseReportFormUrl|String|(optional): *this field is optional (use null as value)|
|Arms|*List*<[Arm](#Arm)>|(optional)|
|DataRecordingTasks|*List*<[DataRecordingTaskDefinition](#DataRecordingTaskDefinition)>|(optional)|
|DrugApplymentTasks|*List*<[DrugApplymentTaskDefinition](#DrugApplymentTaskDefinition)>|(optional)|
|ProcedureDefinitions|*List*<[ProcedureDefinition](#ProcedureDefinition)>|(optional)|
|ProcedureSchedules|*List*<[ProcedureSchedule](#ProcedureSchedule)>|(optional)|
|TreatmentTasks|*List*<[TreatmentTaskDefinition](#TreatmentTaskDefinition)>|(optional)|
|TaskSchedules|*List*<[TaskSchedule](#TaskSchedule)>|(optional)|
|Events|*List*<[StudyEvent](#StudyEvent)>|(optional)|
|SubStudies|*List*<[SubStudy](#SubStudy)>|(optional)|



## StudyEvent
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|StudyEventName|String|(required): *this field has a max length of 50|
|StudyWorkflowName|String|(required): *this field has a max length of 100|
|StudyWorkflowVersion|String|(required): *this field has a max length of 20|
|MaxOccourrencesBeforeExclusion|Int32|(optional): *this field is optional|
|AllowManualTrigger|Boolean|(required)|
|Description|String|(required)|
|EvenSpecificDocumentationUrl|String|(optional): *this field is optional (use null as value)|



## SubStudy
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|SubStudyName|String|(required): *this field has a max length of 50|
|StudyWorkflowName|String|(required): *this field has a max length of 100|
|StudyWorkflowVersion|String|(required): *this field has a max length of 20|



## TaskCycleDefinition
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|TaskScheduleId|Guid|(required)|
|ReschedulingOffsetFixpoint|Int32|(required): 0=InducementOfScheduleOrCycle: when the start of the last cycle was induced / -1=InducementOfPredessessor: when the last task or subschedule (based on the 'Position') of the previous cycle was induced. *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'ReschedulingByEstimate'|
|ReschedulingOffset|Int32|(required): estimated scheduling time relative to the ReschedulingBase|
|ReschedulingOffsetUnit|String|(required): 'h'=Hours / 'm'=Minutes / 's'=Seconds|
|CycleLimit|Int32|(optional): number of cycles (of null for a infinite number of cycles) *this field is optional|
|SharedSkipCounters|Boolean|(required)|
|SharedLostCounters|Boolean|(required)|
|ReschedulingByEstimate|Boolean|(required): If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!|
|IncreaseTaskNumberBasePerCycle|Int32|(required): -1: automatic, based on the usage of task numbers within the schedule|



## TaskSchedule
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|TaskScheduleId|Guid|(required)|
|StudyWorkflowName|String|(required): *this field has a max length of 100|
|StudyWorkflowVersion|String|(required): *this field has a max length of 20|
|ScheduleWorkflowName|String|(required): Name of the Workflow which is represented by this schedule - INVARIANT! because it is used to generate Identifers for induced executions!|
|MaxSkipsBeforeLost|String|(required)|
|MaxSubsequentSkipsBeforeLost|String|(required)|
|MaxLostsBeforeLtfuAbort|String|(required)|
|MaxSubsequentLostsBeforeLtfuAbort|String|(required)|
|EventOnLtfuAbort|String|(required)|
|EventOnCycleEnded|String|(required)|
|EventOnAllCyclesEnded|String|(required)|
|InducingEvents|String|(required)|
|AbortCausingEvents|String|(required)|
|InducedDataRecordingTasks|*List*<[InducedDataRecordingTask](#InducedDataRecordingTask)>|(optional)|
|InducedDrugApplymentTasks|*List*<[InducedDrugApplymentTask](#InducedDrugApplymentTask)>|(optional)|
|InducedSubTaskSchedules|*List*<[InducedSubTaskSchedule](#InducedSubTaskSchedule)>|(optional)|
|InducedTreatmentTasks|*List*<[InducedTreatmentTask](#InducedTreatmentTask)>|(optional)|
|CycleDefinition|[TaskCycleDefinition](#TaskCycleDefinition)|(optional)|



## TreatmentTaskDefinition
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|TaskDefinitionName|String|(required): Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50|
|StudyWorkflowName|String|(required): *this field has a max length of 100|
|StudyWorkflowVersion|String|(required): *this field has a max length of 20|
|BillablePriceOnCompletedExecution|Decimal|(optional): *this field is optional|
|ShortDescription|String|(required)|
|TaskSpecificDocumentationUrl|String|(optional): *this field is optional (use null as value)|
|TreatmentDescription|String|(required)|
|ImportantNotices|String|(optional): *this field is optional (use null as value)|



## ResearchStudyDefinitionIdentity
Composite Key, which represents the primary identity of a ResearchStudyDefinition
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|(none)|||



## ExpressionTree
(from 'FUSE-fx.RepositoryContract')
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|MatchAll|Boolean|(optional): true: AND-Relation | false: OR-Relation|
|Negate|Boolean|(optional): Negates the result|
|Predicates|*List*<[FieldPredicate](#FieldPredicate)>|(optional): Can contain ATOMIC predicates (FieldName~Value). NOTE: If there is more than one predicate with the same FieldName in combination with MatchAll=true, then this will lead to an subordinated OR-Expression dedicated to this field.|
|SubTree|*List*<[ExpressionTree](#ExpressionTree)>|(optional)|



## FieldPredicate
(from 'FUSE-fx.RepositoryContract')
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|FieldName|String|(optional)|
|Operator|String|(optional): Wellknown operators like '==' '!=' (see 'FieldOperators'-Contants).|
|Value|Object|(optional): The value to match! (NOTE: in th special case of using the 'in' operator, the given 'value' to match must NOT be scalar! Instead it must be an ARRAY. A match is given if a field equals to at least one value within that array.)|



## RepositoryCapabilities
(from 'FUSE-fx.RepositoryContract')
An property bag which holds information about the implemented/supported
capabilities of an IRepository.
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|CanReadContent|Boolean|(optional): Indicates, that this repository offers access to load entities(classes) or some their entity fields (if this is false, then only EntityRefs are accessable)|
|CanUpdateContent|Boolean|(optional)|
|CanAddNewEntities|Boolean|(optional)|
|CanDeleteEntities|Boolean|(optional)|
|SupportsMassupdate|Boolean|(optional)|
|SupportsKeyUpdate|Boolean|(optional)|
|SupportsStringBasedSearchExpressions|Boolean|(optional)|
|RequiresExternalKeys|Boolean|(optional): Indicates, that entities can only be added to this repository, if ther key fields are pre-initialized by the caller. If false, then the persistence-technology behind the repository implementation will auto-generate a new key by its own.|

export declare class Arm {
    /**
     * Name of the Arm - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
     */
    studyArmName: string;
    /**
     * *this field has a max length of 100
     */
    studyWorkflowName: string;
    /**
     * *this field has a max length of 20
     */
    studyWorkflowVersion: string;
    /**
     * the ProcedureSchedule which is representing the primary-/entry-workflow (estimated visits) for participants of this arm *this field is optional
     */
    rootProcedureScheduleId?: string;
    /**
     * *this field is optional
     */
    billablePriceOnFailedInclusion?: number;
    /**
     * *this field is optional
     */
    billablePriceOnSuccessfullInclusion?: number;
    /**
     * *this field is optional
     */
    billablePriceOnAbortedParticipation?: number;
    /**
     * *this field is optional
     */
    billablePriceOnCompletedParticipation?: number;
    /**
     * *this field is optional (use null as value)
     */
    armSpecificDocumentationUrl?: string;
    /**
     * *this field is optional (use null as value)
     */
    inclusionCriteria?: string;
    /**
     * comma sparated list of Sub-Study names which are allowed to be executed for this arm *this field is optional (use null as value)
     */
    allowedSubstudies?: string;
}
export declare class DataRecordingTaskDefinition {
    /**
     * Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
     */
    taskDefinitionName: string;
    /**
     * *this field has a max length of 100
     */
    studyWorkflowName: string;
    /**
     * *this field has a max length of 20
     */
    studyWorkflowVersion: string;
    /**
     * *this field is optional
     */
    billablePriceOnCompletedExecution?: number;
    shortDescription: string;
    /**
     * *this field is optional (use null as value)
     */
    taskSpecificDocumentationUrl?: string;
    /**
     * *this field is optional (use null as value)
     */
    importantNotices?: string;
    /**
     * schema-url of the data which have to be recorded
     */
    dataSchemaUrl: string;
    /**
     * RAW data, in the schema as defined at the 'DataSchemaUrl' *this field is optional (use null as value)
     */
    defaultData?: string;
}
export declare class DrugApplymentTaskDefinition {
    /**
     * Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
     */
    taskDefinitionName: string;
    /**
     * *this field has a max length of 100
     */
    studyWorkflowName: string;
    /**
     * *this field has a max length of 20
     */
    studyWorkflowVersion: string;
    /**
     * *this field is optional
     */
    billablePriceOnCompletedExecution?: number;
    shortDescription: string;
    /**
     * *this field is optional (use null as value)
     */
    taskSpecificDocumentationUrl?: string;
    drugName: string;
    drugDoseMgPerUnitMg: number;
    unitsToApply: number;
    applymentRoute: string;
    /**
     * *this field is optional (use null as value)
     */
    importantNotices?: string;
}
export declare class ProcedureDefinition {
    /**
     * Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
     */
    prodecureDefinitionName: string;
    /**
     * *this field has a max length of 100
     */
    studyWorkflowName: string;
    /**
     * *this field has a max length of 20
     */
    studyWorkflowVersion: string;
    /**
     * the TaskSchedule which is representing the primary-/entry-workflow (estimated tasks) when executing this visit *this field is optional
     */
    rootTaskScheduleId?: string;
    /**
     * *this field is optional
     */
    billablePriceOnAbortedExecution?: number;
    /**
     * *this field is optional
     */
    billablePriceOnCompletedExecution?: number;
    /**
     * *this field is optional (use null as value)
     */
    visitSpecificDocumentationUrl?: string;
}
export declare class InducedProcedure {
    id: string;
    procedureScheduleId: string;
    /**
     * estimated scheduling date relative to the scheduling date of the parent ProcedureSchedule
     */
    schedulingOffset: number;
    /**
     * 'M'=Months / 'W'=Weeks / 'D'=Days
     */
    schedulingOffsetUnit: string;
    /**
     * defines an additional variability RELATIVE to the estimated scheduling date (which is calculated from the offset), in this case the EARLIEST possible date.
     */
    schedulingVariabilityBefore: number;
    /**
     * defines an additional variability RELATIVE to the estimated scheduling date (which is calculated from the offset), in this case the LATEST possible date.
     */
    schedulingVariabilityAfter: number;
    /**
     * 'M'=Months / 'W'=Weeks / 'D'=Days
     */
    schedulingVariabilityUnit: string;
    /**
     * *this field has a max length of 50
     */
    prodecureDefinitionName: string;
    /**
     * the name for the induced execution (=VISIT), like 'V0', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: 'C{cy}-V0') to prevent from duplicate execution names.
     */
    uniqueExecutionName: string;
    /**
     * defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)
     */
    skipable: boolean;
    eventOnSkip: string;
    eventOnLost: string;
    /**
     * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
     */
    position: number;
    /**
     * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor procedure or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
     */
    schedulingOffsetFixpoint: number;
    /**
     * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
     */
    schedulingByEstimate: boolean;
    /**
     * The name of a Sub-Study for which this procedure should be induced or empty when its part of the current Arms regular workflow  *this field is optional (use null as value)
     */
    dedicatedToSubstudy?: string;
    /**
     * Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules
     */
    visitNumber: number;
}
export declare class InducedSubProcedureSchedule {
    id: string;
    parentProcedureScheduleId: string;
    inducedProcedureScheduleId: string;
    /**
     * estimated scheduling date relative to the scheduling date of the parent ProcedureSchedule
     */
    schedulingOffset: number;
    /**
     * 'M'=Months / 'W'=Weeks / 'D'=Days
     */
    schedulingOffsetUnit: string;
    sharedSkipCounters: boolean;
    sharedLostCounters: boolean;
    /**
     * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
     */
    position: number;
    /**
     * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor procedure or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
     */
    schedulingOffsetFixpoint: number;
    /**
     * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
     */
    schedulingByEstimate: boolean;
    /**
     * The name of a Sub-Study for which this schedule should be induced or empty when its part of the current Arms regular workflow  *this field is optional (use null as value)
     */
    dedicatedToSubstudy?: string;
    increaseVisitNumberBase: number;
    inheritVisitNumberBase: boolean;
}
export declare class ProcedureCycleDefinition {
    procedureScheduleId: string;
    /**
     * 0=InducementOfScheduleOrCycle: when the start of the last cycle was induced / -1=InducementOfPredessessor: when the last procedure or subschedule (based on the 'Position') of the previous cycle was induced. *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'ReschedulingByEstimate'
     */
    reschedulingOffsetFixpoint: number;
    /**
     * estimated scheduling date relative to the ReschedulingBase
     */
    reschedulingOffset: number;
    /**
     * 'M'=Months / 'W'=Weeks / 'D'=Days
     */
    reschedulingOffsetUnit: string;
    /**
     * number of cycles (of null for a infinite number of cycles) *this field is optional
     */
    cycleLimit?: number;
    sharedSkipCounters: boolean;
    sharedLostCounters: boolean;
    /**
     * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
     */
    reschedulingByEstimate: boolean;
    /**
     * -1: automatic, based on the usage of visit numbers within the schedule
     */
    increaseVisitNumberBasePerCycle: number;
}
export declare class TreatmentTaskDefinition {
    /**
     * Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
     */
    taskDefinitionName: string;
    /**
     * *this field has a max length of 100
     */
    studyWorkflowName: string;
    /**
     * *this field has a max length of 20
     */
    studyWorkflowVersion: string;
    /**
     * *this field is optional
     */
    billablePriceOnCompletedExecution?: number;
    shortDescription: string;
    /**
     * *this field is optional (use null as value)
     */
    taskSpecificDocumentationUrl?: string;
    treatmentDescription: string;
    /**
     * *this field is optional (use null as value)
     */
    importantNotices?: string;
}
export declare class InducedDataRecordingTask {
    id: string;
    taskScheduleId: string;
    /**
     * *this field has a max length of 50
     */
    taskDefinitionName: string;
    /**
     * estimated scheduling time relative to the scheduling date of the parent TaskSchedule
     */
    schedulingOffset: number;
    /**
     * 'h'=Hours / 'm'=Minutes / 's'=Seconds
     */
    schedulingOffsetUnit: string;
    /**
     * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time.
     */
    schedulingVariabilityBefore: string;
    /**
     * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time.
     */
    schedulingVariabilityAfter: string;
    /**
     * 'h'=Hours / 'm'=Minutes / 's'=Seconds
     */
    schedulingVariabilityUnit: string;
    /**
     * the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names.
     */
    uniqueExecutionName: string;
    /**
     * defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)
     */
    skipable: boolean;
    eventOnSkip: string;
    eventOnLost: string;
    /**
     * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
     */
    position: number;
    /**
     * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
     */
    schedulingOffsetFixpoint: number;
    /**
     * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
     */
    schedulingByEstimate: boolean;
    /**
     * The name of a Sub-Study for which this Task should be induced or empty when its part of the current Arms regular workflow *this field is optional (use null as value)
     */
    dedicatedToSubstudy?: string;
    /**
     * Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules
     */
    taskNumber: number;
}
export declare class InducedDrugApplymentTask {
    id: string;
    taskScheduleId: string;
    /**
     * *this field has a max length of 50
     */
    taskDefinitionName: string;
    /**
     * estimated scheduling time relative to the scheduling date of the parent TaskSchedule
     */
    schedulingOffset: number;
    /**
     * 'h'=Hours / 'm'=Minutes / 's'=Seconds
     */
    schedulingOffsetUnit: string;
    /**
     * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time.
     */
    schedulingVariabilityBefore: number;
    /**
     * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time.
     */
    schedulingVariabilityAfter: number;
    /**
     * 'h'=Hours / 'm'=Minutes / 's'=Seconds
     */
    schedulingVariabilityUnit: string;
    /**
     * the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names.
     */
    uniqueExecutionName: string;
    /**
     * defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)
     */
    skipable: boolean;
    eventOnSkip: string;
    eventOnLost: string;
    /**
     * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
     */
    position: number;
    /**
     * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
     */
    schedulingOffsetFixpoint: number;
    /**
     * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
     */
    schedulingByEstimate: boolean;
    /**
     * The name of a Sub-Study for which this Task should be induced or empty when its part of the current Arms regular workflow *this field is optional (use null as value)
     */
    dedicatedToSubstudy?: string;
    /**
     * Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules
     */
    taskNumber: number;
}
export declare class InducedSubTaskSchedule {
    id: string;
    parentTaskScheduleId: string;
    inducedTaskScheduleId: string;
    /**
     * estimated scheduling time relative to the scheduling date of the parent ProcedureSchedule
     */
    schedulingOffset: number;
    /**
     * 'h'=Hours / 'm'=Minutes / 's'=Seconds
     */
    schedulingOffsetUnit: string;
    sharedSkipCounters: boolean;
    sharedLostCounters: boolean;
    /**
     * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
     */
    position: number;
    /**
     * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
     */
    schedulingOffsetFixpoint: number;
    /**
     * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
     */
    schedulingByEstimate: boolean;
    /**
     * The name of a Sub-Study for which this schedule should be induced or empty when its part of the current Arms regular workflow  *this field is optional (use null as value)
     */
    dedicatedToSubstudy?: string;
    increaseVisitNumberBase: number;
    inheritVisitNumberBase: boolean;
}
export declare class InducedTreatmentTask {
    id: string;
    taskScheduleId: string;
    /**
     * *this field has a max length of 50
     */
    taskDefinitionName: string;
    /**
     * estimated scheduling time relative to the scheduling date of the parent TaskSchedule
     */
    schedulingOffset: number;
    /**
     * 'h'=Hours / 'm'=Minutes / 's'=Seconds
     */
    schedulingOffsetUnit: string;
    /**
     * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time.
     */
    schedulingVariabilityBefore: string;
    /**
     * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time.
     */
    schedulingVariabilityAfter: string;
    /**
     * 'h'=Hours / 'm'=Minutes / 's'=Seconds
     */
    schedulingVariabilityUnit: string;
    /**
     * the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names.
     */
    uniqueExecutionName: string;
    /**
     * defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)
     */
    skipable: boolean;
    eventOnSkip: string;
    eventOnLost: string;
    /**
     * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
     */
    position: number;
    /**
     * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
     */
    schedulingOffsetFixpoint: number;
    /**
     * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
     */
    schedulingByEstimate: boolean;
    /**
     * The name of a Sub-Study for which this Task should be induced or empty when its part of the current Arms regular workflow *this field is optional (use null as value)
     */
    dedicatedToSubstudy?: string;
    /**
     * Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules
     */
    taskNumber: number;
}
export declare class TaskCycleDefinition {
    taskScheduleId: string;
    /**
     * 0=InducementOfScheduleOrCycle: when the start of the last cycle was induced / -1=InducementOfPredessessor: when the last task or subschedule (based on the 'Position') of the previous cycle was induced. *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'ReschedulingByEstimate'
     */
    reschedulingOffsetFixpoint: number;
    /**
     * estimated scheduling time relative to the ReschedulingBase
     */
    reschedulingOffset: number;
    /**
     * 'h'=Hours / 'm'=Minutes / 's'=Seconds
     */
    reschedulingOffsetUnit: string;
    /**
     * number of cycles (of null for a infinite number of cycles) *this field is optional
     */
    cycleLimit?: number;
    sharedSkipCounters: boolean;
    sharedLostCounters: boolean;
    /**
     * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
     */
    reschedulingByEstimate: boolean;
    /**
     * -1: automatic, based on the usage of task numbers within the schedule
     */
    increaseTaskNumberBasePerCycle: number;
}
export declare class StudyEvent {
    /**
     * *this field has a max length of 50
     */
    studyEventName: string;
    /**
     * *this field has a max length of 100
     */
    studyWorkflowName: string;
    /**
     * *this field has a max length of 20
     */
    studyWorkflowVersion: string;
    /**
     * *this field is optional
     */
    maxOccourrencesBeforeExclusion?: number;
    allowManualTrigger: boolean;
    description: string;
    /**
     * *this field is optional (use null as value)
     */
    evenSpecificDocumentationUrl?: string;
}
export declare class SubStudy {
    /**
     * *this field has a max length of 50
     */
    subStudyName: string;
    /**
     * *this field has a max length of 100
     */
    studyWorkflowName: string;
    /**
     * *this field has a max length of 20
     */
    studyWorkflowVersion: string;
}
/**
 * Composite Key, which represents the primary identity of a ResearchStudyDefinition
 */
export declare class ResearchStudyDefinitionIdentity {
}
export declare class ProcedureSchedule {
    procedureScheduleId: string;
    /**
     * *this field has a max length of 100
     */
    studyWorkflowName: string;
    /**
     * *this field has a max length of 20
     */
    studyWorkflowVersion: string;
    /**
     * Name of the Workflow which is represented by this schedule - INVARIANT! because it is used to generate Identifers for induced executions!
     */
    scheduleWorkflowName: string;
    maxSkipsBeforeLost: string;
    maxSubsequentSkipsBeforeLost: string;
    maxLostsBeforeLtfuAbort: string;
    maxSubsequentLostsBeforeLtfuAbort: string;
    eventOnLtfuAbort: string;
    eventOnCycleEnded: string;
    eventOnAllCyclesEnded: string;
    inducingEvents: string;
    abortCausingEvents: string;
    inducedProcedures?: InducedProcedure[];
    inducedSubProcedureSchedules?: InducedSubProcedureSchedule[];
    cycleDefinition?: ProcedureCycleDefinition;
}
export declare class TaskSchedule {
    taskScheduleId: string;
    /**
     * *this field has a max length of 100
     */
    studyWorkflowName: string;
    /**
     * *this field has a max length of 20
     */
    studyWorkflowVersion: string;
    /**
     * Name of the Workflow which is represented by this schedule - INVARIANT! because it is used to generate Identifers for induced executions!
     */
    scheduleWorkflowName: string;
    maxSkipsBeforeLost: string;
    maxSubsequentSkipsBeforeLost: string;
    maxLostsBeforeLtfuAbort: string;
    maxSubsequentLostsBeforeLtfuAbort: string;
    eventOnLtfuAbort: string;
    eventOnCycleEnded: string;
    eventOnAllCyclesEnded: string;
    inducingEvents: string;
    abortCausingEvents: string;
    inducedDataRecordingTasks?: InducedDataRecordingTask[];
    inducedDrugApplymentTasks?: InducedDrugApplymentTask[];
    inducedSubTaskSchedules?: InducedSubTaskSchedule[];
    inducedTreatmentTasks?: InducedTreatmentTask[];
    cycleDefinition?: TaskCycleDefinition;
}
export declare class ResearchStudyDefinition {
    /**
     * the official invariant name of the study as given by the sponsor *this field has a max length of 100
     */
    studyWorkflowName: string;
    /**
     * This value follows the rules of 'Semantic Versioning' (https://semver.org) and needs to be updated exactly and only on transition to DraftState.Released! If the previously DraftState was 'DraftNewFix', then the 3. number must be increased at this time! If the previously DraftState was 'DraftNewMinor', then the 2. number must be increased, and the 3. number must be set to 0 at this time! If the previously DraftState was 'DraftNewMajor', then the 1. number must be increased, and the 2.+3. number must be set to 0 at this time! *this field has a max length of 20
     */
    studyWorkflowVersion: string;
    officialLabel: string;
    definitionOwner: string;
    documentationUrl: string;
    /**
     * Logo in base64 *this field is optional (use null as value)
     */
    logoImage?: string;
    description: string;
    /**
     * IT MUST NOT be updated on every change during Draft! Format: the Author, which is starting the new Draft (Alphanumeric, in PascalCase without blanks or other Symbols) + the current UTC-Time when setting the value (in ISO8601 format) separated by a Pipe "|" Sample: "MaxMustermann|2020-06-15T13:45:30.0000000Z".
     */
    versionIdentity: string;
    lastChangeUtc: Date;
    /**
     * 0=Released / 1=DraftNewFix / 2=DraftNewMinor / 3=DraftNewMajor
     */
    draftState: number;
    /**
     * *this field is optional (use null as value)
     */
    billingCurrency?: string;
    /**
     * *this field is optional
     */
    billablePriceForGeneralPreparation?: number;
    /**
     * *this field is optional (use null as value)
     */
    studyDocumentationUrl?: string;
    /**
     * *this field is optional (use null as value)
     */
    caseReportFormUrl?: string;
    arms?: Arm[];
    dataRecordingTasks?: DataRecordingTaskDefinition[];
    drugApplymentTasks?: DrugApplymentTaskDefinition[];
    procedureDefinitions?: ProcedureDefinition[];
    procedureSchedules?: ProcedureSchedule[];
    treatmentTasks?: TreatmentTaskDefinition[];
    taskSchedules?: TaskSchedule[];
    events?: StudyEvent[];
    subStudies?: SubStudy[];
}
//# sourceMappingURL=models.d.ts.map
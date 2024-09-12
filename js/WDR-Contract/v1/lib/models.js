"use strict";
/* based on ORSCF StudyWorkflowDefinition Contract v1.8.0.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchStudyDefinition = exports.TaskSchedule = exports.ProcedureSchedule = exports.ResearchStudyDefinitionIdentity = exports.SubStudy = exports.StudyEvent = exports.TaskCycleDefinition = exports.InducedTreatmentTask = exports.InducedSubTaskSchedule = exports.InducedDrugApplymentTask = exports.InducedDataRecordingTask = exports.TreatmentTaskDefinition = exports.ProcedureCycleDefinition = exports.InducedSubProcedureSchedule = exports.InducedProcedure = exports.ProcedureDefinition = exports.DrugApplymentTaskDefinition = exports.DataRecordingTaskDefinition = exports.Arm = void 0;
var Arm = /** @class */ (function () {
    function Arm() {
        /**
         * Name of the Arm - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
         */
        this.studyArmName = '';
        /**
         * *this field has a max length of 100
         */
        this.studyWorkflowName = '';
        /**
         * *this field has a max length of 20
         */
        this.studyWorkflowVersion = '';
    }
    return Arm;
}());
exports.Arm = Arm;
var DataRecordingTaskDefinition = /** @class */ (function () {
    function DataRecordingTaskDefinition() {
        /**
         * Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
         */
        this.taskDefinitionName = '';
        /**
         * *this field has a max length of 100
         */
        this.studyWorkflowName = '';
        /**
         * *this field has a max length of 20
         */
        this.studyWorkflowVersion = '';
        this.shortDescription = '';
        /**
         * schema-url of the data which have to be recorded
         */
        this.dataSchemaUrl = '';
    }
    return DataRecordingTaskDefinition;
}());
exports.DataRecordingTaskDefinition = DataRecordingTaskDefinition;
var DrugApplymentTaskDefinition = /** @class */ (function () {
    function DrugApplymentTaskDefinition() {
        /**
         * Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
         */
        this.taskDefinitionName = '';
        /**
         * *this field has a max length of 100
         */
        this.studyWorkflowName = '';
        /**
         * *this field has a max length of 20
         */
        this.studyWorkflowVersion = '';
        this.shortDescription = '';
        this.drugName = '';
        this.drugDoseMgPerUnitMg = 0;
        this.unitsToApply = 0;
        this.applymentRoute = '';
    }
    return DrugApplymentTaskDefinition;
}());
exports.DrugApplymentTaskDefinition = DrugApplymentTaskDefinition;
var ProcedureDefinition = /** @class */ (function () {
    function ProcedureDefinition() {
        /**
         * Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
         */
        this.prodecureDefinitionName = '';
        /**
         * *this field has a max length of 100
         */
        this.studyWorkflowName = '';
        /**
         * *this field has a max length of 20
         */
        this.studyWorkflowVersion = '';
    }
    return ProcedureDefinition;
}());
exports.ProcedureDefinition = ProcedureDefinition;
var InducedProcedure = /** @class */ (function () {
    function InducedProcedure() {
        this.id = '';
        this.procedureScheduleId = '';
        /**
         * estimated scheduling date relative to the scheduling date of the parent ProcedureSchedule
         */
        this.schedulingOffset = 0;
        /**
         * 'M'=Months / 'W'=Weeks / 'D'=Days
         */
        this.schedulingOffsetUnit = '';
        /**
         * defines an additional variability RELATIVE to the estimated scheduling date (which is calculated from the offset), in this case the EARLIEST possible date.
         */
        this.schedulingVariabilityBefore = 0;
        /**
         * defines an additional variability RELATIVE to the estimated scheduling date (which is calculated from the offset), in this case the LATEST possible date.
         */
        this.schedulingVariabilityAfter = 0;
        /**
         * 'M'=Months / 'W'=Weeks / 'D'=Days
         */
        this.schedulingVariabilityUnit = '';
        /**
         * *this field has a max length of 50
         */
        this.prodecureDefinitionName = '';
        /**
         * the name for the induced execution (=VISIT), like 'V0', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: 'C{cy}-V0') to prevent from duplicate execution names.
         */
        this.uniqueExecutionName = '';
        /**
         * defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)
         */
        this.skipable = false;
        this.eventOnSkip = '';
        this.eventOnLost = '';
        /**
         * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
         */
        this.position = 0;
        /**
         * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor procedure or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
         */
        this.schedulingOffsetFixpoint = 0;
        /**
         * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
         */
        this.schedulingByEstimate = false;
        /**
         * Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules
         */
        this.visitNumber = 0;
    }
    return InducedProcedure;
}());
exports.InducedProcedure = InducedProcedure;
var InducedSubProcedureSchedule = /** @class */ (function () {
    function InducedSubProcedureSchedule() {
        this.id = '';
        this.parentProcedureScheduleId = '';
        this.inducedProcedureScheduleId = '';
        /**
         * estimated scheduling date relative to the scheduling date of the parent ProcedureSchedule
         */
        this.schedulingOffset = 0;
        /**
         * 'M'=Months / 'W'=Weeks / 'D'=Days
         */
        this.schedulingOffsetUnit = '';
        this.sharedSkipCounters = false;
        this.sharedLostCounters = false;
        /**
         * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
         */
        this.position = 0;
        /**
         * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor procedure or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
         */
        this.schedulingOffsetFixpoint = 0;
        /**
         * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
         */
        this.schedulingByEstimate = false;
        this.increaseVisitNumberBase = 0;
        this.inheritVisitNumberBase = false;
    }
    return InducedSubProcedureSchedule;
}());
exports.InducedSubProcedureSchedule = InducedSubProcedureSchedule;
var ProcedureCycleDefinition = /** @class */ (function () {
    function ProcedureCycleDefinition() {
        this.procedureScheduleId = '';
        /**
         * 0=InducementOfScheduleOrCycle: when the start of the last cycle was induced / -1=InducementOfPredessessor: when the last procedure or subschedule (based on the 'Position') of the previous cycle was induced. *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'ReschedulingByEstimate'
         */
        this.reschedulingOffsetFixpoint = 0;
        /**
         * estimated scheduling date relative to the ReschedulingBase
         */
        this.reschedulingOffset = 0;
        /**
         * 'M'=Months / 'W'=Weeks / 'D'=Days
         */
        this.reschedulingOffsetUnit = '';
        this.sharedSkipCounters = false;
        this.sharedLostCounters = false;
        /**
         * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
         */
        this.reschedulingByEstimate = false;
        /**
         * -1: automatic, based on the usage of visit numbers within the schedule
         */
        this.increaseVisitNumberBasePerCycle = 0;
    }
    return ProcedureCycleDefinition;
}());
exports.ProcedureCycleDefinition = ProcedureCycleDefinition;
var TreatmentTaskDefinition = /** @class */ (function () {
    function TreatmentTaskDefinition() {
        /**
         * Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
         */
        this.taskDefinitionName = '';
        /**
         * *this field has a max length of 100
         */
        this.studyWorkflowName = '';
        /**
         * *this field has a max length of 20
         */
        this.studyWorkflowVersion = '';
        this.shortDescription = '';
        this.treatmentDescription = '';
    }
    return TreatmentTaskDefinition;
}());
exports.TreatmentTaskDefinition = TreatmentTaskDefinition;
var InducedDataRecordingTask = /** @class */ (function () {
    function InducedDataRecordingTask() {
        this.id = '';
        this.taskScheduleId = '';
        /**
         * *this field has a max length of 50
         */
        this.taskDefinitionName = '';
        /**
         * estimated scheduling time relative to the scheduling date of the parent TaskSchedule
         */
        this.schedulingOffset = 0;
        /**
         * 'h'=Hours / 'm'=Minutes / 's'=Seconds
         */
        this.schedulingOffsetUnit = '';
        /**
         * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time.
         */
        this.schedulingVariabilityBefore = '';
        /**
         * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time.
         */
        this.schedulingVariabilityAfter = '';
        /**
         * 'h'=Hours / 'm'=Minutes / 's'=Seconds
         */
        this.schedulingVariabilityUnit = '';
        /**
         * the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names.
         */
        this.uniqueExecutionName = '';
        /**
         * defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)
         */
        this.skipable = false;
        this.eventOnSkip = '';
        this.eventOnLost = '';
        /**
         * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
         */
        this.position = 0;
        /**
         * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
         */
        this.schedulingOffsetFixpoint = 0;
        /**
         * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
         */
        this.schedulingByEstimate = false;
        /**
         * Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules
         */
        this.taskNumber = 0;
    }
    return InducedDataRecordingTask;
}());
exports.InducedDataRecordingTask = InducedDataRecordingTask;
var InducedDrugApplymentTask = /** @class */ (function () {
    function InducedDrugApplymentTask() {
        this.id = '';
        this.taskScheduleId = '';
        /**
         * *this field has a max length of 50
         */
        this.taskDefinitionName = '';
        /**
         * estimated scheduling time relative to the scheduling date of the parent TaskSchedule
         */
        this.schedulingOffset = 0;
        /**
         * 'h'=Hours / 'm'=Minutes / 's'=Seconds
         */
        this.schedulingOffsetUnit = '';
        /**
         * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time.
         */
        this.schedulingVariabilityBefore = 0;
        /**
         * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time.
         */
        this.schedulingVariabilityAfter = 0;
        /**
         * 'h'=Hours / 'm'=Minutes / 's'=Seconds
         */
        this.schedulingVariabilityUnit = '';
        /**
         * the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names.
         */
        this.uniqueExecutionName = '';
        /**
         * defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)
         */
        this.skipable = false;
        this.eventOnSkip = '';
        this.eventOnLost = '';
        /**
         * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
         */
        this.position = 0;
        /**
         * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
         */
        this.schedulingOffsetFixpoint = 0;
        /**
         * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
         */
        this.schedulingByEstimate = false;
        /**
         * Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules
         */
        this.taskNumber = 0;
    }
    return InducedDrugApplymentTask;
}());
exports.InducedDrugApplymentTask = InducedDrugApplymentTask;
var InducedSubTaskSchedule = /** @class */ (function () {
    function InducedSubTaskSchedule() {
        this.id = '';
        this.parentTaskScheduleId = '';
        this.inducedTaskScheduleId = '';
        /**
         * estimated scheduling time relative to the scheduling date of the parent ProcedureSchedule
         */
        this.schedulingOffset = 0;
        /**
         * 'h'=Hours / 'm'=Minutes / 's'=Seconds
         */
        this.schedulingOffsetUnit = '';
        this.sharedSkipCounters = false;
        this.sharedLostCounters = false;
        /**
         * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
         */
        this.position = 0;
        /**
         * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
         */
        this.schedulingOffsetFixpoint = 0;
        /**
         * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
         */
        this.schedulingByEstimate = false;
        this.increaseVisitNumberBase = 0;
        this.inheritVisitNumberBase = false;
    }
    return InducedSubTaskSchedule;
}());
exports.InducedSubTaskSchedule = InducedSubTaskSchedule;
var InducedTreatmentTask = /** @class */ (function () {
    function InducedTreatmentTask() {
        this.id = '';
        this.taskScheduleId = '';
        /**
         * *this field has a max length of 50
         */
        this.taskDefinitionName = '';
        /**
         * estimated scheduling time relative to the scheduling date of the parent TaskSchedule
         */
        this.schedulingOffset = 0;
        /**
         * 'h'=Hours / 'm'=Minutes / 's'=Seconds
         */
        this.schedulingOffsetUnit = '';
        /**
         * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time.
         */
        this.schedulingVariabilityBefore = '';
        /**
         * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time.
         */
        this.schedulingVariabilityAfter = '';
        /**
         * 'h'=Hours / 'm'=Minutes / 's'=Seconds
         */
        this.schedulingVariabilityUnit = '';
        /**
         * the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names.
         */
        this.uniqueExecutionName = '';
        /**
         * defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)
         */
        this.skipable = false;
        this.eventOnSkip = '';
        this.eventOnLost = '';
        /**
         * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
         */
        this.position = 0;
        /**
         * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
         */
        this.schedulingOffsetFixpoint = 0;
        /**
         * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
         */
        this.schedulingByEstimate = false;
        /**
         * Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules
         */
        this.taskNumber = 0;
    }
    return InducedTreatmentTask;
}());
exports.InducedTreatmentTask = InducedTreatmentTask;
var TaskCycleDefinition = /** @class */ (function () {
    function TaskCycleDefinition() {
        this.taskScheduleId = '';
        /**
         * 0=InducementOfScheduleOrCycle: when the start of the last cycle was induced / -1=InducementOfPredessessor: when the last task or subschedule (based on the 'Position') of the previous cycle was induced. *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'ReschedulingByEstimate'
         */
        this.reschedulingOffsetFixpoint = 0;
        /**
         * estimated scheduling time relative to the ReschedulingBase
         */
        this.reschedulingOffset = 0;
        /**
         * 'h'=Hours / 'm'=Minutes / 's'=Seconds
         */
        this.reschedulingOffsetUnit = '';
        this.sharedSkipCounters = false;
        this.sharedLostCounters = false;
        /**
         * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
         */
        this.reschedulingByEstimate = false;
        /**
         * -1: automatic, based on the usage of task numbers within the schedule
         */
        this.increaseTaskNumberBasePerCycle = 0;
    }
    return TaskCycleDefinition;
}());
exports.TaskCycleDefinition = TaskCycleDefinition;
var StudyEvent = /** @class */ (function () {
    function StudyEvent() {
        /**
         * *this field has a max length of 50
         */
        this.studyEventName = '';
        /**
         * *this field has a max length of 100
         */
        this.studyWorkflowName = '';
        /**
         * *this field has a max length of 20
         */
        this.studyWorkflowVersion = '';
        this.allowManualTrigger = false;
        this.description = '';
    }
    return StudyEvent;
}());
exports.StudyEvent = StudyEvent;
var SubStudy = /** @class */ (function () {
    function SubStudy() {
        /**
         * *this field has a max length of 50
         */
        this.subStudyName = '';
        /**
         * *this field has a max length of 100
         */
        this.studyWorkflowName = '';
        /**
         * *this field has a max length of 20
         */
        this.studyWorkflowVersion = '';
    }
    return SubStudy;
}());
exports.SubStudy = SubStudy;
/**
 * Composite Key, which represents the primary identity of a ResearchStudyDefinition
 */
var ResearchStudyDefinitionIdentity = /** @class */ (function () {
    function ResearchStudyDefinitionIdentity() {
    }
    return ResearchStudyDefinitionIdentity;
}());
exports.ResearchStudyDefinitionIdentity = ResearchStudyDefinitionIdentity;
var ProcedureSchedule = /** @class */ (function () {
    function ProcedureSchedule() {
        this.procedureScheduleId = '';
        /**
         * *this field has a max length of 100
         */
        this.studyWorkflowName = '';
        /**
         * *this field has a max length of 20
         */
        this.studyWorkflowVersion = '';
        /**
         * Name of the Workflow which is represented by this schedule - INVARIANT! because it is used to generate Identifers for induced executions!
         */
        this.scheduleWorkflowName = '';
        this.maxSkipsBeforeLost = '';
        this.maxSubsequentSkipsBeforeLost = '';
        this.maxLostsBeforeLtfuAbort = '';
        this.maxSubsequentLostsBeforeLtfuAbort = '';
        this.eventOnLtfuAbort = '';
        this.eventOnCycleEnded = '';
        this.eventOnAllCyclesEnded = '';
        this.inducingEvents = '';
        this.abortCausingEvents = '';
    }
    return ProcedureSchedule;
}());
exports.ProcedureSchedule = ProcedureSchedule;
var TaskSchedule = /** @class */ (function () {
    function TaskSchedule() {
        this.taskScheduleId = '';
        /**
         * *this field has a max length of 100
         */
        this.studyWorkflowName = '';
        /**
         * *this field has a max length of 20
         */
        this.studyWorkflowVersion = '';
        /**
         * Name of the Workflow which is represented by this schedule - INVARIANT! because it is used to generate Identifers for induced executions!
         */
        this.scheduleWorkflowName = '';
        this.maxSkipsBeforeLost = '';
        this.maxSubsequentSkipsBeforeLost = '';
        this.maxLostsBeforeLtfuAbort = '';
        this.maxSubsequentLostsBeforeLtfuAbort = '';
        this.eventOnLtfuAbort = '';
        this.eventOnCycleEnded = '';
        this.eventOnAllCyclesEnded = '';
        this.inducingEvents = '';
        this.abortCausingEvents = '';
    }
    return TaskSchedule;
}());
exports.TaskSchedule = TaskSchedule;
var ResearchStudyDefinition = /** @class */ (function () {
    function ResearchStudyDefinition() {
        /**
         * the official invariant name of the study as given by the sponsor *this field has a max length of 100
         */
        this.studyWorkflowName = '';
        /**
         * This value follows the rules of 'Semantic Versioning' (https://semver.org) and needs to be updated exactly and only on transition to DraftState.Released! If the previously DraftState was 'DraftNewFix', then the 3. number must be increased at this time! If the previously DraftState was 'DraftNewMinor', then the 2. number must be increased, and the 3. number must be set to 0 at this time! If the previously DraftState was 'DraftNewMajor', then the 1. number must be increased, and the 2.+3. number must be set to 0 at this time! *this field has a max length of 20
         */
        this.studyWorkflowVersion = '';
        this.officialLabel = '';
        this.definitionOwner = '';
        this.documentationUrl = '';
        this.description = '';
        /**
         * IT MUST NOT be updated on every change during Draft! Format: the Author, which is starting the new Draft (Alphanumeric, in PascalCase without blanks or other Symbols) + the current UTC-Time when setting the value (in ISO8601 format) separated by a Pipe "|" Sample: "MaxMustermann|2020-06-15T13:45:30.0000000Z".
         */
        this.versionIdentity = '';
        this.lastChangeUtc = new Date();
        /**
         * 0=Released / 1=DraftNewFix / 2=DraftNewMinor / 3=DraftNewMajor
         */
        this.draftState = 0;
    }
    return ResearchStudyDefinition;
}());
exports.ResearchStudyDefinition = ResearchStudyDefinition;
//# sourceMappingURL=models.js.map
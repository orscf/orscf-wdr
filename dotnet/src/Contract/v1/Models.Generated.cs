using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.ObjectModel;
using System.Collections.Generic;

namespace MedicalResearch.Workflow.Model {

  [PrimaryIdentity(nameof(StudyArmName))]
  [PropertyGroup(nameof(StudyArmName), nameof(StudyArmName))]
  [PropertyGroup(nameof(RootProcedureScheduleId), nameof(RootProcedureScheduleId))]
  [PropertyGroup("Search", nameof(StudyArmName), nameof(StudyWorkflowName), nameof(StudyWorkflowVersion))]
  [HasLookup("", nameof(RootProcedureScheduleId), "", null, nameof(ProcedureSchedule))]
  public class Arm {

    /// <summary> Name of the Arm - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50 </summary>
    [MaxLength(50), Required, IdentityLabel]
    public String StudyArmName { get; set; }

    /// <summary> *this field has a max length of 100 </summary>
    [MaxLength(100), Required]
    public String StudyWorkflowName { get; set; }

    /// <summary> *this field has a max length of 20 </summary>
    [MaxLength(20), Required]
    public String StudyWorkflowVersion { get; set; }

    /// <summary> the ProcedureSchedule which is representing the primary-/entry-workflow (estimated visits) for participants of this arm *this field is optional </summary>
    public Nullable<Guid> RootProcedureScheduleId { get; set; }

    /// <summary> *this field is optional </summary>
    public Nullable<Decimal> BillablePriceOnFailedInclusion { get; set; }

    /// <summary> *this field is optional </summary>
    public Nullable<Decimal> BillablePriceOnSuccessfullInclusion { get; set; }

    /// <summary> *this field is optional </summary>
    public Nullable<Decimal> BillablePriceOnAbortedParticipation { get; set; }

    /// <summary> *this field is optional </summary>
    public Nullable<Decimal> BillablePriceOnCompletedParticipation { get; set; }

    /// <summary> *this field is optional (use null as value) </summary>
    public String ArmSpecificDocumentationUrl { get; set; }

    /// <summary> *this field is optional (use null as value) </summary>
    public String InclusionCriteria { get; set; }

    /// <summary> comma sparated list of Sub-Study names which are allowed to be executed for this arm
    ///  *this field is optional (use null as value) </summary>
    public String AllowedSubstudies { get; set; }

  }

  public class ResearchStudyDefinition {

    /// <summary> the official invariant name of the study as given by the sponsor *this field has a max length of 100 </summary>
    [MaxLength(100), Required]
    public String StudyWorkflowName { get; set; }

    /// <summary> This value follows the rules of 'Semantic Versioning' (https://semver.org) and needs to be updated exactly and only on transition to DraftState.Released! If the previously DraftState was 'DraftNewFix', then the 3. number must be increased at this time! If the previously DraftState was 'DraftNewMinor', then the 2. number must be increased, and the 3. number must be set to 0 at this time! If the previously DraftState was 'DraftNewMajor', then the 1. number must be increased, and the 2.+3. number must be set to 0 at this time! *this field has a max length of 20 </summary>
    [MaxLength(20), Required]
    public String StudyWorkflowVersion { get; set; }

    [Required]
    public String OfficialLabel { get; set; }

    [Required]
    public String DefinitionOwner { get; set; }

    [Required]
    public String DocumentationUrl { get; set; }

    /// <summary> Logo in base64 *this field is optional (use null as value) </summary>
    public String LogoImage { get; set; }

    [Required]
    public String Description { get; set; }

    /// <summary> IT MUST NOT be updated on every change during Draft! Format: the Author, which is starting the new Draft (Alphanumeric, in PascalCase without blanks or other Symbols) + the current UTC-Time when setting the value (in ISO8601 format) separated by a Pipe "|" Sample: "MaxMustermann|2020-06-15T13:45:30.0000000Z". </summary>
    [Required]
    public String VersionIdentity { get; set; }

    [Required]
    public DateTime LastChangeUtc { get; set; }

    /// <summary> 0=Released / 1=DraftNewFix / 2=DraftNewMinor / 3=DraftNewMajor </summary>
    [Required]
    public Int32 DraftState { get; set; }

    /// <summary> *this field is optional (use null as value) </summary>
    public String BillingCurrency { get; set; }

    /// <summary> *this field is optional </summary>
    public Nullable<Decimal> BillablePriceForGeneralPreparation { get; set; }

    /// <summary> *this field is optional (use null as value) </summary>
    public String StudyDocumentationUrl { get; set; }

    /// <summary> *this field is optional (use null as value) </summary>
    public String CaseReportFormUrl { get; set; }

    [Dependent]
    public virtual List<Arm> Arms { get; set; } = new List<Arm>();

    [Dependent]
    public virtual List<DataRecordingTaskDefinition> DataRecordingTasks { get; set; } = new List<DataRecordingTaskDefinition>();

    [Dependent]
    public virtual List<DrugApplymentTaskDefinition> DrugApplymentTasks { get; set; } = new List<DrugApplymentTaskDefinition>();

    [Dependent]
    public virtual List<ProcedureDefinition> ProcedureDefinitions { get; set; } = new List<ProcedureDefinition>();

    [Dependent]
    public virtual List<ProcedureSchedule> ProcedureSchedules { get; set; } = new List<ProcedureSchedule>();

    [Dependent]
    public virtual List<TreatmentTaskDefinition> TreatmentTasks { get; set; } = new List<TreatmentTaskDefinition>();

    [Dependent]
    public virtual List<TaskSchedule> TaskSchedules { get; set; } = new List<TaskSchedule>();

    [Dependent]
    public virtual List<StudyEvent> Events { get; set; } = new List<StudyEvent>();

    [Dependent]
    public virtual List<SubStudy> SubStudies { get; set; } = new List<SubStudy>();

  }

  [PrimaryIdentity(nameof(ProcedureScheduleId))]
  [PropertyGroup(nameof(ProcedureScheduleId), nameof(ProcedureScheduleId))]
  [PropertyGroup(nameof(EventOnLtfuAbort), nameof(EventOnLtfuAbort))]
  [PropertyGroup(nameof(EventOnCycleEnded), nameof(EventOnCycleEnded))]
  [PropertyGroup(nameof(EventOnAllCyclesEnded), nameof(EventOnAllCyclesEnded))]
  [HasLookup("", nameof(EventOnLtfuAbort), "", null, nameof(StudyEvent))]
  [HasLookup("", nameof(EventOnCycleEnded), "", null, nameof(StudyEvent))]
  [HasLookup("", nameof(EventOnAllCyclesEnded), "", null, nameof(StudyEvent))]
  [PropertyGroup("Search", nameof(StudyWorkflowName), nameof(StudyWorkflowVersion), nameof(ScheduleWorkflowName))]  
  public class ProcedureSchedule {

    [Required]
    public Guid ProcedureScheduleId { get; set; } = Guid.NewGuid();

    /// <summary> *this field has a max length of 100 </summary>
    [MaxLength(100), Required]
    public String StudyWorkflowName { get; set; }

    /// <summary> *this field has a max length of 20 </summary>
    [MaxLength(20), Required]
    public String StudyWorkflowVersion { get; set; }

    /// <summary> Name of the Workflow which is represented by this schedule - INVARIANT! because it is used to generate Identifers for induced executions! </summary>
    [Required, IdentityLabel]
    public String ScheduleWorkflowName { get; set; }

    [Required]
    public String MaxSkipsBeforeLost { get; set; }

    [Required]
    public String MaxSubsequentSkipsBeforeLost { get; set; }

    [Required]
    public String MaxLostsBeforeLtfuAbort { get; set; }

    [Required]
    public String MaxSubsequentLostsBeforeLtfuAbort { get; set; }

    [Required]
    public String EventOnLtfuAbort { get; set; }

    [Required]
    public String EventOnCycleEnded { get; set; }

    [Required]
    public String EventOnAllCyclesEnded { get; set; }

    [Required]
    public String InducingEvents { get; set; }

    [Required]
    public String AbortCausingEvents { get; set; }

    [Dependent]
    public virtual List<InducedProcedure> InducedProcedures { get; set; } = new List<InducedProcedure>();

    [Dependent]
    public virtual List<InducedSubProcedureSchedule> InducedSubProcedureSchedules { get; set; } = new List<InducedSubProcedureSchedule>();

    [Dependent]
    public virtual ProcedureCycleDefinition CycleDefinition { get; set; }

  }

  [PrimaryIdentity(nameof(TaskDefinitionName))]
  [PropertyGroup(nameof(TaskDefinitionName), nameof(TaskDefinitionName))]
  public class DataRecordingTaskDefinition {

    /// <summary> Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50 </summary>
    [MaxLength(50), Required]
    public String TaskDefinitionName { get; set; }

    /// <summary> *this field has a max length of 100 </summary>
    [MaxLength(100), Required]
    public String StudyWorkflowName { get; set; }

    /// <summary> *this field has a max length of 20 </summary>
    [MaxLength(20), Required]
    public String StudyWorkflowVersion { get; set; }

    /// <summary> *this field is optional </summary>
    public Nullable<Decimal> BillablePriceOnCompletedExecution { get; set; }

    [Required]
    public String ShortDescription { get; set; }

    /// <summary> *this field is optional (use null as value) </summary>
    public String TaskSpecificDocumentationUrl { get; set; }

    /// <summary> *this field is optional (use null as value) </summary>
    public String ImportantNotices { get; set; }

    /// <summary> schema-url of the data which have to be recorded </summary>
    [Required]
    public String DataSchemaUrl { get; set; }

    /// <summary> RAW data, in the schema as defined at the 'DataSchemaUrl' *this field is optional (use null as value) </summary>
    public String DefaultData { get; set; }

  }

  [PrimaryIdentity(nameof(Id))]
  [PropertyGroup(nameof(Id), nameof(Id))]
  [PropertyGroup(nameof(TaskScheduleId), nameof(TaskScheduleId))]
  [HasPrincipal("", nameof(TaskScheduleId), "", null, nameof(TaskSchedule))]
  [PropertyGroup(nameof(TaskDefinitionName), nameof(TaskDefinitionName))]
  [HasLookup("", nameof(TaskDefinitionName), "", null, nameof(DataRecordingTaskDefinition))]
  public class InducedDataRecordingTask {

    [Required]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    public Guid TaskScheduleId { get; set; }

    /// <summary> *this field has a max length of 50 </summary>
    [MaxLength(50), Required]
    public String TaskDefinitionName { get; set; }

    /// <summary> estimated scheduling time relative to the scheduling date of the parent TaskSchedule </summary>
    [Required]
    public Int32 SchedulingOffset { get; set; }

    /// <summary> 'h'=Hours / 'm'=Minutes / 's'=Seconds </summary>
    [Required]
    public String SchedulingOffsetUnit { get; set; }

    /// <summary> defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time. </summary>
    [Required]
    public String SchedulingVariabilityBefore { get; set; }

    /// <summary> defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time. </summary>
    [Required]
    public String SchedulingVariabilityAfter { get; set; }

    /// <summary> 'h'=Hours / 'm'=Minutes / 's'=Seconds </summary>
    [Required]
    public String SchedulingVariabilityUnit { get; set; }

    /// <summary> the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names. </summary>
    [Required]
    public String UniqueExecutionName { get; set; }

    /// <summary> defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant) </summary>
    [Required]
    public Boolean Skipable { get; set; }

    [Required]
    public String EventOnSkip { get; set; }

    [Required]
    public String EventOnLost { get; set; }

    /// <summary> The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values! </summary>
    [Required]
    public Int32 Position { get; set; }

    /// <summary> 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced 
    /// *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used
    /// *this behaviour can be concretized via 'SchedulingByEstimate' </summary>
    [Required]
    public Int32 SchedulingOffsetFixpoint { get; set; }

    /// <summary> If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0! </summary>
    [Required]
    public Boolean SchedulingByEstimate { get; set; }

    /// <summary> The name of a Sub-Study for which this Task should be induced or empty when its part of the current Arms regular workflow *this field is optional (use null as value) </summary>
    public String DedicatedToSubstudy { get; set; }

    /// <summary> Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules </summary>
    [Required]
    public Int32 TaskNumber { get; set; }

  }

  [PrimaryIdentity(nameof(TaskDefinitionName))]
  [PropertyGroup(nameof(TaskDefinitionName), nameof(TaskDefinitionName))]
  public class DrugApplymentTaskDefinition {

    /// <summary> Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50 </summary>
    [MaxLength(50), Required]
    public String TaskDefinitionName { get; set; }

    /// <summary> *this field has a max length of 100 </summary>
    [MaxLength(100), Required]
    public String StudyWorkflowName { get; set; }

    /// <summary> *this field has a max length of 20 </summary>
    [MaxLength(20), Required]
    public String StudyWorkflowVersion { get; set; }

    /// <summary> *this field is optional </summary>
    public Nullable<Decimal> BillablePriceOnCompletedExecution { get; set; }

    [Required]
    public String ShortDescription { get; set; }

    /// <summary> *this field is optional (use null as value) </summary>
    public String TaskSpecificDocumentationUrl { get; set; }

    [Required]
    public String DrugName { get; set; }

    [Required]
    public Decimal DrugDoseMgPerUnitMg { get; set; }

    [Required]
    public Decimal UnitsToApply { get; set; }

    [Required]
    public String ApplymentRoute { get; set; }

    /// <summary> *this field is optional (use null as value) </summary>
    public String ImportantNotices { get; set; }

  }

  [PrimaryIdentity(nameof(Id))]
  [PropertyGroup(nameof(Id), nameof(Id))]
  [PropertyGroup(nameof(TaskScheduleId), nameof(TaskScheduleId))]
  [HasPrincipal("", nameof(TaskScheduleId), "", null, nameof(TaskSchedule))]
  [PropertyGroup(nameof(TaskDefinitionName), nameof(TaskDefinitionName))]
  [HasLookup("", nameof(TaskDefinitionName), "", null, nameof(DrugApplymentTaskDefinition))]
  public class InducedDrugApplymentTask {

    [Required]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    public Guid TaskScheduleId { get; set; }

    /// <summary> *this field has a max length of 50 </summary>
    [MaxLength(50), Required]
    public String TaskDefinitionName { get; set; }

    /// <summary> estimated scheduling time relative to the scheduling date of the parent TaskSchedule </summary>
    [Required]
    public Int32 SchedulingOffset { get; set; }

    /// <summary> 'h'=Hours / 'm'=Minutes / 's'=Seconds </summary>
    [Required]
    public String SchedulingOffsetUnit { get; set; }

    /// <summary> defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time. </summary>
    [Required]
    public Int32 SchedulingVariabilityBefore { get; set; }

    /// <summary> defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time. </summary>
    [Required]
    public Int32 SchedulingVariabilityAfter { get; set; }

    /// <summary> 'h'=Hours / 'm'=Minutes / 's'=Seconds </summary>
    [Required]
    public String SchedulingVariabilityUnit { get; set; }

    /// <summary> the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names. </summary>
    [Required]
    public String UniqueExecutionName { get; set; }

    /// <summary> defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant) </summary>
    [Required]
    public Boolean Skipable { get; set; }

    [Required]
    public String EventOnSkip { get; set; }

    [Required]
    public String EventOnLost { get; set; }

    /// <summary> The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values! </summary>
    [Required]
    public Int32 Position { get; set; }

    /// <summary> 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced 
    /// *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used
    /// *this behaviour can be concretized via 'SchedulingByEstimate' </summary>
    [Required]
    public Int32 SchedulingOffsetFixpoint { get; set; }

    /// <summary> If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0! </summary>
    [Required]
    public Boolean SchedulingByEstimate { get; set; }

    /// <summary> The name of a Sub-Study for which this Task should be induced or empty when its part of the current Arms regular workflow *this field is optional (use null as value) </summary>
    public String DedicatedToSubstudy { get; set; }

    /// <summary> Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules </summary>
    [Required]
    public Int32 TaskNumber { get; set; }

  }

  [PrimaryIdentity(nameof(TaskScheduleId))]
  [PropertyGroup(nameof(TaskScheduleId), nameof(TaskScheduleId))]
  [PropertyGroup(nameof(EventOnLtfuAbort), nameof(EventOnLtfuAbort))]
  [PropertyGroup(nameof(EventOnCycleEnded), nameof(EventOnCycleEnded))]
  [PropertyGroup(nameof(EventOnAllCyclesEnded), nameof(EventOnAllCyclesEnded))]
  [HasLookup("", nameof(EventOnLtfuAbort), "", null, nameof(StudyEvent))]
  [HasLookup("", nameof(EventOnCycleEnded), "", null, nameof(StudyEvent))]
  [HasLookup("", nameof(EventOnAllCyclesEnded), "", null, nameof(StudyEvent))]
  [PropertyGroup("Search", nameof(StudyWorkflowName), nameof(StudyWorkflowVersion), nameof(ScheduleWorkflowName))]
  public class TaskSchedule {

    [Required]
    public Guid TaskScheduleId { get; set; } = Guid.NewGuid();

    /// <summary> *this field has a max length of 100 </summary>
    [MaxLength(100), Required]
    public String StudyWorkflowName { get; set; }

    /// <summary> *this field has a max length of 20 </summary>
    [MaxLength(20), Required]
    public String StudyWorkflowVersion { get; set; }

    /// <summary> Name of the Workflow which is represented by this schedule - INVARIANT! because it is used to generate Identifers for induced executions! </summary>
    [Required, IdentityLabel]
    public String ScheduleWorkflowName { get; set; }

    [Required]
    public String MaxSkipsBeforeLost { get; set; }

    [Required]
    public String MaxSubsequentSkipsBeforeLost { get; set; }

    [Required]
    public String MaxLostsBeforeLtfuAbort { get; set; }

    [Required]
    public String MaxSubsequentLostsBeforeLtfuAbort { get; set; }

    [Required]
    public String EventOnLtfuAbort { get; set; }

    [Required]
    public String EventOnCycleEnded { get; set; }

    [Required]
    public String EventOnAllCyclesEnded { get; set; }

    [Required]
    public String InducingEvents { get; set; }

    [Required]
    public String AbortCausingEvents { get; set; }

    [Dependent]
    public virtual List<InducedDataRecordingTask> InducedDataRecordingTasks { get; set; } = new List<InducedDataRecordingTask>();

    [Dependent]
    public virtual List<InducedDrugApplymentTask> InducedDrugApplymentTasks { get; set; } = new List<InducedDrugApplymentTask>();

    [Dependent]
    public virtual List<InducedSubTaskSchedule> InducedSubTaskSchedules { get; set; } = new List<InducedSubTaskSchedule>();

    [Dependent]
    public virtual List<InducedTreatmentTask> InducedTreatmentTasks { get; set; } = new List<InducedTreatmentTask>();

    [Dependent]
    public virtual TaskCycleDefinition CycleDefinition { get; set; }

  }

  [PrimaryIdentity(nameof(Id))]
  [PropertyGroup(nameof(Id), nameof(Id))]
  [PropertyGroup(nameof(ProcedureScheduleId), nameof(ProcedureScheduleId))]
  [HasPrincipal("", nameof(ProcedureScheduleId), "", null, nameof(ProcedureSchedule))]
  [PropertyGroup(nameof(ProcedureDefinitionName), nameof(ProcedureDefinitionName))]
  [HasLookup("", nameof(ProcedureDefinitionName), "", null, nameof(ProcedureDefinition))]
  public class InducedProcedure {

    [Required]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    public Guid ProcedureScheduleId { get; set; }

    /// <summary> estimated scheduling date relative to the scheduling date of the parent ProcedureSchedule </summary>
    [Required]
    public Int32 SchedulingOffset { get; set; }

    /// <summary> 'M'=Months / 'W'=Weeks / 'D'=Days </summary>
    [Required]
    public String SchedulingOffsetUnit { get; set; }

    /// <summary> defines an additional variability RELATIVE to the estimated scheduling date (which is calculated from the offset), in this case the EARLIEST possible date. </summary>
    [Required]
    public Int32 SchedulingVariabilityBefore { get; set; }

    /// <summary> defines an additional variability RELATIVE to the estimated scheduling date (which is calculated from the offset), in this case the LATEST possible date. </summary>
    [Required]
    public Int32 SchedulingVariabilityAfter { get; set; }

    /// <summary> 'M'=Months / 'W'=Weeks / 'D'=Days </summary>
    [Required]
    public String SchedulingVariabilityUnit { get; set; }

    /// <summary> *this field has a max length of 50 </summary>
    [MaxLength(50), Required]
    public String ProcedureDefinitionName { get; set; }

    /// <summary> the name for the induced execution (=VISIT), like 'V0', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: 'C{cy}-V0') to prevent from duplicate execution names. </summary>
    [Required]
    public String UniqueExecutionName { get; set; }

    /// <summary> defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant) </summary>
    [Required]
    public Boolean Skipable { get; set; }

    [Required]
    public String EventOnSkip { get; set; }

    [Required]
    public String EventOnLost { get; set; }

    /// <summary> The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values! </summary>
    [Required]
    public Int32 Position { get; set; }

    /// <summary> 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor procedure or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced 
    /// *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used
    /// *this behaviour can be concretized via 'SchedulingByEstimate' </summary>
    [Required]
    public Int32 SchedulingOffsetFixpoint { get; set; }

    /// <summary> If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0! </summary>
    [Required]
    public Boolean SchedulingByEstimate { get; set; }

    /// <summary> The name of a Sub-Study for which this procedure should be induced or empty when its part of the current Arms regular workflow  *this field is optional (use null as value) </summary>
    public String DedicatedToSubstudy { get; set; }

    /// <summary> Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules </summary>
    [Required]
    public Int32 VisitNumber { get; set; }

  }

  [PropertyGroup(nameof(ProcedureDefinitionName), nameof(ProcedureDefinitionName))]
  [PrimaryIdentity(nameof(ProcedureDefinitionName))]
  [PropertyGroup("Search", nameof(ProcedureDefinitionName), nameof(StudyWorkflowName), nameof(StudyWorkflowVersion))]
  [HasLookup("", nameof(RootTaskScheduleId), "", null, nameof(TaskSchedule))]
  public class ProcedureDefinition {

    /// <summary> Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50 </summary>
    [MaxLength(50), Required, IdentityLabel]
    public String ProcedureDefinitionName { get; set; }

    /// <summary> *this field has a max length of 100 </summary>
    [MaxLength(100), Required]
    public String StudyWorkflowName { get; set; }

    /// <summary> *this field has a max length of 20 </summary>
    [MaxLength(20), Required]
    public String StudyWorkflowVersion { get; set; }

    /// <summary> the TaskSchedule which is representing the primary-/entry-workflow (estimated tasks) when executing this visit *this field is optional </summary>
    public Nullable<Guid> RootTaskScheduleId { get; set; }

    /// <summary> *this field is optional </summary>
    public Nullable<Decimal> BillablePriceOnAbortedExecution { get; set; }

    /// <summary> *this field is optional </summary>
    public Nullable<Decimal> BillablePriceOnCompletedExecution { get; set; }

    /// <summary> *this field is optional (use null as value) </summary>
    public String VisitSpecificDocumentationUrl { get; set; }

  }

  public class InducedSubProcedureSchedule {

    [Required]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    public Guid ParentProcedureScheduleId { get; set; }

    [Required]
    public Guid InducedProcedureScheduleId { get; set; }

    /// <summary> estimated scheduling date relative to the scheduling date of the parent ProcedureSchedule </summary>
    [Required]
    public Int32 SchedulingOffset { get; set; }

    /// <summary> 'M'=Months / 'W'=Weeks / 'D'=Days </summary>
    [Required]
    public String SchedulingOffsetUnit { get; set; }

    [Required]
    public Boolean SharedSkipCounters { get; set; }

    [Required]
    public Boolean SharedLostCounters { get; set; }

    /// <summary> The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values! </summary>
    [Required]
    public Int32 Position { get; set; }

    /// <summary> 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor procedure or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced 
    /// *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used
    /// *this behaviour can be concretized via 'SchedulingByEstimate' </summary>
    [Required]
    public Int32 SchedulingOffsetFixpoint { get; set; }

    /// <summary> If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0! </summary>
    [Required]
    public Boolean SchedulingByEstimate { get; set; }

    /// <summary> The name of a Sub-Study for which this schedule should be induced or empty when its part of the current Arms regular workflow  *this field is optional (use null as value) </summary>
    public String DedicatedToSubstudy { get; set; }

    [Required]
    public Int32 IncreaseVisitNumberBase { get; set; }

    [Required]
    public Boolean InheritVisitNumberBase { get; set; }

  }

  public class InducedSubTaskSchedule {

    [Required]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    public Guid ParentTaskScheduleId { get; set; }

    [Required]
    public Guid InducedTaskScheduleId { get; set; }

    /// <summary> estimated scheduling time relative to the scheduling date of the parent ProcedureSchedule </summary>
    [Required]
    public Int32 SchedulingOffset { get; set; }

    /// <summary> 'h'=Hours / 'm'=Minutes / 's'=Seconds </summary>
    [Required]
    public String SchedulingOffsetUnit { get; set; }

    [Required]
    public Boolean SharedSkipCounters { get; set; }

    [Required]
    public Boolean SharedLostCounters { get; set; }

    /// <summary> The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values! </summary>
    [Required]
    public Int32 Position { get; set; }

    /// <summary> 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced 
    /// *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used
    /// *this behaviour can be concretized via 'SchedulingByEstimate' </summary>
    [Required]
    public Int32 SchedulingOffsetFixpoint { get; set; }

    /// <summary> If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0! </summary>
    [Required]
    public Boolean SchedulingByEstimate { get; set; }

    /// <summary> The name of a Sub-Study for which this schedule should be induced or empty when its part of the current Arms regular workflow  *this field is optional (use null as value) </summary>
    public String DedicatedToSubstudy { get; set; }

    [Required]
    public Int32 IncreaseVisitNumberBase { get; set; }

    [Required]
    public Boolean InheritVisitNumberBase { get; set; }

  }

  [PrimaryIdentity(nameof(Id))]
  [PropertyGroup(nameof(Id), nameof(Id))]
  [PropertyGroup(nameof(TaskScheduleId), nameof(TaskScheduleId))]
  [HasPrincipal("", nameof(TaskScheduleId), "", null, nameof(TaskSchedule))]
  [PropertyGroup(nameof(TaskDefinitionName), nameof(TaskDefinitionName))]
  [HasLookup("", nameof(TaskDefinitionName), "", null, nameof(TreatmentTaskDefinition))]
  public class InducedTreatmentTask {

    [Required]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    public Guid TaskScheduleId { get; set; }

    /// <summary> *this field has a max length of 50 </summary>
    [MaxLength(50), Required]
    public String TaskDefinitionName { get; set; }

    /// <summary> estimated scheduling time relative to the scheduling date of the parent TaskSchedule </summary>
    [Required]
    public Int32 SchedulingOffset { get; set; }

    /// <summary> 'h'=Hours / 'm'=Minutes / 's'=Seconds </summary>
    [Required]
    public String SchedulingOffsetUnit { get; set; }

    /// <summary> defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time. </summary>
    [Required]
    public String SchedulingVariabilityBefore { get; set; }

    /// <summary> defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time. </summary>
    [Required]
    public String SchedulingVariabilityAfter { get; set; }

    /// <summary> 'h'=Hours / 'm'=Minutes / 's'=Seconds </summary>
    [Required]
    public String SchedulingVariabilityUnit { get; set; }

    /// <summary> the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names. </summary>
    [Required]
    public String UniqueExecutionName { get; set; }

    /// <summary> defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant) </summary>
    [Required]
    public Boolean Skipable { get; set; }

    [Required]
    public String EventOnSkip { get; set; }

    [Required]
    public String EventOnLost { get; set; }

    /// <summary> The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values! </summary>
    [Required]
    public Int32 Position { get; set; }

    /// <summary> 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced 
    /// *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used
    /// *this behaviour can be concretized via 'SchedulingByEstimate' </summary>
    [Required]
    public Int32 SchedulingOffsetFixpoint { get; set; }

    /// <summary> If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0! </summary>
    [Required]
    public Boolean SchedulingByEstimate { get; set; }

    /// <summary> The name of a Sub-Study for which this Task should be induced or empty when its part of the current Arms regular workflow *this field is optional (use null as value) </summary>
    public String DedicatedToSubstudy { get; set; }

    /// <summary> Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules </summary>
    [Required]
    public Int32 TaskNumber { get; set; }

  }

  [PrimaryIdentity(nameof(TaskDefinitionName))]
  [PropertyGroup(nameof(TaskDefinitionName), nameof(TaskDefinitionName))]
  public class TreatmentTaskDefinition {

    /// <summary> Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50 </summary>
    [MaxLength(50), Required]
    public String TaskDefinitionName { get; set; }

    /// <summary> *this field has a max length of 100 </summary>
    [MaxLength(100), Required]
    public String StudyWorkflowName { get; set; }

    /// <summary> *this field has a max length of 20 </summary>
    [MaxLength(20), Required]
    public String StudyWorkflowVersion { get; set; }

    /// <summary> *this field is optional </summary>
    public Nullable<Decimal> BillablePriceOnCompletedExecution { get; set; }

    [Required]
    public String ShortDescription { get; set; }

    /// <summary> *this field is optional (use null as value) </summary>
    public String TaskSpecificDocumentationUrl { get; set; }

    [Required]
    public String TreatmentDescription { get; set; }

    /// <summary> *this field is optional (use null as value) </summary>
    public String ImportantNotices { get; set; }

  }

  [PrimaryIdentity(nameof(ProcedureScheduleId))]
  [PropertyGroup(nameof(ProcedureScheduleId), nameof(ProcedureScheduleId))]
  public class ProcedureCycleDefinition {

    [Required]
    public Guid ProcedureScheduleId { get; set; } = Guid.NewGuid();

    /// <summary> 0=InducementOfScheduleOrCycle: when the start of the last cycle was induced / -1=InducementOfPredessessor: when the last procedure or subschedule (based on the 'Position') of the previous cycle was induced.
    /// *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used
    /// *this behaviour can be concretized via 'ReschedulingByEstimate' </summary>
    [Required]
    public Int32 ReschedulingOffsetFixpoint { get; set; }

    /// <summary> estimated scheduling date relative to the ReschedulingBase </summary>
    [Required]
    public Int32 ReschedulingOffset { get; set; }

    /// <summary> 'M'=Months / 'W'=Weeks / 'D'=Days </summary>
    [Required]
    public String ReschedulingOffsetUnit { get; set; }

    /// <summary> number of cycles (of null for a infinite number of cycles) *this field is optional </summary>
    public Nullable<Int32> CycleLimit { get; set; }

    [Required]
    public Boolean SharedSkipCounters { get; set; }

    [Required]
    public Boolean SharedLostCounters { get; set; }

    /// <summary> If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0! </summary>
    [Required]
    public Boolean ReschedulingByEstimate { get; set; }

    /// <summary> -1: automatic, based on the usage of visit numbers within the schedule </summary>
    [Required]
    public Int32 IncreaseVisitNumberBasePerCycle { get; set; }

  }

  [PrimaryIdentity(nameof(StudyEventName))]
  [PropertyGroup(nameof(StudyEventName), nameof(StudyEventName))]
  public class StudyEvent {

    /// <summary> *this field has a max length of 50 </summary>
    [MaxLength(50), Required, IdentityLabel]
    public String StudyEventName { get; set; }

    /// <summary> *this field has a max length of 100 </summary>
    [MaxLength(100), Required]
    public String StudyWorkflowName { get; set; }

    /// <summary> *this field has a max length of 20 </summary>
    [MaxLength(20), Required]
    public String StudyWorkflowVersion { get; set; }

    /// <summary> *this field is optional </summary>
    public Nullable<Int32> MaxOccourrencesBeforeExclusion { get; set; }

    [Required]
    public Boolean AllowManualTrigger { get; set; }

    [Required]
    public String Description { get; set; }

    /// <summary> *this field is optional (use null as value) </summary>
    public String EvenSpecificDocumentationUrl { get; set; }

  }

  [PrimaryIdentity(nameof(SubStudyName))]
  [PropertyGroup(nameof(SubStudyName), nameof(SubStudyName))]
  public class SubStudy {

    /// <summary> *this field has a max length of 50 </summary>
    [MaxLength(50), Required]
    public String SubStudyName { get; set; }

    /// <summary> *this field has a max length of 100 </summary>
    [MaxLength(100), Required]
    public String StudyWorkflowName { get; set; }

    /// <summary> *this field has a max length of 20 </summary>
    [MaxLength(20), Required]
    public String StudyWorkflowVersion { get; set; }

  }

  [PrimaryIdentity(nameof(TaskScheduleId))]
  [PropertyGroup(nameof(TaskScheduleId), nameof(TaskScheduleId))]
  public class TaskCycleDefinition {

    [Required]
    public Guid TaskScheduleId { get; set; } = Guid.NewGuid();

    /// <summary> 0=InducementOfScheduleOrCycle: when the start of the last cycle was induced / -1=InducementOfPredessessor: when the last task or subschedule (based on the 'Position') of the previous cycle was induced.
    /// *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used
    /// *this behaviour can be concretized via 'ReschedulingByEstimate' </summary>
    [Required]
    public Int32 ReschedulingOffsetFixpoint { get; set; }

    /// <summary> estimated scheduling time relative to the ReschedulingBase </summary>
    [Required]
    public Int32 ReschedulingOffset { get; set; }

    /// <summary> 'h'=Hours / 'm'=Minutes / 's'=Seconds </summary>
    [Required]
    public String ReschedulingOffsetUnit { get; set; }

    /// <summary> number of cycles (of null for a infinite number of cycles) *this field is optional </summary>
    public Nullable<Int32> CycleLimit { get; set; }

    [Required]
    public Boolean SharedSkipCounters { get; set; }

    [Required]
    public Boolean SharedLostCounters { get; set; }

    /// <summary> If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0! </summary>
    [Required]
    public Boolean ReschedulingByEstimate { get; set; }

    /// <summary> -1: automatic, based on the usage of task numbers within the schedule </summary>
    [Required]
    public Int32 IncreaseTaskNumberBasePerCycle { get; set; }

  }

}

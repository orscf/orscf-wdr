using MedicalResearch.Workflow.Model;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.ObjectModel;

namespace MedicalResearch.Workflow.StoreAccess {

  /// <summary> Provides CRUD access to stored Arms (based on schema version '1.5.0') </summary>
  public partial interface IArmStore : System.Data.Fuse.IRepository<Arm, ArmIdentity> {
  }

/// <summary> Composite Key, which represents the primary identity of a Arm </summary>
public class ArmIdentity {
  /// <summary> Name of the Arm - INVARIANT! because it is used to generate Identifers for induced executions! </summary>
  public String StudyArmName;
  public String StudyWorkflowName;
  public String StudyWorkflowVersion;
}

  /// <summary> Provides CRUD access to stored ResearchStudyDefinitions (based on schema version '1.5.0') </summary>
  public partial interface IResearchStudyDefinitionStore : System.Data.Fuse.IRepository<ResearchStudyDefinition, ResearchStudyDefinitionIdentity> {
  }

/// <summary> Composite Key, which represents the primary identity of a ResearchStudyDefinition </summary>
public class ResearchStudyDefinitionIdentity {
  /// <summary> the official invariant name of the study as given by the sponsor </summary>
  public String StudyWorkflowName;
  /// <summary> This value follows the rules of 'Semantic Versioning' (https://semver.org) and needs to be updated exactly and only on transition to DraftState.Released! If the previously DraftState was 'DraftNewFix', then the 3. number must be increased at this time! If the previously DraftState was 'DraftNewMinor', then the 2. number must be increased, and the 3. number must be set to 0 at this time! If the previously DraftState was 'DraftNewMajor', then the 1. number must be increased, and the 2.+3. number must be set to 0 at this time! </summary>
  public String StudyWorkflowVersion;
}

  /// <summary> Provides CRUD access to stored ProcedureSchedules (based on schema version '1.5.0') </summary>
  public partial interface IProcedureScheduleStore : System.Data.Fuse.IRepository<ProcedureSchedule, Guid> {
  }

  /// <summary> Provides CRUD access to stored DataRecordingTaskDefinitions (based on schema version '1.5.0') </summary>
  public partial interface IDataRecordingTaskDefinitionStore : System.Data.Fuse.IRepository<DataRecordingTaskDefinition, String> {
  }

  /// <summary> Provides CRUD access to stored InducedDataRecordingTasks (based on schema version '1.5.0') </summary>
  public partial interface IInducedDataRecordingTaskStore : System.Data.Fuse.IRepository<InducedDataRecordingTask, Guid> {
  }

  /// <summary> Provides CRUD access to stored DrugAppliymentTaskDefinitions (based on schema version '1.5.0') </summary>
  public partial interface IDrugApplymentTaskDefinitionStore : System.Data.Fuse.IRepository<DrugApplymentTaskDefinition, String> {
  }

  /// <summary> Provides CRUD access to stored InducedDrugApplymentTasks (based on schema version '1.5.0') </summary>
  public partial interface IInducedDrugApplymentTaskStore : System.Data.Fuse.IRepository<InducedDrugApplymentTask, Guid> {
  }

  /// <summary> Provides CRUD access to stored TaskSchedules (based on schema version '1.5.0') </summary>
  public partial interface ITaskScheduleStore : System.Data.Fuse.IRepository<TaskSchedule, Guid> {
  }

  /// <summary> Provides CRUD access to stored InducedVisitProcedures (based on schema version '1.5.0') </summary>
  public partial interface IInducedProcedureStore : System.Data.Fuse.IRepository<InducedProcedure, Guid> {
  }

  /// <summary> Provides CRUD access to stored ProcedureDefinitions (based on schema version '1.5.0') </summary>
  public partial interface IProcedureDefinitionStore : System.Data.Fuse.IRepository<ProcedureDefinition, String> {
  }

  /// <summary> Provides CRUD access to stored InducedSubProcedureSchedules (based on schema version '1.5.0') </summary>
  public partial interface IInducedSubProcedureScheduleStore : System.Data.Fuse.IRepository<InducedSubProcedureSchedule, Guid> {
  }

  /// <summary> Provides CRUD access to stored InducedSubTaskSchedules (based on schema version '1.5.0') </summary>
  public partial interface IInducedSubTaskScheduleStore : System.Data.Fuse.IRepository<InducedSubTaskSchedule, Guid> {
  }

  /// <summary> Provides CRUD access to stored InducedTreatmentTasks (based on schema version '1.5.0') </summary>
  public partial interface IInducedTreatmentTaskStore : System.Data.Fuse.IRepository<InducedTreatmentTask, Guid> {
  }

  /// <summary> Provides CRUD access to stored TreatmentTaskDefinitions (based on schema version '1.5.0') </summary>
  public partial interface ITreatmentTaskDefinitionStore : System.Data.Fuse.IRepository<TreatmentTaskDefinition, String> {
  }

  /// <summary> Provides CRUD access to stored ProcedureCycleDefinitions (based on schema version '1.5.0') </summary>
  public partial interface IProcedureCycleDefinitionStore : System.Data.Fuse.IRepository<ProcedureCycleDefinition, Guid> {
  }

  /// <summary> Provides CRUD access to stored StudyEvents (based on schema version '1.5.0') </summary>
  public partial interface IStudyEventStore : System.Data.Fuse.IRepository<StudyEvent, String> {
  }

  /// <summary> Provides CRUD access to stored SubStudies (based on schema version '1.5.0') </summary>
  public partial interface ISubStudyStore : System.Data.Fuse.IRepository<SubStudy, String> {
  }

  /// <summary> Provides CRUD access to stored TaskCycleDefinitions (based on schema version '1.5.0') </summary>
  public partial interface ITaskCycleDefinitionStore : System.Data.Fuse.IRepository<TaskCycleDefinition, Guid> {
  }

}

using MedicalResearch.Workflow.Model;
using System;
using System.Data.Fuse;
using System.Data.Fuse.Convenience;
using System.Data.Fuse.Ef;

namespace MedicalResearch.Workflow.StoreAccess {

  /// <summary> Provides CRUD access to stored Arms (based on schema version '1.5.0') </summary>
  public class ArmStore : ModelVsEntityRepository<Arm, MedicalResearch.Workflow.Persistence.ArmEntity, ArmIdentity>, IArmStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.ArmEntity, ArmIdentity> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.ArmEntity, ArmIdentity>(context);
    }

    public ArmStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<Arm, MedicalResearch.Workflow.Persistence.ArmEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored ResearchStudyDefinitions (based on schema version '1.5.0') </summary>
  public class ResearchStudyDefinitionStore : ModelVsEntityRepository<ResearchStudyDefinition, MedicalResearch.Workflow.Persistence.ResearchStudyDefinitionEntity, ResearchStudyDefinitionIdentity>, IResearchStudyDefinitionStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.ResearchStudyDefinitionEntity, ResearchStudyDefinitionIdentity> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.ResearchStudyDefinitionEntity, ResearchStudyDefinitionIdentity>(context);
    }

    public ResearchStudyDefinitionStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<ResearchStudyDefinition, MedicalResearch.Workflow.Persistence.ResearchStudyDefinitionEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored ProcedureSchedules (based on schema version '1.5.0') </summary>
  public class ProcedureScheduleStore : ModelVsEntityRepository<ProcedureSchedule, MedicalResearch.Workflow.Persistence.ProcedureScheduleEntity, Guid>, IProcedureScheduleStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.ProcedureScheduleEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.ProcedureScheduleEntity, Guid>(context);
    }

    public ProcedureScheduleStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<ProcedureSchedule, MedicalResearch.Workflow.Persistence.ProcedureScheduleEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored DataRecordingTaskDefinitions (based on schema version '1.5.0') </summary>
  public class DataRecordingTaskDefinitionStore : ModelVsEntityRepository<DataRecordingTaskDefinition, MedicalResearch.Workflow.Persistence.DataRecordingTaskDefinitionEntity, String>, IDataRecordingTaskDefinitionStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.DataRecordingTaskDefinitionEntity, String> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.DataRecordingTaskDefinitionEntity, String>(context);
    }

    public DataRecordingTaskDefinitionStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<DataRecordingTaskDefinition, MedicalResearch.Workflow.Persistence.DataRecordingTaskDefinitionEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored InducedDataRecordingTasks (based on schema version '1.5.0') </summary>
  public class InducedDataRecordingTaskStore : ModelVsEntityRepository<InducedDataRecordingTask, MedicalResearch.Workflow.Persistence.InducedDataRecordingTaskEntity, Guid>, IInducedDataRecordingTaskStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.InducedDataRecordingTaskEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.InducedDataRecordingTaskEntity, Guid>(context);
    }

    public InducedDataRecordingTaskStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<InducedDataRecordingTask, MedicalResearch.Workflow.Persistence.InducedDataRecordingTaskEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored DrugAppliymentTaskDefinitions (based on schema version '1.5.0') </summary>
  public class DrugApplymentTaskDefinitionStore : ModelVsEntityRepository<DrugApplymentTaskDefinition, MedicalResearch.Workflow.Persistence.DrugApplymentTaskDefinitionEntity, String>, IDrugApplymentTaskDefinitionStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.DrugApplymentTaskDefinitionEntity, String> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.DrugApplymentTaskDefinitionEntity, String>(context);
    }

    public DrugApplymentTaskDefinitionStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<DrugApplymentTaskDefinition, MedicalResearch.Workflow.Persistence.DrugApplymentTaskDefinitionEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored InducedDrugApplymentTasks (based on schema version '1.5.0') </summary>
  public class InducedDrugApplymentTaskStore : ModelVsEntityRepository<InducedDrugApplymentTask, MedicalResearch.Workflow.Persistence.InducedDrugApplymentTaskEntity, Guid>, IInducedDrugApplymentTaskStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.InducedDrugApplymentTaskEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.InducedDrugApplymentTaskEntity, Guid>(context);
    }

    public InducedDrugApplymentTaskStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<InducedDrugApplymentTask, MedicalResearch.Workflow.Persistence.InducedDrugApplymentTaskEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored TaskSchedules (based on schema version '1.5.0') </summary>
  public class TaskScheduleStore : ModelVsEntityRepository<TaskSchedule, MedicalResearch.Workflow.Persistence.TaskScheduleEntity, Guid>, ITaskScheduleStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.TaskScheduleEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.TaskScheduleEntity, Guid>(context);
    }

    public TaskScheduleStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<TaskSchedule, MedicalResearch.Workflow.Persistence.TaskScheduleEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored InducedVisitProcedures (based on schema version '1.5.0') </summary>
  public class InducedProcedureStore : ModelVsEntityRepository<InducedProcedure, MedicalResearch.Workflow.Persistence.InducedProcedureEntity, Guid>, IInducedProcedureStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.InducedProcedureEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.InducedProcedureEntity, Guid>(context);
    }

    public InducedProcedureStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<InducedProcedure, MedicalResearch.Workflow.Persistence.InducedProcedureEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored ProcedureDefinitions (based on schema version '1.5.0') </summary>
  public class ProcedureDefinitionStore : ModelVsEntityRepository<ProcedureDefinition, MedicalResearch.Workflow.Persistence.ProcedureDefinitionEntity, String>, IProcedureDefinitionStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.ProcedureDefinitionEntity, String> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.ProcedureDefinitionEntity, String>(context);
    }

    public ProcedureDefinitionStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<ProcedureDefinition, MedicalResearch.Workflow.Persistence.ProcedureDefinitionEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored InducedSubProcedureSchedules (based on schema version '1.5.0') </summary>
  public class InducedSubProcedureScheduleStore : ModelVsEntityRepository<InducedSubProcedureSchedule, MedicalResearch.Workflow.Persistence.InducedSubProcedureScheduleEntity, Guid>, IInducedSubProcedureScheduleStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.InducedSubProcedureScheduleEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.InducedSubProcedureScheduleEntity, Guid>(context);
    }

    public InducedSubProcedureScheduleStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<InducedSubProcedureSchedule, MedicalResearch.Workflow.Persistence.InducedSubProcedureScheduleEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored InducedSubTaskSchedules (based on schema version '1.5.0') </summary>
  public class InducedSubTaskScheduleStore : ModelVsEntityRepository<InducedSubTaskSchedule, MedicalResearch.Workflow.Persistence.InducedSubTaskScheduleEntity, Guid>, IInducedSubTaskScheduleStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.InducedSubTaskScheduleEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.InducedSubTaskScheduleEntity, Guid>(context);
    }

    public InducedSubTaskScheduleStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<InducedSubTaskSchedule, MedicalResearch.Workflow.Persistence.InducedSubTaskScheduleEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored InducedTreatmentTasks (based on schema version '1.5.0') </summary>
  public class InducedTreatmentTaskStore : ModelVsEntityRepository<InducedTreatmentTask, MedicalResearch.Workflow.Persistence.InducedTreatmentTaskEntity, Guid>, IInducedTreatmentTaskStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.InducedTreatmentTaskEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.InducedTreatmentTaskEntity, Guid>(context);
    }

    public InducedTreatmentTaskStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<InducedTreatmentTask, MedicalResearch.Workflow.Persistence.InducedTreatmentTaskEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored TreatmentTaskDefinitions (based on schema version '1.5.0') </summary>
  public class TreatmentTaskDefinitionStore : ModelVsEntityRepository<TreatmentTaskDefinition, MedicalResearch.Workflow.Persistence.TreatmentTaskDefinitionEntity, String>, ITreatmentTaskDefinitionStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.TreatmentTaskDefinitionEntity, String> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.TreatmentTaskDefinitionEntity, String>(context);
    }

    public TreatmentTaskDefinitionStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<TreatmentTaskDefinition, MedicalResearch.Workflow.Persistence.TreatmentTaskDefinitionEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored ProcedureCycleDefinitions (based on schema version '1.5.0') </summary>
  public class ProcedureCycleDefinitionStore : ModelVsEntityRepository<ProcedureCycleDefinition, MedicalResearch.Workflow.Persistence.ProcedureCycleDefinitionEntity, Guid>, IProcedureCycleDefinitionStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.ProcedureCycleDefinitionEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.ProcedureCycleDefinitionEntity, Guid>(context);
    }

    public ProcedureCycleDefinitionStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<ProcedureCycleDefinition, MedicalResearch.Workflow.Persistence.ProcedureCycleDefinitionEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored StudyEvents (based on schema version '1.5.0') </summary>
  public class StudyEventStore : ModelVsEntityRepository<StudyEvent, MedicalResearch.Workflow.Persistence.StudyEventEntity, String>, IStudyEventStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.StudyEventEntity, String> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.StudyEventEntity, String>(context);
    }

    public StudyEventStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<StudyEvent, MedicalResearch.Workflow.Persistence.StudyEventEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored SubStudies (based on schema version '1.5.0') </summary>
  public class SubStudyStore : ModelVsEntityRepository<SubStudy, MedicalResearch.Workflow.Persistence.SubStudyEntity, String>, ISubStudyStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.SubStudyEntity, String> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.SubStudyEntity, String>(context);
    }

    public SubStudyStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<SubStudy, MedicalResearch.Workflow.Persistence.SubStudyEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored TaskCycleDefinitions (based on schema version '1.5.0') </summary>
  public class TaskCycleDefinitionStore : ModelVsEntityRepository<TaskCycleDefinition, MedicalResearch.Workflow.Persistence.TaskCycleDefinitionEntity, Guid>, ITaskCycleDefinitionStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.TaskCycleDefinitionEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.TaskCycleDefinitionEntity, Guid>(context);
    }

    public TaskCycleDefinitionStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<TaskCycleDefinition, MedicalResearch.Workflow.Persistence.TaskCycleDefinitionEntity>()
    ) {
    }

  }

}

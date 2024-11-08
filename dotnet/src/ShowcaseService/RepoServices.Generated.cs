using MedicalResearch.Workflow.Model;
using System;
using System.Data.Fuse;
using System.Data.Fuse.Convenience;
using System.Data.Fuse.Ef;
using System.Data.Fuse.Ef.InstanceManagement;

namespace MedicalResearch.Workflow.StoreAccess {

  /// <summary> Provides CRUD access to stored ResearchStudyDefinitions (based on schema version '2.0.0') </summary>
  public class ResearchStudyDefinitionStore : ModelVsEntityRepository<ResearchStudyDefinition, MedicalResearch.Workflow.Persistence.ResearchStudyDefinitionEntity, ResearchStudyDefinitionIdentity>, IResearchStudyDefinitionStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.ResearchStudyDefinitionEntity, ResearchStudyDefinitionIdentity> CreateInnerEfRepo() {
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext
      >();
      return new EfRepository<MedicalResearch.Workflow.Persistence.ResearchStudyDefinitionEntity, ResearchStudyDefinitionIdentity>(dbContextInstanceProvider);
    }

    public ResearchStudyDefinitionStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<ResearchStudyDefinition, MedicalResearch.Workflow.Persistence.ResearchStudyDefinitionEntity>()
    ) {
    }

  }

}

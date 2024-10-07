using MedicalResearch.Workflow.Model;
using MedicalResearch.Workflow.Persistence;
using System;
using System.Data.Fuse;
using System.Data.Fuse.Convenience;
using System.Data.Fuse.Ef;

namespace MedicalResearch.Workflow.StoreAccess {

  /// <summary> Provides CRUD access to stored ResearchStudyDefinitions (based on schema version '1.5.0') </summary>
  public class ResearchStudyDefinitionStore : ModelVsEntityRepository<ResearchStudyDefinition, MedicalResearch.Workflow.Persistence.ResearchStudyDefinitionEntity, ResearchStudyDefinitionIdentity>, IResearchStudyDefinitionStore {

    private static EfRepository<MedicalResearch.Workflow.Persistence.ResearchStudyDefinitionEntity, ResearchStudyDefinitionIdentity> CreateInnerEfRepo() {
      var context = new MedicalResearch.Workflow.Persistence.EF.WorkflowDefinitionDbContext();
      return new EfRepository<MedicalResearch.Workflow.Persistence.ResearchStudyDefinitionEntity, ResearchStudyDefinitionIdentity>(context);
    }

    public ResearchStudyDefinitionStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<ResearchStudyDefinition, MedicalResearch.Workflow.Persistence.ResearchStudyDefinitionEntity> {
      }
    ) {
    }

    private static void MapPropertyEntityToModel() {

    }
    private static void MapPropertyModelToEntity() {

    }






  }

}

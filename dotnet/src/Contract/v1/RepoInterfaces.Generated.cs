using MedicalResearch.Workflow.Model;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.ObjectModel;

namespace MedicalResearch.Workflow.StoreAccess {

  public static class ApiVersion {
    public const string SemanticVersion = "2.0.0";
  }

  /// <summary> Provides CRUD access to stored ResearchStudyDefinitions (based on schema version '2.0.0') </summary>
  public partial interface IResearchStudyDefinitionStore : System.Data.Fuse.IRepository<ResearchStudyDefinition, ResearchStudyDefinitionIdentity> {
  }

  /// <summary> Composite Key, which represents the primary identity of a ResearchStudyDefinition </summary>
  public class ResearchStudyDefinitionIdentity {
    /// <summary> the official invariant name of the study as given by the sponsor </summary>
    public String StudyWorkflowName;
    /// <summary> This value follows the rules of 'Semantic Versioning' (https://semver.org) and needs to be updated exactly and only on transition to DraftState.Released! If the previously DraftState was 'DraftNewFix', then the 3. number must be increased at this time! If the previously DraftState was 'DraftNewMinor', then the 2. number must be increased, and the 3. number must be set to 0 at this time! If the previously DraftState was 'DraftNewMajor', then the 1. number must be increased, and the 2.+3. number must be set to 0 at this time! </summary>
    public String StudyWorkflowVersion;
  }

}

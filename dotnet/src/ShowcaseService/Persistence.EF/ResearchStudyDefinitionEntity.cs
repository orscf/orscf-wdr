using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.ObjectModel;
using System.Linq.Expressions;
using MedicalResearch.Workflow.Model;

namespace MedicalResearch.Workflow.Persistence {

  public class ResearchStudyDefinitionEntity {

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


    #region Mapping

    internal static Expression<Func<ResearchStudyDefinition, ResearchStudyDefinitionEntity>> ResearchStudyDefinitionEntitySelector = ((ResearchStudyDefinition src) => new ResearchStudyDefinitionEntity {
      StudyWorkflowName = src.StudyWorkflowName,
      StudyWorkflowVersion = src.StudyWorkflowVersion,
      OfficialLabel = src.OfficialLabel,
      DefinitionOwner = src.DefinitionOwner,
      DocumentationUrl = src.DocumentationUrl,
      LogoImage = src.LogoImage,
      Description = src.Description,
      VersionIdentity = src.VersionIdentity,
      LastChangeUtc = src.LastChangeUtc,
      DraftState = src.DraftState,
      BillingCurrency = src.BillingCurrency,
      BillablePriceForGeneralPreparation = src.BillablePriceForGeneralPreparation,
      StudyDocumentationUrl = src.StudyDocumentationUrl,
      CaseReportFormUrl = src.CaseReportFormUrl,
    });

    internal static Expression<Func<ResearchStudyDefinitionEntity, ResearchStudyDefinition>> ResearchStudyDefinitionSelector = ((ResearchStudyDefinitionEntity src) => new ResearchStudyDefinition {
      StudyWorkflowName = src.StudyWorkflowName,
      StudyWorkflowVersion = src.StudyWorkflowVersion,
      OfficialLabel = src.OfficialLabel,
      DefinitionOwner = src.DefinitionOwner,
      DocumentationUrl = src.DocumentationUrl,
      LogoImage = src.LogoImage,
      Description = src.Description,
      VersionIdentity = src.VersionIdentity,
      LastChangeUtc = src.LastChangeUtc,
      DraftState = src.DraftState,
      BillingCurrency = src.BillingCurrency,
      BillablePriceForGeneralPreparation = src.BillablePriceForGeneralPreparation,
      StudyDocumentationUrl = src.StudyDocumentationUrl,
      CaseReportFormUrl = src.CaseReportFormUrl,
    });

    internal void CopyContentFrom(ResearchStudyDefinition source, Func<String, bool> onFixedValueChangingCallback = null) {
      this.StudyWorkflowName = source.StudyWorkflowName;
      this.StudyWorkflowVersion = source.StudyWorkflowVersion;
      this.OfficialLabel = source.OfficialLabel;
      this.DefinitionOwner = source.DefinitionOwner;
      this.DocumentationUrl = source.DocumentationUrl;
      this.LogoImage = source.LogoImage;
      this.Description = source.Description;
      this.VersionIdentity = source.VersionIdentity;
      this.LastChangeUtc = source.LastChangeUtc;
      this.DraftState = source.DraftState;
      this.BillingCurrency = source.BillingCurrency;
      this.BillablePriceForGeneralPreparation = source.BillablePriceForGeneralPreparation;
      this.StudyDocumentationUrl = source.StudyDocumentationUrl;
      this.CaseReportFormUrl = source.CaseReportFormUrl;
    }

    internal void CopyContentTo(ResearchStudyDefinition target, Func<String, bool> onFixedValueChangingCallback = null) {
      target.StudyWorkflowName = this.StudyWorkflowName;
      target.StudyWorkflowVersion = this.StudyWorkflowVersion;
      target.OfficialLabel = this.OfficialLabel;
      target.DefinitionOwner = this.DefinitionOwner;
      target.DocumentationUrl = this.DocumentationUrl;
      target.LogoImage = this.LogoImage;
      target.Description = this.Description;
      target.VersionIdentity = this.VersionIdentity;
      target.LastChangeUtc = this.LastChangeUtc;
      target.DraftState = this.DraftState;
      target.BillingCurrency = this.BillingCurrency;
      target.BillablePriceForGeneralPreparation = this.BillablePriceForGeneralPreparation;
      target.StudyDocumentationUrl = this.StudyDocumentationUrl;
      target.CaseReportFormUrl = this.CaseReportFormUrl;
    }

    #endregion

  }

}

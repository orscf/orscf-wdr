using System;
using System.Data.AccessControl;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Microsoft.EntityFrameworkCore;

namespace MedicalResearch.Workflow.Persistence.EF {

  partial class WorkflowDefinitionDbContext {

    static WorkflowDefinitionDbContext() {

      //EntityAccessControl.RegisterPropertyAsAccessControlClassification(
      //  (StudyExecutionScopeEntity e) => e.ExecutingInstituteIdentifier, "Institute"
      //);

      //EntityAccessControl.RegisterPropertyAsAccessControlClassification(
      //  (StudyExecutionScopeEntity e) => e.StudyWorkflowName, "Study"
      //);

    }

  }
  /// <summary> EntityFramework DbContext (based on schema version '1.5.0') </summary>
  public partial class WorkflowDefinitionDbContext : DbContext {

    public const String SchemaVersion = "1.5.0";

    public DbSet<ResearchStudyDefinitionEntity> ResearchStudyDefinitions { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
      base.OnModelCreating(modelBuilder);

      #region Mapping

      //////////////////////////////////////////////////////////////////////////////////////
      // ResearchStudyDefinition
      //////////////////////////////////////////////////////////////////////////////////////

      var cfgResearchStudyDefinition = modelBuilder.Entity<ResearchStudyDefinitionEntity>();
      cfgResearchStudyDefinition.ToTable("WdrResearchStudyDefinitions");
      cfgResearchStudyDefinition.HasKey((e) => new { e.StudyWorkflowName, e.StudyWorkflowVersion });

      #endregion

      this.OnModelCreatingCustom(modelBuilder);
    }

    partial void OnModelCreatingCustom(ModelBuilder modelBuilder);

    protected override void OnConfiguring(DbContextOptionsBuilder options) {

      //reqires separate nuget-package Microsoft.EntityFrameworkCore.SqlServer
      options.UseSqlServer(_ConnectionString);

      //reqires separate nuget-package Microsoft.EntityFrameworkCore.Proxies
      options.UseLazyLoadingProxies();

      this.OnConfiguringCustom(options);
    }

    partial void OnConfiguringCustom(DbContextOptionsBuilder options);

    public static void Migrate() {
      if (!_Migrated) {
        WorkflowDefinitionDbContext c = new WorkflowDefinitionDbContext();
        c.Database.Migrate();
        _Migrated = true;
        c.Dispose();
      }
    }

    private static bool _Migrated = false;

    private static String _ConnectionString = "Server=(localdb)\\MsSqlLocalDb;Database=WorkflowDefinitionDbContext;Integrated Security=True;Persist Security Info=True;MultipleActiveResultSets=True;";
    public static String ConnectionString {
      set { _ConnectionString = value; }
    }

  }

}

﻿using System;
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

}

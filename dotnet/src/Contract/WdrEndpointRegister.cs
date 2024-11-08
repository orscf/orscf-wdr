using MedicalResearch.Workflow.StoreAccess;
using System;

namespace MedicalResearch.Workflow {

  /// <summary>
  /// Provides convenience for bulk-registering controllers for all endpoints, for example when hosting them via asp.net core webapi
  /// </summary>
  public static class WdrEndpointRegister {

    /// <summary></summary>
    /// <param name="contractType"></param>
    /// <param name="preferredRoute"> WITHOUT the version-prefix and WITHOUT leading or trailing slash!</param>
    public delegate void GetContractsPerEndpointCallback(Type contractType, string preferredRoute);

    public static void GetContractsPerEndpoint(GetContractsPerEndpointCallback callback) {
      callback.Invoke(typeof(IResearchStudyDefinitionStore), "store/ResearchStudyDefinition");
    }

  }

}

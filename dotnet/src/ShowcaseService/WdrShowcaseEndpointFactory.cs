using MedicalResearch.Workflow.StoreAccess;
using System;

namespace MedicalResearch.Workflow {

  /// <summary>
  /// Provides convenience for bulk-registering factories for all endpoints, for example when hosting them via asp.net core webapi
  /// </summary>
  public static class WdrShowcaseEndpointFactory {

    public delegate void GetFactoryMethodsPerEndpointCallback(Type contractType, Func<object> endpointFactory);

    public static void GetFactoryMethodsPerEndpoint(GetFactoryMethodsPerEndpointCallback callback) {
      callback.Invoke(typeof(IResearchStudyDefinitionStore), () => new ResearchStudyDefinitionStore());
    }

  }

}
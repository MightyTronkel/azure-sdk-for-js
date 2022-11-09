/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  StorageSpaces,
  HybridContainerServiceClient
} from "@azure/arm-hybridcontainerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Puts the Hybrid AKS storage object
 *
 * @summary Puts the Hybrid AKS storage object
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2022-05-01-preview/examples/PutStorageSpace.json
 */
async function putStorageSpace() {
  const subscriptionId = "a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b";
  const resourceGroupName = "test-arcappliance-resgrp";
  const storageSpacesName = "test-storage";
  const storageSpaces: StorageSpaces = {
    extendedLocation: {
      name:
        "/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation",
      type: "CustomLocation"
    },
    location: "westus",
    properties: {
      hciStorageProfile: {
        mocGroup: "target-group",
        mocLocation: "MocLocation",
        mocStorageContainer: "WssdStorageContainer"
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential, subscriptionId);
  const result = await client.storageSpacesOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    storageSpacesName,
    storageSpaces
  );
  console.log(result);
}

putStorageSpace().catch(console.error);
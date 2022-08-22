/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Fleet, ContainerServiceClient } from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a Fleet.
 *
 * @summary Creates or updates a Fleet.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/Fleets_CreateOrUpdate.json
 */
async function createsOrUpdateAFleetResource() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const fleetName = "fleet-1";
  const parameters: Fleet = {
    hubProfile: { dnsPrefix: "dnsprefix1" },
    location: "East US",
    tags: { archv2: "", tier: "production" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleets.beginCreateOrUpdateAndWait(
    resourceGroupName,
    fleetName,
    parameters
  );
  console.log(result);
}

createsOrUpdateAFleetResource().catch(console.error);
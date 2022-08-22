/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { StorageManagementClient } = require("@azure/arm-storage");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates container properties as specified in request body. Properties not mentioned in the request will be unchanged. Update fails if the specified container doesn't already exist.
 *
 * @summary Updates container properties as specified in request body. Properties not mentioned in the request will be unchanged. Update fails if the specified container doesn't already exist.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2022-05-01/examples/BlobContainersPatch.json
 */
async function updateContainers() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res3376";
  const accountName = "sto328";
  const containerName = "container6185";
  const blobContainer = {
    metadata: { metadata: "true" },
    publicAccess: "Container",
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.blobContainers.update(
    resourceGroupName,
    accountName,
    containerName,
    blobContainer
  );
  console.log(result);
}

updateContainers().catch(console.error);
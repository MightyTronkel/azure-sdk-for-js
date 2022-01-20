/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RecommendedActions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MariaDBManagementClient } from "../mariaDBManagementClient";
import {
  RecommendationAction,
  RecommendedActionsListByServerNextOptionalParams,
  RecommendedActionsListByServerOptionalParams,
  RecommendedActionsGetOptionalParams,
  RecommendedActionsGetResponse,
  RecommendedActionsListByServerResponse,
  RecommendedActionsListByServerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RecommendedActions operations. */
export class RecommendedActionsImpl implements RecommendedActions {
  private readonly client: MariaDBManagementClient;

  /**
   * Initialize a new instance of the class RecommendedActions class.
   * @param client Reference to the service client
   */
  constructor(client: MariaDBManagementClient) {
    this.client = client;
  }

  /**
   * Retrieve recommended actions from the advisor.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advisorName The advisor name for recommendation action.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    advisorName: string,
    options?: RecommendedActionsListByServerOptionalParams
  ): PagedAsyncIterableIterator<RecommendationAction> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
      advisorName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          advisorName,
          options
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    advisorName: string,
    options?: RecommendedActionsListByServerOptionalParams
  ): AsyncIterableIterator<RecommendationAction[]> {
    let result = await this._listByServer(
      resourceGroupName,
      serverName,
      advisorName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        advisorName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    advisorName: string,
    options?: RecommendedActionsListByServerOptionalParams
  ): AsyncIterableIterator<RecommendationAction> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      advisorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieve recommended actions from the advisor.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advisorName The advisor name for recommendation action.
   * @param recommendedActionName The recommended action name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    advisorName: string,
    recommendedActionName: string,
    options?: RecommendedActionsGetOptionalParams
  ): Promise<RecommendedActionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        advisorName,
        recommendedActionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Retrieve recommended actions from the advisor.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advisorName The advisor name for recommendation action.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    advisorName: string,
    options?: RecommendedActionsListByServerOptionalParams
  ): Promise<RecommendedActionsListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, advisorName, options },
      listByServerOperationSpec
    );
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advisorName The advisor name for recommendation action.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    advisorName: string,
    nextLink: string,
    options?: RecommendedActionsListByServerNextOptionalParams
  ): Promise<RecommendedActionsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, advisorName, nextLink, options },
      listByServerNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/advisors/{advisorName}/recommendedActions/{recommendedActionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationAction
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.advisorName,
    Parameters.recommendedActionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/advisors/{advisorName}/recommendedActions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationActionsResultList
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.sessionId],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.advisorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationActionsResultList
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.sessionId],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.advisorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};

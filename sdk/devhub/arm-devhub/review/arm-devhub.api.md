## API Report File for "@azure/arm-devhub"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

// @public
export interface Acr {
    acrRegistryName?: string;
    acrRepositoryName?: string;
    acrResourceGroup?: string;
    acrSubscriptionId?: string;
}

// @public
export type ActionType = string;

// @public
export type CreatedByType = string;

// @public
export interface DeleteWorkflowResponse {
    status?: string;
}

// @public (undocumented)
export interface DeploymentProperties {
    helmChartPath?: string;
    helmValues?: string;
    // (undocumented)
    kubeManifestLocations?: string[];
    manifestType?: ManifestType;
    overrides?: {
        [propertyName: string]: string;
    };
}

// @public (undocumented)
export class DeveloperHubServiceClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: DeveloperHubServiceClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    gitHubOAuth(location: string, options?: GitHubOAuthOptionalParams): Promise<GitHubOAuthOperationResponse>;
    gitHubOAuthCallback(location: string, code: string, state: string, options?: GitHubOAuthCallbackOptionalParams): Promise<GitHubOAuthCallbackResponse>;
    listGitHubOAuth(location: string, options?: ListGitHubOAuthOptionalParams): Promise<ListGitHubOAuthResponse>;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    subscriptionId: string;
    // (undocumented)
    workflowOperations: WorkflowOperations;
}

// @public
export interface DeveloperHubServiceClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface ErrorAdditionalInfo {
    readonly info?: Record<string, unknown>;
    readonly type?: string;
}

// @public
export interface ErrorDetail {
    readonly additionalInfo?: ErrorAdditionalInfo[];
    readonly code?: string;
    readonly details?: ErrorDetail[];
    readonly message?: string;
    readonly target?: string;
}

// @public
export interface ErrorResponse {
    error?: ErrorDetail;
}

// @public
export interface GitHubOAuthCallbackOptionalParams extends coreClient.OperationOptions {
}

// @public
export type GitHubOAuthCallbackResponse = GitHubOAuthResponse;

// @public
export interface GitHubOAuthCallRequest {
    redirectUrl?: string;
}

// @public
export interface GitHubOAuthInfoResponse {
    authURL?: string;
    token?: string;
}

// @public
export interface GitHubOAuthListResponse {
    value?: GitHubOAuthResponse[];
}

// @public
export type GitHubOAuthOperationResponse = GitHubOAuthInfoResponse;

// @public
export interface GitHubOAuthOptionalParams extends coreClient.OperationOptions {
    parameters?: GitHubOAuthCallRequest;
}

// @public
export interface GitHubOAuthResponse extends ProxyResource {
    username?: string;
}

// @public
export interface GitHubWorkflowProfileOidcCredentials {
    azureClientId?: string;
    azureTenantId?: string;
}

// @public
export enum KnownActionType {
    Internal = "Internal"
}

// @public
export enum KnownCreatedByType {
    Application = "Application",
    Key = "Key",
    ManagedIdentity = "ManagedIdentity",
    User = "User"
}

// @public
export enum KnownManifestType {
    Helm = "helm",
    Kube = "kube"
}

// @public
export enum KnownOrigin {
    System = "system",
    User = "user",
    UserSystem = "user,system"
}

// @public
export enum KnownPullRequestStatus {
    Merged = "merged",
    Removed = "removed",
    Submitted = "submitted",
    Unknown = "unknown"
}

// @public
export interface ListGitHubOAuthOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ListGitHubOAuthResponse = GitHubOAuthListResponse;

// @public
export type ManifestType = string;

// @public
export interface Operation {
    readonly actionType?: ActionType;
    display?: OperationDisplay;
    readonly isDataAction?: boolean;
    readonly name?: string;
    readonly origin?: Origin;
}

// @public
export interface OperationDisplay {
    readonly description?: string;
    readonly operation?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface OperationListResult {
    readonly nextLink?: string;
    readonly value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): Promise<OperationsListResponse>;
}

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export type Origin = string;

// @public
export interface ProxyResource extends Resource {
}

// @public
export type PullRequestStatus = string;

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly systemData?: SystemData;
    readonly type?: string;
}

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// @public
export interface TagsObject {
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface TrackedResource extends Resource {
    location: string;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface Workflow extends TrackedResource {
    acr?: Acr;
    aksResourceId?: string;
    authStatus?: ManifestType;
    branchName?: string;
    // (undocumented)
    deploymentProperties?: DeploymentProperties;
    dockerBuildContext?: string;
    dockerfile?: string;
    // (undocumented)
    lastWorkflowRun?: WorkflowRun;
    namespace?: string;
    oidcCredentials?: GitHubWorkflowProfileOidcCredentials;
    readonly prStatus?: PullRequestStatus;
    readonly prURL?: string;
    readonly pullNumber?: number;
    repositoryName?: string;
    repositoryOwner?: string;
}

// @public
export interface WorkflowCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WorkflowCreateOrUpdateResponse = Workflow;

// @public
export interface WorkflowDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WorkflowDeleteResponse = DeleteWorkflowResponse;

// @public
export interface WorkflowGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WorkflowGetResponse = Workflow;

// @public
export interface WorkflowListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
    managedClusterResource?: string;
}

// @public
export type WorkflowListByResourceGroupNextResponse = WorkflowListResult;

// @public
export interface WorkflowListByResourceGroupOptionalParams extends coreClient.OperationOptions {
    managedClusterResource?: string;
}

// @public
export type WorkflowListByResourceGroupResponse = WorkflowListResult;

// @public
export interface WorkflowListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WorkflowListNextResponse = WorkflowListResult;

// @public
export interface WorkflowListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WorkflowListResponse = WorkflowListResult;

// @public
export interface WorkflowListResult {
    readonly nextLink?: string;
    value?: Workflow[];
}

// @public
export interface WorkflowOperations {
    createOrUpdate(resourceGroupName: string, workflowName: string, parameters: Workflow, options?: WorkflowCreateOrUpdateOptionalParams): Promise<WorkflowCreateOrUpdateResponse>;
    delete(resourceGroupName: string, workflowName: string, options?: WorkflowDeleteOptionalParams): Promise<WorkflowDeleteResponse>;
    get(resourceGroupName: string, workflowName: string, options?: WorkflowGetOptionalParams): Promise<WorkflowGetResponse>;
    list(options?: WorkflowListOptionalParams): PagedAsyncIterableIterator<Workflow>;
    listByResourceGroup(resourceGroupName: string, options?: WorkflowListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Workflow>;
    updateTags(resourceGroupName: string, workflowName: string, parameters: TagsObject, options?: WorkflowUpdateTagsOptionalParams): Promise<WorkflowUpdateTagsResponse>;
}

// @public (undocumented)
export interface WorkflowRun {
    readonly lastRunAt?: Date;
    readonly succeeded?: boolean;
    readonly workflowRunURL?: string;
}

// @public
export interface WorkflowUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WorkflowUpdateTagsResponse = Workflow;

// (No @packageDocumentation comment for this package)

```
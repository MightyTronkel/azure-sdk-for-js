/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Request payload for creating new room. */
export interface CreateRoomRequest {
  /** The timestamp from when the room is open for joining. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  validFrom?: Date;
  /** The timestamp from when the room can no longer be joined. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  validUntil?: Date;
  /** The Policy based on which Participants can join a room. */
  roomJoinPolicy?: RoomJoinPolicy;
  /** (Optional) Collection of participants invited to the room. */
  participants?: RoomParticipant[];
}

/** A participant of the room. */
export interface RoomParticipant {
  /** Identifies a participant in Azure Communication services. A participant is, for example, an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  communicationIdentifier: CommunicationIdentifierModel;
  /** The Role of a room participant. */
  role?: RoleType;
}

/** Identifies a participant in Azure Communication services. A participant is, for example, an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
export interface CommunicationIdentifierModel {
  /** Raw id of the identifier. Optional in requests, required in responses. */
  rawId?: string;
  /** A user that got created with an Azure Communication Services resource. */
  communicationUser?: CommunicationUserIdentifierModel;
}

/** A user that got created with an Azure Communication Services resource. */
export interface CommunicationUserIdentifierModel {
  /** The Id of the communication user. */
  id: string;
}

/** The meeting room. */
export interface RoomModel {
  /** Unique identifier of a room. This id is server generated. */
  id: string;
  /** The timestamp when the room was created at the server. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  createdDateTime: Date;
  /** The timestamp from when the room is open for joining. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  validFrom: Date;
  /** The timestamp from when the room can no longer be joined. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  validUntil: Date;
  /** The Policy based on which Participants can join a room. */
  roomJoinPolicy: RoomJoinPolicy;
  /** Collection of room participants. */
  participants: RoomParticipant[];
}

/** The Communication Services error. */
export interface CommunicationErrorResponse {
  /** The Communication Services error. */
  error: CommunicationError;
}

/** The Communication Services error. */
export interface CommunicationError {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * Further details about specific errors that led to this error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: CommunicationError[];
  /**
   * The inner error if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: CommunicationError;
}

/** Request payload for updating a room. */
export interface UpdateRoomRequest {
  /** (Optional) The timestamp from when the room is open for joining. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  validFrom?: Date;
  /** (Optional) The timestamp from when the room can no longer be joined. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  validUntil?: Date;
  /** The Policy based on which Participants can join a room. */
  roomJoinPolicy?: RoomJoinPolicy;
  /** Collection of room participants. */
  participants?: RoomParticipant[];
}

/** Collection of participants in a room. */
export interface ParticipantsCollection {
  /** Room Participants. */
  participants: RoomParticipant[];
}

/** Participants to be added to the room. */
export interface AddParticipantsRequest {
  /** Participants to add to a room. */
  participants: RoomParticipant[];
}

/** Participants to be updated in a room. */
export interface UpdateParticipantsRequest {
  /** Participants to update in a room. */
  participants: RoomParticipant[];
}

/** Participants to be removed from a room. */
export interface RemoveParticipantsRequest {
  /** Participants to be removed from a room. */
  participants: RoomParticipant[];
}

/** Defines headers for Rooms_createRoom operation. */
export interface RoomsCreateRoomExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Rooms_getRoom operation. */
export interface RoomsGetRoomExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Rooms_updateRoom operation. */
export interface RoomsUpdateRoomExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Rooms_deleteRoom operation. */
export interface RoomsDeleteRoomExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Rooms_getParticipants operation. */
export interface RoomsGetParticipantsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Rooms_addParticipants operation. */
export interface RoomsAddParticipantsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Rooms_updateParticipants operation. */
export interface RoomsUpdateParticipantsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Rooms_removeParticipants operation. */
export interface RoomsRemoveParticipantsExceptionHeaders {
  errorCode?: string;
}

/** Defines values for RoomJoinPolicy. */
export type RoomJoinPolicy = "InviteOnly" | "CommunicationServiceUsers";
/** Defines values for RoleType. */
export type RoleType = "Presenter" | "Attendee" | "Consumer";

/** Optional parameters. */
export interface RoomsCreateRoomOptionalParams
  extends coreClient.OperationOptions {
  /** If specified, the client directs that the request is repeatable; that is, that the client can make the request multiple times with the same Repeatability-Request-Id and get back an appropriate response without the server executing the request multiple times. The value of the Repeatability-Request-Id is an opaque string representing a client-generated, globally unique for all time, identifier for the request. It is recommended to use version 4 (random) UUIDs. */
  repeatabilityRequestID?: string;
  /** If Repeatability-Request-ID header is specified, then Repeatability-First-Sent header must also be specified. The value should be the date and time at which the request was first created, expressed using the IMF-fixdate form of HTTP-date */
  repeatabilityFirstSent?: Date;
}

/** Contains response data for the createRoom operation. */
export type RoomsCreateRoomResponse = RoomModel;

/** Optional parameters. */
export interface RoomsGetRoomOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getRoom operation. */
export type RoomsGetRoomResponse = RoomModel;

/** Optional parameters. */
export interface RoomsUpdateRoomOptionalParams
  extends coreClient.OperationOptions {
  /** The patch room request */
  patchRoomRequest?: UpdateRoomRequest;
}

/** Contains response data for the updateRoom operation. */
export type RoomsUpdateRoomResponse = RoomModel;

/** Optional parameters. */
export interface RoomsDeleteRoomOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface RoomsGetParticipantsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getParticipants operation. */
export type RoomsGetParticipantsResponse = ParticipantsCollection;

/** Optional parameters. */
export interface RoomsAddParticipantsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the addParticipants operation. */
export type RoomsAddParticipantsResponse = ParticipantsCollection;

/** Optional parameters. */
export interface RoomsUpdateParticipantsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateParticipants operation. */
export type RoomsUpdateParticipantsResponse = ParticipantsCollection;

/** Optional parameters. */
export interface RoomsRemoveParticipantsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the removeParticipants operation. */
export type RoomsRemoveParticipantsResponse = ParticipantsCollection;

/** Optional parameters. */
export interface RoomsApiClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
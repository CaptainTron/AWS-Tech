import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAWSTech = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AWSTech, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fname: string;
  readonly lname: number;
  readonly rollnumber: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAWSTech = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AWSTech, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fname: string;
  readonly lname: number;
  readonly rollnumber: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AWSTech = LazyLoading extends LazyLoadingDisabled ? EagerAWSTech : LazyAWSTech

export declare const AWSTech: (new (init: ModelInit<AWSTech>) => AWSTech) & {
  copyOf(source: AWSTech, mutator: (draft: MutableModel<AWSTech>) => MutableModel<AWSTech> | void): AWSTech;
}
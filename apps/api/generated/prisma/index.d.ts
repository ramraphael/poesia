
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model Vaccine
 * 
 */
export type Vaccine = $Result.DefaultSelection<Prisma.$VaccinePayload>
/**
 * Model Allergy
 * 
 */
export type Allergy = $Result.DefaultSelection<Prisma.$AllergyPayload>
/**
 * Model LabReport
 * 
 */
export type LabReport = $Result.DefaultSelection<Prisma.$LabReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AnimalSpecies: {
  DOG: 'DOG',
  CAT: 'CAT',
  BIRD: 'BIRD'
};

export type AnimalSpecies = (typeof AnimalSpecies)[keyof typeof AnimalSpecies]


export const AllergySeverity: {
  MILD: 'MILD',
  SEVERE: 'SEVERE'
};

export type AllergySeverity = (typeof AllergySeverity)[keyof typeof AllergySeverity]

}

export type AnimalSpecies = $Enums.AnimalSpecies

export const AnimalSpecies: typeof $Enums.AnimalSpecies

export type AllergySeverity = $Enums.AllergySeverity

export const AllergySeverity: typeof $Enums.AllergySeverity

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vaccine`: Exposes CRUD operations for the **Vaccine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vaccines
    * const vaccines = await prisma.vaccine.findMany()
    * ```
    */
  get vaccine(): Prisma.VaccineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allergy`: Exposes CRUD operations for the **Allergy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Allergies
    * const allergies = await prisma.allergy.findMany()
    * ```
    */
  get allergy(): Prisma.AllergyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labReport`: Exposes CRUD operations for the **LabReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabReports
    * const labReports = await prisma.labReport.findMany()
    * ```
    */
  get labReport(): Prisma.LabReportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Pet: 'Pet',
    Vaccine: 'Vaccine',
    Allergy: 'Allergy',
    LabReport: 'LabReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "pet" | "vaccine" | "allergy" | "labReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      Vaccine: {
        payload: Prisma.$VaccinePayload<ExtArgs>
        fields: Prisma.VaccineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VaccineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VaccineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          findFirst: {
            args: Prisma.VaccineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VaccineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          findMany: {
            args: Prisma.VaccineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>[]
          }
          create: {
            args: Prisma.VaccineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          createMany: {
            args: Prisma.VaccineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VaccineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>[]
          }
          delete: {
            args: Prisma.VaccineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          update: {
            args: Prisma.VaccineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          deleteMany: {
            args: Prisma.VaccineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VaccineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VaccineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>[]
          }
          upsert: {
            args: Prisma.VaccineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          aggregate: {
            args: Prisma.VaccineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVaccine>
          }
          groupBy: {
            args: Prisma.VaccineGroupByArgs<ExtArgs>
            result: $Utils.Optional<VaccineGroupByOutputType>[]
          }
          count: {
            args: Prisma.VaccineCountArgs<ExtArgs>
            result: $Utils.Optional<VaccineCountAggregateOutputType> | number
          }
        }
      }
      Allergy: {
        payload: Prisma.$AllergyPayload<ExtArgs>
        fields: Prisma.AllergyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllergyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllergyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          findFirst: {
            args: Prisma.AllergyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllergyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          findMany: {
            args: Prisma.AllergyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>[]
          }
          create: {
            args: Prisma.AllergyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          createMany: {
            args: Prisma.AllergyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllergyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>[]
          }
          delete: {
            args: Prisma.AllergyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          update: {
            args: Prisma.AllergyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          deleteMany: {
            args: Prisma.AllergyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllergyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AllergyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>[]
          }
          upsert: {
            args: Prisma.AllergyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          aggregate: {
            args: Prisma.AllergyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllergy>
          }
          groupBy: {
            args: Prisma.AllergyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllergyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllergyCountArgs<ExtArgs>
            result: $Utils.Optional<AllergyCountAggregateOutputType> | number
          }
        }
      }
      LabReport: {
        payload: Prisma.$LabReportPayload<ExtArgs>
        fields: Prisma.LabReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>
          }
          findFirst: {
            args: Prisma.LabReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>
          }
          findMany: {
            args: Prisma.LabReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>[]
          }
          create: {
            args: Prisma.LabReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>
          }
          createMany: {
            args: Prisma.LabReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>[]
          }
          delete: {
            args: Prisma.LabReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>
          }
          update: {
            args: Prisma.LabReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>
          }
          deleteMany: {
            args: Prisma.LabReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>[]
          }
          upsert: {
            args: Prisma.LabReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>
          }
          aggregate: {
            args: Prisma.LabReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabReport>
          }
          groupBy: {
            args: Prisma.LabReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabReportCountArgs<ExtArgs>
            result: $Utils.Optional<LabReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    pet?: PetOmit
    vaccine?: VaccineOmit
    allergy?: AllergyOmit
    labReport?: LabReportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    pets: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | AccountCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }


  /**
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    vaccines: number
    allergies: number
    labs: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vaccines?: boolean | PetCountOutputTypeCountVaccinesArgs
    allergies?: boolean | PetCountOutputTypeCountAllergiesArgs
    labs?: boolean | PetCountOutputTypeCountLabsArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountVaccinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaccineWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountAllergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllergyWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountLabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    phoneNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pets?: boolean | Account$petsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "phoneNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | Account$petsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      pets: Prisma.$PetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      phoneNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pets<T extends Account$petsArgs<ExtArgs> = {}>(args?: Subset<T, Account$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly email: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly phoneNumber: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.pets
   */
  export type Account$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetMinAggregateOutputType = {
    id: string | null
    name: string | null
    species: $Enums.AnimalSpecies | null
    breed: string | null
    birthDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
  }

  export type PetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    species: $Enums.AnimalSpecies | null
    breed: string | null
    birthDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    name: number
    species: number
    breed: number
    birthDate: number
    createdAt: number
    updatedAt: number
    accountId: number
    _all: number
  }


  export type PetMinAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    birthDate?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    birthDate?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    birthDate?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: string
    name: string
    species: $Enums.AnimalSpecies
    breed: string | null
    birthDate: Date | null
    createdAt: Date
    updatedAt: Date
    accountId: string
    _count: PetCountAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    birthDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    account?: boolean | Pet$accountArgs<ExtArgs>
    vaccines?: boolean | Pet$vaccinesArgs<ExtArgs>
    allergies?: boolean | Pet$allergiesArgs<ExtArgs>
    labs?: boolean | Pet$labsArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    birthDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    account?: boolean | Pet$accountArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    birthDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    account?: boolean | Pet$accountArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    birthDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "species" | "breed" | "birthDate" | "createdAt" | "updatedAt" | "accountId", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Pet$accountArgs<ExtArgs>
    vaccines?: boolean | Pet$vaccinesArgs<ExtArgs>
    allergies?: boolean | Pet$allergiesArgs<ExtArgs>
    labs?: boolean | Pet$labsArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Pet$accountArgs<ExtArgs>
  }
  export type PetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Pet$accountArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null
      vaccines: Prisma.$VaccinePayload<ExtArgs>[]
      allergies: Prisma.$AllergyPayload<ExtArgs>[]
      labs: Prisma.$LabReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      species: $Enums.AnimalSpecies
      breed: string | null
      birthDate: Date | null
      createdAt: Date
      updatedAt: Date
      accountId: string
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends Pet$accountArgs<ExtArgs> = {}>(args?: Subset<T, Pet$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vaccines<T extends Pet$vaccinesArgs<ExtArgs> = {}>(args?: Subset<T, Pet$vaccinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    allergies<T extends Pet$allergiesArgs<ExtArgs> = {}>(args?: Subset<T, Pet$allergiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labs<T extends Pet$labsArgs<ExtArgs> = {}>(args?: Subset<T, Pet$labsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'String'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly species: FieldRef<"Pet", 'AnimalSpecies'>
    readonly breed: FieldRef<"Pet", 'String'>
    readonly birthDate: FieldRef<"Pet", 'DateTime'>
    readonly createdAt: FieldRef<"Pet", 'DateTime'>
    readonly updatedAt: FieldRef<"Pet", 'DateTime'>
    readonly accountId: FieldRef<"Pet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet updateManyAndReturn
   */
  export type PetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet.account
   */
  export type Pet$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Pet.vaccines
   */
  export type Pet$vaccinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    where?: VaccineWhereInput
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    cursor?: VaccineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VaccineScalarFieldEnum | VaccineScalarFieldEnum[]
  }

  /**
   * Pet.allergies
   */
  export type Pet$allergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    where?: AllergyWhereInput
    orderBy?: AllergyOrderByWithRelationInput | AllergyOrderByWithRelationInput[]
    cursor?: AllergyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * Pet.labs
   */
  export type Pet$labsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    where?: LabReportWhereInput
    orderBy?: LabReportOrderByWithRelationInput | LabReportOrderByWithRelationInput[]
    cursor?: LabReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabReportScalarFieldEnum | LabReportScalarFieldEnum[]
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model Vaccine
   */

  export type AggregateVaccine = {
    _count: VaccineCountAggregateOutputType | null
    _min: VaccineMinAggregateOutputType | null
    _max: VaccineMaxAggregateOutputType | null
  }

  export type VaccineMinAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    petId: string | null
  }

  export type VaccineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    petId: string | null
  }

  export type VaccineCountAggregateOutputType = {
    id: number
    name: number
    date: number
    createdAt: number
    updatedAt: number
    petId: number
    _all: number
  }


  export type VaccineMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    petId?: true
  }

  export type VaccineMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    petId?: true
  }

  export type VaccineCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    petId?: true
    _all?: true
  }

  export type VaccineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vaccine to aggregate.
     */
    where?: VaccineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VaccineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vaccines
    **/
    _count?: true | VaccineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VaccineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VaccineMaxAggregateInputType
  }

  export type GetVaccineAggregateType<T extends VaccineAggregateArgs> = {
        [P in keyof T & keyof AggregateVaccine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVaccine[P]>
      : GetScalarType<T[P], AggregateVaccine[P]>
  }




  export type VaccineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaccineWhereInput
    orderBy?: VaccineOrderByWithAggregationInput | VaccineOrderByWithAggregationInput[]
    by: VaccineScalarFieldEnum[] | VaccineScalarFieldEnum
    having?: VaccineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VaccineCountAggregateInputType | true
    _min?: VaccineMinAggregateInputType
    _max?: VaccineMaxAggregateInputType
  }

  export type VaccineGroupByOutputType = {
    id: string
    name: string
    date: Date
    createdAt: Date
    updatedAt: Date
    petId: string
    _count: VaccineCountAggregateOutputType | null
    _min: VaccineMinAggregateOutputType | null
    _max: VaccineMaxAggregateOutputType | null
  }

  type GetVaccineGroupByPayload<T extends VaccineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VaccineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VaccineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VaccineGroupByOutputType[P]>
            : GetScalarType<T[P], VaccineGroupByOutputType[P]>
        }
      >
    >


  export type VaccineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaccine"]>

  export type VaccineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaccine"]>

  export type VaccineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaccine"]>

  export type VaccineSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    petId?: boolean
  }

  export type VaccineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date" | "createdAt" | "updatedAt" | "petId", ExtArgs["result"]["vaccine"]>
  export type VaccineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type VaccineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type VaccineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $VaccinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vaccine"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      date: Date
      createdAt: Date
      updatedAt: Date
      petId: string
    }, ExtArgs["result"]["vaccine"]>
    composites: {}
  }

  type VaccineGetPayload<S extends boolean | null | undefined | VaccineDefaultArgs> = $Result.GetResult<Prisma.$VaccinePayload, S>

  type VaccineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VaccineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VaccineCountAggregateInputType | true
    }

  export interface VaccineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vaccine'], meta: { name: 'Vaccine' } }
    /**
     * Find zero or one Vaccine that matches the filter.
     * @param {VaccineFindUniqueArgs} args - Arguments to find a Vaccine
     * @example
     * // Get one Vaccine
     * const vaccine = await prisma.vaccine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VaccineFindUniqueArgs>(args: SelectSubset<T, VaccineFindUniqueArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vaccine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VaccineFindUniqueOrThrowArgs} args - Arguments to find a Vaccine
     * @example
     * // Get one Vaccine
     * const vaccine = await prisma.vaccine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VaccineFindUniqueOrThrowArgs>(args: SelectSubset<T, VaccineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vaccine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineFindFirstArgs} args - Arguments to find a Vaccine
     * @example
     * // Get one Vaccine
     * const vaccine = await prisma.vaccine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VaccineFindFirstArgs>(args?: SelectSubset<T, VaccineFindFirstArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vaccine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineFindFirstOrThrowArgs} args - Arguments to find a Vaccine
     * @example
     * // Get one Vaccine
     * const vaccine = await prisma.vaccine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VaccineFindFirstOrThrowArgs>(args?: SelectSubset<T, VaccineFindFirstOrThrowArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vaccines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vaccines
     * const vaccines = await prisma.vaccine.findMany()
     * 
     * // Get first 10 Vaccines
     * const vaccines = await prisma.vaccine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vaccineWithIdOnly = await prisma.vaccine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VaccineFindManyArgs>(args?: SelectSubset<T, VaccineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vaccine.
     * @param {VaccineCreateArgs} args - Arguments to create a Vaccine.
     * @example
     * // Create one Vaccine
     * const Vaccine = await prisma.vaccine.create({
     *   data: {
     *     // ... data to create a Vaccine
     *   }
     * })
     * 
     */
    create<T extends VaccineCreateArgs>(args: SelectSubset<T, VaccineCreateArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vaccines.
     * @param {VaccineCreateManyArgs} args - Arguments to create many Vaccines.
     * @example
     * // Create many Vaccines
     * const vaccine = await prisma.vaccine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VaccineCreateManyArgs>(args?: SelectSubset<T, VaccineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vaccines and returns the data saved in the database.
     * @param {VaccineCreateManyAndReturnArgs} args - Arguments to create many Vaccines.
     * @example
     * // Create many Vaccines
     * const vaccine = await prisma.vaccine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vaccines and only return the `id`
     * const vaccineWithIdOnly = await prisma.vaccine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VaccineCreateManyAndReturnArgs>(args?: SelectSubset<T, VaccineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vaccine.
     * @param {VaccineDeleteArgs} args - Arguments to delete one Vaccine.
     * @example
     * // Delete one Vaccine
     * const Vaccine = await prisma.vaccine.delete({
     *   where: {
     *     // ... filter to delete one Vaccine
     *   }
     * })
     * 
     */
    delete<T extends VaccineDeleteArgs>(args: SelectSubset<T, VaccineDeleteArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vaccine.
     * @param {VaccineUpdateArgs} args - Arguments to update one Vaccine.
     * @example
     * // Update one Vaccine
     * const vaccine = await prisma.vaccine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VaccineUpdateArgs>(args: SelectSubset<T, VaccineUpdateArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vaccines.
     * @param {VaccineDeleteManyArgs} args - Arguments to filter Vaccines to delete.
     * @example
     * // Delete a few Vaccines
     * const { count } = await prisma.vaccine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VaccineDeleteManyArgs>(args?: SelectSubset<T, VaccineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vaccines
     * const vaccine = await prisma.vaccine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VaccineUpdateManyArgs>(args: SelectSubset<T, VaccineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vaccines and returns the data updated in the database.
     * @param {VaccineUpdateManyAndReturnArgs} args - Arguments to update many Vaccines.
     * @example
     * // Update many Vaccines
     * const vaccine = await prisma.vaccine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vaccines and only return the `id`
     * const vaccineWithIdOnly = await prisma.vaccine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VaccineUpdateManyAndReturnArgs>(args: SelectSubset<T, VaccineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vaccine.
     * @param {VaccineUpsertArgs} args - Arguments to update or create a Vaccine.
     * @example
     * // Update or create a Vaccine
     * const vaccine = await prisma.vaccine.upsert({
     *   create: {
     *     // ... data to create a Vaccine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vaccine we want to update
     *   }
     * })
     */
    upsert<T extends VaccineUpsertArgs>(args: SelectSubset<T, VaccineUpsertArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineCountArgs} args - Arguments to filter Vaccines to count.
     * @example
     * // Count the number of Vaccines
     * const count = await prisma.vaccine.count({
     *   where: {
     *     // ... the filter for the Vaccines we want to count
     *   }
     * })
    **/
    count<T extends VaccineCountArgs>(
      args?: Subset<T, VaccineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VaccineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vaccine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VaccineAggregateArgs>(args: Subset<T, VaccineAggregateArgs>): Prisma.PrismaPromise<GetVaccineAggregateType<T>>

    /**
     * Group by Vaccine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VaccineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VaccineGroupByArgs['orderBy'] }
        : { orderBy?: VaccineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VaccineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVaccineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vaccine model
   */
  readonly fields: VaccineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vaccine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VaccineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vaccine model
   */
  interface VaccineFieldRefs {
    readonly id: FieldRef<"Vaccine", 'String'>
    readonly name: FieldRef<"Vaccine", 'String'>
    readonly date: FieldRef<"Vaccine", 'DateTime'>
    readonly createdAt: FieldRef<"Vaccine", 'DateTime'>
    readonly updatedAt: FieldRef<"Vaccine", 'DateTime'>
    readonly petId: FieldRef<"Vaccine", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vaccine findUnique
   */
  export type VaccineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccine to fetch.
     */
    where: VaccineWhereUniqueInput
  }

  /**
   * Vaccine findUniqueOrThrow
   */
  export type VaccineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccine to fetch.
     */
    where: VaccineWhereUniqueInput
  }

  /**
   * Vaccine findFirst
   */
  export type VaccineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccine to fetch.
     */
    where?: VaccineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vaccines.
     */
    cursor?: VaccineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vaccines.
     */
    distinct?: VaccineScalarFieldEnum | VaccineScalarFieldEnum[]
  }

  /**
   * Vaccine findFirstOrThrow
   */
  export type VaccineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccine to fetch.
     */
    where?: VaccineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vaccines.
     */
    cursor?: VaccineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vaccines.
     */
    distinct?: VaccineScalarFieldEnum | VaccineScalarFieldEnum[]
  }

  /**
   * Vaccine findMany
   */
  export type VaccineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccines to fetch.
     */
    where?: VaccineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vaccines.
     */
    cursor?: VaccineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    distinct?: VaccineScalarFieldEnum | VaccineScalarFieldEnum[]
  }

  /**
   * Vaccine create
   */
  export type VaccineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * The data needed to create a Vaccine.
     */
    data: XOR<VaccineCreateInput, VaccineUncheckedCreateInput>
  }

  /**
   * Vaccine createMany
   */
  export type VaccineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vaccines.
     */
    data: VaccineCreateManyInput | VaccineCreateManyInput[]
  }

  /**
   * Vaccine createManyAndReturn
   */
  export type VaccineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * The data used to create many Vaccines.
     */
    data: VaccineCreateManyInput | VaccineCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vaccine update
   */
  export type VaccineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * The data needed to update a Vaccine.
     */
    data: XOR<VaccineUpdateInput, VaccineUncheckedUpdateInput>
    /**
     * Choose, which Vaccine to update.
     */
    where: VaccineWhereUniqueInput
  }

  /**
   * Vaccine updateMany
   */
  export type VaccineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vaccines.
     */
    data: XOR<VaccineUpdateManyMutationInput, VaccineUncheckedUpdateManyInput>
    /**
     * Filter which Vaccines to update
     */
    where?: VaccineWhereInput
    /**
     * Limit how many Vaccines to update.
     */
    limit?: number
  }

  /**
   * Vaccine updateManyAndReturn
   */
  export type VaccineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * The data used to update Vaccines.
     */
    data: XOR<VaccineUpdateManyMutationInput, VaccineUncheckedUpdateManyInput>
    /**
     * Filter which Vaccines to update
     */
    where?: VaccineWhereInput
    /**
     * Limit how many Vaccines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vaccine upsert
   */
  export type VaccineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * The filter to search for the Vaccine to update in case it exists.
     */
    where: VaccineWhereUniqueInput
    /**
     * In case the Vaccine found by the `where` argument doesn't exist, create a new Vaccine with this data.
     */
    create: XOR<VaccineCreateInput, VaccineUncheckedCreateInput>
    /**
     * In case the Vaccine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VaccineUpdateInput, VaccineUncheckedUpdateInput>
  }

  /**
   * Vaccine delete
   */
  export type VaccineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter which Vaccine to delete.
     */
    where: VaccineWhereUniqueInput
  }

  /**
   * Vaccine deleteMany
   */
  export type VaccineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vaccines to delete
     */
    where?: VaccineWhereInput
    /**
     * Limit how many Vaccines to delete.
     */
    limit?: number
  }

  /**
   * Vaccine without action
   */
  export type VaccineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
  }


  /**
   * Model Allergy
   */

  export type AggregateAllergy = {
    _count: AllergyCountAggregateOutputType | null
    _min: AllergyMinAggregateOutputType | null
    _max: AllergyMaxAggregateOutputType | null
  }

  export type AllergyMinAggregateOutputType = {
    id: string | null
    name: string | null
    severity: $Enums.AllergySeverity | null
    createdAt: Date | null
    updatedAt: Date | null
    petId: string | null
  }

  export type AllergyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    severity: $Enums.AllergySeverity | null
    createdAt: Date | null
    updatedAt: Date | null
    petId: string | null
  }

  export type AllergyCountAggregateOutputType = {
    id: number
    name: number
    severity: number
    reactions: number
    createdAt: number
    updatedAt: number
    petId: number
    _all: number
  }


  export type AllergyMinAggregateInputType = {
    id?: true
    name?: true
    severity?: true
    createdAt?: true
    updatedAt?: true
    petId?: true
  }

  export type AllergyMaxAggregateInputType = {
    id?: true
    name?: true
    severity?: true
    createdAt?: true
    updatedAt?: true
    petId?: true
  }

  export type AllergyCountAggregateInputType = {
    id?: true
    name?: true
    severity?: true
    reactions?: true
    createdAt?: true
    updatedAt?: true
    petId?: true
    _all?: true
  }

  export type AllergyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allergy to aggregate.
     */
    where?: AllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergyOrderByWithRelationInput | AllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Allergies
    **/
    _count?: true | AllergyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllergyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllergyMaxAggregateInputType
  }

  export type GetAllergyAggregateType<T extends AllergyAggregateArgs> = {
        [P in keyof T & keyof AggregateAllergy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllergy[P]>
      : GetScalarType<T[P], AggregateAllergy[P]>
  }




  export type AllergyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllergyWhereInput
    orderBy?: AllergyOrderByWithAggregationInput | AllergyOrderByWithAggregationInput[]
    by: AllergyScalarFieldEnum[] | AllergyScalarFieldEnum
    having?: AllergyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllergyCountAggregateInputType | true
    _min?: AllergyMinAggregateInputType
    _max?: AllergyMaxAggregateInputType
  }

  export type AllergyGroupByOutputType = {
    id: string
    name: string
    severity: $Enums.AllergySeverity
    reactions: JsonValue
    createdAt: Date
    updatedAt: Date
    petId: string
    _count: AllergyCountAggregateOutputType | null
    _min: AllergyMinAggregateOutputType | null
    _max: AllergyMaxAggregateOutputType | null
  }

  type GetAllergyGroupByPayload<T extends AllergyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllergyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllergyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllergyGroupByOutputType[P]>
            : GetScalarType<T[P], AllergyGroupByOutputType[P]>
        }
      >
    >


  export type AllergySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    severity?: boolean
    reactions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergy"]>

  export type AllergySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    severity?: boolean
    reactions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergy"]>

  export type AllergySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    severity?: boolean
    reactions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergy"]>

  export type AllergySelectScalar = {
    id?: boolean
    name?: boolean
    severity?: boolean
    reactions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    petId?: boolean
  }

  export type AllergyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "severity" | "reactions" | "createdAt" | "updatedAt" | "petId", ExtArgs["result"]["allergy"]>
  export type AllergyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type AllergyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type AllergyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $AllergyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Allergy"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      severity: $Enums.AllergySeverity
      reactions: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      petId: string
    }, ExtArgs["result"]["allergy"]>
    composites: {}
  }

  type AllergyGetPayload<S extends boolean | null | undefined | AllergyDefaultArgs> = $Result.GetResult<Prisma.$AllergyPayload, S>

  type AllergyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AllergyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllergyCountAggregateInputType | true
    }

  export interface AllergyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Allergy'], meta: { name: 'Allergy' } }
    /**
     * Find zero or one Allergy that matches the filter.
     * @param {AllergyFindUniqueArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllergyFindUniqueArgs>(args: SelectSubset<T, AllergyFindUniqueArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Allergy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AllergyFindUniqueOrThrowArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllergyFindUniqueOrThrowArgs>(args: SelectSubset<T, AllergyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyFindFirstArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllergyFindFirstArgs>(args?: SelectSubset<T, AllergyFindFirstArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyFindFirstOrThrowArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllergyFindFirstOrThrowArgs>(args?: SelectSubset<T, AllergyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Allergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Allergies
     * const allergies = await prisma.allergy.findMany()
     * 
     * // Get first 10 Allergies
     * const allergies = await prisma.allergy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allergyWithIdOnly = await prisma.allergy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AllergyFindManyArgs>(args?: SelectSubset<T, AllergyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Allergy.
     * @param {AllergyCreateArgs} args - Arguments to create a Allergy.
     * @example
     * // Create one Allergy
     * const Allergy = await prisma.allergy.create({
     *   data: {
     *     // ... data to create a Allergy
     *   }
     * })
     * 
     */
    create<T extends AllergyCreateArgs>(args: SelectSubset<T, AllergyCreateArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Allergies.
     * @param {AllergyCreateManyArgs} args - Arguments to create many Allergies.
     * @example
     * // Create many Allergies
     * const allergy = await prisma.allergy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllergyCreateManyArgs>(args?: SelectSubset<T, AllergyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Allergies and returns the data saved in the database.
     * @param {AllergyCreateManyAndReturnArgs} args - Arguments to create many Allergies.
     * @example
     * // Create many Allergies
     * const allergy = await prisma.allergy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Allergies and only return the `id`
     * const allergyWithIdOnly = await prisma.allergy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllergyCreateManyAndReturnArgs>(args?: SelectSubset<T, AllergyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Allergy.
     * @param {AllergyDeleteArgs} args - Arguments to delete one Allergy.
     * @example
     * // Delete one Allergy
     * const Allergy = await prisma.allergy.delete({
     *   where: {
     *     // ... filter to delete one Allergy
     *   }
     * })
     * 
     */
    delete<T extends AllergyDeleteArgs>(args: SelectSubset<T, AllergyDeleteArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Allergy.
     * @param {AllergyUpdateArgs} args - Arguments to update one Allergy.
     * @example
     * // Update one Allergy
     * const allergy = await prisma.allergy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllergyUpdateArgs>(args: SelectSubset<T, AllergyUpdateArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Allergies.
     * @param {AllergyDeleteManyArgs} args - Arguments to filter Allergies to delete.
     * @example
     * // Delete a few Allergies
     * const { count } = await prisma.allergy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllergyDeleteManyArgs>(args?: SelectSubset<T, AllergyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Allergies
     * const allergy = await prisma.allergy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllergyUpdateManyArgs>(args: SelectSubset<T, AllergyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies and returns the data updated in the database.
     * @param {AllergyUpdateManyAndReturnArgs} args - Arguments to update many Allergies.
     * @example
     * // Update many Allergies
     * const allergy = await prisma.allergy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Allergies and only return the `id`
     * const allergyWithIdOnly = await prisma.allergy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AllergyUpdateManyAndReturnArgs>(args: SelectSubset<T, AllergyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Allergy.
     * @param {AllergyUpsertArgs} args - Arguments to update or create a Allergy.
     * @example
     * // Update or create a Allergy
     * const allergy = await prisma.allergy.upsert({
     *   create: {
     *     // ... data to create a Allergy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Allergy we want to update
     *   }
     * })
     */
    upsert<T extends AllergyUpsertArgs>(args: SelectSubset<T, AllergyUpsertArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyCountArgs} args - Arguments to filter Allergies to count.
     * @example
     * // Count the number of Allergies
     * const count = await prisma.allergy.count({
     *   where: {
     *     // ... the filter for the Allergies we want to count
     *   }
     * })
    **/
    count<T extends AllergyCountArgs>(
      args?: Subset<T, AllergyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllergyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Allergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllergyAggregateArgs>(args: Subset<T, AllergyAggregateArgs>): Prisma.PrismaPromise<GetAllergyAggregateType<T>>

    /**
     * Group by Allergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AllergyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllergyGroupByArgs['orderBy'] }
        : { orderBy?: AllergyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllergyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllergyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Allergy model
   */
  readonly fields: AllergyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Allergy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllergyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Allergy model
   */
  interface AllergyFieldRefs {
    readonly id: FieldRef<"Allergy", 'String'>
    readonly name: FieldRef<"Allergy", 'String'>
    readonly severity: FieldRef<"Allergy", 'AllergySeverity'>
    readonly reactions: FieldRef<"Allergy", 'Json'>
    readonly createdAt: FieldRef<"Allergy", 'DateTime'>
    readonly updatedAt: FieldRef<"Allergy", 'DateTime'>
    readonly petId: FieldRef<"Allergy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Allergy findUnique
   */
  export type AllergyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergy to fetch.
     */
    where: AllergyWhereUniqueInput
  }

  /**
   * Allergy findUniqueOrThrow
   */
  export type AllergyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergy to fetch.
     */
    where: AllergyWhereUniqueInput
  }

  /**
   * Allergy findFirst
   */
  export type AllergyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergy to fetch.
     */
    where?: AllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergyOrderByWithRelationInput | AllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allergies.
     */
    cursor?: AllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allergies.
     */
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * Allergy findFirstOrThrow
   */
  export type AllergyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergy to fetch.
     */
    where?: AllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergyOrderByWithRelationInput | AllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allergies.
     */
    cursor?: AllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allergies.
     */
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * Allergy findMany
   */
  export type AllergyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergies to fetch.
     */
    where?: AllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergyOrderByWithRelationInput | AllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Allergies.
     */
    cursor?: AllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * Allergy create
   */
  export type AllergyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * The data needed to create a Allergy.
     */
    data: XOR<AllergyCreateInput, AllergyUncheckedCreateInput>
  }

  /**
   * Allergy createMany
   */
  export type AllergyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Allergies.
     */
    data: AllergyCreateManyInput | AllergyCreateManyInput[]
  }

  /**
   * Allergy createManyAndReturn
   */
  export type AllergyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * The data used to create many Allergies.
     */
    data: AllergyCreateManyInput | AllergyCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Allergy update
   */
  export type AllergyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * The data needed to update a Allergy.
     */
    data: XOR<AllergyUpdateInput, AllergyUncheckedUpdateInput>
    /**
     * Choose, which Allergy to update.
     */
    where: AllergyWhereUniqueInput
  }

  /**
   * Allergy updateMany
   */
  export type AllergyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Allergies.
     */
    data: XOR<AllergyUpdateManyMutationInput, AllergyUncheckedUpdateManyInput>
    /**
     * Filter which Allergies to update
     */
    where?: AllergyWhereInput
    /**
     * Limit how many Allergies to update.
     */
    limit?: number
  }

  /**
   * Allergy updateManyAndReturn
   */
  export type AllergyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * The data used to update Allergies.
     */
    data: XOR<AllergyUpdateManyMutationInput, AllergyUncheckedUpdateManyInput>
    /**
     * Filter which Allergies to update
     */
    where?: AllergyWhereInput
    /**
     * Limit how many Allergies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Allergy upsert
   */
  export type AllergyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * The filter to search for the Allergy to update in case it exists.
     */
    where: AllergyWhereUniqueInput
    /**
     * In case the Allergy found by the `where` argument doesn't exist, create a new Allergy with this data.
     */
    create: XOR<AllergyCreateInput, AllergyUncheckedCreateInput>
    /**
     * In case the Allergy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllergyUpdateInput, AllergyUncheckedUpdateInput>
  }

  /**
   * Allergy delete
   */
  export type AllergyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter which Allergy to delete.
     */
    where: AllergyWhereUniqueInput
  }

  /**
   * Allergy deleteMany
   */
  export type AllergyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allergies to delete
     */
    where?: AllergyWhereInput
    /**
     * Limit how many Allergies to delete.
     */
    limit?: number
  }

  /**
   * Allergy without action
   */
  export type AllergyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
  }


  /**
   * Model LabReport
   */

  export type AggregateLabReport = {
    _count: LabReportCountAggregateOutputType | null
    _min: LabReportMinAggregateOutputType | null
    _max: LabReportMaxAggregateOutputType | null
  }

  export type LabReportMinAggregateOutputType = {
    id: string | null
    name: string | null
    dosage: string | null
    instructions: string | null
    createdAt: Date | null
    updatedAt: Date | null
    petId: string | null
  }

  export type LabReportMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dosage: string | null
    instructions: string | null
    createdAt: Date | null
    updatedAt: Date | null
    petId: string | null
  }

  export type LabReportCountAggregateOutputType = {
    id: number
    name: number
    dosage: number
    instructions: number
    createdAt: number
    updatedAt: number
    petId: number
    _all: number
  }


  export type LabReportMinAggregateInputType = {
    id?: true
    name?: true
    dosage?: true
    instructions?: true
    createdAt?: true
    updatedAt?: true
    petId?: true
  }

  export type LabReportMaxAggregateInputType = {
    id?: true
    name?: true
    dosage?: true
    instructions?: true
    createdAt?: true
    updatedAt?: true
    petId?: true
  }

  export type LabReportCountAggregateInputType = {
    id?: true
    name?: true
    dosage?: true
    instructions?: true
    createdAt?: true
    updatedAt?: true
    petId?: true
    _all?: true
  }

  export type LabReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabReport to aggregate.
     */
    where?: LabReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabReports to fetch.
     */
    orderBy?: LabReportOrderByWithRelationInput | LabReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabReports
    **/
    _count?: true | LabReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabReportMaxAggregateInputType
  }

  export type GetLabReportAggregateType<T extends LabReportAggregateArgs> = {
        [P in keyof T & keyof AggregateLabReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabReport[P]>
      : GetScalarType<T[P], AggregateLabReport[P]>
  }




  export type LabReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabReportWhereInput
    orderBy?: LabReportOrderByWithAggregationInput | LabReportOrderByWithAggregationInput[]
    by: LabReportScalarFieldEnum[] | LabReportScalarFieldEnum
    having?: LabReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabReportCountAggregateInputType | true
    _min?: LabReportMinAggregateInputType
    _max?: LabReportMaxAggregateInputType
  }

  export type LabReportGroupByOutputType = {
    id: string
    name: string
    dosage: string
    instructions: string
    createdAt: Date
    updatedAt: Date
    petId: string
    _count: LabReportCountAggregateOutputType | null
    _min: LabReportMinAggregateOutputType | null
    _max: LabReportMaxAggregateOutputType | null
  }

  type GetLabReportGroupByPayload<T extends LabReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabReportGroupByOutputType[P]>
            : GetScalarType<T[P], LabReportGroupByOutputType[P]>
        }
      >
    >


  export type LabReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dosage?: boolean
    instructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labReport"]>

  export type LabReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dosage?: boolean
    instructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labReport"]>

  export type LabReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dosage?: boolean
    instructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labReport"]>

  export type LabReportSelectScalar = {
    id?: boolean
    name?: boolean
    dosage?: boolean
    instructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    petId?: boolean
  }

  export type LabReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "dosage" | "instructions" | "createdAt" | "updatedAt" | "petId", ExtArgs["result"]["labReport"]>
  export type LabReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type LabReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type LabReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $LabReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabReport"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      dosage: string
      instructions: string
      createdAt: Date
      updatedAt: Date
      petId: string
    }, ExtArgs["result"]["labReport"]>
    composites: {}
  }

  type LabReportGetPayload<S extends boolean | null | undefined | LabReportDefaultArgs> = $Result.GetResult<Prisma.$LabReportPayload, S>

  type LabReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabReportCountAggregateInputType | true
    }

  export interface LabReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabReport'], meta: { name: 'LabReport' } }
    /**
     * Find zero or one LabReport that matches the filter.
     * @param {LabReportFindUniqueArgs} args - Arguments to find a LabReport
     * @example
     * // Get one LabReport
     * const labReport = await prisma.labReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabReportFindUniqueArgs>(args: SelectSubset<T, LabReportFindUniqueArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabReportFindUniqueOrThrowArgs} args - Arguments to find a LabReport
     * @example
     * // Get one LabReport
     * const labReport = await prisma.labReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabReportFindUniqueOrThrowArgs>(args: SelectSubset<T, LabReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportFindFirstArgs} args - Arguments to find a LabReport
     * @example
     * // Get one LabReport
     * const labReport = await prisma.labReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabReportFindFirstArgs>(args?: SelectSubset<T, LabReportFindFirstArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportFindFirstOrThrowArgs} args - Arguments to find a LabReport
     * @example
     * // Get one LabReport
     * const labReport = await prisma.labReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabReportFindFirstOrThrowArgs>(args?: SelectSubset<T, LabReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabReports
     * const labReports = await prisma.labReport.findMany()
     * 
     * // Get first 10 LabReports
     * const labReports = await prisma.labReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labReportWithIdOnly = await prisma.labReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabReportFindManyArgs>(args?: SelectSubset<T, LabReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabReport.
     * @param {LabReportCreateArgs} args - Arguments to create a LabReport.
     * @example
     * // Create one LabReport
     * const LabReport = await prisma.labReport.create({
     *   data: {
     *     // ... data to create a LabReport
     *   }
     * })
     * 
     */
    create<T extends LabReportCreateArgs>(args: SelectSubset<T, LabReportCreateArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabReports.
     * @param {LabReportCreateManyArgs} args - Arguments to create many LabReports.
     * @example
     * // Create many LabReports
     * const labReport = await prisma.labReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabReportCreateManyArgs>(args?: SelectSubset<T, LabReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabReports and returns the data saved in the database.
     * @param {LabReportCreateManyAndReturnArgs} args - Arguments to create many LabReports.
     * @example
     * // Create many LabReports
     * const labReport = await prisma.labReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabReports and only return the `id`
     * const labReportWithIdOnly = await prisma.labReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabReportCreateManyAndReturnArgs>(args?: SelectSubset<T, LabReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabReport.
     * @param {LabReportDeleteArgs} args - Arguments to delete one LabReport.
     * @example
     * // Delete one LabReport
     * const LabReport = await prisma.labReport.delete({
     *   where: {
     *     // ... filter to delete one LabReport
     *   }
     * })
     * 
     */
    delete<T extends LabReportDeleteArgs>(args: SelectSubset<T, LabReportDeleteArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabReport.
     * @param {LabReportUpdateArgs} args - Arguments to update one LabReport.
     * @example
     * // Update one LabReport
     * const labReport = await prisma.labReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabReportUpdateArgs>(args: SelectSubset<T, LabReportUpdateArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabReports.
     * @param {LabReportDeleteManyArgs} args - Arguments to filter LabReports to delete.
     * @example
     * // Delete a few LabReports
     * const { count } = await prisma.labReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabReportDeleteManyArgs>(args?: SelectSubset<T, LabReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabReports
     * const labReport = await prisma.labReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabReportUpdateManyArgs>(args: SelectSubset<T, LabReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabReports and returns the data updated in the database.
     * @param {LabReportUpdateManyAndReturnArgs} args - Arguments to update many LabReports.
     * @example
     * // Update many LabReports
     * const labReport = await prisma.labReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabReports and only return the `id`
     * const labReportWithIdOnly = await prisma.labReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LabReportUpdateManyAndReturnArgs>(args: SelectSubset<T, LabReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabReport.
     * @param {LabReportUpsertArgs} args - Arguments to update or create a LabReport.
     * @example
     * // Update or create a LabReport
     * const labReport = await prisma.labReport.upsert({
     *   create: {
     *     // ... data to create a LabReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabReport we want to update
     *   }
     * })
     */
    upsert<T extends LabReportUpsertArgs>(args: SelectSubset<T, LabReportUpsertArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportCountArgs} args - Arguments to filter LabReports to count.
     * @example
     * // Count the number of LabReports
     * const count = await prisma.labReport.count({
     *   where: {
     *     // ... the filter for the LabReports we want to count
     *   }
     * })
    **/
    count<T extends LabReportCountArgs>(
      args?: Subset<T, LabReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LabReportAggregateArgs>(args: Subset<T, LabReportAggregateArgs>): Prisma.PrismaPromise<GetLabReportAggregateType<T>>

    /**
     * Group by LabReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LabReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabReportGroupByArgs['orderBy'] }
        : { orderBy?: LabReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LabReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabReport model
   */
  readonly fields: LabReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LabReport model
   */
  interface LabReportFieldRefs {
    readonly id: FieldRef<"LabReport", 'String'>
    readonly name: FieldRef<"LabReport", 'String'>
    readonly dosage: FieldRef<"LabReport", 'String'>
    readonly instructions: FieldRef<"LabReport", 'String'>
    readonly createdAt: FieldRef<"LabReport", 'DateTime'>
    readonly updatedAt: FieldRef<"LabReport", 'DateTime'>
    readonly petId: FieldRef<"LabReport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LabReport findUnique
   */
  export type LabReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * Filter, which LabReport to fetch.
     */
    where: LabReportWhereUniqueInput
  }

  /**
   * LabReport findUniqueOrThrow
   */
  export type LabReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * Filter, which LabReport to fetch.
     */
    where: LabReportWhereUniqueInput
  }

  /**
   * LabReport findFirst
   */
  export type LabReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * Filter, which LabReport to fetch.
     */
    where?: LabReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabReports to fetch.
     */
    orderBy?: LabReportOrderByWithRelationInput | LabReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabReports.
     */
    cursor?: LabReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabReports.
     */
    distinct?: LabReportScalarFieldEnum | LabReportScalarFieldEnum[]
  }

  /**
   * LabReport findFirstOrThrow
   */
  export type LabReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * Filter, which LabReport to fetch.
     */
    where?: LabReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabReports to fetch.
     */
    orderBy?: LabReportOrderByWithRelationInput | LabReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabReports.
     */
    cursor?: LabReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabReports.
     */
    distinct?: LabReportScalarFieldEnum | LabReportScalarFieldEnum[]
  }

  /**
   * LabReport findMany
   */
  export type LabReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * Filter, which LabReports to fetch.
     */
    where?: LabReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabReports to fetch.
     */
    orderBy?: LabReportOrderByWithRelationInput | LabReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabReports.
     */
    cursor?: LabReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabReports.
     */
    skip?: number
    distinct?: LabReportScalarFieldEnum | LabReportScalarFieldEnum[]
  }

  /**
   * LabReport create
   */
  export type LabReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * The data needed to create a LabReport.
     */
    data: XOR<LabReportCreateInput, LabReportUncheckedCreateInput>
  }

  /**
   * LabReport createMany
   */
  export type LabReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabReports.
     */
    data: LabReportCreateManyInput | LabReportCreateManyInput[]
  }

  /**
   * LabReport createManyAndReturn
   */
  export type LabReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * The data used to create many LabReports.
     */
    data: LabReportCreateManyInput | LabReportCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabReport update
   */
  export type LabReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * The data needed to update a LabReport.
     */
    data: XOR<LabReportUpdateInput, LabReportUncheckedUpdateInput>
    /**
     * Choose, which LabReport to update.
     */
    where: LabReportWhereUniqueInput
  }

  /**
   * LabReport updateMany
   */
  export type LabReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabReports.
     */
    data: XOR<LabReportUpdateManyMutationInput, LabReportUncheckedUpdateManyInput>
    /**
     * Filter which LabReports to update
     */
    where?: LabReportWhereInput
    /**
     * Limit how many LabReports to update.
     */
    limit?: number
  }

  /**
   * LabReport updateManyAndReturn
   */
  export type LabReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * The data used to update LabReports.
     */
    data: XOR<LabReportUpdateManyMutationInput, LabReportUncheckedUpdateManyInput>
    /**
     * Filter which LabReports to update
     */
    where?: LabReportWhereInput
    /**
     * Limit how many LabReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabReport upsert
   */
  export type LabReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * The filter to search for the LabReport to update in case it exists.
     */
    where: LabReportWhereUniqueInput
    /**
     * In case the LabReport found by the `where` argument doesn't exist, create a new LabReport with this data.
     */
    create: XOR<LabReportCreateInput, LabReportUncheckedCreateInput>
    /**
     * In case the LabReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabReportUpdateInput, LabReportUncheckedUpdateInput>
  }

  /**
   * LabReport delete
   */
  export type LabReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * Filter which LabReport to delete.
     */
    where: LabReportWhereUniqueInput
  }

  /**
   * LabReport deleteMany
   */
  export type LabReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabReports to delete
     */
    where?: LabReportWhereInput
    /**
     * Limit how many LabReports to delete.
     */
    limit?: number
  }

  /**
   * LabReport without action
   */
  export type LabReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    species: 'species',
    breed: 'breed',
    birthDate: 'birthDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accountId: 'accountId'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const VaccineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    petId: 'petId'
  };

  export type VaccineScalarFieldEnum = (typeof VaccineScalarFieldEnum)[keyof typeof VaccineScalarFieldEnum]


  export const AllergyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    severity: 'severity',
    reactions: 'reactions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    petId: 'petId'
  };

  export type AllergyScalarFieldEnum = (typeof AllergyScalarFieldEnum)[keyof typeof AllergyScalarFieldEnum]


  export const LabReportScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dosage: 'dosage',
    instructions: 'instructions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    petId: 'petId'
  };

  export type LabReportScalarFieldEnum = (typeof LabReportScalarFieldEnum)[keyof typeof LabReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AnimalSpecies'
   */
  export type EnumAnimalSpeciesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalSpecies'>
    


  /**
   * Reference to a field of type 'AllergySeverity'
   */
  export type EnumAllergySeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AllergySeverity'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    email?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    name?: StringNullableFilter<"Account"> | string | null
    phoneNumber?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    pets?: PetListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pets?: PetOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    password?: StringFilter<"Account"> | string
    name?: StringNullableFilter<"Account"> | string | null
    phoneNumber?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    pets?: PetListRelationFilter
  }, "id" | "email">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    email?: StringWithAggregatesFilter<"Account"> | string
    password?: StringWithAggregatesFilter<"Account"> | string
    name?: StringNullableWithAggregatesFilter<"Account"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    species?: EnumAnimalSpeciesFilter<"Pet"> | $Enums.AnimalSpecies
    breed?: StringNullableFilter<"Pet"> | string | null
    birthDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
    accountId?: StringFilter<"Pet"> | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    vaccines?: VaccineListRelationFilter
    allergies?: AllergyListRelationFilter
    labs?: LabReportListRelationFilter
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    account?: AccountOrderByWithRelationInput
    vaccines?: VaccineOrderByRelationAggregateInput
    allergies?: AllergyOrderByRelationAggregateInput
    labs?: LabReportOrderByRelationAggregateInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    name?: StringFilter<"Pet"> | string
    species?: EnumAnimalSpeciesFilter<"Pet"> | $Enums.AnimalSpecies
    breed?: StringNullableFilter<"Pet"> | string | null
    birthDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
    accountId?: StringFilter<"Pet"> | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    vaccines?: VaccineListRelationFilter
    allergies?: AllergyListRelationFilter
    labs?: LabReportListRelationFilter
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pet"> | string
    name?: StringWithAggregatesFilter<"Pet"> | string
    species?: EnumAnimalSpeciesWithAggregatesFilter<"Pet"> | $Enums.AnimalSpecies
    breed?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Pet"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    accountId?: StringWithAggregatesFilter<"Pet"> | string
  }

  export type VaccineWhereInput = {
    AND?: VaccineWhereInput | VaccineWhereInput[]
    OR?: VaccineWhereInput[]
    NOT?: VaccineWhereInput | VaccineWhereInput[]
    id?: StringFilter<"Vaccine"> | string
    name?: StringFilter<"Vaccine"> | string
    date?: DateTimeFilter<"Vaccine"> | Date | string
    createdAt?: DateTimeFilter<"Vaccine"> | Date | string
    updatedAt?: DateTimeFilter<"Vaccine"> | Date | string
    petId?: StringFilter<"Vaccine"> | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type VaccineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
    pet?: PetOrderByWithRelationInput
  }

  export type VaccineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VaccineWhereInput | VaccineWhereInput[]
    OR?: VaccineWhereInput[]
    NOT?: VaccineWhereInput | VaccineWhereInput[]
    name?: StringFilter<"Vaccine"> | string
    date?: DateTimeFilter<"Vaccine"> | Date | string
    createdAt?: DateTimeFilter<"Vaccine"> | Date | string
    updatedAt?: DateTimeFilter<"Vaccine"> | Date | string
    petId?: StringFilter<"Vaccine"> | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id">

  export type VaccineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
    _count?: VaccineCountOrderByAggregateInput
    _max?: VaccineMaxOrderByAggregateInput
    _min?: VaccineMinOrderByAggregateInput
  }

  export type VaccineScalarWhereWithAggregatesInput = {
    AND?: VaccineScalarWhereWithAggregatesInput | VaccineScalarWhereWithAggregatesInput[]
    OR?: VaccineScalarWhereWithAggregatesInput[]
    NOT?: VaccineScalarWhereWithAggregatesInput | VaccineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vaccine"> | string
    name?: StringWithAggregatesFilter<"Vaccine"> | string
    date?: DateTimeWithAggregatesFilter<"Vaccine"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Vaccine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vaccine"> | Date | string
    petId?: StringWithAggregatesFilter<"Vaccine"> | string
  }

  export type AllergyWhereInput = {
    AND?: AllergyWhereInput | AllergyWhereInput[]
    OR?: AllergyWhereInput[]
    NOT?: AllergyWhereInput | AllergyWhereInput[]
    id?: StringFilter<"Allergy"> | string
    name?: StringFilter<"Allergy"> | string
    severity?: EnumAllergySeverityFilter<"Allergy"> | $Enums.AllergySeverity
    reactions?: JsonFilter<"Allergy">
    createdAt?: DateTimeFilter<"Allergy"> | Date | string
    updatedAt?: DateTimeFilter<"Allergy"> | Date | string
    petId?: StringFilter<"Allergy"> | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type AllergyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    reactions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
    pet?: PetOrderByWithRelationInput
  }

  export type AllergyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AllergyWhereInput | AllergyWhereInput[]
    OR?: AllergyWhereInput[]
    NOT?: AllergyWhereInput | AllergyWhereInput[]
    name?: StringFilter<"Allergy"> | string
    severity?: EnumAllergySeverityFilter<"Allergy"> | $Enums.AllergySeverity
    reactions?: JsonFilter<"Allergy">
    createdAt?: DateTimeFilter<"Allergy"> | Date | string
    updatedAt?: DateTimeFilter<"Allergy"> | Date | string
    petId?: StringFilter<"Allergy"> | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id">

  export type AllergyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    reactions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
    _count?: AllergyCountOrderByAggregateInput
    _max?: AllergyMaxOrderByAggregateInput
    _min?: AllergyMinOrderByAggregateInput
  }

  export type AllergyScalarWhereWithAggregatesInput = {
    AND?: AllergyScalarWhereWithAggregatesInput | AllergyScalarWhereWithAggregatesInput[]
    OR?: AllergyScalarWhereWithAggregatesInput[]
    NOT?: AllergyScalarWhereWithAggregatesInput | AllergyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Allergy"> | string
    name?: StringWithAggregatesFilter<"Allergy"> | string
    severity?: EnumAllergySeverityWithAggregatesFilter<"Allergy"> | $Enums.AllergySeverity
    reactions?: JsonWithAggregatesFilter<"Allergy">
    createdAt?: DateTimeWithAggregatesFilter<"Allergy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Allergy"> | Date | string
    petId?: StringWithAggregatesFilter<"Allergy"> | string
  }

  export type LabReportWhereInput = {
    AND?: LabReportWhereInput | LabReportWhereInput[]
    OR?: LabReportWhereInput[]
    NOT?: LabReportWhereInput | LabReportWhereInput[]
    id?: StringFilter<"LabReport"> | string
    name?: StringFilter<"LabReport"> | string
    dosage?: StringFilter<"LabReport"> | string
    instructions?: StringFilter<"LabReport"> | string
    createdAt?: DateTimeFilter<"LabReport"> | Date | string
    updatedAt?: DateTimeFilter<"LabReport"> | Date | string
    petId?: StringFilter<"LabReport"> | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type LabReportOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
    pet?: PetOrderByWithRelationInput
  }

  export type LabReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LabReportWhereInput | LabReportWhereInput[]
    OR?: LabReportWhereInput[]
    NOT?: LabReportWhereInput | LabReportWhereInput[]
    name?: StringFilter<"LabReport"> | string
    dosage?: StringFilter<"LabReport"> | string
    instructions?: StringFilter<"LabReport"> | string
    createdAt?: DateTimeFilter<"LabReport"> | Date | string
    updatedAt?: DateTimeFilter<"LabReport"> | Date | string
    petId?: StringFilter<"LabReport"> | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id">

  export type LabReportOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
    _count?: LabReportCountOrderByAggregateInput
    _max?: LabReportMaxOrderByAggregateInput
    _min?: LabReportMinOrderByAggregateInput
  }

  export type LabReportScalarWhereWithAggregatesInput = {
    AND?: LabReportScalarWhereWithAggregatesInput | LabReportScalarWhereWithAggregatesInput[]
    OR?: LabReportScalarWhereWithAggregatesInput[]
    NOT?: LabReportScalarWhereWithAggregatesInput | LabReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LabReport"> | string
    name?: StringWithAggregatesFilter<"LabReport"> | string
    dosage?: StringWithAggregatesFilter<"LabReport"> | string
    instructions?: StringWithAggregatesFilter<"LabReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LabReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LabReport"> | Date | string
    petId?: StringWithAggregatesFilter<"LabReport"> | string
  }

  export type AccountCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateInput = {
    id?: string
    name: string
    species: $Enums.AnimalSpecies
    breed?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutPetsInput
    vaccines?: VaccineCreateNestedManyWithoutPetInput
    allergies?: AllergyCreateNestedManyWithoutPetInput
    labs?: LabReportCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateInput = {
    id?: string
    name: string
    species: $Enums.AnimalSpecies
    breed?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    vaccines?: VaccineUncheckedCreateNestedManyWithoutPetInput
    allergies?: AllergyUncheckedCreateNestedManyWithoutPetInput
    labs?: LabReportUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutPetsNestedInput
    vaccines?: VaccineUpdateManyWithoutPetNestedInput
    allergies?: AllergyUpdateManyWithoutPetNestedInput
    labs?: LabReportUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    vaccines?: VaccineUncheckedUpdateManyWithoutPetNestedInput
    allergies?: AllergyUncheckedUpdateManyWithoutPetNestedInput
    labs?: LabReportUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyInput = {
    id?: string
    name: string
    species: $Enums.AnimalSpecies
    breed?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
  }

  export type PetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type VaccineCreateInput = {
    id?: string
    name: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    pet: PetCreateNestedOneWithoutVaccinesInput
  }

  export type VaccineUncheckedCreateInput = {
    id?: string
    name: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    petId: string
  }

  export type VaccineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutVaccinesNestedInput
  }

  export type VaccineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    petId?: StringFieldUpdateOperationsInput | string
  }

  export type VaccineCreateManyInput = {
    id?: string
    name: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    petId: string
  }

  export type VaccineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    petId?: StringFieldUpdateOperationsInput | string
  }

  export type AllergyCreateInput = {
    id?: string
    name: string
    severity: $Enums.AllergySeverity
    reactions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    pet: PetCreateNestedOneWithoutAllergiesInput
  }

  export type AllergyUncheckedCreateInput = {
    id?: string
    name: string
    severity: $Enums.AllergySeverity
    reactions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    petId: string
  }

  export type AllergyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    severity?: EnumAllergySeverityFieldUpdateOperationsInput | $Enums.AllergySeverity
    reactions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutAllergiesNestedInput
  }

  export type AllergyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    severity?: EnumAllergySeverityFieldUpdateOperationsInput | $Enums.AllergySeverity
    reactions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    petId?: StringFieldUpdateOperationsInput | string
  }

  export type AllergyCreateManyInput = {
    id?: string
    name: string
    severity: $Enums.AllergySeverity
    reactions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    petId: string
  }

  export type AllergyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    severity?: EnumAllergySeverityFieldUpdateOperationsInput | $Enums.AllergySeverity
    reactions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllergyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    severity?: EnumAllergySeverityFieldUpdateOperationsInput | $Enums.AllergySeverity
    reactions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    petId?: StringFieldUpdateOperationsInput | string
  }

  export type LabReportCreateInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pet: PetCreateNestedOneWithoutLabsInput
  }

  export type LabReportUncheckedCreateInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
    updatedAt?: Date | string
    petId: string
  }

  export type LabReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutLabsNestedInput
  }

  export type LabReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    petId?: StringFieldUpdateOperationsInput | string
  }

  export type LabReportCreateManyInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
    updatedAt?: Date | string
    petId: string
  }

  export type LabReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    petId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAnimalSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalSpecies | EnumAnimalSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalSpecies[]
    notIn?: $Enums.AnimalSpecies[]
    not?: NestedEnumAnimalSpeciesFilter<$PrismaModel> | $Enums.AnimalSpecies
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type VaccineListRelationFilter = {
    every?: VaccineWhereInput
    some?: VaccineWhereInput
    none?: VaccineWhereInput
  }

  export type AllergyListRelationFilter = {
    every?: AllergyWhereInput
    some?: AllergyWhereInput
    none?: AllergyWhereInput
  }

  export type LabReportListRelationFilter = {
    every?: LabReportWhereInput
    some?: LabReportWhereInput
    none?: LabReportWhereInput
  }

  export type VaccineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AllergyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    birthDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    birthDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    birthDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
  }

  export type EnumAnimalSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalSpecies | EnumAnimalSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalSpecies[]
    notIn?: $Enums.AnimalSpecies[]
    not?: NestedEnumAnimalSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.AnimalSpecies
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalSpeciesFilter<$PrismaModel>
    _max?: NestedEnumAnimalSpeciesFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PetScalarRelationFilter = {
    is?: PetWhereInput
    isNot?: PetWhereInput
  }

  export type VaccineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
  }

  export type VaccineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
  }

  export type VaccineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
  }

  export type EnumAllergySeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.AllergySeverity | EnumAllergySeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AllergySeverity[]
    notIn?: $Enums.AllergySeverity[]
    not?: NestedEnumAllergySeverityFilter<$PrismaModel> | $Enums.AllergySeverity
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AllergyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    reactions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
  }

  export type AllergyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
  }

  export type AllergyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
  }

  export type EnumAllergySeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AllergySeverity | EnumAllergySeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AllergySeverity[]
    notIn?: $Enums.AllergySeverity[]
    not?: NestedEnumAllergySeverityWithAggregatesFilter<$PrismaModel> | $Enums.AllergySeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAllergySeverityFilter<$PrismaModel>
    _max?: NestedEnumAllergySeverityFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type LabReportCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
  }

  export type LabReportMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
  }

  export type LabReportMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    petId?: SortOrder
  }

  export type PetCreateNestedManyWithoutAccountInput = {
    create?: XOR<PetCreateWithoutAccountInput, PetUncheckedCreateWithoutAccountInput> | PetCreateWithoutAccountInput[] | PetUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PetCreateOrConnectWithoutAccountInput | PetCreateOrConnectWithoutAccountInput[]
    createMany?: PetCreateManyAccountInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<PetCreateWithoutAccountInput, PetUncheckedCreateWithoutAccountInput> | PetCreateWithoutAccountInput[] | PetUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PetCreateOrConnectWithoutAccountInput | PetCreateOrConnectWithoutAccountInput[]
    createMany?: PetCreateManyAccountInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PetUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PetCreateWithoutAccountInput, PetUncheckedCreateWithoutAccountInput> | PetCreateWithoutAccountInput[] | PetUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PetCreateOrConnectWithoutAccountInput | PetCreateOrConnectWithoutAccountInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutAccountInput | PetUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PetCreateManyAccountInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutAccountInput | PetUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PetUpdateManyWithWhereWithoutAccountInput | PetUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PetCreateWithoutAccountInput, PetUncheckedCreateWithoutAccountInput> | PetCreateWithoutAccountInput[] | PetUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PetCreateOrConnectWithoutAccountInput | PetCreateOrConnectWithoutAccountInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutAccountInput | PetUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PetCreateManyAccountInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutAccountInput | PetUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PetUpdateManyWithWhereWithoutAccountInput | PetUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutPetsInput = {
    create?: XOR<AccountCreateWithoutPetsInput, AccountUncheckedCreateWithoutPetsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPetsInput
    connect?: AccountWhereUniqueInput
  }

  export type VaccineCreateNestedManyWithoutPetInput = {
    create?: XOR<VaccineCreateWithoutPetInput, VaccineUncheckedCreateWithoutPetInput> | VaccineCreateWithoutPetInput[] | VaccineUncheckedCreateWithoutPetInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutPetInput | VaccineCreateOrConnectWithoutPetInput[]
    createMany?: VaccineCreateManyPetInputEnvelope
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
  }

  export type AllergyCreateNestedManyWithoutPetInput = {
    create?: XOR<AllergyCreateWithoutPetInput, AllergyUncheckedCreateWithoutPetInput> | AllergyCreateWithoutPetInput[] | AllergyUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AllergyCreateOrConnectWithoutPetInput | AllergyCreateOrConnectWithoutPetInput[]
    createMany?: AllergyCreateManyPetInputEnvelope
    connect?: AllergyWhereUniqueInput | AllergyWhereUniqueInput[]
  }

  export type LabReportCreateNestedManyWithoutPetInput = {
    create?: XOR<LabReportCreateWithoutPetInput, LabReportUncheckedCreateWithoutPetInput> | LabReportCreateWithoutPetInput[] | LabReportUncheckedCreateWithoutPetInput[]
    connectOrCreate?: LabReportCreateOrConnectWithoutPetInput | LabReportCreateOrConnectWithoutPetInput[]
    createMany?: LabReportCreateManyPetInputEnvelope
    connect?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
  }

  export type VaccineUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<VaccineCreateWithoutPetInput, VaccineUncheckedCreateWithoutPetInput> | VaccineCreateWithoutPetInput[] | VaccineUncheckedCreateWithoutPetInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutPetInput | VaccineCreateOrConnectWithoutPetInput[]
    createMany?: VaccineCreateManyPetInputEnvelope
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
  }

  export type AllergyUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<AllergyCreateWithoutPetInput, AllergyUncheckedCreateWithoutPetInput> | AllergyCreateWithoutPetInput[] | AllergyUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AllergyCreateOrConnectWithoutPetInput | AllergyCreateOrConnectWithoutPetInput[]
    createMany?: AllergyCreateManyPetInputEnvelope
    connect?: AllergyWhereUniqueInput | AllergyWhereUniqueInput[]
  }

  export type LabReportUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<LabReportCreateWithoutPetInput, LabReportUncheckedCreateWithoutPetInput> | LabReportCreateWithoutPetInput[] | LabReportUncheckedCreateWithoutPetInput[]
    connectOrCreate?: LabReportCreateOrConnectWithoutPetInput | LabReportCreateOrConnectWithoutPetInput[]
    createMany?: LabReportCreateManyPetInputEnvelope
    connect?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
  }

  export type EnumAnimalSpeciesFieldUpdateOperationsInput = {
    set?: $Enums.AnimalSpecies
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateOneWithoutPetsNestedInput = {
    create?: XOR<AccountCreateWithoutPetsInput, AccountUncheckedCreateWithoutPetsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPetsInput
    upsert?: AccountUpsertWithoutPetsInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutPetsInput, AccountUpdateWithoutPetsInput>, AccountUncheckedUpdateWithoutPetsInput>
  }

  export type VaccineUpdateManyWithoutPetNestedInput = {
    create?: XOR<VaccineCreateWithoutPetInput, VaccineUncheckedCreateWithoutPetInput> | VaccineCreateWithoutPetInput[] | VaccineUncheckedCreateWithoutPetInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutPetInput | VaccineCreateOrConnectWithoutPetInput[]
    upsert?: VaccineUpsertWithWhereUniqueWithoutPetInput | VaccineUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: VaccineCreateManyPetInputEnvelope
    set?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    disconnect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    delete?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    update?: VaccineUpdateWithWhereUniqueWithoutPetInput | VaccineUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: VaccineUpdateManyWithWhereWithoutPetInput | VaccineUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
  }

  export type AllergyUpdateManyWithoutPetNestedInput = {
    create?: XOR<AllergyCreateWithoutPetInput, AllergyUncheckedCreateWithoutPetInput> | AllergyCreateWithoutPetInput[] | AllergyUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AllergyCreateOrConnectWithoutPetInput | AllergyCreateOrConnectWithoutPetInput[]
    upsert?: AllergyUpsertWithWhereUniqueWithoutPetInput | AllergyUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: AllergyCreateManyPetInputEnvelope
    set?: AllergyWhereUniqueInput | AllergyWhereUniqueInput[]
    disconnect?: AllergyWhereUniqueInput | AllergyWhereUniqueInput[]
    delete?: AllergyWhereUniqueInput | AllergyWhereUniqueInput[]
    connect?: AllergyWhereUniqueInput | AllergyWhereUniqueInput[]
    update?: AllergyUpdateWithWhereUniqueWithoutPetInput | AllergyUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: AllergyUpdateManyWithWhereWithoutPetInput | AllergyUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: AllergyScalarWhereInput | AllergyScalarWhereInput[]
  }

  export type LabReportUpdateManyWithoutPetNestedInput = {
    create?: XOR<LabReportCreateWithoutPetInput, LabReportUncheckedCreateWithoutPetInput> | LabReportCreateWithoutPetInput[] | LabReportUncheckedCreateWithoutPetInput[]
    connectOrCreate?: LabReportCreateOrConnectWithoutPetInput | LabReportCreateOrConnectWithoutPetInput[]
    upsert?: LabReportUpsertWithWhereUniqueWithoutPetInput | LabReportUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: LabReportCreateManyPetInputEnvelope
    set?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    disconnect?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    delete?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    connect?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    update?: LabReportUpdateWithWhereUniqueWithoutPetInput | LabReportUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: LabReportUpdateManyWithWhereWithoutPetInput | LabReportUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: LabReportScalarWhereInput | LabReportScalarWhereInput[]
  }

  export type VaccineUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<VaccineCreateWithoutPetInput, VaccineUncheckedCreateWithoutPetInput> | VaccineCreateWithoutPetInput[] | VaccineUncheckedCreateWithoutPetInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutPetInput | VaccineCreateOrConnectWithoutPetInput[]
    upsert?: VaccineUpsertWithWhereUniqueWithoutPetInput | VaccineUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: VaccineCreateManyPetInputEnvelope
    set?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    disconnect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    delete?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    update?: VaccineUpdateWithWhereUniqueWithoutPetInput | VaccineUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: VaccineUpdateManyWithWhereWithoutPetInput | VaccineUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
  }

  export type AllergyUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<AllergyCreateWithoutPetInput, AllergyUncheckedCreateWithoutPetInput> | AllergyCreateWithoutPetInput[] | AllergyUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AllergyCreateOrConnectWithoutPetInput | AllergyCreateOrConnectWithoutPetInput[]
    upsert?: AllergyUpsertWithWhereUniqueWithoutPetInput | AllergyUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: AllergyCreateManyPetInputEnvelope
    set?: AllergyWhereUniqueInput | AllergyWhereUniqueInput[]
    disconnect?: AllergyWhereUniqueInput | AllergyWhereUniqueInput[]
    delete?: AllergyWhereUniqueInput | AllergyWhereUniqueInput[]
    connect?: AllergyWhereUniqueInput | AllergyWhereUniqueInput[]
    update?: AllergyUpdateWithWhereUniqueWithoutPetInput | AllergyUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: AllergyUpdateManyWithWhereWithoutPetInput | AllergyUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: AllergyScalarWhereInput | AllergyScalarWhereInput[]
  }

  export type LabReportUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<LabReportCreateWithoutPetInput, LabReportUncheckedCreateWithoutPetInput> | LabReportCreateWithoutPetInput[] | LabReportUncheckedCreateWithoutPetInput[]
    connectOrCreate?: LabReportCreateOrConnectWithoutPetInput | LabReportCreateOrConnectWithoutPetInput[]
    upsert?: LabReportUpsertWithWhereUniqueWithoutPetInput | LabReportUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: LabReportCreateManyPetInputEnvelope
    set?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    disconnect?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    delete?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    connect?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    update?: LabReportUpdateWithWhereUniqueWithoutPetInput | LabReportUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: LabReportUpdateManyWithWhereWithoutPetInput | LabReportUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: LabReportScalarWhereInput | LabReportScalarWhereInput[]
  }

  export type PetCreateNestedOneWithoutVaccinesInput = {
    create?: XOR<PetCreateWithoutVaccinesInput, PetUncheckedCreateWithoutVaccinesInput>
    connectOrCreate?: PetCreateOrConnectWithoutVaccinesInput
    connect?: PetWhereUniqueInput
  }

  export type PetUpdateOneRequiredWithoutVaccinesNestedInput = {
    create?: XOR<PetCreateWithoutVaccinesInput, PetUncheckedCreateWithoutVaccinesInput>
    connectOrCreate?: PetCreateOrConnectWithoutVaccinesInput
    upsert?: PetUpsertWithoutVaccinesInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutVaccinesInput, PetUpdateWithoutVaccinesInput>, PetUncheckedUpdateWithoutVaccinesInput>
  }

  export type PetCreateNestedOneWithoutAllergiesInput = {
    create?: XOR<PetCreateWithoutAllergiesInput, PetUncheckedCreateWithoutAllergiesInput>
    connectOrCreate?: PetCreateOrConnectWithoutAllergiesInput
    connect?: PetWhereUniqueInput
  }

  export type EnumAllergySeverityFieldUpdateOperationsInput = {
    set?: $Enums.AllergySeverity
  }

  export type PetUpdateOneRequiredWithoutAllergiesNestedInput = {
    create?: XOR<PetCreateWithoutAllergiesInput, PetUncheckedCreateWithoutAllergiesInput>
    connectOrCreate?: PetCreateOrConnectWithoutAllergiesInput
    upsert?: PetUpsertWithoutAllergiesInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutAllergiesInput, PetUpdateWithoutAllergiesInput>, PetUncheckedUpdateWithoutAllergiesInput>
  }

  export type PetCreateNestedOneWithoutLabsInput = {
    create?: XOR<PetCreateWithoutLabsInput, PetUncheckedCreateWithoutLabsInput>
    connectOrCreate?: PetCreateOrConnectWithoutLabsInput
    connect?: PetWhereUniqueInput
  }

  export type PetUpdateOneRequiredWithoutLabsNestedInput = {
    create?: XOR<PetCreateWithoutLabsInput, PetUncheckedCreateWithoutLabsInput>
    connectOrCreate?: PetCreateOrConnectWithoutLabsInput
    upsert?: PetUpsertWithoutLabsInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutLabsInput, PetUpdateWithoutLabsInput>, PetUncheckedUpdateWithoutLabsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAnimalSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalSpecies | EnumAnimalSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalSpecies[]
    notIn?: $Enums.AnimalSpecies[]
    not?: NestedEnumAnimalSpeciesFilter<$PrismaModel> | $Enums.AnimalSpecies
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAnimalSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalSpecies | EnumAnimalSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalSpecies[]
    notIn?: $Enums.AnimalSpecies[]
    not?: NestedEnumAnimalSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.AnimalSpecies
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalSpeciesFilter<$PrismaModel>
    _max?: NestedEnumAnimalSpeciesFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAllergySeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.AllergySeverity | EnumAllergySeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AllergySeverity[]
    notIn?: $Enums.AllergySeverity[]
    not?: NestedEnumAllergySeverityFilter<$PrismaModel> | $Enums.AllergySeverity
  }

  export type NestedEnumAllergySeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AllergySeverity | EnumAllergySeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AllergySeverity[]
    notIn?: $Enums.AllergySeverity[]
    not?: NestedEnumAllergySeverityWithAggregatesFilter<$PrismaModel> | $Enums.AllergySeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAllergySeverityFilter<$PrismaModel>
    _max?: NestedEnumAllergySeverityFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PetCreateWithoutAccountInput = {
    id?: string
    name: string
    species: $Enums.AnimalSpecies
    breed?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vaccines?: VaccineCreateNestedManyWithoutPetInput
    allergies?: AllergyCreateNestedManyWithoutPetInput
    labs?: LabReportCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    species: $Enums.AnimalSpecies
    breed?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vaccines?: VaccineUncheckedCreateNestedManyWithoutPetInput
    allergies?: AllergyUncheckedCreateNestedManyWithoutPetInput
    labs?: LabReportUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutAccountInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutAccountInput, PetUncheckedCreateWithoutAccountInput>
  }

  export type PetCreateManyAccountInputEnvelope = {
    data: PetCreateManyAccountInput | PetCreateManyAccountInput[]
  }

  export type PetUpsertWithWhereUniqueWithoutAccountInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutAccountInput, PetUncheckedUpdateWithoutAccountInput>
    create: XOR<PetCreateWithoutAccountInput, PetUncheckedCreateWithoutAccountInput>
  }

  export type PetUpdateWithWhereUniqueWithoutAccountInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutAccountInput, PetUncheckedUpdateWithoutAccountInput>
  }

  export type PetUpdateManyWithWhereWithoutAccountInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutAccountInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    species?: EnumAnimalSpeciesFilter<"Pet"> | $Enums.AnimalSpecies
    breed?: StringNullableFilter<"Pet"> | string | null
    birthDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
    accountId?: StringFilter<"Pet"> | string
  }

  export type AccountCreateWithoutPetsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutPetsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutPetsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutPetsInput, AccountUncheckedCreateWithoutPetsInput>
  }

  export type VaccineCreateWithoutPetInput = {
    id?: string
    name: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaccineUncheckedCreateWithoutPetInput = {
    id?: string
    name: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaccineCreateOrConnectWithoutPetInput = {
    where: VaccineWhereUniqueInput
    create: XOR<VaccineCreateWithoutPetInput, VaccineUncheckedCreateWithoutPetInput>
  }

  export type VaccineCreateManyPetInputEnvelope = {
    data: VaccineCreateManyPetInput | VaccineCreateManyPetInput[]
  }

  export type AllergyCreateWithoutPetInput = {
    id?: string
    name: string
    severity: $Enums.AllergySeverity
    reactions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AllergyUncheckedCreateWithoutPetInput = {
    id?: string
    name: string
    severity: $Enums.AllergySeverity
    reactions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AllergyCreateOrConnectWithoutPetInput = {
    where: AllergyWhereUniqueInput
    create: XOR<AllergyCreateWithoutPetInput, AllergyUncheckedCreateWithoutPetInput>
  }

  export type AllergyCreateManyPetInputEnvelope = {
    data: AllergyCreateManyPetInput | AllergyCreateManyPetInput[]
  }

  export type LabReportCreateWithoutPetInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabReportUncheckedCreateWithoutPetInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabReportCreateOrConnectWithoutPetInput = {
    where: LabReportWhereUniqueInput
    create: XOR<LabReportCreateWithoutPetInput, LabReportUncheckedCreateWithoutPetInput>
  }

  export type LabReportCreateManyPetInputEnvelope = {
    data: LabReportCreateManyPetInput | LabReportCreateManyPetInput[]
  }

  export type AccountUpsertWithoutPetsInput = {
    update: XOR<AccountUpdateWithoutPetsInput, AccountUncheckedUpdateWithoutPetsInput>
    create: XOR<AccountCreateWithoutPetsInput, AccountUncheckedCreateWithoutPetsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutPetsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutPetsInput, AccountUncheckedUpdateWithoutPetsInput>
  }

  export type AccountUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccineUpsertWithWhereUniqueWithoutPetInput = {
    where: VaccineWhereUniqueInput
    update: XOR<VaccineUpdateWithoutPetInput, VaccineUncheckedUpdateWithoutPetInput>
    create: XOR<VaccineCreateWithoutPetInput, VaccineUncheckedCreateWithoutPetInput>
  }

  export type VaccineUpdateWithWhereUniqueWithoutPetInput = {
    where: VaccineWhereUniqueInput
    data: XOR<VaccineUpdateWithoutPetInput, VaccineUncheckedUpdateWithoutPetInput>
  }

  export type VaccineUpdateManyWithWhereWithoutPetInput = {
    where: VaccineScalarWhereInput
    data: XOR<VaccineUpdateManyMutationInput, VaccineUncheckedUpdateManyWithoutPetInput>
  }

  export type VaccineScalarWhereInput = {
    AND?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
    OR?: VaccineScalarWhereInput[]
    NOT?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
    id?: StringFilter<"Vaccine"> | string
    name?: StringFilter<"Vaccine"> | string
    date?: DateTimeFilter<"Vaccine"> | Date | string
    createdAt?: DateTimeFilter<"Vaccine"> | Date | string
    updatedAt?: DateTimeFilter<"Vaccine"> | Date | string
    petId?: StringFilter<"Vaccine"> | string
  }

  export type AllergyUpsertWithWhereUniqueWithoutPetInput = {
    where: AllergyWhereUniqueInput
    update: XOR<AllergyUpdateWithoutPetInput, AllergyUncheckedUpdateWithoutPetInput>
    create: XOR<AllergyCreateWithoutPetInput, AllergyUncheckedCreateWithoutPetInput>
  }

  export type AllergyUpdateWithWhereUniqueWithoutPetInput = {
    where: AllergyWhereUniqueInput
    data: XOR<AllergyUpdateWithoutPetInput, AllergyUncheckedUpdateWithoutPetInput>
  }

  export type AllergyUpdateManyWithWhereWithoutPetInput = {
    where: AllergyScalarWhereInput
    data: XOR<AllergyUpdateManyMutationInput, AllergyUncheckedUpdateManyWithoutPetInput>
  }

  export type AllergyScalarWhereInput = {
    AND?: AllergyScalarWhereInput | AllergyScalarWhereInput[]
    OR?: AllergyScalarWhereInput[]
    NOT?: AllergyScalarWhereInput | AllergyScalarWhereInput[]
    id?: StringFilter<"Allergy"> | string
    name?: StringFilter<"Allergy"> | string
    severity?: EnumAllergySeverityFilter<"Allergy"> | $Enums.AllergySeverity
    reactions?: JsonFilter<"Allergy">
    createdAt?: DateTimeFilter<"Allergy"> | Date | string
    updatedAt?: DateTimeFilter<"Allergy"> | Date | string
    petId?: StringFilter<"Allergy"> | string
  }

  export type LabReportUpsertWithWhereUniqueWithoutPetInput = {
    where: LabReportWhereUniqueInput
    update: XOR<LabReportUpdateWithoutPetInput, LabReportUncheckedUpdateWithoutPetInput>
    create: XOR<LabReportCreateWithoutPetInput, LabReportUncheckedCreateWithoutPetInput>
  }

  export type LabReportUpdateWithWhereUniqueWithoutPetInput = {
    where: LabReportWhereUniqueInput
    data: XOR<LabReportUpdateWithoutPetInput, LabReportUncheckedUpdateWithoutPetInput>
  }

  export type LabReportUpdateManyWithWhereWithoutPetInput = {
    where: LabReportScalarWhereInput
    data: XOR<LabReportUpdateManyMutationInput, LabReportUncheckedUpdateManyWithoutPetInput>
  }

  export type LabReportScalarWhereInput = {
    AND?: LabReportScalarWhereInput | LabReportScalarWhereInput[]
    OR?: LabReportScalarWhereInput[]
    NOT?: LabReportScalarWhereInput | LabReportScalarWhereInput[]
    id?: StringFilter<"LabReport"> | string
    name?: StringFilter<"LabReport"> | string
    dosage?: StringFilter<"LabReport"> | string
    instructions?: StringFilter<"LabReport"> | string
    createdAt?: DateTimeFilter<"LabReport"> | Date | string
    updatedAt?: DateTimeFilter<"LabReport"> | Date | string
    petId?: StringFilter<"LabReport"> | string
  }

  export type PetCreateWithoutVaccinesInput = {
    id?: string
    name: string
    species: $Enums.AnimalSpecies
    breed?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutPetsInput
    allergies?: AllergyCreateNestedManyWithoutPetInput
    labs?: LabReportCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutVaccinesInput = {
    id?: string
    name: string
    species: $Enums.AnimalSpecies
    breed?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    allergies?: AllergyUncheckedCreateNestedManyWithoutPetInput
    labs?: LabReportUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutVaccinesInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutVaccinesInput, PetUncheckedCreateWithoutVaccinesInput>
  }

  export type PetUpsertWithoutVaccinesInput = {
    update: XOR<PetUpdateWithoutVaccinesInput, PetUncheckedUpdateWithoutVaccinesInput>
    create: XOR<PetCreateWithoutVaccinesInput, PetUncheckedCreateWithoutVaccinesInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutVaccinesInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutVaccinesInput, PetUncheckedUpdateWithoutVaccinesInput>
  }

  export type PetUpdateWithoutVaccinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutPetsNestedInput
    allergies?: AllergyUpdateManyWithoutPetNestedInput
    labs?: LabReportUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutVaccinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    allergies?: AllergyUncheckedUpdateManyWithoutPetNestedInput
    labs?: LabReportUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateWithoutAllergiesInput = {
    id?: string
    name: string
    species: $Enums.AnimalSpecies
    breed?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutPetsInput
    vaccines?: VaccineCreateNestedManyWithoutPetInput
    labs?: LabReportCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutAllergiesInput = {
    id?: string
    name: string
    species: $Enums.AnimalSpecies
    breed?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    vaccines?: VaccineUncheckedCreateNestedManyWithoutPetInput
    labs?: LabReportUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutAllergiesInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutAllergiesInput, PetUncheckedCreateWithoutAllergiesInput>
  }

  export type PetUpsertWithoutAllergiesInput = {
    update: XOR<PetUpdateWithoutAllergiesInput, PetUncheckedUpdateWithoutAllergiesInput>
    create: XOR<PetCreateWithoutAllergiesInput, PetUncheckedCreateWithoutAllergiesInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutAllergiesInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutAllergiesInput, PetUncheckedUpdateWithoutAllergiesInput>
  }

  export type PetUpdateWithoutAllergiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutPetsNestedInput
    vaccines?: VaccineUpdateManyWithoutPetNestedInput
    labs?: LabReportUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutAllergiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    vaccines?: VaccineUncheckedUpdateManyWithoutPetNestedInput
    labs?: LabReportUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateWithoutLabsInput = {
    id?: string
    name: string
    species: $Enums.AnimalSpecies
    breed?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutPetsInput
    vaccines?: VaccineCreateNestedManyWithoutPetInput
    allergies?: AllergyCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutLabsInput = {
    id?: string
    name: string
    species: $Enums.AnimalSpecies
    breed?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    vaccines?: VaccineUncheckedCreateNestedManyWithoutPetInput
    allergies?: AllergyUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutLabsInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutLabsInput, PetUncheckedCreateWithoutLabsInput>
  }

  export type PetUpsertWithoutLabsInput = {
    update: XOR<PetUpdateWithoutLabsInput, PetUncheckedUpdateWithoutLabsInput>
    create: XOR<PetCreateWithoutLabsInput, PetUncheckedCreateWithoutLabsInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutLabsInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutLabsInput, PetUncheckedUpdateWithoutLabsInput>
  }

  export type PetUpdateWithoutLabsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutPetsNestedInput
    vaccines?: VaccineUpdateManyWithoutPetNestedInput
    allergies?: AllergyUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutLabsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    vaccines?: VaccineUncheckedUpdateManyWithoutPetNestedInput
    allergies?: AllergyUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyAccountInput = {
    id?: string
    name: string
    species: $Enums.AnimalSpecies
    breed?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vaccines?: VaccineUpdateManyWithoutPetNestedInput
    allergies?: AllergyUpdateManyWithoutPetNestedInput
    labs?: LabReportUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vaccines?: VaccineUncheckedUpdateManyWithoutPetNestedInput
    allergies?: AllergyUncheckedUpdateManyWithoutPetNestedInput
    labs?: LabReportUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumAnimalSpeciesFieldUpdateOperationsInput | $Enums.AnimalSpecies
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccineCreateManyPetInput = {
    id?: string
    name: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AllergyCreateManyPetInput = {
    id?: string
    name: string
    severity: $Enums.AllergySeverity
    reactions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabReportCreateManyPetInput = {
    id?: string
    name: string
    dosage: string
    instructions: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaccineUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccineUncheckedUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccineUncheckedUpdateManyWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllergyUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    severity?: EnumAllergySeverityFieldUpdateOperationsInput | $Enums.AllergySeverity
    reactions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllergyUncheckedUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    severity?: EnumAllergySeverityFieldUpdateOperationsInput | $Enums.AllergySeverity
    reactions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllergyUncheckedUpdateManyWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    severity?: EnumAllergySeverityFieldUpdateOperationsInput | $Enums.AllergySeverity
    reactions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabReportUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabReportUncheckedUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabReportUncheckedUpdateManyWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
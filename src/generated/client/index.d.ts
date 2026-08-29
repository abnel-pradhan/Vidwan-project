
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model University
 * 
 */
export type University = $Result.DefaultSelection<Prisma.$UniversityPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FacultyInvite
 * 
 */
export type FacultyInvite = $Result.DefaultSelection<Prisma.$FacultyInvitePayload>
/**
 * Model FacultyProfile
 * 
 */
export type FacultyProfile = $Result.DefaultSelection<Prisma.$FacultyProfilePayload>
/**
 * Model Publication
 * 
 */
export type Publication = $Result.DefaultSelection<Prisma.$PublicationPayload>
/**
 * Model PublicationAuthor
 * 
 */
export type PublicationAuthor = $Result.DefaultSelection<Prisma.$PublicationAuthorPayload>
/**
 * Model NaacCriterion
 * 
 */
export type NaacCriterion = $Result.DefaultSelection<Prisma.$NaacCriterionPayload>
/**
 * Model NaacPublicationMapping
 * 
 */
export type NaacPublicationMapping = $Result.DefaultSelection<Prisma.$NaacPublicationMappingPayload>
/**
 * Model NaacReport
 * 
 */
export type NaacReport = $Result.DefaultSelection<Prisma.$NaacReportPayload>
/**
 * Model BackgroundTask
 * 
 */
export type BackgroundTask = $Result.DefaultSelection<Prisma.$BackgroundTaskPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  UNIVERSITY_ADMIN: 'UNIVERSITY_ADMIN',
  DEPT_HEAD: 'DEPT_HEAD',
  FACULTY: 'FACULTY'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const InviteStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  EXPIRED: 'EXPIRED',
  REVOKED: 'REVOKED'
};

export type InviteStatus = (typeof InviteStatus)[keyof typeof InviteStatus]


export const PublicationStatus: {
  PENDING_APPROVAL: 'PENDING_APPROVAL',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type PublicationStatus = (typeof PublicationStatus)[keyof typeof PublicationStatus]


export const TaskType: {
  OPENALEX_SYNC: 'OPENALEX_SYNC',
  SCRAPER_RUN: 'SCRAPER_RUN',
  NAAC_REPORT_GEN: 'NAAC_REPORT_GEN',
  BULK_INVITE: 'BULK_INVITE'
};

export type TaskType = (typeof TaskType)[keyof typeof TaskType]


export const TaskStatus: {
  QUEUED: 'QUEUED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type InviteStatus = $Enums.InviteStatus

export const InviteStatus: typeof $Enums.InviteStatus

export type PublicationStatus = $Enums.PublicationStatus

export const PublicationStatus: typeof $Enums.PublicationStatus

export type TaskType = $Enums.TaskType

export const TaskType: typeof $Enums.TaskType

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Universities
 * const universities = await prisma.university.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Universities
   * const universities = await prisma.university.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.university`: Exposes CRUD operations for the **University** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Universities
    * const universities = await prisma.university.findMany()
    * ```
    */
  get university(): Prisma.UniversityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facultyInvite`: Exposes CRUD operations for the **FacultyInvite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacultyInvites
    * const facultyInvites = await prisma.facultyInvite.findMany()
    * ```
    */
  get facultyInvite(): Prisma.FacultyInviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facultyProfile`: Exposes CRUD operations for the **FacultyProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacultyProfiles
    * const facultyProfiles = await prisma.facultyProfile.findMany()
    * ```
    */
  get facultyProfile(): Prisma.FacultyProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publication`: Exposes CRUD operations for the **Publication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publications
    * const publications = await prisma.publication.findMany()
    * ```
    */
  get publication(): Prisma.PublicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicationAuthor`: Exposes CRUD operations for the **PublicationAuthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicationAuthors
    * const publicationAuthors = await prisma.publicationAuthor.findMany()
    * ```
    */
  get publicationAuthor(): Prisma.PublicationAuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.naacCriterion`: Exposes CRUD operations for the **NaacCriterion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NaacCriteria
    * const naacCriteria = await prisma.naacCriterion.findMany()
    * ```
    */
  get naacCriterion(): Prisma.NaacCriterionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.naacPublicationMapping`: Exposes CRUD operations for the **NaacPublicationMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NaacPublicationMappings
    * const naacPublicationMappings = await prisma.naacPublicationMapping.findMany()
    * ```
    */
  get naacPublicationMapping(): Prisma.NaacPublicationMappingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.naacReport`: Exposes CRUD operations for the **NaacReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NaacReports
    * const naacReports = await prisma.naacReport.findMany()
    * ```
    */
  get naacReport(): Prisma.NaacReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.backgroundTask`: Exposes CRUD operations for the **BackgroundTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BackgroundTasks
    * const backgroundTasks = await prisma.backgroundTask.findMany()
    * ```
    */
  get backgroundTask(): Prisma.BackgroundTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    University: 'University',
    Department: 'Department',
    User: 'User',
    FacultyInvite: 'FacultyInvite',
    FacultyProfile: 'FacultyProfile',
    Publication: 'Publication',
    PublicationAuthor: 'PublicationAuthor',
    NaacCriterion: 'NaacCriterion',
    NaacPublicationMapping: 'NaacPublicationMapping',
    NaacReport: 'NaacReport',
    BackgroundTask: 'BackgroundTask',
    ActivityLog: 'ActivityLog',
    AdminUser: 'AdminUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "university" | "department" | "user" | "facultyInvite" | "facultyProfile" | "publication" | "publicationAuthor" | "naacCriterion" | "naacPublicationMapping" | "naacReport" | "backgroundTask" | "activityLog" | "adminUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      University: {
        payload: Prisma.$UniversityPayload<ExtArgs>
        fields: Prisma.UniversityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniversityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniversityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          findFirst: {
            args: Prisma.UniversityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniversityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          findMany: {
            args: Prisma.UniversityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>[]
          }
          create: {
            args: Prisma.UniversityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          createMany: {
            args: Prisma.UniversityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UniversityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>[]
          }
          delete: {
            args: Prisma.UniversityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          update: {
            args: Prisma.UniversityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          deleteMany: {
            args: Prisma.UniversityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniversityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UniversityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>[]
          }
          upsert: {
            args: Prisma.UniversityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          aggregate: {
            args: Prisma.UniversityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniversity>
          }
          groupBy: {
            args: Prisma.UniversityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniversityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UniversityCountArgs<ExtArgs>
            result: $Utils.Optional<UniversityCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FacultyInvite: {
        payload: Prisma.$FacultyInvitePayload<ExtArgs>
        fields: Prisma.FacultyInviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyInviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyInvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyInviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyInvitePayload>
          }
          findFirst: {
            args: Prisma.FacultyInviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyInvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyInviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyInvitePayload>
          }
          findMany: {
            args: Prisma.FacultyInviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyInvitePayload>[]
          }
          create: {
            args: Prisma.FacultyInviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyInvitePayload>
          }
          createMany: {
            args: Prisma.FacultyInviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultyInviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyInvitePayload>[]
          }
          delete: {
            args: Prisma.FacultyInviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyInvitePayload>
          }
          update: {
            args: Prisma.FacultyInviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyInvitePayload>
          }
          deleteMany: {
            args: Prisma.FacultyInviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyInviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacultyInviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyInvitePayload>[]
          }
          upsert: {
            args: Prisma.FacultyInviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyInvitePayload>
          }
          aggregate: {
            args: Prisma.FacultyInviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultyInvite>
          }
          groupBy: {
            args: Prisma.FacultyInviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyInviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyInviteCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyInviteCountAggregateOutputType> | number
          }
        }
      }
      FacultyProfile: {
        payload: Prisma.$FacultyProfilePayload<ExtArgs>
        fields: Prisma.FacultyProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>
          }
          findFirst: {
            args: Prisma.FacultyProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>
          }
          findMany: {
            args: Prisma.FacultyProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>[]
          }
          create: {
            args: Prisma.FacultyProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>
          }
          createMany: {
            args: Prisma.FacultyProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultyProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>[]
          }
          delete: {
            args: Prisma.FacultyProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>
          }
          update: {
            args: Prisma.FacultyProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>
          }
          deleteMany: {
            args: Prisma.FacultyProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacultyProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>[]
          }
          upsert: {
            args: Prisma.FacultyProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyProfilePayload>
          }
          aggregate: {
            args: Prisma.FacultyProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultyProfile>
          }
          groupBy: {
            args: Prisma.FacultyProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyProfileCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyProfileCountAggregateOutputType> | number
          }
        }
      }
      Publication: {
        payload: Prisma.$PublicationPayload<ExtArgs>
        fields: Prisma.PublicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findFirst: {
            args: Prisma.PublicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findMany: {
            args: Prisma.PublicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          create: {
            args: Prisma.PublicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          createMany: {
            args: Prisma.PublicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          delete: {
            args: Prisma.PublicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          update: {
            args: Prisma.PublicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          deleteMany: {
            args: Prisma.PublicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          upsert: {
            args: Prisma.PublicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          aggregate: {
            args: Prisma.PublicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublication>
          }
          groupBy: {
            args: Prisma.PublicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicationCountArgs<ExtArgs>
            result: $Utils.Optional<PublicationCountAggregateOutputType> | number
          }
        }
      }
      PublicationAuthor: {
        payload: Prisma.$PublicationAuthorPayload<ExtArgs>
        fields: Prisma.PublicationAuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicationAuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationAuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicationAuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationAuthorPayload>
          }
          findFirst: {
            args: Prisma.PublicationAuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationAuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicationAuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationAuthorPayload>
          }
          findMany: {
            args: Prisma.PublicationAuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationAuthorPayload>[]
          }
          create: {
            args: Prisma.PublicationAuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationAuthorPayload>
          }
          createMany: {
            args: Prisma.PublicationAuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicationAuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationAuthorPayload>[]
          }
          delete: {
            args: Prisma.PublicationAuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationAuthorPayload>
          }
          update: {
            args: Prisma.PublicationAuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationAuthorPayload>
          }
          deleteMany: {
            args: Prisma.PublicationAuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicationAuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicationAuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationAuthorPayload>[]
          }
          upsert: {
            args: Prisma.PublicationAuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationAuthorPayload>
          }
          aggregate: {
            args: Prisma.PublicationAuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicationAuthor>
          }
          groupBy: {
            args: Prisma.PublicationAuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicationAuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicationAuthorCountArgs<ExtArgs>
            result: $Utils.Optional<PublicationAuthorCountAggregateOutputType> | number
          }
        }
      }
      NaacCriterion: {
        payload: Prisma.$NaacCriterionPayload<ExtArgs>
        fields: Prisma.NaacCriterionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NaacCriterionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacCriterionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NaacCriterionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacCriterionPayload>
          }
          findFirst: {
            args: Prisma.NaacCriterionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacCriterionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NaacCriterionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacCriterionPayload>
          }
          findMany: {
            args: Prisma.NaacCriterionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacCriterionPayload>[]
          }
          create: {
            args: Prisma.NaacCriterionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacCriterionPayload>
          }
          createMany: {
            args: Prisma.NaacCriterionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NaacCriterionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacCriterionPayload>[]
          }
          delete: {
            args: Prisma.NaacCriterionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacCriterionPayload>
          }
          update: {
            args: Prisma.NaacCriterionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacCriterionPayload>
          }
          deleteMany: {
            args: Prisma.NaacCriterionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NaacCriterionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NaacCriterionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacCriterionPayload>[]
          }
          upsert: {
            args: Prisma.NaacCriterionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacCriterionPayload>
          }
          aggregate: {
            args: Prisma.NaacCriterionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNaacCriterion>
          }
          groupBy: {
            args: Prisma.NaacCriterionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NaacCriterionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NaacCriterionCountArgs<ExtArgs>
            result: $Utils.Optional<NaacCriterionCountAggregateOutputType> | number
          }
        }
      }
      NaacPublicationMapping: {
        payload: Prisma.$NaacPublicationMappingPayload<ExtArgs>
        fields: Prisma.NaacPublicationMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NaacPublicationMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacPublicationMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NaacPublicationMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacPublicationMappingPayload>
          }
          findFirst: {
            args: Prisma.NaacPublicationMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacPublicationMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NaacPublicationMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacPublicationMappingPayload>
          }
          findMany: {
            args: Prisma.NaacPublicationMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacPublicationMappingPayload>[]
          }
          create: {
            args: Prisma.NaacPublicationMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacPublicationMappingPayload>
          }
          createMany: {
            args: Prisma.NaacPublicationMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NaacPublicationMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacPublicationMappingPayload>[]
          }
          delete: {
            args: Prisma.NaacPublicationMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacPublicationMappingPayload>
          }
          update: {
            args: Prisma.NaacPublicationMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacPublicationMappingPayload>
          }
          deleteMany: {
            args: Prisma.NaacPublicationMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NaacPublicationMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NaacPublicationMappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacPublicationMappingPayload>[]
          }
          upsert: {
            args: Prisma.NaacPublicationMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacPublicationMappingPayload>
          }
          aggregate: {
            args: Prisma.NaacPublicationMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNaacPublicationMapping>
          }
          groupBy: {
            args: Prisma.NaacPublicationMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<NaacPublicationMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.NaacPublicationMappingCountArgs<ExtArgs>
            result: $Utils.Optional<NaacPublicationMappingCountAggregateOutputType> | number
          }
        }
      }
      NaacReport: {
        payload: Prisma.$NaacReportPayload<ExtArgs>
        fields: Prisma.NaacReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NaacReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NaacReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacReportPayload>
          }
          findFirst: {
            args: Prisma.NaacReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NaacReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacReportPayload>
          }
          findMany: {
            args: Prisma.NaacReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacReportPayload>[]
          }
          create: {
            args: Prisma.NaacReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacReportPayload>
          }
          createMany: {
            args: Prisma.NaacReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NaacReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacReportPayload>[]
          }
          delete: {
            args: Prisma.NaacReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacReportPayload>
          }
          update: {
            args: Prisma.NaacReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacReportPayload>
          }
          deleteMany: {
            args: Prisma.NaacReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NaacReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NaacReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacReportPayload>[]
          }
          upsert: {
            args: Prisma.NaacReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaacReportPayload>
          }
          aggregate: {
            args: Prisma.NaacReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNaacReport>
          }
          groupBy: {
            args: Prisma.NaacReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<NaacReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.NaacReportCountArgs<ExtArgs>
            result: $Utils.Optional<NaacReportCountAggregateOutputType> | number
          }
        }
      }
      BackgroundTask: {
        payload: Prisma.$BackgroundTaskPayload<ExtArgs>
        fields: Prisma.BackgroundTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BackgroundTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BackgroundTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundTaskPayload>
          }
          findFirst: {
            args: Prisma.BackgroundTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BackgroundTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundTaskPayload>
          }
          findMany: {
            args: Prisma.BackgroundTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundTaskPayload>[]
          }
          create: {
            args: Prisma.BackgroundTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundTaskPayload>
          }
          createMany: {
            args: Prisma.BackgroundTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BackgroundTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundTaskPayload>[]
          }
          delete: {
            args: Prisma.BackgroundTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundTaskPayload>
          }
          update: {
            args: Prisma.BackgroundTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundTaskPayload>
          }
          deleteMany: {
            args: Prisma.BackgroundTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BackgroundTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BackgroundTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundTaskPayload>[]
          }
          upsert: {
            args: Prisma.BackgroundTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundTaskPayload>
          }
          aggregate: {
            args: Prisma.BackgroundTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBackgroundTask>
          }
          groupBy: {
            args: Prisma.BackgroundTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<BackgroundTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.BackgroundTaskCountArgs<ExtArgs>
            result: $Utils.Optional<BackgroundTaskCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    university?: UniversityOmit
    department?: DepartmentOmit
    user?: UserOmit
    facultyInvite?: FacultyInviteOmit
    facultyProfile?: FacultyProfileOmit
    publication?: PublicationOmit
    publicationAuthor?: PublicationAuthorOmit
    naacCriterion?: NaacCriterionOmit
    naacPublicationMapping?: NaacPublicationMappingOmit
    naacReport?: NaacReportOmit
    backgroundTask?: BackgroundTaskOmit
    activityLog?: ActivityLogOmit
    adminUser?: AdminUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UniversityCountOutputType
   */

  export type UniversityCountOutputType = {
    departments: number
    users: number
    invites: number
    naacReports: number
  }

  export type UniversityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | UniversityCountOutputTypeCountDepartmentsArgs
    users?: boolean | UniversityCountOutputTypeCountUsersArgs
    invites?: boolean | UniversityCountOutputTypeCountInvitesArgs
    naacReports?: boolean | UniversityCountOutputTypeCountNaacReportsArgs
  }

  // Custom InputTypes
  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityCountOutputType
     */
    select?: UniversityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyInviteWhereInput
  }

  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeCountNaacReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NaacReportWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    facultyProfiles: number
    invites: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultyProfiles?: boolean | DepartmentCountOutputTypeCountFacultyProfilesArgs
    invites?: boolean | DepartmentCountOutputTypeCountInvitesArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountFacultyProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyProfileWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyInviteWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    activityLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type FacultyProfileCountOutputType
   */

  export type FacultyProfileCountOutputType = {
    authorships: number
  }

  export type FacultyProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorships?: boolean | FacultyProfileCountOutputTypeCountAuthorshipsArgs
  }

  // Custom InputTypes
  /**
   * FacultyProfileCountOutputType without action
   */
  export type FacultyProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfileCountOutputType
     */
    select?: FacultyProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacultyProfileCountOutputType without action
   */
  export type FacultyProfileCountOutputTypeCountAuthorshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationAuthorWhereInput
  }


  /**
   * Count Type PublicationCountOutputType
   */

  export type PublicationCountOutputType = {
    authors: number
    naacMappings: number
  }

  export type PublicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | PublicationCountOutputTypeCountAuthorsArgs
    naacMappings?: boolean | PublicationCountOutputTypeCountNaacMappingsArgs
  }

  // Custom InputTypes
  /**
   * PublicationCountOutputType without action
   */
  export type PublicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationCountOutputType
     */
    select?: PublicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublicationCountOutputType without action
   */
  export type PublicationCountOutputTypeCountAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationAuthorWhereInput
  }

  /**
   * PublicationCountOutputType without action
   */
  export type PublicationCountOutputTypeCountNaacMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NaacPublicationMappingWhereInput
  }


  /**
   * Count Type NaacCriterionCountOutputType
   */

  export type NaacCriterionCountOutputType = {
    mappings: number
  }

  export type NaacCriterionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | NaacCriterionCountOutputTypeCountMappingsArgs
  }

  // Custom InputTypes
  /**
   * NaacCriterionCountOutputType without action
   */
  export type NaacCriterionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacCriterionCountOutputType
     */
    select?: NaacCriterionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NaacCriterionCountOutputType without action
   */
  export type NaacCriterionCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NaacPublicationMappingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model University
   */

  export type AggregateUniversity = {
    _count: UniversityCountAggregateOutputType | null
    _min: UniversityMinAggregateOutputType | null
    _max: UniversityMaxAggregateOutputType | null
  }

  export type UniversityMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    website: string | null
    city: string | null
    state: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UniversityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    website: string | null
    city: string | null
    state: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UniversityCountAggregateOutputType = {
    id: number
    name: number
    code: number
    website: number
    city: number
    state: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UniversityMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    website?: true
    city?: true
    state?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UniversityMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    website?: true
    city?: true
    state?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UniversityCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    website?: true
    city?: true
    state?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UniversityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which University to aggregate.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Universities
    **/
    _count?: true | UniversityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniversityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniversityMaxAggregateInputType
  }

  export type GetUniversityAggregateType<T extends UniversityAggregateArgs> = {
        [P in keyof T & keyof AggregateUniversity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniversity[P]>
      : GetScalarType<T[P], AggregateUniversity[P]>
  }




  export type UniversityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniversityWhereInput
    orderBy?: UniversityOrderByWithAggregationInput | UniversityOrderByWithAggregationInput[]
    by: UniversityScalarFieldEnum[] | UniversityScalarFieldEnum
    having?: UniversityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniversityCountAggregateInputType | true
    _min?: UniversityMinAggregateInputType
    _max?: UniversityMaxAggregateInputType
  }

  export type UniversityGroupByOutputType = {
    id: string
    name: string
    code: string
    website: string | null
    city: string | null
    state: string | null
    country: string
    createdAt: Date
    updatedAt: Date
    _count: UniversityCountAggregateOutputType | null
    _min: UniversityMinAggregateOutputType | null
    _max: UniversityMaxAggregateOutputType | null
  }

  type GetUniversityGroupByPayload<T extends UniversityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniversityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniversityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniversityGroupByOutputType[P]>
            : GetScalarType<T[P], UniversityGroupByOutputType[P]>
        }
      >
    >


  export type UniversitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    website?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departments?: boolean | University$departmentsArgs<ExtArgs>
    users?: boolean | University$usersArgs<ExtArgs>
    invites?: boolean | University$invitesArgs<ExtArgs>
    naacReports?: boolean | University$naacReportsArgs<ExtArgs>
    _count?: boolean | UniversityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["university"]>

  export type UniversitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    website?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["university"]>

  export type UniversitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    website?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["university"]>

  export type UniversitySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    website?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UniversityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "website" | "city" | "state" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["university"]>
  export type UniversityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | University$departmentsArgs<ExtArgs>
    users?: boolean | University$usersArgs<ExtArgs>
    invites?: boolean | University$invitesArgs<ExtArgs>
    naacReports?: boolean | University$naacReportsArgs<ExtArgs>
    _count?: boolean | UniversityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UniversityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UniversityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UniversityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "University"
    objects: {
      departments: Prisma.$DepartmentPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      invites: Prisma.$FacultyInvitePayload<ExtArgs>[]
      naacReports: Prisma.$NaacReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      website: string | null
      city: string | null
      state: string | null
      country: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["university"]>
    composites: {}
  }

  type UniversityGetPayload<S extends boolean | null | undefined | UniversityDefaultArgs> = $Result.GetResult<Prisma.$UniversityPayload, S>

  type UniversityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UniversityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniversityCountAggregateInputType | true
    }

  export interface UniversityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['University'], meta: { name: 'University' } }
    /**
     * Find zero or one University that matches the filter.
     * @param {UniversityFindUniqueArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniversityFindUniqueArgs>(args: SelectSubset<T, UniversityFindUniqueArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one University that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UniversityFindUniqueOrThrowArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniversityFindUniqueOrThrowArgs>(args: SelectSubset<T, UniversityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first University that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindFirstArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniversityFindFirstArgs>(args?: SelectSubset<T, UniversityFindFirstArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first University that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindFirstOrThrowArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniversityFindFirstOrThrowArgs>(args?: SelectSubset<T, UniversityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Universities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Universities
     * const universities = await prisma.university.findMany()
     * 
     * // Get first 10 Universities
     * const universities = await prisma.university.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const universityWithIdOnly = await prisma.university.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UniversityFindManyArgs>(args?: SelectSubset<T, UniversityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a University.
     * @param {UniversityCreateArgs} args - Arguments to create a University.
     * @example
     * // Create one University
     * const University = await prisma.university.create({
     *   data: {
     *     // ... data to create a University
     *   }
     * })
     * 
     */
    create<T extends UniversityCreateArgs>(args: SelectSubset<T, UniversityCreateArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Universities.
     * @param {UniversityCreateManyArgs} args - Arguments to create many Universities.
     * @example
     * // Create many Universities
     * const university = await prisma.university.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniversityCreateManyArgs>(args?: SelectSubset<T, UniversityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Universities and returns the data saved in the database.
     * @param {UniversityCreateManyAndReturnArgs} args - Arguments to create many Universities.
     * @example
     * // Create many Universities
     * const university = await prisma.university.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Universities and only return the `id`
     * const universityWithIdOnly = await prisma.university.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UniversityCreateManyAndReturnArgs>(args?: SelectSubset<T, UniversityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a University.
     * @param {UniversityDeleteArgs} args - Arguments to delete one University.
     * @example
     * // Delete one University
     * const University = await prisma.university.delete({
     *   where: {
     *     // ... filter to delete one University
     *   }
     * })
     * 
     */
    delete<T extends UniversityDeleteArgs>(args: SelectSubset<T, UniversityDeleteArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one University.
     * @param {UniversityUpdateArgs} args - Arguments to update one University.
     * @example
     * // Update one University
     * const university = await prisma.university.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniversityUpdateArgs>(args: SelectSubset<T, UniversityUpdateArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Universities.
     * @param {UniversityDeleteManyArgs} args - Arguments to filter Universities to delete.
     * @example
     * // Delete a few Universities
     * const { count } = await prisma.university.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniversityDeleteManyArgs>(args?: SelectSubset<T, UniversityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Universities
     * const university = await prisma.university.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniversityUpdateManyArgs>(args: SelectSubset<T, UniversityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universities and returns the data updated in the database.
     * @param {UniversityUpdateManyAndReturnArgs} args - Arguments to update many Universities.
     * @example
     * // Update many Universities
     * const university = await prisma.university.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Universities and only return the `id`
     * const universityWithIdOnly = await prisma.university.updateManyAndReturn({
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
    updateManyAndReturn<T extends UniversityUpdateManyAndReturnArgs>(args: SelectSubset<T, UniversityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one University.
     * @param {UniversityUpsertArgs} args - Arguments to update or create a University.
     * @example
     * // Update or create a University
     * const university = await prisma.university.upsert({
     *   create: {
     *     // ... data to create a University
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the University we want to update
     *   }
     * })
     */
    upsert<T extends UniversityUpsertArgs>(args: SelectSubset<T, UniversityUpsertArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityCountArgs} args - Arguments to filter Universities to count.
     * @example
     * // Count the number of Universities
     * const count = await prisma.university.count({
     *   where: {
     *     // ... the filter for the Universities we want to count
     *   }
     * })
    **/
    count<T extends UniversityCountArgs>(
      args?: Subset<T, UniversityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniversityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a University.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UniversityAggregateArgs>(args: Subset<T, UniversityAggregateArgs>): Prisma.PrismaPromise<GetUniversityAggregateType<T>>

    /**
     * Group by University.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityGroupByArgs} args - Group by arguments.
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
      T extends UniversityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniversityGroupByArgs['orderBy'] }
        : { orderBy?: UniversityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UniversityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniversityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the University model
   */
  readonly fields: UniversityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for University.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniversityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departments<T extends University$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, University$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends University$usersArgs<ExtArgs> = {}>(args?: Subset<T, University$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invites<T extends University$invitesArgs<ExtArgs> = {}>(args?: Subset<T, University$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    naacReports<T extends University$naacReportsArgs<ExtArgs> = {}>(args?: Subset<T, University$naacReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaacReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the University model
   */
  interface UniversityFieldRefs {
    readonly id: FieldRef<"University", 'String'>
    readonly name: FieldRef<"University", 'String'>
    readonly code: FieldRef<"University", 'String'>
    readonly website: FieldRef<"University", 'String'>
    readonly city: FieldRef<"University", 'String'>
    readonly state: FieldRef<"University", 'String'>
    readonly country: FieldRef<"University", 'String'>
    readonly createdAt: FieldRef<"University", 'DateTime'>
    readonly updatedAt: FieldRef<"University", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * University findUnique
   */
  export type UniversityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University findUniqueOrThrow
   */
  export type UniversityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University findFirst
   */
  export type UniversityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universities.
     */
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University findFirstOrThrow
   */
  export type UniversityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universities.
     */
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University findMany
   */
  export type UniversityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which Universities to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universities.
     */
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University create
   */
  export type UniversityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The data needed to create a University.
     */
    data: XOR<UniversityCreateInput, UniversityUncheckedCreateInput>
  }

  /**
   * University createMany
   */
  export type UniversityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Universities.
     */
    data: UniversityCreateManyInput | UniversityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * University createManyAndReturn
   */
  export type UniversityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * The data used to create many Universities.
     */
    data: UniversityCreateManyInput | UniversityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * University update
   */
  export type UniversityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The data needed to update a University.
     */
    data: XOR<UniversityUpdateInput, UniversityUncheckedUpdateInput>
    /**
     * Choose, which University to update.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University updateMany
   */
  export type UniversityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Universities.
     */
    data: XOR<UniversityUpdateManyMutationInput, UniversityUncheckedUpdateManyInput>
    /**
     * Filter which Universities to update
     */
    where?: UniversityWhereInput
    /**
     * Limit how many Universities to update.
     */
    limit?: number
  }

  /**
   * University updateManyAndReturn
   */
  export type UniversityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * The data used to update Universities.
     */
    data: XOR<UniversityUpdateManyMutationInput, UniversityUncheckedUpdateManyInput>
    /**
     * Filter which Universities to update
     */
    where?: UniversityWhereInput
    /**
     * Limit how many Universities to update.
     */
    limit?: number
  }

  /**
   * University upsert
   */
  export type UniversityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The filter to search for the University to update in case it exists.
     */
    where: UniversityWhereUniqueInput
    /**
     * In case the University found by the `where` argument doesn't exist, create a new University with this data.
     */
    create: XOR<UniversityCreateInput, UniversityUncheckedCreateInput>
    /**
     * In case the University was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniversityUpdateInput, UniversityUncheckedUpdateInput>
  }

  /**
   * University delete
   */
  export type UniversityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter which University to delete.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University deleteMany
   */
  export type UniversityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Universities to delete
     */
    where?: UniversityWhereInput
    /**
     * Limit how many Universities to delete.
     */
    limit?: number
  }

  /**
   * University.departments
   */
  export type University$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * University.users
   */
  export type University$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * University.invites
   */
  export type University$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteInclude<ExtArgs> | null
    where?: FacultyInviteWhereInput
    orderBy?: FacultyInviteOrderByWithRelationInput | FacultyInviteOrderByWithRelationInput[]
    cursor?: FacultyInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyInviteScalarFieldEnum | FacultyInviteScalarFieldEnum[]
  }

  /**
   * University.naacReports
   */
  export type University$naacReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacReport
     */
    select?: NaacReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacReport
     */
    omit?: NaacReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacReportInclude<ExtArgs> | null
    where?: NaacReportWhereInput
    orderBy?: NaacReportOrderByWithRelationInput | NaacReportOrderByWithRelationInput[]
    cursor?: NaacReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NaacReportScalarFieldEnum | NaacReportScalarFieldEnum[]
  }

  /**
   * University without action
   */
  export type UniversityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    universityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    universityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    code: number
    universityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    universityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    universityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    universityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    code: string | null
    universityId: string
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    universityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    facultyProfiles?: boolean | Department$facultyProfilesArgs<ExtArgs>
    invites?: boolean | Department$invitesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    universityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    universityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    universityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "universityId" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    facultyProfiles?: boolean | Department$facultyProfilesArgs<ExtArgs>
    invites?: boolean | Department$invitesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      university: Prisma.$UniversityPayload<ExtArgs>
      facultyProfiles: Prisma.$FacultyProfilePayload<ExtArgs>[]
      invites: Prisma.$FacultyInvitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string | null
      universityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    university<T extends UniversityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniversityDefaultArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    facultyProfiles<T extends Department$facultyProfilesArgs<ExtArgs> = {}>(args?: Subset<T, Department$facultyProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invites<T extends Department$invitesArgs<ExtArgs> = {}>(args?: Subset<T, Department$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly code: FieldRef<"Department", 'String'>
    readonly universityId: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.facultyProfiles
   */
  export type Department$facultyProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileInclude<ExtArgs> | null
    where?: FacultyProfileWhereInput
    orderBy?: FacultyProfileOrderByWithRelationInput | FacultyProfileOrderByWithRelationInput[]
    cursor?: FacultyProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyProfileScalarFieldEnum | FacultyProfileScalarFieldEnum[]
  }

  /**
   * Department.invites
   */
  export type Department$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteInclude<ExtArgs> | null
    where?: FacultyInviteWhereInput
    orderBy?: FacultyInviteOrderByWithRelationInput | FacultyInviteOrderByWithRelationInput[]
    cursor?: FacultyInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyInviteScalarFieldEnum | FacultyInviteScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    universityId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    universityId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    universityId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    universityId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    universityId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    universityId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string | null
    role: $Enums.UserRole
    universityId: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    universityId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    university?: boolean | User$universityArgs<ExtArgs>
    facultyProfile?: boolean | User$facultyProfileArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    universityId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    university?: boolean | User$universityArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    universityId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    university?: boolean | User$universityArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    universityId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "universityId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | User$universityArgs<ExtArgs>
    facultyProfile?: boolean | User$facultyProfileArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | User$universityArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | User$universityArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      university: Prisma.$UniversityPayload<ExtArgs> | null
      facultyProfile: Prisma.$FacultyProfilePayload<ExtArgs> | null
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string | null
      role: $Enums.UserRole
      universityId: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    university<T extends User$universityArgs<ExtArgs> = {}>(args?: Subset<T, User$universityArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    facultyProfile<T extends User$facultyProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$facultyProfileArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly universityId: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.university
   */
  export type User$universityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    where?: UniversityWhereInput
  }

  /**
   * User.facultyProfile
   */
  export type User$facultyProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileInclude<ExtArgs> | null
    where?: FacultyProfileWhereInput
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model FacultyInvite
   */

  export type AggregateFacultyInvite = {
    _count: FacultyInviteCountAggregateOutputType | null
    _min: FacultyInviteMinAggregateOutputType | null
    _max: FacultyInviteMaxAggregateOutputType | null
  }

  export type FacultyInviteMinAggregateOutputType = {
    id: string | null
    email: string | null
    role: $Enums.UserRole | null
    universityId: string | null
    departmentId: string | null
    token: string | null
    status: $Enums.InviteStatus | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type FacultyInviteMaxAggregateOutputType = {
    id: string | null
    email: string | null
    role: $Enums.UserRole | null
    universityId: string | null
    departmentId: string | null
    token: string | null
    status: $Enums.InviteStatus | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type FacultyInviteCountAggregateOutputType = {
    id: number
    email: number
    role: number
    universityId: number
    departmentId: number
    token: number
    status: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type FacultyInviteMinAggregateInputType = {
    id?: true
    email?: true
    role?: true
    universityId?: true
    departmentId?: true
    token?: true
    status?: true
    expiresAt?: true
    createdAt?: true
  }

  export type FacultyInviteMaxAggregateInputType = {
    id?: true
    email?: true
    role?: true
    universityId?: true
    departmentId?: true
    token?: true
    status?: true
    expiresAt?: true
    createdAt?: true
  }

  export type FacultyInviteCountAggregateInputType = {
    id?: true
    email?: true
    role?: true
    universityId?: true
    departmentId?: true
    token?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type FacultyInviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyInvite to aggregate.
     */
    where?: FacultyInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyInvites to fetch.
     */
    orderBy?: FacultyInviteOrderByWithRelationInput | FacultyInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacultyInvites
    **/
    _count?: true | FacultyInviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyInviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyInviteMaxAggregateInputType
  }

  export type GetFacultyInviteAggregateType<T extends FacultyInviteAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultyInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultyInvite[P]>
      : GetScalarType<T[P], AggregateFacultyInvite[P]>
  }




  export type FacultyInviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyInviteWhereInput
    orderBy?: FacultyInviteOrderByWithAggregationInput | FacultyInviteOrderByWithAggregationInput[]
    by: FacultyInviteScalarFieldEnum[] | FacultyInviteScalarFieldEnum
    having?: FacultyInviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyInviteCountAggregateInputType | true
    _min?: FacultyInviteMinAggregateInputType
    _max?: FacultyInviteMaxAggregateInputType
  }

  export type FacultyInviteGroupByOutputType = {
    id: string
    email: string
    role: $Enums.UserRole
    universityId: string
    departmentId: string | null
    token: string
    status: $Enums.InviteStatus
    expiresAt: Date
    createdAt: Date
    _count: FacultyInviteCountAggregateOutputType | null
    _min: FacultyInviteMinAggregateOutputType | null
    _max: FacultyInviteMaxAggregateOutputType | null
  }

  type GetFacultyInviteGroupByPayload<T extends FacultyInviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyInviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyInviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyInviteGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyInviteGroupByOutputType[P]>
        }
      >
    >


  export type FacultyInviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    universityId?: boolean
    departmentId?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    department?: boolean | FacultyInvite$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["facultyInvite"]>

  export type FacultyInviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    universityId?: boolean
    departmentId?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    department?: boolean | FacultyInvite$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["facultyInvite"]>

  export type FacultyInviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    universityId?: boolean
    departmentId?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    department?: boolean | FacultyInvite$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["facultyInvite"]>

  export type FacultyInviteSelectScalar = {
    id?: boolean
    email?: boolean
    role?: boolean
    universityId?: boolean
    departmentId?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type FacultyInviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "role" | "universityId" | "departmentId" | "token" | "status" | "expiresAt" | "createdAt", ExtArgs["result"]["facultyInvite"]>
  export type FacultyInviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    department?: boolean | FacultyInvite$departmentArgs<ExtArgs>
  }
  export type FacultyInviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    department?: boolean | FacultyInvite$departmentArgs<ExtArgs>
  }
  export type FacultyInviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    department?: boolean | FacultyInvite$departmentArgs<ExtArgs>
  }

  export type $FacultyInvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacultyInvite"
    objects: {
      university: Prisma.$UniversityPayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      role: $Enums.UserRole
      universityId: string
      departmentId: string | null
      token: string
      status: $Enums.InviteStatus
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["facultyInvite"]>
    composites: {}
  }

  type FacultyInviteGetPayload<S extends boolean | null | undefined | FacultyInviteDefaultArgs> = $Result.GetResult<Prisma.$FacultyInvitePayload, S>

  type FacultyInviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacultyInviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacultyInviteCountAggregateInputType | true
    }

  export interface FacultyInviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacultyInvite'], meta: { name: 'FacultyInvite' } }
    /**
     * Find zero or one FacultyInvite that matches the filter.
     * @param {FacultyInviteFindUniqueArgs} args - Arguments to find a FacultyInvite
     * @example
     * // Get one FacultyInvite
     * const facultyInvite = await prisma.facultyInvite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyInviteFindUniqueArgs>(args: SelectSubset<T, FacultyInviteFindUniqueArgs<ExtArgs>>): Prisma__FacultyInviteClient<$Result.GetResult<Prisma.$FacultyInvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacultyInvite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacultyInviteFindUniqueOrThrowArgs} args - Arguments to find a FacultyInvite
     * @example
     * // Get one FacultyInvite
     * const facultyInvite = await prisma.facultyInvite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyInviteFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultyInviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultyInviteClient<$Result.GetResult<Prisma.$FacultyInvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacultyInvite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyInviteFindFirstArgs} args - Arguments to find a FacultyInvite
     * @example
     * // Get one FacultyInvite
     * const facultyInvite = await prisma.facultyInvite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyInviteFindFirstArgs>(args?: SelectSubset<T, FacultyInviteFindFirstArgs<ExtArgs>>): Prisma__FacultyInviteClient<$Result.GetResult<Prisma.$FacultyInvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacultyInvite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyInviteFindFirstOrThrowArgs} args - Arguments to find a FacultyInvite
     * @example
     * // Get one FacultyInvite
     * const facultyInvite = await prisma.facultyInvite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyInviteFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultyInviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultyInviteClient<$Result.GetResult<Prisma.$FacultyInvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacultyInvites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyInviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultyInvites
     * const facultyInvites = await prisma.facultyInvite.findMany()
     * 
     * // Get first 10 FacultyInvites
     * const facultyInvites = await prisma.facultyInvite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultyInviteWithIdOnly = await prisma.facultyInvite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacultyInviteFindManyArgs>(args?: SelectSubset<T, FacultyInviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacultyInvite.
     * @param {FacultyInviteCreateArgs} args - Arguments to create a FacultyInvite.
     * @example
     * // Create one FacultyInvite
     * const FacultyInvite = await prisma.facultyInvite.create({
     *   data: {
     *     // ... data to create a FacultyInvite
     *   }
     * })
     * 
     */
    create<T extends FacultyInviteCreateArgs>(args: SelectSubset<T, FacultyInviteCreateArgs<ExtArgs>>): Prisma__FacultyInviteClient<$Result.GetResult<Prisma.$FacultyInvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacultyInvites.
     * @param {FacultyInviteCreateManyArgs} args - Arguments to create many FacultyInvites.
     * @example
     * // Create many FacultyInvites
     * const facultyInvite = await prisma.facultyInvite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultyInviteCreateManyArgs>(args?: SelectSubset<T, FacultyInviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacultyInvites and returns the data saved in the database.
     * @param {FacultyInviteCreateManyAndReturnArgs} args - Arguments to create many FacultyInvites.
     * @example
     * // Create many FacultyInvites
     * const facultyInvite = await prisma.facultyInvite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacultyInvites and only return the `id`
     * const facultyInviteWithIdOnly = await prisma.facultyInvite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultyInviteCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultyInviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyInvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacultyInvite.
     * @param {FacultyInviteDeleteArgs} args - Arguments to delete one FacultyInvite.
     * @example
     * // Delete one FacultyInvite
     * const FacultyInvite = await prisma.facultyInvite.delete({
     *   where: {
     *     // ... filter to delete one FacultyInvite
     *   }
     * })
     * 
     */
    delete<T extends FacultyInviteDeleteArgs>(args: SelectSubset<T, FacultyInviteDeleteArgs<ExtArgs>>): Prisma__FacultyInviteClient<$Result.GetResult<Prisma.$FacultyInvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacultyInvite.
     * @param {FacultyInviteUpdateArgs} args - Arguments to update one FacultyInvite.
     * @example
     * // Update one FacultyInvite
     * const facultyInvite = await prisma.facultyInvite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultyInviteUpdateArgs>(args: SelectSubset<T, FacultyInviteUpdateArgs<ExtArgs>>): Prisma__FacultyInviteClient<$Result.GetResult<Prisma.$FacultyInvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacultyInvites.
     * @param {FacultyInviteDeleteManyArgs} args - Arguments to filter FacultyInvites to delete.
     * @example
     * // Delete a few FacultyInvites
     * const { count } = await prisma.facultyInvite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultyInviteDeleteManyArgs>(args?: SelectSubset<T, FacultyInviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyInviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultyInvites
     * const facultyInvite = await prisma.facultyInvite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultyInviteUpdateManyArgs>(args: SelectSubset<T, FacultyInviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyInvites and returns the data updated in the database.
     * @param {FacultyInviteUpdateManyAndReturnArgs} args - Arguments to update many FacultyInvites.
     * @example
     * // Update many FacultyInvites
     * const facultyInvite = await prisma.facultyInvite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacultyInvites and only return the `id`
     * const facultyInviteWithIdOnly = await prisma.facultyInvite.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacultyInviteUpdateManyAndReturnArgs>(args: SelectSubset<T, FacultyInviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyInvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacultyInvite.
     * @param {FacultyInviteUpsertArgs} args - Arguments to update or create a FacultyInvite.
     * @example
     * // Update or create a FacultyInvite
     * const facultyInvite = await prisma.facultyInvite.upsert({
     *   create: {
     *     // ... data to create a FacultyInvite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultyInvite we want to update
     *   }
     * })
     */
    upsert<T extends FacultyInviteUpsertArgs>(args: SelectSubset<T, FacultyInviteUpsertArgs<ExtArgs>>): Prisma__FacultyInviteClient<$Result.GetResult<Prisma.$FacultyInvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacultyInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyInviteCountArgs} args - Arguments to filter FacultyInvites to count.
     * @example
     * // Count the number of FacultyInvites
     * const count = await prisma.facultyInvite.count({
     *   where: {
     *     // ... the filter for the FacultyInvites we want to count
     *   }
     * })
    **/
    count<T extends FacultyInviteCountArgs>(
      args?: Subset<T, FacultyInviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyInviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacultyInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyInviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultyInviteAggregateArgs>(args: Subset<T, FacultyInviteAggregateArgs>): Prisma.PrismaPromise<GetFacultyInviteAggregateType<T>>

    /**
     * Group by FacultyInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyInviteGroupByArgs} args - Group by arguments.
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
      T extends FacultyInviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyInviteGroupByArgs['orderBy'] }
        : { orderBy?: FacultyInviteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacultyInviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacultyInvite model
   */
  readonly fields: FacultyInviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacultyInvite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyInviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    university<T extends UniversityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniversityDefaultArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends FacultyInvite$departmentArgs<ExtArgs> = {}>(args?: Subset<T, FacultyInvite$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FacultyInvite model
   */
  interface FacultyInviteFieldRefs {
    readonly id: FieldRef<"FacultyInvite", 'String'>
    readonly email: FieldRef<"FacultyInvite", 'String'>
    readonly role: FieldRef<"FacultyInvite", 'UserRole'>
    readonly universityId: FieldRef<"FacultyInvite", 'String'>
    readonly departmentId: FieldRef<"FacultyInvite", 'String'>
    readonly token: FieldRef<"FacultyInvite", 'String'>
    readonly status: FieldRef<"FacultyInvite", 'InviteStatus'>
    readonly expiresAt: FieldRef<"FacultyInvite", 'DateTime'>
    readonly createdAt: FieldRef<"FacultyInvite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacultyInvite findUnique
   */
  export type FacultyInviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteInclude<ExtArgs> | null
    /**
     * Filter, which FacultyInvite to fetch.
     */
    where: FacultyInviteWhereUniqueInput
  }

  /**
   * FacultyInvite findUniqueOrThrow
   */
  export type FacultyInviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteInclude<ExtArgs> | null
    /**
     * Filter, which FacultyInvite to fetch.
     */
    where: FacultyInviteWhereUniqueInput
  }

  /**
   * FacultyInvite findFirst
   */
  export type FacultyInviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteInclude<ExtArgs> | null
    /**
     * Filter, which FacultyInvite to fetch.
     */
    where?: FacultyInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyInvites to fetch.
     */
    orderBy?: FacultyInviteOrderByWithRelationInput | FacultyInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyInvites.
     */
    cursor?: FacultyInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyInvites.
     */
    distinct?: FacultyInviteScalarFieldEnum | FacultyInviteScalarFieldEnum[]
  }

  /**
   * FacultyInvite findFirstOrThrow
   */
  export type FacultyInviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteInclude<ExtArgs> | null
    /**
     * Filter, which FacultyInvite to fetch.
     */
    where?: FacultyInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyInvites to fetch.
     */
    orderBy?: FacultyInviteOrderByWithRelationInput | FacultyInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyInvites.
     */
    cursor?: FacultyInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyInvites.
     */
    distinct?: FacultyInviteScalarFieldEnum | FacultyInviteScalarFieldEnum[]
  }

  /**
   * FacultyInvite findMany
   */
  export type FacultyInviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteInclude<ExtArgs> | null
    /**
     * Filter, which FacultyInvites to fetch.
     */
    where?: FacultyInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyInvites to fetch.
     */
    orderBy?: FacultyInviteOrderByWithRelationInput | FacultyInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacultyInvites.
     */
    cursor?: FacultyInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyInvites.
     */
    distinct?: FacultyInviteScalarFieldEnum | FacultyInviteScalarFieldEnum[]
  }

  /**
   * FacultyInvite create
   */
  export type FacultyInviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteInclude<ExtArgs> | null
    /**
     * The data needed to create a FacultyInvite.
     */
    data: XOR<FacultyInviteCreateInput, FacultyInviteUncheckedCreateInput>
  }

  /**
   * FacultyInvite createMany
   */
  export type FacultyInviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultyInvites.
     */
    data: FacultyInviteCreateManyInput | FacultyInviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultyInvite createManyAndReturn
   */
  export type FacultyInviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * The data used to create many FacultyInvites.
     */
    data: FacultyInviteCreateManyInput | FacultyInviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacultyInvite update
   */
  export type FacultyInviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteInclude<ExtArgs> | null
    /**
     * The data needed to update a FacultyInvite.
     */
    data: XOR<FacultyInviteUpdateInput, FacultyInviteUncheckedUpdateInput>
    /**
     * Choose, which FacultyInvite to update.
     */
    where: FacultyInviteWhereUniqueInput
  }

  /**
   * FacultyInvite updateMany
   */
  export type FacultyInviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultyInvites.
     */
    data: XOR<FacultyInviteUpdateManyMutationInput, FacultyInviteUncheckedUpdateManyInput>
    /**
     * Filter which FacultyInvites to update
     */
    where?: FacultyInviteWhereInput
    /**
     * Limit how many FacultyInvites to update.
     */
    limit?: number
  }

  /**
   * FacultyInvite updateManyAndReturn
   */
  export type FacultyInviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * The data used to update FacultyInvites.
     */
    data: XOR<FacultyInviteUpdateManyMutationInput, FacultyInviteUncheckedUpdateManyInput>
    /**
     * Filter which FacultyInvites to update
     */
    where?: FacultyInviteWhereInput
    /**
     * Limit how many FacultyInvites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacultyInvite upsert
   */
  export type FacultyInviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteInclude<ExtArgs> | null
    /**
     * The filter to search for the FacultyInvite to update in case it exists.
     */
    where: FacultyInviteWhereUniqueInput
    /**
     * In case the FacultyInvite found by the `where` argument doesn't exist, create a new FacultyInvite with this data.
     */
    create: XOR<FacultyInviteCreateInput, FacultyInviteUncheckedCreateInput>
    /**
     * In case the FacultyInvite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyInviteUpdateInput, FacultyInviteUncheckedUpdateInput>
  }

  /**
   * FacultyInvite delete
   */
  export type FacultyInviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteInclude<ExtArgs> | null
    /**
     * Filter which FacultyInvite to delete.
     */
    where: FacultyInviteWhereUniqueInput
  }

  /**
   * FacultyInvite deleteMany
   */
  export type FacultyInviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyInvites to delete
     */
    where?: FacultyInviteWhereInput
    /**
     * Limit how many FacultyInvites to delete.
     */
    limit?: number
  }

  /**
   * FacultyInvite.department
   */
  export type FacultyInvite$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * FacultyInvite without action
   */
  export type FacultyInviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyInvite
     */
    select?: FacultyInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyInvite
     */
    omit?: FacultyInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInviteInclude<ExtArgs> | null
  }


  /**
   * Model FacultyProfile
   */

  export type AggregateFacultyProfile = {
    _count: FacultyProfileCountAggregateOutputType | null
    _min: FacultyProfileMinAggregateOutputType | null
    _max: FacultyProfileMaxAggregateOutputType | null
  }

  export type FacultyProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    departmentId: string | null
    fullName: string | null
    designation: string | null
    qualification: string | null
    joiningDate: Date | null
    avatarUrl: string | null
    bio: string | null
    openAlexId: string | null
    orcid: string | null
    scopusAuthorId: string | null
    vidwanId: string | null
    googleScholar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacultyProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    departmentId: string | null
    fullName: string | null
    designation: string | null
    qualification: string | null
    joiningDate: Date | null
    avatarUrl: string | null
    bio: string | null
    openAlexId: string | null
    orcid: string | null
    scopusAuthorId: string | null
    vidwanId: string | null
    googleScholar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacultyProfileCountAggregateOutputType = {
    id: number
    userId: number
    departmentId: number
    fullName: number
    designation: number
    qualification: number
    joiningDate: number
    avatarUrl: number
    bio: number
    openAlexId: number
    orcid: number
    scopusAuthorId: number
    vidwanId: number
    googleScholar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacultyProfileMinAggregateInputType = {
    id?: true
    userId?: true
    departmentId?: true
    fullName?: true
    designation?: true
    qualification?: true
    joiningDate?: true
    avatarUrl?: true
    bio?: true
    openAlexId?: true
    orcid?: true
    scopusAuthorId?: true
    vidwanId?: true
    googleScholar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacultyProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    departmentId?: true
    fullName?: true
    designation?: true
    qualification?: true
    joiningDate?: true
    avatarUrl?: true
    bio?: true
    openAlexId?: true
    orcid?: true
    scopusAuthorId?: true
    vidwanId?: true
    googleScholar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacultyProfileCountAggregateInputType = {
    id?: true
    userId?: true
    departmentId?: true
    fullName?: true
    designation?: true
    qualification?: true
    joiningDate?: true
    avatarUrl?: true
    bio?: true
    openAlexId?: true
    orcid?: true
    scopusAuthorId?: true
    vidwanId?: true
    googleScholar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacultyProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyProfile to aggregate.
     */
    where?: FacultyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyProfiles to fetch.
     */
    orderBy?: FacultyProfileOrderByWithRelationInput | FacultyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacultyProfiles
    **/
    _count?: true | FacultyProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyProfileMaxAggregateInputType
  }

  export type GetFacultyProfileAggregateType<T extends FacultyProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultyProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultyProfile[P]>
      : GetScalarType<T[P], AggregateFacultyProfile[P]>
  }




  export type FacultyProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyProfileWhereInput
    orderBy?: FacultyProfileOrderByWithAggregationInput | FacultyProfileOrderByWithAggregationInput[]
    by: FacultyProfileScalarFieldEnum[] | FacultyProfileScalarFieldEnum
    having?: FacultyProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyProfileCountAggregateInputType | true
    _min?: FacultyProfileMinAggregateInputType
    _max?: FacultyProfileMaxAggregateInputType
  }

  export type FacultyProfileGroupByOutputType = {
    id: string
    userId: string
    departmentId: string
    fullName: string
    designation: string
    qualification: string | null
    joiningDate: Date | null
    avatarUrl: string | null
    bio: string | null
    openAlexId: string | null
    orcid: string | null
    scopusAuthorId: string | null
    vidwanId: string | null
    googleScholar: string | null
    createdAt: Date
    updatedAt: Date
    _count: FacultyProfileCountAggregateOutputType | null
    _min: FacultyProfileMinAggregateOutputType | null
    _max: FacultyProfileMaxAggregateOutputType | null
  }

  type GetFacultyProfileGroupByPayload<T extends FacultyProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyProfileGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyProfileGroupByOutputType[P]>
        }
      >
    >


  export type FacultyProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    departmentId?: boolean
    fullName?: boolean
    designation?: boolean
    qualification?: boolean
    joiningDate?: boolean
    avatarUrl?: boolean
    bio?: boolean
    openAlexId?: boolean
    orcid?: boolean
    scopusAuthorId?: boolean
    vidwanId?: boolean
    googleScholar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    authorships?: boolean | FacultyProfile$authorshipsArgs<ExtArgs>
    _count?: boolean | FacultyProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultyProfile"]>

  export type FacultyProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    departmentId?: boolean
    fullName?: boolean
    designation?: boolean
    qualification?: boolean
    joiningDate?: boolean
    avatarUrl?: boolean
    bio?: boolean
    openAlexId?: boolean
    orcid?: boolean
    scopusAuthorId?: boolean
    vidwanId?: boolean
    googleScholar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultyProfile"]>

  export type FacultyProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    departmentId?: boolean
    fullName?: boolean
    designation?: boolean
    qualification?: boolean
    joiningDate?: boolean
    avatarUrl?: boolean
    bio?: boolean
    openAlexId?: boolean
    orcid?: boolean
    scopusAuthorId?: boolean
    vidwanId?: boolean
    googleScholar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultyProfile"]>

  export type FacultyProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    departmentId?: boolean
    fullName?: boolean
    designation?: boolean
    qualification?: boolean
    joiningDate?: boolean
    avatarUrl?: boolean
    bio?: boolean
    openAlexId?: boolean
    orcid?: boolean
    scopusAuthorId?: boolean
    vidwanId?: boolean
    googleScholar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FacultyProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "departmentId" | "fullName" | "designation" | "qualification" | "joiningDate" | "avatarUrl" | "bio" | "openAlexId" | "orcid" | "scopusAuthorId" | "vidwanId" | "googleScholar" | "createdAt" | "updatedAt", ExtArgs["result"]["facultyProfile"]>
  export type FacultyProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    authorships?: boolean | FacultyProfile$authorshipsArgs<ExtArgs>
    _count?: boolean | FacultyProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacultyProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type FacultyProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $FacultyProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacultyProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs>
      authorships: Prisma.$PublicationAuthorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      departmentId: string
      fullName: string
      designation: string
      qualification: string | null
      joiningDate: Date | null
      avatarUrl: string | null
      bio: string | null
      openAlexId: string | null
      orcid: string | null
      scopusAuthorId: string | null
      vidwanId: string | null
      googleScholar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facultyProfile"]>
    composites: {}
  }

  type FacultyProfileGetPayload<S extends boolean | null | undefined | FacultyProfileDefaultArgs> = $Result.GetResult<Prisma.$FacultyProfilePayload, S>

  type FacultyProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacultyProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacultyProfileCountAggregateInputType | true
    }

  export interface FacultyProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacultyProfile'], meta: { name: 'FacultyProfile' } }
    /**
     * Find zero or one FacultyProfile that matches the filter.
     * @param {FacultyProfileFindUniqueArgs} args - Arguments to find a FacultyProfile
     * @example
     * // Get one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyProfileFindUniqueArgs>(args: SelectSubset<T, FacultyProfileFindUniqueArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacultyProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacultyProfileFindUniqueOrThrowArgs} args - Arguments to find a FacultyProfile
     * @example
     * // Get one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultyProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacultyProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileFindFirstArgs} args - Arguments to find a FacultyProfile
     * @example
     * // Get one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyProfileFindFirstArgs>(args?: SelectSubset<T, FacultyProfileFindFirstArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacultyProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileFindFirstOrThrowArgs} args - Arguments to find a FacultyProfile
     * @example
     * // Get one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultyProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacultyProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultyProfiles
     * const facultyProfiles = await prisma.facultyProfile.findMany()
     * 
     * // Get first 10 FacultyProfiles
     * const facultyProfiles = await prisma.facultyProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultyProfileWithIdOnly = await prisma.facultyProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacultyProfileFindManyArgs>(args?: SelectSubset<T, FacultyProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacultyProfile.
     * @param {FacultyProfileCreateArgs} args - Arguments to create a FacultyProfile.
     * @example
     * // Create one FacultyProfile
     * const FacultyProfile = await prisma.facultyProfile.create({
     *   data: {
     *     // ... data to create a FacultyProfile
     *   }
     * })
     * 
     */
    create<T extends FacultyProfileCreateArgs>(args: SelectSubset<T, FacultyProfileCreateArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacultyProfiles.
     * @param {FacultyProfileCreateManyArgs} args - Arguments to create many FacultyProfiles.
     * @example
     * // Create many FacultyProfiles
     * const facultyProfile = await prisma.facultyProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultyProfileCreateManyArgs>(args?: SelectSubset<T, FacultyProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacultyProfiles and returns the data saved in the database.
     * @param {FacultyProfileCreateManyAndReturnArgs} args - Arguments to create many FacultyProfiles.
     * @example
     * // Create many FacultyProfiles
     * const facultyProfile = await prisma.facultyProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacultyProfiles and only return the `id`
     * const facultyProfileWithIdOnly = await prisma.facultyProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultyProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultyProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacultyProfile.
     * @param {FacultyProfileDeleteArgs} args - Arguments to delete one FacultyProfile.
     * @example
     * // Delete one FacultyProfile
     * const FacultyProfile = await prisma.facultyProfile.delete({
     *   where: {
     *     // ... filter to delete one FacultyProfile
     *   }
     * })
     * 
     */
    delete<T extends FacultyProfileDeleteArgs>(args: SelectSubset<T, FacultyProfileDeleteArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacultyProfile.
     * @param {FacultyProfileUpdateArgs} args - Arguments to update one FacultyProfile.
     * @example
     * // Update one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultyProfileUpdateArgs>(args: SelectSubset<T, FacultyProfileUpdateArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacultyProfiles.
     * @param {FacultyProfileDeleteManyArgs} args - Arguments to filter FacultyProfiles to delete.
     * @example
     * // Delete a few FacultyProfiles
     * const { count } = await prisma.facultyProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultyProfileDeleteManyArgs>(args?: SelectSubset<T, FacultyProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultyProfiles
     * const facultyProfile = await prisma.facultyProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultyProfileUpdateManyArgs>(args: SelectSubset<T, FacultyProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyProfiles and returns the data updated in the database.
     * @param {FacultyProfileUpdateManyAndReturnArgs} args - Arguments to update many FacultyProfiles.
     * @example
     * // Update many FacultyProfiles
     * const facultyProfile = await prisma.facultyProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacultyProfiles and only return the `id`
     * const facultyProfileWithIdOnly = await prisma.facultyProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacultyProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, FacultyProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacultyProfile.
     * @param {FacultyProfileUpsertArgs} args - Arguments to update or create a FacultyProfile.
     * @example
     * // Update or create a FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.upsert({
     *   create: {
     *     // ... data to create a FacultyProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultyProfile we want to update
     *   }
     * })
     */
    upsert<T extends FacultyProfileUpsertArgs>(args: SelectSubset<T, FacultyProfileUpsertArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacultyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileCountArgs} args - Arguments to filter FacultyProfiles to count.
     * @example
     * // Count the number of FacultyProfiles
     * const count = await prisma.facultyProfile.count({
     *   where: {
     *     // ... the filter for the FacultyProfiles we want to count
     *   }
     * })
    **/
    count<T extends FacultyProfileCountArgs>(
      args?: Subset<T, FacultyProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacultyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultyProfileAggregateArgs>(args: Subset<T, FacultyProfileAggregateArgs>): Prisma.PrismaPromise<GetFacultyProfileAggregateType<T>>

    /**
     * Group by FacultyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileGroupByArgs} args - Group by arguments.
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
      T extends FacultyProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyProfileGroupByArgs['orderBy'] }
        : { orderBy?: FacultyProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacultyProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacultyProfile model
   */
  readonly fields: FacultyProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacultyProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    authorships<T extends FacultyProfile$authorshipsArgs<ExtArgs> = {}>(args?: Subset<T, FacultyProfile$authorshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FacultyProfile model
   */
  interface FacultyProfileFieldRefs {
    readonly id: FieldRef<"FacultyProfile", 'String'>
    readonly userId: FieldRef<"FacultyProfile", 'String'>
    readonly departmentId: FieldRef<"FacultyProfile", 'String'>
    readonly fullName: FieldRef<"FacultyProfile", 'String'>
    readonly designation: FieldRef<"FacultyProfile", 'String'>
    readonly qualification: FieldRef<"FacultyProfile", 'String'>
    readonly joiningDate: FieldRef<"FacultyProfile", 'DateTime'>
    readonly avatarUrl: FieldRef<"FacultyProfile", 'String'>
    readonly bio: FieldRef<"FacultyProfile", 'String'>
    readonly openAlexId: FieldRef<"FacultyProfile", 'String'>
    readonly orcid: FieldRef<"FacultyProfile", 'String'>
    readonly scopusAuthorId: FieldRef<"FacultyProfile", 'String'>
    readonly vidwanId: FieldRef<"FacultyProfile", 'String'>
    readonly googleScholar: FieldRef<"FacultyProfile", 'String'>
    readonly createdAt: FieldRef<"FacultyProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"FacultyProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacultyProfile findUnique
   */
  export type FacultyProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileInclude<ExtArgs> | null
    /**
     * Filter, which FacultyProfile to fetch.
     */
    where: FacultyProfileWhereUniqueInput
  }

  /**
   * FacultyProfile findUniqueOrThrow
   */
  export type FacultyProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileInclude<ExtArgs> | null
    /**
     * Filter, which FacultyProfile to fetch.
     */
    where: FacultyProfileWhereUniqueInput
  }

  /**
   * FacultyProfile findFirst
   */
  export type FacultyProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileInclude<ExtArgs> | null
    /**
     * Filter, which FacultyProfile to fetch.
     */
    where?: FacultyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyProfiles to fetch.
     */
    orderBy?: FacultyProfileOrderByWithRelationInput | FacultyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyProfiles.
     */
    cursor?: FacultyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyProfiles.
     */
    distinct?: FacultyProfileScalarFieldEnum | FacultyProfileScalarFieldEnum[]
  }

  /**
   * FacultyProfile findFirstOrThrow
   */
  export type FacultyProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileInclude<ExtArgs> | null
    /**
     * Filter, which FacultyProfile to fetch.
     */
    where?: FacultyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyProfiles to fetch.
     */
    orderBy?: FacultyProfileOrderByWithRelationInput | FacultyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyProfiles.
     */
    cursor?: FacultyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyProfiles.
     */
    distinct?: FacultyProfileScalarFieldEnum | FacultyProfileScalarFieldEnum[]
  }

  /**
   * FacultyProfile findMany
   */
  export type FacultyProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileInclude<ExtArgs> | null
    /**
     * Filter, which FacultyProfiles to fetch.
     */
    where?: FacultyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyProfiles to fetch.
     */
    orderBy?: FacultyProfileOrderByWithRelationInput | FacultyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacultyProfiles.
     */
    cursor?: FacultyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyProfiles.
     */
    distinct?: FacultyProfileScalarFieldEnum | FacultyProfileScalarFieldEnum[]
  }

  /**
   * FacultyProfile create
   */
  export type FacultyProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a FacultyProfile.
     */
    data: XOR<FacultyProfileCreateInput, FacultyProfileUncheckedCreateInput>
  }

  /**
   * FacultyProfile createMany
   */
  export type FacultyProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultyProfiles.
     */
    data: FacultyProfileCreateManyInput | FacultyProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultyProfile createManyAndReturn
   */
  export type FacultyProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * The data used to create many FacultyProfiles.
     */
    data: FacultyProfileCreateManyInput | FacultyProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacultyProfile update
   */
  export type FacultyProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a FacultyProfile.
     */
    data: XOR<FacultyProfileUpdateInput, FacultyProfileUncheckedUpdateInput>
    /**
     * Choose, which FacultyProfile to update.
     */
    where: FacultyProfileWhereUniqueInput
  }

  /**
   * FacultyProfile updateMany
   */
  export type FacultyProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultyProfiles.
     */
    data: XOR<FacultyProfileUpdateManyMutationInput, FacultyProfileUncheckedUpdateManyInput>
    /**
     * Filter which FacultyProfiles to update
     */
    where?: FacultyProfileWhereInput
    /**
     * Limit how many FacultyProfiles to update.
     */
    limit?: number
  }

  /**
   * FacultyProfile updateManyAndReturn
   */
  export type FacultyProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * The data used to update FacultyProfiles.
     */
    data: XOR<FacultyProfileUpdateManyMutationInput, FacultyProfileUncheckedUpdateManyInput>
    /**
     * Filter which FacultyProfiles to update
     */
    where?: FacultyProfileWhereInput
    /**
     * Limit how many FacultyProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacultyProfile upsert
   */
  export type FacultyProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the FacultyProfile to update in case it exists.
     */
    where: FacultyProfileWhereUniqueInput
    /**
     * In case the FacultyProfile found by the `where` argument doesn't exist, create a new FacultyProfile with this data.
     */
    create: XOR<FacultyProfileCreateInput, FacultyProfileUncheckedCreateInput>
    /**
     * In case the FacultyProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyProfileUpdateInput, FacultyProfileUncheckedUpdateInput>
  }

  /**
   * FacultyProfile delete
   */
  export type FacultyProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileInclude<ExtArgs> | null
    /**
     * Filter which FacultyProfile to delete.
     */
    where: FacultyProfileWhereUniqueInput
  }

  /**
   * FacultyProfile deleteMany
   */
  export type FacultyProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyProfiles to delete
     */
    where?: FacultyProfileWhereInput
    /**
     * Limit how many FacultyProfiles to delete.
     */
    limit?: number
  }

  /**
   * FacultyProfile.authorships
   */
  export type FacultyProfile$authorshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorInclude<ExtArgs> | null
    where?: PublicationAuthorWhereInput
    orderBy?: PublicationAuthorOrderByWithRelationInput | PublicationAuthorOrderByWithRelationInput[]
    cursor?: PublicationAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicationAuthorScalarFieldEnum | PublicationAuthorScalarFieldEnum[]
  }

  /**
   * FacultyProfile without action
   */
  export type FacultyProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: FacultyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: FacultyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyProfileInclude<ExtArgs> | null
  }


  /**
   * Model Publication
   */

  export type AggregatePublication = {
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  export type PublicationAvgAggregateOutputType = {
    publicationYear: number | null
    citationCount: number | null
  }

  export type PublicationSumAggregateOutputType = {
    publicationYear: number | null
    citationCount: number | null
  }

  export type PublicationMinAggregateOutputType = {
    id: string | null
    title: string | null
    publicationYear: number | null
    doi: string | null
    openAlexId: string | null
    journalName: string | null
    publisher: string | null
    volume: string | null
    issue: string | null
    pages: string | null
    citationCount: number | null
    isOpenAccess: boolean | null
    openAccessUrl: string | null
    landingPageUrl: string | null
    abstract: string | null
    status: $Enums.PublicationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    publicationYear: number | null
    doi: string | null
    openAlexId: string | null
    journalName: string | null
    publisher: string | null
    volume: string | null
    issue: string | null
    pages: string | null
    citationCount: number | null
    isOpenAccess: boolean | null
    openAccessUrl: string | null
    landingPageUrl: string | null
    abstract: string | null
    status: $Enums.PublicationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationCountAggregateOutputType = {
    id: number
    title: number
    publicationYear: number
    doi: number
    openAlexId: number
    journalName: number
    publisher: number
    volume: number
    issue: number
    pages: number
    citationCount: number
    isOpenAccess: number
    openAccessUrl: number
    landingPageUrl: number
    abstract: number
    status: number
    rawMetadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PublicationAvgAggregateInputType = {
    publicationYear?: true
    citationCount?: true
  }

  export type PublicationSumAggregateInputType = {
    publicationYear?: true
    citationCount?: true
  }

  export type PublicationMinAggregateInputType = {
    id?: true
    title?: true
    publicationYear?: true
    doi?: true
    openAlexId?: true
    journalName?: true
    publisher?: true
    volume?: true
    issue?: true
    pages?: true
    citationCount?: true
    isOpenAccess?: true
    openAccessUrl?: true
    landingPageUrl?: true
    abstract?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationMaxAggregateInputType = {
    id?: true
    title?: true
    publicationYear?: true
    doi?: true
    openAlexId?: true
    journalName?: true
    publisher?: true
    volume?: true
    issue?: true
    pages?: true
    citationCount?: true
    isOpenAccess?: true
    openAccessUrl?: true
    landingPageUrl?: true
    abstract?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationCountAggregateInputType = {
    id?: true
    title?: true
    publicationYear?: true
    doi?: true
    openAlexId?: true
    journalName?: true
    publisher?: true
    volume?: true
    issue?: true
    pages?: true
    citationCount?: true
    isOpenAccess?: true
    openAccessUrl?: true
    landingPageUrl?: true
    abstract?: true
    status?: true
    rawMetadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publication to aggregate.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publications
    **/
    _count?: true | PublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationMaxAggregateInputType
  }

  export type GetPublicationAggregateType<T extends PublicationAggregateArgs> = {
        [P in keyof T & keyof AggregatePublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublication[P]>
      : GetScalarType<T[P], AggregatePublication[P]>
  }




  export type PublicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationWhereInput
    orderBy?: PublicationOrderByWithAggregationInput | PublicationOrderByWithAggregationInput[]
    by: PublicationScalarFieldEnum[] | PublicationScalarFieldEnum
    having?: PublicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationCountAggregateInputType | true
    _avg?: PublicationAvgAggregateInputType
    _sum?: PublicationSumAggregateInputType
    _min?: PublicationMinAggregateInputType
    _max?: PublicationMaxAggregateInputType
  }

  export type PublicationGroupByOutputType = {
    id: string
    title: string
    publicationYear: number
    doi: string | null
    openAlexId: string | null
    journalName: string | null
    publisher: string | null
    volume: string | null
    issue: string | null
    pages: string | null
    citationCount: number
    isOpenAccess: boolean
    openAccessUrl: string | null
    landingPageUrl: string | null
    abstract: string | null
    status: $Enums.PublicationStatus
    rawMetadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  type GetPublicationGroupByPayload<T extends PublicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationGroupByOutputType[P]>
        }
      >
    >


  export type PublicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    publicationYear?: boolean
    doi?: boolean
    openAlexId?: boolean
    journalName?: boolean
    publisher?: boolean
    volume?: boolean
    issue?: boolean
    pages?: boolean
    citationCount?: boolean
    isOpenAccess?: boolean
    openAccessUrl?: boolean
    landingPageUrl?: boolean
    abstract?: boolean
    status?: boolean
    rawMetadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authors?: boolean | Publication$authorsArgs<ExtArgs>
    naacMappings?: boolean | Publication$naacMappingsArgs<ExtArgs>
    _count?: boolean | PublicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    publicationYear?: boolean
    doi?: boolean
    openAlexId?: boolean
    journalName?: boolean
    publisher?: boolean
    volume?: boolean
    issue?: boolean
    pages?: boolean
    citationCount?: boolean
    isOpenAccess?: boolean
    openAccessUrl?: boolean
    landingPageUrl?: boolean
    abstract?: boolean
    status?: boolean
    rawMetadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    publicationYear?: boolean
    doi?: boolean
    openAlexId?: boolean
    journalName?: boolean
    publisher?: boolean
    volume?: boolean
    issue?: boolean
    pages?: boolean
    citationCount?: boolean
    isOpenAccess?: boolean
    openAccessUrl?: boolean
    landingPageUrl?: boolean
    abstract?: boolean
    status?: boolean
    rawMetadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectScalar = {
    id?: boolean
    title?: boolean
    publicationYear?: boolean
    doi?: boolean
    openAlexId?: boolean
    journalName?: boolean
    publisher?: boolean
    volume?: boolean
    issue?: boolean
    pages?: boolean
    citationCount?: boolean
    isOpenAccess?: boolean
    openAccessUrl?: boolean
    landingPageUrl?: boolean
    abstract?: boolean
    status?: boolean
    rawMetadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PublicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "publicationYear" | "doi" | "openAlexId" | "journalName" | "publisher" | "volume" | "issue" | "pages" | "citationCount" | "isOpenAccess" | "openAccessUrl" | "landingPageUrl" | "abstract" | "status" | "rawMetadata" | "createdAt" | "updatedAt", ExtArgs["result"]["publication"]>
  export type PublicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | Publication$authorsArgs<ExtArgs>
    naacMappings?: boolean | Publication$naacMappingsArgs<ExtArgs>
    _count?: boolean | PublicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PublicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PublicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PublicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publication"
    objects: {
      authors: Prisma.$PublicationAuthorPayload<ExtArgs>[]
      naacMappings: Prisma.$NaacPublicationMappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      publicationYear: number
      doi: string | null
      openAlexId: string | null
      journalName: string | null
      publisher: string | null
      volume: string | null
      issue: string | null
      pages: string | null
      citationCount: number
      isOpenAccess: boolean
      openAccessUrl: string | null
      landingPageUrl: string | null
      abstract: string | null
      status: $Enums.PublicationStatus
      rawMetadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["publication"]>
    composites: {}
  }

  type PublicationGetPayload<S extends boolean | null | undefined | PublicationDefaultArgs> = $Result.GetResult<Prisma.$PublicationPayload, S>

  type PublicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicationCountAggregateInputType | true
    }

  export interface PublicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publication'], meta: { name: 'Publication' } }
    /**
     * Find zero or one Publication that matches the filter.
     * @param {PublicationFindUniqueArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicationFindUniqueArgs>(args: SelectSubset<T, PublicationFindUniqueArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicationFindUniqueOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicationFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicationFindFirstArgs>(args?: SelectSubset<T, PublicationFindFirstArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicationFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publications
     * const publications = await prisma.publication.findMany()
     * 
     * // Get first 10 Publications
     * const publications = await prisma.publication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicationWithIdOnly = await prisma.publication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicationFindManyArgs>(args?: SelectSubset<T, PublicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publication.
     * @param {PublicationCreateArgs} args - Arguments to create a Publication.
     * @example
     * // Create one Publication
     * const Publication = await prisma.publication.create({
     *   data: {
     *     // ... data to create a Publication
     *   }
     * })
     * 
     */
    create<T extends PublicationCreateArgs>(args: SelectSubset<T, PublicationCreateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publications.
     * @param {PublicationCreateManyArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicationCreateManyArgs>(args?: SelectSubset<T, PublicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publications and returns the data saved in the database.
     * @param {PublicationCreateManyAndReturnArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publications and only return the `id`
     * const publicationWithIdOnly = await prisma.publication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicationCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publication.
     * @param {PublicationDeleteArgs} args - Arguments to delete one Publication.
     * @example
     * // Delete one Publication
     * const Publication = await prisma.publication.delete({
     *   where: {
     *     // ... filter to delete one Publication
     *   }
     * })
     * 
     */
    delete<T extends PublicationDeleteArgs>(args: SelectSubset<T, PublicationDeleteArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publication.
     * @param {PublicationUpdateArgs} args - Arguments to update one Publication.
     * @example
     * // Update one Publication
     * const publication = await prisma.publication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicationUpdateArgs>(args: SelectSubset<T, PublicationUpdateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publications.
     * @param {PublicationDeleteManyArgs} args - Arguments to filter Publications to delete.
     * @example
     * // Delete a few Publications
     * const { count } = await prisma.publication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicationDeleteManyArgs>(args?: SelectSubset<T, PublicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicationUpdateManyArgs>(args: SelectSubset<T, PublicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications and returns the data updated in the database.
     * @param {PublicationUpdateManyAndReturnArgs} args - Arguments to update many Publications.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publications and only return the `id`
     * const publicationWithIdOnly = await prisma.publication.updateManyAndReturn({
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
    updateManyAndReturn<T extends PublicationUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publication.
     * @param {PublicationUpsertArgs} args - Arguments to update or create a Publication.
     * @example
     * // Update or create a Publication
     * const publication = await prisma.publication.upsert({
     *   create: {
     *     // ... data to create a Publication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publication we want to update
     *   }
     * })
     */
    upsert<T extends PublicationUpsertArgs>(args: SelectSubset<T, PublicationUpsertArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationCountArgs} args - Arguments to filter Publications to count.
     * @example
     * // Count the number of Publications
     * const count = await prisma.publication.count({
     *   where: {
     *     // ... the filter for the Publications we want to count
     *   }
     * })
    **/
    count<T extends PublicationCountArgs>(
      args?: Subset<T, PublicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicationAggregateArgs>(args: Subset<T, PublicationAggregateArgs>): Prisma.PrismaPromise<GetPublicationAggregateType<T>>

    /**
     * Group by Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationGroupByArgs} args - Group by arguments.
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
      T extends PublicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationGroupByArgs['orderBy'] }
        : { orderBy?: PublicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publication model
   */
  readonly fields: PublicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authors<T extends Publication$authorsArgs<ExtArgs> = {}>(args?: Subset<T, Publication$authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    naacMappings<T extends Publication$naacMappingsArgs<ExtArgs> = {}>(args?: Subset<T, Publication$naacMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaacPublicationMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Publication model
   */
  interface PublicationFieldRefs {
    readonly id: FieldRef<"Publication", 'String'>
    readonly title: FieldRef<"Publication", 'String'>
    readonly publicationYear: FieldRef<"Publication", 'Int'>
    readonly doi: FieldRef<"Publication", 'String'>
    readonly openAlexId: FieldRef<"Publication", 'String'>
    readonly journalName: FieldRef<"Publication", 'String'>
    readonly publisher: FieldRef<"Publication", 'String'>
    readonly volume: FieldRef<"Publication", 'String'>
    readonly issue: FieldRef<"Publication", 'String'>
    readonly pages: FieldRef<"Publication", 'String'>
    readonly citationCount: FieldRef<"Publication", 'Int'>
    readonly isOpenAccess: FieldRef<"Publication", 'Boolean'>
    readonly openAccessUrl: FieldRef<"Publication", 'String'>
    readonly landingPageUrl: FieldRef<"Publication", 'String'>
    readonly abstract: FieldRef<"Publication", 'String'>
    readonly status: FieldRef<"Publication", 'PublicationStatus'>
    readonly rawMetadata: FieldRef<"Publication", 'Json'>
    readonly createdAt: FieldRef<"Publication", 'DateTime'>
    readonly updatedAt: FieldRef<"Publication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Publication findUnique
   */
  export type PublicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findUniqueOrThrow
   */
  export type PublicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findFirst
   */
  export type PublicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findFirstOrThrow
   */
  export type PublicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findMany
   */
  export type PublicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publications to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication create
   */
  export type PublicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Publication.
     */
    data: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
  }

  /**
   * Publication createMany
   */
  export type PublicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publications.
     */
    data: PublicationCreateManyInput | PublicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publication createManyAndReturn
   */
  export type PublicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * The data used to create many Publications.
     */
    data: PublicationCreateManyInput | PublicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publication update
   */
  export type PublicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Publication.
     */
    data: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
    /**
     * Choose, which Publication to update.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication updateMany
   */
  export type PublicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publications.
     */
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to update.
     */
    limit?: number
  }

  /**
   * Publication updateManyAndReturn
   */
  export type PublicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * The data used to update Publications.
     */
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to update.
     */
    limit?: number
  }

  /**
   * Publication upsert
   */
  export type PublicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Publication to update in case it exists.
     */
    where: PublicationWhereUniqueInput
    /**
     * In case the Publication found by the `where` argument doesn't exist, create a new Publication with this data.
     */
    create: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
    /**
     * In case the Publication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
  }

  /**
   * Publication delete
   */
  export type PublicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter which Publication to delete.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication deleteMany
   */
  export type PublicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publications to delete
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to delete.
     */
    limit?: number
  }

  /**
   * Publication.authors
   */
  export type Publication$authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorInclude<ExtArgs> | null
    where?: PublicationAuthorWhereInput
    orderBy?: PublicationAuthorOrderByWithRelationInput | PublicationAuthorOrderByWithRelationInput[]
    cursor?: PublicationAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicationAuthorScalarFieldEnum | PublicationAuthorScalarFieldEnum[]
  }

  /**
   * Publication.naacMappings
   */
  export type Publication$naacMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingInclude<ExtArgs> | null
    where?: NaacPublicationMappingWhereInput
    orderBy?: NaacPublicationMappingOrderByWithRelationInput | NaacPublicationMappingOrderByWithRelationInput[]
    cursor?: NaacPublicationMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NaacPublicationMappingScalarFieldEnum | NaacPublicationMappingScalarFieldEnum[]
  }

  /**
   * Publication without action
   */
  export type PublicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
  }


  /**
   * Model PublicationAuthor
   */

  export type AggregatePublicationAuthor = {
    _count: PublicationAuthorCountAggregateOutputType | null
    _avg: PublicationAuthorAvgAggregateOutputType | null
    _sum: PublicationAuthorSumAggregateOutputType | null
    _min: PublicationAuthorMinAggregateOutputType | null
    _max: PublicationAuthorMaxAggregateOutputType | null
  }

  export type PublicationAuthorAvgAggregateOutputType = {
    authorPosition: number | null
  }

  export type PublicationAuthorSumAggregateOutputType = {
    authorPosition: number | null
  }

  export type PublicationAuthorMinAggregateOutputType = {
    id: string | null
    publicationId: string | null
    facultyProfileId: string | null
    authorPosition: number | null
    isCorresponding: boolean | null
  }

  export type PublicationAuthorMaxAggregateOutputType = {
    id: string | null
    publicationId: string | null
    facultyProfileId: string | null
    authorPosition: number | null
    isCorresponding: boolean | null
  }

  export type PublicationAuthorCountAggregateOutputType = {
    id: number
    publicationId: number
    facultyProfileId: number
    authorPosition: number
    isCorresponding: number
    _all: number
  }


  export type PublicationAuthorAvgAggregateInputType = {
    authorPosition?: true
  }

  export type PublicationAuthorSumAggregateInputType = {
    authorPosition?: true
  }

  export type PublicationAuthorMinAggregateInputType = {
    id?: true
    publicationId?: true
    facultyProfileId?: true
    authorPosition?: true
    isCorresponding?: true
  }

  export type PublicationAuthorMaxAggregateInputType = {
    id?: true
    publicationId?: true
    facultyProfileId?: true
    authorPosition?: true
    isCorresponding?: true
  }

  export type PublicationAuthorCountAggregateInputType = {
    id?: true
    publicationId?: true
    facultyProfileId?: true
    authorPosition?: true
    isCorresponding?: true
    _all?: true
  }

  export type PublicationAuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicationAuthor to aggregate.
     */
    where?: PublicationAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationAuthors to fetch.
     */
    orderBy?: PublicationAuthorOrderByWithRelationInput | PublicationAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicationAuthors
    **/
    _count?: true | PublicationAuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicationAuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicationAuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationAuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationAuthorMaxAggregateInputType
  }

  export type GetPublicationAuthorAggregateType<T extends PublicationAuthorAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicationAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicationAuthor[P]>
      : GetScalarType<T[P], AggregatePublicationAuthor[P]>
  }




  export type PublicationAuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationAuthorWhereInput
    orderBy?: PublicationAuthorOrderByWithAggregationInput | PublicationAuthorOrderByWithAggregationInput[]
    by: PublicationAuthorScalarFieldEnum[] | PublicationAuthorScalarFieldEnum
    having?: PublicationAuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationAuthorCountAggregateInputType | true
    _avg?: PublicationAuthorAvgAggregateInputType
    _sum?: PublicationAuthorSumAggregateInputType
    _min?: PublicationAuthorMinAggregateInputType
    _max?: PublicationAuthorMaxAggregateInputType
  }

  export type PublicationAuthorGroupByOutputType = {
    id: string
    publicationId: string
    facultyProfileId: string
    authorPosition: number
    isCorresponding: boolean
    _count: PublicationAuthorCountAggregateOutputType | null
    _avg: PublicationAuthorAvgAggregateOutputType | null
    _sum: PublicationAuthorSumAggregateOutputType | null
    _min: PublicationAuthorMinAggregateOutputType | null
    _max: PublicationAuthorMaxAggregateOutputType | null
  }

  type GetPublicationAuthorGroupByPayload<T extends PublicationAuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationAuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationAuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationAuthorGroupByOutputType[P]>
        }
      >
    >


  export type PublicationAuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicationId?: boolean
    facultyProfileId?: boolean
    authorPosition?: boolean
    isCorresponding?: boolean
    publication?: boolean | PublicationDefaultArgs<ExtArgs>
    facultyProfile?: boolean | FacultyProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicationAuthor"]>

  export type PublicationAuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicationId?: boolean
    facultyProfileId?: boolean
    authorPosition?: boolean
    isCorresponding?: boolean
    publication?: boolean | PublicationDefaultArgs<ExtArgs>
    facultyProfile?: boolean | FacultyProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicationAuthor"]>

  export type PublicationAuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicationId?: boolean
    facultyProfileId?: boolean
    authorPosition?: boolean
    isCorresponding?: boolean
    publication?: boolean | PublicationDefaultArgs<ExtArgs>
    facultyProfile?: boolean | FacultyProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicationAuthor"]>

  export type PublicationAuthorSelectScalar = {
    id?: boolean
    publicationId?: boolean
    facultyProfileId?: boolean
    authorPosition?: boolean
    isCorresponding?: boolean
  }

  export type PublicationAuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicationId" | "facultyProfileId" | "authorPosition" | "isCorresponding", ExtArgs["result"]["publicationAuthor"]>
  export type PublicationAuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publication?: boolean | PublicationDefaultArgs<ExtArgs>
    facultyProfile?: boolean | FacultyProfileDefaultArgs<ExtArgs>
  }
  export type PublicationAuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publication?: boolean | PublicationDefaultArgs<ExtArgs>
    facultyProfile?: boolean | FacultyProfileDefaultArgs<ExtArgs>
  }
  export type PublicationAuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publication?: boolean | PublicationDefaultArgs<ExtArgs>
    facultyProfile?: boolean | FacultyProfileDefaultArgs<ExtArgs>
  }

  export type $PublicationAuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicationAuthor"
    objects: {
      publication: Prisma.$PublicationPayload<ExtArgs>
      facultyProfile: Prisma.$FacultyProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicationId: string
      facultyProfileId: string
      authorPosition: number
      isCorresponding: boolean
    }, ExtArgs["result"]["publicationAuthor"]>
    composites: {}
  }

  type PublicationAuthorGetPayload<S extends boolean | null | undefined | PublicationAuthorDefaultArgs> = $Result.GetResult<Prisma.$PublicationAuthorPayload, S>

  type PublicationAuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicationAuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicationAuthorCountAggregateInputType | true
    }

  export interface PublicationAuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicationAuthor'], meta: { name: 'PublicationAuthor' } }
    /**
     * Find zero or one PublicationAuthor that matches the filter.
     * @param {PublicationAuthorFindUniqueArgs} args - Arguments to find a PublicationAuthor
     * @example
     * // Get one PublicationAuthor
     * const publicationAuthor = await prisma.publicationAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicationAuthorFindUniqueArgs>(args: SelectSubset<T, PublicationAuthorFindUniqueArgs<ExtArgs>>): Prisma__PublicationAuthorClient<$Result.GetResult<Prisma.$PublicationAuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublicationAuthor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicationAuthorFindUniqueOrThrowArgs} args - Arguments to find a PublicationAuthor
     * @example
     * // Get one PublicationAuthor
     * const publicationAuthor = await prisma.publicationAuthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicationAuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicationAuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicationAuthorClient<$Result.GetResult<Prisma.$PublicationAuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicationAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAuthorFindFirstArgs} args - Arguments to find a PublicationAuthor
     * @example
     * // Get one PublicationAuthor
     * const publicationAuthor = await prisma.publicationAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicationAuthorFindFirstArgs>(args?: SelectSubset<T, PublicationAuthorFindFirstArgs<ExtArgs>>): Prisma__PublicationAuthorClient<$Result.GetResult<Prisma.$PublicationAuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicationAuthor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAuthorFindFirstOrThrowArgs} args - Arguments to find a PublicationAuthor
     * @example
     * // Get one PublicationAuthor
     * const publicationAuthor = await prisma.publicationAuthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicationAuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicationAuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicationAuthorClient<$Result.GetResult<Prisma.$PublicationAuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublicationAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicationAuthors
     * const publicationAuthors = await prisma.publicationAuthor.findMany()
     * 
     * // Get first 10 PublicationAuthors
     * const publicationAuthors = await prisma.publicationAuthor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicationAuthorWithIdOnly = await prisma.publicationAuthor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicationAuthorFindManyArgs>(args?: SelectSubset<T, PublicationAuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublicationAuthor.
     * @param {PublicationAuthorCreateArgs} args - Arguments to create a PublicationAuthor.
     * @example
     * // Create one PublicationAuthor
     * const PublicationAuthor = await prisma.publicationAuthor.create({
     *   data: {
     *     // ... data to create a PublicationAuthor
     *   }
     * })
     * 
     */
    create<T extends PublicationAuthorCreateArgs>(args: SelectSubset<T, PublicationAuthorCreateArgs<ExtArgs>>): Prisma__PublicationAuthorClient<$Result.GetResult<Prisma.$PublicationAuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublicationAuthors.
     * @param {PublicationAuthorCreateManyArgs} args - Arguments to create many PublicationAuthors.
     * @example
     * // Create many PublicationAuthors
     * const publicationAuthor = await prisma.publicationAuthor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicationAuthorCreateManyArgs>(args?: SelectSubset<T, PublicationAuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicationAuthors and returns the data saved in the database.
     * @param {PublicationAuthorCreateManyAndReturnArgs} args - Arguments to create many PublicationAuthors.
     * @example
     * // Create many PublicationAuthors
     * const publicationAuthor = await prisma.publicationAuthor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicationAuthors and only return the `id`
     * const publicationAuthorWithIdOnly = await prisma.publicationAuthor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicationAuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicationAuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationAuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublicationAuthor.
     * @param {PublicationAuthorDeleteArgs} args - Arguments to delete one PublicationAuthor.
     * @example
     * // Delete one PublicationAuthor
     * const PublicationAuthor = await prisma.publicationAuthor.delete({
     *   where: {
     *     // ... filter to delete one PublicationAuthor
     *   }
     * })
     * 
     */
    delete<T extends PublicationAuthorDeleteArgs>(args: SelectSubset<T, PublicationAuthorDeleteArgs<ExtArgs>>): Prisma__PublicationAuthorClient<$Result.GetResult<Prisma.$PublicationAuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublicationAuthor.
     * @param {PublicationAuthorUpdateArgs} args - Arguments to update one PublicationAuthor.
     * @example
     * // Update one PublicationAuthor
     * const publicationAuthor = await prisma.publicationAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicationAuthorUpdateArgs>(args: SelectSubset<T, PublicationAuthorUpdateArgs<ExtArgs>>): Prisma__PublicationAuthorClient<$Result.GetResult<Prisma.$PublicationAuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublicationAuthors.
     * @param {PublicationAuthorDeleteManyArgs} args - Arguments to filter PublicationAuthors to delete.
     * @example
     * // Delete a few PublicationAuthors
     * const { count } = await prisma.publicationAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicationAuthorDeleteManyArgs>(args?: SelectSubset<T, PublicationAuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicationAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicationAuthors
     * const publicationAuthor = await prisma.publicationAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicationAuthorUpdateManyArgs>(args: SelectSubset<T, PublicationAuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicationAuthors and returns the data updated in the database.
     * @param {PublicationAuthorUpdateManyAndReturnArgs} args - Arguments to update many PublicationAuthors.
     * @example
     * // Update many PublicationAuthors
     * const publicationAuthor = await prisma.publicationAuthor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublicationAuthors and only return the `id`
     * const publicationAuthorWithIdOnly = await prisma.publicationAuthor.updateManyAndReturn({
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
    updateManyAndReturn<T extends PublicationAuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicationAuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationAuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublicationAuthor.
     * @param {PublicationAuthorUpsertArgs} args - Arguments to update or create a PublicationAuthor.
     * @example
     * // Update or create a PublicationAuthor
     * const publicationAuthor = await prisma.publicationAuthor.upsert({
     *   create: {
     *     // ... data to create a PublicationAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicationAuthor we want to update
     *   }
     * })
     */
    upsert<T extends PublicationAuthorUpsertArgs>(args: SelectSubset<T, PublicationAuthorUpsertArgs<ExtArgs>>): Prisma__PublicationAuthorClient<$Result.GetResult<Prisma.$PublicationAuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublicationAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAuthorCountArgs} args - Arguments to filter PublicationAuthors to count.
     * @example
     * // Count the number of PublicationAuthors
     * const count = await prisma.publicationAuthor.count({
     *   where: {
     *     // ... the filter for the PublicationAuthors we want to count
     *   }
     * })
    **/
    count<T extends PublicationAuthorCountArgs>(
      args?: Subset<T, PublicationAuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationAuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicationAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicationAuthorAggregateArgs>(args: Subset<T, PublicationAuthorAggregateArgs>): Prisma.PrismaPromise<GetPublicationAuthorAggregateType<T>>

    /**
     * Group by PublicationAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAuthorGroupByArgs} args - Group by arguments.
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
      T extends PublicationAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationAuthorGroupByArgs['orderBy'] }
        : { orderBy?: PublicationAuthorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublicationAuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicationAuthor model
   */
  readonly fields: PublicationAuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicationAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicationAuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publication<T extends PublicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicationDefaultArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    facultyProfile<T extends FacultyProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultyProfileDefaultArgs<ExtArgs>>): Prisma__FacultyProfileClient<$Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PublicationAuthor model
   */
  interface PublicationAuthorFieldRefs {
    readonly id: FieldRef<"PublicationAuthor", 'String'>
    readonly publicationId: FieldRef<"PublicationAuthor", 'String'>
    readonly facultyProfileId: FieldRef<"PublicationAuthor", 'String'>
    readonly authorPosition: FieldRef<"PublicationAuthor", 'Int'>
    readonly isCorresponding: FieldRef<"PublicationAuthor", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PublicationAuthor findUnique
   */
  export type PublicationAuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorInclude<ExtArgs> | null
    /**
     * Filter, which PublicationAuthor to fetch.
     */
    where: PublicationAuthorWhereUniqueInput
  }

  /**
   * PublicationAuthor findUniqueOrThrow
   */
  export type PublicationAuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorInclude<ExtArgs> | null
    /**
     * Filter, which PublicationAuthor to fetch.
     */
    where: PublicationAuthorWhereUniqueInput
  }

  /**
   * PublicationAuthor findFirst
   */
  export type PublicationAuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorInclude<ExtArgs> | null
    /**
     * Filter, which PublicationAuthor to fetch.
     */
    where?: PublicationAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationAuthors to fetch.
     */
    orderBy?: PublicationAuthorOrderByWithRelationInput | PublicationAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicationAuthors.
     */
    cursor?: PublicationAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationAuthors.
     */
    distinct?: PublicationAuthorScalarFieldEnum | PublicationAuthorScalarFieldEnum[]
  }

  /**
   * PublicationAuthor findFirstOrThrow
   */
  export type PublicationAuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorInclude<ExtArgs> | null
    /**
     * Filter, which PublicationAuthor to fetch.
     */
    where?: PublicationAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationAuthors to fetch.
     */
    orderBy?: PublicationAuthorOrderByWithRelationInput | PublicationAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicationAuthors.
     */
    cursor?: PublicationAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationAuthors.
     */
    distinct?: PublicationAuthorScalarFieldEnum | PublicationAuthorScalarFieldEnum[]
  }

  /**
   * PublicationAuthor findMany
   */
  export type PublicationAuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorInclude<ExtArgs> | null
    /**
     * Filter, which PublicationAuthors to fetch.
     */
    where?: PublicationAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationAuthors to fetch.
     */
    orderBy?: PublicationAuthorOrderByWithRelationInput | PublicationAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicationAuthors.
     */
    cursor?: PublicationAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationAuthors.
     */
    distinct?: PublicationAuthorScalarFieldEnum | PublicationAuthorScalarFieldEnum[]
  }

  /**
   * PublicationAuthor create
   */
  export type PublicationAuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicationAuthor.
     */
    data: XOR<PublicationAuthorCreateInput, PublicationAuthorUncheckedCreateInput>
  }

  /**
   * PublicationAuthor createMany
   */
  export type PublicationAuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicationAuthors.
     */
    data: PublicationAuthorCreateManyInput | PublicationAuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicationAuthor createManyAndReturn
   */
  export type PublicationAuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * The data used to create many PublicationAuthors.
     */
    data: PublicationAuthorCreateManyInput | PublicationAuthorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicationAuthor update
   */
  export type PublicationAuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicationAuthor.
     */
    data: XOR<PublicationAuthorUpdateInput, PublicationAuthorUncheckedUpdateInput>
    /**
     * Choose, which PublicationAuthor to update.
     */
    where: PublicationAuthorWhereUniqueInput
  }

  /**
   * PublicationAuthor updateMany
   */
  export type PublicationAuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicationAuthors.
     */
    data: XOR<PublicationAuthorUpdateManyMutationInput, PublicationAuthorUncheckedUpdateManyInput>
    /**
     * Filter which PublicationAuthors to update
     */
    where?: PublicationAuthorWhereInput
    /**
     * Limit how many PublicationAuthors to update.
     */
    limit?: number
  }

  /**
   * PublicationAuthor updateManyAndReturn
   */
  export type PublicationAuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * The data used to update PublicationAuthors.
     */
    data: XOR<PublicationAuthorUpdateManyMutationInput, PublicationAuthorUncheckedUpdateManyInput>
    /**
     * Filter which PublicationAuthors to update
     */
    where?: PublicationAuthorWhereInput
    /**
     * Limit how many PublicationAuthors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicationAuthor upsert
   */
  export type PublicationAuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicationAuthor to update in case it exists.
     */
    where: PublicationAuthorWhereUniqueInput
    /**
     * In case the PublicationAuthor found by the `where` argument doesn't exist, create a new PublicationAuthor with this data.
     */
    create: XOR<PublicationAuthorCreateInput, PublicationAuthorUncheckedCreateInput>
    /**
     * In case the PublicationAuthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationAuthorUpdateInput, PublicationAuthorUncheckedUpdateInput>
  }

  /**
   * PublicationAuthor delete
   */
  export type PublicationAuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorInclude<ExtArgs> | null
    /**
     * Filter which PublicationAuthor to delete.
     */
    where: PublicationAuthorWhereUniqueInput
  }

  /**
   * PublicationAuthor deleteMany
   */
  export type PublicationAuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicationAuthors to delete
     */
    where?: PublicationAuthorWhereInput
    /**
     * Limit how many PublicationAuthors to delete.
     */
    limit?: number
  }

  /**
   * PublicationAuthor without action
   */
  export type PublicationAuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationAuthor
     */
    select?: PublicationAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicationAuthor
     */
    omit?: PublicationAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationAuthorInclude<ExtArgs> | null
  }


  /**
   * Model NaacCriterion
   */

  export type AggregateNaacCriterion = {
    _count: NaacCriterionCountAggregateOutputType | null
    _min: NaacCriterionMinAggregateOutputType | null
    _max: NaacCriterionMaxAggregateOutputType | null
  }

  export type NaacCriterionMinAggregateOutputType = {
    id: string | null
    code: string | null
    category: string | null
    description: string | null
  }

  export type NaacCriterionMaxAggregateOutputType = {
    id: string | null
    code: string | null
    category: string | null
    description: string | null
  }

  export type NaacCriterionCountAggregateOutputType = {
    id: number
    code: number
    category: number
    description: number
    _all: number
  }


  export type NaacCriterionMinAggregateInputType = {
    id?: true
    code?: true
    category?: true
    description?: true
  }

  export type NaacCriterionMaxAggregateInputType = {
    id?: true
    code?: true
    category?: true
    description?: true
  }

  export type NaacCriterionCountAggregateInputType = {
    id?: true
    code?: true
    category?: true
    description?: true
    _all?: true
  }

  export type NaacCriterionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NaacCriterion to aggregate.
     */
    where?: NaacCriterionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NaacCriteria to fetch.
     */
    orderBy?: NaacCriterionOrderByWithRelationInput | NaacCriterionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NaacCriterionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NaacCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NaacCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NaacCriteria
    **/
    _count?: true | NaacCriterionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NaacCriterionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NaacCriterionMaxAggregateInputType
  }

  export type GetNaacCriterionAggregateType<T extends NaacCriterionAggregateArgs> = {
        [P in keyof T & keyof AggregateNaacCriterion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNaacCriterion[P]>
      : GetScalarType<T[P], AggregateNaacCriterion[P]>
  }




  export type NaacCriterionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NaacCriterionWhereInput
    orderBy?: NaacCriterionOrderByWithAggregationInput | NaacCriterionOrderByWithAggregationInput[]
    by: NaacCriterionScalarFieldEnum[] | NaacCriterionScalarFieldEnum
    having?: NaacCriterionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NaacCriterionCountAggregateInputType | true
    _min?: NaacCriterionMinAggregateInputType
    _max?: NaacCriterionMaxAggregateInputType
  }

  export type NaacCriterionGroupByOutputType = {
    id: string
    code: string
    category: string
    description: string
    _count: NaacCriterionCountAggregateOutputType | null
    _min: NaacCriterionMinAggregateOutputType | null
    _max: NaacCriterionMaxAggregateOutputType | null
  }

  type GetNaacCriterionGroupByPayload<T extends NaacCriterionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NaacCriterionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NaacCriterionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NaacCriterionGroupByOutputType[P]>
            : GetScalarType<T[P], NaacCriterionGroupByOutputType[P]>
        }
      >
    >


  export type NaacCriterionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    category?: boolean
    description?: boolean
    mappings?: boolean | NaacCriterion$mappingsArgs<ExtArgs>
    _count?: boolean | NaacCriterionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["naacCriterion"]>

  export type NaacCriterionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    category?: boolean
    description?: boolean
  }, ExtArgs["result"]["naacCriterion"]>

  export type NaacCriterionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    category?: boolean
    description?: boolean
  }, ExtArgs["result"]["naacCriterion"]>

  export type NaacCriterionSelectScalar = {
    id?: boolean
    code?: boolean
    category?: boolean
    description?: boolean
  }

  export type NaacCriterionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "category" | "description", ExtArgs["result"]["naacCriterion"]>
  export type NaacCriterionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | NaacCriterion$mappingsArgs<ExtArgs>
    _count?: boolean | NaacCriterionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NaacCriterionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NaacCriterionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NaacCriterionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NaacCriterion"
    objects: {
      mappings: Prisma.$NaacPublicationMappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      category: string
      description: string
    }, ExtArgs["result"]["naacCriterion"]>
    composites: {}
  }

  type NaacCriterionGetPayload<S extends boolean | null | undefined | NaacCriterionDefaultArgs> = $Result.GetResult<Prisma.$NaacCriterionPayload, S>

  type NaacCriterionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NaacCriterionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NaacCriterionCountAggregateInputType | true
    }

  export interface NaacCriterionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NaacCriterion'], meta: { name: 'NaacCriterion' } }
    /**
     * Find zero or one NaacCriterion that matches the filter.
     * @param {NaacCriterionFindUniqueArgs} args - Arguments to find a NaacCriterion
     * @example
     * // Get one NaacCriterion
     * const naacCriterion = await prisma.naacCriterion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NaacCriterionFindUniqueArgs>(args: SelectSubset<T, NaacCriterionFindUniqueArgs<ExtArgs>>): Prisma__NaacCriterionClient<$Result.GetResult<Prisma.$NaacCriterionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NaacCriterion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NaacCriterionFindUniqueOrThrowArgs} args - Arguments to find a NaacCriterion
     * @example
     * // Get one NaacCriterion
     * const naacCriterion = await prisma.naacCriterion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NaacCriterionFindUniqueOrThrowArgs>(args: SelectSubset<T, NaacCriterionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NaacCriterionClient<$Result.GetResult<Prisma.$NaacCriterionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NaacCriterion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacCriterionFindFirstArgs} args - Arguments to find a NaacCriterion
     * @example
     * // Get one NaacCriterion
     * const naacCriterion = await prisma.naacCriterion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NaacCriterionFindFirstArgs>(args?: SelectSubset<T, NaacCriterionFindFirstArgs<ExtArgs>>): Prisma__NaacCriterionClient<$Result.GetResult<Prisma.$NaacCriterionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NaacCriterion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacCriterionFindFirstOrThrowArgs} args - Arguments to find a NaacCriterion
     * @example
     * // Get one NaacCriterion
     * const naacCriterion = await prisma.naacCriterion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NaacCriterionFindFirstOrThrowArgs>(args?: SelectSubset<T, NaacCriterionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NaacCriterionClient<$Result.GetResult<Prisma.$NaacCriterionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NaacCriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacCriterionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NaacCriteria
     * const naacCriteria = await prisma.naacCriterion.findMany()
     * 
     * // Get first 10 NaacCriteria
     * const naacCriteria = await prisma.naacCriterion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const naacCriterionWithIdOnly = await prisma.naacCriterion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NaacCriterionFindManyArgs>(args?: SelectSubset<T, NaacCriterionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaacCriterionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NaacCriterion.
     * @param {NaacCriterionCreateArgs} args - Arguments to create a NaacCriterion.
     * @example
     * // Create one NaacCriterion
     * const NaacCriterion = await prisma.naacCriterion.create({
     *   data: {
     *     // ... data to create a NaacCriterion
     *   }
     * })
     * 
     */
    create<T extends NaacCriterionCreateArgs>(args: SelectSubset<T, NaacCriterionCreateArgs<ExtArgs>>): Prisma__NaacCriterionClient<$Result.GetResult<Prisma.$NaacCriterionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NaacCriteria.
     * @param {NaacCriterionCreateManyArgs} args - Arguments to create many NaacCriteria.
     * @example
     * // Create many NaacCriteria
     * const naacCriterion = await prisma.naacCriterion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NaacCriterionCreateManyArgs>(args?: SelectSubset<T, NaacCriterionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NaacCriteria and returns the data saved in the database.
     * @param {NaacCriterionCreateManyAndReturnArgs} args - Arguments to create many NaacCriteria.
     * @example
     * // Create many NaacCriteria
     * const naacCriterion = await prisma.naacCriterion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NaacCriteria and only return the `id`
     * const naacCriterionWithIdOnly = await prisma.naacCriterion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NaacCriterionCreateManyAndReturnArgs>(args?: SelectSubset<T, NaacCriterionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaacCriterionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NaacCriterion.
     * @param {NaacCriterionDeleteArgs} args - Arguments to delete one NaacCriterion.
     * @example
     * // Delete one NaacCriterion
     * const NaacCriterion = await prisma.naacCriterion.delete({
     *   where: {
     *     // ... filter to delete one NaacCriterion
     *   }
     * })
     * 
     */
    delete<T extends NaacCriterionDeleteArgs>(args: SelectSubset<T, NaacCriterionDeleteArgs<ExtArgs>>): Prisma__NaacCriterionClient<$Result.GetResult<Prisma.$NaacCriterionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NaacCriterion.
     * @param {NaacCriterionUpdateArgs} args - Arguments to update one NaacCriterion.
     * @example
     * // Update one NaacCriterion
     * const naacCriterion = await prisma.naacCriterion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NaacCriterionUpdateArgs>(args: SelectSubset<T, NaacCriterionUpdateArgs<ExtArgs>>): Prisma__NaacCriterionClient<$Result.GetResult<Prisma.$NaacCriterionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NaacCriteria.
     * @param {NaacCriterionDeleteManyArgs} args - Arguments to filter NaacCriteria to delete.
     * @example
     * // Delete a few NaacCriteria
     * const { count } = await prisma.naacCriterion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NaacCriterionDeleteManyArgs>(args?: SelectSubset<T, NaacCriterionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NaacCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacCriterionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NaacCriteria
     * const naacCriterion = await prisma.naacCriterion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NaacCriterionUpdateManyArgs>(args: SelectSubset<T, NaacCriterionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NaacCriteria and returns the data updated in the database.
     * @param {NaacCriterionUpdateManyAndReturnArgs} args - Arguments to update many NaacCriteria.
     * @example
     * // Update many NaacCriteria
     * const naacCriterion = await prisma.naacCriterion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NaacCriteria and only return the `id`
     * const naacCriterionWithIdOnly = await prisma.naacCriterion.updateManyAndReturn({
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
    updateManyAndReturn<T extends NaacCriterionUpdateManyAndReturnArgs>(args: SelectSubset<T, NaacCriterionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaacCriterionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NaacCriterion.
     * @param {NaacCriterionUpsertArgs} args - Arguments to update or create a NaacCriterion.
     * @example
     * // Update or create a NaacCriterion
     * const naacCriterion = await prisma.naacCriterion.upsert({
     *   create: {
     *     // ... data to create a NaacCriterion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NaacCriterion we want to update
     *   }
     * })
     */
    upsert<T extends NaacCriterionUpsertArgs>(args: SelectSubset<T, NaacCriterionUpsertArgs<ExtArgs>>): Prisma__NaacCriterionClient<$Result.GetResult<Prisma.$NaacCriterionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NaacCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacCriterionCountArgs} args - Arguments to filter NaacCriteria to count.
     * @example
     * // Count the number of NaacCriteria
     * const count = await prisma.naacCriterion.count({
     *   where: {
     *     // ... the filter for the NaacCriteria we want to count
     *   }
     * })
    **/
    count<T extends NaacCriterionCountArgs>(
      args?: Subset<T, NaacCriterionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NaacCriterionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NaacCriterion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacCriterionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NaacCriterionAggregateArgs>(args: Subset<T, NaacCriterionAggregateArgs>): Prisma.PrismaPromise<GetNaacCriterionAggregateType<T>>

    /**
     * Group by NaacCriterion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacCriterionGroupByArgs} args - Group by arguments.
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
      T extends NaacCriterionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NaacCriterionGroupByArgs['orderBy'] }
        : { orderBy?: NaacCriterionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NaacCriterionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNaacCriterionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NaacCriterion model
   */
  readonly fields: NaacCriterionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NaacCriterion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NaacCriterionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mappings<T extends NaacCriterion$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, NaacCriterion$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaacPublicationMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NaacCriterion model
   */
  interface NaacCriterionFieldRefs {
    readonly id: FieldRef<"NaacCriterion", 'String'>
    readonly code: FieldRef<"NaacCriterion", 'String'>
    readonly category: FieldRef<"NaacCriterion", 'String'>
    readonly description: FieldRef<"NaacCriterion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NaacCriterion findUnique
   */
  export type NaacCriterionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacCriterion
     */
    select?: NaacCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacCriterion
     */
    omit?: NaacCriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacCriterionInclude<ExtArgs> | null
    /**
     * Filter, which NaacCriterion to fetch.
     */
    where: NaacCriterionWhereUniqueInput
  }

  /**
   * NaacCriterion findUniqueOrThrow
   */
  export type NaacCriterionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacCriterion
     */
    select?: NaacCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacCriterion
     */
    omit?: NaacCriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacCriterionInclude<ExtArgs> | null
    /**
     * Filter, which NaacCriterion to fetch.
     */
    where: NaacCriterionWhereUniqueInput
  }

  /**
   * NaacCriterion findFirst
   */
  export type NaacCriterionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacCriterion
     */
    select?: NaacCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacCriterion
     */
    omit?: NaacCriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacCriterionInclude<ExtArgs> | null
    /**
     * Filter, which NaacCriterion to fetch.
     */
    where?: NaacCriterionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NaacCriteria to fetch.
     */
    orderBy?: NaacCriterionOrderByWithRelationInput | NaacCriterionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NaacCriteria.
     */
    cursor?: NaacCriterionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NaacCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NaacCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NaacCriteria.
     */
    distinct?: NaacCriterionScalarFieldEnum | NaacCriterionScalarFieldEnum[]
  }

  /**
   * NaacCriterion findFirstOrThrow
   */
  export type NaacCriterionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacCriterion
     */
    select?: NaacCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacCriterion
     */
    omit?: NaacCriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacCriterionInclude<ExtArgs> | null
    /**
     * Filter, which NaacCriterion to fetch.
     */
    where?: NaacCriterionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NaacCriteria to fetch.
     */
    orderBy?: NaacCriterionOrderByWithRelationInput | NaacCriterionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NaacCriteria.
     */
    cursor?: NaacCriterionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NaacCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NaacCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NaacCriteria.
     */
    distinct?: NaacCriterionScalarFieldEnum | NaacCriterionScalarFieldEnum[]
  }

  /**
   * NaacCriterion findMany
   */
  export type NaacCriterionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacCriterion
     */
    select?: NaacCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacCriterion
     */
    omit?: NaacCriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacCriterionInclude<ExtArgs> | null
    /**
     * Filter, which NaacCriteria to fetch.
     */
    where?: NaacCriterionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NaacCriteria to fetch.
     */
    orderBy?: NaacCriterionOrderByWithRelationInput | NaacCriterionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NaacCriteria.
     */
    cursor?: NaacCriterionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NaacCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NaacCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NaacCriteria.
     */
    distinct?: NaacCriterionScalarFieldEnum | NaacCriterionScalarFieldEnum[]
  }

  /**
   * NaacCriterion create
   */
  export type NaacCriterionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacCriterion
     */
    select?: NaacCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacCriterion
     */
    omit?: NaacCriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacCriterionInclude<ExtArgs> | null
    /**
     * The data needed to create a NaacCriterion.
     */
    data: XOR<NaacCriterionCreateInput, NaacCriterionUncheckedCreateInput>
  }

  /**
   * NaacCriterion createMany
   */
  export type NaacCriterionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NaacCriteria.
     */
    data: NaacCriterionCreateManyInput | NaacCriterionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NaacCriterion createManyAndReturn
   */
  export type NaacCriterionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacCriterion
     */
    select?: NaacCriterionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NaacCriterion
     */
    omit?: NaacCriterionOmit<ExtArgs> | null
    /**
     * The data used to create many NaacCriteria.
     */
    data: NaacCriterionCreateManyInput | NaacCriterionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NaacCriterion update
   */
  export type NaacCriterionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacCriterion
     */
    select?: NaacCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacCriterion
     */
    omit?: NaacCriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacCriterionInclude<ExtArgs> | null
    /**
     * The data needed to update a NaacCriterion.
     */
    data: XOR<NaacCriterionUpdateInput, NaacCriterionUncheckedUpdateInput>
    /**
     * Choose, which NaacCriterion to update.
     */
    where: NaacCriterionWhereUniqueInput
  }

  /**
   * NaacCriterion updateMany
   */
  export type NaacCriterionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NaacCriteria.
     */
    data: XOR<NaacCriterionUpdateManyMutationInput, NaacCriterionUncheckedUpdateManyInput>
    /**
     * Filter which NaacCriteria to update
     */
    where?: NaacCriterionWhereInput
    /**
     * Limit how many NaacCriteria to update.
     */
    limit?: number
  }

  /**
   * NaacCriterion updateManyAndReturn
   */
  export type NaacCriterionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacCriterion
     */
    select?: NaacCriterionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NaacCriterion
     */
    omit?: NaacCriterionOmit<ExtArgs> | null
    /**
     * The data used to update NaacCriteria.
     */
    data: XOR<NaacCriterionUpdateManyMutationInput, NaacCriterionUncheckedUpdateManyInput>
    /**
     * Filter which NaacCriteria to update
     */
    where?: NaacCriterionWhereInput
    /**
     * Limit how many NaacCriteria to update.
     */
    limit?: number
  }

  /**
   * NaacCriterion upsert
   */
  export type NaacCriterionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacCriterion
     */
    select?: NaacCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacCriterion
     */
    omit?: NaacCriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacCriterionInclude<ExtArgs> | null
    /**
     * The filter to search for the NaacCriterion to update in case it exists.
     */
    where: NaacCriterionWhereUniqueInput
    /**
     * In case the NaacCriterion found by the `where` argument doesn't exist, create a new NaacCriterion with this data.
     */
    create: XOR<NaacCriterionCreateInput, NaacCriterionUncheckedCreateInput>
    /**
     * In case the NaacCriterion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NaacCriterionUpdateInput, NaacCriterionUncheckedUpdateInput>
  }

  /**
   * NaacCriterion delete
   */
  export type NaacCriterionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacCriterion
     */
    select?: NaacCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacCriterion
     */
    omit?: NaacCriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacCriterionInclude<ExtArgs> | null
    /**
     * Filter which NaacCriterion to delete.
     */
    where: NaacCriterionWhereUniqueInput
  }

  /**
   * NaacCriterion deleteMany
   */
  export type NaacCriterionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NaacCriteria to delete
     */
    where?: NaacCriterionWhereInput
    /**
     * Limit how many NaacCriteria to delete.
     */
    limit?: number
  }

  /**
   * NaacCriterion.mappings
   */
  export type NaacCriterion$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingInclude<ExtArgs> | null
    where?: NaacPublicationMappingWhereInput
    orderBy?: NaacPublicationMappingOrderByWithRelationInput | NaacPublicationMappingOrderByWithRelationInput[]
    cursor?: NaacPublicationMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NaacPublicationMappingScalarFieldEnum | NaacPublicationMappingScalarFieldEnum[]
  }

  /**
   * NaacCriterion without action
   */
  export type NaacCriterionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacCriterion
     */
    select?: NaacCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacCriterion
     */
    omit?: NaacCriterionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacCriterionInclude<ExtArgs> | null
  }


  /**
   * Model NaacPublicationMapping
   */

  export type AggregateNaacPublicationMapping = {
    _count: NaacPublicationMappingCountAggregateOutputType | null
    _min: NaacPublicationMappingMinAggregateOutputType | null
    _max: NaacPublicationMappingMaxAggregateOutputType | null
  }

  export type NaacPublicationMappingMinAggregateOutputType = {
    id: string | null
    publicationId: string | null
    criterionId: string | null
    academicYear: string | null
    verifiedByIQAC: boolean | null
  }

  export type NaacPublicationMappingMaxAggregateOutputType = {
    id: string | null
    publicationId: string | null
    criterionId: string | null
    academicYear: string | null
    verifiedByIQAC: boolean | null
  }

  export type NaacPublicationMappingCountAggregateOutputType = {
    id: number
    publicationId: number
    criterionId: number
    academicYear: number
    verifiedByIQAC: number
    _all: number
  }


  export type NaacPublicationMappingMinAggregateInputType = {
    id?: true
    publicationId?: true
    criterionId?: true
    academicYear?: true
    verifiedByIQAC?: true
  }

  export type NaacPublicationMappingMaxAggregateInputType = {
    id?: true
    publicationId?: true
    criterionId?: true
    academicYear?: true
    verifiedByIQAC?: true
  }

  export type NaacPublicationMappingCountAggregateInputType = {
    id?: true
    publicationId?: true
    criterionId?: true
    academicYear?: true
    verifiedByIQAC?: true
    _all?: true
  }

  export type NaacPublicationMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NaacPublicationMapping to aggregate.
     */
    where?: NaacPublicationMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NaacPublicationMappings to fetch.
     */
    orderBy?: NaacPublicationMappingOrderByWithRelationInput | NaacPublicationMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NaacPublicationMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NaacPublicationMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NaacPublicationMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NaacPublicationMappings
    **/
    _count?: true | NaacPublicationMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NaacPublicationMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NaacPublicationMappingMaxAggregateInputType
  }

  export type GetNaacPublicationMappingAggregateType<T extends NaacPublicationMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateNaacPublicationMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNaacPublicationMapping[P]>
      : GetScalarType<T[P], AggregateNaacPublicationMapping[P]>
  }




  export type NaacPublicationMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NaacPublicationMappingWhereInput
    orderBy?: NaacPublicationMappingOrderByWithAggregationInput | NaacPublicationMappingOrderByWithAggregationInput[]
    by: NaacPublicationMappingScalarFieldEnum[] | NaacPublicationMappingScalarFieldEnum
    having?: NaacPublicationMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NaacPublicationMappingCountAggregateInputType | true
    _min?: NaacPublicationMappingMinAggregateInputType
    _max?: NaacPublicationMappingMaxAggregateInputType
  }

  export type NaacPublicationMappingGroupByOutputType = {
    id: string
    publicationId: string
    criterionId: string
    academicYear: string
    verifiedByIQAC: boolean
    _count: NaacPublicationMappingCountAggregateOutputType | null
    _min: NaacPublicationMappingMinAggregateOutputType | null
    _max: NaacPublicationMappingMaxAggregateOutputType | null
  }

  type GetNaacPublicationMappingGroupByPayload<T extends NaacPublicationMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NaacPublicationMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NaacPublicationMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NaacPublicationMappingGroupByOutputType[P]>
            : GetScalarType<T[P], NaacPublicationMappingGroupByOutputType[P]>
        }
      >
    >


  export type NaacPublicationMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicationId?: boolean
    criterionId?: boolean
    academicYear?: boolean
    verifiedByIQAC?: boolean
    publication?: boolean | PublicationDefaultArgs<ExtArgs>
    criterion?: boolean | NaacCriterionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["naacPublicationMapping"]>

  export type NaacPublicationMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicationId?: boolean
    criterionId?: boolean
    academicYear?: boolean
    verifiedByIQAC?: boolean
    publication?: boolean | PublicationDefaultArgs<ExtArgs>
    criterion?: boolean | NaacCriterionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["naacPublicationMapping"]>

  export type NaacPublicationMappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicationId?: boolean
    criterionId?: boolean
    academicYear?: boolean
    verifiedByIQAC?: boolean
    publication?: boolean | PublicationDefaultArgs<ExtArgs>
    criterion?: boolean | NaacCriterionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["naacPublicationMapping"]>

  export type NaacPublicationMappingSelectScalar = {
    id?: boolean
    publicationId?: boolean
    criterionId?: boolean
    academicYear?: boolean
    verifiedByIQAC?: boolean
  }

  export type NaacPublicationMappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicationId" | "criterionId" | "academicYear" | "verifiedByIQAC", ExtArgs["result"]["naacPublicationMapping"]>
  export type NaacPublicationMappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publication?: boolean | PublicationDefaultArgs<ExtArgs>
    criterion?: boolean | NaacCriterionDefaultArgs<ExtArgs>
  }
  export type NaacPublicationMappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publication?: boolean | PublicationDefaultArgs<ExtArgs>
    criterion?: boolean | NaacCriterionDefaultArgs<ExtArgs>
  }
  export type NaacPublicationMappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publication?: boolean | PublicationDefaultArgs<ExtArgs>
    criterion?: boolean | NaacCriterionDefaultArgs<ExtArgs>
  }

  export type $NaacPublicationMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NaacPublicationMapping"
    objects: {
      publication: Prisma.$PublicationPayload<ExtArgs>
      criterion: Prisma.$NaacCriterionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicationId: string
      criterionId: string
      academicYear: string
      verifiedByIQAC: boolean
    }, ExtArgs["result"]["naacPublicationMapping"]>
    composites: {}
  }

  type NaacPublicationMappingGetPayload<S extends boolean | null | undefined | NaacPublicationMappingDefaultArgs> = $Result.GetResult<Prisma.$NaacPublicationMappingPayload, S>

  type NaacPublicationMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NaacPublicationMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NaacPublicationMappingCountAggregateInputType | true
    }

  export interface NaacPublicationMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NaacPublicationMapping'], meta: { name: 'NaacPublicationMapping' } }
    /**
     * Find zero or one NaacPublicationMapping that matches the filter.
     * @param {NaacPublicationMappingFindUniqueArgs} args - Arguments to find a NaacPublicationMapping
     * @example
     * // Get one NaacPublicationMapping
     * const naacPublicationMapping = await prisma.naacPublicationMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NaacPublicationMappingFindUniqueArgs>(args: SelectSubset<T, NaacPublicationMappingFindUniqueArgs<ExtArgs>>): Prisma__NaacPublicationMappingClient<$Result.GetResult<Prisma.$NaacPublicationMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NaacPublicationMapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NaacPublicationMappingFindUniqueOrThrowArgs} args - Arguments to find a NaacPublicationMapping
     * @example
     * // Get one NaacPublicationMapping
     * const naacPublicationMapping = await prisma.naacPublicationMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NaacPublicationMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, NaacPublicationMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NaacPublicationMappingClient<$Result.GetResult<Prisma.$NaacPublicationMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NaacPublicationMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacPublicationMappingFindFirstArgs} args - Arguments to find a NaacPublicationMapping
     * @example
     * // Get one NaacPublicationMapping
     * const naacPublicationMapping = await prisma.naacPublicationMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NaacPublicationMappingFindFirstArgs>(args?: SelectSubset<T, NaacPublicationMappingFindFirstArgs<ExtArgs>>): Prisma__NaacPublicationMappingClient<$Result.GetResult<Prisma.$NaacPublicationMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NaacPublicationMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacPublicationMappingFindFirstOrThrowArgs} args - Arguments to find a NaacPublicationMapping
     * @example
     * // Get one NaacPublicationMapping
     * const naacPublicationMapping = await prisma.naacPublicationMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NaacPublicationMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, NaacPublicationMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__NaacPublicationMappingClient<$Result.GetResult<Prisma.$NaacPublicationMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NaacPublicationMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacPublicationMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NaacPublicationMappings
     * const naacPublicationMappings = await prisma.naacPublicationMapping.findMany()
     * 
     * // Get first 10 NaacPublicationMappings
     * const naacPublicationMappings = await prisma.naacPublicationMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const naacPublicationMappingWithIdOnly = await prisma.naacPublicationMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NaacPublicationMappingFindManyArgs>(args?: SelectSubset<T, NaacPublicationMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaacPublicationMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NaacPublicationMapping.
     * @param {NaacPublicationMappingCreateArgs} args - Arguments to create a NaacPublicationMapping.
     * @example
     * // Create one NaacPublicationMapping
     * const NaacPublicationMapping = await prisma.naacPublicationMapping.create({
     *   data: {
     *     // ... data to create a NaacPublicationMapping
     *   }
     * })
     * 
     */
    create<T extends NaacPublicationMappingCreateArgs>(args: SelectSubset<T, NaacPublicationMappingCreateArgs<ExtArgs>>): Prisma__NaacPublicationMappingClient<$Result.GetResult<Prisma.$NaacPublicationMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NaacPublicationMappings.
     * @param {NaacPublicationMappingCreateManyArgs} args - Arguments to create many NaacPublicationMappings.
     * @example
     * // Create many NaacPublicationMappings
     * const naacPublicationMapping = await prisma.naacPublicationMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NaacPublicationMappingCreateManyArgs>(args?: SelectSubset<T, NaacPublicationMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NaacPublicationMappings and returns the data saved in the database.
     * @param {NaacPublicationMappingCreateManyAndReturnArgs} args - Arguments to create many NaacPublicationMappings.
     * @example
     * // Create many NaacPublicationMappings
     * const naacPublicationMapping = await prisma.naacPublicationMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NaacPublicationMappings and only return the `id`
     * const naacPublicationMappingWithIdOnly = await prisma.naacPublicationMapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NaacPublicationMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, NaacPublicationMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaacPublicationMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NaacPublicationMapping.
     * @param {NaacPublicationMappingDeleteArgs} args - Arguments to delete one NaacPublicationMapping.
     * @example
     * // Delete one NaacPublicationMapping
     * const NaacPublicationMapping = await prisma.naacPublicationMapping.delete({
     *   where: {
     *     // ... filter to delete one NaacPublicationMapping
     *   }
     * })
     * 
     */
    delete<T extends NaacPublicationMappingDeleteArgs>(args: SelectSubset<T, NaacPublicationMappingDeleteArgs<ExtArgs>>): Prisma__NaacPublicationMappingClient<$Result.GetResult<Prisma.$NaacPublicationMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NaacPublicationMapping.
     * @param {NaacPublicationMappingUpdateArgs} args - Arguments to update one NaacPublicationMapping.
     * @example
     * // Update one NaacPublicationMapping
     * const naacPublicationMapping = await prisma.naacPublicationMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NaacPublicationMappingUpdateArgs>(args: SelectSubset<T, NaacPublicationMappingUpdateArgs<ExtArgs>>): Prisma__NaacPublicationMappingClient<$Result.GetResult<Prisma.$NaacPublicationMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NaacPublicationMappings.
     * @param {NaacPublicationMappingDeleteManyArgs} args - Arguments to filter NaacPublicationMappings to delete.
     * @example
     * // Delete a few NaacPublicationMappings
     * const { count } = await prisma.naacPublicationMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NaacPublicationMappingDeleteManyArgs>(args?: SelectSubset<T, NaacPublicationMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NaacPublicationMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacPublicationMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NaacPublicationMappings
     * const naacPublicationMapping = await prisma.naacPublicationMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NaacPublicationMappingUpdateManyArgs>(args: SelectSubset<T, NaacPublicationMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NaacPublicationMappings and returns the data updated in the database.
     * @param {NaacPublicationMappingUpdateManyAndReturnArgs} args - Arguments to update many NaacPublicationMappings.
     * @example
     * // Update many NaacPublicationMappings
     * const naacPublicationMapping = await prisma.naacPublicationMapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NaacPublicationMappings and only return the `id`
     * const naacPublicationMappingWithIdOnly = await prisma.naacPublicationMapping.updateManyAndReturn({
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
    updateManyAndReturn<T extends NaacPublicationMappingUpdateManyAndReturnArgs>(args: SelectSubset<T, NaacPublicationMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaacPublicationMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NaacPublicationMapping.
     * @param {NaacPublicationMappingUpsertArgs} args - Arguments to update or create a NaacPublicationMapping.
     * @example
     * // Update or create a NaacPublicationMapping
     * const naacPublicationMapping = await prisma.naacPublicationMapping.upsert({
     *   create: {
     *     // ... data to create a NaacPublicationMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NaacPublicationMapping we want to update
     *   }
     * })
     */
    upsert<T extends NaacPublicationMappingUpsertArgs>(args: SelectSubset<T, NaacPublicationMappingUpsertArgs<ExtArgs>>): Prisma__NaacPublicationMappingClient<$Result.GetResult<Prisma.$NaacPublicationMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NaacPublicationMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacPublicationMappingCountArgs} args - Arguments to filter NaacPublicationMappings to count.
     * @example
     * // Count the number of NaacPublicationMappings
     * const count = await prisma.naacPublicationMapping.count({
     *   where: {
     *     // ... the filter for the NaacPublicationMappings we want to count
     *   }
     * })
    **/
    count<T extends NaacPublicationMappingCountArgs>(
      args?: Subset<T, NaacPublicationMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NaacPublicationMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NaacPublicationMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacPublicationMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NaacPublicationMappingAggregateArgs>(args: Subset<T, NaacPublicationMappingAggregateArgs>): Prisma.PrismaPromise<GetNaacPublicationMappingAggregateType<T>>

    /**
     * Group by NaacPublicationMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacPublicationMappingGroupByArgs} args - Group by arguments.
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
      T extends NaacPublicationMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NaacPublicationMappingGroupByArgs['orderBy'] }
        : { orderBy?: NaacPublicationMappingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NaacPublicationMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNaacPublicationMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NaacPublicationMapping model
   */
  readonly fields: NaacPublicationMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NaacPublicationMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NaacPublicationMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publication<T extends PublicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicationDefaultArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    criterion<T extends NaacCriterionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NaacCriterionDefaultArgs<ExtArgs>>): Prisma__NaacCriterionClient<$Result.GetResult<Prisma.$NaacCriterionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NaacPublicationMapping model
   */
  interface NaacPublicationMappingFieldRefs {
    readonly id: FieldRef<"NaacPublicationMapping", 'String'>
    readonly publicationId: FieldRef<"NaacPublicationMapping", 'String'>
    readonly criterionId: FieldRef<"NaacPublicationMapping", 'String'>
    readonly academicYear: FieldRef<"NaacPublicationMapping", 'String'>
    readonly verifiedByIQAC: FieldRef<"NaacPublicationMapping", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * NaacPublicationMapping findUnique
   */
  export type NaacPublicationMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingInclude<ExtArgs> | null
    /**
     * Filter, which NaacPublicationMapping to fetch.
     */
    where: NaacPublicationMappingWhereUniqueInput
  }

  /**
   * NaacPublicationMapping findUniqueOrThrow
   */
  export type NaacPublicationMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingInclude<ExtArgs> | null
    /**
     * Filter, which NaacPublicationMapping to fetch.
     */
    where: NaacPublicationMappingWhereUniqueInput
  }

  /**
   * NaacPublicationMapping findFirst
   */
  export type NaacPublicationMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingInclude<ExtArgs> | null
    /**
     * Filter, which NaacPublicationMapping to fetch.
     */
    where?: NaacPublicationMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NaacPublicationMappings to fetch.
     */
    orderBy?: NaacPublicationMappingOrderByWithRelationInput | NaacPublicationMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NaacPublicationMappings.
     */
    cursor?: NaacPublicationMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NaacPublicationMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NaacPublicationMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NaacPublicationMappings.
     */
    distinct?: NaacPublicationMappingScalarFieldEnum | NaacPublicationMappingScalarFieldEnum[]
  }

  /**
   * NaacPublicationMapping findFirstOrThrow
   */
  export type NaacPublicationMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingInclude<ExtArgs> | null
    /**
     * Filter, which NaacPublicationMapping to fetch.
     */
    where?: NaacPublicationMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NaacPublicationMappings to fetch.
     */
    orderBy?: NaacPublicationMappingOrderByWithRelationInput | NaacPublicationMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NaacPublicationMappings.
     */
    cursor?: NaacPublicationMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NaacPublicationMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NaacPublicationMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NaacPublicationMappings.
     */
    distinct?: NaacPublicationMappingScalarFieldEnum | NaacPublicationMappingScalarFieldEnum[]
  }

  /**
   * NaacPublicationMapping findMany
   */
  export type NaacPublicationMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingInclude<ExtArgs> | null
    /**
     * Filter, which NaacPublicationMappings to fetch.
     */
    where?: NaacPublicationMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NaacPublicationMappings to fetch.
     */
    orderBy?: NaacPublicationMappingOrderByWithRelationInput | NaacPublicationMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NaacPublicationMappings.
     */
    cursor?: NaacPublicationMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NaacPublicationMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NaacPublicationMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NaacPublicationMappings.
     */
    distinct?: NaacPublicationMappingScalarFieldEnum | NaacPublicationMappingScalarFieldEnum[]
  }

  /**
   * NaacPublicationMapping create
   */
  export type NaacPublicationMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingInclude<ExtArgs> | null
    /**
     * The data needed to create a NaacPublicationMapping.
     */
    data: XOR<NaacPublicationMappingCreateInput, NaacPublicationMappingUncheckedCreateInput>
  }

  /**
   * NaacPublicationMapping createMany
   */
  export type NaacPublicationMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NaacPublicationMappings.
     */
    data: NaacPublicationMappingCreateManyInput | NaacPublicationMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NaacPublicationMapping createManyAndReturn
   */
  export type NaacPublicationMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * The data used to create many NaacPublicationMappings.
     */
    data: NaacPublicationMappingCreateManyInput | NaacPublicationMappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NaacPublicationMapping update
   */
  export type NaacPublicationMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingInclude<ExtArgs> | null
    /**
     * The data needed to update a NaacPublicationMapping.
     */
    data: XOR<NaacPublicationMappingUpdateInput, NaacPublicationMappingUncheckedUpdateInput>
    /**
     * Choose, which NaacPublicationMapping to update.
     */
    where: NaacPublicationMappingWhereUniqueInput
  }

  /**
   * NaacPublicationMapping updateMany
   */
  export type NaacPublicationMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NaacPublicationMappings.
     */
    data: XOR<NaacPublicationMappingUpdateManyMutationInput, NaacPublicationMappingUncheckedUpdateManyInput>
    /**
     * Filter which NaacPublicationMappings to update
     */
    where?: NaacPublicationMappingWhereInput
    /**
     * Limit how many NaacPublicationMappings to update.
     */
    limit?: number
  }

  /**
   * NaacPublicationMapping updateManyAndReturn
   */
  export type NaacPublicationMappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * The data used to update NaacPublicationMappings.
     */
    data: XOR<NaacPublicationMappingUpdateManyMutationInput, NaacPublicationMappingUncheckedUpdateManyInput>
    /**
     * Filter which NaacPublicationMappings to update
     */
    where?: NaacPublicationMappingWhereInput
    /**
     * Limit how many NaacPublicationMappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NaacPublicationMapping upsert
   */
  export type NaacPublicationMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingInclude<ExtArgs> | null
    /**
     * The filter to search for the NaacPublicationMapping to update in case it exists.
     */
    where: NaacPublicationMappingWhereUniqueInput
    /**
     * In case the NaacPublicationMapping found by the `where` argument doesn't exist, create a new NaacPublicationMapping with this data.
     */
    create: XOR<NaacPublicationMappingCreateInput, NaacPublicationMappingUncheckedCreateInput>
    /**
     * In case the NaacPublicationMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NaacPublicationMappingUpdateInput, NaacPublicationMappingUncheckedUpdateInput>
  }

  /**
   * NaacPublicationMapping delete
   */
  export type NaacPublicationMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingInclude<ExtArgs> | null
    /**
     * Filter which NaacPublicationMapping to delete.
     */
    where: NaacPublicationMappingWhereUniqueInput
  }

  /**
   * NaacPublicationMapping deleteMany
   */
  export type NaacPublicationMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NaacPublicationMappings to delete
     */
    where?: NaacPublicationMappingWhereInput
    /**
     * Limit how many NaacPublicationMappings to delete.
     */
    limit?: number
  }

  /**
   * NaacPublicationMapping without action
   */
  export type NaacPublicationMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacPublicationMapping
     */
    select?: NaacPublicationMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacPublicationMapping
     */
    omit?: NaacPublicationMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacPublicationMappingInclude<ExtArgs> | null
  }


  /**
   * Model NaacReport
   */

  export type AggregateNaacReport = {
    _count: NaacReportCountAggregateOutputType | null
    _min: NaacReportMinAggregateOutputType | null
    _max: NaacReportMaxAggregateOutputType | null
  }

  export type NaacReportMinAggregateOutputType = {
    id: string | null
    universityId: string | null
    academicYear: string | null
    reportType: string | null
    fileUrl: string | null
    generatedAt: Date | null
  }

  export type NaacReportMaxAggregateOutputType = {
    id: string | null
    universityId: string | null
    academicYear: string | null
    reportType: string | null
    fileUrl: string | null
    generatedAt: Date | null
  }

  export type NaacReportCountAggregateOutputType = {
    id: number
    universityId: number
    academicYear: number
    reportType: number
    fileUrl: number
    generatedAt: number
    _all: number
  }


  export type NaacReportMinAggregateInputType = {
    id?: true
    universityId?: true
    academicYear?: true
    reportType?: true
    fileUrl?: true
    generatedAt?: true
  }

  export type NaacReportMaxAggregateInputType = {
    id?: true
    universityId?: true
    academicYear?: true
    reportType?: true
    fileUrl?: true
    generatedAt?: true
  }

  export type NaacReportCountAggregateInputType = {
    id?: true
    universityId?: true
    academicYear?: true
    reportType?: true
    fileUrl?: true
    generatedAt?: true
    _all?: true
  }

  export type NaacReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NaacReport to aggregate.
     */
    where?: NaacReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NaacReports to fetch.
     */
    orderBy?: NaacReportOrderByWithRelationInput | NaacReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NaacReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NaacReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NaacReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NaacReports
    **/
    _count?: true | NaacReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NaacReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NaacReportMaxAggregateInputType
  }

  export type GetNaacReportAggregateType<T extends NaacReportAggregateArgs> = {
        [P in keyof T & keyof AggregateNaacReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNaacReport[P]>
      : GetScalarType<T[P], AggregateNaacReport[P]>
  }




  export type NaacReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NaacReportWhereInput
    orderBy?: NaacReportOrderByWithAggregationInput | NaacReportOrderByWithAggregationInput[]
    by: NaacReportScalarFieldEnum[] | NaacReportScalarFieldEnum
    having?: NaacReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NaacReportCountAggregateInputType | true
    _min?: NaacReportMinAggregateInputType
    _max?: NaacReportMaxAggregateInputType
  }

  export type NaacReportGroupByOutputType = {
    id: string
    universityId: string
    academicYear: string
    reportType: string
    fileUrl: string | null
    generatedAt: Date
    _count: NaacReportCountAggregateOutputType | null
    _min: NaacReportMinAggregateOutputType | null
    _max: NaacReportMaxAggregateOutputType | null
  }

  type GetNaacReportGroupByPayload<T extends NaacReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NaacReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NaacReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NaacReportGroupByOutputType[P]>
            : GetScalarType<T[P], NaacReportGroupByOutputType[P]>
        }
      >
    >


  export type NaacReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universityId?: boolean
    academicYear?: boolean
    reportType?: boolean
    fileUrl?: boolean
    generatedAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["naacReport"]>

  export type NaacReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universityId?: boolean
    academicYear?: boolean
    reportType?: boolean
    fileUrl?: boolean
    generatedAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["naacReport"]>

  export type NaacReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universityId?: boolean
    academicYear?: boolean
    reportType?: boolean
    fileUrl?: boolean
    generatedAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["naacReport"]>

  export type NaacReportSelectScalar = {
    id?: boolean
    universityId?: boolean
    academicYear?: boolean
    reportType?: boolean
    fileUrl?: boolean
    generatedAt?: boolean
  }

  export type NaacReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "universityId" | "academicYear" | "reportType" | "fileUrl" | "generatedAt", ExtArgs["result"]["naacReport"]>
  export type NaacReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }
  export type NaacReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }
  export type NaacReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }

  export type $NaacReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NaacReport"
    objects: {
      university: Prisma.$UniversityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      universityId: string
      academicYear: string
      reportType: string
      fileUrl: string | null
      generatedAt: Date
    }, ExtArgs["result"]["naacReport"]>
    composites: {}
  }

  type NaacReportGetPayload<S extends boolean | null | undefined | NaacReportDefaultArgs> = $Result.GetResult<Prisma.$NaacReportPayload, S>

  type NaacReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NaacReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NaacReportCountAggregateInputType | true
    }

  export interface NaacReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NaacReport'], meta: { name: 'NaacReport' } }
    /**
     * Find zero or one NaacReport that matches the filter.
     * @param {NaacReportFindUniqueArgs} args - Arguments to find a NaacReport
     * @example
     * // Get one NaacReport
     * const naacReport = await prisma.naacReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NaacReportFindUniqueArgs>(args: SelectSubset<T, NaacReportFindUniqueArgs<ExtArgs>>): Prisma__NaacReportClient<$Result.GetResult<Prisma.$NaacReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NaacReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NaacReportFindUniqueOrThrowArgs} args - Arguments to find a NaacReport
     * @example
     * // Get one NaacReport
     * const naacReport = await prisma.naacReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NaacReportFindUniqueOrThrowArgs>(args: SelectSubset<T, NaacReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NaacReportClient<$Result.GetResult<Prisma.$NaacReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NaacReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacReportFindFirstArgs} args - Arguments to find a NaacReport
     * @example
     * // Get one NaacReport
     * const naacReport = await prisma.naacReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NaacReportFindFirstArgs>(args?: SelectSubset<T, NaacReportFindFirstArgs<ExtArgs>>): Prisma__NaacReportClient<$Result.GetResult<Prisma.$NaacReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NaacReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacReportFindFirstOrThrowArgs} args - Arguments to find a NaacReport
     * @example
     * // Get one NaacReport
     * const naacReport = await prisma.naacReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NaacReportFindFirstOrThrowArgs>(args?: SelectSubset<T, NaacReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__NaacReportClient<$Result.GetResult<Prisma.$NaacReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NaacReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NaacReports
     * const naacReports = await prisma.naacReport.findMany()
     * 
     * // Get first 10 NaacReports
     * const naacReports = await prisma.naacReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const naacReportWithIdOnly = await prisma.naacReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NaacReportFindManyArgs>(args?: SelectSubset<T, NaacReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaacReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NaacReport.
     * @param {NaacReportCreateArgs} args - Arguments to create a NaacReport.
     * @example
     * // Create one NaacReport
     * const NaacReport = await prisma.naacReport.create({
     *   data: {
     *     // ... data to create a NaacReport
     *   }
     * })
     * 
     */
    create<T extends NaacReportCreateArgs>(args: SelectSubset<T, NaacReportCreateArgs<ExtArgs>>): Prisma__NaacReportClient<$Result.GetResult<Prisma.$NaacReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NaacReports.
     * @param {NaacReportCreateManyArgs} args - Arguments to create many NaacReports.
     * @example
     * // Create many NaacReports
     * const naacReport = await prisma.naacReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NaacReportCreateManyArgs>(args?: SelectSubset<T, NaacReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NaacReports and returns the data saved in the database.
     * @param {NaacReportCreateManyAndReturnArgs} args - Arguments to create many NaacReports.
     * @example
     * // Create many NaacReports
     * const naacReport = await prisma.naacReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NaacReports and only return the `id`
     * const naacReportWithIdOnly = await prisma.naacReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NaacReportCreateManyAndReturnArgs>(args?: SelectSubset<T, NaacReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaacReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NaacReport.
     * @param {NaacReportDeleteArgs} args - Arguments to delete one NaacReport.
     * @example
     * // Delete one NaacReport
     * const NaacReport = await prisma.naacReport.delete({
     *   where: {
     *     // ... filter to delete one NaacReport
     *   }
     * })
     * 
     */
    delete<T extends NaacReportDeleteArgs>(args: SelectSubset<T, NaacReportDeleteArgs<ExtArgs>>): Prisma__NaacReportClient<$Result.GetResult<Prisma.$NaacReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NaacReport.
     * @param {NaacReportUpdateArgs} args - Arguments to update one NaacReport.
     * @example
     * // Update one NaacReport
     * const naacReport = await prisma.naacReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NaacReportUpdateArgs>(args: SelectSubset<T, NaacReportUpdateArgs<ExtArgs>>): Prisma__NaacReportClient<$Result.GetResult<Prisma.$NaacReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NaacReports.
     * @param {NaacReportDeleteManyArgs} args - Arguments to filter NaacReports to delete.
     * @example
     * // Delete a few NaacReports
     * const { count } = await prisma.naacReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NaacReportDeleteManyArgs>(args?: SelectSubset<T, NaacReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NaacReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NaacReports
     * const naacReport = await prisma.naacReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NaacReportUpdateManyArgs>(args: SelectSubset<T, NaacReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NaacReports and returns the data updated in the database.
     * @param {NaacReportUpdateManyAndReturnArgs} args - Arguments to update many NaacReports.
     * @example
     * // Update many NaacReports
     * const naacReport = await prisma.naacReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NaacReports and only return the `id`
     * const naacReportWithIdOnly = await prisma.naacReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends NaacReportUpdateManyAndReturnArgs>(args: SelectSubset<T, NaacReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaacReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NaacReport.
     * @param {NaacReportUpsertArgs} args - Arguments to update or create a NaacReport.
     * @example
     * // Update or create a NaacReport
     * const naacReport = await prisma.naacReport.upsert({
     *   create: {
     *     // ... data to create a NaacReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NaacReport we want to update
     *   }
     * })
     */
    upsert<T extends NaacReportUpsertArgs>(args: SelectSubset<T, NaacReportUpsertArgs<ExtArgs>>): Prisma__NaacReportClient<$Result.GetResult<Prisma.$NaacReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NaacReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacReportCountArgs} args - Arguments to filter NaacReports to count.
     * @example
     * // Count the number of NaacReports
     * const count = await prisma.naacReport.count({
     *   where: {
     *     // ... the filter for the NaacReports we want to count
     *   }
     * })
    **/
    count<T extends NaacReportCountArgs>(
      args?: Subset<T, NaacReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NaacReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NaacReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NaacReportAggregateArgs>(args: Subset<T, NaacReportAggregateArgs>): Prisma.PrismaPromise<GetNaacReportAggregateType<T>>

    /**
     * Group by NaacReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaacReportGroupByArgs} args - Group by arguments.
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
      T extends NaacReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NaacReportGroupByArgs['orderBy'] }
        : { orderBy?: NaacReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NaacReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNaacReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NaacReport model
   */
  readonly fields: NaacReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NaacReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NaacReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    university<T extends UniversityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniversityDefaultArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NaacReport model
   */
  interface NaacReportFieldRefs {
    readonly id: FieldRef<"NaacReport", 'String'>
    readonly universityId: FieldRef<"NaacReport", 'String'>
    readonly academicYear: FieldRef<"NaacReport", 'String'>
    readonly reportType: FieldRef<"NaacReport", 'String'>
    readonly fileUrl: FieldRef<"NaacReport", 'String'>
    readonly generatedAt: FieldRef<"NaacReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NaacReport findUnique
   */
  export type NaacReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacReport
     */
    select?: NaacReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacReport
     */
    omit?: NaacReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacReportInclude<ExtArgs> | null
    /**
     * Filter, which NaacReport to fetch.
     */
    where: NaacReportWhereUniqueInput
  }

  /**
   * NaacReport findUniqueOrThrow
   */
  export type NaacReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacReport
     */
    select?: NaacReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacReport
     */
    omit?: NaacReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacReportInclude<ExtArgs> | null
    /**
     * Filter, which NaacReport to fetch.
     */
    where: NaacReportWhereUniqueInput
  }

  /**
   * NaacReport findFirst
   */
  export type NaacReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacReport
     */
    select?: NaacReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacReport
     */
    omit?: NaacReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacReportInclude<ExtArgs> | null
    /**
     * Filter, which NaacReport to fetch.
     */
    where?: NaacReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NaacReports to fetch.
     */
    orderBy?: NaacReportOrderByWithRelationInput | NaacReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NaacReports.
     */
    cursor?: NaacReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NaacReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NaacReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NaacReports.
     */
    distinct?: NaacReportScalarFieldEnum | NaacReportScalarFieldEnum[]
  }

  /**
   * NaacReport findFirstOrThrow
   */
  export type NaacReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacReport
     */
    select?: NaacReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacReport
     */
    omit?: NaacReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacReportInclude<ExtArgs> | null
    /**
     * Filter, which NaacReport to fetch.
     */
    where?: NaacReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NaacReports to fetch.
     */
    orderBy?: NaacReportOrderByWithRelationInput | NaacReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NaacReports.
     */
    cursor?: NaacReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NaacReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NaacReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NaacReports.
     */
    distinct?: NaacReportScalarFieldEnum | NaacReportScalarFieldEnum[]
  }

  /**
   * NaacReport findMany
   */
  export type NaacReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacReport
     */
    select?: NaacReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacReport
     */
    omit?: NaacReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacReportInclude<ExtArgs> | null
    /**
     * Filter, which NaacReports to fetch.
     */
    where?: NaacReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NaacReports to fetch.
     */
    orderBy?: NaacReportOrderByWithRelationInput | NaacReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NaacReports.
     */
    cursor?: NaacReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NaacReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NaacReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NaacReports.
     */
    distinct?: NaacReportScalarFieldEnum | NaacReportScalarFieldEnum[]
  }

  /**
   * NaacReport create
   */
  export type NaacReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacReport
     */
    select?: NaacReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacReport
     */
    omit?: NaacReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacReportInclude<ExtArgs> | null
    /**
     * The data needed to create a NaacReport.
     */
    data: XOR<NaacReportCreateInput, NaacReportUncheckedCreateInput>
  }

  /**
   * NaacReport createMany
   */
  export type NaacReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NaacReports.
     */
    data: NaacReportCreateManyInput | NaacReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NaacReport createManyAndReturn
   */
  export type NaacReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacReport
     */
    select?: NaacReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NaacReport
     */
    omit?: NaacReportOmit<ExtArgs> | null
    /**
     * The data used to create many NaacReports.
     */
    data: NaacReportCreateManyInput | NaacReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NaacReport update
   */
  export type NaacReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacReport
     */
    select?: NaacReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacReport
     */
    omit?: NaacReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacReportInclude<ExtArgs> | null
    /**
     * The data needed to update a NaacReport.
     */
    data: XOR<NaacReportUpdateInput, NaacReportUncheckedUpdateInput>
    /**
     * Choose, which NaacReport to update.
     */
    where: NaacReportWhereUniqueInput
  }

  /**
   * NaacReport updateMany
   */
  export type NaacReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NaacReports.
     */
    data: XOR<NaacReportUpdateManyMutationInput, NaacReportUncheckedUpdateManyInput>
    /**
     * Filter which NaacReports to update
     */
    where?: NaacReportWhereInput
    /**
     * Limit how many NaacReports to update.
     */
    limit?: number
  }

  /**
   * NaacReport updateManyAndReturn
   */
  export type NaacReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacReport
     */
    select?: NaacReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NaacReport
     */
    omit?: NaacReportOmit<ExtArgs> | null
    /**
     * The data used to update NaacReports.
     */
    data: XOR<NaacReportUpdateManyMutationInput, NaacReportUncheckedUpdateManyInput>
    /**
     * Filter which NaacReports to update
     */
    where?: NaacReportWhereInput
    /**
     * Limit how many NaacReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NaacReport upsert
   */
  export type NaacReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacReport
     */
    select?: NaacReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacReport
     */
    omit?: NaacReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacReportInclude<ExtArgs> | null
    /**
     * The filter to search for the NaacReport to update in case it exists.
     */
    where: NaacReportWhereUniqueInput
    /**
     * In case the NaacReport found by the `where` argument doesn't exist, create a new NaacReport with this data.
     */
    create: XOR<NaacReportCreateInput, NaacReportUncheckedCreateInput>
    /**
     * In case the NaacReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NaacReportUpdateInput, NaacReportUncheckedUpdateInput>
  }

  /**
   * NaacReport delete
   */
  export type NaacReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacReport
     */
    select?: NaacReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacReport
     */
    omit?: NaacReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacReportInclude<ExtArgs> | null
    /**
     * Filter which NaacReport to delete.
     */
    where: NaacReportWhereUniqueInput
  }

  /**
   * NaacReport deleteMany
   */
  export type NaacReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NaacReports to delete
     */
    where?: NaacReportWhereInput
    /**
     * Limit how many NaacReports to delete.
     */
    limit?: number
  }

  /**
   * NaacReport without action
   */
  export type NaacReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaacReport
     */
    select?: NaacReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NaacReport
     */
    omit?: NaacReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaacReportInclude<ExtArgs> | null
  }


  /**
   * Model BackgroundTask
   */

  export type AggregateBackgroundTask = {
    _count: BackgroundTaskCountAggregateOutputType | null
    _min: BackgroundTaskMinAggregateOutputType | null
    _max: BackgroundTaskMaxAggregateOutputType | null
  }

  export type BackgroundTaskMinAggregateOutputType = {
    id: string | null
    taskType: $Enums.TaskType | null
    status: $Enums.TaskStatus | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type BackgroundTaskMaxAggregateOutputType = {
    id: string | null
    taskType: $Enums.TaskType | null
    status: $Enums.TaskStatus | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type BackgroundTaskCountAggregateOutputType = {
    id: number
    taskType: number
    status: number
    payload: number
    result: number
    errorMessage: number
    startedAt: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type BackgroundTaskMinAggregateInputType = {
    id?: true
    taskType?: true
    status?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type BackgroundTaskMaxAggregateInputType = {
    id?: true
    taskType?: true
    status?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type BackgroundTaskCountAggregateInputType = {
    id?: true
    taskType?: true
    status?: true
    payload?: true
    result?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type BackgroundTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BackgroundTask to aggregate.
     */
    where?: BackgroundTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BackgroundTasks to fetch.
     */
    orderBy?: BackgroundTaskOrderByWithRelationInput | BackgroundTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BackgroundTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BackgroundTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BackgroundTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BackgroundTasks
    **/
    _count?: true | BackgroundTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BackgroundTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BackgroundTaskMaxAggregateInputType
  }

  export type GetBackgroundTaskAggregateType<T extends BackgroundTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateBackgroundTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBackgroundTask[P]>
      : GetScalarType<T[P], AggregateBackgroundTask[P]>
  }




  export type BackgroundTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BackgroundTaskWhereInput
    orderBy?: BackgroundTaskOrderByWithAggregationInput | BackgroundTaskOrderByWithAggregationInput[]
    by: BackgroundTaskScalarFieldEnum[] | BackgroundTaskScalarFieldEnum
    having?: BackgroundTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BackgroundTaskCountAggregateInputType | true
    _min?: BackgroundTaskMinAggregateInputType
    _max?: BackgroundTaskMaxAggregateInputType
  }

  export type BackgroundTaskGroupByOutputType = {
    id: string
    taskType: $Enums.TaskType
    status: $Enums.TaskStatus
    payload: JsonValue | null
    result: JsonValue | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    _count: BackgroundTaskCountAggregateOutputType | null
    _min: BackgroundTaskMinAggregateOutputType | null
    _max: BackgroundTaskMaxAggregateOutputType | null
  }

  type GetBackgroundTaskGroupByPayload<T extends BackgroundTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BackgroundTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BackgroundTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BackgroundTaskGroupByOutputType[P]>
            : GetScalarType<T[P], BackgroundTaskGroupByOutputType[P]>
        }
      >
    >


  export type BackgroundTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskType?: boolean
    status?: boolean
    payload?: boolean
    result?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["backgroundTask"]>

  export type BackgroundTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskType?: boolean
    status?: boolean
    payload?: boolean
    result?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["backgroundTask"]>

  export type BackgroundTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskType?: boolean
    status?: boolean
    payload?: boolean
    result?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["backgroundTask"]>

  export type BackgroundTaskSelectScalar = {
    id?: boolean
    taskType?: boolean
    status?: boolean
    payload?: boolean
    result?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type BackgroundTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskType" | "status" | "payload" | "result" | "errorMessage" | "startedAt" | "completedAt" | "createdAt", ExtArgs["result"]["backgroundTask"]>

  export type $BackgroundTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BackgroundTask"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskType: $Enums.TaskType
      status: $Enums.TaskStatus
      payload: Prisma.JsonValue | null
      result: Prisma.JsonValue | null
      errorMessage: string | null
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["backgroundTask"]>
    composites: {}
  }

  type BackgroundTaskGetPayload<S extends boolean | null | undefined | BackgroundTaskDefaultArgs> = $Result.GetResult<Prisma.$BackgroundTaskPayload, S>

  type BackgroundTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BackgroundTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BackgroundTaskCountAggregateInputType | true
    }

  export interface BackgroundTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BackgroundTask'], meta: { name: 'BackgroundTask' } }
    /**
     * Find zero or one BackgroundTask that matches the filter.
     * @param {BackgroundTaskFindUniqueArgs} args - Arguments to find a BackgroundTask
     * @example
     * // Get one BackgroundTask
     * const backgroundTask = await prisma.backgroundTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BackgroundTaskFindUniqueArgs>(args: SelectSubset<T, BackgroundTaskFindUniqueArgs<ExtArgs>>): Prisma__BackgroundTaskClient<$Result.GetResult<Prisma.$BackgroundTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BackgroundTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BackgroundTaskFindUniqueOrThrowArgs} args - Arguments to find a BackgroundTask
     * @example
     * // Get one BackgroundTask
     * const backgroundTask = await prisma.backgroundTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BackgroundTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, BackgroundTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BackgroundTaskClient<$Result.GetResult<Prisma.$BackgroundTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BackgroundTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundTaskFindFirstArgs} args - Arguments to find a BackgroundTask
     * @example
     * // Get one BackgroundTask
     * const backgroundTask = await prisma.backgroundTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BackgroundTaskFindFirstArgs>(args?: SelectSubset<T, BackgroundTaskFindFirstArgs<ExtArgs>>): Prisma__BackgroundTaskClient<$Result.GetResult<Prisma.$BackgroundTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BackgroundTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundTaskFindFirstOrThrowArgs} args - Arguments to find a BackgroundTask
     * @example
     * // Get one BackgroundTask
     * const backgroundTask = await prisma.backgroundTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BackgroundTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, BackgroundTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__BackgroundTaskClient<$Result.GetResult<Prisma.$BackgroundTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BackgroundTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BackgroundTasks
     * const backgroundTasks = await prisma.backgroundTask.findMany()
     * 
     * // Get first 10 BackgroundTasks
     * const backgroundTasks = await prisma.backgroundTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const backgroundTaskWithIdOnly = await prisma.backgroundTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BackgroundTaskFindManyArgs>(args?: SelectSubset<T, BackgroundTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BackgroundTask.
     * @param {BackgroundTaskCreateArgs} args - Arguments to create a BackgroundTask.
     * @example
     * // Create one BackgroundTask
     * const BackgroundTask = await prisma.backgroundTask.create({
     *   data: {
     *     // ... data to create a BackgroundTask
     *   }
     * })
     * 
     */
    create<T extends BackgroundTaskCreateArgs>(args: SelectSubset<T, BackgroundTaskCreateArgs<ExtArgs>>): Prisma__BackgroundTaskClient<$Result.GetResult<Prisma.$BackgroundTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BackgroundTasks.
     * @param {BackgroundTaskCreateManyArgs} args - Arguments to create many BackgroundTasks.
     * @example
     * // Create many BackgroundTasks
     * const backgroundTask = await prisma.backgroundTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BackgroundTaskCreateManyArgs>(args?: SelectSubset<T, BackgroundTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BackgroundTasks and returns the data saved in the database.
     * @param {BackgroundTaskCreateManyAndReturnArgs} args - Arguments to create many BackgroundTasks.
     * @example
     * // Create many BackgroundTasks
     * const backgroundTask = await prisma.backgroundTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BackgroundTasks and only return the `id`
     * const backgroundTaskWithIdOnly = await prisma.backgroundTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BackgroundTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, BackgroundTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BackgroundTask.
     * @param {BackgroundTaskDeleteArgs} args - Arguments to delete one BackgroundTask.
     * @example
     * // Delete one BackgroundTask
     * const BackgroundTask = await prisma.backgroundTask.delete({
     *   where: {
     *     // ... filter to delete one BackgroundTask
     *   }
     * })
     * 
     */
    delete<T extends BackgroundTaskDeleteArgs>(args: SelectSubset<T, BackgroundTaskDeleteArgs<ExtArgs>>): Prisma__BackgroundTaskClient<$Result.GetResult<Prisma.$BackgroundTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BackgroundTask.
     * @param {BackgroundTaskUpdateArgs} args - Arguments to update one BackgroundTask.
     * @example
     * // Update one BackgroundTask
     * const backgroundTask = await prisma.backgroundTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BackgroundTaskUpdateArgs>(args: SelectSubset<T, BackgroundTaskUpdateArgs<ExtArgs>>): Prisma__BackgroundTaskClient<$Result.GetResult<Prisma.$BackgroundTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BackgroundTasks.
     * @param {BackgroundTaskDeleteManyArgs} args - Arguments to filter BackgroundTasks to delete.
     * @example
     * // Delete a few BackgroundTasks
     * const { count } = await prisma.backgroundTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BackgroundTaskDeleteManyArgs>(args?: SelectSubset<T, BackgroundTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BackgroundTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BackgroundTasks
     * const backgroundTask = await prisma.backgroundTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BackgroundTaskUpdateManyArgs>(args: SelectSubset<T, BackgroundTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BackgroundTasks and returns the data updated in the database.
     * @param {BackgroundTaskUpdateManyAndReturnArgs} args - Arguments to update many BackgroundTasks.
     * @example
     * // Update many BackgroundTasks
     * const backgroundTask = await prisma.backgroundTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BackgroundTasks and only return the `id`
     * const backgroundTaskWithIdOnly = await prisma.backgroundTask.updateManyAndReturn({
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
    updateManyAndReturn<T extends BackgroundTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, BackgroundTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BackgroundTask.
     * @param {BackgroundTaskUpsertArgs} args - Arguments to update or create a BackgroundTask.
     * @example
     * // Update or create a BackgroundTask
     * const backgroundTask = await prisma.backgroundTask.upsert({
     *   create: {
     *     // ... data to create a BackgroundTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BackgroundTask we want to update
     *   }
     * })
     */
    upsert<T extends BackgroundTaskUpsertArgs>(args: SelectSubset<T, BackgroundTaskUpsertArgs<ExtArgs>>): Prisma__BackgroundTaskClient<$Result.GetResult<Prisma.$BackgroundTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BackgroundTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundTaskCountArgs} args - Arguments to filter BackgroundTasks to count.
     * @example
     * // Count the number of BackgroundTasks
     * const count = await prisma.backgroundTask.count({
     *   where: {
     *     // ... the filter for the BackgroundTasks we want to count
     *   }
     * })
    **/
    count<T extends BackgroundTaskCountArgs>(
      args?: Subset<T, BackgroundTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BackgroundTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BackgroundTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BackgroundTaskAggregateArgs>(args: Subset<T, BackgroundTaskAggregateArgs>): Prisma.PrismaPromise<GetBackgroundTaskAggregateType<T>>

    /**
     * Group by BackgroundTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundTaskGroupByArgs} args - Group by arguments.
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
      T extends BackgroundTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BackgroundTaskGroupByArgs['orderBy'] }
        : { orderBy?: BackgroundTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BackgroundTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackgroundTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BackgroundTask model
   */
  readonly fields: BackgroundTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BackgroundTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BackgroundTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the BackgroundTask model
   */
  interface BackgroundTaskFieldRefs {
    readonly id: FieldRef<"BackgroundTask", 'String'>
    readonly taskType: FieldRef<"BackgroundTask", 'TaskType'>
    readonly status: FieldRef<"BackgroundTask", 'TaskStatus'>
    readonly payload: FieldRef<"BackgroundTask", 'Json'>
    readonly result: FieldRef<"BackgroundTask", 'Json'>
    readonly errorMessage: FieldRef<"BackgroundTask", 'String'>
    readonly startedAt: FieldRef<"BackgroundTask", 'DateTime'>
    readonly completedAt: FieldRef<"BackgroundTask", 'DateTime'>
    readonly createdAt: FieldRef<"BackgroundTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BackgroundTask findUnique
   */
  export type BackgroundTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundTask
     */
    select?: BackgroundTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundTask
     */
    omit?: BackgroundTaskOmit<ExtArgs> | null
    /**
     * Filter, which BackgroundTask to fetch.
     */
    where: BackgroundTaskWhereUniqueInput
  }

  /**
   * BackgroundTask findUniqueOrThrow
   */
  export type BackgroundTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundTask
     */
    select?: BackgroundTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundTask
     */
    omit?: BackgroundTaskOmit<ExtArgs> | null
    /**
     * Filter, which BackgroundTask to fetch.
     */
    where: BackgroundTaskWhereUniqueInput
  }

  /**
   * BackgroundTask findFirst
   */
  export type BackgroundTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundTask
     */
    select?: BackgroundTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundTask
     */
    omit?: BackgroundTaskOmit<ExtArgs> | null
    /**
     * Filter, which BackgroundTask to fetch.
     */
    where?: BackgroundTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BackgroundTasks to fetch.
     */
    orderBy?: BackgroundTaskOrderByWithRelationInput | BackgroundTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BackgroundTasks.
     */
    cursor?: BackgroundTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BackgroundTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BackgroundTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BackgroundTasks.
     */
    distinct?: BackgroundTaskScalarFieldEnum | BackgroundTaskScalarFieldEnum[]
  }

  /**
   * BackgroundTask findFirstOrThrow
   */
  export type BackgroundTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundTask
     */
    select?: BackgroundTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundTask
     */
    omit?: BackgroundTaskOmit<ExtArgs> | null
    /**
     * Filter, which BackgroundTask to fetch.
     */
    where?: BackgroundTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BackgroundTasks to fetch.
     */
    orderBy?: BackgroundTaskOrderByWithRelationInput | BackgroundTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BackgroundTasks.
     */
    cursor?: BackgroundTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BackgroundTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BackgroundTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BackgroundTasks.
     */
    distinct?: BackgroundTaskScalarFieldEnum | BackgroundTaskScalarFieldEnum[]
  }

  /**
   * BackgroundTask findMany
   */
  export type BackgroundTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundTask
     */
    select?: BackgroundTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundTask
     */
    omit?: BackgroundTaskOmit<ExtArgs> | null
    /**
     * Filter, which BackgroundTasks to fetch.
     */
    where?: BackgroundTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BackgroundTasks to fetch.
     */
    orderBy?: BackgroundTaskOrderByWithRelationInput | BackgroundTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BackgroundTasks.
     */
    cursor?: BackgroundTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BackgroundTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BackgroundTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BackgroundTasks.
     */
    distinct?: BackgroundTaskScalarFieldEnum | BackgroundTaskScalarFieldEnum[]
  }

  /**
   * BackgroundTask create
   */
  export type BackgroundTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundTask
     */
    select?: BackgroundTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundTask
     */
    omit?: BackgroundTaskOmit<ExtArgs> | null
    /**
     * The data needed to create a BackgroundTask.
     */
    data: XOR<BackgroundTaskCreateInput, BackgroundTaskUncheckedCreateInput>
  }

  /**
   * BackgroundTask createMany
   */
  export type BackgroundTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BackgroundTasks.
     */
    data: BackgroundTaskCreateManyInput | BackgroundTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BackgroundTask createManyAndReturn
   */
  export type BackgroundTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundTask
     */
    select?: BackgroundTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundTask
     */
    omit?: BackgroundTaskOmit<ExtArgs> | null
    /**
     * The data used to create many BackgroundTasks.
     */
    data: BackgroundTaskCreateManyInput | BackgroundTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BackgroundTask update
   */
  export type BackgroundTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundTask
     */
    select?: BackgroundTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundTask
     */
    omit?: BackgroundTaskOmit<ExtArgs> | null
    /**
     * The data needed to update a BackgroundTask.
     */
    data: XOR<BackgroundTaskUpdateInput, BackgroundTaskUncheckedUpdateInput>
    /**
     * Choose, which BackgroundTask to update.
     */
    where: BackgroundTaskWhereUniqueInput
  }

  /**
   * BackgroundTask updateMany
   */
  export type BackgroundTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BackgroundTasks.
     */
    data: XOR<BackgroundTaskUpdateManyMutationInput, BackgroundTaskUncheckedUpdateManyInput>
    /**
     * Filter which BackgroundTasks to update
     */
    where?: BackgroundTaskWhereInput
    /**
     * Limit how many BackgroundTasks to update.
     */
    limit?: number
  }

  /**
   * BackgroundTask updateManyAndReturn
   */
  export type BackgroundTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundTask
     */
    select?: BackgroundTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundTask
     */
    omit?: BackgroundTaskOmit<ExtArgs> | null
    /**
     * The data used to update BackgroundTasks.
     */
    data: XOR<BackgroundTaskUpdateManyMutationInput, BackgroundTaskUncheckedUpdateManyInput>
    /**
     * Filter which BackgroundTasks to update
     */
    where?: BackgroundTaskWhereInput
    /**
     * Limit how many BackgroundTasks to update.
     */
    limit?: number
  }

  /**
   * BackgroundTask upsert
   */
  export type BackgroundTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundTask
     */
    select?: BackgroundTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundTask
     */
    omit?: BackgroundTaskOmit<ExtArgs> | null
    /**
     * The filter to search for the BackgroundTask to update in case it exists.
     */
    where: BackgroundTaskWhereUniqueInput
    /**
     * In case the BackgroundTask found by the `where` argument doesn't exist, create a new BackgroundTask with this data.
     */
    create: XOR<BackgroundTaskCreateInput, BackgroundTaskUncheckedCreateInput>
    /**
     * In case the BackgroundTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BackgroundTaskUpdateInput, BackgroundTaskUncheckedUpdateInput>
  }

  /**
   * BackgroundTask delete
   */
  export type BackgroundTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundTask
     */
    select?: BackgroundTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundTask
     */
    omit?: BackgroundTaskOmit<ExtArgs> | null
    /**
     * Filter which BackgroundTask to delete.
     */
    where: BackgroundTaskWhereUniqueInput
  }

  /**
   * BackgroundTask deleteMany
   */
  export type BackgroundTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BackgroundTasks to delete
     */
    where?: BackgroundTaskWhereInput
    /**
     * Limit how many BackgroundTasks to delete.
     */
    limit?: number
  }

  /**
   * BackgroundTask without action
   */
  export type BackgroundTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundTask
     */
    select?: BackgroundTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundTask
     */
    omit?: BackgroundTaskOmit<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    details: number
    ipAddress: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    ipAddress?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    ipAddress?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    ipAddress?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    userId: string | null
    action: string
    details: JsonValue | null
    ipAddress: string | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    ipAddress?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "details" | "ipAddress" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: string
      details: Prisma.JsonValue | null
      ipAddress: string | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ActivityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly details: FieldRef<"ActivityLog", 'Json'>
    readonly ipAddress: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.user
   */
  export type ActivityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    role: string
    createdAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      role: string
      createdAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly role: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UniversityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    website: 'website',
    city: 'city',
    state: 'state',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UniversityScalarFieldEnum = (typeof UniversityScalarFieldEnum)[keyof typeof UniversityScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    universityId: 'universityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    universityId: 'universityId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FacultyInviteScalarFieldEnum: {
    id: 'id',
    email: 'email',
    role: 'role',
    universityId: 'universityId',
    departmentId: 'departmentId',
    token: 'token',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type FacultyInviteScalarFieldEnum = (typeof FacultyInviteScalarFieldEnum)[keyof typeof FacultyInviteScalarFieldEnum]


  export const FacultyProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    departmentId: 'departmentId',
    fullName: 'fullName',
    designation: 'designation',
    qualification: 'qualification',
    joiningDate: 'joiningDate',
    avatarUrl: 'avatarUrl',
    bio: 'bio',
    openAlexId: 'openAlexId',
    orcid: 'orcid',
    scopusAuthorId: 'scopusAuthorId',
    vidwanId: 'vidwanId',
    googleScholar: 'googleScholar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacultyProfileScalarFieldEnum = (typeof FacultyProfileScalarFieldEnum)[keyof typeof FacultyProfileScalarFieldEnum]


  export const PublicationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    publicationYear: 'publicationYear',
    doi: 'doi',
    openAlexId: 'openAlexId',
    journalName: 'journalName',
    publisher: 'publisher',
    volume: 'volume',
    issue: 'issue',
    pages: 'pages',
    citationCount: 'citationCount',
    isOpenAccess: 'isOpenAccess',
    openAccessUrl: 'openAccessUrl',
    landingPageUrl: 'landingPageUrl',
    abstract: 'abstract',
    status: 'status',
    rawMetadata: 'rawMetadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PublicationScalarFieldEnum = (typeof PublicationScalarFieldEnum)[keyof typeof PublicationScalarFieldEnum]


  export const PublicationAuthorScalarFieldEnum: {
    id: 'id',
    publicationId: 'publicationId',
    facultyProfileId: 'facultyProfileId',
    authorPosition: 'authorPosition',
    isCorresponding: 'isCorresponding'
  };

  export type PublicationAuthorScalarFieldEnum = (typeof PublicationAuthorScalarFieldEnum)[keyof typeof PublicationAuthorScalarFieldEnum]


  export const NaacCriterionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    category: 'category',
    description: 'description'
  };

  export type NaacCriterionScalarFieldEnum = (typeof NaacCriterionScalarFieldEnum)[keyof typeof NaacCriterionScalarFieldEnum]


  export const NaacPublicationMappingScalarFieldEnum: {
    id: 'id',
    publicationId: 'publicationId',
    criterionId: 'criterionId',
    academicYear: 'academicYear',
    verifiedByIQAC: 'verifiedByIQAC'
  };

  export type NaacPublicationMappingScalarFieldEnum = (typeof NaacPublicationMappingScalarFieldEnum)[keyof typeof NaacPublicationMappingScalarFieldEnum]


  export const NaacReportScalarFieldEnum: {
    id: 'id',
    universityId: 'universityId',
    academicYear: 'academicYear',
    reportType: 'reportType',
    fileUrl: 'fileUrl',
    generatedAt: 'generatedAt'
  };

  export type NaacReportScalarFieldEnum = (typeof NaacReportScalarFieldEnum)[keyof typeof NaacReportScalarFieldEnum]


  export const BackgroundTaskScalarFieldEnum: {
    id: 'id',
    taskType: 'taskType',
    status: 'status',
    payload: 'payload',
    result: 'result',
    errorMessage: 'errorMessage',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type BackgroundTaskScalarFieldEnum = (typeof BackgroundTaskScalarFieldEnum)[keyof typeof BackgroundTaskScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    details: 'details',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'InviteStatus'
   */
  export type EnumInviteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InviteStatus'>
    


  /**
   * Reference to a field of type 'InviteStatus[]'
   */
  export type ListEnumInviteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InviteStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PublicationStatus'
   */
  export type EnumPublicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublicationStatus'>
    


  /**
   * Reference to a field of type 'PublicationStatus[]'
   */
  export type ListEnumPublicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublicationStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TaskType'
   */
  export type EnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType'>
    


  /**
   * Reference to a field of type 'TaskType[]'
   */
  export type ListEnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UniversityWhereInput = {
    AND?: UniversityWhereInput | UniversityWhereInput[]
    OR?: UniversityWhereInput[]
    NOT?: UniversityWhereInput | UniversityWhereInput[]
    id?: StringFilter<"University"> | string
    name?: StringFilter<"University"> | string
    code?: StringFilter<"University"> | string
    website?: StringNullableFilter<"University"> | string | null
    city?: StringNullableFilter<"University"> | string | null
    state?: StringNullableFilter<"University"> | string | null
    country?: StringFilter<"University"> | string
    createdAt?: DateTimeFilter<"University"> | Date | string
    updatedAt?: DateTimeFilter<"University"> | Date | string
    departments?: DepartmentListRelationFilter
    users?: UserListRelationFilter
    invites?: FacultyInviteListRelationFilter
    naacReports?: NaacReportListRelationFilter
  }

  export type UniversityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    website?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departments?: DepartmentOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    invites?: FacultyInviteOrderByRelationAggregateInput
    naacReports?: NaacReportOrderByRelationAggregateInput
  }

  export type UniversityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: UniversityWhereInput | UniversityWhereInput[]
    OR?: UniversityWhereInput[]
    NOT?: UniversityWhereInput | UniversityWhereInput[]
    name?: StringFilter<"University"> | string
    website?: StringNullableFilter<"University"> | string | null
    city?: StringNullableFilter<"University"> | string | null
    state?: StringNullableFilter<"University"> | string | null
    country?: StringFilter<"University"> | string
    createdAt?: DateTimeFilter<"University"> | Date | string
    updatedAt?: DateTimeFilter<"University"> | Date | string
    departments?: DepartmentListRelationFilter
    users?: UserListRelationFilter
    invites?: FacultyInviteListRelationFilter
    naacReports?: NaacReportListRelationFilter
  }, "id" | "code">

  export type UniversityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    website?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UniversityCountOrderByAggregateInput
    _max?: UniversityMaxOrderByAggregateInput
    _min?: UniversityMinOrderByAggregateInput
  }

  export type UniversityScalarWhereWithAggregatesInput = {
    AND?: UniversityScalarWhereWithAggregatesInput | UniversityScalarWhereWithAggregatesInput[]
    OR?: UniversityScalarWhereWithAggregatesInput[]
    NOT?: UniversityScalarWhereWithAggregatesInput | UniversityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"University"> | string
    name?: StringWithAggregatesFilter<"University"> | string
    code?: StringWithAggregatesFilter<"University"> | string
    website?: StringNullableWithAggregatesFilter<"University"> | string | null
    city?: StringNullableWithAggregatesFilter<"University"> | string | null
    state?: StringNullableWithAggregatesFilter<"University"> | string | null
    country?: StringWithAggregatesFilter<"University"> | string
    createdAt?: DateTimeWithAggregatesFilter<"University"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"University"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    code?: StringNullableFilter<"Department"> | string | null
    universityId?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
    facultyProfiles?: FacultyProfileListRelationFilter
    invites?: FacultyInviteListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    universityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    university?: UniversityOrderByWithRelationInput
    facultyProfiles?: FacultyProfileOrderByRelationAggregateInput
    invites?: FacultyInviteOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    universityId_name?: DepartmentUniversityIdNameCompoundUniqueInput
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    code?: StringNullableFilter<"Department"> | string | null
    universityId?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
    facultyProfiles?: FacultyProfileListRelationFilter
    invites?: FacultyInviteListRelationFilter
  }, "id" | "universityId_name">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    universityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    code?: StringNullableWithAggregatesFilter<"Department"> | string | null
    universityId?: StringWithAggregatesFilter<"Department"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    universityId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    university?: XOR<UniversityNullableScalarRelationFilter, UniversityWhereInput> | null
    facultyProfile?: XOR<FacultyProfileNullableScalarRelationFilter, FacultyProfileWhereInput> | null
    activityLogs?: ActivityLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    universityId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    university?: UniversityOrderByWithRelationInput
    facultyProfile?: FacultyProfileOrderByWithRelationInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    universityId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    university?: XOR<UniversityNullableScalarRelationFilter, UniversityWhereInput> | null
    facultyProfile?: XOR<FacultyProfileNullableScalarRelationFilter, FacultyProfileWhereInput> | null
    activityLogs?: ActivityLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    universityId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    universityId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FacultyInviteWhereInput = {
    AND?: FacultyInviteWhereInput | FacultyInviteWhereInput[]
    OR?: FacultyInviteWhereInput[]
    NOT?: FacultyInviteWhereInput | FacultyInviteWhereInput[]
    id?: StringFilter<"FacultyInvite"> | string
    email?: StringFilter<"FacultyInvite"> | string
    role?: EnumUserRoleFilter<"FacultyInvite"> | $Enums.UserRole
    universityId?: StringFilter<"FacultyInvite"> | string
    departmentId?: StringNullableFilter<"FacultyInvite"> | string | null
    token?: StringFilter<"FacultyInvite"> | string
    status?: EnumInviteStatusFilter<"FacultyInvite"> | $Enums.InviteStatus
    expiresAt?: DateTimeFilter<"FacultyInvite"> | Date | string
    createdAt?: DateTimeFilter<"FacultyInvite"> | Date | string
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
  }

  export type FacultyInviteOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    universityId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    university?: UniversityOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
  }

  export type FacultyInviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: FacultyInviteWhereInput | FacultyInviteWhereInput[]
    OR?: FacultyInviteWhereInput[]
    NOT?: FacultyInviteWhereInput | FacultyInviteWhereInput[]
    email?: StringFilter<"FacultyInvite"> | string
    role?: EnumUserRoleFilter<"FacultyInvite"> | $Enums.UserRole
    universityId?: StringFilter<"FacultyInvite"> | string
    departmentId?: StringNullableFilter<"FacultyInvite"> | string | null
    status?: EnumInviteStatusFilter<"FacultyInvite"> | $Enums.InviteStatus
    expiresAt?: DateTimeFilter<"FacultyInvite"> | Date | string
    createdAt?: DateTimeFilter<"FacultyInvite"> | Date | string
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
  }, "id" | "token">

  export type FacultyInviteOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    universityId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: FacultyInviteCountOrderByAggregateInput
    _max?: FacultyInviteMaxOrderByAggregateInput
    _min?: FacultyInviteMinOrderByAggregateInput
  }

  export type FacultyInviteScalarWhereWithAggregatesInput = {
    AND?: FacultyInviteScalarWhereWithAggregatesInput | FacultyInviteScalarWhereWithAggregatesInput[]
    OR?: FacultyInviteScalarWhereWithAggregatesInput[]
    NOT?: FacultyInviteScalarWhereWithAggregatesInput | FacultyInviteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacultyInvite"> | string
    email?: StringWithAggregatesFilter<"FacultyInvite"> | string
    role?: EnumUserRoleWithAggregatesFilter<"FacultyInvite"> | $Enums.UserRole
    universityId?: StringWithAggregatesFilter<"FacultyInvite"> | string
    departmentId?: StringNullableWithAggregatesFilter<"FacultyInvite"> | string | null
    token?: StringWithAggregatesFilter<"FacultyInvite"> | string
    status?: EnumInviteStatusWithAggregatesFilter<"FacultyInvite"> | $Enums.InviteStatus
    expiresAt?: DateTimeWithAggregatesFilter<"FacultyInvite"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"FacultyInvite"> | Date | string
  }

  export type FacultyProfileWhereInput = {
    AND?: FacultyProfileWhereInput | FacultyProfileWhereInput[]
    OR?: FacultyProfileWhereInput[]
    NOT?: FacultyProfileWhereInput | FacultyProfileWhereInput[]
    id?: StringFilter<"FacultyProfile"> | string
    userId?: StringFilter<"FacultyProfile"> | string
    departmentId?: StringFilter<"FacultyProfile"> | string
    fullName?: StringFilter<"FacultyProfile"> | string
    designation?: StringFilter<"FacultyProfile"> | string
    qualification?: StringNullableFilter<"FacultyProfile"> | string | null
    joiningDate?: DateTimeNullableFilter<"FacultyProfile"> | Date | string | null
    avatarUrl?: StringNullableFilter<"FacultyProfile"> | string | null
    bio?: StringNullableFilter<"FacultyProfile"> | string | null
    openAlexId?: StringNullableFilter<"FacultyProfile"> | string | null
    orcid?: StringNullableFilter<"FacultyProfile"> | string | null
    scopusAuthorId?: StringNullableFilter<"FacultyProfile"> | string | null
    vidwanId?: StringNullableFilter<"FacultyProfile"> | string | null
    googleScholar?: StringNullableFilter<"FacultyProfile"> | string | null
    createdAt?: DateTimeFilter<"FacultyProfile"> | Date | string
    updatedAt?: DateTimeFilter<"FacultyProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    authorships?: PublicationAuthorListRelationFilter
  }

  export type FacultyProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    fullName?: SortOrder
    designation?: SortOrder
    qualification?: SortOrderInput | SortOrder
    joiningDate?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    openAlexId?: SortOrderInput | SortOrder
    orcid?: SortOrderInput | SortOrder
    scopusAuthorId?: SortOrderInput | SortOrder
    vidwanId?: SortOrderInput | SortOrder
    googleScholar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    authorships?: PublicationAuthorOrderByRelationAggregateInput
  }

  export type FacultyProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    openAlexId?: string
    orcid?: string
    scopusAuthorId?: string
    vidwanId?: string
    AND?: FacultyProfileWhereInput | FacultyProfileWhereInput[]
    OR?: FacultyProfileWhereInput[]
    NOT?: FacultyProfileWhereInput | FacultyProfileWhereInput[]
    departmentId?: StringFilter<"FacultyProfile"> | string
    fullName?: StringFilter<"FacultyProfile"> | string
    designation?: StringFilter<"FacultyProfile"> | string
    qualification?: StringNullableFilter<"FacultyProfile"> | string | null
    joiningDate?: DateTimeNullableFilter<"FacultyProfile"> | Date | string | null
    avatarUrl?: StringNullableFilter<"FacultyProfile"> | string | null
    bio?: StringNullableFilter<"FacultyProfile"> | string | null
    googleScholar?: StringNullableFilter<"FacultyProfile"> | string | null
    createdAt?: DateTimeFilter<"FacultyProfile"> | Date | string
    updatedAt?: DateTimeFilter<"FacultyProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    authorships?: PublicationAuthorListRelationFilter
  }, "id" | "userId" | "openAlexId" | "orcid" | "scopusAuthorId" | "vidwanId">

  export type FacultyProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    fullName?: SortOrder
    designation?: SortOrder
    qualification?: SortOrderInput | SortOrder
    joiningDate?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    openAlexId?: SortOrderInput | SortOrder
    orcid?: SortOrderInput | SortOrder
    scopusAuthorId?: SortOrderInput | SortOrder
    vidwanId?: SortOrderInput | SortOrder
    googleScholar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FacultyProfileCountOrderByAggregateInput
    _max?: FacultyProfileMaxOrderByAggregateInput
    _min?: FacultyProfileMinOrderByAggregateInput
  }

  export type FacultyProfileScalarWhereWithAggregatesInput = {
    AND?: FacultyProfileScalarWhereWithAggregatesInput | FacultyProfileScalarWhereWithAggregatesInput[]
    OR?: FacultyProfileScalarWhereWithAggregatesInput[]
    NOT?: FacultyProfileScalarWhereWithAggregatesInput | FacultyProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacultyProfile"> | string
    userId?: StringWithAggregatesFilter<"FacultyProfile"> | string
    departmentId?: StringWithAggregatesFilter<"FacultyProfile"> | string
    fullName?: StringWithAggregatesFilter<"FacultyProfile"> | string
    designation?: StringWithAggregatesFilter<"FacultyProfile"> | string
    qualification?: StringNullableWithAggregatesFilter<"FacultyProfile"> | string | null
    joiningDate?: DateTimeNullableWithAggregatesFilter<"FacultyProfile"> | Date | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"FacultyProfile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"FacultyProfile"> | string | null
    openAlexId?: StringNullableWithAggregatesFilter<"FacultyProfile"> | string | null
    orcid?: StringNullableWithAggregatesFilter<"FacultyProfile"> | string | null
    scopusAuthorId?: StringNullableWithAggregatesFilter<"FacultyProfile"> | string | null
    vidwanId?: StringNullableWithAggregatesFilter<"FacultyProfile"> | string | null
    googleScholar?: StringNullableWithAggregatesFilter<"FacultyProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FacultyProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FacultyProfile"> | Date | string
  }

  export type PublicationWhereInput = {
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    id?: StringFilter<"Publication"> | string
    title?: StringFilter<"Publication"> | string
    publicationYear?: IntFilter<"Publication"> | number
    doi?: StringNullableFilter<"Publication"> | string | null
    openAlexId?: StringNullableFilter<"Publication"> | string | null
    journalName?: StringNullableFilter<"Publication"> | string | null
    publisher?: StringNullableFilter<"Publication"> | string | null
    volume?: StringNullableFilter<"Publication"> | string | null
    issue?: StringNullableFilter<"Publication"> | string | null
    pages?: StringNullableFilter<"Publication"> | string | null
    citationCount?: IntFilter<"Publication"> | number
    isOpenAccess?: BoolFilter<"Publication"> | boolean
    openAccessUrl?: StringNullableFilter<"Publication"> | string | null
    landingPageUrl?: StringNullableFilter<"Publication"> | string | null
    abstract?: StringNullableFilter<"Publication"> | string | null
    status?: EnumPublicationStatusFilter<"Publication"> | $Enums.PublicationStatus
    rawMetadata?: JsonNullableFilter<"Publication">
    createdAt?: DateTimeFilter<"Publication"> | Date | string
    updatedAt?: DateTimeFilter<"Publication"> | Date | string
    authors?: PublicationAuthorListRelationFilter
    naacMappings?: NaacPublicationMappingListRelationFilter
  }

  export type PublicationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    publicationYear?: SortOrder
    doi?: SortOrderInput | SortOrder
    openAlexId?: SortOrderInput | SortOrder
    journalName?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    issue?: SortOrderInput | SortOrder
    pages?: SortOrderInput | SortOrder
    citationCount?: SortOrder
    isOpenAccess?: SortOrder
    openAccessUrl?: SortOrderInput | SortOrder
    landingPageUrl?: SortOrderInput | SortOrder
    abstract?: SortOrderInput | SortOrder
    status?: SortOrder
    rawMetadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authors?: PublicationAuthorOrderByRelationAggregateInput
    naacMappings?: NaacPublicationMappingOrderByRelationAggregateInput
  }

  export type PublicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    doi?: string
    openAlexId?: string
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    title?: StringFilter<"Publication"> | string
    publicationYear?: IntFilter<"Publication"> | number
    journalName?: StringNullableFilter<"Publication"> | string | null
    publisher?: StringNullableFilter<"Publication"> | string | null
    volume?: StringNullableFilter<"Publication"> | string | null
    issue?: StringNullableFilter<"Publication"> | string | null
    pages?: StringNullableFilter<"Publication"> | string | null
    citationCount?: IntFilter<"Publication"> | number
    isOpenAccess?: BoolFilter<"Publication"> | boolean
    openAccessUrl?: StringNullableFilter<"Publication"> | string | null
    landingPageUrl?: StringNullableFilter<"Publication"> | string | null
    abstract?: StringNullableFilter<"Publication"> | string | null
    status?: EnumPublicationStatusFilter<"Publication"> | $Enums.PublicationStatus
    rawMetadata?: JsonNullableFilter<"Publication">
    createdAt?: DateTimeFilter<"Publication"> | Date | string
    updatedAt?: DateTimeFilter<"Publication"> | Date | string
    authors?: PublicationAuthorListRelationFilter
    naacMappings?: NaacPublicationMappingListRelationFilter
  }, "id" | "doi" | "openAlexId">

  export type PublicationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    publicationYear?: SortOrder
    doi?: SortOrderInput | SortOrder
    openAlexId?: SortOrderInput | SortOrder
    journalName?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    issue?: SortOrderInput | SortOrder
    pages?: SortOrderInput | SortOrder
    citationCount?: SortOrder
    isOpenAccess?: SortOrder
    openAccessUrl?: SortOrderInput | SortOrder
    landingPageUrl?: SortOrderInput | SortOrder
    abstract?: SortOrderInput | SortOrder
    status?: SortOrder
    rawMetadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PublicationCountOrderByAggregateInput
    _avg?: PublicationAvgOrderByAggregateInput
    _max?: PublicationMaxOrderByAggregateInput
    _min?: PublicationMinOrderByAggregateInput
    _sum?: PublicationSumOrderByAggregateInput
  }

  export type PublicationScalarWhereWithAggregatesInput = {
    AND?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    OR?: PublicationScalarWhereWithAggregatesInput[]
    NOT?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Publication"> | string
    title?: StringWithAggregatesFilter<"Publication"> | string
    publicationYear?: IntWithAggregatesFilter<"Publication"> | number
    doi?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    openAlexId?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    journalName?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    publisher?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    volume?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    issue?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    pages?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    citationCount?: IntWithAggregatesFilter<"Publication"> | number
    isOpenAccess?: BoolWithAggregatesFilter<"Publication"> | boolean
    openAccessUrl?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    landingPageUrl?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    abstract?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    status?: EnumPublicationStatusWithAggregatesFilter<"Publication"> | $Enums.PublicationStatus
    rawMetadata?: JsonNullableWithAggregatesFilter<"Publication">
    createdAt?: DateTimeWithAggregatesFilter<"Publication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Publication"> | Date | string
  }

  export type PublicationAuthorWhereInput = {
    AND?: PublicationAuthorWhereInput | PublicationAuthorWhereInput[]
    OR?: PublicationAuthorWhereInput[]
    NOT?: PublicationAuthorWhereInput | PublicationAuthorWhereInput[]
    id?: StringFilter<"PublicationAuthor"> | string
    publicationId?: StringFilter<"PublicationAuthor"> | string
    facultyProfileId?: StringFilter<"PublicationAuthor"> | string
    authorPosition?: IntFilter<"PublicationAuthor"> | number
    isCorresponding?: BoolFilter<"PublicationAuthor"> | boolean
    publication?: XOR<PublicationScalarRelationFilter, PublicationWhereInput>
    facultyProfile?: XOR<FacultyProfileScalarRelationFilter, FacultyProfileWhereInput>
  }

  export type PublicationAuthorOrderByWithRelationInput = {
    id?: SortOrder
    publicationId?: SortOrder
    facultyProfileId?: SortOrder
    authorPosition?: SortOrder
    isCorresponding?: SortOrder
    publication?: PublicationOrderByWithRelationInput
    facultyProfile?: FacultyProfileOrderByWithRelationInput
  }

  export type PublicationAuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicationId_facultyProfileId?: PublicationAuthorPublicationIdFacultyProfileIdCompoundUniqueInput
    AND?: PublicationAuthorWhereInput | PublicationAuthorWhereInput[]
    OR?: PublicationAuthorWhereInput[]
    NOT?: PublicationAuthorWhereInput | PublicationAuthorWhereInput[]
    publicationId?: StringFilter<"PublicationAuthor"> | string
    facultyProfileId?: StringFilter<"PublicationAuthor"> | string
    authorPosition?: IntFilter<"PublicationAuthor"> | number
    isCorresponding?: BoolFilter<"PublicationAuthor"> | boolean
    publication?: XOR<PublicationScalarRelationFilter, PublicationWhereInput>
    facultyProfile?: XOR<FacultyProfileScalarRelationFilter, FacultyProfileWhereInput>
  }, "id" | "publicationId_facultyProfileId">

  export type PublicationAuthorOrderByWithAggregationInput = {
    id?: SortOrder
    publicationId?: SortOrder
    facultyProfileId?: SortOrder
    authorPosition?: SortOrder
    isCorresponding?: SortOrder
    _count?: PublicationAuthorCountOrderByAggregateInput
    _avg?: PublicationAuthorAvgOrderByAggregateInput
    _max?: PublicationAuthorMaxOrderByAggregateInput
    _min?: PublicationAuthorMinOrderByAggregateInput
    _sum?: PublicationAuthorSumOrderByAggregateInput
  }

  export type PublicationAuthorScalarWhereWithAggregatesInput = {
    AND?: PublicationAuthorScalarWhereWithAggregatesInput | PublicationAuthorScalarWhereWithAggregatesInput[]
    OR?: PublicationAuthorScalarWhereWithAggregatesInput[]
    NOT?: PublicationAuthorScalarWhereWithAggregatesInput | PublicationAuthorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PublicationAuthor"> | string
    publicationId?: StringWithAggregatesFilter<"PublicationAuthor"> | string
    facultyProfileId?: StringWithAggregatesFilter<"PublicationAuthor"> | string
    authorPosition?: IntWithAggregatesFilter<"PublicationAuthor"> | number
    isCorresponding?: BoolWithAggregatesFilter<"PublicationAuthor"> | boolean
  }

  export type NaacCriterionWhereInput = {
    AND?: NaacCriterionWhereInput | NaacCriterionWhereInput[]
    OR?: NaacCriterionWhereInput[]
    NOT?: NaacCriterionWhereInput | NaacCriterionWhereInput[]
    id?: StringFilter<"NaacCriterion"> | string
    code?: StringFilter<"NaacCriterion"> | string
    category?: StringFilter<"NaacCriterion"> | string
    description?: StringFilter<"NaacCriterion"> | string
    mappings?: NaacPublicationMappingListRelationFilter
  }

  export type NaacCriterionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    category?: SortOrder
    description?: SortOrder
    mappings?: NaacPublicationMappingOrderByRelationAggregateInput
  }

  export type NaacCriterionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: NaacCriterionWhereInput | NaacCriterionWhereInput[]
    OR?: NaacCriterionWhereInput[]
    NOT?: NaacCriterionWhereInput | NaacCriterionWhereInput[]
    category?: StringFilter<"NaacCriterion"> | string
    description?: StringFilter<"NaacCriterion"> | string
    mappings?: NaacPublicationMappingListRelationFilter
  }, "id" | "code">

  export type NaacCriterionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    category?: SortOrder
    description?: SortOrder
    _count?: NaacCriterionCountOrderByAggregateInput
    _max?: NaacCriterionMaxOrderByAggregateInput
    _min?: NaacCriterionMinOrderByAggregateInput
  }

  export type NaacCriterionScalarWhereWithAggregatesInput = {
    AND?: NaacCriterionScalarWhereWithAggregatesInput | NaacCriterionScalarWhereWithAggregatesInput[]
    OR?: NaacCriterionScalarWhereWithAggregatesInput[]
    NOT?: NaacCriterionScalarWhereWithAggregatesInput | NaacCriterionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NaacCriterion"> | string
    code?: StringWithAggregatesFilter<"NaacCriterion"> | string
    category?: StringWithAggregatesFilter<"NaacCriterion"> | string
    description?: StringWithAggregatesFilter<"NaacCriterion"> | string
  }

  export type NaacPublicationMappingWhereInput = {
    AND?: NaacPublicationMappingWhereInput | NaacPublicationMappingWhereInput[]
    OR?: NaacPublicationMappingWhereInput[]
    NOT?: NaacPublicationMappingWhereInput | NaacPublicationMappingWhereInput[]
    id?: StringFilter<"NaacPublicationMapping"> | string
    publicationId?: StringFilter<"NaacPublicationMapping"> | string
    criterionId?: StringFilter<"NaacPublicationMapping"> | string
    academicYear?: StringFilter<"NaacPublicationMapping"> | string
    verifiedByIQAC?: BoolFilter<"NaacPublicationMapping"> | boolean
    publication?: XOR<PublicationScalarRelationFilter, PublicationWhereInput>
    criterion?: XOR<NaacCriterionScalarRelationFilter, NaacCriterionWhereInput>
  }

  export type NaacPublicationMappingOrderByWithRelationInput = {
    id?: SortOrder
    publicationId?: SortOrder
    criterionId?: SortOrder
    academicYear?: SortOrder
    verifiedByIQAC?: SortOrder
    publication?: PublicationOrderByWithRelationInput
    criterion?: NaacCriterionOrderByWithRelationInput
  }

  export type NaacPublicationMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicationId_criterionId_academicYear?: NaacPublicationMappingPublicationIdCriterionIdAcademicYearCompoundUniqueInput
    AND?: NaacPublicationMappingWhereInput | NaacPublicationMappingWhereInput[]
    OR?: NaacPublicationMappingWhereInput[]
    NOT?: NaacPublicationMappingWhereInput | NaacPublicationMappingWhereInput[]
    publicationId?: StringFilter<"NaacPublicationMapping"> | string
    criterionId?: StringFilter<"NaacPublicationMapping"> | string
    academicYear?: StringFilter<"NaacPublicationMapping"> | string
    verifiedByIQAC?: BoolFilter<"NaacPublicationMapping"> | boolean
    publication?: XOR<PublicationScalarRelationFilter, PublicationWhereInput>
    criterion?: XOR<NaacCriterionScalarRelationFilter, NaacCriterionWhereInput>
  }, "id" | "publicationId_criterionId_academicYear">

  export type NaacPublicationMappingOrderByWithAggregationInput = {
    id?: SortOrder
    publicationId?: SortOrder
    criterionId?: SortOrder
    academicYear?: SortOrder
    verifiedByIQAC?: SortOrder
    _count?: NaacPublicationMappingCountOrderByAggregateInput
    _max?: NaacPublicationMappingMaxOrderByAggregateInput
    _min?: NaacPublicationMappingMinOrderByAggregateInput
  }

  export type NaacPublicationMappingScalarWhereWithAggregatesInput = {
    AND?: NaacPublicationMappingScalarWhereWithAggregatesInput | NaacPublicationMappingScalarWhereWithAggregatesInput[]
    OR?: NaacPublicationMappingScalarWhereWithAggregatesInput[]
    NOT?: NaacPublicationMappingScalarWhereWithAggregatesInput | NaacPublicationMappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NaacPublicationMapping"> | string
    publicationId?: StringWithAggregatesFilter<"NaacPublicationMapping"> | string
    criterionId?: StringWithAggregatesFilter<"NaacPublicationMapping"> | string
    academicYear?: StringWithAggregatesFilter<"NaacPublicationMapping"> | string
    verifiedByIQAC?: BoolWithAggregatesFilter<"NaacPublicationMapping"> | boolean
  }

  export type NaacReportWhereInput = {
    AND?: NaacReportWhereInput | NaacReportWhereInput[]
    OR?: NaacReportWhereInput[]
    NOT?: NaacReportWhereInput | NaacReportWhereInput[]
    id?: StringFilter<"NaacReport"> | string
    universityId?: StringFilter<"NaacReport"> | string
    academicYear?: StringFilter<"NaacReport"> | string
    reportType?: StringFilter<"NaacReport"> | string
    fileUrl?: StringNullableFilter<"NaacReport"> | string | null
    generatedAt?: DateTimeFilter<"NaacReport"> | Date | string
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
  }

  export type NaacReportOrderByWithRelationInput = {
    id?: SortOrder
    universityId?: SortOrder
    academicYear?: SortOrder
    reportType?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    university?: UniversityOrderByWithRelationInput
  }

  export type NaacReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NaacReportWhereInput | NaacReportWhereInput[]
    OR?: NaacReportWhereInput[]
    NOT?: NaacReportWhereInput | NaacReportWhereInput[]
    universityId?: StringFilter<"NaacReport"> | string
    academicYear?: StringFilter<"NaacReport"> | string
    reportType?: StringFilter<"NaacReport"> | string
    fileUrl?: StringNullableFilter<"NaacReport"> | string | null
    generatedAt?: DateTimeFilter<"NaacReport"> | Date | string
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
  }, "id">

  export type NaacReportOrderByWithAggregationInput = {
    id?: SortOrder
    universityId?: SortOrder
    academicYear?: SortOrder
    reportType?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    _count?: NaacReportCountOrderByAggregateInput
    _max?: NaacReportMaxOrderByAggregateInput
    _min?: NaacReportMinOrderByAggregateInput
  }

  export type NaacReportScalarWhereWithAggregatesInput = {
    AND?: NaacReportScalarWhereWithAggregatesInput | NaacReportScalarWhereWithAggregatesInput[]
    OR?: NaacReportScalarWhereWithAggregatesInput[]
    NOT?: NaacReportScalarWhereWithAggregatesInput | NaacReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NaacReport"> | string
    universityId?: StringWithAggregatesFilter<"NaacReport"> | string
    academicYear?: StringWithAggregatesFilter<"NaacReport"> | string
    reportType?: StringWithAggregatesFilter<"NaacReport"> | string
    fileUrl?: StringNullableWithAggregatesFilter<"NaacReport"> | string | null
    generatedAt?: DateTimeWithAggregatesFilter<"NaacReport"> | Date | string
  }

  export type BackgroundTaskWhereInput = {
    AND?: BackgroundTaskWhereInput | BackgroundTaskWhereInput[]
    OR?: BackgroundTaskWhereInput[]
    NOT?: BackgroundTaskWhereInput | BackgroundTaskWhereInput[]
    id?: StringFilter<"BackgroundTask"> | string
    taskType?: EnumTaskTypeFilter<"BackgroundTask"> | $Enums.TaskType
    status?: EnumTaskStatusFilter<"BackgroundTask"> | $Enums.TaskStatus
    payload?: JsonNullableFilter<"BackgroundTask">
    result?: JsonNullableFilter<"BackgroundTask">
    errorMessage?: StringNullableFilter<"BackgroundTask"> | string | null
    startedAt?: DateTimeNullableFilter<"BackgroundTask"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"BackgroundTask"> | Date | string | null
    createdAt?: DateTimeFilter<"BackgroundTask"> | Date | string
  }

  export type BackgroundTaskOrderByWithRelationInput = {
    id?: SortOrder
    taskType?: SortOrder
    status?: SortOrder
    payload?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type BackgroundTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BackgroundTaskWhereInput | BackgroundTaskWhereInput[]
    OR?: BackgroundTaskWhereInput[]
    NOT?: BackgroundTaskWhereInput | BackgroundTaskWhereInput[]
    taskType?: EnumTaskTypeFilter<"BackgroundTask"> | $Enums.TaskType
    status?: EnumTaskStatusFilter<"BackgroundTask"> | $Enums.TaskStatus
    payload?: JsonNullableFilter<"BackgroundTask">
    result?: JsonNullableFilter<"BackgroundTask">
    errorMessage?: StringNullableFilter<"BackgroundTask"> | string | null
    startedAt?: DateTimeNullableFilter<"BackgroundTask"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"BackgroundTask"> | Date | string | null
    createdAt?: DateTimeFilter<"BackgroundTask"> | Date | string
  }, "id">

  export type BackgroundTaskOrderByWithAggregationInput = {
    id?: SortOrder
    taskType?: SortOrder
    status?: SortOrder
    payload?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BackgroundTaskCountOrderByAggregateInput
    _max?: BackgroundTaskMaxOrderByAggregateInput
    _min?: BackgroundTaskMinOrderByAggregateInput
  }

  export type BackgroundTaskScalarWhereWithAggregatesInput = {
    AND?: BackgroundTaskScalarWhereWithAggregatesInput | BackgroundTaskScalarWhereWithAggregatesInput[]
    OR?: BackgroundTaskScalarWhereWithAggregatesInput[]
    NOT?: BackgroundTaskScalarWhereWithAggregatesInput | BackgroundTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BackgroundTask"> | string
    taskType?: EnumTaskTypeWithAggregatesFilter<"BackgroundTask"> | $Enums.TaskType
    status?: EnumTaskStatusWithAggregatesFilter<"BackgroundTask"> | $Enums.TaskStatus
    payload?: JsonNullableWithAggregatesFilter<"BackgroundTask">
    result?: JsonNullableWithAggregatesFilter<"BackgroundTask">
    errorMessage?: StringNullableWithAggregatesFilter<"BackgroundTask"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"BackgroundTask"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"BackgroundTask"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BackgroundTask"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    details?: JsonNullableFilter<"ActivityLog">
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    details?: JsonNullableFilter<"ActivityLog">
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    userId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    details?: JsonNullableWithAggregatesFilter<"ActivityLog">
    ipAddress?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    name?: StringNullableFilter<"AdminUser"> | string | null
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    password?: StringFilter<"AdminUser"> | string
    name?: StringNullableFilter<"AdminUser"> | string | null
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringNullableWithAggregatesFilter<"AdminUser"> | string | null
    role?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type UniversityCreateInput = {
    id?: string
    name: string
    code: string
    website?: string | null
    city?: string | null
    state?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutUniversityInput
    users?: UserCreateNestedManyWithoutUniversityInput
    invites?: FacultyInviteCreateNestedManyWithoutUniversityInput
    naacReports?: NaacReportCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    website?: string | null
    city?: string | null
    state?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutUniversityInput
    users?: UserUncheckedCreateNestedManyWithoutUniversityInput
    invites?: FacultyInviteUncheckedCreateNestedManyWithoutUniversityInput
    naacReports?: NaacReportUncheckedCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutUniversityNestedInput
    users?: UserUpdateManyWithoutUniversityNestedInput
    invites?: FacultyInviteUpdateManyWithoutUniversityNestedInput
    naacReports?: NaacReportUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutUniversityNestedInput
    users?: UserUncheckedUpdateManyWithoutUniversityNestedInput
    invites?: FacultyInviteUncheckedUpdateManyWithoutUniversityNestedInput
    naacReports?: NaacReportUncheckedUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityCreateManyInput = {
    id?: string
    name: string
    code: string
    website?: string | null
    city?: string | null
    state?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniversityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    university: UniversityCreateNestedOneWithoutDepartmentsInput
    facultyProfiles?: FacultyProfileCreateNestedManyWithoutDepartmentInput
    invites?: FacultyInviteCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    code?: string | null
    universityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facultyProfiles?: FacultyProfileUncheckedCreateNestedManyWithoutDepartmentInput
    invites?: FacultyInviteUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneRequiredWithoutDepartmentsNestedInput
    facultyProfiles?: FacultyProfileUpdateManyWithoutDepartmentNestedInput
    invites?: FacultyInviteUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    universityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultyProfiles?: FacultyProfileUncheckedUpdateManyWithoutDepartmentNestedInput
    invites?: FacultyInviteUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    code?: string | null
    universityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    universityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    university?: UniversityCreateNestedOneWithoutUsersInput
    facultyProfile?: FacultyProfileCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    universityId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facultyProfile?: FacultyProfileUncheckedCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneWithoutUsersNestedInput
    facultyProfile?: FacultyProfileUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultyProfile?: FacultyProfileUncheckedUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    universityId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyInviteCreateInput = {
    id?: string
    email: string
    role?: $Enums.UserRole
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
    university: UniversityCreateNestedOneWithoutInvitesInput
    department?: DepartmentCreateNestedOneWithoutInvitesInput
  }

  export type FacultyInviteUncheckedCreateInput = {
    id?: string
    email: string
    role?: $Enums.UserRole
    universityId: string
    departmentId?: string | null
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type FacultyInviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneRequiredWithoutInvitesNestedInput
    department?: DepartmentUpdateOneWithoutInvitesNestedInput
  }

  export type FacultyInviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    universityId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyInviteCreateManyInput = {
    id?: string
    email: string
    role?: $Enums.UserRole
    universityId: string
    departmentId?: string | null
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type FacultyInviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyInviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    universityId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyProfileCreateInput = {
    id?: string
    fullName: string
    designation: string
    qualification?: string | null
    joiningDate?: Date | string | null
    avatarUrl?: string | null
    bio?: string | null
    openAlexId?: string | null
    orcid?: string | null
    scopusAuthorId?: string | null
    vidwanId?: string | null
    googleScholar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFacultyProfileInput
    department: DepartmentCreateNestedOneWithoutFacultyProfilesInput
    authorships?: PublicationAuthorCreateNestedManyWithoutFacultyProfileInput
  }

  export type FacultyProfileUncheckedCreateInput = {
    id?: string
    userId: string
    departmentId: string
    fullName: string
    designation: string
    qualification?: string | null
    joiningDate?: Date | string | null
    avatarUrl?: string | null
    bio?: string | null
    openAlexId?: string | null
    orcid?: string | null
    scopusAuthorId?: string | null
    vidwanId?: string | null
    googleScholar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorships?: PublicationAuthorUncheckedCreateNestedManyWithoutFacultyProfileInput
  }

  export type FacultyProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    scopusAuthorId?: NullableStringFieldUpdateOperationsInput | string | null
    vidwanId?: NullableStringFieldUpdateOperationsInput | string | null
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFacultyProfileNestedInput
    department?: DepartmentUpdateOneRequiredWithoutFacultyProfilesNestedInput
    authorships?: PublicationAuthorUpdateManyWithoutFacultyProfileNestedInput
  }

  export type FacultyProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    scopusAuthorId?: NullableStringFieldUpdateOperationsInput | string | null
    vidwanId?: NullableStringFieldUpdateOperationsInput | string | null
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorships?: PublicationAuthorUncheckedUpdateManyWithoutFacultyProfileNestedInput
  }

  export type FacultyProfileCreateManyInput = {
    id?: string
    userId: string
    departmentId: string
    fullName: string
    designation: string
    qualification?: string | null
    joiningDate?: Date | string | null
    avatarUrl?: string | null
    bio?: string | null
    openAlexId?: string | null
    orcid?: string | null
    scopusAuthorId?: string | null
    vidwanId?: string | null
    googleScholar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultyProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    scopusAuthorId?: NullableStringFieldUpdateOperationsInput | string | null
    vidwanId?: NullableStringFieldUpdateOperationsInput | string | null
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    scopusAuthorId?: NullableStringFieldUpdateOperationsInput | string | null
    vidwanId?: NullableStringFieldUpdateOperationsInput | string | null
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationCreateInput = {
    id?: string
    title: string
    publicationYear: number
    doi?: string | null
    openAlexId?: string | null
    journalName?: string | null
    publisher?: string | null
    volume?: string | null
    issue?: string | null
    pages?: string | null
    citationCount?: number
    isOpenAccess?: boolean
    openAccessUrl?: string | null
    landingPageUrl?: string | null
    abstract?: string | null
    status?: $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: PublicationAuthorCreateNestedManyWithoutPublicationInput
    naacMappings?: NaacPublicationMappingCreateNestedManyWithoutPublicationInput
  }

  export type PublicationUncheckedCreateInput = {
    id?: string
    title: string
    publicationYear: number
    doi?: string | null
    openAlexId?: string | null
    journalName?: string | null
    publisher?: string | null
    volume?: string | null
    issue?: string | null
    pages?: string | null
    citationCount?: number
    isOpenAccess?: boolean
    openAccessUrl?: string | null
    landingPageUrl?: string | null
    abstract?: string | null
    status?: $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: PublicationAuthorUncheckedCreateNestedManyWithoutPublicationInput
    naacMappings?: NaacPublicationMappingUncheckedCreateNestedManyWithoutPublicationInput
  }

  export type PublicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    journalName?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableStringFieldUpdateOperationsInput | string | null
    citationCount?: IntFieldUpdateOperationsInput | number
    isOpenAccess?: BoolFieldUpdateOperationsInput | boolean
    openAccessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    abstract?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: PublicationAuthorUpdateManyWithoutPublicationNestedInput
    naacMappings?: NaacPublicationMappingUpdateManyWithoutPublicationNestedInput
  }

  export type PublicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    journalName?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableStringFieldUpdateOperationsInput | string | null
    citationCount?: IntFieldUpdateOperationsInput | number
    isOpenAccess?: BoolFieldUpdateOperationsInput | boolean
    openAccessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    abstract?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: PublicationAuthorUncheckedUpdateManyWithoutPublicationNestedInput
    naacMappings?: NaacPublicationMappingUncheckedUpdateManyWithoutPublicationNestedInput
  }

  export type PublicationCreateManyInput = {
    id?: string
    title: string
    publicationYear: number
    doi?: string | null
    openAlexId?: string | null
    journalName?: string | null
    publisher?: string | null
    volume?: string | null
    issue?: string | null
    pages?: string | null
    citationCount?: number
    isOpenAccess?: boolean
    openAccessUrl?: string | null
    landingPageUrl?: string | null
    abstract?: string | null
    status?: $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    journalName?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableStringFieldUpdateOperationsInput | string | null
    citationCount?: IntFieldUpdateOperationsInput | number
    isOpenAccess?: BoolFieldUpdateOperationsInput | boolean
    openAccessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    abstract?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    journalName?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableStringFieldUpdateOperationsInput | string | null
    citationCount?: IntFieldUpdateOperationsInput | number
    isOpenAccess?: BoolFieldUpdateOperationsInput | boolean
    openAccessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    abstract?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationAuthorCreateInput = {
    id?: string
    authorPosition?: number
    isCorresponding?: boolean
    publication: PublicationCreateNestedOneWithoutAuthorsInput
    facultyProfile: FacultyProfileCreateNestedOneWithoutAuthorshipsInput
  }

  export type PublicationAuthorUncheckedCreateInput = {
    id?: string
    publicationId: string
    facultyProfileId: string
    authorPosition?: number
    isCorresponding?: boolean
  }

  export type PublicationAuthorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorPosition?: IntFieldUpdateOperationsInput | number
    isCorresponding?: BoolFieldUpdateOperationsInput | boolean
    publication?: PublicationUpdateOneRequiredWithoutAuthorsNestedInput
    facultyProfile?: FacultyProfileUpdateOneRequiredWithoutAuthorshipsNestedInput
  }

  export type PublicationAuthorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicationId?: StringFieldUpdateOperationsInput | string
    facultyProfileId?: StringFieldUpdateOperationsInput | string
    authorPosition?: IntFieldUpdateOperationsInput | number
    isCorresponding?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PublicationAuthorCreateManyInput = {
    id?: string
    publicationId: string
    facultyProfileId: string
    authorPosition?: number
    isCorresponding?: boolean
  }

  export type PublicationAuthorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorPosition?: IntFieldUpdateOperationsInput | number
    isCorresponding?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PublicationAuthorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicationId?: StringFieldUpdateOperationsInput | string
    facultyProfileId?: StringFieldUpdateOperationsInput | string
    authorPosition?: IntFieldUpdateOperationsInput | number
    isCorresponding?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NaacCriterionCreateInput = {
    id?: string
    code: string
    category: string
    description: string
    mappings?: NaacPublicationMappingCreateNestedManyWithoutCriterionInput
  }

  export type NaacCriterionUncheckedCreateInput = {
    id?: string
    code: string
    category: string
    description: string
    mappings?: NaacPublicationMappingUncheckedCreateNestedManyWithoutCriterionInput
  }

  export type NaacCriterionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mappings?: NaacPublicationMappingUpdateManyWithoutCriterionNestedInput
  }

  export type NaacCriterionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mappings?: NaacPublicationMappingUncheckedUpdateManyWithoutCriterionNestedInput
  }

  export type NaacCriterionCreateManyInput = {
    id?: string
    code: string
    category: string
    description: string
  }

  export type NaacCriterionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type NaacCriterionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type NaacPublicationMappingCreateInput = {
    id?: string
    academicYear: string
    verifiedByIQAC?: boolean
    publication: PublicationCreateNestedOneWithoutNaacMappingsInput
    criterion: NaacCriterionCreateNestedOneWithoutMappingsInput
  }

  export type NaacPublicationMappingUncheckedCreateInput = {
    id?: string
    publicationId: string
    criterionId: string
    academicYear: string
    verifiedByIQAC?: boolean
  }

  export type NaacPublicationMappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    verifiedByIQAC?: BoolFieldUpdateOperationsInput | boolean
    publication?: PublicationUpdateOneRequiredWithoutNaacMappingsNestedInput
    criterion?: NaacCriterionUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type NaacPublicationMappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicationId?: StringFieldUpdateOperationsInput | string
    criterionId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    verifiedByIQAC?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NaacPublicationMappingCreateManyInput = {
    id?: string
    publicationId: string
    criterionId: string
    academicYear: string
    verifiedByIQAC?: boolean
  }

  export type NaacPublicationMappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    verifiedByIQAC?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NaacPublicationMappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicationId?: StringFieldUpdateOperationsInput | string
    criterionId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    verifiedByIQAC?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NaacReportCreateInput = {
    id?: string
    academicYear: string
    reportType: string
    fileUrl?: string | null
    generatedAt?: Date | string
    university: UniversityCreateNestedOneWithoutNaacReportsInput
  }

  export type NaacReportUncheckedCreateInput = {
    id?: string
    universityId: string
    academicYear: string
    reportType: string
    fileUrl?: string | null
    generatedAt?: Date | string
  }

  export type NaacReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneRequiredWithoutNaacReportsNestedInput
  }

  export type NaacReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NaacReportCreateManyInput = {
    id?: string
    universityId: string
    academicYear: string
    reportType: string
    fileUrl?: string | null
    generatedAt?: Date | string
  }

  export type NaacReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NaacReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BackgroundTaskCreateInput = {
    id?: string
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BackgroundTaskUncheckedCreateInput = {
    id?: string
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BackgroundTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BackgroundTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BackgroundTaskCreateManyInput = {
    id?: string
    taskType: $Enums.TaskType
    status?: $Enums.TaskStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BackgroundTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BackgroundTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    payload?: NullableJsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    userId?: string | null
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type FacultyInviteListRelationFilter = {
    every?: FacultyInviteWhereInput
    some?: FacultyInviteWhereInput
    none?: FacultyInviteWhereInput
  }

  export type NaacReportListRelationFilter = {
    every?: NaacReportWhereInput
    some?: NaacReportWhereInput
    none?: NaacReportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultyInviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NaacReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UniversityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    website?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UniversityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    website?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UniversityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    website?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UniversityScalarRelationFilter = {
    is?: UniversityWhereInput
    isNot?: UniversityWhereInput
  }

  export type FacultyProfileListRelationFilter = {
    every?: FacultyProfileWhereInput
    some?: FacultyProfileWhereInput
    none?: FacultyProfileWhereInput
  }

  export type FacultyProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentUniversityIdNameCompoundUniqueInput = {
    universityId: string
    name: string
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    universityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    universityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    universityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UniversityNullableScalarRelationFilter = {
    is?: UniversityWhereInput | null
    isNot?: UniversityWhereInput | null
  }

  export type FacultyProfileNullableScalarRelationFilter = {
    is?: FacultyProfileWhereInput | null
    isNot?: FacultyProfileWhereInput | null
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    universityId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    universityId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    universityId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumInviteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusFilter<$PrismaModel> | $Enums.InviteStatus
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type FacultyInviteCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    universityId?: SortOrder
    departmentId?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FacultyInviteMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    universityId?: SortOrder
    departmentId?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FacultyInviteMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    universityId?: SortOrder
    departmentId?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumInviteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel> | $Enums.InviteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInviteStatusFilter<$PrismaModel>
    _max?: NestedEnumInviteStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type PublicationAuthorListRelationFilter = {
    every?: PublicationAuthorWhereInput
    some?: PublicationAuthorWhereInput
    none?: PublicationAuthorWhereInput
  }

  export type PublicationAuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultyProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    fullName?: SortOrder
    designation?: SortOrder
    qualification?: SortOrder
    joiningDate?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    openAlexId?: SortOrder
    orcid?: SortOrder
    scopusAuthorId?: SortOrder
    vidwanId?: SortOrder
    googleScholar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacultyProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    fullName?: SortOrder
    designation?: SortOrder
    qualification?: SortOrder
    joiningDate?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    openAlexId?: SortOrder
    orcid?: SortOrder
    scopusAuthorId?: SortOrder
    vidwanId?: SortOrder
    googleScholar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacultyProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    fullName?: SortOrder
    designation?: SortOrder
    qualification?: SortOrder
    joiningDate?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    openAlexId?: SortOrder
    orcid?: SortOrder
    scopusAuthorId?: SortOrder
    vidwanId?: SortOrder
    googleScholar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPublicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationStatus | EnumPublicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationStatusFilter<$PrismaModel> | $Enums.PublicationStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NaacPublicationMappingListRelationFilter = {
    every?: NaacPublicationMappingWhereInput
    some?: NaacPublicationMappingWhereInput
    none?: NaacPublicationMappingWhereInput
  }

  export type NaacPublicationMappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    publicationYear?: SortOrder
    doi?: SortOrder
    openAlexId?: SortOrder
    journalName?: SortOrder
    publisher?: SortOrder
    volume?: SortOrder
    issue?: SortOrder
    pages?: SortOrder
    citationCount?: SortOrder
    isOpenAccess?: SortOrder
    openAccessUrl?: SortOrder
    landingPageUrl?: SortOrder
    abstract?: SortOrder
    status?: SortOrder
    rawMetadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationAvgOrderByAggregateInput = {
    publicationYear?: SortOrder
    citationCount?: SortOrder
  }

  export type PublicationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    publicationYear?: SortOrder
    doi?: SortOrder
    openAlexId?: SortOrder
    journalName?: SortOrder
    publisher?: SortOrder
    volume?: SortOrder
    issue?: SortOrder
    pages?: SortOrder
    citationCount?: SortOrder
    isOpenAccess?: SortOrder
    openAccessUrl?: SortOrder
    landingPageUrl?: SortOrder
    abstract?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    publicationYear?: SortOrder
    doi?: SortOrder
    openAlexId?: SortOrder
    journalName?: SortOrder
    publisher?: SortOrder
    volume?: SortOrder
    issue?: SortOrder
    pages?: SortOrder
    citationCount?: SortOrder
    isOpenAccess?: SortOrder
    openAccessUrl?: SortOrder
    landingPageUrl?: SortOrder
    abstract?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationSumOrderByAggregateInput = {
    publicationYear?: SortOrder
    citationCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPublicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationStatus | EnumPublicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublicationStatusFilter<$PrismaModel>
    _max?: NestedEnumPublicationStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type PublicationScalarRelationFilter = {
    is?: PublicationWhereInput
    isNot?: PublicationWhereInput
  }

  export type FacultyProfileScalarRelationFilter = {
    is?: FacultyProfileWhereInput
    isNot?: FacultyProfileWhereInput
  }

  export type PublicationAuthorPublicationIdFacultyProfileIdCompoundUniqueInput = {
    publicationId: string
    facultyProfileId: string
  }

  export type PublicationAuthorCountOrderByAggregateInput = {
    id?: SortOrder
    publicationId?: SortOrder
    facultyProfileId?: SortOrder
    authorPosition?: SortOrder
    isCorresponding?: SortOrder
  }

  export type PublicationAuthorAvgOrderByAggregateInput = {
    authorPosition?: SortOrder
  }

  export type PublicationAuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    publicationId?: SortOrder
    facultyProfileId?: SortOrder
    authorPosition?: SortOrder
    isCorresponding?: SortOrder
  }

  export type PublicationAuthorMinOrderByAggregateInput = {
    id?: SortOrder
    publicationId?: SortOrder
    facultyProfileId?: SortOrder
    authorPosition?: SortOrder
    isCorresponding?: SortOrder
  }

  export type PublicationAuthorSumOrderByAggregateInput = {
    authorPosition?: SortOrder
  }

  export type NaacCriterionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type NaacCriterionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type NaacCriterionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type NaacCriterionScalarRelationFilter = {
    is?: NaacCriterionWhereInput
    isNot?: NaacCriterionWhereInput
  }

  export type NaacPublicationMappingPublicationIdCriterionIdAcademicYearCompoundUniqueInput = {
    publicationId: string
    criterionId: string
    academicYear: string
  }

  export type NaacPublicationMappingCountOrderByAggregateInput = {
    id?: SortOrder
    publicationId?: SortOrder
    criterionId?: SortOrder
    academicYear?: SortOrder
    verifiedByIQAC?: SortOrder
  }

  export type NaacPublicationMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    publicationId?: SortOrder
    criterionId?: SortOrder
    academicYear?: SortOrder
    verifiedByIQAC?: SortOrder
  }

  export type NaacPublicationMappingMinOrderByAggregateInput = {
    id?: SortOrder
    publicationId?: SortOrder
    criterionId?: SortOrder
    academicYear?: SortOrder
    verifiedByIQAC?: SortOrder
  }

  export type NaacReportCountOrderByAggregateInput = {
    id?: SortOrder
    universityId?: SortOrder
    academicYear?: SortOrder
    reportType?: SortOrder
    fileUrl?: SortOrder
    generatedAt?: SortOrder
  }

  export type NaacReportMaxOrderByAggregateInput = {
    id?: SortOrder
    universityId?: SortOrder
    academicYear?: SortOrder
    reportType?: SortOrder
    fileUrl?: SortOrder
    generatedAt?: SortOrder
  }

  export type NaacReportMinOrderByAggregateInput = {
    id?: SortOrder
    universityId?: SortOrder
    academicYear?: SortOrder
    reportType?: SortOrder
    fileUrl?: SortOrder
    generatedAt?: SortOrder
  }

  export type EnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type BackgroundTaskCountOrderByAggregateInput = {
    id?: SortOrder
    taskType?: SortOrder
    status?: SortOrder
    payload?: SortOrder
    result?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BackgroundTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    taskType?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BackgroundTaskMinOrderByAggregateInput = {
    id?: SortOrder
    taskType?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type DepartmentCreateNestedManyWithoutUniversityInput = {
    create?: XOR<DepartmentCreateWithoutUniversityInput, DepartmentUncheckedCreateWithoutUniversityInput> | DepartmentCreateWithoutUniversityInput[] | DepartmentUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutUniversityInput | DepartmentCreateOrConnectWithoutUniversityInput[]
    createMany?: DepartmentCreateManyUniversityInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutUniversityInput = {
    create?: XOR<UserCreateWithoutUniversityInput, UserUncheckedCreateWithoutUniversityInput> | UserCreateWithoutUniversityInput[] | UserUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUniversityInput | UserCreateOrConnectWithoutUniversityInput[]
    createMany?: UserCreateManyUniversityInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FacultyInviteCreateNestedManyWithoutUniversityInput = {
    create?: XOR<FacultyInviteCreateWithoutUniversityInput, FacultyInviteUncheckedCreateWithoutUniversityInput> | FacultyInviteCreateWithoutUniversityInput[] | FacultyInviteUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: FacultyInviteCreateOrConnectWithoutUniversityInput | FacultyInviteCreateOrConnectWithoutUniversityInput[]
    createMany?: FacultyInviteCreateManyUniversityInputEnvelope
    connect?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
  }

  export type NaacReportCreateNestedManyWithoutUniversityInput = {
    create?: XOR<NaacReportCreateWithoutUniversityInput, NaacReportUncheckedCreateWithoutUniversityInput> | NaacReportCreateWithoutUniversityInput[] | NaacReportUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: NaacReportCreateOrConnectWithoutUniversityInput | NaacReportCreateOrConnectWithoutUniversityInput[]
    createMany?: NaacReportCreateManyUniversityInputEnvelope
    connect?: NaacReportWhereUniqueInput | NaacReportWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutUniversityInput = {
    create?: XOR<DepartmentCreateWithoutUniversityInput, DepartmentUncheckedCreateWithoutUniversityInput> | DepartmentCreateWithoutUniversityInput[] | DepartmentUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutUniversityInput | DepartmentCreateOrConnectWithoutUniversityInput[]
    createMany?: DepartmentCreateManyUniversityInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUniversityInput = {
    create?: XOR<UserCreateWithoutUniversityInput, UserUncheckedCreateWithoutUniversityInput> | UserCreateWithoutUniversityInput[] | UserUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUniversityInput | UserCreateOrConnectWithoutUniversityInput[]
    createMany?: UserCreateManyUniversityInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FacultyInviteUncheckedCreateNestedManyWithoutUniversityInput = {
    create?: XOR<FacultyInviteCreateWithoutUniversityInput, FacultyInviteUncheckedCreateWithoutUniversityInput> | FacultyInviteCreateWithoutUniversityInput[] | FacultyInviteUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: FacultyInviteCreateOrConnectWithoutUniversityInput | FacultyInviteCreateOrConnectWithoutUniversityInput[]
    createMany?: FacultyInviteCreateManyUniversityInputEnvelope
    connect?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
  }

  export type NaacReportUncheckedCreateNestedManyWithoutUniversityInput = {
    create?: XOR<NaacReportCreateWithoutUniversityInput, NaacReportUncheckedCreateWithoutUniversityInput> | NaacReportCreateWithoutUniversityInput[] | NaacReportUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: NaacReportCreateOrConnectWithoutUniversityInput | NaacReportCreateOrConnectWithoutUniversityInput[]
    createMany?: NaacReportCreateManyUniversityInputEnvelope
    connect?: NaacReportWhereUniqueInput | NaacReportWhereUniqueInput[]
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

  export type DepartmentUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<DepartmentCreateWithoutUniversityInput, DepartmentUncheckedCreateWithoutUniversityInput> | DepartmentCreateWithoutUniversityInput[] | DepartmentUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutUniversityInput | DepartmentCreateOrConnectWithoutUniversityInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutUniversityInput | DepartmentUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: DepartmentCreateManyUniversityInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutUniversityInput | DepartmentUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutUniversityInput | DepartmentUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type UserUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<UserCreateWithoutUniversityInput, UserUncheckedCreateWithoutUniversityInput> | UserCreateWithoutUniversityInput[] | UserUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUniversityInput | UserCreateOrConnectWithoutUniversityInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUniversityInput | UserUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: UserCreateManyUniversityInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUniversityInput | UserUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUniversityInput | UserUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FacultyInviteUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<FacultyInviteCreateWithoutUniversityInput, FacultyInviteUncheckedCreateWithoutUniversityInput> | FacultyInviteCreateWithoutUniversityInput[] | FacultyInviteUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: FacultyInviteCreateOrConnectWithoutUniversityInput | FacultyInviteCreateOrConnectWithoutUniversityInput[]
    upsert?: FacultyInviteUpsertWithWhereUniqueWithoutUniversityInput | FacultyInviteUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: FacultyInviteCreateManyUniversityInputEnvelope
    set?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    disconnect?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    delete?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    connect?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    update?: FacultyInviteUpdateWithWhereUniqueWithoutUniversityInput | FacultyInviteUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: FacultyInviteUpdateManyWithWhereWithoutUniversityInput | FacultyInviteUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: FacultyInviteScalarWhereInput | FacultyInviteScalarWhereInput[]
  }

  export type NaacReportUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<NaacReportCreateWithoutUniversityInput, NaacReportUncheckedCreateWithoutUniversityInput> | NaacReportCreateWithoutUniversityInput[] | NaacReportUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: NaacReportCreateOrConnectWithoutUniversityInput | NaacReportCreateOrConnectWithoutUniversityInput[]
    upsert?: NaacReportUpsertWithWhereUniqueWithoutUniversityInput | NaacReportUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: NaacReportCreateManyUniversityInputEnvelope
    set?: NaacReportWhereUniqueInput | NaacReportWhereUniqueInput[]
    disconnect?: NaacReportWhereUniqueInput | NaacReportWhereUniqueInput[]
    delete?: NaacReportWhereUniqueInput | NaacReportWhereUniqueInput[]
    connect?: NaacReportWhereUniqueInput | NaacReportWhereUniqueInput[]
    update?: NaacReportUpdateWithWhereUniqueWithoutUniversityInput | NaacReportUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: NaacReportUpdateManyWithWhereWithoutUniversityInput | NaacReportUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: NaacReportScalarWhereInput | NaacReportScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<DepartmentCreateWithoutUniversityInput, DepartmentUncheckedCreateWithoutUniversityInput> | DepartmentCreateWithoutUniversityInput[] | DepartmentUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutUniversityInput | DepartmentCreateOrConnectWithoutUniversityInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutUniversityInput | DepartmentUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: DepartmentCreateManyUniversityInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutUniversityInput | DepartmentUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutUniversityInput | DepartmentUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<UserCreateWithoutUniversityInput, UserUncheckedCreateWithoutUniversityInput> | UserCreateWithoutUniversityInput[] | UserUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUniversityInput | UserCreateOrConnectWithoutUniversityInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUniversityInput | UserUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: UserCreateManyUniversityInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUniversityInput | UserUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUniversityInput | UserUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FacultyInviteUncheckedUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<FacultyInviteCreateWithoutUniversityInput, FacultyInviteUncheckedCreateWithoutUniversityInput> | FacultyInviteCreateWithoutUniversityInput[] | FacultyInviteUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: FacultyInviteCreateOrConnectWithoutUniversityInput | FacultyInviteCreateOrConnectWithoutUniversityInput[]
    upsert?: FacultyInviteUpsertWithWhereUniqueWithoutUniversityInput | FacultyInviteUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: FacultyInviteCreateManyUniversityInputEnvelope
    set?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    disconnect?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    delete?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    connect?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    update?: FacultyInviteUpdateWithWhereUniqueWithoutUniversityInput | FacultyInviteUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: FacultyInviteUpdateManyWithWhereWithoutUniversityInput | FacultyInviteUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: FacultyInviteScalarWhereInput | FacultyInviteScalarWhereInput[]
  }

  export type NaacReportUncheckedUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<NaacReportCreateWithoutUniversityInput, NaacReportUncheckedCreateWithoutUniversityInput> | NaacReportCreateWithoutUniversityInput[] | NaacReportUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: NaacReportCreateOrConnectWithoutUniversityInput | NaacReportCreateOrConnectWithoutUniversityInput[]
    upsert?: NaacReportUpsertWithWhereUniqueWithoutUniversityInput | NaacReportUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: NaacReportCreateManyUniversityInputEnvelope
    set?: NaacReportWhereUniqueInput | NaacReportWhereUniqueInput[]
    disconnect?: NaacReportWhereUniqueInput | NaacReportWhereUniqueInput[]
    delete?: NaacReportWhereUniqueInput | NaacReportWhereUniqueInput[]
    connect?: NaacReportWhereUniqueInput | NaacReportWhereUniqueInput[]
    update?: NaacReportUpdateWithWhereUniqueWithoutUniversityInput | NaacReportUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: NaacReportUpdateManyWithWhereWithoutUniversityInput | NaacReportUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: NaacReportScalarWhereInput | NaacReportScalarWhereInput[]
  }

  export type UniversityCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<UniversityCreateWithoutDepartmentsInput, UniversityUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutDepartmentsInput
    connect?: UniversityWhereUniqueInput
  }

  export type FacultyProfileCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<FacultyProfileCreateWithoutDepartmentInput, FacultyProfileUncheckedCreateWithoutDepartmentInput> | FacultyProfileCreateWithoutDepartmentInput[] | FacultyProfileUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyProfileCreateOrConnectWithoutDepartmentInput | FacultyProfileCreateOrConnectWithoutDepartmentInput[]
    createMany?: FacultyProfileCreateManyDepartmentInputEnvelope
    connect?: FacultyProfileWhereUniqueInput | FacultyProfileWhereUniqueInput[]
  }

  export type FacultyInviteCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<FacultyInviteCreateWithoutDepartmentInput, FacultyInviteUncheckedCreateWithoutDepartmentInput> | FacultyInviteCreateWithoutDepartmentInput[] | FacultyInviteUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyInviteCreateOrConnectWithoutDepartmentInput | FacultyInviteCreateOrConnectWithoutDepartmentInput[]
    createMany?: FacultyInviteCreateManyDepartmentInputEnvelope
    connect?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
  }

  export type FacultyProfileUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<FacultyProfileCreateWithoutDepartmentInput, FacultyProfileUncheckedCreateWithoutDepartmentInput> | FacultyProfileCreateWithoutDepartmentInput[] | FacultyProfileUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyProfileCreateOrConnectWithoutDepartmentInput | FacultyProfileCreateOrConnectWithoutDepartmentInput[]
    createMany?: FacultyProfileCreateManyDepartmentInputEnvelope
    connect?: FacultyProfileWhereUniqueInput | FacultyProfileWhereUniqueInput[]
  }

  export type FacultyInviteUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<FacultyInviteCreateWithoutDepartmentInput, FacultyInviteUncheckedCreateWithoutDepartmentInput> | FacultyInviteCreateWithoutDepartmentInput[] | FacultyInviteUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyInviteCreateOrConnectWithoutDepartmentInput | FacultyInviteCreateOrConnectWithoutDepartmentInput[]
    createMany?: FacultyInviteCreateManyDepartmentInputEnvelope
    connect?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
  }

  export type UniversityUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<UniversityCreateWithoutDepartmentsInput, UniversityUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutDepartmentsInput
    upsert?: UniversityUpsertWithoutDepartmentsInput
    connect?: UniversityWhereUniqueInput
    update?: XOR<XOR<UniversityUpdateToOneWithWhereWithoutDepartmentsInput, UniversityUpdateWithoutDepartmentsInput>, UniversityUncheckedUpdateWithoutDepartmentsInput>
  }

  export type FacultyProfileUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<FacultyProfileCreateWithoutDepartmentInput, FacultyProfileUncheckedCreateWithoutDepartmentInput> | FacultyProfileCreateWithoutDepartmentInput[] | FacultyProfileUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyProfileCreateOrConnectWithoutDepartmentInput | FacultyProfileCreateOrConnectWithoutDepartmentInput[]
    upsert?: FacultyProfileUpsertWithWhereUniqueWithoutDepartmentInput | FacultyProfileUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: FacultyProfileCreateManyDepartmentInputEnvelope
    set?: FacultyProfileWhereUniqueInput | FacultyProfileWhereUniqueInput[]
    disconnect?: FacultyProfileWhereUniqueInput | FacultyProfileWhereUniqueInput[]
    delete?: FacultyProfileWhereUniqueInput | FacultyProfileWhereUniqueInput[]
    connect?: FacultyProfileWhereUniqueInput | FacultyProfileWhereUniqueInput[]
    update?: FacultyProfileUpdateWithWhereUniqueWithoutDepartmentInput | FacultyProfileUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: FacultyProfileUpdateManyWithWhereWithoutDepartmentInput | FacultyProfileUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: FacultyProfileScalarWhereInput | FacultyProfileScalarWhereInput[]
  }

  export type FacultyInviteUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<FacultyInviteCreateWithoutDepartmentInput, FacultyInviteUncheckedCreateWithoutDepartmentInput> | FacultyInviteCreateWithoutDepartmentInput[] | FacultyInviteUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyInviteCreateOrConnectWithoutDepartmentInput | FacultyInviteCreateOrConnectWithoutDepartmentInput[]
    upsert?: FacultyInviteUpsertWithWhereUniqueWithoutDepartmentInput | FacultyInviteUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: FacultyInviteCreateManyDepartmentInputEnvelope
    set?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    disconnect?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    delete?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    connect?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    update?: FacultyInviteUpdateWithWhereUniqueWithoutDepartmentInput | FacultyInviteUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: FacultyInviteUpdateManyWithWhereWithoutDepartmentInput | FacultyInviteUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: FacultyInviteScalarWhereInput | FacultyInviteScalarWhereInput[]
  }

  export type FacultyProfileUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<FacultyProfileCreateWithoutDepartmentInput, FacultyProfileUncheckedCreateWithoutDepartmentInput> | FacultyProfileCreateWithoutDepartmentInput[] | FacultyProfileUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyProfileCreateOrConnectWithoutDepartmentInput | FacultyProfileCreateOrConnectWithoutDepartmentInput[]
    upsert?: FacultyProfileUpsertWithWhereUniqueWithoutDepartmentInput | FacultyProfileUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: FacultyProfileCreateManyDepartmentInputEnvelope
    set?: FacultyProfileWhereUniqueInput | FacultyProfileWhereUniqueInput[]
    disconnect?: FacultyProfileWhereUniqueInput | FacultyProfileWhereUniqueInput[]
    delete?: FacultyProfileWhereUniqueInput | FacultyProfileWhereUniqueInput[]
    connect?: FacultyProfileWhereUniqueInput | FacultyProfileWhereUniqueInput[]
    update?: FacultyProfileUpdateWithWhereUniqueWithoutDepartmentInput | FacultyProfileUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: FacultyProfileUpdateManyWithWhereWithoutDepartmentInput | FacultyProfileUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: FacultyProfileScalarWhereInput | FacultyProfileScalarWhereInput[]
  }

  export type FacultyInviteUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<FacultyInviteCreateWithoutDepartmentInput, FacultyInviteUncheckedCreateWithoutDepartmentInput> | FacultyInviteCreateWithoutDepartmentInput[] | FacultyInviteUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyInviteCreateOrConnectWithoutDepartmentInput | FacultyInviteCreateOrConnectWithoutDepartmentInput[]
    upsert?: FacultyInviteUpsertWithWhereUniqueWithoutDepartmentInput | FacultyInviteUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: FacultyInviteCreateManyDepartmentInputEnvelope
    set?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    disconnect?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    delete?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    connect?: FacultyInviteWhereUniqueInput | FacultyInviteWhereUniqueInput[]
    update?: FacultyInviteUpdateWithWhereUniqueWithoutDepartmentInput | FacultyInviteUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: FacultyInviteUpdateManyWithWhereWithoutDepartmentInput | FacultyInviteUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: FacultyInviteScalarWhereInput | FacultyInviteScalarWhereInput[]
  }

  export type UniversityCreateNestedOneWithoutUsersInput = {
    create?: XOR<UniversityCreateWithoutUsersInput, UniversityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutUsersInput
    connect?: UniversityWhereUniqueInput
  }

  export type FacultyProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<FacultyProfileCreateWithoutUserInput, FacultyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FacultyProfileCreateOrConnectWithoutUserInput
    connect?: FacultyProfileWhereUniqueInput
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type FacultyProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FacultyProfileCreateWithoutUserInput, FacultyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FacultyProfileCreateOrConnectWithoutUserInput
    connect?: FacultyProfileWhereUniqueInput
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UniversityUpdateOneWithoutUsersNestedInput = {
    create?: XOR<UniversityCreateWithoutUsersInput, UniversityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutUsersInput
    upsert?: UniversityUpsertWithoutUsersInput
    disconnect?: UniversityWhereInput | boolean
    delete?: UniversityWhereInput | boolean
    connect?: UniversityWhereUniqueInput
    update?: XOR<XOR<UniversityUpdateToOneWithWhereWithoutUsersInput, UniversityUpdateWithoutUsersInput>, UniversityUncheckedUpdateWithoutUsersInput>
  }

  export type FacultyProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<FacultyProfileCreateWithoutUserInput, FacultyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FacultyProfileCreateOrConnectWithoutUserInput
    upsert?: FacultyProfileUpsertWithoutUserInput
    disconnect?: FacultyProfileWhereInput | boolean
    delete?: FacultyProfileWhereInput | boolean
    connect?: FacultyProfileWhereUniqueInput
    update?: XOR<XOR<FacultyProfileUpdateToOneWithWhereWithoutUserInput, FacultyProfileUpdateWithoutUserInput>, FacultyProfileUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type FacultyProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FacultyProfileCreateWithoutUserInput, FacultyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FacultyProfileCreateOrConnectWithoutUserInput
    upsert?: FacultyProfileUpsertWithoutUserInput
    disconnect?: FacultyProfileWhereInput | boolean
    delete?: FacultyProfileWhereInput | boolean
    connect?: FacultyProfileWhereUniqueInput
    update?: XOR<XOR<FacultyProfileUpdateToOneWithWhereWithoutUserInput, FacultyProfileUpdateWithoutUserInput>, FacultyProfileUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type UniversityCreateNestedOneWithoutInvitesInput = {
    create?: XOR<UniversityCreateWithoutInvitesInput, UniversityUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutInvitesInput
    connect?: UniversityWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutInvitesInput = {
    create?: XOR<DepartmentCreateWithoutInvitesInput, DepartmentUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutInvitesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type EnumInviteStatusFieldUpdateOperationsInput = {
    set?: $Enums.InviteStatus
  }

  export type UniversityUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<UniversityCreateWithoutInvitesInput, UniversityUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutInvitesInput
    upsert?: UniversityUpsertWithoutInvitesInput
    connect?: UniversityWhereUniqueInput
    update?: XOR<XOR<UniversityUpdateToOneWithWhereWithoutInvitesInput, UniversityUpdateWithoutInvitesInput>, UniversityUncheckedUpdateWithoutInvitesInput>
  }

  export type DepartmentUpdateOneWithoutInvitesNestedInput = {
    create?: XOR<DepartmentCreateWithoutInvitesInput, DepartmentUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutInvitesInput
    upsert?: DepartmentUpsertWithoutInvitesInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutInvitesInput, DepartmentUpdateWithoutInvitesInput>, DepartmentUncheckedUpdateWithoutInvitesInput>
  }

  export type UserCreateNestedOneWithoutFacultyProfileInput = {
    create?: XOR<UserCreateWithoutFacultyProfileInput, UserUncheckedCreateWithoutFacultyProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutFacultyProfileInput
    connect?: UserWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutFacultyProfilesInput = {
    create?: XOR<DepartmentCreateWithoutFacultyProfilesInput, DepartmentUncheckedCreateWithoutFacultyProfilesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutFacultyProfilesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type PublicationAuthorCreateNestedManyWithoutFacultyProfileInput = {
    create?: XOR<PublicationAuthorCreateWithoutFacultyProfileInput, PublicationAuthorUncheckedCreateWithoutFacultyProfileInput> | PublicationAuthorCreateWithoutFacultyProfileInput[] | PublicationAuthorUncheckedCreateWithoutFacultyProfileInput[]
    connectOrCreate?: PublicationAuthorCreateOrConnectWithoutFacultyProfileInput | PublicationAuthorCreateOrConnectWithoutFacultyProfileInput[]
    createMany?: PublicationAuthorCreateManyFacultyProfileInputEnvelope
    connect?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
  }

  export type PublicationAuthorUncheckedCreateNestedManyWithoutFacultyProfileInput = {
    create?: XOR<PublicationAuthorCreateWithoutFacultyProfileInput, PublicationAuthorUncheckedCreateWithoutFacultyProfileInput> | PublicationAuthorCreateWithoutFacultyProfileInput[] | PublicationAuthorUncheckedCreateWithoutFacultyProfileInput[]
    connectOrCreate?: PublicationAuthorCreateOrConnectWithoutFacultyProfileInput | PublicationAuthorCreateOrConnectWithoutFacultyProfileInput[]
    createMany?: PublicationAuthorCreateManyFacultyProfileInputEnvelope
    connect?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutFacultyProfileNestedInput = {
    create?: XOR<UserCreateWithoutFacultyProfileInput, UserUncheckedCreateWithoutFacultyProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutFacultyProfileInput
    upsert?: UserUpsertWithoutFacultyProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFacultyProfileInput, UserUpdateWithoutFacultyProfileInput>, UserUncheckedUpdateWithoutFacultyProfileInput>
  }

  export type DepartmentUpdateOneRequiredWithoutFacultyProfilesNestedInput = {
    create?: XOR<DepartmentCreateWithoutFacultyProfilesInput, DepartmentUncheckedCreateWithoutFacultyProfilesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutFacultyProfilesInput
    upsert?: DepartmentUpsertWithoutFacultyProfilesInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutFacultyProfilesInput, DepartmentUpdateWithoutFacultyProfilesInput>, DepartmentUncheckedUpdateWithoutFacultyProfilesInput>
  }

  export type PublicationAuthorUpdateManyWithoutFacultyProfileNestedInput = {
    create?: XOR<PublicationAuthorCreateWithoutFacultyProfileInput, PublicationAuthorUncheckedCreateWithoutFacultyProfileInput> | PublicationAuthorCreateWithoutFacultyProfileInput[] | PublicationAuthorUncheckedCreateWithoutFacultyProfileInput[]
    connectOrCreate?: PublicationAuthorCreateOrConnectWithoutFacultyProfileInput | PublicationAuthorCreateOrConnectWithoutFacultyProfileInput[]
    upsert?: PublicationAuthorUpsertWithWhereUniqueWithoutFacultyProfileInput | PublicationAuthorUpsertWithWhereUniqueWithoutFacultyProfileInput[]
    createMany?: PublicationAuthorCreateManyFacultyProfileInputEnvelope
    set?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    disconnect?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    delete?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    connect?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    update?: PublicationAuthorUpdateWithWhereUniqueWithoutFacultyProfileInput | PublicationAuthorUpdateWithWhereUniqueWithoutFacultyProfileInput[]
    updateMany?: PublicationAuthorUpdateManyWithWhereWithoutFacultyProfileInput | PublicationAuthorUpdateManyWithWhereWithoutFacultyProfileInput[]
    deleteMany?: PublicationAuthorScalarWhereInput | PublicationAuthorScalarWhereInput[]
  }

  export type PublicationAuthorUncheckedUpdateManyWithoutFacultyProfileNestedInput = {
    create?: XOR<PublicationAuthorCreateWithoutFacultyProfileInput, PublicationAuthorUncheckedCreateWithoutFacultyProfileInput> | PublicationAuthorCreateWithoutFacultyProfileInput[] | PublicationAuthorUncheckedCreateWithoutFacultyProfileInput[]
    connectOrCreate?: PublicationAuthorCreateOrConnectWithoutFacultyProfileInput | PublicationAuthorCreateOrConnectWithoutFacultyProfileInput[]
    upsert?: PublicationAuthorUpsertWithWhereUniqueWithoutFacultyProfileInput | PublicationAuthorUpsertWithWhereUniqueWithoutFacultyProfileInput[]
    createMany?: PublicationAuthorCreateManyFacultyProfileInputEnvelope
    set?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    disconnect?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    delete?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    connect?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    update?: PublicationAuthorUpdateWithWhereUniqueWithoutFacultyProfileInput | PublicationAuthorUpdateWithWhereUniqueWithoutFacultyProfileInput[]
    updateMany?: PublicationAuthorUpdateManyWithWhereWithoutFacultyProfileInput | PublicationAuthorUpdateManyWithWhereWithoutFacultyProfileInput[]
    deleteMany?: PublicationAuthorScalarWhereInput | PublicationAuthorScalarWhereInput[]
  }

  export type PublicationAuthorCreateNestedManyWithoutPublicationInput = {
    create?: XOR<PublicationAuthorCreateWithoutPublicationInput, PublicationAuthorUncheckedCreateWithoutPublicationInput> | PublicationAuthorCreateWithoutPublicationInput[] | PublicationAuthorUncheckedCreateWithoutPublicationInput[]
    connectOrCreate?: PublicationAuthorCreateOrConnectWithoutPublicationInput | PublicationAuthorCreateOrConnectWithoutPublicationInput[]
    createMany?: PublicationAuthorCreateManyPublicationInputEnvelope
    connect?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
  }

  export type NaacPublicationMappingCreateNestedManyWithoutPublicationInput = {
    create?: XOR<NaacPublicationMappingCreateWithoutPublicationInput, NaacPublicationMappingUncheckedCreateWithoutPublicationInput> | NaacPublicationMappingCreateWithoutPublicationInput[] | NaacPublicationMappingUncheckedCreateWithoutPublicationInput[]
    connectOrCreate?: NaacPublicationMappingCreateOrConnectWithoutPublicationInput | NaacPublicationMappingCreateOrConnectWithoutPublicationInput[]
    createMany?: NaacPublicationMappingCreateManyPublicationInputEnvelope
    connect?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
  }

  export type PublicationAuthorUncheckedCreateNestedManyWithoutPublicationInput = {
    create?: XOR<PublicationAuthorCreateWithoutPublicationInput, PublicationAuthorUncheckedCreateWithoutPublicationInput> | PublicationAuthorCreateWithoutPublicationInput[] | PublicationAuthorUncheckedCreateWithoutPublicationInput[]
    connectOrCreate?: PublicationAuthorCreateOrConnectWithoutPublicationInput | PublicationAuthorCreateOrConnectWithoutPublicationInput[]
    createMany?: PublicationAuthorCreateManyPublicationInputEnvelope
    connect?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
  }

  export type NaacPublicationMappingUncheckedCreateNestedManyWithoutPublicationInput = {
    create?: XOR<NaacPublicationMappingCreateWithoutPublicationInput, NaacPublicationMappingUncheckedCreateWithoutPublicationInput> | NaacPublicationMappingCreateWithoutPublicationInput[] | NaacPublicationMappingUncheckedCreateWithoutPublicationInput[]
    connectOrCreate?: NaacPublicationMappingCreateOrConnectWithoutPublicationInput | NaacPublicationMappingCreateOrConnectWithoutPublicationInput[]
    createMany?: NaacPublicationMappingCreateManyPublicationInputEnvelope
    connect?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPublicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.PublicationStatus
  }

  export type PublicationAuthorUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<PublicationAuthorCreateWithoutPublicationInput, PublicationAuthorUncheckedCreateWithoutPublicationInput> | PublicationAuthorCreateWithoutPublicationInput[] | PublicationAuthorUncheckedCreateWithoutPublicationInput[]
    connectOrCreate?: PublicationAuthorCreateOrConnectWithoutPublicationInput | PublicationAuthorCreateOrConnectWithoutPublicationInput[]
    upsert?: PublicationAuthorUpsertWithWhereUniqueWithoutPublicationInput | PublicationAuthorUpsertWithWhereUniqueWithoutPublicationInput[]
    createMany?: PublicationAuthorCreateManyPublicationInputEnvelope
    set?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    disconnect?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    delete?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    connect?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    update?: PublicationAuthorUpdateWithWhereUniqueWithoutPublicationInput | PublicationAuthorUpdateWithWhereUniqueWithoutPublicationInput[]
    updateMany?: PublicationAuthorUpdateManyWithWhereWithoutPublicationInput | PublicationAuthorUpdateManyWithWhereWithoutPublicationInput[]
    deleteMany?: PublicationAuthorScalarWhereInput | PublicationAuthorScalarWhereInput[]
  }

  export type NaacPublicationMappingUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<NaacPublicationMappingCreateWithoutPublicationInput, NaacPublicationMappingUncheckedCreateWithoutPublicationInput> | NaacPublicationMappingCreateWithoutPublicationInput[] | NaacPublicationMappingUncheckedCreateWithoutPublicationInput[]
    connectOrCreate?: NaacPublicationMappingCreateOrConnectWithoutPublicationInput | NaacPublicationMappingCreateOrConnectWithoutPublicationInput[]
    upsert?: NaacPublicationMappingUpsertWithWhereUniqueWithoutPublicationInput | NaacPublicationMappingUpsertWithWhereUniqueWithoutPublicationInput[]
    createMany?: NaacPublicationMappingCreateManyPublicationInputEnvelope
    set?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    disconnect?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    delete?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    connect?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    update?: NaacPublicationMappingUpdateWithWhereUniqueWithoutPublicationInput | NaacPublicationMappingUpdateWithWhereUniqueWithoutPublicationInput[]
    updateMany?: NaacPublicationMappingUpdateManyWithWhereWithoutPublicationInput | NaacPublicationMappingUpdateManyWithWhereWithoutPublicationInput[]
    deleteMany?: NaacPublicationMappingScalarWhereInput | NaacPublicationMappingScalarWhereInput[]
  }

  export type PublicationAuthorUncheckedUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<PublicationAuthorCreateWithoutPublicationInput, PublicationAuthorUncheckedCreateWithoutPublicationInput> | PublicationAuthorCreateWithoutPublicationInput[] | PublicationAuthorUncheckedCreateWithoutPublicationInput[]
    connectOrCreate?: PublicationAuthorCreateOrConnectWithoutPublicationInput | PublicationAuthorCreateOrConnectWithoutPublicationInput[]
    upsert?: PublicationAuthorUpsertWithWhereUniqueWithoutPublicationInput | PublicationAuthorUpsertWithWhereUniqueWithoutPublicationInput[]
    createMany?: PublicationAuthorCreateManyPublicationInputEnvelope
    set?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    disconnect?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    delete?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    connect?: PublicationAuthorWhereUniqueInput | PublicationAuthorWhereUniqueInput[]
    update?: PublicationAuthorUpdateWithWhereUniqueWithoutPublicationInput | PublicationAuthorUpdateWithWhereUniqueWithoutPublicationInput[]
    updateMany?: PublicationAuthorUpdateManyWithWhereWithoutPublicationInput | PublicationAuthorUpdateManyWithWhereWithoutPublicationInput[]
    deleteMany?: PublicationAuthorScalarWhereInput | PublicationAuthorScalarWhereInput[]
  }

  export type NaacPublicationMappingUncheckedUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<NaacPublicationMappingCreateWithoutPublicationInput, NaacPublicationMappingUncheckedCreateWithoutPublicationInput> | NaacPublicationMappingCreateWithoutPublicationInput[] | NaacPublicationMappingUncheckedCreateWithoutPublicationInput[]
    connectOrCreate?: NaacPublicationMappingCreateOrConnectWithoutPublicationInput | NaacPublicationMappingCreateOrConnectWithoutPublicationInput[]
    upsert?: NaacPublicationMappingUpsertWithWhereUniqueWithoutPublicationInput | NaacPublicationMappingUpsertWithWhereUniqueWithoutPublicationInput[]
    createMany?: NaacPublicationMappingCreateManyPublicationInputEnvelope
    set?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    disconnect?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    delete?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    connect?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    update?: NaacPublicationMappingUpdateWithWhereUniqueWithoutPublicationInput | NaacPublicationMappingUpdateWithWhereUniqueWithoutPublicationInput[]
    updateMany?: NaacPublicationMappingUpdateManyWithWhereWithoutPublicationInput | NaacPublicationMappingUpdateManyWithWhereWithoutPublicationInput[]
    deleteMany?: NaacPublicationMappingScalarWhereInput | NaacPublicationMappingScalarWhereInput[]
  }

  export type PublicationCreateNestedOneWithoutAuthorsInput = {
    create?: XOR<PublicationCreateWithoutAuthorsInput, PublicationUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: PublicationCreateOrConnectWithoutAuthorsInput
    connect?: PublicationWhereUniqueInput
  }

  export type FacultyProfileCreateNestedOneWithoutAuthorshipsInput = {
    create?: XOR<FacultyProfileCreateWithoutAuthorshipsInput, FacultyProfileUncheckedCreateWithoutAuthorshipsInput>
    connectOrCreate?: FacultyProfileCreateOrConnectWithoutAuthorshipsInput
    connect?: FacultyProfileWhereUniqueInput
  }

  export type PublicationUpdateOneRequiredWithoutAuthorsNestedInput = {
    create?: XOR<PublicationCreateWithoutAuthorsInput, PublicationUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: PublicationCreateOrConnectWithoutAuthorsInput
    upsert?: PublicationUpsertWithoutAuthorsInput
    connect?: PublicationWhereUniqueInput
    update?: XOR<XOR<PublicationUpdateToOneWithWhereWithoutAuthorsInput, PublicationUpdateWithoutAuthorsInput>, PublicationUncheckedUpdateWithoutAuthorsInput>
  }

  export type FacultyProfileUpdateOneRequiredWithoutAuthorshipsNestedInput = {
    create?: XOR<FacultyProfileCreateWithoutAuthorshipsInput, FacultyProfileUncheckedCreateWithoutAuthorshipsInput>
    connectOrCreate?: FacultyProfileCreateOrConnectWithoutAuthorshipsInput
    upsert?: FacultyProfileUpsertWithoutAuthorshipsInput
    connect?: FacultyProfileWhereUniqueInput
    update?: XOR<XOR<FacultyProfileUpdateToOneWithWhereWithoutAuthorshipsInput, FacultyProfileUpdateWithoutAuthorshipsInput>, FacultyProfileUncheckedUpdateWithoutAuthorshipsInput>
  }

  export type NaacPublicationMappingCreateNestedManyWithoutCriterionInput = {
    create?: XOR<NaacPublicationMappingCreateWithoutCriterionInput, NaacPublicationMappingUncheckedCreateWithoutCriterionInput> | NaacPublicationMappingCreateWithoutCriterionInput[] | NaacPublicationMappingUncheckedCreateWithoutCriterionInput[]
    connectOrCreate?: NaacPublicationMappingCreateOrConnectWithoutCriterionInput | NaacPublicationMappingCreateOrConnectWithoutCriterionInput[]
    createMany?: NaacPublicationMappingCreateManyCriterionInputEnvelope
    connect?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
  }

  export type NaacPublicationMappingUncheckedCreateNestedManyWithoutCriterionInput = {
    create?: XOR<NaacPublicationMappingCreateWithoutCriterionInput, NaacPublicationMappingUncheckedCreateWithoutCriterionInput> | NaacPublicationMappingCreateWithoutCriterionInput[] | NaacPublicationMappingUncheckedCreateWithoutCriterionInput[]
    connectOrCreate?: NaacPublicationMappingCreateOrConnectWithoutCriterionInput | NaacPublicationMappingCreateOrConnectWithoutCriterionInput[]
    createMany?: NaacPublicationMappingCreateManyCriterionInputEnvelope
    connect?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
  }

  export type NaacPublicationMappingUpdateManyWithoutCriterionNestedInput = {
    create?: XOR<NaacPublicationMappingCreateWithoutCriterionInput, NaacPublicationMappingUncheckedCreateWithoutCriterionInput> | NaacPublicationMappingCreateWithoutCriterionInput[] | NaacPublicationMappingUncheckedCreateWithoutCriterionInput[]
    connectOrCreate?: NaacPublicationMappingCreateOrConnectWithoutCriterionInput | NaacPublicationMappingCreateOrConnectWithoutCriterionInput[]
    upsert?: NaacPublicationMappingUpsertWithWhereUniqueWithoutCriterionInput | NaacPublicationMappingUpsertWithWhereUniqueWithoutCriterionInput[]
    createMany?: NaacPublicationMappingCreateManyCriterionInputEnvelope
    set?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    disconnect?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    delete?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    connect?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    update?: NaacPublicationMappingUpdateWithWhereUniqueWithoutCriterionInput | NaacPublicationMappingUpdateWithWhereUniqueWithoutCriterionInput[]
    updateMany?: NaacPublicationMappingUpdateManyWithWhereWithoutCriterionInput | NaacPublicationMappingUpdateManyWithWhereWithoutCriterionInput[]
    deleteMany?: NaacPublicationMappingScalarWhereInput | NaacPublicationMappingScalarWhereInput[]
  }

  export type NaacPublicationMappingUncheckedUpdateManyWithoutCriterionNestedInput = {
    create?: XOR<NaacPublicationMappingCreateWithoutCriterionInput, NaacPublicationMappingUncheckedCreateWithoutCriterionInput> | NaacPublicationMappingCreateWithoutCriterionInput[] | NaacPublicationMappingUncheckedCreateWithoutCriterionInput[]
    connectOrCreate?: NaacPublicationMappingCreateOrConnectWithoutCriterionInput | NaacPublicationMappingCreateOrConnectWithoutCriterionInput[]
    upsert?: NaacPublicationMappingUpsertWithWhereUniqueWithoutCriterionInput | NaacPublicationMappingUpsertWithWhereUniqueWithoutCriterionInput[]
    createMany?: NaacPublicationMappingCreateManyCriterionInputEnvelope
    set?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    disconnect?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    delete?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    connect?: NaacPublicationMappingWhereUniqueInput | NaacPublicationMappingWhereUniqueInput[]
    update?: NaacPublicationMappingUpdateWithWhereUniqueWithoutCriterionInput | NaacPublicationMappingUpdateWithWhereUniqueWithoutCriterionInput[]
    updateMany?: NaacPublicationMappingUpdateManyWithWhereWithoutCriterionInput | NaacPublicationMappingUpdateManyWithWhereWithoutCriterionInput[]
    deleteMany?: NaacPublicationMappingScalarWhereInput | NaacPublicationMappingScalarWhereInput[]
  }

  export type PublicationCreateNestedOneWithoutNaacMappingsInput = {
    create?: XOR<PublicationCreateWithoutNaacMappingsInput, PublicationUncheckedCreateWithoutNaacMappingsInput>
    connectOrCreate?: PublicationCreateOrConnectWithoutNaacMappingsInput
    connect?: PublicationWhereUniqueInput
  }

  export type NaacCriterionCreateNestedOneWithoutMappingsInput = {
    create?: XOR<NaacCriterionCreateWithoutMappingsInput, NaacCriterionUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: NaacCriterionCreateOrConnectWithoutMappingsInput
    connect?: NaacCriterionWhereUniqueInput
  }

  export type PublicationUpdateOneRequiredWithoutNaacMappingsNestedInput = {
    create?: XOR<PublicationCreateWithoutNaacMappingsInput, PublicationUncheckedCreateWithoutNaacMappingsInput>
    connectOrCreate?: PublicationCreateOrConnectWithoutNaacMappingsInput
    upsert?: PublicationUpsertWithoutNaacMappingsInput
    connect?: PublicationWhereUniqueInput
    update?: XOR<XOR<PublicationUpdateToOneWithWhereWithoutNaacMappingsInput, PublicationUpdateWithoutNaacMappingsInput>, PublicationUncheckedUpdateWithoutNaacMappingsInput>
  }

  export type NaacCriterionUpdateOneRequiredWithoutMappingsNestedInput = {
    create?: XOR<NaacCriterionCreateWithoutMappingsInput, NaacCriterionUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: NaacCriterionCreateOrConnectWithoutMappingsInput
    upsert?: NaacCriterionUpsertWithoutMappingsInput
    connect?: NaacCriterionWhereUniqueInput
    update?: XOR<XOR<NaacCriterionUpdateToOneWithWhereWithoutMappingsInput, NaacCriterionUpdateWithoutMappingsInput>, NaacCriterionUncheckedUpdateWithoutMappingsInput>
  }

  export type UniversityCreateNestedOneWithoutNaacReportsInput = {
    create?: XOR<UniversityCreateWithoutNaacReportsInput, UniversityUncheckedCreateWithoutNaacReportsInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutNaacReportsInput
    connect?: UniversityWhereUniqueInput
  }

  export type UniversityUpdateOneRequiredWithoutNaacReportsNestedInput = {
    create?: XOR<UniversityCreateWithoutNaacReportsInput, UniversityUncheckedCreateWithoutNaacReportsInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutNaacReportsInput
    upsert?: UniversityUpsertWithoutNaacReportsInput
    connect?: UniversityWhereUniqueInput
    update?: XOR<XOR<UniversityUpdateToOneWithWhereWithoutNaacReportsInput, UniversityUpdateWithoutNaacReportsInput>, UniversityUncheckedUpdateWithoutNaacReportsInput>
  }

  export type EnumTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaskType
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumInviteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusFilter<$PrismaModel> | $Enums.InviteStatus
  }

  export type NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel> | $Enums.InviteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInviteStatusFilter<$PrismaModel>
    _max?: NestedEnumInviteStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPublicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationStatus | EnumPublicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationStatusFilter<$PrismaModel> | $Enums.PublicationStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPublicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationStatus | EnumPublicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationStatus[] | ListEnumPublicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublicationStatusFilter<$PrismaModel>
    _max?: NestedEnumPublicationStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type DepartmentCreateWithoutUniversityInput = {
    id?: string
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    facultyProfiles?: FacultyProfileCreateNestedManyWithoutDepartmentInput
    invites?: FacultyInviteCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutUniversityInput = {
    id?: string
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    facultyProfiles?: FacultyProfileUncheckedCreateNestedManyWithoutDepartmentInput
    invites?: FacultyInviteUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutUniversityInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUniversityInput, DepartmentUncheckedCreateWithoutUniversityInput>
  }

  export type DepartmentCreateManyUniversityInputEnvelope = {
    data: DepartmentCreateManyUniversityInput | DepartmentCreateManyUniversityInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutUniversityInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facultyProfile?: FacultyProfileCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUniversityInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facultyProfile?: FacultyProfileUncheckedCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUniversityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUniversityInput, UserUncheckedCreateWithoutUniversityInput>
  }

  export type UserCreateManyUniversityInputEnvelope = {
    data: UserCreateManyUniversityInput | UserCreateManyUniversityInput[]
    skipDuplicates?: boolean
  }

  export type FacultyInviteCreateWithoutUniversityInput = {
    id?: string
    email: string
    role?: $Enums.UserRole
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutInvitesInput
  }

  export type FacultyInviteUncheckedCreateWithoutUniversityInput = {
    id?: string
    email: string
    role?: $Enums.UserRole
    departmentId?: string | null
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type FacultyInviteCreateOrConnectWithoutUniversityInput = {
    where: FacultyInviteWhereUniqueInput
    create: XOR<FacultyInviteCreateWithoutUniversityInput, FacultyInviteUncheckedCreateWithoutUniversityInput>
  }

  export type FacultyInviteCreateManyUniversityInputEnvelope = {
    data: FacultyInviteCreateManyUniversityInput | FacultyInviteCreateManyUniversityInput[]
    skipDuplicates?: boolean
  }

  export type NaacReportCreateWithoutUniversityInput = {
    id?: string
    academicYear: string
    reportType: string
    fileUrl?: string | null
    generatedAt?: Date | string
  }

  export type NaacReportUncheckedCreateWithoutUniversityInput = {
    id?: string
    academicYear: string
    reportType: string
    fileUrl?: string | null
    generatedAt?: Date | string
  }

  export type NaacReportCreateOrConnectWithoutUniversityInput = {
    where: NaacReportWhereUniqueInput
    create: XOR<NaacReportCreateWithoutUniversityInput, NaacReportUncheckedCreateWithoutUniversityInput>
  }

  export type NaacReportCreateManyUniversityInputEnvelope = {
    data: NaacReportCreateManyUniversityInput | NaacReportCreateManyUniversityInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithWhereUniqueWithoutUniversityInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutUniversityInput, DepartmentUncheckedUpdateWithoutUniversityInput>
    create: XOR<DepartmentCreateWithoutUniversityInput, DepartmentUncheckedCreateWithoutUniversityInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutUniversityInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutUniversityInput, DepartmentUncheckedUpdateWithoutUniversityInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutUniversityInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutUniversityInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    code?: StringNullableFilter<"Department"> | string | null
    universityId?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutUniversityInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUniversityInput, UserUncheckedUpdateWithoutUniversityInput>
    create: XOR<UserCreateWithoutUniversityInput, UserUncheckedCreateWithoutUniversityInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUniversityInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUniversityInput, UserUncheckedUpdateWithoutUniversityInput>
  }

  export type UserUpdateManyWithWhereWithoutUniversityInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUniversityInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    universityId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type FacultyInviteUpsertWithWhereUniqueWithoutUniversityInput = {
    where: FacultyInviteWhereUniqueInput
    update: XOR<FacultyInviteUpdateWithoutUniversityInput, FacultyInviteUncheckedUpdateWithoutUniversityInput>
    create: XOR<FacultyInviteCreateWithoutUniversityInput, FacultyInviteUncheckedCreateWithoutUniversityInput>
  }

  export type FacultyInviteUpdateWithWhereUniqueWithoutUniversityInput = {
    where: FacultyInviteWhereUniqueInput
    data: XOR<FacultyInviteUpdateWithoutUniversityInput, FacultyInviteUncheckedUpdateWithoutUniversityInput>
  }

  export type FacultyInviteUpdateManyWithWhereWithoutUniversityInput = {
    where: FacultyInviteScalarWhereInput
    data: XOR<FacultyInviteUpdateManyMutationInput, FacultyInviteUncheckedUpdateManyWithoutUniversityInput>
  }

  export type FacultyInviteScalarWhereInput = {
    AND?: FacultyInviteScalarWhereInput | FacultyInviteScalarWhereInput[]
    OR?: FacultyInviteScalarWhereInput[]
    NOT?: FacultyInviteScalarWhereInput | FacultyInviteScalarWhereInput[]
    id?: StringFilter<"FacultyInvite"> | string
    email?: StringFilter<"FacultyInvite"> | string
    role?: EnumUserRoleFilter<"FacultyInvite"> | $Enums.UserRole
    universityId?: StringFilter<"FacultyInvite"> | string
    departmentId?: StringNullableFilter<"FacultyInvite"> | string | null
    token?: StringFilter<"FacultyInvite"> | string
    status?: EnumInviteStatusFilter<"FacultyInvite"> | $Enums.InviteStatus
    expiresAt?: DateTimeFilter<"FacultyInvite"> | Date | string
    createdAt?: DateTimeFilter<"FacultyInvite"> | Date | string
  }

  export type NaacReportUpsertWithWhereUniqueWithoutUniversityInput = {
    where: NaacReportWhereUniqueInput
    update: XOR<NaacReportUpdateWithoutUniversityInput, NaacReportUncheckedUpdateWithoutUniversityInput>
    create: XOR<NaacReportCreateWithoutUniversityInput, NaacReportUncheckedCreateWithoutUniversityInput>
  }

  export type NaacReportUpdateWithWhereUniqueWithoutUniversityInput = {
    where: NaacReportWhereUniqueInput
    data: XOR<NaacReportUpdateWithoutUniversityInput, NaacReportUncheckedUpdateWithoutUniversityInput>
  }

  export type NaacReportUpdateManyWithWhereWithoutUniversityInput = {
    where: NaacReportScalarWhereInput
    data: XOR<NaacReportUpdateManyMutationInput, NaacReportUncheckedUpdateManyWithoutUniversityInput>
  }

  export type NaacReportScalarWhereInput = {
    AND?: NaacReportScalarWhereInput | NaacReportScalarWhereInput[]
    OR?: NaacReportScalarWhereInput[]
    NOT?: NaacReportScalarWhereInput | NaacReportScalarWhereInput[]
    id?: StringFilter<"NaacReport"> | string
    universityId?: StringFilter<"NaacReport"> | string
    academicYear?: StringFilter<"NaacReport"> | string
    reportType?: StringFilter<"NaacReport"> | string
    fileUrl?: StringNullableFilter<"NaacReport"> | string | null
    generatedAt?: DateTimeFilter<"NaacReport"> | Date | string
  }

  export type UniversityCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    code: string
    website?: string | null
    city?: string | null
    state?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutUniversityInput
    invites?: FacultyInviteCreateNestedManyWithoutUniversityInput
    naacReports?: NaacReportCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUncheckedCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    code: string
    website?: string | null
    city?: string | null
    state?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutUniversityInput
    invites?: FacultyInviteUncheckedCreateNestedManyWithoutUniversityInput
    naacReports?: NaacReportUncheckedCreateNestedManyWithoutUniversityInput
  }

  export type UniversityCreateOrConnectWithoutDepartmentsInput = {
    where: UniversityWhereUniqueInput
    create: XOR<UniversityCreateWithoutDepartmentsInput, UniversityUncheckedCreateWithoutDepartmentsInput>
  }

  export type FacultyProfileCreateWithoutDepartmentInput = {
    id?: string
    fullName: string
    designation: string
    qualification?: string | null
    joiningDate?: Date | string | null
    avatarUrl?: string | null
    bio?: string | null
    openAlexId?: string | null
    orcid?: string | null
    scopusAuthorId?: string | null
    vidwanId?: string | null
    googleScholar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFacultyProfileInput
    authorships?: PublicationAuthorCreateNestedManyWithoutFacultyProfileInput
  }

  export type FacultyProfileUncheckedCreateWithoutDepartmentInput = {
    id?: string
    userId: string
    fullName: string
    designation: string
    qualification?: string | null
    joiningDate?: Date | string | null
    avatarUrl?: string | null
    bio?: string | null
    openAlexId?: string | null
    orcid?: string | null
    scopusAuthorId?: string | null
    vidwanId?: string | null
    googleScholar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorships?: PublicationAuthorUncheckedCreateNestedManyWithoutFacultyProfileInput
  }

  export type FacultyProfileCreateOrConnectWithoutDepartmentInput = {
    where: FacultyProfileWhereUniqueInput
    create: XOR<FacultyProfileCreateWithoutDepartmentInput, FacultyProfileUncheckedCreateWithoutDepartmentInput>
  }

  export type FacultyProfileCreateManyDepartmentInputEnvelope = {
    data: FacultyProfileCreateManyDepartmentInput | FacultyProfileCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type FacultyInviteCreateWithoutDepartmentInput = {
    id?: string
    email: string
    role?: $Enums.UserRole
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
    university: UniversityCreateNestedOneWithoutInvitesInput
  }

  export type FacultyInviteUncheckedCreateWithoutDepartmentInput = {
    id?: string
    email: string
    role?: $Enums.UserRole
    universityId: string
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type FacultyInviteCreateOrConnectWithoutDepartmentInput = {
    where: FacultyInviteWhereUniqueInput
    create: XOR<FacultyInviteCreateWithoutDepartmentInput, FacultyInviteUncheckedCreateWithoutDepartmentInput>
  }

  export type FacultyInviteCreateManyDepartmentInputEnvelope = {
    data: FacultyInviteCreateManyDepartmentInput | FacultyInviteCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type UniversityUpsertWithoutDepartmentsInput = {
    update: XOR<UniversityUpdateWithoutDepartmentsInput, UniversityUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<UniversityCreateWithoutDepartmentsInput, UniversityUncheckedCreateWithoutDepartmentsInput>
    where?: UniversityWhereInput
  }

  export type UniversityUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: UniversityWhereInput
    data: XOR<UniversityUpdateWithoutDepartmentsInput, UniversityUncheckedUpdateWithoutDepartmentsInput>
  }

  export type UniversityUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutUniversityNestedInput
    invites?: FacultyInviteUpdateManyWithoutUniversityNestedInput
    naacReports?: NaacReportUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutUniversityNestedInput
    invites?: FacultyInviteUncheckedUpdateManyWithoutUniversityNestedInput
    naacReports?: NaacReportUncheckedUpdateManyWithoutUniversityNestedInput
  }

  export type FacultyProfileUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: FacultyProfileWhereUniqueInput
    update: XOR<FacultyProfileUpdateWithoutDepartmentInput, FacultyProfileUncheckedUpdateWithoutDepartmentInput>
    create: XOR<FacultyProfileCreateWithoutDepartmentInput, FacultyProfileUncheckedCreateWithoutDepartmentInput>
  }

  export type FacultyProfileUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: FacultyProfileWhereUniqueInput
    data: XOR<FacultyProfileUpdateWithoutDepartmentInput, FacultyProfileUncheckedUpdateWithoutDepartmentInput>
  }

  export type FacultyProfileUpdateManyWithWhereWithoutDepartmentInput = {
    where: FacultyProfileScalarWhereInput
    data: XOR<FacultyProfileUpdateManyMutationInput, FacultyProfileUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type FacultyProfileScalarWhereInput = {
    AND?: FacultyProfileScalarWhereInput | FacultyProfileScalarWhereInput[]
    OR?: FacultyProfileScalarWhereInput[]
    NOT?: FacultyProfileScalarWhereInput | FacultyProfileScalarWhereInput[]
    id?: StringFilter<"FacultyProfile"> | string
    userId?: StringFilter<"FacultyProfile"> | string
    departmentId?: StringFilter<"FacultyProfile"> | string
    fullName?: StringFilter<"FacultyProfile"> | string
    designation?: StringFilter<"FacultyProfile"> | string
    qualification?: StringNullableFilter<"FacultyProfile"> | string | null
    joiningDate?: DateTimeNullableFilter<"FacultyProfile"> | Date | string | null
    avatarUrl?: StringNullableFilter<"FacultyProfile"> | string | null
    bio?: StringNullableFilter<"FacultyProfile"> | string | null
    openAlexId?: StringNullableFilter<"FacultyProfile"> | string | null
    orcid?: StringNullableFilter<"FacultyProfile"> | string | null
    scopusAuthorId?: StringNullableFilter<"FacultyProfile"> | string | null
    vidwanId?: StringNullableFilter<"FacultyProfile"> | string | null
    googleScholar?: StringNullableFilter<"FacultyProfile"> | string | null
    createdAt?: DateTimeFilter<"FacultyProfile"> | Date | string
    updatedAt?: DateTimeFilter<"FacultyProfile"> | Date | string
  }

  export type FacultyInviteUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: FacultyInviteWhereUniqueInput
    update: XOR<FacultyInviteUpdateWithoutDepartmentInput, FacultyInviteUncheckedUpdateWithoutDepartmentInput>
    create: XOR<FacultyInviteCreateWithoutDepartmentInput, FacultyInviteUncheckedCreateWithoutDepartmentInput>
  }

  export type FacultyInviteUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: FacultyInviteWhereUniqueInput
    data: XOR<FacultyInviteUpdateWithoutDepartmentInput, FacultyInviteUncheckedUpdateWithoutDepartmentInput>
  }

  export type FacultyInviteUpdateManyWithWhereWithoutDepartmentInput = {
    where: FacultyInviteScalarWhereInput
    data: XOR<FacultyInviteUpdateManyMutationInput, FacultyInviteUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type UniversityCreateWithoutUsersInput = {
    id?: string
    name: string
    code: string
    website?: string | null
    city?: string | null
    state?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutUniversityInput
    invites?: FacultyInviteCreateNestedManyWithoutUniversityInput
    naacReports?: NaacReportCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    code: string
    website?: string | null
    city?: string | null
    state?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutUniversityInput
    invites?: FacultyInviteUncheckedCreateNestedManyWithoutUniversityInput
    naacReports?: NaacReportUncheckedCreateNestedManyWithoutUniversityInput
  }

  export type UniversityCreateOrConnectWithoutUsersInput = {
    where: UniversityWhereUniqueInput
    create: XOR<UniversityCreateWithoutUsersInput, UniversityUncheckedCreateWithoutUsersInput>
  }

  export type FacultyProfileCreateWithoutUserInput = {
    id?: string
    fullName: string
    designation: string
    qualification?: string | null
    joiningDate?: Date | string | null
    avatarUrl?: string | null
    bio?: string | null
    openAlexId?: string | null
    orcid?: string | null
    scopusAuthorId?: string | null
    vidwanId?: string | null
    googleScholar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentCreateNestedOneWithoutFacultyProfilesInput
    authorships?: PublicationAuthorCreateNestedManyWithoutFacultyProfileInput
  }

  export type FacultyProfileUncheckedCreateWithoutUserInput = {
    id?: string
    departmentId: string
    fullName: string
    designation: string
    qualification?: string | null
    joiningDate?: Date | string | null
    avatarUrl?: string | null
    bio?: string | null
    openAlexId?: string | null
    orcid?: string | null
    scopusAuthorId?: string | null
    vidwanId?: string | null
    googleScholar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorships?: PublicationAuthorUncheckedCreateNestedManyWithoutFacultyProfileInput
  }

  export type FacultyProfileCreateOrConnectWithoutUserInput = {
    where: FacultyProfileWhereUniqueInput
    create: XOR<FacultyProfileCreateWithoutUserInput, FacultyProfileUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UniversityUpsertWithoutUsersInput = {
    update: XOR<UniversityUpdateWithoutUsersInput, UniversityUncheckedUpdateWithoutUsersInput>
    create: XOR<UniversityCreateWithoutUsersInput, UniversityUncheckedCreateWithoutUsersInput>
    where?: UniversityWhereInput
  }

  export type UniversityUpdateToOneWithWhereWithoutUsersInput = {
    where?: UniversityWhereInput
    data: XOR<UniversityUpdateWithoutUsersInput, UniversityUncheckedUpdateWithoutUsersInput>
  }

  export type UniversityUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutUniversityNestedInput
    invites?: FacultyInviteUpdateManyWithoutUniversityNestedInput
    naacReports?: NaacReportUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutUniversityNestedInput
    invites?: FacultyInviteUncheckedUpdateManyWithoutUniversityNestedInput
    naacReports?: NaacReportUncheckedUpdateManyWithoutUniversityNestedInput
  }

  export type FacultyProfileUpsertWithoutUserInput = {
    update: XOR<FacultyProfileUpdateWithoutUserInput, FacultyProfileUncheckedUpdateWithoutUserInput>
    create: XOR<FacultyProfileCreateWithoutUserInput, FacultyProfileUncheckedCreateWithoutUserInput>
    where?: FacultyProfileWhereInput
  }

  export type FacultyProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: FacultyProfileWhereInput
    data: XOR<FacultyProfileUpdateWithoutUserInput, FacultyProfileUncheckedUpdateWithoutUserInput>
  }

  export type FacultyProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    scopusAuthorId?: NullableStringFieldUpdateOperationsInput | string | null
    vidwanId?: NullableStringFieldUpdateOperationsInput | string | null
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutFacultyProfilesNestedInput
    authorships?: PublicationAuthorUpdateManyWithoutFacultyProfileNestedInput
  }

  export type FacultyProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    scopusAuthorId?: NullableStringFieldUpdateOperationsInput | string | null
    vidwanId?: NullableStringFieldUpdateOperationsInput | string | null
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorships?: PublicationAuthorUncheckedUpdateManyWithoutFacultyProfileNestedInput
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    details?: JsonNullableFilter<"ActivityLog">
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type UniversityCreateWithoutInvitesInput = {
    id?: string
    name: string
    code: string
    website?: string | null
    city?: string | null
    state?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutUniversityInput
    users?: UserCreateNestedManyWithoutUniversityInput
    naacReports?: NaacReportCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUncheckedCreateWithoutInvitesInput = {
    id?: string
    name: string
    code: string
    website?: string | null
    city?: string | null
    state?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutUniversityInput
    users?: UserUncheckedCreateNestedManyWithoutUniversityInput
    naacReports?: NaacReportUncheckedCreateNestedManyWithoutUniversityInput
  }

  export type UniversityCreateOrConnectWithoutInvitesInput = {
    where: UniversityWhereUniqueInput
    create: XOR<UniversityCreateWithoutInvitesInput, UniversityUncheckedCreateWithoutInvitesInput>
  }

  export type DepartmentCreateWithoutInvitesInput = {
    id?: string
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    university: UniversityCreateNestedOneWithoutDepartmentsInput
    facultyProfiles?: FacultyProfileCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutInvitesInput = {
    id?: string
    name: string
    code?: string | null
    universityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facultyProfiles?: FacultyProfileUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutInvitesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutInvitesInput, DepartmentUncheckedCreateWithoutInvitesInput>
  }

  export type UniversityUpsertWithoutInvitesInput = {
    update: XOR<UniversityUpdateWithoutInvitesInput, UniversityUncheckedUpdateWithoutInvitesInput>
    create: XOR<UniversityCreateWithoutInvitesInput, UniversityUncheckedCreateWithoutInvitesInput>
    where?: UniversityWhereInput
  }

  export type UniversityUpdateToOneWithWhereWithoutInvitesInput = {
    where?: UniversityWhereInput
    data: XOR<UniversityUpdateWithoutInvitesInput, UniversityUncheckedUpdateWithoutInvitesInput>
  }

  export type UniversityUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutUniversityNestedInput
    users?: UserUpdateManyWithoutUniversityNestedInput
    naacReports?: NaacReportUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityUncheckedUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutUniversityNestedInput
    users?: UserUncheckedUpdateManyWithoutUniversityNestedInput
    naacReports?: NaacReportUncheckedUpdateManyWithoutUniversityNestedInput
  }

  export type DepartmentUpsertWithoutInvitesInput = {
    update: XOR<DepartmentUpdateWithoutInvitesInput, DepartmentUncheckedUpdateWithoutInvitesInput>
    create: XOR<DepartmentCreateWithoutInvitesInput, DepartmentUncheckedCreateWithoutInvitesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutInvitesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutInvitesInput, DepartmentUncheckedUpdateWithoutInvitesInput>
  }

  export type DepartmentUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneRequiredWithoutDepartmentsNestedInput
    facultyProfiles?: FacultyProfileUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    universityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultyProfiles?: FacultyProfileUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type UserCreateWithoutFacultyProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    university?: UniversityCreateNestedOneWithoutUsersInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFacultyProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    universityId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFacultyProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFacultyProfileInput, UserUncheckedCreateWithoutFacultyProfileInput>
  }

  export type DepartmentCreateWithoutFacultyProfilesInput = {
    id?: string
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    university: UniversityCreateNestedOneWithoutDepartmentsInput
    invites?: FacultyInviteCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutFacultyProfilesInput = {
    id?: string
    name: string
    code?: string | null
    universityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invites?: FacultyInviteUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutFacultyProfilesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutFacultyProfilesInput, DepartmentUncheckedCreateWithoutFacultyProfilesInput>
  }

  export type PublicationAuthorCreateWithoutFacultyProfileInput = {
    id?: string
    authorPosition?: number
    isCorresponding?: boolean
    publication: PublicationCreateNestedOneWithoutAuthorsInput
  }

  export type PublicationAuthorUncheckedCreateWithoutFacultyProfileInput = {
    id?: string
    publicationId: string
    authorPosition?: number
    isCorresponding?: boolean
  }

  export type PublicationAuthorCreateOrConnectWithoutFacultyProfileInput = {
    where: PublicationAuthorWhereUniqueInput
    create: XOR<PublicationAuthorCreateWithoutFacultyProfileInput, PublicationAuthorUncheckedCreateWithoutFacultyProfileInput>
  }

  export type PublicationAuthorCreateManyFacultyProfileInputEnvelope = {
    data: PublicationAuthorCreateManyFacultyProfileInput | PublicationAuthorCreateManyFacultyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFacultyProfileInput = {
    update: XOR<UserUpdateWithoutFacultyProfileInput, UserUncheckedUpdateWithoutFacultyProfileInput>
    create: XOR<UserCreateWithoutFacultyProfileInput, UserUncheckedCreateWithoutFacultyProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFacultyProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFacultyProfileInput, UserUncheckedUpdateWithoutFacultyProfileInput>
  }

  export type UserUpdateWithoutFacultyProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneWithoutUsersNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFacultyProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DepartmentUpsertWithoutFacultyProfilesInput = {
    update: XOR<DepartmentUpdateWithoutFacultyProfilesInput, DepartmentUncheckedUpdateWithoutFacultyProfilesInput>
    create: XOR<DepartmentCreateWithoutFacultyProfilesInput, DepartmentUncheckedCreateWithoutFacultyProfilesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutFacultyProfilesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutFacultyProfilesInput, DepartmentUncheckedUpdateWithoutFacultyProfilesInput>
  }

  export type DepartmentUpdateWithoutFacultyProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneRequiredWithoutDepartmentsNestedInput
    invites?: FacultyInviteUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutFacultyProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    universityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: FacultyInviteUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type PublicationAuthorUpsertWithWhereUniqueWithoutFacultyProfileInput = {
    where: PublicationAuthorWhereUniqueInput
    update: XOR<PublicationAuthorUpdateWithoutFacultyProfileInput, PublicationAuthorUncheckedUpdateWithoutFacultyProfileInput>
    create: XOR<PublicationAuthorCreateWithoutFacultyProfileInput, PublicationAuthorUncheckedCreateWithoutFacultyProfileInput>
  }

  export type PublicationAuthorUpdateWithWhereUniqueWithoutFacultyProfileInput = {
    where: PublicationAuthorWhereUniqueInput
    data: XOR<PublicationAuthorUpdateWithoutFacultyProfileInput, PublicationAuthorUncheckedUpdateWithoutFacultyProfileInput>
  }

  export type PublicationAuthorUpdateManyWithWhereWithoutFacultyProfileInput = {
    where: PublicationAuthorScalarWhereInput
    data: XOR<PublicationAuthorUpdateManyMutationInput, PublicationAuthorUncheckedUpdateManyWithoutFacultyProfileInput>
  }

  export type PublicationAuthorScalarWhereInput = {
    AND?: PublicationAuthorScalarWhereInput | PublicationAuthorScalarWhereInput[]
    OR?: PublicationAuthorScalarWhereInput[]
    NOT?: PublicationAuthorScalarWhereInput | PublicationAuthorScalarWhereInput[]
    id?: StringFilter<"PublicationAuthor"> | string
    publicationId?: StringFilter<"PublicationAuthor"> | string
    facultyProfileId?: StringFilter<"PublicationAuthor"> | string
    authorPosition?: IntFilter<"PublicationAuthor"> | number
    isCorresponding?: BoolFilter<"PublicationAuthor"> | boolean
  }

  export type PublicationAuthorCreateWithoutPublicationInput = {
    id?: string
    authorPosition?: number
    isCorresponding?: boolean
    facultyProfile: FacultyProfileCreateNestedOneWithoutAuthorshipsInput
  }

  export type PublicationAuthorUncheckedCreateWithoutPublicationInput = {
    id?: string
    facultyProfileId: string
    authorPosition?: number
    isCorresponding?: boolean
  }

  export type PublicationAuthorCreateOrConnectWithoutPublicationInput = {
    where: PublicationAuthorWhereUniqueInput
    create: XOR<PublicationAuthorCreateWithoutPublicationInput, PublicationAuthorUncheckedCreateWithoutPublicationInput>
  }

  export type PublicationAuthorCreateManyPublicationInputEnvelope = {
    data: PublicationAuthorCreateManyPublicationInput | PublicationAuthorCreateManyPublicationInput[]
    skipDuplicates?: boolean
  }

  export type NaacPublicationMappingCreateWithoutPublicationInput = {
    id?: string
    academicYear: string
    verifiedByIQAC?: boolean
    criterion: NaacCriterionCreateNestedOneWithoutMappingsInput
  }

  export type NaacPublicationMappingUncheckedCreateWithoutPublicationInput = {
    id?: string
    criterionId: string
    academicYear: string
    verifiedByIQAC?: boolean
  }

  export type NaacPublicationMappingCreateOrConnectWithoutPublicationInput = {
    where: NaacPublicationMappingWhereUniqueInput
    create: XOR<NaacPublicationMappingCreateWithoutPublicationInput, NaacPublicationMappingUncheckedCreateWithoutPublicationInput>
  }

  export type NaacPublicationMappingCreateManyPublicationInputEnvelope = {
    data: NaacPublicationMappingCreateManyPublicationInput | NaacPublicationMappingCreateManyPublicationInput[]
    skipDuplicates?: boolean
  }

  export type PublicationAuthorUpsertWithWhereUniqueWithoutPublicationInput = {
    where: PublicationAuthorWhereUniqueInput
    update: XOR<PublicationAuthorUpdateWithoutPublicationInput, PublicationAuthorUncheckedUpdateWithoutPublicationInput>
    create: XOR<PublicationAuthorCreateWithoutPublicationInput, PublicationAuthorUncheckedCreateWithoutPublicationInput>
  }

  export type PublicationAuthorUpdateWithWhereUniqueWithoutPublicationInput = {
    where: PublicationAuthorWhereUniqueInput
    data: XOR<PublicationAuthorUpdateWithoutPublicationInput, PublicationAuthorUncheckedUpdateWithoutPublicationInput>
  }

  export type PublicationAuthorUpdateManyWithWhereWithoutPublicationInput = {
    where: PublicationAuthorScalarWhereInput
    data: XOR<PublicationAuthorUpdateManyMutationInput, PublicationAuthorUncheckedUpdateManyWithoutPublicationInput>
  }

  export type NaacPublicationMappingUpsertWithWhereUniqueWithoutPublicationInput = {
    where: NaacPublicationMappingWhereUniqueInput
    update: XOR<NaacPublicationMappingUpdateWithoutPublicationInput, NaacPublicationMappingUncheckedUpdateWithoutPublicationInput>
    create: XOR<NaacPublicationMappingCreateWithoutPublicationInput, NaacPublicationMappingUncheckedCreateWithoutPublicationInput>
  }

  export type NaacPublicationMappingUpdateWithWhereUniqueWithoutPublicationInput = {
    where: NaacPublicationMappingWhereUniqueInput
    data: XOR<NaacPublicationMappingUpdateWithoutPublicationInput, NaacPublicationMappingUncheckedUpdateWithoutPublicationInput>
  }

  export type NaacPublicationMappingUpdateManyWithWhereWithoutPublicationInput = {
    where: NaacPublicationMappingScalarWhereInput
    data: XOR<NaacPublicationMappingUpdateManyMutationInput, NaacPublicationMappingUncheckedUpdateManyWithoutPublicationInput>
  }

  export type NaacPublicationMappingScalarWhereInput = {
    AND?: NaacPublicationMappingScalarWhereInput | NaacPublicationMappingScalarWhereInput[]
    OR?: NaacPublicationMappingScalarWhereInput[]
    NOT?: NaacPublicationMappingScalarWhereInput | NaacPublicationMappingScalarWhereInput[]
    id?: StringFilter<"NaacPublicationMapping"> | string
    publicationId?: StringFilter<"NaacPublicationMapping"> | string
    criterionId?: StringFilter<"NaacPublicationMapping"> | string
    academicYear?: StringFilter<"NaacPublicationMapping"> | string
    verifiedByIQAC?: BoolFilter<"NaacPublicationMapping"> | boolean
  }

  export type PublicationCreateWithoutAuthorsInput = {
    id?: string
    title: string
    publicationYear: number
    doi?: string | null
    openAlexId?: string | null
    journalName?: string | null
    publisher?: string | null
    volume?: string | null
    issue?: string | null
    pages?: string | null
    citationCount?: number
    isOpenAccess?: boolean
    openAccessUrl?: string | null
    landingPageUrl?: string | null
    abstract?: string | null
    status?: $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    naacMappings?: NaacPublicationMappingCreateNestedManyWithoutPublicationInput
  }

  export type PublicationUncheckedCreateWithoutAuthorsInput = {
    id?: string
    title: string
    publicationYear: number
    doi?: string | null
    openAlexId?: string | null
    journalName?: string | null
    publisher?: string | null
    volume?: string | null
    issue?: string | null
    pages?: string | null
    citationCount?: number
    isOpenAccess?: boolean
    openAccessUrl?: string | null
    landingPageUrl?: string | null
    abstract?: string | null
    status?: $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    naacMappings?: NaacPublicationMappingUncheckedCreateNestedManyWithoutPublicationInput
  }

  export type PublicationCreateOrConnectWithoutAuthorsInput = {
    where: PublicationWhereUniqueInput
    create: XOR<PublicationCreateWithoutAuthorsInput, PublicationUncheckedCreateWithoutAuthorsInput>
  }

  export type FacultyProfileCreateWithoutAuthorshipsInput = {
    id?: string
    fullName: string
    designation: string
    qualification?: string | null
    joiningDate?: Date | string | null
    avatarUrl?: string | null
    bio?: string | null
    openAlexId?: string | null
    orcid?: string | null
    scopusAuthorId?: string | null
    vidwanId?: string | null
    googleScholar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFacultyProfileInput
    department: DepartmentCreateNestedOneWithoutFacultyProfilesInput
  }

  export type FacultyProfileUncheckedCreateWithoutAuthorshipsInput = {
    id?: string
    userId: string
    departmentId: string
    fullName: string
    designation: string
    qualification?: string | null
    joiningDate?: Date | string | null
    avatarUrl?: string | null
    bio?: string | null
    openAlexId?: string | null
    orcid?: string | null
    scopusAuthorId?: string | null
    vidwanId?: string | null
    googleScholar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultyProfileCreateOrConnectWithoutAuthorshipsInput = {
    where: FacultyProfileWhereUniqueInput
    create: XOR<FacultyProfileCreateWithoutAuthorshipsInput, FacultyProfileUncheckedCreateWithoutAuthorshipsInput>
  }

  export type PublicationUpsertWithoutAuthorsInput = {
    update: XOR<PublicationUpdateWithoutAuthorsInput, PublicationUncheckedUpdateWithoutAuthorsInput>
    create: XOR<PublicationCreateWithoutAuthorsInput, PublicationUncheckedCreateWithoutAuthorsInput>
    where?: PublicationWhereInput
  }

  export type PublicationUpdateToOneWithWhereWithoutAuthorsInput = {
    where?: PublicationWhereInput
    data: XOR<PublicationUpdateWithoutAuthorsInput, PublicationUncheckedUpdateWithoutAuthorsInput>
  }

  export type PublicationUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    journalName?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableStringFieldUpdateOperationsInput | string | null
    citationCount?: IntFieldUpdateOperationsInput | number
    isOpenAccess?: BoolFieldUpdateOperationsInput | boolean
    openAccessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    abstract?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    naacMappings?: NaacPublicationMappingUpdateManyWithoutPublicationNestedInput
  }

  export type PublicationUncheckedUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    journalName?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableStringFieldUpdateOperationsInput | string | null
    citationCount?: IntFieldUpdateOperationsInput | number
    isOpenAccess?: BoolFieldUpdateOperationsInput | boolean
    openAccessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    abstract?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    naacMappings?: NaacPublicationMappingUncheckedUpdateManyWithoutPublicationNestedInput
  }

  export type FacultyProfileUpsertWithoutAuthorshipsInput = {
    update: XOR<FacultyProfileUpdateWithoutAuthorshipsInput, FacultyProfileUncheckedUpdateWithoutAuthorshipsInput>
    create: XOR<FacultyProfileCreateWithoutAuthorshipsInput, FacultyProfileUncheckedCreateWithoutAuthorshipsInput>
    where?: FacultyProfileWhereInput
  }

  export type FacultyProfileUpdateToOneWithWhereWithoutAuthorshipsInput = {
    where?: FacultyProfileWhereInput
    data: XOR<FacultyProfileUpdateWithoutAuthorshipsInput, FacultyProfileUncheckedUpdateWithoutAuthorshipsInput>
  }

  export type FacultyProfileUpdateWithoutAuthorshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    scopusAuthorId?: NullableStringFieldUpdateOperationsInput | string | null
    vidwanId?: NullableStringFieldUpdateOperationsInput | string | null
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFacultyProfileNestedInput
    department?: DepartmentUpdateOneRequiredWithoutFacultyProfilesNestedInput
  }

  export type FacultyProfileUncheckedUpdateWithoutAuthorshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    scopusAuthorId?: NullableStringFieldUpdateOperationsInput | string | null
    vidwanId?: NullableStringFieldUpdateOperationsInput | string | null
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NaacPublicationMappingCreateWithoutCriterionInput = {
    id?: string
    academicYear: string
    verifiedByIQAC?: boolean
    publication: PublicationCreateNestedOneWithoutNaacMappingsInput
  }

  export type NaacPublicationMappingUncheckedCreateWithoutCriterionInput = {
    id?: string
    publicationId: string
    academicYear: string
    verifiedByIQAC?: boolean
  }

  export type NaacPublicationMappingCreateOrConnectWithoutCriterionInput = {
    where: NaacPublicationMappingWhereUniqueInput
    create: XOR<NaacPublicationMappingCreateWithoutCriterionInput, NaacPublicationMappingUncheckedCreateWithoutCriterionInput>
  }

  export type NaacPublicationMappingCreateManyCriterionInputEnvelope = {
    data: NaacPublicationMappingCreateManyCriterionInput | NaacPublicationMappingCreateManyCriterionInput[]
    skipDuplicates?: boolean
  }

  export type NaacPublicationMappingUpsertWithWhereUniqueWithoutCriterionInput = {
    where: NaacPublicationMappingWhereUniqueInput
    update: XOR<NaacPublicationMappingUpdateWithoutCriterionInput, NaacPublicationMappingUncheckedUpdateWithoutCriterionInput>
    create: XOR<NaacPublicationMappingCreateWithoutCriterionInput, NaacPublicationMappingUncheckedCreateWithoutCriterionInput>
  }

  export type NaacPublicationMappingUpdateWithWhereUniqueWithoutCriterionInput = {
    where: NaacPublicationMappingWhereUniqueInput
    data: XOR<NaacPublicationMappingUpdateWithoutCriterionInput, NaacPublicationMappingUncheckedUpdateWithoutCriterionInput>
  }

  export type NaacPublicationMappingUpdateManyWithWhereWithoutCriterionInput = {
    where: NaacPublicationMappingScalarWhereInput
    data: XOR<NaacPublicationMappingUpdateManyMutationInput, NaacPublicationMappingUncheckedUpdateManyWithoutCriterionInput>
  }

  export type PublicationCreateWithoutNaacMappingsInput = {
    id?: string
    title: string
    publicationYear: number
    doi?: string | null
    openAlexId?: string | null
    journalName?: string | null
    publisher?: string | null
    volume?: string | null
    issue?: string | null
    pages?: string | null
    citationCount?: number
    isOpenAccess?: boolean
    openAccessUrl?: string | null
    landingPageUrl?: string | null
    abstract?: string | null
    status?: $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: PublicationAuthorCreateNestedManyWithoutPublicationInput
  }

  export type PublicationUncheckedCreateWithoutNaacMappingsInput = {
    id?: string
    title: string
    publicationYear: number
    doi?: string | null
    openAlexId?: string | null
    journalName?: string | null
    publisher?: string | null
    volume?: string | null
    issue?: string | null
    pages?: string | null
    citationCount?: number
    isOpenAccess?: boolean
    openAccessUrl?: string | null
    landingPageUrl?: string | null
    abstract?: string | null
    status?: $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: PublicationAuthorUncheckedCreateNestedManyWithoutPublicationInput
  }

  export type PublicationCreateOrConnectWithoutNaacMappingsInput = {
    where: PublicationWhereUniqueInput
    create: XOR<PublicationCreateWithoutNaacMappingsInput, PublicationUncheckedCreateWithoutNaacMappingsInput>
  }

  export type NaacCriterionCreateWithoutMappingsInput = {
    id?: string
    code: string
    category: string
    description: string
  }

  export type NaacCriterionUncheckedCreateWithoutMappingsInput = {
    id?: string
    code: string
    category: string
    description: string
  }

  export type NaacCriterionCreateOrConnectWithoutMappingsInput = {
    where: NaacCriterionWhereUniqueInput
    create: XOR<NaacCriterionCreateWithoutMappingsInput, NaacCriterionUncheckedCreateWithoutMappingsInput>
  }

  export type PublicationUpsertWithoutNaacMappingsInput = {
    update: XOR<PublicationUpdateWithoutNaacMappingsInput, PublicationUncheckedUpdateWithoutNaacMappingsInput>
    create: XOR<PublicationCreateWithoutNaacMappingsInput, PublicationUncheckedCreateWithoutNaacMappingsInput>
    where?: PublicationWhereInput
  }

  export type PublicationUpdateToOneWithWhereWithoutNaacMappingsInput = {
    where?: PublicationWhereInput
    data: XOR<PublicationUpdateWithoutNaacMappingsInput, PublicationUncheckedUpdateWithoutNaacMappingsInput>
  }

  export type PublicationUpdateWithoutNaacMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    journalName?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableStringFieldUpdateOperationsInput | string | null
    citationCount?: IntFieldUpdateOperationsInput | number
    isOpenAccess?: BoolFieldUpdateOperationsInput | boolean
    openAccessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    abstract?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: PublicationAuthorUpdateManyWithoutPublicationNestedInput
  }

  export type PublicationUncheckedUpdateWithoutNaacMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    journalName?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableStringFieldUpdateOperationsInput | string | null
    citationCount?: IntFieldUpdateOperationsInput | number
    isOpenAccess?: BoolFieldUpdateOperationsInput | boolean
    openAccessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    abstract?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublicationStatusFieldUpdateOperationsInput | $Enums.PublicationStatus
    rawMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: PublicationAuthorUncheckedUpdateManyWithoutPublicationNestedInput
  }

  export type NaacCriterionUpsertWithoutMappingsInput = {
    update: XOR<NaacCriterionUpdateWithoutMappingsInput, NaacCriterionUncheckedUpdateWithoutMappingsInput>
    create: XOR<NaacCriterionCreateWithoutMappingsInput, NaacCriterionUncheckedCreateWithoutMappingsInput>
    where?: NaacCriterionWhereInput
  }

  export type NaacCriterionUpdateToOneWithWhereWithoutMappingsInput = {
    where?: NaacCriterionWhereInput
    data: XOR<NaacCriterionUpdateWithoutMappingsInput, NaacCriterionUncheckedUpdateWithoutMappingsInput>
  }

  export type NaacCriterionUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type NaacCriterionUncheckedUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UniversityCreateWithoutNaacReportsInput = {
    id?: string
    name: string
    code: string
    website?: string | null
    city?: string | null
    state?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutUniversityInput
    users?: UserCreateNestedManyWithoutUniversityInput
    invites?: FacultyInviteCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUncheckedCreateWithoutNaacReportsInput = {
    id?: string
    name: string
    code: string
    website?: string | null
    city?: string | null
    state?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutUniversityInput
    users?: UserUncheckedCreateNestedManyWithoutUniversityInput
    invites?: FacultyInviteUncheckedCreateNestedManyWithoutUniversityInput
  }

  export type UniversityCreateOrConnectWithoutNaacReportsInput = {
    where: UniversityWhereUniqueInput
    create: XOR<UniversityCreateWithoutNaacReportsInput, UniversityUncheckedCreateWithoutNaacReportsInput>
  }

  export type UniversityUpsertWithoutNaacReportsInput = {
    update: XOR<UniversityUpdateWithoutNaacReportsInput, UniversityUncheckedUpdateWithoutNaacReportsInput>
    create: XOR<UniversityCreateWithoutNaacReportsInput, UniversityUncheckedCreateWithoutNaacReportsInput>
    where?: UniversityWhereInput
  }

  export type UniversityUpdateToOneWithWhereWithoutNaacReportsInput = {
    where?: UniversityWhereInput
    data: XOR<UniversityUpdateWithoutNaacReportsInput, UniversityUncheckedUpdateWithoutNaacReportsInput>
  }

  export type UniversityUpdateWithoutNaacReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutUniversityNestedInput
    users?: UserUpdateManyWithoutUniversityNestedInput
    invites?: FacultyInviteUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityUncheckedUpdateWithoutNaacReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutUniversityNestedInput
    users?: UserUncheckedUpdateManyWithoutUniversityNestedInput
    invites?: FacultyInviteUncheckedUpdateManyWithoutUniversityNestedInput
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    university?: UniversityCreateNestedOneWithoutUsersInput
    facultyProfile?: FacultyProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    universityId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facultyProfile?: FacultyProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneWithoutUsersNestedInput
    facultyProfile?: FacultyProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultyProfile?: FacultyProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DepartmentCreateManyUniversityInput = {
    id?: string
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyUniversityInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultyInviteCreateManyUniversityInput = {
    id?: string
    email: string
    role?: $Enums.UserRole
    departmentId?: string | null
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type NaacReportCreateManyUniversityInput = {
    id?: string
    academicYear: string
    reportType: string
    fileUrl?: string | null
    generatedAt?: Date | string
  }

  export type DepartmentUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultyProfiles?: FacultyProfileUpdateManyWithoutDepartmentNestedInput
    invites?: FacultyInviteUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultyProfiles?: FacultyProfileUncheckedUpdateManyWithoutDepartmentNestedInput
    invites?: FacultyInviteUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultyProfile?: FacultyProfileUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facultyProfile?: FacultyProfileUncheckedUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyInviteUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutInvitesNestedInput
  }

  export type FacultyInviteUncheckedUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyInviteUncheckedUpdateManyWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NaacReportUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NaacReportUncheckedUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NaacReportUncheckedUpdateManyWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyProfileCreateManyDepartmentInput = {
    id?: string
    userId: string
    fullName: string
    designation: string
    qualification?: string | null
    joiningDate?: Date | string | null
    avatarUrl?: string | null
    bio?: string | null
    openAlexId?: string | null
    orcid?: string | null
    scopusAuthorId?: string | null
    vidwanId?: string | null
    googleScholar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultyInviteCreateManyDepartmentInput = {
    id?: string
    email: string
    role?: $Enums.UserRole
    universityId: string
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type FacultyProfileUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    scopusAuthorId?: NullableStringFieldUpdateOperationsInput | string | null
    vidwanId?: NullableStringFieldUpdateOperationsInput | string | null
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFacultyProfileNestedInput
    authorships?: PublicationAuthorUpdateManyWithoutFacultyProfileNestedInput
  }

  export type FacultyProfileUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    scopusAuthorId?: NullableStringFieldUpdateOperationsInput | string | null
    vidwanId?: NullableStringFieldUpdateOperationsInput | string | null
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorships?: PublicationAuthorUncheckedUpdateManyWithoutFacultyProfileNestedInput
  }

  export type FacultyProfileUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    openAlexId?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    scopusAuthorId?: NullableStringFieldUpdateOperationsInput | string | null
    vidwanId?: NullableStringFieldUpdateOperationsInput | string | null
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyInviteUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type FacultyInviteUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    universityId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyInviteUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    universityId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationAuthorCreateManyFacultyProfileInput = {
    id?: string
    publicationId: string
    authorPosition?: number
    isCorresponding?: boolean
  }

  export type PublicationAuthorUpdateWithoutFacultyProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorPosition?: IntFieldUpdateOperationsInput | number
    isCorresponding?: BoolFieldUpdateOperationsInput | boolean
    publication?: PublicationUpdateOneRequiredWithoutAuthorsNestedInput
  }

  export type PublicationAuthorUncheckedUpdateWithoutFacultyProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicationId?: StringFieldUpdateOperationsInput | string
    authorPosition?: IntFieldUpdateOperationsInput | number
    isCorresponding?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PublicationAuthorUncheckedUpdateManyWithoutFacultyProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicationId?: StringFieldUpdateOperationsInput | string
    authorPosition?: IntFieldUpdateOperationsInput | number
    isCorresponding?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PublicationAuthorCreateManyPublicationInput = {
    id?: string
    facultyProfileId: string
    authorPosition?: number
    isCorresponding?: boolean
  }

  export type NaacPublicationMappingCreateManyPublicationInput = {
    id?: string
    criterionId: string
    academicYear: string
    verifiedByIQAC?: boolean
  }

  export type PublicationAuthorUpdateWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorPosition?: IntFieldUpdateOperationsInput | number
    isCorresponding?: BoolFieldUpdateOperationsInput | boolean
    facultyProfile?: FacultyProfileUpdateOneRequiredWithoutAuthorshipsNestedInput
  }

  export type PublicationAuthorUncheckedUpdateWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    facultyProfileId?: StringFieldUpdateOperationsInput | string
    authorPosition?: IntFieldUpdateOperationsInput | number
    isCorresponding?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PublicationAuthorUncheckedUpdateManyWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    facultyProfileId?: StringFieldUpdateOperationsInput | string
    authorPosition?: IntFieldUpdateOperationsInput | number
    isCorresponding?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NaacPublicationMappingUpdateWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    verifiedByIQAC?: BoolFieldUpdateOperationsInput | boolean
    criterion?: NaacCriterionUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type NaacPublicationMappingUncheckedUpdateWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    criterionId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    verifiedByIQAC?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NaacPublicationMappingUncheckedUpdateManyWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    criterionId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    verifiedByIQAC?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NaacPublicationMappingCreateManyCriterionInput = {
    id?: string
    publicationId: string
    academicYear: string
    verifiedByIQAC?: boolean
  }

  export type NaacPublicationMappingUpdateWithoutCriterionInput = {
    id?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    verifiedByIQAC?: BoolFieldUpdateOperationsInput | boolean
    publication?: PublicationUpdateOneRequiredWithoutNaacMappingsNestedInput
  }

  export type NaacPublicationMappingUncheckedUpdateWithoutCriterionInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicationId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    verifiedByIQAC?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NaacPublicationMappingUncheckedUpdateManyWithoutCriterionInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicationId?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    verifiedByIQAC?: BoolFieldUpdateOperationsInput | boolean
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
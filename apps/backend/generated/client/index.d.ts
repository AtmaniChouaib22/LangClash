
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model GameParticipant
 * 
 */
export type GameParticipant = $Result.DefaultSelection<Prisma.$GameParticipantPayload>
/**
 * Model GameQuestion
 * 
 */
export type GameQuestion = $Result.DefaultSelection<Prisma.$GameQuestionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GameStatus: {
  WAITING_FOR_PLAYERS: 'WAITING_FOR_PLAYERS',
  STARTING: 'STARTING',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]


export const GameType: {
  PVP: 'PVP',
  BOT: 'BOT'
};

export type GameType = (typeof GameType)[keyof typeof GameType]

}

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

export type GameType = $Enums.GameType

export const GameType: typeof $Enums.GameType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameParticipant`: Exposes CRUD operations for the **GameParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameParticipants
    * const gameParticipants = await prisma.gameParticipant.findMany()
    * ```
    */
  get gameParticipant(): Prisma.GameParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameQuestion`: Exposes CRUD operations for the **GameQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameQuestions
    * const gameQuestions = await prisma.gameQuestion.findMany()
    * ```
    */
  get gameQuestion(): Prisma.GameQuestionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    Question: 'Question',
    Game: 'Game',
    GameParticipant: 'GameParticipant',
    GameQuestion: 'GameQuestion'
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
      modelProps: "user" | "question" | "game" | "gameParticipant" | "gameQuestion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      GameParticipant: {
        payload: Prisma.$GameParticipantPayload<ExtArgs>
        fields: Prisma.GameParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameParticipantPayload>
          }
          findFirst: {
            args: Prisma.GameParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameParticipantPayload>
          }
          findMany: {
            args: Prisma.GameParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameParticipantPayload>[]
          }
          create: {
            args: Prisma.GameParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameParticipantPayload>
          }
          createMany: {
            args: Prisma.GameParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameParticipantPayload>[]
          }
          delete: {
            args: Prisma.GameParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameParticipantPayload>
          }
          update: {
            args: Prisma.GameParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameParticipantPayload>
          }
          deleteMany: {
            args: Prisma.GameParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameParticipantPayload>[]
          }
          upsert: {
            args: Prisma.GameParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameParticipantPayload>
          }
          aggregate: {
            args: Prisma.GameParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameParticipant>
          }
          groupBy: {
            args: Prisma.GameParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<GameParticipantCountAggregateOutputType> | number
          }
        }
      }
      GameQuestion: {
        payload: Prisma.$GameQuestionPayload<ExtArgs>
        fields: Prisma.GameQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>
          }
          findFirst: {
            args: Prisma.GameQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>
          }
          findMany: {
            args: Prisma.GameQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>[]
          }
          create: {
            args: Prisma.GameQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>
          }
          createMany: {
            args: Prisma.GameQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>[]
          }
          delete: {
            args: Prisma.GameQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>
          }
          update: {
            args: Prisma.GameQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>
          }
          deleteMany: {
            args: Prisma.GameQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>[]
          }
          upsert: {
            args: Prisma.GameQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameQuestionPayload>
          }
          aggregate: {
            args: Prisma.GameQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameQuestion>
          }
          groupBy: {
            args: Prisma.GameQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<GameQuestionCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    question?: QuestionOmit
    game?: GameOmit
    gameParticipant?: GameParticipantOmit
    gameQuestion?: GameQuestionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    gameParticipants: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameParticipants?: boolean | UserCountOutputTypeCountGameParticipantsArgs
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
  export type UserCountOutputTypeCountGameParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameParticipantWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    gameQuestions: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameQuestions?: boolean | QuestionCountOutputTypeCountGameQuestionsArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountGameQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameQuestionWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    participants: number
    gameQuestions: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | GameCountOutputTypeCountParticipantsArgs
    gameQuestions?: boolean | GameCountOutputTypeCountGameQuestionsArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameParticipantWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameQuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    gamesPlayed: number | null
    gamesWon: number | null
    totalScore: number | null
  }

  export type UserSumAggregateOutputType = {
    gamesPlayed: number | null
    gamesWon: number | null
    totalScore: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    supabaseId: string | null
    email: string | null
    name: string | null
    avatar: string | null
    gamesPlayed: number | null
    gamesWon: number | null
    totalScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    supabaseId: string | null
    email: string | null
    name: string | null
    avatar: string | null
    gamesPlayed: number | null
    gamesWon: number | null
    totalScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    supabaseId: number
    email: number
    name: number
    avatar: number
    gamesPlayed: number
    gamesWon: number
    totalScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    gamesPlayed?: true
    gamesWon?: true
    totalScore?: true
  }

  export type UserSumAggregateInputType = {
    gamesPlayed?: true
    gamesWon?: true
    totalScore?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    supabaseId?: true
    email?: true
    name?: true
    avatar?: true
    gamesPlayed?: true
    gamesWon?: true
    totalScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    supabaseId?: true
    email?: true
    name?: true
    avatar?: true
    gamesPlayed?: true
    gamesWon?: true
    totalScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    supabaseId?: true
    email?: true
    name?: true
    avatar?: true
    gamesPlayed?: true
    gamesWon?: true
    totalScore?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    supabaseId: string
    email: string
    name: string | null
    avatar: string | null
    gamesPlayed: number
    gamesWon: number
    totalScore: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    supabaseId?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    gamesPlayed?: boolean
    gamesWon?: boolean
    totalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameParticipants?: boolean | User$gameParticipantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseId?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    gamesPlayed?: boolean
    gamesWon?: boolean
    totalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseId?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    gamesPlayed?: boolean
    gamesWon?: boolean
    totalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    supabaseId?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    gamesPlayed?: boolean
    gamesWon?: boolean
    totalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supabaseId" | "email" | "name" | "avatar" | "gamesPlayed" | "gamesWon" | "totalScore" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameParticipants?: boolean | User$gameParticipantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      gameParticipants: Prisma.$GameParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supabaseId: string
      email: string
      name: string | null
      avatar: string | null
      gamesPlayed: number
      gamesWon: number
      totalScore: number
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
    gameParticipants<T extends User$gameParticipantsArgs<ExtArgs> = {}>(args?: Subset<T, User$gameParticipantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly supabaseId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly gamesPlayed: FieldRef<"User", 'Int'>
    readonly gamesWon: FieldRef<"User", 'Int'>
    readonly totalScore: FieldRef<"User", 'Int'>
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
   * User.gameParticipants
   */
  export type User$gameParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantInclude<ExtArgs> | null
    where?: GameParticipantWhereInput
    orderBy?: GameParticipantOrderByWithRelationInput | GameParticipantOrderByWithRelationInput[]
    cursor?: GameParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameParticipantScalarFieldEnum | GameParticipantScalarFieldEnum[]
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
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    correctAnswerIdx: number | null
  }

  export type QuestionSumAggregateOutputType = {
    correctAnswerIdx: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    correctAnswerIdx: number | null
    difficulty: string | null
    category: string | null
    language: string | null
    targetLanguage: string | null
    explanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    correctAnswerIdx: number | null
    difficulty: string | null
    category: string | null
    language: string | null
    targetLanguage: string | null
    explanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    options: number
    correctAnswerIdx: number
    difficulty: number
    category: number
    language: number
    targetLanguage: number
    explanation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    correctAnswerIdx?: true
  }

  export type QuestionSumAggregateInputType = {
    correctAnswerIdx?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    correctAnswerIdx?: true
    difficulty?: true
    category?: true
    language?: true
    targetLanguage?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    correctAnswerIdx?: true
    difficulty?: true
    category?: true
    language?: true
    targetLanguage?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    options?: true
    correctAnswerIdx?: true
    difficulty?: true
    category?: true
    language?: true
    targetLanguage?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    text: string
    options: JsonValue
    correctAnswerIdx: number
    difficulty: string
    category: string
    language: string
    targetLanguage: string
    explanation: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    options?: boolean
    correctAnswerIdx?: boolean
    difficulty?: boolean
    category?: boolean
    language?: boolean
    targetLanguage?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameQuestions?: boolean | Question$gameQuestionsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    options?: boolean
    correctAnswerIdx?: boolean
    difficulty?: boolean
    category?: boolean
    language?: boolean
    targetLanguage?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    options?: boolean
    correctAnswerIdx?: boolean
    difficulty?: boolean
    category?: boolean
    language?: boolean
    targetLanguage?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    options?: boolean
    correctAnswerIdx?: boolean
    difficulty?: boolean
    category?: boolean
    language?: boolean
    targetLanguage?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "options" | "correctAnswerIdx" | "difficulty" | "category" | "language" | "targetLanguage" | "explanation" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameQuestions?: boolean | Question$gameQuestionsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      gameQuestions: Prisma.$GameQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      options: Prisma.JsonValue
      correctAnswerIdx: number
      difficulty: string
      category: string
      language: string
      targetLanguage: string
      explanation: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameQuestions<T extends Question$gameQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$gameQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly options: FieldRef<"Question", 'Json'>
    readonly correctAnswerIdx: FieldRef<"Question", 'Int'>
    readonly difficulty: FieldRef<"Question", 'String'>
    readonly category: FieldRef<"Question", 'String'>
    readonly language: FieldRef<"Question", 'String'>
    readonly targetLanguage: FieldRef<"Question", 'String'>
    readonly explanation: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.gameQuestions
   */
  export type Question$gameQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    where?: GameQuestionWhereInput
    orderBy?: GameQuestionOrderByWithRelationInput | GameQuestionOrderByWithRelationInput[]
    cursor?: GameQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameQuestionScalarFieldEnum | GameQuestionScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    maxPlayers: number | null
    currentQuestion: number | null
    questionsCount: number | null
    timePerQuestion: number | null
  }

  export type GameSumAggregateOutputType = {
    maxPlayers: number | null
    currentQuestion: number | null
    questionsCount: number | null
    timePerQuestion: number | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    status: $Enums.GameStatus | null
    gameType: $Enums.GameType | null
    maxPlayers: number | null
    currentQuestion: number | null
    questionsCount: number | null
    timePerQuestion: number | null
    startedAt: Date | null
    endedAt: Date | null
    winnerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    status: $Enums.GameStatus | null
    gameType: $Enums.GameType | null
    maxPlayers: number | null
    currentQuestion: number | null
    questionsCount: number | null
    timePerQuestion: number | null
    startedAt: Date | null
    endedAt: Date | null
    winnerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    status: number
    gameType: number
    maxPlayers: number
    currentQuestion: number
    questionsCount: number
    timePerQuestion: number
    startedAt: number
    endedAt: number
    winnerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    maxPlayers?: true
    currentQuestion?: true
    questionsCount?: true
    timePerQuestion?: true
  }

  export type GameSumAggregateInputType = {
    maxPlayers?: true
    currentQuestion?: true
    questionsCount?: true
    timePerQuestion?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    status?: true
    gameType?: true
    maxPlayers?: true
    currentQuestion?: true
    questionsCount?: true
    timePerQuestion?: true
    startedAt?: true
    endedAt?: true
    winnerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    status?: true
    gameType?: true
    maxPlayers?: true
    currentQuestion?: true
    questionsCount?: true
    timePerQuestion?: true
    startedAt?: true
    endedAt?: true
    winnerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    status?: true
    gameType?: true
    maxPlayers?: true
    currentQuestion?: true
    questionsCount?: true
    timePerQuestion?: true
    startedAt?: true
    endedAt?: true
    winnerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    status: $Enums.GameStatus
    gameType: $Enums.GameType
    maxPlayers: number
    currentQuestion: number
    questionsCount: number
    timePerQuestion: number
    startedAt: Date | null
    endedAt: Date | null
    winnerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    gameType?: boolean
    maxPlayers?: boolean
    currentQuestion?: boolean
    questionsCount?: boolean
    timePerQuestion?: boolean
    startedAt?: boolean
    endedAt?: boolean
    winnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participants?: boolean | Game$participantsArgs<ExtArgs>
    gameQuestions?: boolean | Game$gameQuestionsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    gameType?: boolean
    maxPlayers?: boolean
    currentQuestion?: boolean
    questionsCount?: boolean
    timePerQuestion?: boolean
    startedAt?: boolean
    endedAt?: boolean
    winnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    gameType?: boolean
    maxPlayers?: boolean
    currentQuestion?: boolean
    questionsCount?: boolean
    timePerQuestion?: boolean
    startedAt?: boolean
    endedAt?: boolean
    winnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    status?: boolean
    gameType?: boolean
    maxPlayers?: boolean
    currentQuestion?: boolean
    questionsCount?: boolean
    timePerQuestion?: boolean
    startedAt?: boolean
    endedAt?: boolean
    winnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "gameType" | "maxPlayers" | "currentQuestion" | "questionsCount" | "timePerQuestion" | "startedAt" | "endedAt" | "winnerId" | "createdAt" | "updatedAt", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | Game$participantsArgs<ExtArgs>
    gameQuestions?: boolean | Game$gameQuestionsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      participants: Prisma.$GameParticipantPayload<ExtArgs>[]
      gameQuestions: Prisma.$GameQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.GameStatus
      gameType: $Enums.GameType
      maxPlayers: number
      currentQuestion: number
      questionsCount: number
      timePerQuestion: number
      startedAt: Date | null
      endedAt: Date | null
      winnerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends Game$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Game$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameQuestions<T extends Game$gameQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, Game$gameQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly status: FieldRef<"Game", 'GameStatus'>
    readonly gameType: FieldRef<"Game", 'GameType'>
    readonly maxPlayers: FieldRef<"Game", 'Int'>
    readonly currentQuestion: FieldRef<"Game", 'Int'>
    readonly questionsCount: FieldRef<"Game", 'Int'>
    readonly timePerQuestion: FieldRef<"Game", 'Int'>
    readonly startedAt: FieldRef<"Game", 'DateTime'>
    readonly endedAt: FieldRef<"Game", 'DateTime'>
    readonly winnerId: FieldRef<"Game", 'String'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.participants
   */
  export type Game$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantInclude<ExtArgs> | null
    where?: GameParticipantWhereInput
    orderBy?: GameParticipantOrderByWithRelationInput | GameParticipantOrderByWithRelationInput[]
    cursor?: GameParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameParticipantScalarFieldEnum | GameParticipantScalarFieldEnum[]
  }

  /**
   * Game.gameQuestions
   */
  export type Game$gameQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    where?: GameQuestionWhereInput
    orderBy?: GameQuestionOrderByWithRelationInput | GameQuestionOrderByWithRelationInput[]
    cursor?: GameQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameQuestionScalarFieldEnum | GameQuestionScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model GameParticipant
   */

  export type AggregateGameParticipant = {
    _count: GameParticipantCountAggregateOutputType | null
    _avg: GameParticipantAvgAggregateOutputType | null
    _sum: GameParticipantSumAggregateOutputType | null
    _min: GameParticipantMinAggregateOutputType | null
    _max: GameParticipantMaxAggregateOutputType | null
  }

  export type GameParticipantAvgAggregateOutputType = {
    score: number | null
    currentQuestion: number | null
  }

  export type GameParticipantSumAggregateOutputType = {
    score: number | null
    currentQuestion: number | null
  }

  export type GameParticipantMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    userId: string | null
    isBot: boolean | null
    botName: string | null
    score: number | null
    currentQuestion: number | null
    isReady: boolean | null
    isConnected: boolean | null
    joinedAt: Date | null
  }

  export type GameParticipantMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    userId: string | null
    isBot: boolean | null
    botName: string | null
    score: number | null
    currentQuestion: number | null
    isReady: boolean | null
    isConnected: boolean | null
    joinedAt: Date | null
  }

  export type GameParticipantCountAggregateOutputType = {
    id: number
    gameId: number
    userId: number
    isBot: number
    botName: number
    score: number
    currentQuestion: number
    answers: number
    isReady: number
    isConnected: number
    joinedAt: number
    _all: number
  }


  export type GameParticipantAvgAggregateInputType = {
    score?: true
    currentQuestion?: true
  }

  export type GameParticipantSumAggregateInputType = {
    score?: true
    currentQuestion?: true
  }

  export type GameParticipantMinAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    isBot?: true
    botName?: true
    score?: true
    currentQuestion?: true
    isReady?: true
    isConnected?: true
    joinedAt?: true
  }

  export type GameParticipantMaxAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    isBot?: true
    botName?: true
    score?: true
    currentQuestion?: true
    isReady?: true
    isConnected?: true
    joinedAt?: true
  }

  export type GameParticipantCountAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    isBot?: true
    botName?: true
    score?: true
    currentQuestion?: true
    answers?: true
    isReady?: true
    isConnected?: true
    joinedAt?: true
    _all?: true
  }

  export type GameParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameParticipant to aggregate.
     */
    where?: GameParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameParticipants to fetch.
     */
    orderBy?: GameParticipantOrderByWithRelationInput | GameParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameParticipants
    **/
    _count?: true | GameParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameParticipantMaxAggregateInputType
  }

  export type GetGameParticipantAggregateType<T extends GameParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateGameParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameParticipant[P]>
      : GetScalarType<T[P], AggregateGameParticipant[P]>
  }




  export type GameParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameParticipantWhereInput
    orderBy?: GameParticipantOrderByWithAggregationInput | GameParticipantOrderByWithAggregationInput[]
    by: GameParticipantScalarFieldEnum[] | GameParticipantScalarFieldEnum
    having?: GameParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameParticipantCountAggregateInputType | true
    _avg?: GameParticipantAvgAggregateInputType
    _sum?: GameParticipantSumAggregateInputType
    _min?: GameParticipantMinAggregateInputType
    _max?: GameParticipantMaxAggregateInputType
  }

  export type GameParticipantGroupByOutputType = {
    id: string
    gameId: string
    userId: string | null
    isBot: boolean
    botName: string | null
    score: number
    currentQuestion: number
    answers: JsonValue
    isReady: boolean
    isConnected: boolean
    joinedAt: Date
    _count: GameParticipantCountAggregateOutputType | null
    _avg: GameParticipantAvgAggregateOutputType | null
    _sum: GameParticipantSumAggregateOutputType | null
    _min: GameParticipantMinAggregateOutputType | null
    _max: GameParticipantMaxAggregateOutputType | null
  }

  type GetGameParticipantGroupByPayload<T extends GameParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], GameParticipantGroupByOutputType[P]>
        }
      >
    >


  export type GameParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    isBot?: boolean
    botName?: boolean
    score?: boolean
    currentQuestion?: boolean
    answers?: boolean
    isReady?: boolean
    isConnected?: boolean
    joinedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | GameParticipant$userArgs<ExtArgs>
  }, ExtArgs["result"]["gameParticipant"]>

  export type GameParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    isBot?: boolean
    botName?: boolean
    score?: boolean
    currentQuestion?: boolean
    answers?: boolean
    isReady?: boolean
    isConnected?: boolean
    joinedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | GameParticipant$userArgs<ExtArgs>
  }, ExtArgs["result"]["gameParticipant"]>

  export type GameParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    isBot?: boolean
    botName?: boolean
    score?: boolean
    currentQuestion?: boolean
    answers?: boolean
    isReady?: boolean
    isConnected?: boolean
    joinedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | GameParticipant$userArgs<ExtArgs>
  }, ExtArgs["result"]["gameParticipant"]>

  export type GameParticipantSelectScalar = {
    id?: boolean
    gameId?: boolean
    userId?: boolean
    isBot?: boolean
    botName?: boolean
    score?: boolean
    currentQuestion?: boolean
    answers?: boolean
    isReady?: boolean
    isConnected?: boolean
    joinedAt?: boolean
  }

  export type GameParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "userId" | "isBot" | "botName" | "score" | "currentQuestion" | "answers" | "isReady" | "isConnected" | "joinedAt", ExtArgs["result"]["gameParticipant"]>
  export type GameParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | GameParticipant$userArgs<ExtArgs>
  }
  export type GameParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | GameParticipant$userArgs<ExtArgs>
  }
  export type GameParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | GameParticipant$userArgs<ExtArgs>
  }

  export type $GameParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameParticipant"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      userId: string | null
      isBot: boolean
      botName: string | null
      score: number
      currentQuestion: number
      answers: Prisma.JsonValue
      isReady: boolean
      isConnected: boolean
      joinedAt: Date
    }, ExtArgs["result"]["gameParticipant"]>
    composites: {}
  }

  type GameParticipantGetPayload<S extends boolean | null | undefined | GameParticipantDefaultArgs> = $Result.GetResult<Prisma.$GameParticipantPayload, S>

  type GameParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameParticipantCountAggregateInputType | true
    }

  export interface GameParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameParticipant'], meta: { name: 'GameParticipant' } }
    /**
     * Find zero or one GameParticipant that matches the filter.
     * @param {GameParticipantFindUniqueArgs} args - Arguments to find a GameParticipant
     * @example
     * // Get one GameParticipant
     * const gameParticipant = await prisma.gameParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameParticipantFindUniqueArgs>(args: SelectSubset<T, GameParticipantFindUniqueArgs<ExtArgs>>): Prisma__GameParticipantClient<$Result.GetResult<Prisma.$GameParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameParticipantFindUniqueOrThrowArgs} args - Arguments to find a GameParticipant
     * @example
     * // Get one GameParticipant
     * const gameParticipant = await prisma.gameParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, GameParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameParticipantClient<$Result.GetResult<Prisma.$GameParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameParticipantFindFirstArgs} args - Arguments to find a GameParticipant
     * @example
     * // Get one GameParticipant
     * const gameParticipant = await prisma.gameParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameParticipantFindFirstArgs>(args?: SelectSubset<T, GameParticipantFindFirstArgs<ExtArgs>>): Prisma__GameParticipantClient<$Result.GetResult<Prisma.$GameParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameParticipantFindFirstOrThrowArgs} args - Arguments to find a GameParticipant
     * @example
     * // Get one GameParticipant
     * const gameParticipant = await prisma.gameParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, GameParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameParticipantClient<$Result.GetResult<Prisma.$GameParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameParticipants
     * const gameParticipants = await prisma.gameParticipant.findMany()
     * 
     * // Get first 10 GameParticipants
     * const gameParticipants = await prisma.gameParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameParticipantWithIdOnly = await prisma.gameParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameParticipantFindManyArgs>(args?: SelectSubset<T, GameParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameParticipant.
     * @param {GameParticipantCreateArgs} args - Arguments to create a GameParticipant.
     * @example
     * // Create one GameParticipant
     * const GameParticipant = await prisma.gameParticipant.create({
     *   data: {
     *     // ... data to create a GameParticipant
     *   }
     * })
     * 
     */
    create<T extends GameParticipantCreateArgs>(args: SelectSubset<T, GameParticipantCreateArgs<ExtArgs>>): Prisma__GameParticipantClient<$Result.GetResult<Prisma.$GameParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameParticipants.
     * @param {GameParticipantCreateManyArgs} args - Arguments to create many GameParticipants.
     * @example
     * // Create many GameParticipants
     * const gameParticipant = await prisma.gameParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameParticipantCreateManyArgs>(args?: SelectSubset<T, GameParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameParticipants and returns the data saved in the database.
     * @param {GameParticipantCreateManyAndReturnArgs} args - Arguments to create many GameParticipants.
     * @example
     * // Create many GameParticipants
     * const gameParticipant = await prisma.gameParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameParticipants and only return the `id`
     * const gameParticipantWithIdOnly = await prisma.gameParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, GameParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameParticipant.
     * @param {GameParticipantDeleteArgs} args - Arguments to delete one GameParticipant.
     * @example
     * // Delete one GameParticipant
     * const GameParticipant = await prisma.gameParticipant.delete({
     *   where: {
     *     // ... filter to delete one GameParticipant
     *   }
     * })
     * 
     */
    delete<T extends GameParticipantDeleteArgs>(args: SelectSubset<T, GameParticipantDeleteArgs<ExtArgs>>): Prisma__GameParticipantClient<$Result.GetResult<Prisma.$GameParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameParticipant.
     * @param {GameParticipantUpdateArgs} args - Arguments to update one GameParticipant.
     * @example
     * // Update one GameParticipant
     * const gameParticipant = await prisma.gameParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameParticipantUpdateArgs>(args: SelectSubset<T, GameParticipantUpdateArgs<ExtArgs>>): Prisma__GameParticipantClient<$Result.GetResult<Prisma.$GameParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameParticipants.
     * @param {GameParticipantDeleteManyArgs} args - Arguments to filter GameParticipants to delete.
     * @example
     * // Delete a few GameParticipants
     * const { count } = await prisma.gameParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameParticipantDeleteManyArgs>(args?: SelectSubset<T, GameParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameParticipants
     * const gameParticipant = await prisma.gameParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameParticipantUpdateManyArgs>(args: SelectSubset<T, GameParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameParticipants and returns the data updated in the database.
     * @param {GameParticipantUpdateManyAndReturnArgs} args - Arguments to update many GameParticipants.
     * @example
     * // Update many GameParticipants
     * const gameParticipant = await prisma.gameParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameParticipants and only return the `id`
     * const gameParticipantWithIdOnly = await prisma.gameParticipant.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, GameParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameParticipant.
     * @param {GameParticipantUpsertArgs} args - Arguments to update or create a GameParticipant.
     * @example
     * // Update or create a GameParticipant
     * const gameParticipant = await prisma.gameParticipant.upsert({
     *   create: {
     *     // ... data to create a GameParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameParticipant we want to update
     *   }
     * })
     */
    upsert<T extends GameParticipantUpsertArgs>(args: SelectSubset<T, GameParticipantUpsertArgs<ExtArgs>>): Prisma__GameParticipantClient<$Result.GetResult<Prisma.$GameParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameParticipantCountArgs} args - Arguments to filter GameParticipants to count.
     * @example
     * // Count the number of GameParticipants
     * const count = await prisma.gameParticipant.count({
     *   where: {
     *     // ... the filter for the GameParticipants we want to count
     *   }
     * })
    **/
    count<T extends GameParticipantCountArgs>(
      args?: Subset<T, GameParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameParticipantAggregateArgs>(args: Subset<T, GameParticipantAggregateArgs>): Prisma.PrismaPromise<GetGameParticipantAggregateType<T>>

    /**
     * Group by GameParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameParticipantGroupByArgs} args - Group by arguments.
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
      T extends GameParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameParticipantGroupByArgs['orderBy'] }
        : { orderBy?: GameParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameParticipant model
   */
  readonly fields: GameParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends GameParticipant$userArgs<ExtArgs> = {}>(args?: Subset<T, GameParticipant$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GameParticipant model
   */
  interface GameParticipantFieldRefs {
    readonly id: FieldRef<"GameParticipant", 'String'>
    readonly gameId: FieldRef<"GameParticipant", 'String'>
    readonly userId: FieldRef<"GameParticipant", 'String'>
    readonly isBot: FieldRef<"GameParticipant", 'Boolean'>
    readonly botName: FieldRef<"GameParticipant", 'String'>
    readonly score: FieldRef<"GameParticipant", 'Int'>
    readonly currentQuestion: FieldRef<"GameParticipant", 'Int'>
    readonly answers: FieldRef<"GameParticipant", 'Json'>
    readonly isReady: FieldRef<"GameParticipant", 'Boolean'>
    readonly isConnected: FieldRef<"GameParticipant", 'Boolean'>
    readonly joinedAt: FieldRef<"GameParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameParticipant findUnique
   */
  export type GameParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantInclude<ExtArgs> | null
    /**
     * Filter, which GameParticipant to fetch.
     */
    where: GameParticipantWhereUniqueInput
  }

  /**
   * GameParticipant findUniqueOrThrow
   */
  export type GameParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantInclude<ExtArgs> | null
    /**
     * Filter, which GameParticipant to fetch.
     */
    where: GameParticipantWhereUniqueInput
  }

  /**
   * GameParticipant findFirst
   */
  export type GameParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantInclude<ExtArgs> | null
    /**
     * Filter, which GameParticipant to fetch.
     */
    where?: GameParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameParticipants to fetch.
     */
    orderBy?: GameParticipantOrderByWithRelationInput | GameParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameParticipants.
     */
    cursor?: GameParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameParticipants.
     */
    distinct?: GameParticipantScalarFieldEnum | GameParticipantScalarFieldEnum[]
  }

  /**
   * GameParticipant findFirstOrThrow
   */
  export type GameParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantInclude<ExtArgs> | null
    /**
     * Filter, which GameParticipant to fetch.
     */
    where?: GameParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameParticipants to fetch.
     */
    orderBy?: GameParticipantOrderByWithRelationInput | GameParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameParticipants.
     */
    cursor?: GameParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameParticipants.
     */
    distinct?: GameParticipantScalarFieldEnum | GameParticipantScalarFieldEnum[]
  }

  /**
   * GameParticipant findMany
   */
  export type GameParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantInclude<ExtArgs> | null
    /**
     * Filter, which GameParticipants to fetch.
     */
    where?: GameParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameParticipants to fetch.
     */
    orderBy?: GameParticipantOrderByWithRelationInput | GameParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameParticipants.
     */
    cursor?: GameParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameParticipants.
     */
    skip?: number
    distinct?: GameParticipantScalarFieldEnum | GameParticipantScalarFieldEnum[]
  }

  /**
   * GameParticipant create
   */
  export type GameParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a GameParticipant.
     */
    data: XOR<GameParticipantCreateInput, GameParticipantUncheckedCreateInput>
  }

  /**
   * GameParticipant createMany
   */
  export type GameParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameParticipants.
     */
    data: GameParticipantCreateManyInput | GameParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameParticipant createManyAndReturn
   */
  export type GameParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many GameParticipants.
     */
    data: GameParticipantCreateManyInput | GameParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameParticipant update
   */
  export type GameParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a GameParticipant.
     */
    data: XOR<GameParticipantUpdateInput, GameParticipantUncheckedUpdateInput>
    /**
     * Choose, which GameParticipant to update.
     */
    where: GameParticipantWhereUniqueInput
  }

  /**
   * GameParticipant updateMany
   */
  export type GameParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameParticipants.
     */
    data: XOR<GameParticipantUpdateManyMutationInput, GameParticipantUncheckedUpdateManyInput>
    /**
     * Filter which GameParticipants to update
     */
    where?: GameParticipantWhereInput
    /**
     * Limit how many GameParticipants to update.
     */
    limit?: number
  }

  /**
   * GameParticipant updateManyAndReturn
   */
  export type GameParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * The data used to update GameParticipants.
     */
    data: XOR<GameParticipantUpdateManyMutationInput, GameParticipantUncheckedUpdateManyInput>
    /**
     * Filter which GameParticipants to update
     */
    where?: GameParticipantWhereInput
    /**
     * Limit how many GameParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameParticipant upsert
   */
  export type GameParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the GameParticipant to update in case it exists.
     */
    where: GameParticipantWhereUniqueInput
    /**
     * In case the GameParticipant found by the `where` argument doesn't exist, create a new GameParticipant with this data.
     */
    create: XOR<GameParticipantCreateInput, GameParticipantUncheckedCreateInput>
    /**
     * In case the GameParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameParticipantUpdateInput, GameParticipantUncheckedUpdateInput>
  }

  /**
   * GameParticipant delete
   */
  export type GameParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantInclude<ExtArgs> | null
    /**
     * Filter which GameParticipant to delete.
     */
    where: GameParticipantWhereUniqueInput
  }

  /**
   * GameParticipant deleteMany
   */
  export type GameParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameParticipants to delete
     */
    where?: GameParticipantWhereInput
    /**
     * Limit how many GameParticipants to delete.
     */
    limit?: number
  }

  /**
   * GameParticipant.user
   */
  export type GameParticipant$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * GameParticipant without action
   */
  export type GameParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameParticipant
     */
    select?: GameParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameParticipant
     */
    omit?: GameParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameParticipantInclude<ExtArgs> | null
  }


  /**
   * Model GameQuestion
   */

  export type AggregateGameQuestion = {
    _count: GameQuestionCountAggregateOutputType | null
    _avg: GameQuestionAvgAggregateOutputType | null
    _sum: GameQuestionSumAggregateOutputType | null
    _min: GameQuestionMinAggregateOutputType | null
    _max: GameQuestionMaxAggregateOutputType | null
  }

  export type GameQuestionAvgAggregateOutputType = {
    order: number | null
  }

  export type GameQuestionSumAggregateOutputType = {
    order: number | null
  }

  export type GameQuestionMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    questionId: string | null
    order: number | null
  }

  export type GameQuestionMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    questionId: string | null
    order: number | null
  }

  export type GameQuestionCountAggregateOutputType = {
    id: number
    gameId: number
    questionId: number
    order: number
    _all: number
  }


  export type GameQuestionAvgAggregateInputType = {
    order?: true
  }

  export type GameQuestionSumAggregateInputType = {
    order?: true
  }

  export type GameQuestionMinAggregateInputType = {
    id?: true
    gameId?: true
    questionId?: true
    order?: true
  }

  export type GameQuestionMaxAggregateInputType = {
    id?: true
    gameId?: true
    questionId?: true
    order?: true
  }

  export type GameQuestionCountAggregateInputType = {
    id?: true
    gameId?: true
    questionId?: true
    order?: true
    _all?: true
  }

  export type GameQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameQuestion to aggregate.
     */
    where?: GameQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameQuestions to fetch.
     */
    orderBy?: GameQuestionOrderByWithRelationInput | GameQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameQuestions
    **/
    _count?: true | GameQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameQuestionMaxAggregateInputType
  }

  export type GetGameQuestionAggregateType<T extends GameQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameQuestion[P]>
      : GetScalarType<T[P], AggregateGameQuestion[P]>
  }




  export type GameQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameQuestionWhereInput
    orderBy?: GameQuestionOrderByWithAggregationInput | GameQuestionOrderByWithAggregationInput[]
    by: GameQuestionScalarFieldEnum[] | GameQuestionScalarFieldEnum
    having?: GameQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameQuestionCountAggregateInputType | true
    _avg?: GameQuestionAvgAggregateInputType
    _sum?: GameQuestionSumAggregateInputType
    _min?: GameQuestionMinAggregateInputType
    _max?: GameQuestionMaxAggregateInputType
  }

  export type GameQuestionGroupByOutputType = {
    id: string
    gameId: string
    questionId: string
    order: number
    _count: GameQuestionCountAggregateOutputType | null
    _avg: GameQuestionAvgAggregateOutputType | null
    _sum: GameQuestionSumAggregateOutputType | null
    _min: GameQuestionMinAggregateOutputType | null
    _max: GameQuestionMaxAggregateOutputType | null
  }

  type GetGameQuestionGroupByPayload<T extends GameQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], GameQuestionGroupByOutputType[P]>
        }
      >
    >


  export type GameQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    questionId?: boolean
    order?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameQuestion"]>

  export type GameQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    questionId?: boolean
    order?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameQuestion"]>

  export type GameQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    questionId?: boolean
    order?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameQuestion"]>

  export type GameQuestionSelectScalar = {
    id?: boolean
    gameId?: boolean
    questionId?: boolean
    order?: boolean
  }

  export type GameQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "questionId" | "order", ExtArgs["result"]["gameQuestion"]>
  export type GameQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type GameQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type GameQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $GameQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameQuestion"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      questionId: string
      order: number
    }, ExtArgs["result"]["gameQuestion"]>
    composites: {}
  }

  type GameQuestionGetPayload<S extends boolean | null | undefined | GameQuestionDefaultArgs> = $Result.GetResult<Prisma.$GameQuestionPayload, S>

  type GameQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameQuestionCountAggregateInputType | true
    }

  export interface GameQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameQuestion'], meta: { name: 'GameQuestion' } }
    /**
     * Find zero or one GameQuestion that matches the filter.
     * @param {GameQuestionFindUniqueArgs} args - Arguments to find a GameQuestion
     * @example
     * // Get one GameQuestion
     * const gameQuestion = await prisma.gameQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameQuestionFindUniqueArgs>(args: SelectSubset<T, GameQuestionFindUniqueArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameQuestionFindUniqueOrThrowArgs} args - Arguments to find a GameQuestion
     * @example
     * // Get one GameQuestion
     * const gameQuestion = await prisma.gameQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionFindFirstArgs} args - Arguments to find a GameQuestion
     * @example
     * // Get one GameQuestion
     * const gameQuestion = await prisma.gameQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameQuestionFindFirstArgs>(args?: SelectSubset<T, GameQuestionFindFirstArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionFindFirstOrThrowArgs} args - Arguments to find a GameQuestion
     * @example
     * // Get one GameQuestion
     * const gameQuestion = await prisma.gameQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameQuestions
     * const gameQuestions = await prisma.gameQuestion.findMany()
     * 
     * // Get first 10 GameQuestions
     * const gameQuestions = await prisma.gameQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameQuestionWithIdOnly = await prisma.gameQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameQuestionFindManyArgs>(args?: SelectSubset<T, GameQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameQuestion.
     * @param {GameQuestionCreateArgs} args - Arguments to create a GameQuestion.
     * @example
     * // Create one GameQuestion
     * const GameQuestion = await prisma.gameQuestion.create({
     *   data: {
     *     // ... data to create a GameQuestion
     *   }
     * })
     * 
     */
    create<T extends GameQuestionCreateArgs>(args: SelectSubset<T, GameQuestionCreateArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameQuestions.
     * @param {GameQuestionCreateManyArgs} args - Arguments to create many GameQuestions.
     * @example
     * // Create many GameQuestions
     * const gameQuestion = await prisma.gameQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameQuestionCreateManyArgs>(args?: SelectSubset<T, GameQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameQuestions and returns the data saved in the database.
     * @param {GameQuestionCreateManyAndReturnArgs} args - Arguments to create many GameQuestions.
     * @example
     * // Create many GameQuestions
     * const gameQuestion = await prisma.gameQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameQuestions and only return the `id`
     * const gameQuestionWithIdOnly = await prisma.gameQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameQuestion.
     * @param {GameQuestionDeleteArgs} args - Arguments to delete one GameQuestion.
     * @example
     * // Delete one GameQuestion
     * const GameQuestion = await prisma.gameQuestion.delete({
     *   where: {
     *     // ... filter to delete one GameQuestion
     *   }
     * })
     * 
     */
    delete<T extends GameQuestionDeleteArgs>(args: SelectSubset<T, GameQuestionDeleteArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameQuestion.
     * @param {GameQuestionUpdateArgs} args - Arguments to update one GameQuestion.
     * @example
     * // Update one GameQuestion
     * const gameQuestion = await prisma.gameQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameQuestionUpdateArgs>(args: SelectSubset<T, GameQuestionUpdateArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameQuestions.
     * @param {GameQuestionDeleteManyArgs} args - Arguments to filter GameQuestions to delete.
     * @example
     * // Delete a few GameQuestions
     * const { count } = await prisma.gameQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameQuestionDeleteManyArgs>(args?: SelectSubset<T, GameQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameQuestions
     * const gameQuestion = await prisma.gameQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameQuestionUpdateManyArgs>(args: SelectSubset<T, GameQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameQuestions and returns the data updated in the database.
     * @param {GameQuestionUpdateManyAndReturnArgs} args - Arguments to update many GameQuestions.
     * @example
     * // Update many GameQuestions
     * const gameQuestion = await prisma.gameQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameQuestions and only return the `id`
     * const gameQuestionWithIdOnly = await prisma.gameQuestion.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, GameQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameQuestion.
     * @param {GameQuestionUpsertArgs} args - Arguments to update or create a GameQuestion.
     * @example
     * // Update or create a GameQuestion
     * const gameQuestion = await prisma.gameQuestion.upsert({
     *   create: {
     *     // ... data to create a GameQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameQuestion we want to update
     *   }
     * })
     */
    upsert<T extends GameQuestionUpsertArgs>(args: SelectSubset<T, GameQuestionUpsertArgs<ExtArgs>>): Prisma__GameQuestionClient<$Result.GetResult<Prisma.$GameQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionCountArgs} args - Arguments to filter GameQuestions to count.
     * @example
     * // Count the number of GameQuestions
     * const count = await prisma.gameQuestion.count({
     *   where: {
     *     // ... the filter for the GameQuestions we want to count
     *   }
     * })
    **/
    count<T extends GameQuestionCountArgs>(
      args?: Subset<T, GameQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameQuestionAggregateArgs>(args: Subset<T, GameQuestionAggregateArgs>): Prisma.PrismaPromise<GetGameQuestionAggregateType<T>>

    /**
     * Group by GameQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameQuestionGroupByArgs} args - Group by arguments.
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
      T extends GameQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameQuestionGroupByArgs['orderBy'] }
        : { orderBy?: GameQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameQuestion model
   */
  readonly fields: GameQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GameQuestion model
   */
  interface GameQuestionFieldRefs {
    readonly id: FieldRef<"GameQuestion", 'String'>
    readonly gameId: FieldRef<"GameQuestion", 'String'>
    readonly questionId: FieldRef<"GameQuestion", 'String'>
    readonly order: FieldRef<"GameQuestion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GameQuestion findUnique
   */
  export type GameQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GameQuestion to fetch.
     */
    where: GameQuestionWhereUniqueInput
  }

  /**
   * GameQuestion findUniqueOrThrow
   */
  export type GameQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GameQuestion to fetch.
     */
    where: GameQuestionWhereUniqueInput
  }

  /**
   * GameQuestion findFirst
   */
  export type GameQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GameQuestion to fetch.
     */
    where?: GameQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameQuestions to fetch.
     */
    orderBy?: GameQuestionOrderByWithRelationInput | GameQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameQuestions.
     */
    cursor?: GameQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameQuestions.
     */
    distinct?: GameQuestionScalarFieldEnum | GameQuestionScalarFieldEnum[]
  }

  /**
   * GameQuestion findFirstOrThrow
   */
  export type GameQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GameQuestion to fetch.
     */
    where?: GameQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameQuestions to fetch.
     */
    orderBy?: GameQuestionOrderByWithRelationInput | GameQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameQuestions.
     */
    cursor?: GameQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameQuestions.
     */
    distinct?: GameQuestionScalarFieldEnum | GameQuestionScalarFieldEnum[]
  }

  /**
   * GameQuestion findMany
   */
  export type GameQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GameQuestions to fetch.
     */
    where?: GameQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameQuestions to fetch.
     */
    orderBy?: GameQuestionOrderByWithRelationInput | GameQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameQuestions.
     */
    cursor?: GameQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameQuestions.
     */
    skip?: number
    distinct?: GameQuestionScalarFieldEnum | GameQuestionScalarFieldEnum[]
  }

  /**
   * GameQuestion create
   */
  export type GameQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameQuestion.
     */
    data: XOR<GameQuestionCreateInput, GameQuestionUncheckedCreateInput>
  }

  /**
   * GameQuestion createMany
   */
  export type GameQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameQuestions.
     */
    data: GameQuestionCreateManyInput | GameQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameQuestion createManyAndReturn
   */
  export type GameQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many GameQuestions.
     */
    data: GameQuestionCreateManyInput | GameQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameQuestion update
   */
  export type GameQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameQuestion.
     */
    data: XOR<GameQuestionUpdateInput, GameQuestionUncheckedUpdateInput>
    /**
     * Choose, which GameQuestion to update.
     */
    where: GameQuestionWhereUniqueInput
  }

  /**
   * GameQuestion updateMany
   */
  export type GameQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameQuestions.
     */
    data: XOR<GameQuestionUpdateManyMutationInput, GameQuestionUncheckedUpdateManyInput>
    /**
     * Filter which GameQuestions to update
     */
    where?: GameQuestionWhereInput
    /**
     * Limit how many GameQuestions to update.
     */
    limit?: number
  }

  /**
   * GameQuestion updateManyAndReturn
   */
  export type GameQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * The data used to update GameQuestions.
     */
    data: XOR<GameQuestionUpdateManyMutationInput, GameQuestionUncheckedUpdateManyInput>
    /**
     * Filter which GameQuestions to update
     */
    where?: GameQuestionWhereInput
    /**
     * Limit how many GameQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameQuestion upsert
   */
  export type GameQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameQuestion to update in case it exists.
     */
    where: GameQuestionWhereUniqueInput
    /**
     * In case the GameQuestion found by the `where` argument doesn't exist, create a new GameQuestion with this data.
     */
    create: XOR<GameQuestionCreateInput, GameQuestionUncheckedCreateInput>
    /**
     * In case the GameQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameQuestionUpdateInput, GameQuestionUncheckedUpdateInput>
  }

  /**
   * GameQuestion delete
   */
  export type GameQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
    /**
     * Filter which GameQuestion to delete.
     */
    where: GameQuestionWhereUniqueInput
  }

  /**
   * GameQuestion deleteMany
   */
  export type GameQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameQuestions to delete
     */
    where?: GameQuestionWhereInput
    /**
     * Limit how many GameQuestions to delete.
     */
    limit?: number
  }

  /**
   * GameQuestion without action
   */
  export type GameQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameQuestion
     */
    select?: GameQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameQuestion
     */
    omit?: GameQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameQuestionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    supabaseId: 'supabaseId',
    email: 'email',
    name: 'name',
    avatar: 'avatar',
    gamesPlayed: 'gamesPlayed',
    gamesWon: 'gamesWon',
    totalScore: 'totalScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    options: 'options',
    correctAnswerIdx: 'correctAnswerIdx',
    difficulty: 'difficulty',
    category: 'category',
    language: 'language',
    targetLanguage: 'targetLanguage',
    explanation: 'explanation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    status: 'status',
    gameType: 'gameType',
    maxPlayers: 'maxPlayers',
    currentQuestion: 'currentQuestion',
    questionsCount: 'questionsCount',
    timePerQuestion: 'timePerQuestion',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    winnerId: 'winnerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GameParticipantScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    userId: 'userId',
    isBot: 'isBot',
    botName: 'botName',
    score: 'score',
    currentQuestion: 'currentQuestion',
    answers: 'answers',
    isReady: 'isReady',
    isConnected: 'isConnected',
    joinedAt: 'joinedAt'
  };

  export type GameParticipantScalarFieldEnum = (typeof GameParticipantScalarFieldEnum)[keyof typeof GameParticipantScalarFieldEnum]


  export const GameQuestionScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    questionId: 'questionId',
    order: 'order'
  };

  export type GameQuestionScalarFieldEnum = (typeof GameQuestionScalarFieldEnum)[keyof typeof GameQuestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'GameStatus[]'
   */
  export type ListEnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus[]'>
    


  /**
   * Reference to a field of type 'GameType'
   */
  export type EnumGameTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameType'>
    


  /**
   * Reference to a field of type 'GameType[]'
   */
  export type ListEnumGameTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    supabaseId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    gamesPlayed?: IntFilter<"User"> | number
    gamesWon?: IntFilter<"User"> | number
    totalScore?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    gameParticipants?: GameParticipantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    supabaseId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameParticipants?: GameParticipantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    supabaseId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    gamesPlayed?: IntFilter<"User"> | number
    gamesWon?: IntFilter<"User"> | number
    totalScore?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    gameParticipants?: GameParticipantListRelationFilter
  }, "id" | "supabaseId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    supabaseId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    supabaseId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    gamesPlayed?: IntWithAggregatesFilter<"User"> | number
    gamesWon?: IntWithAggregatesFilter<"User"> | number
    totalScore?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    options?: JsonFilter<"Question">
    correctAnswerIdx?: IntFilter<"Question"> | number
    difficulty?: StringFilter<"Question"> | string
    category?: StringFilter<"Question"> | string
    language?: StringFilter<"Question"> | string
    targetLanguage?: StringFilter<"Question"> | string
    explanation?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    gameQuestions?: GameQuestionListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIdx?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    language?: SortOrder
    targetLanguage?: SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameQuestions?: GameQuestionOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    options?: JsonFilter<"Question">
    correctAnswerIdx?: IntFilter<"Question"> | number
    difficulty?: StringFilter<"Question"> | string
    category?: StringFilter<"Question"> | string
    language?: StringFilter<"Question"> | string
    targetLanguage?: StringFilter<"Question"> | string
    explanation?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    gameQuestions?: GameQuestionListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIdx?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    language?: SortOrder
    targetLanguage?: SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    options?: JsonWithAggregatesFilter<"Question">
    correctAnswerIdx?: IntWithAggregatesFilter<"Question"> | number
    difficulty?: StringWithAggregatesFilter<"Question"> | string
    category?: StringWithAggregatesFilter<"Question"> | string
    language?: StringWithAggregatesFilter<"Question"> | string
    targetLanguage?: StringWithAggregatesFilter<"Question"> | string
    explanation?: StringNullableWithAggregatesFilter<"Question"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    gameType?: EnumGameTypeFilter<"Game"> | $Enums.GameType
    maxPlayers?: IntFilter<"Game"> | number
    currentQuestion?: IntFilter<"Game"> | number
    questionsCount?: IntFilter<"Game"> | number
    timePerQuestion?: IntFilter<"Game"> | number
    startedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
    winnerId?: StringNullableFilter<"Game"> | string | null
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    participants?: GameParticipantListRelationFilter
    gameQuestions?: GameQuestionListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    gameType?: SortOrder
    maxPlayers?: SortOrder
    currentQuestion?: SortOrder
    questionsCount?: SortOrder
    timePerQuestion?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participants?: GameParticipantOrderByRelationAggregateInput
    gameQuestions?: GameQuestionOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    gameType?: EnumGameTypeFilter<"Game"> | $Enums.GameType
    maxPlayers?: IntFilter<"Game"> | number
    currentQuestion?: IntFilter<"Game"> | number
    questionsCount?: IntFilter<"Game"> | number
    timePerQuestion?: IntFilter<"Game"> | number
    startedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
    winnerId?: StringNullableFilter<"Game"> | string | null
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    participants?: GameParticipantListRelationFilter
    gameQuestions?: GameQuestionListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    gameType?: SortOrder
    maxPlayers?: SortOrder
    currentQuestion?: SortOrder
    questionsCount?: SortOrder
    timePerQuestion?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    status?: EnumGameStatusWithAggregatesFilter<"Game"> | $Enums.GameStatus
    gameType?: EnumGameTypeWithAggregatesFilter<"Game"> | $Enums.GameType
    maxPlayers?: IntWithAggregatesFilter<"Game"> | number
    currentQuestion?: IntWithAggregatesFilter<"Game"> | number
    questionsCount?: IntWithAggregatesFilter<"Game"> | number
    timePerQuestion?: IntWithAggregatesFilter<"Game"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null
    winnerId?: StringNullableWithAggregatesFilter<"Game"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type GameParticipantWhereInput = {
    AND?: GameParticipantWhereInput | GameParticipantWhereInput[]
    OR?: GameParticipantWhereInput[]
    NOT?: GameParticipantWhereInput | GameParticipantWhereInput[]
    id?: StringFilter<"GameParticipant"> | string
    gameId?: StringFilter<"GameParticipant"> | string
    userId?: StringNullableFilter<"GameParticipant"> | string | null
    isBot?: BoolFilter<"GameParticipant"> | boolean
    botName?: StringNullableFilter<"GameParticipant"> | string | null
    score?: IntFilter<"GameParticipant"> | number
    currentQuestion?: IntFilter<"GameParticipant"> | number
    answers?: JsonFilter<"GameParticipant">
    isReady?: BoolFilter<"GameParticipant"> | boolean
    isConnected?: BoolFilter<"GameParticipant"> | boolean
    joinedAt?: DateTimeFilter<"GameParticipant"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type GameParticipantOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrderInput | SortOrder
    isBot?: SortOrder
    botName?: SortOrderInput | SortOrder
    score?: SortOrder
    currentQuestion?: SortOrder
    answers?: SortOrder
    isReady?: SortOrder
    isConnected?: SortOrder
    joinedAt?: SortOrder
    game?: GameOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GameParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameParticipantWhereInput | GameParticipantWhereInput[]
    OR?: GameParticipantWhereInput[]
    NOT?: GameParticipantWhereInput | GameParticipantWhereInput[]
    gameId?: StringFilter<"GameParticipant"> | string
    userId?: StringNullableFilter<"GameParticipant"> | string | null
    isBot?: BoolFilter<"GameParticipant"> | boolean
    botName?: StringNullableFilter<"GameParticipant"> | string | null
    score?: IntFilter<"GameParticipant"> | number
    currentQuestion?: IntFilter<"GameParticipant"> | number
    answers?: JsonFilter<"GameParticipant">
    isReady?: BoolFilter<"GameParticipant"> | boolean
    isConnected?: BoolFilter<"GameParticipant"> | boolean
    joinedAt?: DateTimeFilter<"GameParticipant"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type GameParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrderInput | SortOrder
    isBot?: SortOrder
    botName?: SortOrderInput | SortOrder
    score?: SortOrder
    currentQuestion?: SortOrder
    answers?: SortOrder
    isReady?: SortOrder
    isConnected?: SortOrder
    joinedAt?: SortOrder
    _count?: GameParticipantCountOrderByAggregateInput
    _avg?: GameParticipantAvgOrderByAggregateInput
    _max?: GameParticipantMaxOrderByAggregateInput
    _min?: GameParticipantMinOrderByAggregateInput
    _sum?: GameParticipantSumOrderByAggregateInput
  }

  export type GameParticipantScalarWhereWithAggregatesInput = {
    AND?: GameParticipantScalarWhereWithAggregatesInput | GameParticipantScalarWhereWithAggregatesInput[]
    OR?: GameParticipantScalarWhereWithAggregatesInput[]
    NOT?: GameParticipantScalarWhereWithAggregatesInput | GameParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameParticipant"> | string
    gameId?: StringWithAggregatesFilter<"GameParticipant"> | string
    userId?: StringNullableWithAggregatesFilter<"GameParticipant"> | string | null
    isBot?: BoolWithAggregatesFilter<"GameParticipant"> | boolean
    botName?: StringNullableWithAggregatesFilter<"GameParticipant"> | string | null
    score?: IntWithAggregatesFilter<"GameParticipant"> | number
    currentQuestion?: IntWithAggregatesFilter<"GameParticipant"> | number
    answers?: JsonWithAggregatesFilter<"GameParticipant">
    isReady?: BoolWithAggregatesFilter<"GameParticipant"> | boolean
    isConnected?: BoolWithAggregatesFilter<"GameParticipant"> | boolean
    joinedAt?: DateTimeWithAggregatesFilter<"GameParticipant"> | Date | string
  }

  export type GameQuestionWhereInput = {
    AND?: GameQuestionWhereInput | GameQuestionWhereInput[]
    OR?: GameQuestionWhereInput[]
    NOT?: GameQuestionWhereInput | GameQuestionWhereInput[]
    id?: StringFilter<"GameQuestion"> | string
    gameId?: StringFilter<"GameQuestion"> | string
    questionId?: StringFilter<"GameQuestion"> | string
    order?: IntFilter<"GameQuestion"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type GameQuestionOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    game?: GameOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type GameQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gameId_order?: GameQuestionGameIdOrderCompoundUniqueInput
    AND?: GameQuestionWhereInput | GameQuestionWhereInput[]
    OR?: GameQuestionWhereInput[]
    NOT?: GameQuestionWhereInput | GameQuestionWhereInput[]
    gameId?: StringFilter<"GameQuestion"> | string
    questionId?: StringFilter<"GameQuestion"> | string
    order?: IntFilter<"GameQuestion"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "gameId_order">

  export type GameQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    _count?: GameQuestionCountOrderByAggregateInput
    _avg?: GameQuestionAvgOrderByAggregateInput
    _max?: GameQuestionMaxOrderByAggregateInput
    _min?: GameQuestionMinOrderByAggregateInput
    _sum?: GameQuestionSumOrderByAggregateInput
  }

  export type GameQuestionScalarWhereWithAggregatesInput = {
    AND?: GameQuestionScalarWhereWithAggregatesInput | GameQuestionScalarWhereWithAggregatesInput[]
    OR?: GameQuestionScalarWhereWithAggregatesInput[]
    NOT?: GameQuestionScalarWhereWithAggregatesInput | GameQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameQuestion"> | string
    gameId?: StringWithAggregatesFilter<"GameQuestion"> | string
    questionId?: StringWithAggregatesFilter<"GameQuestion"> | string
    order?: IntWithAggregatesFilter<"GameQuestion"> | number
  }

  export type UserCreateInput = {
    id?: string
    supabaseId: string
    email: string
    name?: string | null
    avatar?: string | null
    gamesPlayed?: number
    gamesWon?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gameParticipants?: GameParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    supabaseId: string
    email: string
    name?: string | null
    avatar?: string | null
    gamesPlayed?: number
    gamesWon?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gameParticipants?: GameParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesWon?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameParticipants?: GameParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesWon?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameParticipants?: GameParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    supabaseId: string
    email: string
    name?: string | null
    avatar?: string | null
    gamesPlayed?: number
    gamesWon?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesWon?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesWon?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswerIdx: number
    difficulty?: string
    category?: string
    language?: string
    targetLanguage?: string
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameQuestions?: GameQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    text: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswerIdx: number
    difficulty?: string
    category?: string
    language?: string
    targetLanguage?: string
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameQuestions?: GameQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswerIdx?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    targetLanguage?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameQuestions?: GameQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswerIdx?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    targetLanguage?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameQuestions?: GameQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    text: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswerIdx: number
    difficulty?: string
    category?: string
    language?: string
    targetLanguage?: string
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswerIdx?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    targetLanguage?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswerIdx?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    targetLanguage?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    status?: $Enums.GameStatus
    gameType?: $Enums.GameType
    maxPlayers?: number
    currentQuestion?: number
    questionsCount?: number
    timePerQuestion?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: GameParticipantCreateNestedManyWithoutGameInput
    gameQuestions?: GameQuestionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    status?: $Enums.GameStatus
    gameType?: $Enums.GameType
    maxPlayers?: number
    currentQuestion?: number
    questionsCount?: number
    timePerQuestion?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: GameParticipantUncheckedCreateNestedManyWithoutGameInput
    gameQuestions?: GameQuestionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    maxPlayers?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: GameParticipantUpdateManyWithoutGameNestedInput
    gameQuestions?: GameQuestionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    maxPlayers?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: GameParticipantUncheckedUpdateManyWithoutGameNestedInput
    gameQuestions?: GameQuestionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    status?: $Enums.GameStatus
    gameType?: $Enums.GameType
    maxPlayers?: number
    currentQuestion?: number
    questionsCount?: number
    timePerQuestion?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    maxPlayers?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    maxPlayers?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameParticipantCreateInput = {
    id?: string
    isBot?: boolean
    botName?: string | null
    score?: number
    currentQuestion?: number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: boolean
    isConnected?: boolean
    joinedAt?: Date | string
    game: GameCreateNestedOneWithoutParticipantsInput
    user?: UserCreateNestedOneWithoutGameParticipantsInput
  }

  export type GameParticipantUncheckedCreateInput = {
    id?: string
    gameId: string
    userId?: string | null
    isBot?: boolean
    botName?: string | null
    score?: number
    currentQuestion?: number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: boolean
    isConnected?: boolean
    joinedAt?: Date | string
  }

  export type GameParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isBot?: BoolFieldUpdateOperationsInput | boolean
    botName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneWithoutGameParticipantsNestedInput
  }

  export type GameParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isBot?: BoolFieldUpdateOperationsInput | boolean
    botName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameParticipantCreateManyInput = {
    id?: string
    gameId: string
    userId?: string | null
    isBot?: boolean
    botName?: string | null
    score?: number
    currentQuestion?: number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: boolean
    isConnected?: boolean
    joinedAt?: Date | string
  }

  export type GameParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isBot?: BoolFieldUpdateOperationsInput | boolean
    botName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isBot?: BoolFieldUpdateOperationsInput | boolean
    botName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameQuestionCreateInput = {
    id?: string
    order: number
    game: GameCreateNestedOneWithoutGameQuestionsInput
    question: QuestionCreateNestedOneWithoutGameQuestionsInput
  }

  export type GameQuestionUncheckedCreateInput = {
    id?: string
    gameId: string
    questionId: string
    order: number
  }

  export type GameQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutGameQuestionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutGameQuestionsNestedInput
  }

  export type GameQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type GameQuestionCreateManyInput = {
    id?: string
    gameId: string
    questionId: string
    order: number
  }

  export type GameQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type GameQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
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

  export type GameParticipantListRelationFilter = {
    every?: GameParticipantWhereInput
    some?: GameParticipantWhereInput
    none?: GameParticipantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    supabaseId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalScore?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    supabaseId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    supabaseId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalScore?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type GameQuestionListRelationFilter = {
    every?: GameQuestionWhereInput
    some?: GameQuestionWhereInput
    none?: GameQuestionWhereInput
  }

  export type GameQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIdx?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    language?: SortOrder
    targetLanguage?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    correctAnswerIdx?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    correctAnswerIdx?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    language?: SortOrder
    targetLanguage?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    correctAnswerIdx?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    language?: SortOrder
    targetLanguage?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    correctAnswerIdx?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type EnumGameTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameType | EnumGameTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameTypeFilter<$PrismaModel> | $Enums.GameType
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

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    gameType?: SortOrder
    maxPlayers?: SortOrder
    currentQuestion?: SortOrder
    questionsCount?: SortOrder
    timePerQuestion?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    maxPlayers?: SortOrder
    currentQuestion?: SortOrder
    questionsCount?: SortOrder
    timePerQuestion?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    gameType?: SortOrder
    maxPlayers?: SortOrder
    currentQuestion?: SortOrder
    questionsCount?: SortOrder
    timePerQuestion?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    gameType?: SortOrder
    maxPlayers?: SortOrder
    currentQuestion?: SortOrder
    questionsCount?: SortOrder
    timePerQuestion?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    maxPlayers?: SortOrder
    currentQuestion?: SortOrder
    questionsCount?: SortOrder
    timePerQuestion?: SortOrder
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type EnumGameTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameType | EnumGameTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameTypeWithAggregatesFilter<$PrismaModel> | $Enums.GameType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameTypeFilter<$PrismaModel>
    _max?: NestedEnumGameTypeFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GameParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    isBot?: SortOrder
    botName?: SortOrder
    score?: SortOrder
    currentQuestion?: SortOrder
    answers?: SortOrder
    isReady?: SortOrder
    isConnected?: SortOrder
    joinedAt?: SortOrder
  }

  export type GameParticipantAvgOrderByAggregateInput = {
    score?: SortOrder
    currentQuestion?: SortOrder
  }

  export type GameParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    isBot?: SortOrder
    botName?: SortOrder
    score?: SortOrder
    currentQuestion?: SortOrder
    isReady?: SortOrder
    isConnected?: SortOrder
    joinedAt?: SortOrder
  }

  export type GameParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    isBot?: SortOrder
    botName?: SortOrder
    score?: SortOrder
    currentQuestion?: SortOrder
    isReady?: SortOrder
    isConnected?: SortOrder
    joinedAt?: SortOrder
  }

  export type GameParticipantSumOrderByAggregateInput = {
    score?: SortOrder
    currentQuestion?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type GameQuestionGameIdOrderCompoundUniqueInput = {
    gameId: string
    order: number
  }

  export type GameQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
  }

  export type GameQuestionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type GameQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
  }

  export type GameQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
  }

  export type GameQuestionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type GameParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<GameParticipantCreateWithoutUserInput, GameParticipantUncheckedCreateWithoutUserInput> | GameParticipantCreateWithoutUserInput[] | GameParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameParticipantCreateOrConnectWithoutUserInput | GameParticipantCreateOrConnectWithoutUserInput[]
    createMany?: GameParticipantCreateManyUserInputEnvelope
    connect?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
  }

  export type GameParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameParticipantCreateWithoutUserInput, GameParticipantUncheckedCreateWithoutUserInput> | GameParticipantCreateWithoutUserInput[] | GameParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameParticipantCreateOrConnectWithoutUserInput | GameParticipantCreateOrConnectWithoutUserInput[]
    createMany?: GameParticipantCreateManyUserInputEnvelope
    connect?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GameParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameParticipantCreateWithoutUserInput, GameParticipantUncheckedCreateWithoutUserInput> | GameParticipantCreateWithoutUserInput[] | GameParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameParticipantCreateOrConnectWithoutUserInput | GameParticipantCreateOrConnectWithoutUserInput[]
    upsert?: GameParticipantUpsertWithWhereUniqueWithoutUserInput | GameParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameParticipantCreateManyUserInputEnvelope
    set?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    disconnect?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    delete?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    connect?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    update?: GameParticipantUpdateWithWhereUniqueWithoutUserInput | GameParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameParticipantUpdateManyWithWhereWithoutUserInput | GameParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameParticipantScalarWhereInput | GameParticipantScalarWhereInput[]
  }

  export type GameParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameParticipantCreateWithoutUserInput, GameParticipantUncheckedCreateWithoutUserInput> | GameParticipantCreateWithoutUserInput[] | GameParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameParticipantCreateOrConnectWithoutUserInput | GameParticipantCreateOrConnectWithoutUserInput[]
    upsert?: GameParticipantUpsertWithWhereUniqueWithoutUserInput | GameParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameParticipantCreateManyUserInputEnvelope
    set?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    disconnect?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    delete?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    connect?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    update?: GameParticipantUpdateWithWhereUniqueWithoutUserInput | GameParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameParticipantUpdateManyWithWhereWithoutUserInput | GameParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameParticipantScalarWhereInput | GameParticipantScalarWhereInput[]
  }

  export type GameQuestionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<GameQuestionCreateWithoutQuestionInput, GameQuestionUncheckedCreateWithoutQuestionInput> | GameQuestionCreateWithoutQuestionInput[] | GameQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: GameQuestionCreateOrConnectWithoutQuestionInput | GameQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: GameQuestionCreateManyQuestionInputEnvelope
    connect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
  }

  export type GameQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<GameQuestionCreateWithoutQuestionInput, GameQuestionUncheckedCreateWithoutQuestionInput> | GameQuestionCreateWithoutQuestionInput[] | GameQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: GameQuestionCreateOrConnectWithoutQuestionInput | GameQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: GameQuestionCreateManyQuestionInputEnvelope
    connect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
  }

  export type GameQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<GameQuestionCreateWithoutQuestionInput, GameQuestionUncheckedCreateWithoutQuestionInput> | GameQuestionCreateWithoutQuestionInput[] | GameQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: GameQuestionCreateOrConnectWithoutQuestionInput | GameQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: GameQuestionUpsertWithWhereUniqueWithoutQuestionInput | GameQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: GameQuestionCreateManyQuestionInputEnvelope
    set?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    disconnect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    delete?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    connect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    update?: GameQuestionUpdateWithWhereUniqueWithoutQuestionInput | GameQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: GameQuestionUpdateManyWithWhereWithoutQuestionInput | GameQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: GameQuestionScalarWhereInput | GameQuestionScalarWhereInput[]
  }

  export type GameQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<GameQuestionCreateWithoutQuestionInput, GameQuestionUncheckedCreateWithoutQuestionInput> | GameQuestionCreateWithoutQuestionInput[] | GameQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: GameQuestionCreateOrConnectWithoutQuestionInput | GameQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: GameQuestionUpsertWithWhereUniqueWithoutQuestionInput | GameQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: GameQuestionCreateManyQuestionInputEnvelope
    set?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    disconnect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    delete?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    connect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    update?: GameQuestionUpdateWithWhereUniqueWithoutQuestionInput | GameQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: GameQuestionUpdateManyWithWhereWithoutQuestionInput | GameQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: GameQuestionScalarWhereInput | GameQuestionScalarWhereInput[]
  }

  export type GameParticipantCreateNestedManyWithoutGameInput = {
    create?: XOR<GameParticipantCreateWithoutGameInput, GameParticipantUncheckedCreateWithoutGameInput> | GameParticipantCreateWithoutGameInput[] | GameParticipantUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameParticipantCreateOrConnectWithoutGameInput | GameParticipantCreateOrConnectWithoutGameInput[]
    createMany?: GameParticipantCreateManyGameInputEnvelope
    connect?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
  }

  export type GameQuestionCreateNestedManyWithoutGameInput = {
    create?: XOR<GameQuestionCreateWithoutGameInput, GameQuestionUncheckedCreateWithoutGameInput> | GameQuestionCreateWithoutGameInput[] | GameQuestionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameQuestionCreateOrConnectWithoutGameInput | GameQuestionCreateOrConnectWithoutGameInput[]
    createMany?: GameQuestionCreateManyGameInputEnvelope
    connect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
  }

  export type GameParticipantUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameParticipantCreateWithoutGameInput, GameParticipantUncheckedCreateWithoutGameInput> | GameParticipantCreateWithoutGameInput[] | GameParticipantUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameParticipantCreateOrConnectWithoutGameInput | GameParticipantCreateOrConnectWithoutGameInput[]
    createMany?: GameParticipantCreateManyGameInputEnvelope
    connect?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
  }

  export type GameQuestionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameQuestionCreateWithoutGameInput, GameQuestionUncheckedCreateWithoutGameInput> | GameQuestionCreateWithoutGameInput[] | GameQuestionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameQuestionCreateOrConnectWithoutGameInput | GameQuestionCreateOrConnectWithoutGameInput[]
    createMany?: GameQuestionCreateManyGameInputEnvelope
    connect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type EnumGameTypeFieldUpdateOperationsInput = {
    set?: $Enums.GameType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GameParticipantUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameParticipantCreateWithoutGameInput, GameParticipantUncheckedCreateWithoutGameInput> | GameParticipantCreateWithoutGameInput[] | GameParticipantUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameParticipantCreateOrConnectWithoutGameInput | GameParticipantCreateOrConnectWithoutGameInput[]
    upsert?: GameParticipantUpsertWithWhereUniqueWithoutGameInput | GameParticipantUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameParticipantCreateManyGameInputEnvelope
    set?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    disconnect?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    delete?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    connect?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    update?: GameParticipantUpdateWithWhereUniqueWithoutGameInput | GameParticipantUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameParticipantUpdateManyWithWhereWithoutGameInput | GameParticipantUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameParticipantScalarWhereInput | GameParticipantScalarWhereInput[]
  }

  export type GameQuestionUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameQuestionCreateWithoutGameInput, GameQuestionUncheckedCreateWithoutGameInput> | GameQuestionCreateWithoutGameInput[] | GameQuestionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameQuestionCreateOrConnectWithoutGameInput | GameQuestionCreateOrConnectWithoutGameInput[]
    upsert?: GameQuestionUpsertWithWhereUniqueWithoutGameInput | GameQuestionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameQuestionCreateManyGameInputEnvelope
    set?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    disconnect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    delete?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    connect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    update?: GameQuestionUpdateWithWhereUniqueWithoutGameInput | GameQuestionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameQuestionUpdateManyWithWhereWithoutGameInput | GameQuestionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameQuestionScalarWhereInput | GameQuestionScalarWhereInput[]
  }

  export type GameParticipantUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameParticipantCreateWithoutGameInput, GameParticipantUncheckedCreateWithoutGameInput> | GameParticipantCreateWithoutGameInput[] | GameParticipantUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameParticipantCreateOrConnectWithoutGameInput | GameParticipantCreateOrConnectWithoutGameInput[]
    upsert?: GameParticipantUpsertWithWhereUniqueWithoutGameInput | GameParticipantUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameParticipantCreateManyGameInputEnvelope
    set?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    disconnect?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    delete?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    connect?: GameParticipantWhereUniqueInput | GameParticipantWhereUniqueInput[]
    update?: GameParticipantUpdateWithWhereUniqueWithoutGameInput | GameParticipantUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameParticipantUpdateManyWithWhereWithoutGameInput | GameParticipantUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameParticipantScalarWhereInput | GameParticipantScalarWhereInput[]
  }

  export type GameQuestionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameQuestionCreateWithoutGameInput, GameQuestionUncheckedCreateWithoutGameInput> | GameQuestionCreateWithoutGameInput[] | GameQuestionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameQuestionCreateOrConnectWithoutGameInput | GameQuestionCreateOrConnectWithoutGameInput[]
    upsert?: GameQuestionUpsertWithWhereUniqueWithoutGameInput | GameQuestionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameQuestionCreateManyGameInputEnvelope
    set?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    disconnect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    delete?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    connect?: GameQuestionWhereUniqueInput | GameQuestionWhereUniqueInput[]
    update?: GameQuestionUpdateWithWhereUniqueWithoutGameInput | GameQuestionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameQuestionUpdateManyWithWhereWithoutGameInput | GameQuestionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameQuestionScalarWhereInput | GameQuestionScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<GameCreateWithoutParticipantsInput, GameUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: GameCreateOrConnectWithoutParticipantsInput
    connect?: GameWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGameParticipantsInput = {
    create?: XOR<UserCreateWithoutGameParticipantsInput, UserUncheckedCreateWithoutGameParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameParticipantsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GameUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<GameCreateWithoutParticipantsInput, GameUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: GameCreateOrConnectWithoutParticipantsInput
    upsert?: GameUpsertWithoutParticipantsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutParticipantsInput, GameUpdateWithoutParticipantsInput>, GameUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneWithoutGameParticipantsNestedInput = {
    create?: XOR<UserCreateWithoutGameParticipantsInput, UserUncheckedCreateWithoutGameParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameParticipantsInput
    upsert?: UserUpsertWithoutGameParticipantsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameParticipantsInput, UserUpdateWithoutGameParticipantsInput>, UserUncheckedUpdateWithoutGameParticipantsInput>
  }

  export type GameCreateNestedOneWithoutGameQuestionsInput = {
    create?: XOR<GameCreateWithoutGameQuestionsInput, GameUncheckedCreateWithoutGameQuestionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameQuestionsInput
    connect?: GameWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutGameQuestionsInput = {
    create?: XOR<QuestionCreateWithoutGameQuestionsInput, QuestionUncheckedCreateWithoutGameQuestionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutGameQuestionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutGameQuestionsNestedInput = {
    create?: XOR<GameCreateWithoutGameQuestionsInput, GameUncheckedCreateWithoutGameQuestionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameQuestionsInput
    upsert?: GameUpsertWithoutGameQuestionsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGameQuestionsInput, GameUpdateWithoutGameQuestionsInput>, GameUncheckedUpdateWithoutGameQuestionsInput>
  }

  export type QuestionUpdateOneRequiredWithoutGameQuestionsNestedInput = {
    create?: XOR<QuestionCreateWithoutGameQuestionsInput, QuestionUncheckedCreateWithoutGameQuestionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutGameQuestionsInput
    upsert?: QuestionUpsertWithoutGameQuestionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutGameQuestionsInput, QuestionUpdateWithoutGameQuestionsInput>, QuestionUncheckedUpdateWithoutGameQuestionsInput>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedEnumGameTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameType | EnumGameTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameTypeFilter<$PrismaModel> | $Enums.GameType
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

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type NestedEnumGameTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameType | EnumGameTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameTypeWithAggregatesFilter<$PrismaModel> | $Enums.GameType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameTypeFilter<$PrismaModel>
    _max?: NestedEnumGameTypeFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GameParticipantCreateWithoutUserInput = {
    id?: string
    isBot?: boolean
    botName?: string | null
    score?: number
    currentQuestion?: number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: boolean
    isConnected?: boolean
    joinedAt?: Date | string
    game: GameCreateNestedOneWithoutParticipantsInput
  }

  export type GameParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    gameId: string
    isBot?: boolean
    botName?: string | null
    score?: number
    currentQuestion?: number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: boolean
    isConnected?: boolean
    joinedAt?: Date | string
  }

  export type GameParticipantCreateOrConnectWithoutUserInput = {
    where: GameParticipantWhereUniqueInput
    create: XOR<GameParticipantCreateWithoutUserInput, GameParticipantUncheckedCreateWithoutUserInput>
  }

  export type GameParticipantCreateManyUserInputEnvelope = {
    data: GameParticipantCreateManyUserInput | GameParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: GameParticipantWhereUniqueInput
    update: XOR<GameParticipantUpdateWithoutUserInput, GameParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<GameParticipantCreateWithoutUserInput, GameParticipantUncheckedCreateWithoutUserInput>
  }

  export type GameParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: GameParticipantWhereUniqueInput
    data: XOR<GameParticipantUpdateWithoutUserInput, GameParticipantUncheckedUpdateWithoutUserInput>
  }

  export type GameParticipantUpdateManyWithWhereWithoutUserInput = {
    where: GameParticipantScalarWhereInput
    data: XOR<GameParticipantUpdateManyMutationInput, GameParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type GameParticipantScalarWhereInput = {
    AND?: GameParticipantScalarWhereInput | GameParticipantScalarWhereInput[]
    OR?: GameParticipantScalarWhereInput[]
    NOT?: GameParticipantScalarWhereInput | GameParticipantScalarWhereInput[]
    id?: StringFilter<"GameParticipant"> | string
    gameId?: StringFilter<"GameParticipant"> | string
    userId?: StringNullableFilter<"GameParticipant"> | string | null
    isBot?: BoolFilter<"GameParticipant"> | boolean
    botName?: StringNullableFilter<"GameParticipant"> | string | null
    score?: IntFilter<"GameParticipant"> | number
    currentQuestion?: IntFilter<"GameParticipant"> | number
    answers?: JsonFilter<"GameParticipant">
    isReady?: BoolFilter<"GameParticipant"> | boolean
    isConnected?: BoolFilter<"GameParticipant"> | boolean
    joinedAt?: DateTimeFilter<"GameParticipant"> | Date | string
  }

  export type GameQuestionCreateWithoutQuestionInput = {
    id?: string
    order: number
    game: GameCreateNestedOneWithoutGameQuestionsInput
  }

  export type GameQuestionUncheckedCreateWithoutQuestionInput = {
    id?: string
    gameId: string
    order: number
  }

  export type GameQuestionCreateOrConnectWithoutQuestionInput = {
    where: GameQuestionWhereUniqueInput
    create: XOR<GameQuestionCreateWithoutQuestionInput, GameQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type GameQuestionCreateManyQuestionInputEnvelope = {
    data: GameQuestionCreateManyQuestionInput | GameQuestionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type GameQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: GameQuestionWhereUniqueInput
    update: XOR<GameQuestionUpdateWithoutQuestionInput, GameQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<GameQuestionCreateWithoutQuestionInput, GameQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type GameQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: GameQuestionWhereUniqueInput
    data: XOR<GameQuestionUpdateWithoutQuestionInput, GameQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type GameQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: GameQuestionScalarWhereInput
    data: XOR<GameQuestionUpdateManyMutationInput, GameQuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type GameQuestionScalarWhereInput = {
    AND?: GameQuestionScalarWhereInput | GameQuestionScalarWhereInput[]
    OR?: GameQuestionScalarWhereInput[]
    NOT?: GameQuestionScalarWhereInput | GameQuestionScalarWhereInput[]
    id?: StringFilter<"GameQuestion"> | string
    gameId?: StringFilter<"GameQuestion"> | string
    questionId?: StringFilter<"GameQuestion"> | string
    order?: IntFilter<"GameQuestion"> | number
  }

  export type GameParticipantCreateWithoutGameInput = {
    id?: string
    isBot?: boolean
    botName?: string | null
    score?: number
    currentQuestion?: number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: boolean
    isConnected?: boolean
    joinedAt?: Date | string
    user?: UserCreateNestedOneWithoutGameParticipantsInput
  }

  export type GameParticipantUncheckedCreateWithoutGameInput = {
    id?: string
    userId?: string | null
    isBot?: boolean
    botName?: string | null
    score?: number
    currentQuestion?: number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: boolean
    isConnected?: boolean
    joinedAt?: Date | string
  }

  export type GameParticipantCreateOrConnectWithoutGameInput = {
    where: GameParticipantWhereUniqueInput
    create: XOR<GameParticipantCreateWithoutGameInput, GameParticipantUncheckedCreateWithoutGameInput>
  }

  export type GameParticipantCreateManyGameInputEnvelope = {
    data: GameParticipantCreateManyGameInput | GameParticipantCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GameQuestionCreateWithoutGameInput = {
    id?: string
    order: number
    question: QuestionCreateNestedOneWithoutGameQuestionsInput
  }

  export type GameQuestionUncheckedCreateWithoutGameInput = {
    id?: string
    questionId: string
    order: number
  }

  export type GameQuestionCreateOrConnectWithoutGameInput = {
    where: GameQuestionWhereUniqueInput
    create: XOR<GameQuestionCreateWithoutGameInput, GameQuestionUncheckedCreateWithoutGameInput>
  }

  export type GameQuestionCreateManyGameInputEnvelope = {
    data: GameQuestionCreateManyGameInput | GameQuestionCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GameParticipantUpsertWithWhereUniqueWithoutGameInput = {
    where: GameParticipantWhereUniqueInput
    update: XOR<GameParticipantUpdateWithoutGameInput, GameParticipantUncheckedUpdateWithoutGameInput>
    create: XOR<GameParticipantCreateWithoutGameInput, GameParticipantUncheckedCreateWithoutGameInput>
  }

  export type GameParticipantUpdateWithWhereUniqueWithoutGameInput = {
    where: GameParticipantWhereUniqueInput
    data: XOR<GameParticipantUpdateWithoutGameInput, GameParticipantUncheckedUpdateWithoutGameInput>
  }

  export type GameParticipantUpdateManyWithWhereWithoutGameInput = {
    where: GameParticipantScalarWhereInput
    data: XOR<GameParticipantUpdateManyMutationInput, GameParticipantUncheckedUpdateManyWithoutGameInput>
  }

  export type GameQuestionUpsertWithWhereUniqueWithoutGameInput = {
    where: GameQuestionWhereUniqueInput
    update: XOR<GameQuestionUpdateWithoutGameInput, GameQuestionUncheckedUpdateWithoutGameInput>
    create: XOR<GameQuestionCreateWithoutGameInput, GameQuestionUncheckedCreateWithoutGameInput>
  }

  export type GameQuestionUpdateWithWhereUniqueWithoutGameInput = {
    where: GameQuestionWhereUniqueInput
    data: XOR<GameQuestionUpdateWithoutGameInput, GameQuestionUncheckedUpdateWithoutGameInput>
  }

  export type GameQuestionUpdateManyWithWhereWithoutGameInput = {
    where: GameQuestionScalarWhereInput
    data: XOR<GameQuestionUpdateManyMutationInput, GameQuestionUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCreateWithoutParticipantsInput = {
    id?: string
    status?: $Enums.GameStatus
    gameType?: $Enums.GameType
    maxPlayers?: number
    currentQuestion?: number
    questionsCount?: number
    timePerQuestion?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameQuestions?: GameQuestionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutParticipantsInput = {
    id?: string
    status?: $Enums.GameStatus
    gameType?: $Enums.GameType
    maxPlayers?: number
    currentQuestion?: number
    questionsCount?: number
    timePerQuestion?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameQuestions?: GameQuestionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutParticipantsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutParticipantsInput, GameUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutGameParticipantsInput = {
    id?: string
    supabaseId: string
    email: string
    name?: string | null
    avatar?: string | null
    gamesPlayed?: number
    gamesWon?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutGameParticipantsInput = {
    id?: string
    supabaseId: string
    email: string
    name?: string | null
    avatar?: string | null
    gamesPlayed?: number
    gamesWon?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutGameParticipantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameParticipantsInput, UserUncheckedCreateWithoutGameParticipantsInput>
  }

  export type GameUpsertWithoutParticipantsInput = {
    update: XOR<GameUpdateWithoutParticipantsInput, GameUncheckedUpdateWithoutParticipantsInput>
    create: XOR<GameCreateWithoutParticipantsInput, GameUncheckedCreateWithoutParticipantsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutParticipantsInput, GameUncheckedUpdateWithoutParticipantsInput>
  }

  export type GameUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    maxPlayers?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameQuestions?: GameQuestionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    maxPlayers?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameQuestions?: GameQuestionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserUpsertWithoutGameParticipantsInput = {
    update: XOR<UserUpdateWithoutGameParticipantsInput, UserUncheckedUpdateWithoutGameParticipantsInput>
    create: XOR<UserCreateWithoutGameParticipantsInput, UserUncheckedCreateWithoutGameParticipantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameParticipantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameParticipantsInput, UserUncheckedUpdateWithoutGameParticipantsInput>
  }

  export type UserUpdateWithoutGameParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesWon?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutGameParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesWon?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateWithoutGameQuestionsInput = {
    id?: string
    status?: $Enums.GameStatus
    gameType?: $Enums.GameType
    maxPlayers?: number
    currentQuestion?: number
    questionsCount?: number
    timePerQuestion?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: GameParticipantCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutGameQuestionsInput = {
    id?: string
    status?: $Enums.GameStatus
    gameType?: $Enums.GameType
    maxPlayers?: number
    currentQuestion?: number
    questionsCount?: number
    timePerQuestion?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: GameParticipantUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutGameQuestionsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGameQuestionsInput, GameUncheckedCreateWithoutGameQuestionsInput>
  }

  export type QuestionCreateWithoutGameQuestionsInput = {
    id?: string
    text: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswerIdx: number
    difficulty?: string
    category?: string
    language?: string
    targetLanguage?: string
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutGameQuestionsInput = {
    id?: string
    text: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswerIdx: number
    difficulty?: string
    category?: string
    language?: string
    targetLanguage?: string
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutGameQuestionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutGameQuestionsInput, QuestionUncheckedCreateWithoutGameQuestionsInput>
  }

  export type GameUpsertWithoutGameQuestionsInput = {
    update: XOR<GameUpdateWithoutGameQuestionsInput, GameUncheckedUpdateWithoutGameQuestionsInput>
    create: XOR<GameCreateWithoutGameQuestionsInput, GameUncheckedCreateWithoutGameQuestionsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGameQuestionsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGameQuestionsInput, GameUncheckedUpdateWithoutGameQuestionsInput>
  }

  export type GameUpdateWithoutGameQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    maxPlayers?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: GameParticipantUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutGameQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    maxPlayers?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    questionsCount?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: GameParticipantUncheckedUpdateManyWithoutGameNestedInput
  }

  export type QuestionUpsertWithoutGameQuestionsInput = {
    update: XOR<QuestionUpdateWithoutGameQuestionsInput, QuestionUncheckedUpdateWithoutGameQuestionsInput>
    create: XOR<QuestionCreateWithoutGameQuestionsInput, QuestionUncheckedCreateWithoutGameQuestionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutGameQuestionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutGameQuestionsInput, QuestionUncheckedUpdateWithoutGameQuestionsInput>
  }

  export type QuestionUpdateWithoutGameQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswerIdx?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    targetLanguage?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutGameQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswerIdx?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    targetLanguage?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameParticipantCreateManyUserInput = {
    id?: string
    gameId: string
    isBot?: boolean
    botName?: string | null
    score?: number
    currentQuestion?: number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: boolean
    isConnected?: boolean
    joinedAt?: Date | string
  }

  export type GameParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isBot?: BoolFieldUpdateOperationsInput | boolean
    botName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type GameParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    isBot?: BoolFieldUpdateOperationsInput | boolean
    botName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    isBot?: BoolFieldUpdateOperationsInput | boolean
    botName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameQuestionCreateManyQuestionInput = {
    id?: string
    gameId: string
    order: number
  }

  export type GameQuestionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutGameQuestionsNestedInput
  }

  export type GameQuestionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type GameQuestionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type GameParticipantCreateManyGameInput = {
    id?: string
    userId?: string | null
    isBot?: boolean
    botName?: string | null
    score?: number
    currentQuestion?: number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: boolean
    isConnected?: boolean
    joinedAt?: Date | string
  }

  export type GameQuestionCreateManyGameInput = {
    id?: string
    questionId: string
    order: number
  }

  export type GameParticipantUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    isBot?: BoolFieldUpdateOperationsInput | boolean
    botName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutGameParticipantsNestedInput
  }

  export type GameParticipantUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isBot?: BoolFieldUpdateOperationsInput | boolean
    botName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameParticipantUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isBot?: BoolFieldUpdateOperationsInput | boolean
    botName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    currentQuestion?: IntFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameQuestionUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutGameQuestionsNestedInput
  }

  export type GameQuestionUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type GameQuestionUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
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
/**
 * The values in this interface are values that need to be populated in order for the integration
 * to work. They should be included as environment variables in the environment that the executable
 * is running on. 
 */
interface CollibraEnvironmentVariables {
  /**
   * The description of the community as it will be described with the communityName
   * @default Experian Community
   */
  COLLIBRA_COMMUNITY_DESCRIPTION?: string;

  /**
   * The name of the community that will be created or updated in Collibra Data Governance Center
   * @default Experian Description
   */
  COLLIBRA_COMMUNITY_NAME?: string;

  /**
   * The URL of the Collibra environment.
   *
   * @example
   * `your-env.collibra.com`
   */
  COLLIBRA_URL: string;

  /**
   * Controls the logging level in the console. Value can be "fatal", "error", "warning", "info",
   * "info", "debug" 
   * @default 0 - There will be no logging;
   */
  COLLIBRA_DEBUG_LEVEL?: string;

  /**
   * The username used to sign into the [[COLLIBRA_URL]] specified.
   * 
   * @example
   * `username`
   */
  COLLIBRA_USERNAME: string;

  /**
   * The password used to sign into the [[COLLIBRA_URL]] specified.
   * 
   * @example
   * `onetwothree`
   */
  COLLIBRA_PASSWORD: string;

  /**
   * The name of the Governance Asset Domain in the specified [[COLLIBRA_COMMUNITY_NAME]].
   * @default Data Quality Results
   */
  COLLIBRA_GOVERNANCE_NAME?: string;

  /**
   * The description of the Governance Asset Domain named [[COLLIBRA_GOVERNANCE_NAME]].
   * @default Experian data quality
   */
  COLLIBRA_GOVERNANCE_DESCRIPTION?: string;

  /**
   * The name of the Rulebook in the specified [[COLLIBRA_COMMUNITY_NAME]].
   * @default Data Quality Rules
   */
  COLLIBRA_RULEBOOK_NAME?: string;

  /**
   * The description of the Rulebook named [[COLLIBRA_RULEBOOK_NAME]].
   * @default Experian data quality rules
   */
  COLLIBRA_RULEBOOK_DESCRIPTION?: string;

  /**
   * The name of the Data Asset Domain in the specified [[COLLIBRA_COMMUNITY_NAME]].
   * @default Data Asset Domain
   */
  COLLIBRA_DATA_ASSET_NAME?: string;

  /** 
   * The description of the Data Asset Domain named [[COLLIBRA_DATA_ASSET_NAME]].
   * @default Assets from database
   */
  COLLIBRA_DATA_ASSET_DESCRIPTION?: string;

  /**
   * This must be set to true if there are preexisting communities in your Collibra instance
   * @default false
   */
  COLLIBRA_MULTI_COMMUNITY?: boolean;

  /**
   * In Pandora, by default metadata for additional Collibra information is stored in this field
   * in the Pandora or Data Studio rule. For Pandora this metadata would normally be stored in
   * the "Description" field and in Data Studio the "Rule Name".
   * @default Description
   */
  COLLIBRA_ATTRIBUTE_KEY?: string;

  /**
   * The URL of the HTTP-ODBC connector for both Data Studio and Pandora
   *
   * @example
   * ```
   * http://your-domain:odbc-port
   * ```
   */
  HTTP_ODBC_URL: string;

  /**
   * The SQL Query that's used to get the rules from Data Studio or Pandora
   *
   * @example
   * ```sql
   * Linux: 'SELECT * FROM \"RULES\"`
   * Windows: SELECT * FROM RULES
   * ```
   */
  HTTP_ODBC_RULE_QUERY: string;

  /**
   * The SQL Query that's used to get the profile from Data Studio or Pandora
   *
   * @example
   * ```sql
   * Linux: 'SELECT * FROM \"PROFILES\"`
   * Windows: SELECT * FROM PROFILES
   * ```
   */
  HTTP_ODBC_PROFILE_QUERY: string;
};

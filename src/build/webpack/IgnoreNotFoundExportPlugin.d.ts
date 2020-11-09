declare class IgnoreNotFoundExportPlugin {
  /**
   * interface names that generate warnings and should be ignored
   */
  constructor(interfacesToIgnore: string[]);
  /**
   * Ignore ALL interface export warnings
   */
  constructor();
}
export = IgnoreNotFoundExportPlugin;

const injektor =
  ({ onCall }: { onCall?: (p: { args: unknown }) => void } = {}) =>
  <
    U extends (deps: D) => (...args: A) => any,
    D extends any,
    A extends Array<any>
  >(
    deps: D,
    usecase: U
  ) => {
    return [
      (...args: Parameters<ReturnType<U>>) => {
        onCall?.({ args });
        return usecase(deps)(...(args ?? [])) as ReturnType<U>;
      },
      usecase,
    ] as const;
  };

const injekt = injektor();

export { injektor, injekt };

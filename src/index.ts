type DefaultContainerType = Record<string, unknown>;

const createInjektContainer = <ContainerType extends DefaultContainerType>(
  dependencies: ContainerType = {} as ContainerType
) => {
  let container = { ...dependencies };
  return {
    set(
      key: keyof ContainerType,
      dependency: ContainerType[keyof ContainerType]
    ) {
      container[key] = dependency;
    },
    get<Type, KeyType extends keyof ContainerType = string>(key: KeyType) {
      return container[key] as Type extends ContainerType[KeyType]
        ? Type
        : ContainerType[KeyType];
    },
    reset: () => {
      container = { ...dependencies };
    },
    list() {
      return Object.keys(container) as (keyof ContainerType)[];
    },
  };
};

export { createInjektContainer };

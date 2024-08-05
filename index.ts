import { DependencyList, useMemo } from 'react'

// hooks

export const useDependencies = (callback: () => void, dependencies: DependencyList = []): void => {
  useMemo(callback, dependencies)
}

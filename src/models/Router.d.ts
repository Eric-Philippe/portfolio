export default interface RouterProps {
  setIsDev: (isDev: boolean) => void;
  isDev?: boolean;
}

export interface RouterFocusProps {
  setFocus: (focus: number | null) => void;
}

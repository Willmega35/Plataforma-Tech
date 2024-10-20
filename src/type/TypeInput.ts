export interface TypeInput {
  children:     string,
  type:         Types,
  placeholder:  string,
}

export enum Types {
  TEXT="text",
  EMAIL="email",
  NUMBER="number",
  DATE="date"
}
